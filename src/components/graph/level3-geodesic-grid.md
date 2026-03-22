# Level 3: Geodesic Grid

## Overview

Level 3 is the most sophisticated grid system, rendering **true geodesics**—the straightest possible paths through curved spacetime. This level shows how light and matter actually move in curved geometry.

## Core Concept

The philosophy: **Draw true geodesics—the straightest paths in curved spacetime.**

```
Metric → Christoffel Symbols → Geodesic Equation → Numerical Integration → Geodesic Paths
```

## Why Level 3 Matters

In curved spacetime:
- **Light rays follow null geodesics** (ds² = 0)
- **Free-falling objects follow timelike geodesics** (ds² > 0)
- **Coordinate curves ≠ geodesics** in curved space
- **Gravitational lensing** is the bending of null geodesics

Level 3 shows the actual paths that particles and light take.

## Mathematical Foundation

### Christoffel Symbols

The Christoffel symbols Γ^k_ij encode how the coordinate system curves:

```
Γ^k_ij = (1/2) g^kl (∂_i g_jl + ∂_j g_il - ∂_l g_ij)
```

```javascript
// From christoffel.js
export function christoffel(metricFn, x) {
  // Get metric and its inverse at point
  const g = metricFn(...x)
  const gInv = matInverse3(g)
  
  // Compute partial derivatives: dg[i][j][k] = ∂_i g_jk
  const dg = [
    partial(metricFn, x, 0),  // ∂_x g
    partial(metricFn, x, 1),  // ∂_y g
    partial(metricFn, x, 2)   // ∂_z g
  ]
  
  // Compute Christoffel symbols
  const Gamma = []
  for (let k = 0; k < 3; k++) {
    Gamma[k] = []
    for (let i = 0; i < 3; i++) {
      Gamma[k][i] = []
      for (let j = 0; j < 3; j++) {
        let sum = 0
        for (let l = 0; l < 3; l++) {
          const term1 = dg[i][j][l]  // ∂_i g_jl
          const term2 = dg[j][i][l]  // ∂_j g_il
          const term3 = dg[l][i][j]  // ∂_l g_ij
          sum += gInv[k][l] * (term1 + term2 - term3)
        }
        Gamma[k][i][j] = sum / 2
      }
    }
  }
  
  return Gamma
}
```

### The Geodesic Equation

The geodesic equation describes the path of a freely falling particle:

```
d²x^k/ds² + Γ^k_ij (dx^i/ds)(dx^j/ds) = 0
```

Or equivalently, the acceleration is:

```
a^k = -Γ^k_ij v^i v^j
```

```javascript
// From christoffel.js
export function geodesicAcceleration(Gamma, v) {
  const a = [0, 0, 0]
  
  for (let k = 0; k < 3; k++) {
    let sum = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        sum += Gamma[k][i][j] * v[i] * v[j]
      }
    }
    a[k] = -sum
  }
  
  return a
}
```

### Numerical Integration

The geodesic equation is solved numerically using a semi-implicit Euler method:

```javascript
// From integrator.js (simplified)
function integrateGeodesic(metric, x0, v0, maxSteps, dt) {
  const path = [x0]
  let x = [...x0]
  let v = [...v0]
  
  for (let i = 0; i < maxSteps; i++) {
    // Compute Christoffel symbols at current position
    const Gamma = christoffel(metric, x)
    
    // Geodesic equation: a^k = -Γ^k_ij v^i v^j
    const a = geodesicAcceleration(Gamma, v)
    
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

## How It Works

### Step 1: Choose Geodesic Type

**Null geodesics** (light paths):
```javascript
// From null.js
export function nullGeodesics(metric, origin, nRays, pattern, options) {
  // Generate initial directions for light rays
  const directions = generateLensingDirections(nRays, pattern)
  
  // Integrate each null geodesic
  return directions.map(dir => 
    integrateGeodesic(metric, origin, dir, options.maxSteps, 0.01)
  )
}
```

**Timelike geodesics** (particle trajectories):
```javascript
// From timelike.js
export function timelikeGeodesics(metric, origin, nRays, pattern, speed, options) {
  // Generate initial velocities for particles
  const velocities = generateDirections(nRays, pattern, speed)
  
  // Integrate each timelike geodesic
  return velocities.map(vel =>
    integrateGeodesic(metric, origin, vel, options.maxSteps, 0.02)
  )
}
```

### Step 2: Generate Initial Directions

```javascript
// Radial pattern - rays emanating from a point
function generateRadialDirections(nRays) {
  const directions = []
  for (let i = 0; i < nRays; i++) {
    const theta = (2 * Math.PI * i) / nRays
    directions.push([
      Math.cos(theta),  // Outward radial
      Math.sin(theta) * 0.1,  // Slight angle
      0
    ])
  }
  return directions
}

