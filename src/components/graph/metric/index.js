/**
 * Metric Registry
 *
 * Exports all available spacetime metrics
 */

import { minkowskiMetric } from './metrics/minkowski'
import { schwarzschildMetric } from './metrics/schwarzschild'
import { flrwMetric } from './metrics/flrw'

export { minkowskiMetric, schwarzschildMetric, flrwMetric }

/**
 * Get a metric by name
 * @param {string} name - metric name
 * @returns {Object|undefined} metric config
 */
export function getMetric(name) {
  const metrics = {
    minkowski: minkowskiMetric,
    schwarzschild: schwarzschildMetric,
    flrw: flrwMetric,
  }
  return metrics[name]
}

/**
 * List all available metrics
 * @returns {Array<{name: string, description: string, type: string}>}
 */
export function listMetrics() {
  return [
    { name: 'minkowski', description: minkowskiMetric.description, type: minkowskiMetric.type },
    { name: 'schwarzschild', description: schwarzschildMetric.description, type: schwarzschildMetric.type },
    { name: 'flrw', description: flrwMetric.description, type: flrwMetric.type },
  ]
}