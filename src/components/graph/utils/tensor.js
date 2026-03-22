/**
 * Tensor utilities for metric calculations
 */

/**
 * Matrix-vector multiplication
 * @param {Array<Array<number>>} matrix - n×n matrix
 * @param {Array<number>} vector - n-vector
 * @returns {Array<number>} result vector
 */
export function matVec(matrix, vector) {
  return matrix.map(row =>
    row.reduce((sum, val, i) => sum + val * vector[i], 0)
  )
}

/**
 * Matrix multiplication (n×m) × (m×p) = (n×p)
 * @param {Array<Array<number>>} A - n×m matrix
 * @param {Array<Array<number>>} B - m×p matrix
 * @returns {Array<Array<number>>} n×p matrix
 */
export function matMul(A, B) {
  const n = A.length
  const m = A[0].length
  const p = B[0].length

  const result = []
  for (let i = 0; i < n; i++) {
    result[i] = []
    for (let j = 0; j < p; j++) {
      let sum = 0
      for (let k = 0; k < m; k++) {
        sum += A[i][k] * B[k][j]
      }
      result[i][j] = sum
    }
  }
  return result
}

/**
 * Compute inverse of a 3×3 matrix
 * @param {Array<Array<number>>} M - 3×3 matrix
 * @returns {Array<Array<number>>|null} inverse or null if singular
 */
export function matInverse3(M) {
  const [a, b, c] = M[0]
  const [d, e, f] = M[1]
  const [g, h, i] = M[2]

  const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)

  if (Math.abs(det) < 1e-10) return null

  const invDet = 1 / det

  return [
    [(e * i - f * h) * invDet, (c * h - b * i) * invDet, (b * f - c * e) * invDet],
    [(f * g - d * i) * invDet, (a * i - c * g) * invDet, (c * d - a * f) * invDet],
    [(d * h - e * g) * invDet, (b * g - a * h) * invDet, (a * e - b * d) * invDet]
  ]
}

/**
 * Compute metric determinant
 * @param {Array<Array<number>>} g - 3×3 metric tensor
 * @returns {number} determinant
 */
export function metricDet(g) {
  const [a, b, c] = g[0]
  const [d, e, f] = g[1]
  const [g2, h, i] = g[2]

  return a * (e * i - f * h) - b * (d * i - f * g2) + c * (d * h - e * g2)
}

/**
 * Raise/lower index: g^{ij} v_j
 * @param {Array<Array<number>>} gInv - inverse metric
 * @param {Array<number>} v - covariant vector
 * @returns {Array<number>} contravariant vector
 */
export function raiseIndex(gInv, v) {
  return matVec(gInv, v)
}

/**
 * Lower index: g_{ij} v^i
 * @param {Array<Array<number>>} g - metric
 * @param {Array<number>} v - contravariant vector
 * @returns {Array<number>} covariant vector
 */
export function lowerIndex(g, v) {
  return matVec(g, v)
}

/**
 * Compute proper length of a vector: √(g_{ij} v^i v^j)
 * @param {Array<Array<number>>} g - metric tensor
 * @param {Array<number>} v - vector
 * @returns {number} proper length
 */
export function properLength(g, v) {
  const vLower = lowerIndex(g, v)
  let sum = 0
  for (let i = 0; i < v.length; i++) {
    sum += v[i] * vLower[i]
  }
  return Math.sqrt(Math.max(0, sum))
}

/**
 * Numerical partial derivative ∂g/∂x^k
 * @param {Function} gFn - metric as function of coordinates
 * @param {Array<number>} x - coordinates [x, y, z]
 * @param {number} k - index of variable to differentiate
 * @param {number} h - step size
 * @returns {Array<Array<number>>} derivative of metric tensor
 */
export function partial(gFn, x, k, h = 0.001) {
  const xPlus = [...x]
  const xMinus = [...x]
  xPlus[k] += h
  xMinus[k] -= h

  let gPlus, gMinus
  try {
    gPlus = gFn(...xPlus)
    gMinus = gFn(...xMinus)
  } catch (_e) {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

  if (!gPlus || !gMinus || !gPlus[0] || !gMinus[0]) {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

  return gPlus.map((row, i) =>
    row.map((val, j) => (val - gMinus[i][j]) / (2 * h))
  )
}