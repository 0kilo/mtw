/**
 * Cartesian Coordinate System
 *
 * Standard rectangular coordinates (x, y, z)
 * Embedding: identity mapping
 */

export const cartesian = {
  name: 'Cartesian',
  description: 'Standard rectangular coordinates (x, y, z)',

  /**
   * Embedding function: (x, y, z) -> (x, y, z)
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} z - Z coordinate
   * @returns {[number, number, number]} [x, y, z]
   */
  embedding: (x, y, z) => [x, y, z],

  /**
   * Inverse: (x, y, z) -> (x, y, z)
   * For Cartesian, embedding is its own inverse
   */
  inverse: (x, y, z) => [x, y, z],

  /**
   * Default parameter ranges
   * @type {[[number, number], [number, number], [number, number]]}
   */
  ranges: [[-5, 5], [-5, 5], [-5, 5]],

  /**
   * Parameter names for UI labels
   */
  paramNames: ['x', 'y', 'z'],

  /**
   * Coordinate bounds (min/max for each axis)
   */
  bounds: {
    x: { min: -10, max: 10, default: [-5, 5] },
    y: { min: -10, max: 10, default: [-5, 5] },
    z: { min: -10, max: 10, default: [-5, 5] },
  },

  /**
   * Keys to access bounds (maps to paramNames index)
   */
  boundsKeys: ['x', 'y', 'z'],
}