// Spherical pattern - rays in all directions
function generateSphericalDirections(nRays) {
  // Distribute points on a sphere using Fibonacci lattice
  // ...
}
```

### Step 3: Render Geodesics

```javascript
// From GeodesicGrid.jsx
const geodesicPaths = useMemo(() => {
  if (!spatialMetric || !embedding) return []
  
  let paths
  if (geodesicType === 'null') {
    paths = nullGeodesics(spatialMetric, origin, nRays, pattern, options)
  } else {
    paths = timelikeGeodesics(spatialMetric, origin, nRays, pattern, speed, options)
  }
  
  // Convert parameter space paths to 3D embedding
  return paths.map(path =>
    path.map(params => {
      const [x, y, z] = embedding(...params)
      return new THREE.Vector3(x, y, z)
    })
  )
}, [spatialMetric, embedding, geodesicType, origin, nRays, pattern, speed])
```

## Architecture

```
src/components/graph/
├── GeodesicGrid.jsx        # Level 3 component
├── geodesic/
│   ├── index.js            # Registry
│   ├── integrator.js       # Numerical integration
│   ├── christoffel.js      # Compute Γ^k_ij
│   ├── null.js             # Light-like geodesics
│   └── timelike.js         # Particle trajectories
├── metric/
│   └── metrics/            # Metric definitions
└── render/
    └── geodesicLines.js    # Three.js rendering
```

## Usage

```jsx
import { GeodesicGrid } from './components/graph'
import { schwarzschildMetric } from './components/graph/metric/metrics'

// Light paths around a black hole (gravitational lensing)
<GeodesicGrid
  metric={schwarzschildMetric}
  geodesicType="null"
  origin={[5, Math.PI/2, 0]}
  nRays={24}
  pattern="spherical"
  maxSteps={500}
  lineColor="#ef4444"
/>

// Particle orbits around a black hole
<GeodesicGrid
  metric={schwarzschildMetric}
  geodesicType="timelike"
  origin={[8, Math.PI/2, 0]}
  nRays={12}
  pattern="cone"
  speed={0.3}
  maxSteps={1000}
  lineColor="#3b82f6"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `metric` | Object | required | Metric config |
| `geodesicType` | string | 'null' | 'null' or 'timelike' |
| `origin` | Array | [5, π/2, 0] | Starting point [r, θ, φ] |
| `nRays` | number | 12 | Number of geodesics |
| `pattern` | string | 'spherical' | 'radial', 'spherical', 'cone' |
| `speed` | number | 0.5 | Initial speed (timelike only) |
| `maxSteps` | number | 1000 | Max integration steps |
| `lineColor` | string | '#ef4444' | Color of geodesics |
| `showAxes` | boolean | true | Show XYZ axes |
| `axisSize` | number | 5 | Axes size |

## Visual Effects

### Gravitational Lensing

Null geodesics (light) bend around massive objects:

```
        Light source
            |
            v
    ~~~~~~~~~~~~~~~~  ← Bent light paths
           / \
          /   \
         /  ●  \      ← Black hole
        /       \
       v         v
    Observer   Observer
```

### Particle Orbits

Timelike geodesics show orbital mechanics:
- **Circular orbits**: Stable orbits at r > 6GM/c²
- **Elliptical orbits**: Precessing ellipses (Mercury's perihelion)
- **Escape trajectories**: Hyperbolic paths
- **Plunge orbits**: Falling into the black hole

### Event Horizon

At r = 2GM/c² (Schwarzschild radius):
- All null geodesics point inward
- No escape possible
- Visualized as a black sphere

## Comparison Matrix

| Feature | Level 1 | Level 2 | Level 3 |
|---------|---------|---------|---------|
| Embedding function | ✓ | ✓ | ✓ |
| Metric tensor | ✗ | ✓ | ✓ |
| Proper distances | ✗ | ✓ | ✓ |
| Christoffel symbols | ✗ | ✗ | ✓ |
| Null geodesics | ✗ | ✗ | ✓ |
| Timelike geodesics | ✗ | ✗ | ✓ |
| Light bending | ✗ | ✗ | ✓ |
| Orbital mechanics | ✗ | ✗ | ✓ |
| Complexity | Low | Medium | High |

## Use Cases

- **Gravitational lensing**: Visualize how mass bends light
- **Black hole physics**: Show photon spheres and event horizons
- **Orbital mechanics**: Demonstrate relativistic orbits
- **Educational tools**: Teach general relativity concepts
- **Research visualization**: Explore spacetime geometries

## Example: Gravitational Lensing Demo

```jsx
function GravitationalLensingDemo() {
  return (
    <GeodesicGrid
      metric={schwarzschildMetric}
      geodesicType="null"
      origin={[15, Math.PI/2, 0]}
      nRays={36}
      pattern="radial"
      maxSteps={800}
      lineColor="#fbbf24"
    />
  )
}
```

This shows light rays emanating from a point and bending around a black hole, demonstrating the gravitational lensing effect.

## Performance Considerations

Level 3 is computationally intensive:
- **Christoffel symbols** must be computed at each integration step
- **Numerical integration** requires many steps for accuracy
- **Many geodesics** multiply the computational cost

Optimization strategies:
- Cache Christoffel computations where possible
- Use adaptive step sizes
- Limit maxSteps based on use case
- Consider WebGL compute shaders for heavy computations

## Further Reading

- Misner, Thorne, Wheeler: *Gravitation*, Chapter 13 (Geodesics)
- Carroll: *Spacetime and Geometry*, Chapter 3
- Hartle: *Gravity*, Chapter 9 (Geodesic equation)
