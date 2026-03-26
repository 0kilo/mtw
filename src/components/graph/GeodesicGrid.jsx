import { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { nullGeodesics, timelikeGeodesics } from './geodesic'

/**
 * GeodesicGrid - Level 3: Geodesic Grid
 *
 * Renders true geodesics - the straightest possible paths in curved spacetime.
 * Can visualize:
 * - Null geodesics (light paths)
 * - Timelike geodesics (particle trajectories)
 *
 * @param {Object} metric - Metric config (from metric/)
 * @param {string} geodesicType - 'null' or 'timelike'
 * @param {Array} origin - Starting point [r, theta, phi]
 * @param {number} nRays - Number of geodesics to compute
 * @param {string} pattern - Direction pattern: 'radial', 'spherical', 'cone'
 * @param {number} speed - Initial speed (for timelike)
 * @param {number} maxSteps - Max integration steps
 * @param {string} lineColor - Color of geodesic lines
 * @param {boolean} showAxes - Show XYZ axes
 * @param {number} axisSize - Axes size
 */
function GeodesicGrid({
  metric,
  geodesicType = 'null',
  origin,
  nRays = 12,
  pattern = 'spherical',
  speed = 0.5,
  maxSteps = 1000,
  lineColor = '#ef4444',
  showAxes = true,
  axisSize = 5,
}) {
  const containerRef = useRef(null)

  const spatialMetric = metric?.spatial
  const embedding = metric?.embedding
  const resolvedOrigin = useMemo(() => {
    if (origin) return origin

    if (metric?.type === 'curved') {
      return geodesicType === 'timelike'
        ? [8, Math.PI / 2, 0]
        : [15, Math.PI / 2, 0]
    }

    return [5, Math.PI / 2, 0]
  }, [origin, metric?.type, geodesicType])

  // Compute geodesic paths
  const geodesicPaths = useMemo(() => {
    if (!spatialMetric || !embedding) return []

    let paths

    if (geodesicType === 'null') {
      // Compute null geodesics (light paths)
      paths = nullGeodesics(spatialMetric, resolvedOrigin, nRays, pattern, {
        maxSteps,
        minRadius: 2.1, // Outside Schwarzschild radius
        maxRadius: 30,
      })
    } else {
      // Compute timelike geodesics (particle trajectories)
      paths = timelikeGeodesics(spatialMetric, resolvedOrigin, nRays, pattern, speed, {
        maxSteps,
        minRadius: 2.5,
        maxRadius: 25,
      })
    }

    // Convert parameter space paths to 3D embedding
    return paths.map(path =>
      path.map(params => {
        const [x, y, z] = embedding(...params)
        return new THREE.Vector3(x, y, z)
      })
    )
  }, [spatialMetric, embedding, geodesicType, resolvedOrigin, nRays, pattern, speed, maxSteps])

  useEffect(() => {
    if (!containerRef.current || geodesicPaths.length === 0) return

    const container = containerRef.current

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0) // Light background

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.set(15, 10, 15)
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0xf0f0f0, 1)
    container.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Material for geodesics
    const color = new THREE.Color(lineColor)
    const material = new THREE.LineBasicMaterial({
      color,
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    })

    // Add geodesic lines
    const geodesicsGroup = new THREE.Group()

    geodesicPaths.forEach(path => {
      if (path.length > 1) {
        const geometry = new THREE.BufferGeometry().setFromPoints(path)
        const line = new THREE.Line(geometry, material)
        geodesicsGroup.add(line)
      }
    })

    scene.add(geodesicsGroup)

    // Add origin marker
    const originPoint = embedding(...resolvedOrigin)
    const originGeom = new THREE.SphereGeometry(0.3, 16, 16)
    const originMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const originMesh = new THREE.Mesh(originGeom, originMat)
    originMesh.position.set(...originPoint)
    scene.add(originMesh)

    // Add central mass marker (for curved metrics)
    let massGeom, massMat, horizonGeom, horizonMat
    if (metric.type === 'curved') {
      massGeom = new THREE.SphereGeometry(0.5, 32, 32)
      massMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true
      })
      const massMesh = new THREE.Mesh(massGeom, massMat)
      scene.add(massMesh)

      // Event horizon sphere
      horizonGeom = new THREE.SphereGeometry(2, 32, 32)
      horizonMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.3
      })
      const horizonMesh = new THREE.Mesh(horizonGeom, horizonMat)
      scene.add(horizonMesh)
    }

    // Axes helper
    if (showAxes) {
      const axesHelper = new THREE.AxesHelper(axisSize)
      scene.add(axesHelper)
    }

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

      geodesicsGroup.children.forEach(line => {
        line.geometry.dispose()
      })
      material.dispose()
      originGeom.dispose()
      originMat.dispose()
      if (metric.type === 'curved') {
        massGeom.dispose()
        massMat.dispose()
        horizonGeom.dispose()
        horizonMat.dispose()
      }
    }
  }, [geodesicPaths, embedding, metric, lineColor, showAxes, axisSize, resolvedOrigin])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default GeodesicGrid
