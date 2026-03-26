import { useState } from 'react'

function GeodesicDeviationDemo() {
  const [curvature, setCurvature] = useState(45)

  const normalized = curvature / 100
  const stretch = 1 + normalized * 0.8
  const squeeze = 1 - normalized * 0.45

  return (
    <article className="chapter1-lab" id="geodesic-deviation">
      <div className="chapter1-lab-header">
        <div>
          <span className="chapter1-lab-kicker">Curvature</span>
          <h3>Gravity shows up in relative motion, not one isolated path</h3>
        </div>
        <label className="chapter1-inline-control">
          Curvature strength: {curvature}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={curvature}
            onChange={(e) => setCurvature(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter1-lab-intro">
        Start with a small ring of freely falling particles. As curvature grows, the
        ring gets stretched radially and squeezed sideways. This is the chapter&apos;s
        tidal-field picture of geodesic deviation.
      </p>

      <div className="chapter1-deviation-layout">
        <div className="chapter1-svg-card">
          <svg viewBox="0 0 500 260" role="img" aria-label="Ring of particles deforming under curvature">
            <defs>
              <radialGradient id="massGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(251, 146, 60, 0.7)" />
                <stop offset="100%" stopColor="rgba(194, 65, 12, 0.12)" />
              </radialGradient>
            </defs>
            <circle cx="250" cy="130" r="46" fill="url(#massGlow)" />
            <circle cx="250" cy="130" r="22" fill="#7c2d12" />

            <g transform="translate(120 130)">
              <circle cx="0" cy="0" r="40" fill="none" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth="2" />
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = angle * Math.PI / 180
                return (
                  <circle
                    key={angle}
                    cx={Math.cos(rad) * 40}
                    cy={Math.sin(rad) * 40}
                    r="6"
                    fill="#0f766e"
                  />
                )
              })}
              <text x="-34" y="72" className="chapter1-svg-label">initial ring</text>
            </g>

            <g transform="translate(382 130)">
              <ellipse cx="0" cy="0" rx={40 * squeeze} ry={40 * stretch} fill="none" stroke="#fb923c" strokeWidth="3" />
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = angle * Math.PI / 180
                return (
                  <circle
                    key={angle}
                    cx={Math.cos(rad) * 40 * squeeze}
                    cy={Math.sin(rad) * 40 * stretch}
                    r="6"
                    fill="#ea580c"
                  />
                )
              })}
              <text x="-46" y="72" className="chapter1-svg-label">later shape</text>
            </g>

            <path d="M 170 130 C 206 130, 212 130, 228 130" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#arrowHead)" fill="none" />
            <path d="M 272 130 C 296 130, 310 130, 338 130" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#arrowHead)" fill="none" />
            <defs>
              <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>
        </div>

        <div className="chapter1-lab-notes">
          <div className="chapter1-note">
            <strong>Single particle:</strong> looks locally inertial and does not by itself
            diagnose curvature.
          </div>
          <div className="chapter1-note">
            <strong>Neighboring particles:</strong> reveal curvature through changing separation.
            That is the geometric content behind the tidal equations in the text.
          </div>
        </div>
      </div>
    </article>
  )
}

export default GeodesicDeviationDemo
