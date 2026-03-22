# Level 2: Metric-Aware Grid

## Overview

Level 2 introduces **metric awareness** to grid generation. Unlike Level 1 which simply maps coordinates, Level 2 accounts for the actual geometry defined by a metric tensor, showing what the grid "actually looks like" in curved spacetime.

## Core Concept

The philosophy: **Account for the metric when drawing lines—visualize actual distances.**

```
Metric Tensor g_ij → Proper Distances → Equidistant Grid Lines
```

## Why Level 2 Matters

In curved spacetime, coordinate grids can be **highly misleading**:

- **Schwarzschild metric**: Radial coordinates near the event horizon are "stretched"—equal coordinate steps represent vastly different proper distances
- **FLRW metric**: Comoving coordinates stretch with cosmic expansion
- **General relativity**: Coordinate choices are arbitrary; the metric tells the physical truth

Level 2 shows the **geometric reality** behind the coordinates.

## Mathematical Foundation

### The Metric Tensor

The metric tensor `g_ij` defines the geometry through the line element:

```
ds² = g_ij dx^i dx^j
```

For a 3D spatial slice:

```javascript
// Schwarzschild metric (spatial part)
const schwarzschildSpatial = (r, theta, phi) => {
  const rs = 2  // Schwarzschild radius
  return [
    [1 / (1 - rs/r), 0, 0],           // g_rr
    [0, r*r, 0],                       // g_θθ
    [0, 0, r*r*Math.sin(theta)**2]    // g_φφ
  ]
}
```

### Proper Distance

The proper distance between two nearby points is:

```
ds = √(g_ij dx^i dx^j)
```

```javascript
// From distance.js
export function properDistance(metricFn, x1, x2) {
  const dx = [
    x2[0] - x1[0],
    x2[1] - x1[1],
    x2[2] - x1[2]
  ]
  
  // Get metric at midpoint
  const mid = [(x1[0]+x2[0])/2, (x1[1]+x2[1])/2, (x1[2]+x2[2])/2]
  const g = metricFn(...mid)
  
  return properLength(g, dx)
}
```

### Equidistant Points

To create a grid where lines represent equal proper distances:

```javascript
// From distance.js
export function equidistantPoints(metricFn, path, spacing = 0.1) {
  const result = [path[0]]
  let accumulatedDist = 0
  let lastPoint = path[0]
  
  for (let i = 1; i < path.length; i++) {
    const segmentDist = properDistance(metricFn, lastPoint, path[i])
    accumulatedDist += segmentDist
    
    while (accumulatedDist >= spacing) {
      // Interpolate to find point at exact spacing
      const t = (spacing - (accumulatedDist - segmentDist)) / segmentDist
      const newPoint = [
        lastPoint[0] + t * (path[i][0] - lastPoint[0]),
        lastPoint[1] + t * (path[i][1] - lastPoint[1]),
        lastPoint[2] + t * (path[i][2] - lastPoint[2])
      ]
      result.push(newPoint)
      accumulatedDist -= spacing
      lastPoint = newPoint
    }
  }
  
  return result
}
```

## How It Works

### Step 1: Define the Metric

A metric definition includes the tensor, embedding, and ranges:

```javascript
// From metric/metrics/schwarzschild.js
export const schwarzschildMetric = {
  name: 'Schwarzschild',
  description: 'Spacetime around a spherically symmetric mass',
  type: 'curved',
  
  // Full 4D metric g_μν
  tensor: (r, theta = Math.PI/2) => {
    const rs = 2
    return [
      [1 - rs/r, 0, 0, 0],           // g_tt
      [0, -1/(1 - rs/r), 0, 0],      // g_rr
      [0, 0, -r*r, 0],               // g_θθ
      [0, 0, 0, -r*r*Math.sin(theta)**2]  // g_φφ
    ]
  },
  
  // Spatial slice for visualization
  spatial: (r, theta = Math.PI/2) => {
    const rs = 2
    return [
      [1/(1 - rs/r), 0, 0],
      [0, r*r, 0],
      [0, 0, r*r*Math.sin(theta)**2]
    ]
  },
  
  // Embedding for 3D visualization
  embedding: (r, theta, phi) => {
    const rs = 2
    const x = r * Math.sin(theta) * Math.cos(phi)
    const y = r * Math.sin(theta) * Math.sin(phi)
    const z = r > rs ? 2 * Math.sqrt(rs * (r - rs)) : 0
    return [x, y, z]
  },
  
  ranges: [[2.1, 10], [0, Math.PI], [0, 2*Math.PI]]
}
```

