/**
 * Cylindrical Coordinate System
 *
 * Coordinates: (r, θ, z)
 * - r: radial distance from z-axis (0 to ∞)
 * * θ: azimuthal angle (0 to 2π)
 * - z: height along z-axis
 *
 * Embedding: x = r·cos(θ), y = r·sin(θ), z = z
 */

export const cylindrical = {
  name: 'Cylindrical',
  description: 'Cylindrical coordinates (r, θ, z)',

  /**
   * Embedding function: (r, θ, z) -> (x, y, z)
   * @param {number} r - Radial distance
   * @param {number} theta - Azimuthal angle (radians)
   * @param {number} z - Height
   * @returns {[number, number, number]} [x, y, z]
   */
  embedding: (r, theta, z) => [
    r * Math.cos(theta),
    r * Math.sin(theta),
    z
  ],

  /**
   * Inverse: (x, y, z) -> (r, θ, z)
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} z - Z coordinate
   * @returns {[number, number, number]} [r, theta, z]
   */
  inverse: (x, y, z) => [
    Math.sqrt(x * x + y * y),
    Math.atan2(y, x),
    z
  ],

  /**
   * Default parameter ranges
   * @type {[[number, number], [number, number], [number, number]]}
   */
  ranges: [[0, 5], [0, 2 * Math.PI], [-3, 3]],

  /**
   * Parameter names for UI labels
   */
  paramNames: ['r', 'θ', 'z'],

  /**
   * Coordinate bounds (min/max for each parameter)
   */
  bounds: {
    r: { min: 0, max: 10, default: [0, 5] },
    theta: { min: 0, max: 2 * Math.PI, default: [0, 2 * Math.PI] },
    z: { min: -10, max: 10, default: [-3, 3] },
  },

  /**
   * Keys to access bounds (maps to paramNames index)
   */
  boundsKeys: ['r', 'theta', 'z'],
}