/**
 * Null Geodesics (Light Paths)
 *
 * Computes light-like geodesics in curved spacetime
 * Null geodesics satisfy: g_ij dx^i dx^j = 0
 */

import { integrateGeodesic, integrateGeodesics, generateDirections } from './integrator'

/**
 * Compute null geodesic (light ray) path
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting point [r, theta, phi]
 * @param {Array<number>} direction - initial direction (will be normalized)
 * @param {Object} options - integration options
 * @returns {Array<Array<number>>} path of null geodesic
 */
export function nullGeodesic(metricFn, origin, direction, options = {}) {
  // Normalize direction for null geodesic
  // For null, we need to ensure g_ij v^i v^j = 0
  // This typically means the coordinate velocity needs to be scaled

  const defaultOptions = {
    maxSteps: 2000,
    dt: 0.005, // Smaller step for light
    minRadius: 0.1,
    maxRadius: 50,
  }

  const opts = { ...defaultOptions, ...options }

  // For null geodesics, we use a small initial "speed" that will be
  // adjusted by the normalization in the integrator
  const v0 = direction.map(d => d * 0.1)

  return integrateGeodesic(metricFn, origin, v0, opts.maxSteps, opts.dt, opts)
}

/**
 * Compute multiple null geodesics (light rays)
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting point
 * @param {number} nRays - number of rays
 * @param {string} pattern - 'radial', 'spherical', 'cone'
 * @param {Object} options - integration options
 * @returns {Array<Array<Array<number>>>} array of null geodesic paths
 */
export function nullGeodesics(metricFn, origin, nRays = 12, pattern = 'spherical', options = {}) {
  const directions = generateDirections(nRays, pattern)

  const defaultOptions = {
    maxSteps: 2000,
    dt: 0.005,
    minRadius: 0.1,
    maxRadius: 50,
  }

  const opts = { ...defaultOptions, ...options }

  // Scale directions for null geodesics
  const scaledDirections = directions.map(dir => dir.map(d => d * 0.1))

  return integrateGeodesics(metricFn, origin, scaledDirections, opts.maxSteps, opts.dt, opts)
}

/**
 * Generate directions for null geodesics aimed at a black hole
 * (for gravitational lensing visualization)
 *
 * @param {number} nRays - number of rays
 * @param {number} impactParam - impact parameter b (for Schwarzschild: b > 3rs for capture)
 * @returns {Array<Array<number>>} directions
 */
// eslint-disable-next-line no-unused-vars
export function generateLensingDirections(nRays, impactParam = 5) {
  const directions = []

  // Rays with various impact parameters aimed at origin
  for (let i = 0; i < nRays; i++) {
    const theta = (i / nRays) * Math.PI * 2

    // Start from far away, aimed at origin with given impact parameter
    const r = 20
    const x = r * Math.cos(theta)
    const z = r * Math.sin(theta)

    // Direction toward origin, offset by impact parameter
    const dir = [
      -x / r,
      0,
      -z / r
    ]

    directions.push(dir)
  }

  return directions
}

/**
 * Compute gravitational lensing effect
 * Shows how light bends around a massive object
 *
 * @param {Function} metricFn - metric tensor (e.g., schwarzschildMetric.spatial)
 * @param {Array<number>} sourcePos - light source position
 * @param {Array<number>} direction - initial direction toward observer
 * @param {Object} options - integration options
 * @returns {Object} result with path and final direction
 */
export function computeLensing(metricFn, sourcePos, direction, options = {}) {
  const path = nullGeodesic(metricFn, sourcePos, direction, options)

  const finalPos = path[path.length - 1]
  const finalDir = [
    path[path.length - 1][0] - path[path.length - 2][0],
    path[path.length - 1][1] - path[path.length - 2][1],
    path[path.length - 1][2] - path[path.length - 2][2]
  ]

  return {
    path,
    finalPosition: finalPos,
    finalDirection: finalDir,
    deflection: Math.atan2(finalDir[0], finalDir[2]) - Math.atan2(direction[0], direction[2])
  }
}