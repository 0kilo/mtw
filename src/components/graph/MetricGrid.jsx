import { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { equidistantPoints, distanceScaleFactors } from './metric/distance'

/**
 * MetricGrid - Level 2: Metric-Aware Grid
 *
 * Renders coordinate grids where line segments are adjusted to represent
 * equidistant points in the actual geometry defined by the metric tensor.
 *
 * @param {Object} metric - Metric config (from metric/)
 * @param {Array} ranges - [[uMin, uMax], [vMin, vMax], [wMin, wMax]]
 * @param {number} resolution - Grid density
 * @param {string} lineColor - Color of grid lines
 * @param {boolean} showAxes - Show XYZ axes
 * @param {number} axisSize - Axes size
 * @param {boolean} metricAware - If true, adjust for proper distances
 */
function MetricGrid({
  metric,
  ranges: propRanges,
  resolution = 10,
  lineColor = '#6366f1',
  showAxes = true,
  axisSize = 5,
  metricAware = true,
}) {
  const containerRef = useRef(null)

  // Use provided ranges or fall back to metric defaults
  const ranges = useMemo(
    () => propRanges || metric?.ranges || [[-5, 5], [-5, 5], [-5, 5]],
    [propRanges, metric?.ranges]
  )
  const embedding = metric?.embedding
  const spatialMetric = metric?.spatial

  // Generate mesh lines with optional metric-aware spacing
  const meshLines = useMemo(() => {
    if (!embedding) return []

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

    const lines = []

    // If metric-aware, compute proper distance scaling
    const getSpacing = () => {
      if (!metricAware || !spatialMetric) return 0.1

      // Get average scale factors across the grid
      const samplePoints = [
        [(uMin + uMax) / 2, (vMin + vMax) / 2, (wMin + wMax) / 2]
      ]

      const scales = distanceScaleFactors(spatialMetric, samplePoints[0])
      return Math.min(scales.u, scales.v, scales.w) / resolution * 2
    }

    const spacing = getSpacing()

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

        // Apply metric-aware spacing if enabled
        let finalPoints = points
        if (metricAware && spatialMetric && spacing > 0) {
          const paramPoints = []
          for (let i = 0; i <= uDivisions; i++) {
            paramPoints.push([uMin + i * uStep, v, w])
          }
          finalPoints = equidistantPoints(spatialMetric, paramPoints, spacing)
            .map(([u, v, w]) => {
              const [x, y, z] = embedding(u, v, w)
              return new THREE.Vector3(x, y, z)
            })
        }

        if (finalPoints.length > 1) {
          lines.push({
            geometry: new THREE.BufferGeometry().setFromPoints(finalPoints),
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

        let finalPoints = points
        if (metricAware && spatialMetric && spacing > 0) {
          const paramPoints = []
          for (let j = 0; j <= vDivisions; j++) {
            paramPoints.push([u, vMin + j * vStep, w])
          }
          finalPoints = equidistantPoints(spatialMetric, paramPoints, spacing)
            .map(([u, v, w]) => {
              const [x, y, z] = embedding(u, v, w)
              return new THREE.Vector3(x, y, z)
            })
        }

        if (finalPoints.length > 1) {
          lines.push({
            geometry: new THREE.BufferGeometry().setFromPoints(finalPoints),
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

        let finalPoints = points
        if (metricAware && spatialMetric && spacing > 0) {
          const paramPoints = []
          for (let k = 0; k <= wDivisions; k++) {
            paramPoints.push([u, v, wMin + k * wStep])
          }
          finalPoints = equidistantPoints(spatialMetric, paramPoints, spacing)
            .map(([u, v, w]) => {
              const [x, y, z] = embedding(u, v, w)
              return new THREE.Vector3(x, y, z)
            })
        }

        if (finalPoints.length > 1) {
          lines.push({
            geometry: new THREE.BufferGeometry().setFromPoints(finalPoints),
            type: 'w'
          })
        }
      }
    }

    return lines
  }, [embedding, ranges, resolution, metricAware, spatialMetric])

  useEffect(() => {
    if (!containerRef.current || !embedding) return

    const container = containerRef.current

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.set(8, 8, 8)
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0xf0f0f0, 1)
    container.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Material for grid lines
    const color = new THREE.Color(lineColor)
    const material = new THREE.LineBasicMaterial({ color })

    // Grid group
    const gridGroup = new THREE.Group()

    // Add all generated lines
    meshLines.forEach(({ geometry }) => {
      const line = new THREE.Line(geometry, material)
      gridGroup.add(line)
    })

    // Axes helper
    if (showAxes) {
      const axesHelper = new THREE.AxesHelper(axisSize)
      gridGroup.add(axesHelper)
    }

    scene.add(gridGroup)

    // Animation loop
    let running = true
    const animate = () => {
      if (!running) return
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      running = false
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      controls.dispose()

      meshLines.forEach(({ geometry }) => geometry.dispose())
      material.dispose()
    }
  }, [embedding, ranges, resolution, lineColor, showAxes, axisSize, meshLines])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default MetricGrid