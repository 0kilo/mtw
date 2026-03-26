import { useMemo, useState } from 'react'
import './Chapter11VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter11DeviationDemo() {
  const [spread, setSpread] = useState(48)
  const normalized = spread / 100
  const relativeAccel = 0.18 + normalized * 0.95
  const tidalStrength = 0.24 + normalized * 0.84

  const geodesics = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const offset = index - 2
        return `M 98 ${182 - offset * 12}
                C 164 ${158 - offset * 6 - normalized * 14}, 228 ${118 - offset * 4 - normalized * 12}, 316 ${108 - offset * 5 - normalized * 10}
                S 382 ${150 - offset * 3 - normalized * 6}, 400 ${96 - offset * 4 - normalized * 8}`
      }),
    [normalized]
  )

  return (
    <article className="chapter11-lab" id="geodesic-deviation">
      <div className="chapter11-lab-header">
        <div>
          <span className="chapter11-lab-kicker">Geodesic deviation</span>
          <h3>Nearby geodesics separate through relative acceleration</h3>
        </div>
        <label className="chapter11-inline-control">
          Initial spread: {spread}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={spread}
            onChange={(e) => setSpread(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter11-lab-intro">
        Chapter 11 turns the family-of-geodesics picture into the operational definition of
        curvature: the separation vector acquires a second covariant derivative.
      </p>

      <div className="chapter11-dual-panel">
        <div className="chapter11-svg-card">
          <div className="chapter11-panel-title">Family of geodesics</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Neighboring geodesics with a separation vector">
            <defs>
              <marker id="chapter11DeviationHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {geodesics.map((d, index) => (
              <path
                key={index}
                d={d}
                fill="none"
                stroke={index === 2 ? '#0f766e' : '#7c3aed'}
                strokeWidth={index === 2 ? 4 : 3}
                opacity={0.88 - index * 0.1}
              />
            ))}
            <path
              d={`M 208 132 L ${300 + 18 * normalized} ${116 - 10 * normalized}`}
              stroke="#c2410c"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#chapter11DeviationHead)"
            />
            <text x="82" y="58" className="chapter11-svg-label">same affine parameter on neighboring geodesics</text>
            <text x="118" y="214" className="chapter11-svg-label">relative acceleration reveals tidal gravity</text>
          </svg>
        </div>

        <div className="chapter11-matrix-card">
          <div className="chapter11-panel-title">Deviation signal</div>
          <div className="chapter11-matrix-grid">
            <div className="chapter11-matrix-cell accent-teal">
              <strong>separation vector</strong>
              <span>n between neighboring geodesics</span>
            </div>
            <div className="chapter11-matrix-cell accent-orange">
              <strong>relative acceleration</strong>
              <span>{formatSigned(relativeAccel)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-indigo">
              <strong>tidal strength</strong>
              <span>{formatSigned(tidalStrength)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-slate">
              <strong>operator</strong>
              <span>∇_u ∇_u n</span>
            </div>
          </div>
          <div className="chapter11-matrix-caption">
            <div>The chapter identifies geodesic deviation with the observable tidal effect.</div>
            <div>The second covariant derivative is the local curvature diagnostic.</div>
          </div>
        </div>
      </div>

      <div className="chapter11-lab-notes">
        <div className="chapter11-note">
          <strong>What to look for:</strong> changing the spread changes the size of the
          relative acceleration, not the fact that the curve family separates.
        </div>
        <div className="chapter11-note">
          <strong>Why it matters:</strong> the chapter uses this to connect curvature to
          gravity as tidal force.
        </div>
      </div>
    </article>
  )
}

