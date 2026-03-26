import { useMemo, useState } from 'react'
import './Chapter13VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter13MetricDemo() {
  const [stretch, setStretch] = useState(48)
  const normalized = stretch / 100
  const timeCoeff = -1 + normalized * 0.28
  const spaceCoeff = 1 + normalized * 0.85
  const interval = timeCoeff + spaceCoeff

  return (
    <article className="chapter13-lab" id="metric">
      <div className="chapter13-lab-header">
        <div>
          <span className="chapter13-lab-kicker">Metric tensor</span>
          <h3>The metric turns intervals into a bilinear form and separates time from space</h3>
        </div>
        <label className="chapter13-inline-control">
          Stretch factor: {stretch}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={stretch}
            onChange={(e) => setStretch(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter13-lab-intro">
        Chapter 13 makes the metric fundamental: it defines intervals, raises and lowers
        indices, and sets the local Lorentz signature.
      </p>

      <div className="chapter13-dual-panel">
        <div className="chapter13-svg-card">
          <div className="chapter13-panel-title">Interval from components</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Metric interval and Lorentz signature">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="128" y="82" width="78" height="108" rx="16" fill="rgba(15, 118, 110, 0.14)" stroke="#0f766e" strokeWidth="3" />
            <rect x="274" y="82" width="78" height="108" rx="16" fill="rgba(124, 58, 237, 0.14)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 206 136 L ${272 + 24 * normalized} 136`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13MetricHead)" />
            <defs>
              <marker id="chapter13MetricHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <text x="96" y="58" className="chapter13-svg-label">time-like and space-like parts combine in g</text>
            <text x="120" y="214" className="chapter13-svg-label">ds² = g_μν dx^μ dx^ν</text>
          </svg>
        </div>

        <div className="chapter13-matrix-card">
          <div className="chapter13-panel-title">Metric dictionary</div>
          <div className="chapter13-matrix-grid">
            <div className="chapter13-matrix-cell accent-teal">
              <strong>g_μν</strong>
              <span>bilinear metric components</span>
            </div>
            <div className="chapter13-matrix-cell accent-orange">
              <strong>time coeff.</strong>
              <span>{formatSigned(timeCoeff)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-indigo">
              <strong>space coeff.</strong>
              <span>{formatSigned(spaceCoeff)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-slate">
              <strong>interval scale</strong>
              <span>{formatSigned(interval)}</span>
            </div>
          </div>
          <div className="chapter13-matrix-caption">
            <div>The metric is the foundation for intervals, orthogonality, and index handling.</div>
            <div>Its signature must be locally Lorentzian.</div>
          </div>
        </div>
      </div>

      <div className="chapter13-lab-notes">
        <div className="chapter13-note">
          <strong>What to look for:</strong> the metric packages distance data into one local
          tensor.
        </div>
        <div className="chapter13-note">
          <strong>Why it matters:</strong> all later geometry is built on this interval
          structure.
        </div>
      </div>
    </article>
  )
}

function Chapter13LorentzDemo() {
  const [boost, setBoost] = useState(44)
  const normalized = boost / 100
  const timelike = -1 + normalized * 0.18
  const spacelike = 1 + normalized * 0.4
  const indexLowered = timelike + spacelike * 0.35

  return (
    <article className="chapter13-lab" id="lorentz-frame">
      <div className="chapter13-lab-header">
        <div>
          <span className="chapter13-lab-kicker">Local Lorentz frame</span>
          <h3>At one event the metric becomes Minkowski and indices can be raised or lowered</h3>
        </div>
        <label className="chapter13-inline-control">
          Boost strength: {boost}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={boost}
            onChange={(e) => setBoost(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter13-lab-intro">
        The chapter&apos;s local Lorentz frame is the metric version of the local inertial
        frame, and the metric provides the vector-1-form correspondence.
      </p>

      <div className="chapter13-dual-panel">
        <div className="chapter13-svg-card">
          <div className="chapter13-panel-title">Minkowski frame at the event</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Local Lorentz frame and metric signature">
            <defs>
              <marker id="chapter13LorentzHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r="26" fill="rgba(15, 118, 110, 0.14)" stroke="#0f766e" strokeWidth="3" />
            <path d={`M 240 138 L ${240 + 96 * spacelike / 1.4} 138`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13LorentzHead)" />
            <path d={`M 240 138 L 240 ${138 - 92 * (1 - 0.1 * normalized)}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13LorentzHead)" />
            <path d={`M 240 138 L ${240 - 72 * indexLowered / 1.3} ${138 + 38 * indexLowered / 1.3}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13LorentzHead)" />
            <text x="92" y="58" className="chapter13-svg-label">ĝ = diag(-1,1,1,1)</text>
            <text x="110" y="214" className="chapter13-svg-label">vectors and 1-forms are related by g</text>
          </svg>
        </div>

        <div className="chapter13-matrix-card">
          <div className="chapter13-panel-title">Local orthonormal facts</div>
          <div className="chapter13-matrix-grid">
            <div className="chapter13-matrix-cell accent-teal">
              <strong>timelike</strong>
              <span>{formatSigned(timelike)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-orange">
              <strong>spacelike</strong>
              <span>{formatSigned(spacelike)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-indigo">
              <strong>lowered index</strong>
              <span>{formatSigned(indexLowered)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-slate">
              <strong>boost</strong>
              <span>{boost}</span>
            </div>
          </div>
          <div className="chapter13-matrix-caption">
            <div>The metric lets you lower indices and identify orthonormal directions.</div>
            <div>Exercise 13.3 shows that first derivatives can be killed locally, but curvature remains.</div>
          </div>
        </div>
      </div>

      <div className="chapter13-lab-notes">
        <div className="chapter13-note">
          <strong>What to look for:</strong> the local Lorentz frame is a metric statement,
          not a Newtonian slicing statement.
        </div>
        <div className="chapter13-note">
          <strong>Why it matters:</strong> the metric determines which directions are time-like
          and how components are converted.
        </div>
      </div>
    </article>
  )
}

function Chapter13GeodesicDemo() {
  const [properTime, setProperTime] = useState(52)
  const normalized = properTime / 100
  const extremalFactor = 0.3 + normalized * 0.95
  const inertialFactor = 0.2 + normalized * 0.8

  return (
    <article className="chapter13-lab" id="geodesic-proper-time">
      <div className="chapter13-lab-header">
        <div>
          <span className="chapter13-lab-kicker">Geodesics and proper time</span>
          <h3>Free-fall world lines extremize proper time and look straight in local frames</h3>
        </div>
        <label className="chapter13-inline-control">
          Proper-time scale: {properTime}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={properTime}
            onChange={(e) => setProperTime(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter13-lab-intro">
        Chapter 13 shows that the geodesic equation and the extremal proper-time principle
        are two equivalent descriptions of free motion in a metric spacetime.
      </p>

      <div className="chapter13-dual-panel">
        <div className="chapter13-svg-card">
          <div className="chapter13-panel-title">Extremal proper-time path</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Curved worldline and local straight frame">
            <defs>
              <marker id="chapter13GeodesicHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 108 184 C 164 ${158 - 14 * normalized}, 222 ${110 - 14 * normalized}, 292 ${116 - 6 * normalized} S 368 ${160 - 6 * normalized}, 394 ${92 - 8 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 108 184 L ${160 + 22 * inertialFactor} ${150 - 14 * inertialFactor}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13GeodesicHead)" />
            <path d={`M 292 116 L ${330 + 16 * extremalFactor} ${92 - 10 * extremalFactor}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13GeodesicHead)" />
            <text x="86" y="58" className="chapter13-svg-label">geodesic = extremal proper time</text>
            <text x="118" y="214" className="chapter13-svg-label">straight in the local inertial frame</text>
          </svg>
        </div>

        <div className="chapter13-matrix-card">
          <div className="chapter13-panel-title">Equivalent descriptions</div>
          <div className="chapter13-matrix-grid">
            <div className="chapter13-matrix-cell accent-teal">
              <strong>proper-time factor</strong>
              <span>{formatSigned(properTime)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-orange">
              <strong>extremal factor</strong>
              <span>{formatSigned(extremalFactor)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-indigo">
              <strong>inertial factor</strong>
              <span>{formatSigned(inertialFactor)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-slate">
              <strong>equivalence</strong>
              <span>geodesic equation = extremal proper time</span>
            </div>
          </div>
          <div className="chapter13-matrix-caption">
            <div>The metric gives a notion of proper time that selects the geodesics.</div>
            <div>Local inertial motion and variational motion agree.</div>
          </div>
        </div>
      </div>

      <div className="chapter13-lab-notes">
        <div className="chapter13-note">
          <strong>What to look for:</strong> the world line is curved globally but straight in
          the local metric frame.
        </div>
        <div className="chapter13-note">
          <strong>Why it matters:</strong> the metric makes the geodesic principle physically
          meaningful.
        </div>
      </div>
    </article>
  )
}

function Chapter13ConnectionDemo() {
  const [compatibility, setCompatibility] = useState(38)
  const normalized = compatibility / 100
  const coeffA = 0.1 + normalized * 0.85
  const coeffB = 0.2 + normalized * 0.75
  const coeffC = 0.15 + normalized * 0.65

  const connectionPath = useMemo(
    () =>
      `M 96 184 L 334 184
       M 216 76 L 216 224
       M 156 160 C 188 ${126 - 10 * normalized}, 244 ${114 - 8 * normalized}, 288 ${86 - 8 * normalized}`,
    [normalized]
  )

  return (
    <article className="chapter13-lab" id="metric-compatibility">
      <div className="chapter13-lab-header">
        <div>
          <span className="chapter13-lab-kicker">Metric compatibility</span>
          <h3>Metric compatibility fixes the connection as the Levi-Civita connection</h3>
        </div>
        <label className="chapter13-inline-control">
          Compatibility: {compatibility}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={compatibility}
            onChange={(e) => setCompatibility(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter13-lab-intro">
        Once the metric is fundamental, compatibility and torsion-freeness determine the
        connection coefficients uniquely.
      </p>

      <div className="chapter13-dual-panel">
        <div className="chapter13-svg-card">
          <div className="chapter13-panel-title">Compatible transport</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Metric-compatible connection and orthonormal transport">
            <defs>
              <marker id="chapter13ConnectionHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={connectionPath} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="216" cy="138" r="30" fill="rgba(124, 58, 237, 0.14)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 216 138 L ${266 + 16 * coeffA} ${138 - 16 * coeffA}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13ConnectionHead)" />
            <path d={`M 216 138 L ${182 - 18 * coeffB} ${100 - 10 * coeffB}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter13ConnectionHead)" />
            <text x="84" y="58" className="chapter13-svg-label">∇g = 0 fixes the transport law</text>
            <text x="110" y="214" className="chapter13-svg-label">Levi-Civita connection is uniquely determined</text>
          </svg>
        </div>

        <div className="chapter13-matrix-card">
          <div className="chapter13-panel-title">Connection data</div>
          <div className="chapter13-matrix-grid">
            <div className="chapter13-matrix-cell accent-teal">
              <strong>compatibility</strong>
              <span>{formatSigned(coeffA)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-orange">
              <strong>torsion-free</strong>
              <span>{formatSigned(coeffB)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-indigo">
              <strong>connection scale</strong>
              <span>{formatSigned(coeffC)}</span>
            </div>
            <div className="chapter13-matrix-cell accent-slate">
              <strong>result</strong>
              <span>unique Levi-Civita connection</span>
            </div>
          </div>
          <div className="chapter13-matrix-caption">
            <div>Metric compatibility preserves inner products under transport.</div>
            <div>Torsion-freeness removes the remaining ambiguity.</div>
          </div>
        </div>
      </div>

      <div className="chapter13-lab-notes">
        <div className="chapter13-note">
          <strong>What to look for:</strong> the connection is not chosen arbitrarily once the
          metric is fixed.
        </div>
        <div className="chapter13-note">
          <strong>Why it matters:</strong> chapter 13 turns geometry into a metric-based
          theory with a unique compatible connection.
        </div>
      </div>
    </article>
  )
}

function Chapter13VisualizationSuite() {
  return (
    <section className="chapter13-visual-suite">
      <div className="chapter13-visual-suite-header">
        <span className="chapter13-visual-suite-kicker">Chapter 13 Visualizations</span>
        <h2>How the metric becomes the foundation</h2>
        <p>
          Chapter 13 elevates the metric to the central structure: it defines intervals,
          local Lorentz frames, geodesics as extremal proper time, and the Levi-Civita
          connection.
        </p>
      </div>

      <nav className="chapter13-visual-suite-nav" aria-label="Chapter 13 visualization topics">
        <a href="#metric">Metric</a>
        <a href="#lorentz-frame">Local Lorentz frame</a>
        <a href="#geodesic-proper-time">Geodesics</a>
        <a href="#metric-compatibility">Compatibility</a>
      </nav>

      <Chapter13MetricDemo />
      <Chapter13LorentzDemo />
      <Chapter13GeodesicDemo />
      <Chapter13ConnectionDemo />
    </section>
  )
}

export default Chapter13VisualizationSuite
