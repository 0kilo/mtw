/**
 * Spherical Coordinate System
 *
 * Coordinates: (r, θ, φ)
 * - r: radial distance from origin (0 to ∞)
 * - θ: polar angle from z-axis (0 to π)
 * - φ: azimuthal angle in xy-plane (0 to 2π)
 *
 * Embedding:
 *   x = r·sin(θ)·cos(φ)
 *   y = r·sin(θ)·sin(φ)
 *   z = r·cos(θ)
 *
 * Note: Physics convention (θ = polar, φ = azimuthal)
 *       Math convention uses (θ = azimuthal, φ = polar)
 */

export const spherical = {
  name: 'Spherical',
  description: 'Spherical coordinates (r, θ, φ)',

  /**
   * Embedding function: (r, θ, φ) -> (x, y, z)
   * @param {number} r - Radial distance
   * @param {number} theta - Polar angle (0 to π, radians)
   * @param {number} phi - Azimuthal angle (0 to 2π, radians)
   * @returns {[number, number, number]} [x, y, z]
   */
  embedding: (r, theta, phi) => [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(theta)
  ],

  /**
   * Inverse: (x, y, z) -> (r, θ, φ)
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} z - Z coordinate
   * @returns {[number, number, number]} [r, theta, phi]
   */
  inverse: (x, y, z) => {
    const r = Math.sqrt(x * x + y * y + z * z)
    const theta = r > 0 ? Math.acos(z / r) : 0
    const phi = Math.atan2(y, x)
    return [r, theta, phi]
  },

  /**
   * Default parameter ranges
   * @type {[[number, number], [number, number], [number, number]]}
   */
  ranges: [[0, 5], [0, Math.PI], [0, 2 * Math.PI]],

  /**
   * Parameter names for UI labels
   */
  paramNames: ['r', 'θ', 'φ'],

  /**
   * Coordinate bounds (min/max for each parameter)
   */
  bounds: {
    r: { min: 0, max: 10, default: [0, 5] },
    theta: { min: 0, max: Math.PI, default: [0, Math.PI] },
    phi: { min: 0, max: 2 * Math.PI, default: [0, 2 * Math.PI] },
  },

  /**
   * Keys to access bounds (maps to paramNames index)
   */
  boundsKeys: ['r', 'theta', 'phi'],
}