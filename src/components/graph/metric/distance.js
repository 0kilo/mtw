/**
 * Proper distance calculations along curves in curved spacetime
 */

import { properLength } from '../utils/tensor'

/**
 * Compute proper distance between two nearby points using metric
 * ds² = g_ij dx^i dx^j
 *
 * @param {Function} metricFn - metric tensor g_ij(u,v,w) as function
 * @param {Array<number>} x1 - starting point [u, v, w]
 * @param {Array<number>} x2 - ending point [u, v, w]
 * @returns {number} proper distance
 */
export function properDistance(metricFn, x1, x2) {
  const dx = [
    x2[0] - x1[0],
    x2[1] - x1[1],
    x2[2] - x1[2]
  ]

  // Get metric at midpoint
  const mid = [(x1[0] + x2[0]) / 2, (x1[1] + x2[1]) / 2, (x1[2] + x2[2]) / 2]
  const g = metricFn(...mid)

  return properLength(g, dx)
}

/**
 * Integrate proper distance along a path
 * Uses Simpson's rule for numerical integration
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<Array<number>>} path - array of points [[u,v,w], ...]
 * @returns {number} total proper distance
 */
export function integrateProperDistance(metricFn, path) {
  if (path.length < 2) return 0

  let totalDistance = 0

  for (let i = 1; i < path.length; i++) {
    totalDistance += properDistance(metricFn, path[i - 1], path[i])
  }

  return totalDistance
}

/**
 * Generate equidistant points along a curve in proper distance
 * Uses adaptive stepping to maintain proper distance spacing
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<Array<number>>} path - dense path points [[u,v,w], ...]
 * @param {number} spacing - desired proper distance between points
 * @returns {Array<Array<number>>} equidistant points
 */
export function equidistantPoints(metricFn, path, spacing = 0.1) {
  if (path.length < 2) return path

  const result = [path[0]]
  let accumulatedDist = 0
  let lastPoint = path[0]

  for (let i = 1; i < path.length; i++) {
    const segmentDist = properDistance(metricFn, lastPoint, path[i])
    accumulatedDist += segmentDist

    while (accumulatedDist >= spacing) {
      // Interpolate to find point at exact spacing
      const t = (spacing - (accumulatedDist - segmentDist)) / segmentDist
      const newPoint = [
        lastPoint[0] + t * (path[i][0] - lastPoint[0]),
        lastPoint[1] + t * (path[i][1] - lastPoint[1]),
        lastPoint[2] + t * (path[i][2] - lastPoint[2])
      ]
      result.push(newPoint)
      accumulatedDist -= spacing
      lastPoint = newPoint
    }

    lastPoint = path[i]
  }

  // Always include the last point
  if (result[result.length - 1] !== path[path.length - 1]) {
    result.push(path[path.length - 1])
  }

  return result
}

/**
 * Compute proper distance gradient for adaptive grid refinement
 * Returns the metric factor that tells us how distances vary
 *
 * @param {Function} metricFn - metric tensor function
 * @param {Array<number>} x - point [u, v, w]
 * @returns {Object} distance scale factors for each direction
 */
export function distanceScaleFactors(metricFn, x) {
  const g = metricFn(...x)

  // Proper length of unit coordinate steps
  const dx = [1, 0, 0]
  const dy = [0, 1, 0]
  const dz = [0, 0, 1]

  return {
    u: properLength(g, dx),
    v: properLength(g, dy),
    w: properLength(g, dz)
  }
}