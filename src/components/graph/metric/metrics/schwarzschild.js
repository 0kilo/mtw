/**
 * Schwarzschild Metric (Black Hole)
 *
 * Spatial slice of Schwarzschild spacetime
 * Uses Flamm's paraboloid embedding for visualization
 *
 * The spatial metric in Schwarzschild coordinates (r, θ, φ) with θ=π/2:
 *   ds² = dr²/(1 - rs/r) + r² dθ² + r² sin²θ dφ²
 *
 * For the equatorial plane (θ = π/2, sin²θ = 1):
 *   g_rr = 1/(1 - rs/r)
 *   g_θθ = r²
 *   g_φφ = r²
 */

export const schwarzschildMetric = {
  name: 'Schwarzschild',
  description: 'Spacetime around a spherically symmetric mass (black hole)',

  /**
   * Schwarzschild radius (normalized to 2 for simplicity)
   */
  rs: 2,

  /**
   * Spatial metric tensor g_ij in (r, θ, φ) coordinates
   * @param {number} r - radial coordinate
   * @param {number} theta - polar angle (we use θ = π/2 for equatorial plane)
   * @param {number} phi - azimuthal angle (unused for metric)
   * @returns {Array<Array<number>>} 3×3 metric tensor
   */
  // eslint-disable-next-line no-unused-vars
  spatial: (r, theta = Math.PI / 2, _phi = 0) => {
    const rs = 2
    const r2 = r * r
    const sinTheta = Math.sin(theta)

    // Handle singularity
    if (r <= rs) {
      return [
        [1, 0, 0],
        [0, r2, 0],
        [0, 0, r2 * sinTheta * sinTheta]
      ]
    }

    return [
      [1 / (1 - rs / r), 0, 0],
      [0, r2, 0],
      [0, 0, r2 * sinTheta * sinTheta]
    ]
  },

  /**
   * Embedding function for 3D visualization (Flamm's paraboloid)
   * Maps (r, θ, φ) → (x, y, z) showing the curvature
   *
   * The embedding: z = 2√(rs(r - rs))
   * This visualizes the "gravity well" of the black hole
   *
   * @param {number} r - radial coordinate
   * @param {number} theta - polar angle
   * @param {number} phi - azimuthal angle
   * @returns {[number, number, number]} [x, y, z]
   */
  embedding: (r, theta, phi) => {
    const rs = 2

    // Standard spherical to Cartesian
    const x = r * Math.sin(theta) * Math.cos(phi)
    const y = r * Math.sin(theta) * Math.sin(phi)

    // Embedding z shows curvature: z = 2√(rs(r - rs))
    // For r < rs, we clamp to 0 (inside horizon)
    let z
    if (r <= rs) {
      z = 0
    } else {
      z = 2 * Math.sqrt(rs * (r - rs))
    }

    return [x, y, z]
  },

  /**
   * Default parameter ranges
   */
  ranges: [[2.1, 10], [Math.PI / 2, Math.PI / 2], [0, 2 * Math.PI]],

  /**
   * Parameter names
   */
  paramNames: ['r', 'θ', 'φ'],

  /**
   * Bounds for each parameter
   */
  bounds: {
    r: { min: 2.1, max: 15 },
    theta: { min: 0, max: Math.PI },
    phi: { min: 0, max: 2 * Math.PI }
  },

  boundsKeys: ['r', 'theta', 'phi'],

  /**
   * Metric type
   */
  type: 'curved',
}