/**
 * FLRW Metric (Friedmann-Lemaître-Robertson-Walker)
 *
 * Cosmological metric describing an expanding/contracting universe
 *
 * In comoving coordinates (r, θ, φ):
 *   ds² = a(t)² [ dr²/(1 - k r²) + r²(dθ² + sin²θ dφ²) ]
 *
 * Where:
 *   a(t) - scale factor (we use a = 1 for present time)
 *   k - curvature parameter: -1 (open), 0 (flat), 1 (closed)
 */

export const flrwMetric = {
  name: 'FLRW',
  description: 'Friedmann-Lemaître-Robertson-Walker (Expanding Universe)',

  /**
   * Scale factor (1 for present day)
   */
  a: 1,

  /**
   * Curvature parameter: -1 (open), 0 (flat), 1 (closed)
   */
  k: 0,

  /**
   * Spatial metric tensor g_ij in (r, θ, φ) coordinates
   * @param {number} r - comoving radial coordinate
   * @param {number} theta - polar angle
   * @param {number} phi - azimuthal angle
   * @returns {Array<Array<number>>} 3×3 metric tensor
   */
  // eslint-disable-next-line no-unused-vars
  spatial: (r, theta, _phi) => {
    const a = 1
    const k = 0
    const a2 = a * a
    const r2 = r * r
    const sinTheta = Math.sin(theta)

    // For flat universe (k = 0): g_ij = a² * diag(1, r², r²sin²θ)
    // For open universe (k = -1): g_ij = a² * diag(1, sinh²r, sinh²r sin²θ)
    // For closed universe (k = 1): g_ij = a² * diag(1, sin²r, sin²r sin²θ)

    let g_rr, g_thetatheta, g_phiphi

    if (k === 0) {
      g_rr = a2
      g_thetatheta = a2 * r2
      g_phiphi = a2 * r2 * sinTheta * sinTheta
    } else if (k === -1) {
      const sinhr = Math.sinh(r)
      g_rr = a2
      g_thetatheta = a2 * sinhr * sinhr
      g_phiphi = a2 * sinhr * sinhr * sinTheta * sinTheta
    } else {
      const sinr = Math.sin(r)
      g_rr = a2
      g_thetatheta = a2 * sinr * sinr
      g_phiphi = a2 * sinr * sinr * sinTheta * sinTheta
    }

    return [
      [g_rr, 0, 0],
      [0, g_thetatheta, 0],
      [0, 0, g_phiphi]
    ]
  },

  /**
   * Embedding function for visualization
   * Shows the expanding universe effect
   *
   * @param {number} r - comoving radial coordinate
   * @param {number} theta - polar angle
   * @param {number} phi - azimuthal angle
   * @returns {[number, number, number]} [x, y, z]
   */
  embedding: (r, theta, phi) => {
    const a = 1

    // Physical radius in comoving coordinates scales with a(t)
    const physicalR = a * r

    const x = physicalR * Math.sin(theta) * Math.cos(phi)
    const y = physicalR * Math.sin(theta) * Math.sin(phi)
    const z = physicalR * Math.cos(theta)

    return [x, y, z]
  },

  /**
   * Default parameter ranges
   */
  ranges: [[0, 5], [0, Math.PI], [0, 2 * Math.PI]],

  /**
   * Parameter names
   */
  paramNames: ['r', 'θ', 'φ'],

  /**
   * Bounds for each parameter
   */
  bounds: {
    r: { min: 0, max: 10 },
    theta: { min: 0, max: Math.PI },
    phi: { min: 0, max: 2 * Math.PI }
  },

  boundsKeys: ['r', 'theta', 'phi'],

  /**
   * Metric type
   */
  type: 'curved',
}