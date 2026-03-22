# Level 1: Coordinate Grid

## Overview

Level 1 is the simplest grid generation approach in the Unified MeshGrid System. It uses a direct **embedding function** to map a parameter space (u, v, w) to 3D visualization coordinates (x, y, z).

## Core Concept

The philosophy is straightforward: **Simple embedding - map parameter space to 3D visualization.**

```
(u, v, w) ──[embedding]──> (x, y, z)
```

No metric awareness, no curvature considerations—just a direct mathematical mapping from one coordinate system to another.

## How It Works

### Step 1: Define the Embedding Function

An embedding function takes three parameters and returns 3D coordinates:

```javascript
// Cartesian coordinates (identity mapping)
const cartesian = {
  name: 'Cartesian',
  embedding: (x, y, z) => [x, y, z],
  ranges: [[-5, 5], [-5, 5], [-5, 5]]
}

// Cylindrical coordinates
const cylindrical = {
  name: 'Cylindrical',
  embedding: (r, theta, z) => [
    r * Math.cos(theta),
    r * Math.sin(theta),
    z
  ],
  ranges: [[0, 5], [0, 2*Math.PI], [-5, 5]]
}

// Spherical coordinates
const spherical = {
  name: 'Spherical',
  embedding: (r, theta, phi) => [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(theta)
  ],
  ranges: [[0, 5], [0, Math.PI], [0, 2*Math.PI]]
}
```

### Step 2: Generate Grid Lines

The `useMeshGenerator` hook creates grid lines by:

1. **Discretizing the parameter space** into a regular grid
2. **Varying one parameter at a time** while holding others fixed
3. **Computing 3D positions** using the embedding function
4. **Creating Three.js Line geometries** for rendering

```javascript
// From useMeshGenerator.js
for (let j = 0; j <= vDivisions; j++) {
  for (let k = 0; k <= wDivisions; k++) {
    const v = vMin + j * vStep
    const w = wMin + k * wStep
    const points = []
    
    // Vary u, hold v and w fixed
    for (let i = 0; i <= uDivisions; i++) {
      const u = uMin + i * uStep
      const [x, y, z] = embedding(u, v, w)
      points.push(new THREE.Vector3(x, y, z))
    }
    
    lines.push({ geometry: new THREE.BufferGeometry().setFromPoints(points) })
  }
}
```

### Step 3: Render with Three.js

The `MeshGrid` component renders the grid using Three.js:

```javascript
// Scene setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })

// Create grid lines
meshLines.forEach(({ geometry }) => {
  const line = new THREE.Line(geometry, material)
  gridGroup.add(line)
})

// Add orbit controls for interaction
const controls = new OrbitControls(camera, renderer.domElement)
```

## Architecture

```
src/components/graph/
├── MeshGrid.jsx              # Main Level 1 component
├── hooks/
│   └── useMeshGenerator.js   # Grid generation logic
└── coordinates/
    ├── index.js              # Registry
    ├── cartesian.js          # (x, y, z) → (x, y, z)
    ├── cylindrical.js        # (r, θ, z) → (x, y, z)
    ├── spherical.js          # (r, θ, φ) → (x, y, z)
    └── quaternion.js         # Quaternion visualization
```

## Usage

```jsx
import { MeshGrid } from './components/graph'
import { cartesian, spherical } from './components/graph/coordinates'

// Basic coordinate grid
<MeshGrid
  coordinate={cartesian}
  resolution={10}
  lineColor="#6366f1"
/>

// Custom parametric surface
<MeshGrid
  embedding={(u, v, w) => [
    u * Math.cos(v),
    u * Math.sin(v),
    w
  ]}
  ranges={[[0, 2], [0, 2*Math.PI], [0, 1]]}
  resolution={15}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `coordinate` | Object | required | Coordinate system config with `embedding` function |
| `ranges` | Array | from coordinate | Override: `[[uMin, uMax], [vMin, vMax], [wMin, wMax]]` |
| `resolution` | number | 10 | Grid density (divisions per unit range) |
| `lineColor` | string | '#6366f1' | Color of grid lines |
| `showAxes` | boolean | true | Whether to show XYZ axes helper |
| `axisSize` | number | 5 | Size of axes helper |

## Use Cases

- **Standard coordinate systems**: Visualize Cartesian, cylindrical, spherical grids
- **Parametric surfaces**: Any (u,v,w) → (x,y,z) mapping
- **Quaternion visualizations**: Show the exponential map geometry
- **Educational tools**: Demonstrate coordinate transformations

## Limitations

Level 1 has **no metric awareness**:

- Grid lines are equally spaced in **parameter space**, not physical space
- Does not account for spacetime curvature
- Coordinate curves ≠ geodesics in curved space
- Cannot visualize gravitational effects like light bending

For metric-aware visualization, use **Level 2: Metric-Aware Grid**.
For true geodesic paths, use **Level 3: Geodesic Grid**.

## Example: Visualizing Coordinate Distortion

```jsx
// Compare Cartesian vs Spherical grids
function CoordinateComparison() {
  return (
    <div>
      <MeshGrid coordinate={cartesian} ranges={[[-5,5], [-5,5], [-5,5]]} />
      <MeshGrid coordinate={spherical} ranges={[[0,5], [0,Math.PI], [0,2*Math.PI]]} />
    </div>
  )
}
```

The spherical grid shows how the same physical space looks when parameterized differently—grid lines converge at the poles and the origin.
