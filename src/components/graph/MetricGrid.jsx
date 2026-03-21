import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/**
 * MetricGrid - Generates grids based on a metric tensor g_μν
 * 
 * The metric defines the geometry of spacetime/space.
 * Grid lines follow the coordinate curves of the metric.
 * 
 * @param {Object} metric - Metric tensor components as functions of coordinates
 * @param {Function} metric.g - Returns [g_00, g_01, g_02, g_11, g_12, g_22] at (u,v,w)
 * @param {Function} embedding - Maps (u,v,w) → (x,y,z) for 3D visualization
 * @param {Array} ranges - [[uMin,uMax], [vMin,vMax], [wMin,wMax]]
 * @param {number} resolution - Grid density
 * @param {string} lineColor - Color of grid lines
 */
function MetricGrid({
  metric,
  embedding,
  ranges = [[-5, 5], [-5, 5], [-5, 5]],
  resolution = 10,
  lineColor = '#6366f1',
}) {
  const containerRef = useRef(null)

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

    // Create grid group
    const color = new THREE.Color(lineColor)
    const material = new THREE.LineBasicMaterial({ color })
    const gridGroup = new THREE.Group()

    const [uRange, vRange, wRange] = ranges
    const uDivisions = Math.max(2, Math.round(resolution * (uRange[1] - uRange[0]) / 10))
    const vDivisions = Math.max(2, Math.round(resolution * (vRange[1] - vRange[0]) / 10))
    const wDivisions = Math.max(2, Math.round(resolution * (wRange[1] - wRange[0]) / 10))

    const uStep = (uRange[1] - uRange[0]) / uDivisions
    const vStep = (vRange[1] - vRange[0]) / vDivisions
    const wStep = (wRange[1] - wRange[0]) / wDivisions

    // Generate grid lines along each coordinate direction
    // Lines along u (varying u, fixed v, w)
    for (let j = 0; j <= vDivisions; j++) {
      const v = vRange[0] + j * vStep
      for (let k = 0; k <= wDivisions; k++) {
        const w = wRange[0] + k * wStep
        const points = []
        for (let i = 0; i <= uDivisions; i++) {
          const u = uRange[0] + i * uStep
          const [x, y, z] = embedding(u, v, w)
          points.push(new THREE.Vector3(x, y, z))
        }
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
      }
    }

    // Lines along v (varying v, fixed u, w)
    for (let i = 0; i <= uDivisions; i++) {
      const u = uRange[0] + i * uStep
      for (let k = 0; k <= wDivisions; k++) {
        const w = wRange[0] + k * wStep
        const points = []
        for (let j = 0; j <= vDivisions; j++) {
          const v = vRange[0] + j * vStep
          const [x, y, z] = embedding(u, v, w)
          points.push(new THREE.Vector3(x, y, z))
        }
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
      }
    }

    // Lines along w (varying w, fixed u, v)
    for (let i = 0; i <= uDivisions; i++) {
      const u = uRange[0] + i * uStep
      for (let j = 0; j <= vDivisions; j++) {
        const v = vRange[0] + j * vStep
        const points = []
        for (let k = 0; k <= wDivisions; k++) {
          const w = wRange[0] + k * wStep
          const [x, y, z] = embedding(u, v, w)
          points.push(new THREE.Vector3(x, y, z))
        }
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
      }
    }

    // Axes
    const axesHelper = new THREE.AxesHelper(5)
    gridGroup.add(axesHelper)

    scene.add(gridGroup)

    // Animation
    let running = true
    const animate = () => {
      if (!running) return
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      running = false
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      controls.dispose()
    }
  }, [embedding, ranges, resolution, lineColor, metric])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

// ============ Predefined Metrics ============

/**
 * Cartesian coordinates (flat space)
 * Embedding: identity
 */
export const cartesianMetric = {
  name: 'Cartesian',
  embedding: (x, y, z) => [x, y, z],
  ranges: [[-5, 5], [-5, 5], [-5, 5]],
}

/**
 * Cylindrical coordinates (r, θ, z)
 * Embedding: x = r cos θ, y = r sin θ, z = z
 */
export const cylindricalMetric = {
  name: 'Cylindrical',
  embedding: (r, theta, z) => [r * Math.cos(theta), r * Math.sin(theta), z],
  ranges: [[0, 5], [0, 2 * Math.PI], [-3, 3]],
}

/**
 * Spherical coordinates (r, θ, φ)
 * Embedding: x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ
 */
export const sphericalMetric = {
  name: 'Spherical',
  embedding: (r, theta, phi) => [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(theta)
  ],
  ranges: [[0, 5], [0, Math.PI], [0, 2 * Math.PI]],
}

/**
 * Q1: Product-form quaternion exponential coordinates (ω, θ, φ)
 * Embedding uses the vector part of e^z = e^ω·e^(θi)·e^(φj)·e^(ρk) with ρ=0
 */
export const q1Metric = {
  name: 'Q1 (Quaternion Product)',
  embedding: (omega, theta, phi) => {
    const A = Math.exp(omega)
    const cosT = Math.cos(theta), sinT = Math.sin(theta)
    const cosP = Math.cos(phi), sinP = Math.sin(phi)
    // Vector part of the product-form exponential (with ρ=0)
    const b = A * (sinT * cosP)  // x component
    const c = A * (cosT * sinP)  // y component  
    const d = A * (cosT * cosP * 0 + sinT * sinP * 1)  // z component (simplified for ρ=0)
    return [b, c, d]
  },
  ranges: [[0, 1], [-Math.PI/4, Math.PI/4], [-Math.PI/4, Math.PI/4]],
}

/**
 * Schwarzschild coordinates (t, r, θ, φ) - spatial slice
 * For visualizing curved spacetime around a massive object
 * Embedding shows the "gravity well"
 */
export const schwarzschildMetric = {
  name: 'Schwarzschild (Gravity Well)',
  // Flamm's paraboloid embedding for spatial curvature
  embedding: (r, theta, phi) => {
    const rs = 2  // Schwarzschild radius (normalized)
    const x = r * Math.sin(theta) * Math.cos(phi)
    const y = r * Math.sin(theta) * Math.sin(phi)
    // z shows the curvature: z = 2√(rs(r - rs))
    const z = r > rs ? 2 * Math.sqrt(rs * (r - rs)) : 0
    return [x, y, z]
  },
  ranges: [[2, 10], [0, Math.PI], [0, 2 * Math.PI]],
}

export default MetricGrid
