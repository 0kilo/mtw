/**
 * Timelike Geodesics (Particle Trajectories)
 *
 * Computes particle trajectories in curved spacetime
 * Timelike geodesics satisfy: g_ij dx^i dx^j < 0 (proper time)
 */

import { integrateGeodesic, integrateGeodesics, generateDirections } from './integrator'

/**
 * Compute timelike geodesic (particle path)
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting point [r, theta, phi]
 * @param {Array<number>} velocity - initial coordinate velocity
 * @param {Object} options - integration options
 * @returns {Array<Array<number>>} path of timelike geodesic
 */
export function timelikeGeodesic(metricFn, origin, velocity, options = {}) {
  const defaultOptions = {
    maxSteps: 1000,
    dt: 0.01,
    minRadius: 0.5, // Don't go too close to singularity
    maxRadius: 30,
  }

  const opts = { ...defaultOptions, ...options }

  return integrateGeodesic(metricFn, origin, velocity, opts.maxSteps, opts.dt, opts)
}

/**
 * Compute multiple timelike geodesics (particle trajectories)
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting point
 * @param {number} nPaths - number of trajectories
 * @param {string} pattern - 'radial', 'spherical', 'cone'
 * @param {number} speed - initial speed (fraction of c)
 * @param {Object} options - integration options
 * @returns {Array<Array<Array<number>>>} array of geodesic paths
 */
export function timelikeGeodesics(
  metricFn,
  origin,
  nPaths = 8,
  pattern = 'radial',
  speed = 0.5,
  options = {}
) {
  const directions = generateDirections(nPaths, pattern)

  const defaultOptions = {
    maxSteps: 1000,
    dt: 0.01,
    minRadius: 0.5,
    maxRadius: 30,
  }

  const opts = { ...defaultOptions, ...options }

  // Scale directions by speed
  const velocities = directions.map(dir => dir.map(d => d * speed))

  return integrateGeodesics(metricFn, origin, velocities, opts.maxSteps, opts.dt, opts)
}

/**
 * Generate circular orbit initial conditions
 * For Schwarzschild: stable at r > 6M, circular at r = 3M (unstable)
 *
 * @param {Function} metricFn - metric tensor function
 * @param {number} radius - orbital radius
 * @param {string} direction - 'prograde' or 'retrograde'
 * @returns {Array<number>} velocity vector [v_r, v_theta, v_phi]
 */
export function circularOrbit(metricFn, radius, direction = 'prograde') {
  // For circular orbit in Schwarzschild:
  // v_phi = sqrt(M/r) for prograde
  // v_phi = -sqrt(M/r) for retrograde

  const M = 1 // mass parameter (related to rs = 2M)

  // Angular velocity for circular orbit
  const omega = direction === 'prograde'
    ? Math.sqrt(M / radius ** 3)
    : -Math.sqrt(M / radius ** 3)

  // Convert to coordinate velocity
  // In equatorial plane (theta = pi/2)
  const vPhi = radius * omega

  return [0, 0, vPhi]
}

/**
 * Compute bound orbit (elliptical/circular)
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting position [r, pi/2, phi]
 * @param {number} energy - specific energy E
 * @param {number} angularMomentum - specific angular momentum L
 * @param {Object} options - integration options
 * @returns {Array<Array<number>>} orbital path
 */
export function boundOrbit(metricFn, origin, energy, angularMomentum, options = {}) {
  // For bound orbits in Schwarzschild, we need to set initial conditions
  // that correspond to the given energy and angular momentum

  const r = origin[0]

  // Initial radial velocity (for elliptical orbit)
  // E² = V_eff(r) + (dr/dtau)² where V_eff is effective potential
  const M = 1
  const V_eff = (1 - 2 * M / r) * (1 + angularMomentum ** 2 / r ** 2)
  const dr_dtau = Math.sqrt(Math.max(0, energy ** 2 - V_eff))

  const defaultOptions = {
    maxSteps: 2000,
    dt: 0.01,
    minRadius: 2.1, // Outside event horizon
    maxRadius: 20,
  }

  const opts = { ...defaultOptions, ...options }

  // Initial velocity
  const v0 = [
    dr_dtau,           // radial velocity
    0,                 // theta velocity (equatorial)
    angularMomentum / r ** 2  // phi velocity
  ]

  return integrateGeodesic(metricFn, origin, v0, opts.maxSteps, opts.dt, opts)
}

/**
 * Compute escape trajectory
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} origin - starting position
 * @param {number} escapeVelocity - initial outward velocity
 * @param {Object} options - integration options
 * @returns {Array<Array<number>>} escape path
 */
export function escapeTrajectory(metricFn, origin, escapeVelocity = 1, options = {}) {
  const defaultOptions = {
    maxSteps: 1000,
    dt: 0.01,
    minRadius: 0.5,
    maxRadius: 50,
  }

  const opts = { ...defaultOptions, ...options }

  // Initial velocity pointing outward
  const r = Math.sqrt(origin[0] ** 2 + origin[1] ** 2 + origin[2] ** 2)
  const v0 = origin.map(x => (x / r) * escapeVelocity)

  return integrateGeodesic(metricFn, origin, v0, opts.maxSteps, opts.dt, opts)
}