function Chapter11RiemannDemo() {
  const [strength, setStrength] = useState(52)
  const normalized = strength / 100
  const riemannScale = 0.2 + normalized * 1.1
  const tidalPattern = 0.35 + normalized * 0.75

  return (
    <article className="chapter11-lab" id="riemann-tensor">
      <div className="chapter11-lab-header">
        <div>
          <span className="chapter11-lab-kicker">Riemann tensor</span>
          <h3>The same curvature appears as a tidal operator on vectors</h3>
        </div>
        <label className="chapter11-inline-control">
          Curvature strength: {strength}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={strength}
            onChange={(e) => setStrength(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter11-lab-intro">
        The chapter packages the deviation effect into the Riemann curvature tensor, which
        is the tensorial object behind the tidal term in the geodesic-deviation equation.
      </p>

      <div className="chapter11-dual-panel">
        <div className="chapter11-svg-card">
          <div className="chapter11-panel-title">Tidal field around a mass</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Tidal arrows indicating spacetime curvature">
            <defs>
              <marker id="chapter11RiemannHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r="28" fill="rgba(124, 58, 237, 0.16)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 240 92 L 240 ${70 - 18 * riemannScale}`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter11RiemannHead)" />
            <path d={`M 240 184 L 240 ${206 + 18 * riemannScale}`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter11RiemannHead)" />
            <path d={`M 188 138 L ${166 - 16 * tidalPattern} 138`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter11RiemannHead)" />
            <path d={`M 292 138 L ${314 + 16 * tidalPattern} 138`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter11RiemannHead)" />
            <text x="82" y="58" className="chapter11-svg-label">tidal field varies across space</text>
            <text x="126" y="214" className="chapter11-svg-label">the Riemann tensor captures the variation</text>
          </svg>
        </div>

        <div className="chapter11-matrix-card">
          <div className="chapter11-panel-title">Curvature operator</div>
          <div className="chapter11-matrix-grid">
            <div className="chapter11-matrix-cell accent-teal">
              <strong>Riemann</strong>
              <span>{'R^α_{βγδ}'}</span>
            </div>
            <div className="chapter11-matrix-cell accent-orange">
              <strong>tidal scale</strong>
              <span>{formatSigned(riemannScale)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-indigo">
              <strong>pattern factor</strong>
              <span>{formatSigned(tidalPattern)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-slate">
              <strong>meaning</strong>
              <span>the local operator behind gravitation</span>
            </div>
          </div>
          <div className="chapter11-matrix-caption">
            <div>Exercise 11.3 turns this operator into the connection-coefficient formula.</div>
            <div>The tensor is what survives all basis changes.</div>
          </div>
        </div>
      </div>

      <div className="chapter11-lab-notes">
        <div className="chapter11-note">
          <strong>What to look for:</strong> the arrows point in different directions, but the
          same tensor organizes the effect.
        </div>
        <div className="chapter11-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s tensorial summary of
          curvature.
        </div>
      </div>
    </article>
  )
}

function Chapter11LoopDemo() {
  const [loopSize, setLoopSize] = useState(44)
  const normalized = loopSize / 100
  const mismatch = 0.05 + normalized * 0.9
  const returnAngle = 0.14 + normalized * 0.65

  const loopPath = useMemo(
    () =>
      `M 164 96
       L ${314 + 16 * normalized} 96
       L ${314 + 16 * normalized} ${186 + 8 * normalized}
       L 164 ${186 + 8 * normalized} Z`,
    [normalized]
  )

  return (
    <article className="chapter11-lab" id="loop-transport">
      <div className="chapter11-lab-header">
        <div>
          <span className="chapter11-lab-kicker">Closed-loop transport</span>
          <h3>Transport around a small loop returns a different vector when curvature is present</h3>
        </div>
        <label className="chapter11-inline-control">
          Loop size: {loopSize}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={loopSize}
            onChange={(e) => setLoopSize(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter11-lab-intro">
        The same curvature that causes geodesic deviation also appears when a vector is
        parallel transported around a small closed curve.
      </p>

      <div className="chapter11-dual-panel">
        <div className="chapter11-svg-card">
          <div className="chapter11-panel-title">Transport around a loop</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Vector transported around a closed loop">
            <defs>
              <marker id="chapter11LoopHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={loopPath} fill="none" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 164 96 L ${210 + 28 * normalized} ${84 - 12 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11LoopHead)" />
            <path d={`M ${314 + 16 * normalized} 96 L ${332 + 18 * normalized} ${130 + 10 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11LoopHead)" />
            <path d={`M ${314 + 16 * normalized} ${186 + 8 * normalized} L ${282 + 6 * normalized} ${198 + 12 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11LoopHead)" />
            <path d={`M 164 ${186 + 8 * normalized} L ${148 - 8 * normalized} ${152 + 6 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11LoopHead)" />
            <text x="76" y="58" className="chapter11-svg-label">path dependence shows up around loops</text>
            <text x="118" y="214" className="chapter11-svg-label">returned vector is rotated / mismatched</text>
          </svg>
        </div>

        <div className="chapter11-matrix-card">
          <div className="chapter11-panel-title">Loop holonomy</div>
          <div className="chapter11-matrix-grid">
            <div className="chapter11-matrix-cell accent-teal">
              <strong>loop size</strong>
              <span>{loopSize}</span>
            </div>
            <div className="chapter11-matrix-cell accent-orange">
              <strong>mismatch</strong>
              <span>{formatSigned(mismatch)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-indigo">
              <strong>return angle</strong>
              <span>{formatSigned(returnAngle)}°</span>
            </div>
            <div className="chapter11-matrix-cell accent-slate">
              <strong>message</strong>
              <span>path dependence is curvature in action</span>
            </div>
          </div>
          <div className="chapter11-matrix-caption">
            <div>The loop picture is the transport-side equivalent of geodesic deviation.</div>
            <div>Flat spacetime would return the same vector unchanged.</div>
          </div>
        </div>
      </div>

      <div className="chapter11-lab-notes">
        <div className="chapter11-note">
          <strong>What to look for:</strong> the larger the loop, the more the transported
          vector misses its starting orientation.
        </div>
        <div className="chapter11-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s operational meaning of
          path-dependent parallel transport.
        </div>
      </div>
    </article>
  )
}

function Chapter11RncDemo() {
  const [radius, setRadius] = useState(38)
  const normalized = radius / 100
  const connectionAtOrigin = 0
  const curvatureAway = 0.2 + normalized * 0.9

  return (
    <article className="chapter11-lab" id="riemann-normal-coordinates">
      <div className="chapter11-lab-header">
        <div>
          <span className="chapter11-lab-kicker">Riemann normal coordinates</span>
          <h3>At the origin, the connection vanishes and the local frame looks inertial</h3>
        </div>
        <label className="chapter11-inline-control">
          Normal radius: {radius}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={radius}
            onChange={(e) => setRadius(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter11-lab-intro">
        Riemann normal coordinates make the origin look flat to first order, while curvature
        reappears away from the origin through second-order effects.
      </p>

      <div className="chapter11-dual-panel">
        <div className="chapter11-svg-card">
          <div className="chapter11-panel-title">Local inertial patch</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Riemann normal coordinates with local inertial axes">
            <defs>
              <marker id="chapter11RncHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r={50 + 18 * normalized} fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="3" />
            <path d={`M 240 138 L ${240 + 88 * (1 - 0.15 * normalized)} 138`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11RncHead)" />
            <path d={`M 240 138 L 240 ${138 - 84 * (1 - 0.1 * normalized)}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11RncHead)" />
            <path d={`M 240 138 L ${240 - 72 * curvatureAway / 1.2} ${138 + 42 * curvatureAway / 1.2}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter11RncHead)" />
            <text x="90" y="58" className="chapter11-svg-label">connection vanishes at the origin</text>
            <text x="124" y="214" className="chapter11-svg-label">curvature returns away from the origin</text>
          </svg>
        </div>

        <div className="chapter11-matrix-card">
          <div className="chapter11-panel-title">Normal-coordinate facts</div>
          <div className="chapter11-matrix-grid">
            <div className="chapter11-matrix-cell accent-teal">
              <strong>Γ(origin)</strong>
              <span>{formatSigned(connectionAtOrigin)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-orange">
              <strong>radius</strong>
              <span>{radius}</span>
            </div>
            <div className="chapter11-matrix-cell accent-indigo">
              <strong>curvature away</strong>
              <span>{formatSigned(curvatureAway)}</span>
            </div>
            <div className="chapter11-matrix-cell accent-slate">
              <strong>meaning</strong>
              <span>local flatness to first order only</span>
            </div>
          </div>
          <div className="chapter11-matrix-caption">
            <div>The chapter uses RNC to make the local inertial picture explicit.</div>
            <div>Curvature survives in second-order corrections away from the origin.</div>
          </div>
        </div>
      </div>

      <div className="chapter11-lab-notes">
        <div className="chapter11-note">
          <strong>What to look for:</strong> the origin looks inertial, but the patch does not
          stay flat everywhere.
        </div>
        <div className="chapter11-note">
          <strong>Why it matters:</strong> Riemann normal coordinates isolate local flatness
          from genuine curvature.
        </div>
      </div>
    </article>
  )
}

function Chapter11VisualizationSuite() {
  return (
    <section className="chapter11-visual-suite">
      <div className="chapter11-visual-suite-header">
        <span className="chapter11-visual-suite-kicker">Chapter 11 Visualizations</span>
        <h2>How curvature shows up in motion and transport</h2>
        <p>
          Chapter 11 ties together geodesic deviation, the Riemann tensor, closed-loop
          transport, and Riemann normal coordinates as different faces of the same curvature.
        </p>
      </div>

      <nav className="chapter11-visual-suite-nav" aria-label="Chapter 11 visualization topics">
        <a href="#geodesic-deviation">Deviation</a>
        <a href="#riemann-tensor">Riemann tensor</a>
        <a href="#loop-transport">Loop transport</a>
        <a href="#riemann-normal-coordinates">Normal coordinates</a>
      </nav>

      <Chapter11DeviationDemo />
      <Chapter11RiemannDemo />
      <Chapter11LoopDemo />
      <Chapter11RncDemo />
    </section>
  )
}

export default Chapter11VisualizationSuite
