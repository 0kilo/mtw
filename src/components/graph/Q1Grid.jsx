import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Q1 Grid - Product-form parametrization of quaternion exponential
// e^z = e^ω × e^(θi) × e^(φj) × e^(ρk)
// Uses the vector part (x1, x2, x3) for 3D visualization
function Q1Grid({
  omegaMin = 0,
  omegaMax = 1,
  thetaMin = -Math.PI / 2,
  thetaMax = Math.PI / 2,
  phiMin = -Math.PI / 2,
  phiMax = Math.PI / 2,
  rhoMin = -Math.PI / 2,
  rhoMax = Math.PI / 2,
  resolution = 1,
  lineColor = '#6366f1',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Calculate divisions
    const omegaDivisions = Math.max(2, Math.round(resolution * (omegaMax - omegaMin)))
    const thetaDivisions = Math.max(2, Math.round(resolution * (thetaMax - thetaMin)))
    const phiDivisions = Math.max(2, Math.round(resolution * (phiMax - phiMin)))
    const rhoDivisions = Math.max(2, Math.round(resolution * (rhoMax - rhoMin)))

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

    // Create grid
    const color = new THREE.Color(lineColor)
    const material = new THREE.LineBasicMaterial({ color })
    const gridGroup = new THREE.Group()

    const omegaStep = (omegaMax - omegaMin) / omegaDivisions
    const thetaStep = (thetaMax - thetaMin) / thetaDivisions
    const phiStep = (phiMax - phiMin) / phiDivisions
    const rhoStep = (rhoMax - rhoMin) / rhoDivisions

    // Helper: compute product-form exponential components
    // e^z = A × [a + bi + cj + dk]
    // We visualize the vector part (b, c, d) in 3D
    const expQ = (omega, theta, phi, rho) => {
      const A = Math.exp(omega)
      const cosT = Math.cos(theta), sinT = Math.sin(theta)
      const cosP = Math.cos(phi), sinP = Math.sin(phi)
      const cosR = Math.cos(rho), sinR = Math.sin(rho)

      // Scalar part (not visualized)
      // a = cosT*cosP*cosR - sinT*sinP*sinR

      // Vector parts (visualized in 3D)
      const b = sinT * cosP * cosR + cosT * sinP * sinR
      const c = cosT * sinP * cosR - sinT * cosP * sinR
      const d = cosT * cosP * sinR + sinT * sinP * cosR

      return [A * b, A * c, A * d]
    }

    // Fixed ρ = 0 (slice through 4D parameter space)
    const rho = 0

    // Grid lines through the entire volume (not just faces)
    // Lines along ω (varying omega, fixed θ, φ)
    for (let j = 0; j <= thetaDivisions; j++) {
      const theta = thetaMin + j * thetaStep
      for (let k = 0; k <= phiDivisions; k++) {
        const phi = phiMin + k * phiStep
        const points = []
        for (let i = 0; i <= omegaDivisions; i++) {
          const omega = omegaMin + i * omegaStep
          const [x, y, z] = expQ(omega, theta, phi, rho)
          points.push(new THREE.Vector3(x, y, z))
        }
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
      }
    }

    // Lines along θ (varying theta, fixed ω, φ)
    for (let i = 0; i <= omegaDivisions; i++) {
      const omega = omegaMin + i * omegaStep
      for (let k = 0; k <= phiDivisions; k++) {
        const phi = phiMin + k * phiStep
        const points = []
        for (let j = 0; j <= thetaDivisions; j++) {
          const theta = thetaMin + j * thetaStep
          const [x, y, z] = expQ(omega, theta, phi, rho)
          points.push(new THREE.Vector3(x, y, z))
        }
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
      }
    }

    // Lines along φ (varying phi, fixed ω, θ)
    for (let i = 0; i <= omegaDivisions; i++) {
      const omega = omegaMin + i * omegaStep
      for (let j = 0; j <= thetaDivisions; j++) {
        const theta = thetaMin + j * thetaStep
        const points = []
        for (let k = 0; k <= phiDivisions; k++) {
          const phi = phiMin + k * phiStep
          const [x, y, z] = expQ(omega, theta, phi, rho)
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
  }, [omegaMin, omegaMax, thetaMin, thetaMax, phiMin, phiMax, rhoMin, rhoMax, resolution, lineColor])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default Q1Grid
