/**
 * Minkowski Metric (Flat Spacetime)
 *
 * Cartesian spatial slice - flat Euclidean space
 * g_ij = δ_ij (identity matrix)
 */

export const minkowskiMetric = {
  name: 'Minkowski (Flat)',
  description: 'Flat Euclidean space - no curvature',

  /**
   * Spatial metric tensor g_ij at position (x, y, z)
   * For flat space, this is just the identity matrix
   * @returns {Array<Array<number>>} 3×3 identity matrix
   */
  spatial: () => [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ],

  /**
   * Embedding function: identity mapping
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {number} z - z coordinate
   * @returns {[number, number, number]} [x, y, z]
   */
  embedding: (x, y, z) => [x, y, z],

  /**
   * Default parameter ranges
   */
  ranges: [[-5, 5], [-5, 5], [-5, 5]],

  /**
   * Parameter names
   */
  paramNames: ['x', 'y', 'z'],

  /**
   * Bounds for each parameter
   */
  bounds: {
    x: { min: -10, max: 10 },
    y: { min: -10, max: 10 },
    z: { min: -10, max: 10 }
  },

  boundsKeys: ['x', 'y', 'z'],

  /**
   * Metric type
   */
  type: 'flat',
}