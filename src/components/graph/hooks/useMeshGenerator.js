import { useMemo } from 'react'
import * as THREE from 'three'

/**
 * Hook for generating mesh grid lines from an embedding function
 *
 * @param {Function} embedding - (u, v, w) => [x, y, z]
 * @param {Array} ranges - [[uMin, uMax], [vMin, vMax], [wMin, wMax]]
 * @param {number} resolution - Grid density (divisions per unit range)
 * @returns {Array<THREE.Line>} Array of line objects
 */
export function useMeshGenerator(embedding, ranges, resolution = 10) {
  return useMemo(() => {
    if (!embedding || !ranges) return []

    const [[uMin, uMax], [vMin, vMax], [wMin, wMax]] = ranges

    // Calculate divisions based on range span and resolution
    const uSpan = uMax - uMin
    const vSpan = vMax - vMin
    const wSpan = wMax - wMin

    const uDivisions = Math.max(2, Math.round(resolution * uSpan / 10))
    const vDivisions = Math.max(2, Math.round(resolution * vSpan / 10))
    const wDivisions = Math.max(2, Math.round(resolution * wSpan / 10))

    const uStep = uSpan / uDivisions
    const vStep = vSpan / vDivisions
    const wStep = wSpan / wDivisions

    const lines = []

    // Lines along U (varying u, fixed v, w)
    for (let j = 0; j <= vDivisions; j++) {
      for (let k = 0; k <= wDivisions; k++) {
        const v = vMin + j * vStep
        const w = wMin + k * wStep
        const points = []

        for (let i = 0; i <= uDivisions; i++) {
          const u = uMin + i * uStep
          const [x, y, z] = embedding(u, v, w)
          points.push(new THREE.Vector3(x, y, z))
        }

        if (points.length > 1) {
          lines.push({
            geometry: new THREE.BufferGeometry().setFromPoints(points),
            type: 'u'
          })
        }
      }
    }

    // Lines along V (varying v, fixed u, w)
    for (let i = 0; i <= uDivisions; i++) {
      for (let k = 0; k <= wDivisions; k++) {
        const u = uMin + i * uStep
        const w = wMin + k * wStep
        const points = []

        for (let j = 0; j <= vDivisions; j++) {
          const v = vMin + j * vStep
          const [x, y, z] = embedding(u, v, w)
          points.push(new THREE.Vector3(x, y, z))
        }

        if (points.length > 1) {
          lines.push({
            geometry: new THREE.BufferGeometry().setFromPoints(points),
            type: 'v'
          })
        }
      }
    }

    // Lines along W (varying w, fixed u, v)
    for (let i = 0; i <= uDivisions; i++) {
      for (let j = 0; j <= vDivisions; j++) {
        const u = uMin + i * uStep
        const v = vMin + j * vStep
        const points = []

        for (let k = 0; k <= wDivisions; k++) {
          const w = wMin + k * wStep
          const [x, y, z] = embedding(u, v, w)
          points.push(new THREE.Vector3(x, y, z))
        }

        if (points.length > 1) {
          lines.push({
            geometry: new THREE.BufferGeometry().setFromPoints(points),
            type: 'w'
          })
        }
      }
    }

    return lines
  }, [embedding, ranges, resolution])
}

/**
 * Generate mesh points as a flat array (for alternative rendering)
 *
 * @param {Function} embedding - (u, v, w) => [x, y, z]
 * @param {Array} ranges - [[uMin, uMax], [vMin, uMax], [wMin, wMax]]
 * @param {number} resolution - Grid density
 * @returns {Object} { points: Array, uDivisions, vDivisions, wDivisions }
 */
export function useMeshPoints(embedding, ranges, resolution = 10) {
  return useMemo(() => {
    if (!embedding || !ranges) {
      return { points: [], uDivisions: 0, vDivisions: 0, wDivisions: 0 }
    }

    const [[uMin, uMax], [vMin, vMax], [wMin, wMax]] = ranges

    const uSpan = uMax - uMin
    const vSpan = vMax - vMin
    const wSpan = wMax - wMin

    const uDivisions = Math.max(2, Math.round(resolution * uSpan / 10))
    const vDivisions = Math.max(2, Math.round(resolution * vSpan / 10))
    const wDivisions = Math.max(2, Math.round(resolution * wSpan / 10))

    const uStep = uSpan / uDivisions
    const vStep = vSpan / vDivisions
    const wStep = wSpan / wDivisions

    const points = []

    for (let i = 0; i <= uDivisions; i++) {
      for (let j = 0; j <= vDivisions; j++) {
        for (let k = 0; k <= wDivisions; k++) {
          const u = uMin + i * uStep
          const v = vMin + j * vStep
          const w = wMin + k * wStep

          const [x, y, z] = embedding(u, v, w)
          points.push({
            u, v, w,
            x, y, z,
            indices: [i, j, k]
          })
        }
      }
    }

    return { points, uDivisions, vDivisions, wDivisions }
  }, [embedding, ranges, resolution])
}