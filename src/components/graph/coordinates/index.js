/**
 * Coordinate System Registry
 *
 * Each coordinate system defines:
 * - name: Display name
 * - description: Brief description
 * - embedding: (u, v, w) => [x, y, z] - maps parameter space to 3D
 * - ranges: Default [[uMin, uMax], [vMin, vMax], [wMin, wMax]]
 * - paramNames: Labels for each parameter [u, v, w]
 */

import { cartesian } from './cartesian'
import { cylindrical } from './cylindrical'
import { spherical } from './spherical'
import { quaternion } from './quaternion'

export { cartesian, cylindrical, spherical, quaternion }

/**
 * Get a coordinate system by name
 * @param {string} name - Coordinate system name
 * @returns {Object|undefined} Coordinate system config
 */
export function getCoordinateSystem(name) {
  const systems = {
    cartesian,
    cylindrical,
    spherical,
    quaternion,
  }
  return systems[name]
}

/**
 * List all available coordinate systems
 * @returns {Array<{name: string, description: string}>}
 */
export function listCoordinateSystems() {
  return [
    { name: 'cartesian', description: cartesian.description },
    { name: 'cylindrical', description: cylindrical.description },
    { name: 'spherical', description: spherical.description },
    { name: 'quaternion', description: quaternion.description },
  ]
}