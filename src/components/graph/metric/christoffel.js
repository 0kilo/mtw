/**
 * Christoffel Symbols Computation
 *
 * Computes the Christoffel symbols of the second kind Γ^k_ij from the metric tensor
 *
 * Formula:
 * Γ^k_ij = (1/2) g^kl (∂_i g_jl + ∂_j g_il - ∂_l g_ij)
 */

import { matInverse3, partial } from '../utils/tensor'

/**
 * Compute Christoffel symbols at a point
 *
 * @param {Function} metricFn - metric tensor g_ij(u,v,w) as function
 * @param {Array<number>} x - coordinates [u, v, w]
 * @returns {Array<Array<Array<number>>>} Γ^k_ij as 3x3x3 array
 */
export function christoffel(metricFn, x) {
  // Get metric and its inverse at point
  let g
  try {
    g = metricFn(...x)
  } catch (_e) {
    // Return zero Christoffel if metric fails
    return [
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ]
  }

  if (!g || !g[0] || !g[0][0]) {
    return [
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ]
  }

  const gInv = matInverse3(g)

  if (!gInv) {
    // Return zero Christoffel if metric is singular
    return [
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ]
  }

  // Compute partial derivatives of metric: dg[i][j][k] = ∂_i g_jk
  const dg = [
    partial(metricFn, x, 0),  // ∂_x g
    partial(metricFn, x, 1),  // ∂_y g
    partial(metricFn, x, 2)   // ∂_z g
  ]

  // Compute Christoffel symbols for each k
  const Gamma = []

  for (let k = 0; k < 3; k++) {
    Gamma[k] = []
    for (let i = 0; i < 3; i++) {
      Gamma[k][i] = []
      for (let j = 0; j < 3; j++) {
        // Γ^k_ij = (1/2) g^kl (∂_i g_jl + ∂_j g_il - ∂_l g_ij)
        let sum = 0
        for (let l = 0; l < 3; l++) {
          const term1 = dg[i][j][l]  // ∂_i g_jl
          const term2 = dg[j][i][l]  // ∂_j g_il
          const term3 = dg[l][i][j]  // ∂_l g_ij
          sum += gInv[k][l] * (term1 + term2 - term3)
        }
        Gamma[k][i][j] = sum / 2
      }
    }
  }

  return Gamma
}

/**
 * Compute geodesic acceleration: a^k = -Γ^k_ij v^i v^j
 *
 * @param {Array<Array<Array<number>>>} Gamma - Christoffel symbols
 * @param {Array<number>} v - velocity vector [v_u, v_v, v_w]
 * @returns {Array<number>} acceleration [a_u, a_v, a_w]
 */
export function geodesicAcceleration(Gamma, v) {
  const a = [0, 0, 0]

  for (let k = 0; k < 3; k++) {
    let sum = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        sum += Gamma[k][i][j] * v[i] * v[j]
      }
    }
    a[k] = -sum
  }

  return a
}

/**
 * Compute covariant derivative of a vector
 * Dv^k/ds = dv^k/ds + Γ^k_ij v^i v^j
 *
 * @param {Array<Array<Array<number>>>} Gamma - Christoffel symbols
 * @param {Array<number>} v - vector
 * @param {Array<number>} dv - derivative of vector
 * @returns {Array<number>} covariant derivative
 */
export function covariantDerivative(Gamma, v, dv) {
  const result = []

  for (let k = 0; k < 3; k++) {
    let sum = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        sum += Gamma[k][i][j] * v[i] * dv[j]
      }
    }
    result[k] = dv[k] + sum
  }

  return result
}