import { useState } from 'react'

function sampleCurve(warp) {
  const points = []

  for (let step = 0; step <= 40; step++) {
    const t = step / 40
    const x = t
    const warpedT = t + warp * 0.22 * Math.sin(Math.PI * t)
    points.push({ t, x, warpedT })
  }

  const maxWarped = points[points.length - 1].warpedT

  return points.map((point) => ({
    ...point,
    warpedNormalized: point.warpedT / maxWarped,
  }))
}

function toPath(points, xAccessor) {
  return points
    .map((point, index) => {
      const x = 44 + xAccessor(point) * 222
      const y = 214 - point.x * 150
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')
}

function BadClockDemo() {
  const [warp, setWarp] = useState(45)

  const normalizedWarp = warp / 100
  const points = sampleCurve(normalizedWarp)
  const goodPath = toPath(points, (point) => point.t)
  const badPath = toPath(points, (point) => point.warpedNormalized)

  return (
    <article className="chapter1-lab" id="bad-clock">
      <div className="chapter1-lab-header">
        <div>
          <span className="chapter1-lab-kicker">Time Coordinate</span>
          <h3>A bad clock can manufacture fake acceleration</h3>
        </div>
        <label className="chapter1-inline-control">
          Clock distortion: {warp}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={warp}
            onChange={(e) => setWarp(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter1-lab-intro">
        The particle itself is not changing. Only the time label changes. With a good
        time variable the motion is uniform; with a warped clock the same motion looks curved.
      </p>

      <div className="chapter1-dual-panel">
        <div className="chapter1-svg-card">
          <div className="chapter1-panel-title">Good time variable</div>
          <svg viewBox="0 0 320 250" role="img" aria-label="Straight motion under good time">
            <line x1="44" y1="214" x2="280" y2="214" stroke="#94a3b8" strokeWidth="2" />
            <line x1="44" y1="214" x2="44" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <path d={goodPath} fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            {[0, 1, 2, 3, 4].map((tick) => (
              <line key={tick} x1={44 + tick * 55.5} y1="214" x2={44 + tick * 55.5} y2="220" stroke="#94a3b8" strokeWidth="2" />
            ))}
            <text x="245" y="232" className="chapter1-svg-label">t</text>
            <text x="26" y="48" className="chapter1-svg-label">x</text>
          </svg>
        </div>

        <div className="chapter1-svg-card">
          <div className="chapter1-panel-title">Warped clock</div>
          <svg viewBox="0 0 320 250" role="img" aria-label="Same motion under warped time">
            <line x1="44" y1="214" x2="280" y2="214" stroke="#94a3b8" strokeWidth="2" />
            <line x1="44" y1="214" x2="44" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <path d={badPath} fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
            {[0, 1, 2, 3, 4].map((tick) => (
              <line key={tick} x1={44 + tick * 55.5} y1="214" x2={44 + tick * 55.5} y2="220" stroke="#94a3b8" strokeWidth="2" />
            ))}
            <text x="242" y="232" className="chapter1-svg-label">T(t)</text>
            <text x="26" y="48" className="chapter1-svg-label">x</text>
          </svg>
        </div>
      </div>
    </article>
  )
}

export default BadClockDemo
