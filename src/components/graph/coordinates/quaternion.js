/**
 * Ordered Quaternionic State Map Coordinate System
 *
 * Visualizes the ordered state map used in the current Khantraction research:
 *   Q(ω, θ, φ, ρ) = e^ω · e^(θi) · e^(φj) · e^(ρk)
 *
 * This is an ordered factorized quaternionic state construction,
 * not the naive commuting identity e^(ω+θi+φj+ρk).
 *
 * For visualization we vary (θ, φ, ρ) on the grid and expose ω as an
 * explicit scale control. The 3D embedding shows the vector part (b, c, d):
 *   Q = a + bi + cj + dk
 */

const computeQuaternionComponents = (omega, theta, phi, rho) => {
  const scale = Math.max(0, omega)
  const cosT = Math.cos(theta), sinT = Math.sin(theta)
  const cosP = Math.cos(phi), sinP = Math.sin(phi)
  const cosR = Math.cos(rho), sinR = Math.sin(rho)

  const a = scale * (cosT * cosP * cosR - sinT * sinP * sinR)
  const b = scale * (sinT * cosP * cosR + cosT * sinP * sinR)
  const c = scale * (cosT * sinP * cosR - sinT * cosP * sinR)
  const d = scale * (cosT * cosP * sinR + sinT * sinP * cosR)

  return [a, b, c, d]
}


/**
 * Compute ordered-state map vector part
 * @returns {[number, number, number]} [b, c, d] vector part
 */
function expQVector(omega, theta, phi, rho) {
  const [, b, c, d] = computeQuaternionComponents(omega, theta, phi, rho)
  return [b, c, d]
}

export const quaternion = {
  name: 'Ordered Quaternion State',
  description: 'Ordered quaternion state map Q(ω, θ, φ, ρ) with θ, φ, ρ as angular axes and ω as scale',

  /**
   * Embedding function: (θ, φ, ρ, ω) -> (b, c, d)
   * The UI exposes ω as the fourth control while θ, φ, ρ span the grid.
   */
  embedding: (theta, phi, rho, omega = 1) => expQVector(omega, theta, phi, rho),

  /**
   * Inverse: (b, c, d) -> (θ, φ, ρ, ω)
   * Still approximate; the embedding is many-to-one.
   */
  inverse: (x, y, z) => {
    const r = Math.sqrt(x * x + y * y + z * z)
    const omega = r
    const theta = Math.atan2(x, Math.sqrt(y * y + z * z))
    const phi = Math.atan2(y, Math.sqrt(x * x + z * z))
    const rho = Math.atan2(z, Math.sqrt(x * x + y * y))
    return [theta, phi, rho, omega]
  },

  /**
   * Default parameter ranges
   * @type {[[number, number], [number, number], [number, number]]}
   */
  ranges: [
    [Math.PI * 0.75, Math.PI * 1.25],
    [-Math.PI * 0.75, -Math.PI * 0.25],
    [Math.PI * 0.25, Math.PI * 0.75],
  ],

  /**
   * Parameter names for UI labels
   */
  paramNames: ['θ (soft mode)', 'φ (locked angle)', 'ρ (chirality)', 'ω (scale)'],

  /**
   * Coordinate bounds (min/max for each parameter)
   */
  bounds: {
    theta: { min: -2 * Math.PI, max: 2 * Math.PI, default: [Math.PI * 0.75, Math.PI * 1.25] },
    phi: { min: -2 * Math.PI, max: 2 * Math.PI, default: [-Math.PI * 0.75, -Math.PI * 0.25] },
    rho: { min: -2 * Math.PI, max: 2 * Math.PI, default: [Math.PI * 0.25, Math.PI * 0.75] },
    omega: { min: 0, max: 10, default: 1 },
  },

  /**
   * Keys to access bounds (maps to paramNames index)
   */
  boundsKeys: ['theta', 'phi', 'rho', 'omega'],
}
