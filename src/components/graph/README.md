# Unified MeshGrid System

A generalized grid generation system for visualizing coordinate systems and curved spacetime geometries in 3D.

## Overview

The system provides three levels of grid generation, each with increasing sophistication in how they handle geometry and spacetime curvature.

```
┌─────────────────────────────────────────────────────────────────┐
│                    Unified MeshGrid System                      │
├─────────────────────────────────────────────────────────────────┤
│  Level 1: Coordinate Grid                                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  • Embedding function (u,v,w) → (x,y,z)                     │
│  • Fixed coordinate curves                                    │
│  • No metric awareness                                        │
│  └─────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│  Level 2: Metric-Aware Grid                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  • Metric tensor g_ij defines geometry                       │
│  • Proper distances along curves                             │
│  • Equidistant lines in actual geometry                      │
│  └─────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│  Level 3: Geodesic Grid                                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  • Christoffel symbols from metric                           │
│  • Numerically integrated geodesics                          │
│  • True "straight" lines in curved spacetime                 │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Level 1: Coordinate Grid

**Philosophy:** Simple embedding - map parameter space to 3D visualization.

### How It Works

1. Define an **embedding function** that maps (u, v, w) → (x, y, z)
2. Vary one parameter at a time while holding others fixed
3. Render lines through the resulting point clouds

### Use Cases

- Standard coordinate systems (Cartesian, cylindrical, spherical)
- Parametric surfaces and manifolds
- Quaternion visualizations
- Any (u,v,w) → (x,y,z) mapping

### Example

```jsx
import { MeshGrid } from './MeshGrid'
import { cartesian, cylindrical, spherical } from './coordinates'

// Standard coordinate system
<MeshGrid
  coordinate={cartesian}
  ranges={[[-5, 5], [-5, 5], [-5, 5]]}
  resolution={10}
/>

// Custom parametric surface
<MeshGrid
  embedding={(u, v, w) => [
    u * Math.cos(v),
    u * Math.sin(v),
    w
  ]}
  ranges={[[0, 2], [0, 2*Math.PI], [0, 1]]}
/>
```

### File Structure

```
src/components/graph/
├── MeshGrid.jsx           # Core component
├── coordinates/
│   ├── index.js           # Registry
│   ├── cartesian.js       # (x, y, z) → (x, y, z)
│   ├── cylindrical.js     # (r, θ, z) → (x, y, z)
│   ├── spherical.js       # (r, θ, φ) → (x, y, z)
│   └── quaternion.js      # Quaternion exp visualization
└── hooks/
    └── useMeshGenerator.js # Point generation logic
```

---

## Level 2: Metric-Aware Grid

**Philosophy:** Account for the metric when drawing lines - visualize actual distances.

### How It Works

1. Define a **metric tensor** g_ij(u,v,w) that describes the geometry
2. Compute proper distances along coordinate curves using:
   ```
   ds² = g_ij dx^i dx^j
   ```
3. Adjust line segment lengths so they represent equidistant points in the actual geometry

### Why It Matters

In curved spacetime, coordinate grids can be misleading:
- Schwarzschild: radial coordinates near the horizon are "stretched"
- FLRW: comoving coordinates stretch with cosmic expansion

Level 2 shows what the grid "actually looks like" geometrically.

### Use Cases

- Visualizing gravitational redshift effects
- Showing how coordinate choices distort perception
- Educational tools for general relativity

### Example

```jsx
import { MetricGrid } from './MetricGrid'
import { schwarzschildMetric } from './metrics'

<MetricGrid
  metric={schwarzschildMetric}
  gridType="metric-aware"
  resolution={15}
/>
```

### Metric Definition

```javascript
export const schwarzschildMetric = {
  name: 'Schwarzschild',
  description: 'Spacetime around a spherically symmetric mass',

  // Full 4D metric g_μν
  tensor: (r, theta = Math.PI/2) => {
    const rs = 2  // Schwarzschild radius
    return [
      [1 - rs/r, 0, 0, 0],           // g_tt
      [0, -1/(1 - rs/r), 0, 0],      // g_rr
      [0, 0, -r*r, 0],               // g_θθ
      [0, 0, 0, -r*r*sin(theta)**2]  // g_φφ
    ]
  },

  // Spatial slice (3D) for visualization
  spatial: (r, theta = Math.PI/2) => {
    const rs = 2
    return [
      [1, 0, 0],
      [0, 1/(1 - rs/r), 0],
      [0, 0, r*r]
    ]
  },

  // Embedding function for 3D visualization
  embedding: (r, theta, phi) => {
    const rs = 2
    const x = r * Math.sin(theta) * Math.cos(phi)
    const y = r * Math.sin(theta) * Math.sin(phi)
    const z = r > rs ? 2 * Math.sqrt(rs * (r - rs)) : 0
    return [x, y, z]
  }
}
```

### File Structure

```
src/components/graph/
├── MetricGrid.jsx         # Level 2 component
├── metric/
│   ├── index.js           # Registry
│   ├── christoffel.js     # Compute Γ^k_ij from g_ij
│   ├── distance.js        # Proper distance along curve
│   └── metrics/
│       ├── minkowski.js   # Flat spacetime
│       ├── schwarzschild.js
│       └── flrw.js        # Friedmann-Lemaître-Robertson-Walker
└── utils/
    └── tensor.js          # Matrix operations
