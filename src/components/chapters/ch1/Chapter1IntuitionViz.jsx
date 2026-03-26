import { useState } from 'react'
import GeodesicGrid from '../../graph/GeodesicGrid'
import { minkowskiMetric, schwarzschildMetric } from '../../graph/metric'
import './Chapter1IntuitionViz.css'

const curvedOrigin = [8, Math.PI / 2, 0]
const flatOrigin = [-3, 0, 0]

function Chapter1IntuitionViz() {
  const [geodesicType, setGeodesicType] = useState('null')
  const [nRays, setNRays] = useState(12)

  const geodesicLabel = geodesicType === 'null' ? 'Lightlike paths' : 'Free-particle paths'

  return (
    <section className="chapter1-intuition-viz">
      <div className="chapter1-intuition-copy">
        <span className="chapter1-intuition-kicker">Intuition Lab</span>
        <h2>From straight motion to curved geometry</h2>
        <p>
          Chapter 1 argues that gravity is better understood as geometry than as an
          invisible pull. This comparison keeps the controls fixed and changes only the
          geometry: in flat space, geodesics remain straight; in curved space, the same
          idea of free motion produces bending and convergence.
        </p>
      </div>

      <div className="chapter1-intuition-controls">
        <label>
          Path family
          <select
            value={geodesicType}
            onChange={(e) => setGeodesicType(e.target.value)}
          >
            <option value="null">Lightlike geodesics</option>
            <option value="timelike">Timelike geodesics</option>
          </select>
        </label>

        <label>
          Number of paths: {nRays}
          <input
            type="range"
            min="6"
            max="24"
            step="1"
            value={nRays}
            onChange={(e) => setNRays(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div className="chapter1-intuition-grid">
        <article className="chapter1-intuition-panel">
          <div className="chapter1-intuition-panel-header">
            <h3>Flat Space</h3>
            <p>{geodesicLabel} stay straight when the geometry is flat.</p>
          </div>
          <div className="chapter1-intuition-canvas">
            <GeodesicGrid
              metric={minkowskiMetric}
              geodesicType={geodesicType}
              origin={flatOrigin}
              nRays={nRays}
              pattern="spherical"
              speed={0.55}
              lineColor="#0f766e"
              axisSize={4}
            />
          </div>
        </article>

        <article className="chapter1-intuition-panel">
          <div className="chapter1-intuition-panel-header">
            <h3>Curved Space</h3>
            <p>Near a mass, free motion follows the geometry rather than a straight grid.</p>
          </div>
          <div className="chapter1-intuition-canvas">
            <GeodesicGrid
              metric={schwarzschildMetric}
              geodesicType={geodesicType}
              origin={curvedOrigin}
              nRays={nRays}
              pattern="radial"
              speed={0.55}
              maxSteps={1600}
              lineColor="#c2410c"
              axisSize={4}
            />
          </div>
        </article>
      </div>

      <div className="chapter1-intuition-notes">
        <div>
          <strong>What to look for:</strong> the left panel gives the chapter&apos;s local
          inertial picture. The right panel shows why one particle path is not enough:
          once geometry is curved, nearby geodesics separate differently.
        </div>
        <div>
          <strong>Why this helps:</strong> it turns the slogan &quot;space acts on matter,
          telling it how to move&quot; into a visual comparison before the full formalism.
        </div>
      </div>
    </section>
  )
}

export default Chapter1IntuitionViz
