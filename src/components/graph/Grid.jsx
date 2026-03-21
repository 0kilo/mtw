import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

function Grid({
  xMin = -5,
  xMax = 5,
  yMin = -5,
  yMax = 5,
  zMin = -5,
  zMax = 5,
  resolution = 1,
  lineColor = '#6366f1',
  coordinateSystem = 'cartesian',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Calculate divisions based on resolution and bounds
    const xDivisions = Math.max(2, Math.round(resolution * (xMax - xMin)))
    const yDivisions = Math.max(2, Math.round(resolution * (yMax - yMin)))
    const zDivisions = Math.max(2, Math.round(resolution * (zMax - zMin)))

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

    // Create grid based on coordinate system
    const color = new THREE.Color(lineColor)
    const material = new THREE.LineBasicMaterial({ color })
    const gridGroup = new THREE.Group()

    if (coordinateSystem === 'cartesian') {
      createCartesianGrid(gridGroup, {
        xMin, xMax, yMin, yMax, zMin, zMax,
        xDivisions, yDivisions, zDivisions,
        material,
      })
    } else if (coordinateSystem === 'cylindrical') {
      createCylindricalGrid(gridGroup, {
        rMax: Math.max(xMax, yMax),
        zMin, zMax,
        rDivisions: xDivisions,
        thetaDivisions: yDivisions,
        zDivisions,
        material,
      })
    } else if (coordinateSystem === 'spherical') {
      createSphericalGrid(gridGroup, {
        rMax: Math.max(xMax, yMax, zMax),
        rDivisions: xDivisions,
        thetaDivisions: yDivisions,
        phiDivisions: zDivisions,
        material,
      })
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
  }, [xMin, xMax, yMin, yMax, zMin, zMax, resolution, lineColor, coordinateSystem])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

// Cartesian grid - lines on the 6 faces of a box
function createCartesianGrid(group, {
  xMin, xMax, yMin, yMax, zMin, zMax,
  xDivisions, yDivisions, zDivisions,
  material,
}) {
  const xStep = (xMax - xMin) / xDivisions
  const yStep = (yMax - yMin) / yDivisions
  const zStep = (zMax - zMin) / zDivisions

  // XZ plane (y = yMin and y = yMax) - lines along X and Z
  for (let k = 0; k <= zDivisions; k++) {
    const z = zMin + k * zStep
    const points1 = [new THREE.Vector3(xMin, yMin, z), new THREE.Vector3(xMax, yMin, z)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points1), material))
    const points2 = [new THREE.Vector3(xMin, yMax, z), new THREE.Vector3(xMax, yMax, z)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points2), material))
  }
  for (let i = 0; i <= xDivisions; i++) {
    const x = xMin + i * xStep
    const points3 = [new THREE.Vector3(x, yMin, zMin), new THREE.Vector3(x, yMin, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points3), material))
    const points4 = [new THREE.Vector3(x, yMax, zMin), new THREE.Vector3(x, yMax, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points4), material))
  }

  // XY plane (z = zMin and z = zMax) - lines along X and Y
  for (let j = 0; j <= yDivisions; j++) {
    const y = yMin + j * yStep
    const points5 = [new THREE.Vector3(xMin, y, zMin), new THREE.Vector3(xMax, y, zMin)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points5), material))
    const points6 = [new THREE.Vector3(xMin, y, zMax), new THREE.Vector3(xMax, y, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points6), material))
  }
  for (let i = 0; i <= xDivisions; i++) {
    const x = xMin + i * xStep
    const points7 = [new THREE.Vector3(x, yMin, zMin), new THREE.Vector3(x, yMax, zMin)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points7), material))
    const points8 = [new THREE.Vector3(x, yMin, zMax), new THREE.Vector3(x, yMax, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points8), material))
  }

  // YZ plane (x = xMin and x = xMax) - lines along Y and Z
  for (let k = 0; k <= zDivisions; k++) {
    const z = zMin + k * zStep
    const points9 = [new THREE.Vector3(xMin, yMin, z), new THREE.Vector3(xMin, yMax, z)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points9), material))
    const points10 = [new THREE.Vector3(xMax, yMin, z), new THREE.Vector3(xMax, yMax, z)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points10), material))
  }
  for (let j = 0; j <= yDivisions; j++) {
    const y = yMin + j * yStep
    const points11 = [new THREE.Vector3(xMin, y, zMin), new THREE.Vector3(xMin, y, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points11), material))
    const points12 = [new THREE.Vector3(xMax, y, zMin), new THREE.Vector3(xMax, y, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points12), material))
  }
}