```

---

## Level 3: Geodesic Grid

**Philosophy:** Draw true geodesics - the straightest possible paths in curved spacetime.

### How It Works

1. Compute **Christoffel symbols** Γ^k_ij from the metric tensor:
   ```
   Γ^k_ij = (1/2) g^kl (∂_i g_jl + ∂_j g_il - ∂_l g_ij)
   ```
2. Numerically integrate the **geodesic equation**:
   ```
   d²x^k/ds² + Γ^k_ij (dx^i/ds)(dx^j/ds) = 0
   ```
3. Render the resulting curves as grid lines

### Why It Matters

- Light rays follow null geodesics
- Free-falling objects follow timelike geodesics
- Coordinate curves ≠ geodesics in curved space

### Use Cases

- Visualizing gravitational lensing
- Showing light paths near black holes
- FLRW universe expansion visualization
- Educational demonstrations of curved spacetime

### Example

```jsx
import { GeodesicGrid } from './GeodesicGrid'
import { schwarzschildMetric } from './metrics'

<GeodesicGrid
  metric={schwarzschildMetric}
  gridType="null"        // or "timelike"
  initialDirections={[
    [1, 0, 0],           // Radial outward
    [1, 0.1, 0],         // Slightly angled
    [1, -0.1, 0],
    // ... more directions
  ]}
  maxSteps={1000}
/>
```

### Geodesic Integration

```javascript
// Simplified geodesic equation solver
function integrateGeodesic(metric, x0, v0, maxSteps, dt) {
  const path = [x0]
  let x = [...x0]
  let v = [...v0]

  for (let i = 0; i < maxSteps; i++) {
    // Compute Christoffel symbols at current position
    const Gamma = christoffel(metric, x)

    // Geodesic equation: a^k = -Γ^k_ij v^i v^j
    const a = Gamma.map((Gamma_k, k) => {
      return -Gamma_k.reduce((sum, Gamma_ij, ij) => {
        const [i, j] = [Math.floor(ij/3), ij % 3]
        return sum + Gamma_ij * v[i] * v[j]
      }, 0)
    })

    // Symplectic integrator (semi-implicit Euler)
    v = v.map((vi, k) => vi + a[k] * dt)
    x = x.map((xi, k) => xi + v[k] * dt)

    path.push([...x])

    // Stop if escaped or hit singularity
    if (x[0] < 2 || x[0] > 100) break
  }

  return path
}
```

### File Structure

```
src/components/graph/
├── GeodesicGrid.jsx       # Level 3 component
├── geodesic/
│   ├── index.js
│   ├── christoffel.js     # Compute from metric
│   ├── integrator.js      # Numerical integration
│   ├── null.js            # Light-like geodesics
│   └── timelike.js        # Particle trajectories
└── render/
    └── geodesicLines.js   # Three.js line rendering
```

---

## Comparison Matrix

| Feature | Level 1 | Level 2 | Level 3 |
|---------|---------|---------|---------|
| Embedding function | ✓ | ✓ | ✓ |
| Metric tensor | | ✓ | ✓ |
| Proper distances | | ✓ | ✓ |
| Christoffel symbols | | | ✓ |
| Null geodesics | | | ✓ |
| Timelike geodesics | | | ✓ |
| Light bending | | | ✓ |
| Complexity | Low | Medium | High |

---

## Quick Start

```jsx
import { MeshGrid, MetricGrid, GeodesicGrid } from './components/graph'
import { cartesian, schwarzschild } from './components/graph/coordinates'
import { schwarzschildMetric } from './components/graph/metric/metrics'

// Level 1: Simple coordinate grid
function CartesianExample() {
  return <MeshGrid coordinate={cartesian} resolution={10} />
}

// Level 2: Metric-aware (proper distances)
function SchwarzschildMetricExample() {
  return (
    <MetricGrid
      metric={schwarzschildMetric}
      gridType="metric-aware"
    />
  )
}

// Level 3: True geodesics (light paths)
function GravitationalLensingExample() {
  return (
    <GeodesicGrid
      metric={schwarzschildMetric}
      gridType="null"
      initialDirections={generateRadialDirections(12)}
    />
  )
}
```

---

## Adding New Metrics

To add a new spacetime metric:

1. Create `src/components/graph/metric/metrics/<name>.js`
2. Define the metric tensor and embedding function
3. Export from `src/components/graph/metric/index.js`

```javascript
// Example: Kerr (rotating black hole)
export const kerrMetric = {
  name: 'Kerr',
  description: 'Rotating black hole metric',

  tensor: (r, theta, a) => {
    const rs = 2
    const rho2 = r*r + a*a*Math.cos(theta)**2
    const delta = r*r - rs*r + a*a
    // ... full Kerr metric components
  },

  embedding: (r, theta, phi) => {
    // Embedding for visualization
    // ...
  }
}
```