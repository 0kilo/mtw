import { useState } from 'react'
import MetricGrid, { 
  cartesianMetric, 
  cylindricalMetric, 
  sphericalMetric, 
  q1Metric,
  schwarzschildMetric 
} from './MetricGrid'
import './MetricGraph.css'

function MetricGraph() {
  const [selectedMetric, setSelectedMetric] = useState('cartesian')
  const [resolution, setResolution] = useState(10)
  const [lineColor, setLineColor] = useState('#6366f1')

  const metrics = {
    cartesian: cartesianMetric,
    cylindrical: cylindricalMetric,
    spherical: sphericalMetric,
    q1: q1Metric,
    schwarzschild: schwarzschildMetric,
  }

  const currentMetric = metrics[selectedMetric]

  return (
    <div className="metric-graph">
      <aside className="metric-controls">
        <h3>Coordinate System</h3>

        <div className="control-group">
          <label>
            Metric
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              <option value="cartesian">Cartesian (x, y, z)</option>
              <option value="cylindrical">Cylindrical (r, θ, z)</option>
              <option value="spherical">Spherical (r, θ, φ)</option>
              <option value="q1">Q1 - Quaternion Product (ω, θ, φ)</option>
              <option value="schwarzschild">Schwarzschild (Gravity Well)</option>
            </select>
          </label>
        </div>

        <div className="control-group">
          <label>
            Resolution: {resolution}
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={resolution}
              onChange={(e) => setResolution(parseInt(e.target.value))}
            />
          </label>
        </div>

        <div className="control-group">
          <label>
            Line Color
            <input
              type="color"
              value={lineColor}
              onChange={(e) => setLineColor(e.target.value)}
            />
          </label>
        </div>

        <div className="metric-info">
          <h4>About {currentMetric.name}</h4>
          {selectedMetric === 'cartesian' && (
            <p>Flat Euclidean space. Grid lines are straight and orthogonal.</p>
          )}
          {selectedMetric === 'cylindrical' && (
            <p>Coordinates (r, θ, z). Useful for problems with axial symmetry.</p>
          )}
          {selectedMetric === 'spherical' && (
            <p>Coordinates (r, θ, φ). Natural for spherically symmetric problems.</p>
          )}
          {selectedMetric === 'q1' && (
            <p>Product-form quaternion exponential: e^z = e^ω·e^(θi)·e^(φj)·e^(ρk)</p>
          )}
          {selectedMetric === 'schwarzschild' && (
            <p>
              Spatial slice of Schwarzschild spacetime. Shows curvature around a 
              massive object (Flamm's paraboloid embedding).
            </p>
          )}
        </div>
      </aside>

      <main className="metric-container">
        <MetricGrid
          metric={currentMetric}
          embedding={currentMetric.embedding}
          ranges={currentMetric.ranges}
          resolution={resolution}
          lineColor={lineColor}
        />
      </main>
    </div>
  )
}

export default MetricGraph