### Step 2: Compute Distance Scale Factors

```javascript
// From distance.js
export function distanceScaleFactors(metricFn, x) {
  const g = metricFn(...x)
  
  // Proper length of unit coordinate steps
  const dx = [1, 0, 0]
  const dy = [0, 1, 0]
  const dz = [0, 0, 1]
  
  return {
    u: properLength(g, dx),
    v: properLength(g, dy),
    w: properLength(g, dz)
  }
}
```

### Step 3: Generate Metric-Aware Grid

The `MetricGrid` component adjusts line segments for proper distances:

```javascript
// From MetricGrid.jsx
const spacing = getSpacing()  // Based on metric scale factors

// Generate parameter space points
const paramPoints = []
for (let i = 0; i <= uDivisions; i++) {
  paramPoints.push([uMin + i * uStep, v, w])
}

// Convert to equidistant points in proper distance
const finalPoints = equidistantPoints(spatialMetric, paramPoints, spacing)
  .map(([u, v, w]) => {
    const [x, y, z] = embedding(u, v, w)
    return new THREE.Vector3(x, y, z)
  })
```

## Architecture

```
src/components/graph/
├── MetricGrid.jsx            # Level 2 component
├── metric/
│   ├── index.js              # Registry
│   ├── christoffel.js        # Compute Γ^k_ij from g_ij
│   ├── distance.js           # Proper distance calculations
│   └── metrics/
│       ├── minkowski.js      # Flat spacetime
│       ├── schwarzschild.js  # Static black hole
│       └── flrw.js           # Expanding universe
└── utils/
    └── tensor.js             # Matrix/tensor operations
```

## Usage

```jsx
import { MetricGrid } from './components/graph'
import { schwarzschildMetric } from './components/graph/metric/metrics'

// Metric-aware grid showing proper distances
<MetricGrid
  metric={schwarzschildMetric}
  resolution={15}
  metricAware={true}
  lineColor="#6366f1"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `metric` | Object | required | Metric config with `spatial`, `embedding` |
| `ranges` | Array | from metric | Override parameter ranges |
| `resolution` | number | 10 | Grid density |
| `metricAware` | boolean | true | If true, adjust for proper distances |
| `lineColor` | string | '#6366f1' | Color of grid lines |
| `showAxes` | boolean | true | Show XYZ axes |
| `axisSize` | number | 5 | Axes size |

## Visual Effects

### Schwarzschild Metric

Near the event horizon (r = 2GM/c²):
- Coordinate grid lines appear **compressed** radially
- Equal coordinate steps represent **increasing proper distances**
- Shows gravitational time dilation effects

### FLRW Metric (Cosmology)

In an expanding universe:
- Comoving coordinates stay fixed
- Proper distances **increase with scale factor**
- Visualizes cosmic expansion

## Comparison with Level 1

| Feature | Level 1 | Level 2 |
|---------|---------|---------|
| Embedding function | ✓ | ✓ |
| Metric tensor | ✗ | ✓ |
| Proper distances | ✗ | ✓ |
| Equidistant lines | ✗ | ✓ |
| Shows curvature effects | ✗ | Partial |

## Use Cases

- **Visualizing gravitational redshift**: Show how light loses energy climbing out of a gravity well
- **Educational tools**: Demonstrate how coordinate choices distort perception
- **Black hole visualization**: Show spacetime stretching near the horizon
- **Cosmology**: Visualize expanding universe metrics

## Limitations

Level 2 shows **static geometry** but not **dynamics**:
- Does not compute geodesics (particle/light paths)
- Cannot show light bending or gravitational lensing
- Grid lines follow coordinate curves, not true "straight" lines

For true geodesic visualization, use **Level 3: Geodesic Grid**.

## Example: Comparing Flat vs Curved Space

```jsx
function MetricComparison() {
  return (
    <div>
      {/* Flat space - uniform grid */}
      <MetricGrid metric={minkowskiMetric} />
      
      {/* Curved space - distorted grid near mass */}
      <MetricGrid metric={schwarzschildMetric} />
    </div>
  )
}
```

The comparison reveals how mass curves spacetime—grid lines that would be equally spaced in flat space become distorted near a massive object.
