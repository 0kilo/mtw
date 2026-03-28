import { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { useMeshGenerator } from './hooks/useMeshGenerator'

/**
 * MeshGrid - Level 1: Coordinate Grid
 *
 * A generalized grid component that renders coordinate systems
 * based on an embedding function (u, v, w) -> (x, y, z)
 *
 * @param {Object} coordinate - Coordinate system config (from coordinates/)
 * @param {Array} ranges - Optional override: [[uMin, uMax], [vMin, vMax], [wMin, wMax]]
 * @param {number} resolution - Grid density (default: 10)
 * @param {string} lineColor - Color of grid lines (default: '#6366f1')
 * @param {boolean} showAxes - Whether to show XYZ axes (default: true)
 * @param {number} axisSize - Size of axes helper (default: 5)
 */
function MeshGrid({
  coordinate,
  ranges: propRanges,
  resolution = 10,
  lineColor = '#6366f1',
  showAxes = true,
  axisSize = 5,
  embeddingArgs = [],
}) {
  const containerRef = useRef(null)

  // Use provided ranges or fall back to coordinate defaults
  const ranges = useMemo(
    () => propRanges || coordinate?.ranges || [[-5, 5], [-5, 5], [-5, 5]],
    [propRanges, coordinate?.ranges]
  )
  const embedding = coordinate?.embedding

  // Generate mesh lines using the hook
  const meshLines = useMeshGenerator(embedding, ranges, resolution, embeddingArgs)

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

      // Dispose geometries and materials
      meshLines.forEach(({ geometry }) => geometry.dispose())
      material.dispose()
    }
  }, [embedding, ranges, resolution, lineColor, showAxes, axisSize, meshLines])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default MeshGrid