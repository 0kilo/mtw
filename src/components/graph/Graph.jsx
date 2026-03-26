import { useState } from 'react'
import MeshGrid from './MeshGrid'
import MetricGrid from './MetricGrid'
import GeodesicGrid from './GeodesicGrid'
import { getCoordinateSystem, cartesian } from './coordinates'
import { getMetric, minkowskiMetric, schwarzschildMetric } from './metric'
import './Graph.css'

function Graph() {
  // Grid level: 1 = coordinate grid, 2 = metric-aware grid, 3 = geodesic grid
  const [gridLevel, setGridLevel] = useState(1)

  // Level 1: Coordinate system
  const [coordinateSystem, setCoordinateSystem] = useState('cartesian')
  const coordinate = getCoordinateSystem(coordinateSystem) || cartesian

  // Level 2: Metric system
  const [metricSystem, setMetricSystem] = useState('minkowski')
  const metric = getMetric(metricSystem) || minkowskiMetric

  // Level 3: Geodesic system
  const [geodesicMetric, setGeodesicMetric] = useState('schwarzschild')
  const geoMetric = getMetric(geodesicMetric) || schwarzschildMetric
  const [geodesicType, setGeodesicType] = useState('null') // 'null' or 'timelike'
  const [nRays, setNRays] = useState(16)
  const [geoPattern, setGeoPattern] = useState('radial')
  const [geoSpeed, setGeoSpeed] = useState(0.5)

  // Range state - initialize based on level
  const [ranges, setRanges] = useState(() =>
    gridLevel === 1 ? coordinate.ranges : metric.ranges
  )

  // Resolution
  const [resolution, setResolution] = useState(10)

  // Styling
  const [lineColor, setLineColor] = useState('#6366f1')

  // Metric-aware toggle
  const [metricAware, setMetricAware] = useState(true)

  // Handle level change
  const handleLevelChange = (newLevel) => {
    setGridLevel(newLevel)
    if (newLevel === 1) {
      const coord = getCoordinateSystem(coordinateSystem)
      setRanges(coord?.ranges || [[-5, 5], [-5, 5], [-5, 5]])
    } else {
      const met = getMetric(metricSystem)
      setRanges(met?.ranges || [[-5, 5], [-5, 5], [-5, 5]])
    }
  }

  // Handle coordinate system change (Level 1)
  const handleCoordinateChange = (newSystem) => {
    const coord = getCoordinateSystem(newSystem)
    if (coord) {
      setRanges(coord.ranges)
    }
    setCoordinateSystem(newSystem)
  }

  // Handle metric change (Level 2)
  const handleMetricChange = (newMetric) => {
    const met = getMetric(newMetric)
    if (met) {
      setRanges(met.ranges)
    }
    setMetricSystem(newMetric)
  }

  // Handle individual range changes
  const updateRange = (axisIndex, value) => {
    setRanges(prev => {
      const newRanges = [...prev]
      newRanges[axisIndex] = value
      return newRanges
    })
  }

  // Get current config based on level
  const currentConfig = gridLevel === 1 ? coordinate : metric
  const bounds = currentConfig.bounds || {}
  const paramNames = currentConfig.paramNames || ['u', 'v', 'w']
  const boundsKeys = currentConfig.boundsKeys || paramNames

  // Get bounds using boundsKeys as keys
  const getBound = (key) => bounds[key] || { min: -10, max: 10 }

  const bound0 = getBound(boundsKeys[0])
  const bound1 = getBound(boundsKeys[1])
  const bound2 = getBound(boundsKeys[2])

  const xMin = bound0.min
  const xMax = bound0.max
  const yMin = bound1.min
  const yMax = bound1.max
  const zMin = bound2.min
  const zMax = bound2.max

  // Check if bounds exist for each axis
  const hasX = Boolean(bounds[boundsKeys[0]])
  const hasY = Boolean(bounds[boundsKeys[1]])
  const hasZ = Boolean(bounds[boundsKeys[2]])

  return (
    <div className="graph-page">
      <aside className="graph-controls">
        <h3>Grid Controls</h3>

        {/* Grid Level Toggle */}
        <div className="control-group">
          <label>
            Grid Level
            <select
              value={gridLevel}
              onChange={(e) => handleLevelChange(parseInt(e.target.value))}
            >
              <option value={1}>Level 1: Coordinate Grid</option>
              <option value={2}>Level 2: Metric-Aware Grid</option>
              <option value={3}>Level 3: Geodesic Grid</option>
            </select>
          </label>
        </div>

        {/* Level 1: Coordinate System Selection */}
        {gridLevel === 1 && (
          <div className="control-group">
            <label>
              Coordinate System
              <select
                value={coordinateSystem}
                onChange={(e) => handleCoordinateChange(e.target.value)}
              >
                <option value="cartesian">Cartesian (x, y, z)</option>
                <option value="cylindrical">Cylindrical (r, θ, z)</option>
                <option value="spherical">Spherical (r, θ, φ)</option>
                <option value="quaternion">Quaternion (ω, θ, φ)</option>
              </select>
            </label>
          </div>
        )}

        {/* Level 2: Metric Selection */}
        {gridLevel === 2 && (
          <>
            <div className="control-group">
              <label>
                Metric
                <select
                  value={metricSystem}
                  onChange={(e) => handleMetricChange(e.target.value)}
                >
                  <option value="minkowski">Minkowski (Flat Space)</option>
                  <option value="schwarzschild">Schwarzschild (Black Hole)</option>
                  <option value="flrw">FLRW (Expanding Universe)</option>
                </select>
              </label>
            </div>

            <div className="control-group">
              <label>
                Metric-Aware Spacing
                <input
                  type="checkbox"
                  checked={metricAware}
                  onChange={(e) => setMetricAware(e.target.checked)}
                />
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {metricAware ? 'On' : 'Off'}
                </span>
              </label>
            </div>
          </>
        )}

        {/* Level 3: Geodesic Selection */}
        {gridLevel === 3 && (
          <>
            <div className="control-group">
              <label>
                Metric
                <select
                  value={geodesicMetric}
                  onChange={(e) => setGeodesicMetric(e.target.value)}
                >
                  <option value="schwarzschild">Schwarzschild (Black Hole)</option>
                  <option value="flrw">FLRW (Expanding Universe)</option>
                </select>
              </label>
            </div>

            <div className="control-group">
              <label>
                Geodesic Type
                <select
                  value={geodesicType}
                  onChange={(e) => setGeodesicType(e.target.value)}
                >
                  <option value="null">Null (Light Paths)</option>
                  <option value="timelike">Timelike (Particles)</option>
                </select>
              </label>
            </div>

            <div className="control-group">
              <label>
                Number of Rays: {nRays}
                <input
                  type="range"
                  min="4"
                  max="32"
                  step="1"
                  value={nRays}
                  onChange={(e) => setNRays(parseInt(e.target.value))}
                />
              </label>
            </div>

            <div className="control-group">
              <label>
                Pattern
                <select
                  value={geoPattern}
                  onChange={(e) => setGeoPattern(e.target.value)}
                >
                  <option value="radial">Radial</option>
                  <option value="spherical">Spherical</option>
                  <option value="cone">Cone</option>
                </select>
              </label>
            </div>

            {geodesicType === 'timelike' && (
              <div className="control-group">
                <label>
                  Initial Speed: {geoSpeed.toFixed(2)}
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.05"
                    value={geoSpeed}
                    onChange={(e) => setGeoSpeed(parseFloat(e.target.value))}
                  />
                </label>
              </div>
            )}

            <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.5rem' }}>
              {geodesicType === 'null'
                ? 'Visualizing light paths in curved spacetime'
                : 'Visualizing particle trajectories'}
            </p>
          </>
        )}

        <div className="control-group">
          <label>
            Resolution: {resolution}
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={resolution}
              onChange={(e) => setResolution(parseInt(e.target.value))}
            />
          </label>
        </div>

        {/* Dynamic range controls */}
        {hasX && (
          <div className="control-group">
            <label>{paramNames[0]} Min: {ranges[0][0].toFixed(2)}
              <input
                type="range"
                min={xMin}
                max={xMax}
                step="0.5"
                value={ranges[0][0]}
                onChange={(e) => updateRange(0, [parseFloat(e.target.value), ranges[0][1]])}
              />
            </label>
            <label>{paramNames[0]} Max: {ranges[0][1].toFixed(2)}
              <input
                type="range"
                min={xMin}
                max={xMax}
                step="0.5"
                value={ranges[0][1]}
                onChange={(e) => updateRange(0, [ranges[0][0], parseFloat(e.target.value)])}
              />
            </label>
          </div>
        )}

        {hasY && (
          <div className="control-group">
            <label>{paramNames[1]} Min: {ranges[1][0].toFixed(2)}
              <input
                type="range"
                min={yMin}
                max={yMax}
                step="0.5"
                value={ranges[1][0]}
                onChange={(e) => updateRange(1, [parseFloat(e.target.value), ranges[1][1]])}
              />
            </label>
            <label>{paramNames[1]} Max: {ranges[1][1].toFixed(2)}
              <input
                type="range"
                min={yMin}
                max={yMax}
                step="0.5"
                value={ranges[1][1]}
                onChange={(e) => updateRange(1, [ranges[1][0], parseFloat(e.target.value)])}
              />
            </label>
          </div>
        )}

        {hasZ && (
          <div className="control-group">
            <label>{paramNames[2]} Min: {ranges[2][0].toFixed(2)}
              <input
                type="range"
                min={zMin}
                max={zMax}
                step="0.5"
                value={ranges[2][0]}
                onChange={(e) => updateRange(2, [parseFloat(e.target.value), ranges[2][1]])}
              />
            </label>
            <label>{paramNames[2]} Max: {ranges[2][1].toFixed(2)}
              <input
                type="range"
                min={zMin}
                max={zMax}
                step="0.5"
                value={ranges[2][1]}
                onChange={(e) => updateRange(2, [ranges[2][0], parseFloat(e.target.value)])}
              />
            </label>
          </div>
        )}

        <div className="control-group">
          <label>Line Color
            <input type="color" value={lineColor}
              onChange={(e) => setLineColor(e.target.value)} />
          </label>
        </div>

        <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '1rem' }}>
          {currentConfig?.description}
        </p>
      </aside>

      <main className="graph-container">
        {gridLevel === 1 ? (
          <MeshGrid
            coordinate={coordinate}
            ranges={ranges}
            resolution={resolution}
            lineColor={lineColor}
          />
        ) : gridLevel === 2 ? (
          <MetricGrid
            metric={metric}
            ranges={ranges}
            resolution={resolution}
            lineColor={lineColor}
            metricAware={metricAware}
          />
        ) : (
          <GeodesicGrid
            metric={geoMetric}
            geodesicType={geodesicType}
            nRays={nRays}
            pattern={geoPattern}
            speed={geoSpeed}
            lineColor={lineColor}
          />
        )}
      </main>
    </div>
  )
}

export default Graph
