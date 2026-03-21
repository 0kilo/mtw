import { useState, useEffect } from 'react'
import Grid from './Grid'
import Q1Grid from './Q1Grid'
import './Graph.css'

function Graph() {
  const [coordinateSystem, setCoordinateSystem] = useState('cartesian')
  
  // Cartesian bounds
  const [xMin, setXMin] = useState(-5)
  const [xMax, setXMax] = useState(5)
  const [yMin, setYMin] = useState(-5)
  const [yMax, setYMax] = useState(5)
  const [zMin, setZMin] = useState(-5)
  const [zMax, setZMax] = useState(5)
  
  // Resolution (divisions = resolution * (max - min))
  const [resolution, setResolution] = useState(1)
  
  // Styling
  const [lineColor, setLineColor] = useState('#6366f1')

  // Reset bounds when switching to Q1
  useEffect(() => {
    if (coordinateSystem === 'q1') {
      setXMin(0)
      setXMax(1)
      setYMin(-Math.PI / 4)
      setYMax(Math.PI / 4)
      setZMin(-Math.PI / 4)
      setZMax(Math.PI / 4)
    }
  }, [coordinateSystem])

  return (
    <div className="graph-page">
      <aside className="graph-controls">
        <h3>Grid Controls</h3>

        <div className="control-group">
          <label>
            Coordinate System
            <select
              value={coordinateSystem}
              onChange={(e) => setCoordinateSystem(e.target.value)}
            >
              <option value="cartesian">Cartesian (x, y, z)</option>
              <option value="cylindrical">Cylindrical (r, θ, z)</option>
              <option value="spherical">Spherical (r, θ, φ)</option>
              <option value="q1">Q1 - Quaternion Exp (a, b, c)</option>
            </select>
          </label>
        </div>

        <div className="control-group">
          <label>
            Resolution: {resolution}
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={resolution}
              onChange={(e) => setResolution(parseFloat(e.target.value))}
            />
          </label>
        </div>

        {coordinateSystem === 'cartesian' && (
          <>
            <div className="control-group">
              <label>X Min: {xMin}
                <input type="range" min="-10" max="0" step="0.5" value={xMin}
                  onChange={(e) => setXMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>X Max: {xMax}
                <input type="range" min="0" max="10" step="0.5" value={xMax}
                  onChange={(e) => setXMax(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>Y Min: {yMin}
                <input type="range" min="-10" max="0" step="0.5" value={yMin}
                  onChange={(e) => setYMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>Y Max: {yMax}
                <input type="range" min="0" max="10" step="0.5" value={yMax}
                  onChange={(e) => setYMax(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>Z Min: {zMin}
                <input type="range" min="-10" max="0" step="0.5" value={zMin}
                  onChange={(e) => setZMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>Z Max: {zMax}
                <input type="range" min="0" max="10" step="0.5" value={zMax}
                  onChange={(e) => setZMax(parseFloat(e.target.value))} />
              </label>
            </div>
          </>
        )}

        {coordinateSystem === 'cylindrical' && (
          <>
            <div className="control-group">
              <label>R Max: {Math.max(xMax, yMax)}
                <input type="range" min="1" max="10" step="0.5"
                  value={Math.max(xMax, yMax)}
                  onChange={(e) => {
                    setXMax(parseFloat(e.target.value))
                    setYMax(parseFloat(e.target.value))
                  }} />
              </label>
            </div>
            <div className="control-group">
              <label>Z Min: {zMin}
                <input type="range" min="-10" max="0" step="0.5" value={zMin}
                  onChange={(e) => setZMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>Z Max: {zMax}
                <input type="range" min="0" max="10" step="0.5" value={zMax}
                  onChange={(e) => setZMax(parseFloat(e.target.value))} />
              </label>
            </div>
          </>
        )}

        {coordinateSystem === 'spherical' && (
          <>
            <div className="control-group">
              <label>R Max: {Math.max(xMax, yMax, zMax)}
                <input type="range" min="1" max="10" step="0.5"
                  value={Math.max(xMax, yMax, zMax)}
                  onChange={(e) => {
                    setXMax(parseFloat(e.target.value))
                    setYMax(parseFloat(e.target.value))
                    setZMax(parseFloat(e.target.value))
                  }} />
              </label>
            </div>
          </>
        )}

        {coordinateSystem === 'q1' && (
          <>
            <div className="control-group">
              <label>ω Min (real): {xMin}
                <input type="range" min="-3.14" max="3.14" step="0.1" value={xMin}
                  onChange={(e) => setXMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>ω Max (real): {xMax}
                <input type="range" min="-3.14" max="3.14" step="0.1" value={xMax}
                  onChange={(e) => setXMax(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>θ Min (i axis): {yMin}
                <input type="range" min="-3.14" max="3.14" step="0.1" value={yMin}
                  onChange={(e) => setYMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>θ Max (i axis): {yMax}
                <input type="range" min="-3.14" max="3.14" step="0.1" value={yMax}
                  onChange={(e) => setYMax(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>φ Min (j axis): {zMin}
                <input type="range" min="-3.14" max="3.14" step="0.1" value={zMin}
                  onChange={(e) => setZMin(parseFloat(e.target.value))} />
              </label>
            </div>
            <div className="control-group">
              <label>φ Max (j axis): {zMax}
                <input type="range" min="-3.14" max="3.14" step="0.1" value={zMax}
                  onChange={(e) => setZMax(parseFloat(e.target.value))} />
              </label>
            </div>
            <p style={{fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem'}}>
              Q1: e^z = e^ω·e^(θi)·e^(φj)·e^(ρk), ρ=0
            </p>
          </>
        )}

        <div className="control-group">
          <label>Line Color
            <input type="color" value={lineColor}
              onChange={(e) => setLineColor(e.target.value)} />
          </label>
        </div>
      </aside>

      <main className="graph-container">
        {coordinateSystem === 'q1' ? (
          <Q1Grid
            omegaMin={xMin}
            omegaMax={xMax}
            thetaMin={yMin}
            thetaMax={yMax}
            phiMin={zMin}
            phiMax={zMax}
            resolution={resolution}
            lineColor={lineColor}
          />
        ) : (
          <Grid
            coordinateSystem={coordinateSystem}
            xMin={xMin}
            xMax={xMax}
            yMin={yMin}
            yMax={yMax}
            zMin={zMin}
            zMax={zMax}
            resolution={resolution}
            lineColor={lineColor}
          />
        )}
      </main>
    </div>
  )
}

export default Graph
