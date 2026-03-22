/**
 * Geodesic Integrator
 *
 * Numerically integrates the geodesic equation:
 * d²x^k/ds² + Γ^k_ij (dx^i/ds)(dx^j/ds) = 0
 *
 * Uses a 4th-order Runge-Kutta method for better accuracy
 */

import { christoffel, geodesicAcceleration } from '../metric/christoffel'

/**
 * Integrate a geodesic path
 *
 * @param {Function} metricFn - metric tensor function g_ij(u,v,w)
 * @param {Array<number>} x0 - initial position [u, v, w]
 * @param {Array<number>} v0 - initial velocity [du/ds, dv/ds, dw/ds]
 * @param {number} maxSteps - maximum integration steps
 * @param {number} dt - step size (affine parameter)
 * @param {Object} options - integration options
 * @returns {Array<Array<number>>} path as array of points
 */
export function integrateGeodesic(
  metricFn,
  x0,
  v0,
  maxSteps = 1000,
  dt = 0.01,
  options = {}
) {
  const {
    minRadius = 0,      // Stop if r < minRadius (singularity)
    maxRadius = 100,    // Stop if r > maxRadius (escaped)
    tolerance = 1e-6,  // Stop if velocity too small
  } = options

  const path = [x0]
  let x = [...x0]
  let v = [...v0]

  for (let step = 0; step < maxSteps; step++) {
    // Compute Christoffel symbols at current position
    const Gamma = christoffel(metricFn, x)

    // Compute acceleration from geodesic equation
    const a = geodesicAcceleration(Gamma, v)

    // 4th-order Runge-Kutta integration
    // k1
    const k1x = [...v]
    const k1v = [...a]

    // k2
    const x2 = x.map((xi, i) => xi + 0.5 * dt * k1x[i])
    const v2 = v.map((vi, i) => vi + 0.5 * dt * k1v[i])
    const Gamma2 = christoffel(metricFn, x2)
    const a2 = geodesicAcceleration(Gamma2, v2)
    const k2x = [...v2]
    const k2v = [...a2]

    // k3
    const x3 = x.map((xi, i) => xi + 0.5 * dt * k2x[i])
    const v3 = v.map((vi, i) => vi + 0.5 * dt * k2v[i])
    const Gamma3 = christoffel(metricFn, x3)
    const a3 = geodesicAcceleration(Gamma3, v3)
    const k3x = [...v3]
    const k3v = [...a3]

    // k4
    const x4 = x.map((xi, i) => xi + dt * k3x[i])
    const v4 = v.map((vi, i) => vi + dt * k3v[i])
    const Gamma4 = christoffel(metricFn, x4)
    const a4 = geodesicAcceleration(Gamma4, v4)
    const k4x = [...v4]
    const k4v = [...a4]

    // Update position and velocity
    for (let i = 0; i < 3; i++) {
      x[i] += (dt / 6) * (k1x[i] + 2 * k2x[i] + 2 * k3x[i] + k4x[i])
      v[i] += (dt / 6) * (k1v[i] + 2 * k2v[i] + 2 * k3v[i] + k4v[i])
    }

    path.push([...x])

    // Check termination conditions
    const r = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2])

    // Hit singularity or escaped
    if (r < minRadius || r > maxRadius) break

    // Velocity too small (trapped)
    const speed = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])
    if (speed < tolerance) break
  }

  return path
}

/**
 * Generate initial directions for geodesic rays
 *
 * @param {number} nRays - number of rays to generate
 * @param {string} pattern - 'radial', 'spherical', 'cone'
 * @param {number} angle - for cone pattern, half-opening angle
 * @returns {Array<Array<number>>} array of direction vectors
 */
export function generateDirections(nRays, pattern = 'spherical', angle = 0) {
  const directions = []

  if (pattern === 'radial') {
    // Outward radial directions
    for (let i = 0; i < nRays; i++) {
      const theta = (i / nRays) * Math.PI * 2
      directions.push([Math.cos(theta), Math.sin(theta), 0])
    }
  } else if (pattern === 'spherical') {
    // Evenly distributed on sphere (Fibonacci sphere)
    const phi = Math.PI * (3 - Math.sqrt(5)) // golden angle

    for (let i = 0; i < nRays; i++) {
      const y = 1 - (i / (nRays - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = phi * i

      directions.push([
        radius * Math.cos(theta),
        y,
        radius * Math.sin(theta)
      ])
    }
  } else if (pattern === 'cone') {
    // Cone of directions around z-axis
    for (let i = 0; i < nRays; i++) {
      const theta = (i / nRays) * Math.PI * 2
      const sinAngle = Math.sin(angle)
      const cosAngle = Math.cos(angle)

      directions.push([
        sinAngle * Math.cos(theta),
        cosAngle,
        sinAngle * Math.sin(theta)
      ])
    }
  }

  return directions
}

/**
 * Integrate multiple geodesics from a common origin
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting point [u, v, w]
 * @param {Array<Array<number>>} directions - array of direction vectors
 * @param {number} maxSteps - max steps per geodesic
 * @param {number} dt - step size
 * @param {Object} options - integration options
 * @returns {Array<Array<Array<number>>>} array of paths
 */
export function integrateGeodesics(
  metricFn,
  origin,
  directions,
  maxSteps = 1000,
  dt = 0.01,
  options = {}
) {
  return directions.map(dir => {
    // Normalize direction
    const len = Math.sqrt(dir[0] ** 2 + dir[1] ** 2 + dir[2] ** 2)
    const v0 = dir.map(d => d / len)

    return integrateGeodesic(metricFn, origin, v0, maxSteps, dt, options)
  })
}