// Cylindrical grid - (r, θ, z) coordinates
// Lines only on the exterior: outer cylinder, top circle, bottom circle
function createCylindricalGrid(group, {
  rMax, zMin, zMax,
  rDivisions, thetaDivisions, zDivisions,
  material,
}) {
  const rStep = rMax / rDivisions
  const thetaStep = (2 * Math.PI) / thetaDivisions
  const zStep = (zMax - zMin) / zDivisions

  // Outer cylinder surface - circles at constant z (varying θ)
  for (let k = 0; k <= zDivisions; k++) {
    const z = zMin + k * zStep
    const points = []
    for (let j = 0; j <= thetaDivisions; j++) {
      const theta = j * thetaStep
      points.push(new THREE.Vector3(rMax * Math.cos(theta), rMax * Math.sin(theta), z))
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
  }

  // Outer cylinder surface - vertical lines at constant θ (varying z)
  for (let j = 0; j < thetaDivisions; j++) {
    const theta = j * thetaStep
    const x = rMax * Math.cos(theta)
    const y = rMax * Math.sin(theta)
    const points = [new THREE.Vector3(x, y, zMin), new THREE.Vector3(x, y, zMax)]
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
  }

  // Top circle (z = zMax) - radial lines
  for (let j = 0; j < thetaDivisions; j++) {
    const theta = j * thetaStep
    const points = []
    for (let i = 0; i <= rDivisions; i++) {
      const r = i * rStep
      points.push(new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), zMax))
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
  }

  // Bottom circle (z = zMin) - radial lines
  for (let j = 0; j < thetaDivisions; j++) {
    const theta = j * thetaStep
    const points = []
    for (let i = 0; i <= rDivisions; i++) {
      const r = i * rStep
      points.push(new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), zMin))
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
  }
}

// Spherical grid - (r, θ, φ) coordinates
// Lines only on the exterior sphere surface
function createSphericalGrid(group, {
  rMax,
  rDivisions, thetaDivisions, phiDivisions,
  material,
}) {
  const thetaStep = (2 * Math.PI) / thetaDivisions
  const phiStep = Math.PI / phiDivisions

  // Latitude circles (constant φ, varying θ) - on outer sphere only
  for (let k = 1; k < phiDivisions; k++) {
    const phi = k * phiStep
    const points = []
    for (let j = 0; j <= thetaDivisions; j++) {
      const theta = j * thetaStep
      const x = rMax * Math.sin(phi) * Math.cos(theta)
      const y = rMax * Math.sin(phi) * Math.sin(theta)
      const z = rMax * Math.cos(phi)
      points.push(new THREE.Vector3(x, y, z))
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
  }

  // Longitude lines (constant θ, varying φ) - on outer sphere only
  for (let j = 0; j < thetaDivisions; j++) {
    const theta = j * thetaStep
    const points = []
    for (let k = 0; k <= phiDivisions; k++) {
      const phi = k * phiStep
      const x = rMax * Math.sin(phi) * Math.cos(theta)
      const y = rMax * Math.sin(phi) * Math.sin(theta)
      const z = rMax * Math.cos(phi)
      points.push(new THREE.Vector3(x, y, z))
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material))
  }
}

export default Grid
