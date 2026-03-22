/**
 * Quaternion Exponential Coordinate System
 *
 * Visualizes the quaternion exponential map:
 *   e^z = e^(ω + θi + φj + ρk)
 *       = e^ω × e^(θi) × e^(φj) × e^(ρk)
 *
 * Parameters: (ω, θ, φ, ρ) - but we fix ρ=0 for visualization
 * The 3D visualization shows the vector part (b, c, d) of the result:
 *   e^z = a + bi + cj + dk
 *
 * Embedding maps (ω, θ, φ) -> (b, c, d) scaled by e^ω
 */

/**
 * Compute quaternion exponential vector part
 * @param {number} omega - Real part
 * @param {number} theta - i-axis angle
 * @param {number} phi - j-axis angle
 * @param {number} rho - k-axis angle (typically 0)
 * @returns {[number, number, number]} [b, c, d] vector part
 */
function expQVector(omega, theta, phi, rho = 0) {
  const A = Math.exp(omega)
  const cosT = Math.cos(theta), sinT = Math.sin(theta)
  const cosP = Math.cos(phi), sinP = Math.sin(phi)
  const cosR = Math.cos(rho), sinR = Math.sin(rho)

  // Vector parts (b, c, d)
  const b = A * (sinT * cosP * cosR + cosT * sinP * sinR)
  const c = A * (cosT * sinP * cosR - sinT * cosP * sinR)
  const d = A * (cosT * cosP * sinR + sinT * sinP * cosR)

  return [b, c, d]
}

export const quaternion = {
  name: 'Quaternion (Q1)',
  description: 'Quaternion exponential e^z = e^ω·e^(θi)·e^(φj)·e^(ρk)',

  /**
   * Embedding function: (ω, θ, φ) -> (b, c, d)
   * Maps quaternion parameters to 3D vector part
   * @param {number} omega - Real part (log magnitude)
   * @param {number} theta - i-axis angle
   * @param {number} phi - j-axis angle
   * @returns {[number, number, number]} [x, y, z] = [b, c, d]
   */
  embedding: (omega, theta, phi) => expQVector(omega, theta, phi, 0),

  /**
   * Inverse: (b, c, d) -> (ω, θ, φ)
   * Approximate inverse for visualization
   * @param {number} x - Vector component b
   * @param {number} y - Vector component c
   * @param {number} z - Vector component d
   * @returns {[number, number, number]} [omega, theta, phi]
   */
  inverse: (x, y, z) => {
    const r = Math.sqrt(x * x + y * y + z * z)
    const omega = Math.log(Math.max(r, 0.001))
    const theta = Math.atan2(x, z)
    const phi = Math.atan2(y, Math.sqrt(x * x + z * z))
    return [omega, theta, phi]
  },

  /**
   * Default parameter ranges
   * @type {[[number, number], [number, number], [number, number]]}
   */
  ranges: [[0, 1], [-Math.PI / 4, Math.PI / 4], [-Math.PI / 4, Math.PI / 4]],

  /**
   * Parameter names for UI labels
   */
  paramNames: ['ω (real)', 'θ (i)', 'φ (j)'],

  /**
   * Coordinate bounds (min/max for each parameter)
   */
  bounds: {
    omega: { min: -3.14, max: 3.14, default: [0, 1] },
    theta: { min: -Math.PI, max: Math.PI, default: [-Math.PI / 4, Math.PI / 4] },
    phi: { min: -Math.PI, max: Math.PI, default: [-Math.PI / 4, Math.PI / 4] },
  },

  /**
   * Keys to access bounds (maps to paramNames index)
   */
  boundsKeys: ['omega', 'theta', 'phi'],

  /**
   * Additional config
   */
  hasRho: false,  // Whether to show ρ parameter
  rhoDefault: 0,
}