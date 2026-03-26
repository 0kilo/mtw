import { useMemo, useState } from 'react'
import './Chapter10VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter10GeodesicDemo() {
  const [speed, setSpeed] = useState(48)
  const normalized = speed / 100
  const affineScale = 0.8 + normalized * 1.2
  const affineShift = -0.1 + normalized * 0.35

  const geodesicPath = useMemo(
    () => `M 92 186 C 150 ${154 - 10 * normalized}, 214 ${116 - 14 * normalized}, 282 ${118 - 8 * normalized} S 366 ${154 - 6 * normalized}, 404 ${92 - 10 * normalized}`,
    [normalized]
  )

  return (
    <article className="chapter10-lab" id="geodesics">
      <div className="chapter10-lab-header">
        <div>
          <span className="chapter10-lab-kicker">Geodesics</span>
          <h3>A free-fall world line is the unique affine-parameterized curve from one event and tangent</h3>
        </div>
        <label className="chapter10-inline-control">
          Affine scale: {speed}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={speed}
            onChange={(e) => setSpeed(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter10-lab-intro">
        The chapter begins by tying geodesics to the equivalence principle: give an event,
        give a tangent vector, and the affine parameter fixes the world line up to linear
        reparameterizations.
      </p>

      <div className="chapter10-dual-panel">
        <div className="chapter10-svg-card">
          <div className="chapter10-panel-title">Affine world line</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Geodesic curve with affine parameter markers">
            <defs>
              <marker id="chapter10GeodesicHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={geodesicPath} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="118" cy="174" r="8" fill="#7c3aed" />
            <circle cx="244" cy="132" r="8" fill="#7c3aed" />
            <circle cx="380" cy="100" r="8" fill="#7c3aed" />
            <path d={`M 118 174 L ${160 + 18 * affineShift} ${152 - 8 * affineShift}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10GeodesicHead)" />
            <text x="84" y="58" className="chapter10-svg-label">same world line, different affine scalings</text>
            <text x="262" y="214" className="chapter10-svg-label">free-fall tangent stays aligned with the curve</text>
          </svg>
        </div>

        <div className="chapter10-matrix-card">
          <div className="chapter10-panel-title">What fixes the geodesic</div>
          <div className="chapter10-matrix-grid">
            <div className="chapter10-matrix-cell accent-teal">
              <strong>event</strong>
              <span>initial point on the world line</span>
            </div>
            <div className="chapter10-matrix-cell accent-orange">
              <strong>tangent</strong>
              <span>initial direction of free fall</span>
            </div>
            <div className="chapter10-matrix-cell accent-indigo">
              <strong>affine scale</strong>
              <span>{formatSigned(affineScale)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-slate">
              <strong>affine shift</strong>
              <span>{formatSigned(affineShift)}</span>
            </div>
          </div>
          <div className="chapter10-matrix-caption">
            <div>Only linear reparameterizations preserve the geodesic description.</div>
            <div>The chapter treats that freedom as the affine parameter ambiguity.</div>
          </div>
        </div>
      </div>

      <div className="chapter10-lab-notes">
        <div className="chapter10-note">
          <strong>What to look for:</strong> the same curve can be labeled by different
          affine parameters without changing the underlying geodesic.
        </div>
        <div className="chapter10-note">
          <strong>Why it matters:</strong> geodesics are the physically privileged curves in
          the affine geometry of free fall.
        </div>
      </div>
    </article>
  )
}

function Chapter10TransportDemo() {
  const [route, setRoute] = useState('geodesic')
  const [transport, setTransport] = useState(40)

  const normalized = transport / 100
  const path = route === 'geodesic'
    ? `M 98 180 C 152 ${158 - 10 * normalized}, 220 ${118 - 10 * normalized}, 296 ${118 - 8 * normalized} S 376 ${158 - 8 * normalized}, 398 ${104 - 10 * normalized}`
    : `M 98 180 C 150 ${176 - 8 * normalized}, 186 ${92 - 18 * normalized}, 250 ${108 - 8 * normalized} S 332 ${178 - 4 * normalized}, 398 ${98 - 10 * normalized}`

  const carriedAngle = route === 'geodesic' ? -14 + normalized * 18 : -28 + normalized * 42

  return (
    <article className="chapter10-lab" id="parallel-transport">
      <div className="chapter10-lab-header">
        <div>
          <span className="chapter10-lab-kicker">Parallel transport</span>
          <h3>Schild&apos;s ladder carries a vector so it can be compared back at the same event</h3>
        </div>
        <label className="chapter10-inline-control">
          Route
          <select value={route} onChange={(e) => setRoute(e.target.value)}>
            <option value="geodesic">Along a geodesic</option>
            <option value="detour">With a detour</option>
          </select>
        </label>
        <label className="chapter10-inline-control">
          Transport step: {transport}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={transport}
            onChange={(e) => setTransport(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter10-lab-intro">
        The chapter defines parallel transport operationally: carry the vector locally, use
        a small geodesic cross-brace, and compare only after the transport back.
      </p>

      <div className="chapter10-dual-panel">
        <div className="chapter10-svg-card">
          <div className="chapter10-panel-title">Transport along a path</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Vector transported along a geodesic or detour">
            <defs>
              <marker id="chapter10TransportHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={path} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="112" cy="176" r="8" fill="#0f766e" />
            <circle cx="392" cy="100" r="8" fill="#0f766e" />
            <path d={`M 116 174 L ${156 + 12 * normalized} ${150 - 12 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10TransportHead)" />
            <path d={`M 258 ${126 - 8 * normalized} L ${300 + 10 * normalized} ${98 - 8 * normalized}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10TransportHead)" />
            <text x="78" y="58" className="chapter10-svg-label">carry the vector locally</text>
            <text x="284" y="214" className="chapter10-svg-label">compare only after transport</text>
          </svg>
        </div>

        <div className="chapter10-matrix-card">
          <div className="chapter10-panel-title">Why the route matters</div>
          <div className="chapter10-matrix-grid">
            <div className="chapter10-matrix-cell accent-teal">
              <strong>route</strong>
              <span>{route}</span>
            </div>
            <div className="chapter10-matrix-cell accent-orange">
              <strong>carried angle</strong>
              <span>{formatSigned(carriedAngle)}°</span>
            </div>
            <div className="chapter10-matrix-cell accent-indigo">
              <strong>local rule</strong>
              <span>compare vectors at the same event</span>
            </div>
            <div className="chapter10-matrix-cell accent-slate">
              <strong>curvature hint</strong>
              <span>path dependence appears in curved spacetime</span>
            </div>
          </div>
          <div className="chapter10-matrix-caption">
            <div>Flat spacetime would give the same answer on either route.</div>
            <div>The chapter uses route dependence as the first clue of curvature.</div>
          </div>
        </div>
      </div>

      <div className="chapter10-lab-notes">
        <div className="chapter10-note">
          <strong>What to look for:</strong> the vector is compared only after it is carried
          back to the starting tangent space.
        </div>
        <div className="chapter10-note">
          <strong>Why it matters:</strong> parallel transport is the operational bridge to
          the covariant derivative.
        </div>
      </div>
    </article>
  )
}

function Chapter10CovariantDemo() {
  const [variation, setVariation] = useState(52)
  const normalized = variation / 100
  const naiveChange = 0.2 + normalized * 0.85
  const transportCorrection = 0.35 + normalized * 0.7
  const covariantChange = naiveChange - 0.18

  return (
    <article className="chapter10-lab" id="covariant-derivative">
      <div className="chapter10-lab-header">
        <div>
          <span className="chapter10-lab-kicker">Covariant derivative</span>
          <h3>The derivative is the transported difference quotient, not a raw subtraction</h3>
        </div>
        <label className="chapter10-inline-control">
          Field variation: {variation}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={variation}
            onChange={(e) => setVariation(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter10-lab-intro">
        Once vectors live in different tangent spaces, the derivative must first transport
        one of them back before a meaningful comparison can be made.
      </p>

      <div className="chapter10-dual-panel">
        <div className="chapter10-svg-card">
          <div className="chapter10-panel-title">Transport, then subtract</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Covariant derivative as transported difference">
            <defs>
              <marker id="chapter10CovariantHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 104 188 C 160 ${162 - 12 * normalized}, 220 ${116 - 12 * normalized}, 296 ${126 - 6 * normalized} S 372 ${164 - 6 * normalized}, 402 ${112 - 4 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="128" cy="176" r="8" fill="#0f766e" />
            <circle cx="382" cy={118 - 6 * normalized} r="8" fill="#c2410c" />
            <path d={`M 128 176 L ${162 + 10 * normalized} ${144 - 10 * normalized}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10CovariantHead)" />
            <path d={`M 382 ${118 - 6 * normalized} L ${348 - 10 * normalized} ${90 - 10 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10CovariantHead)" />
            <path d={`M 162 ${144 - 10 * normalized} L ${348 - 12 * normalized} ${90 - 10 * normalized}`} stroke="#7c3aed" strokeWidth="4" strokeDasharray="7 6" />
            <text x="78" y="58" className="chapter10-svg-label">same tangent space after transport</text>
            <text x="278" y="214" className="chapter10-svg-label">difference quotient becomes geometric</text>
          </svg>
        </div>

        <div className="chapter10-matrix-card">
          <div className="chapter10-panel-title">Derivative bookkeeping</div>
          <div className="chapter10-matrix-grid">
            <div className="chapter10-matrix-cell accent-teal">
              <strong>naive change</strong>
              <span>{formatSigned(naiveChange)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-orange">
              <strong>transport correction</strong>
              <span>{formatSigned(transportCorrection)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-indigo">
              <strong>covariant change</strong>
              <span>{formatSigned(covariantChange)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-slate">
              <strong>local rule</strong>
              <span>compare after transport back</span>
            </div>
          </div>
          <div className="chapter10-matrix-caption">
            <div>The chapter uses this construction to define ∇ along a curve.</div>
            <div>It is the affine-geometry version of a derivative quotient.</div>
          </div>
        </div>
      </div>

      <div className="chapter10-lab-notes">
        <div className="chapter10-note">
          <strong>What to look for:</strong> the correction term is what turns ordinary
          subtraction into a covariant comparison.
        </div>
        <div className="chapter10-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s operational definition
          of covariant differentiation.
        </div>
      </div>
    </article>
  )
}

function Chapter10ConnectionDemo() {
  const [phi, setPhi] = useState(36)
  const normalized = phi / 100
  const radialCoeff = 0.9 + normalized * 0.9
  const angularCoeff = 0.6 + normalized * 0.8
  const geodesicCoeff = 0.35 + normalized * 0.55

  return (
    <article className="chapter10-lab" id="connection-coefficients">
      <div className="chapter10-lab-header">
        <div>
          <span className="chapter10-lab-kicker">Connection coefficients</span>
          <h3>In polar coordinates, the connection records how the basis itself turns</h3>
        </div>
        <label className="chapter10-inline-control">
          Polar angle: {phi}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={phi}
            onChange={(e) => setPhi(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter10-lab-intro">
        Chapter 10 finishes with the component form of the connection. In a non-coordinate
        basis, the coefficients encode the rotation of the basis vectors themselves.
      </p>

      <div className="chapter10-dual-panel">
        <div className="chapter10-svg-card">
          <div className="chapter10-panel-title">Polar basis on a sheet</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Polar coordinate basis and connection coefficients">
            <defs>
              <marker id="chapter10ConnectionHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r="56" fill="rgba(15, 118, 110, 0.1)" stroke="#0f766e" strokeWidth="3" />
            <path d={`M 240 138 L ${240 + 90 * radialCoeff / 2} 138`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10ConnectionHead)" />
            <path d={`M 240 138 L 240 ${138 - 78 * angularCoeff / 2}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10ConnectionHead)" />
            <path d={`M 240 138 L ${240 - 66 * geodesicCoeff / 1.4} ${138 + 42 * geodesicCoeff / 1.4}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter10ConnectionHead)" />
            <text x="96" y="58" className="chapter10-svg-label">basis rotation produces Γ</text>
            <text x="124" y="214" className="chapter10-svg-label">same flat sheet, nonzero coefficients in polar form</text>
          </svg>
        </div>

        <div className="chapter10-matrix-card">
          <div className="chapter10-panel-title">Representative coefficients</div>
          <div className="chapter10-matrix-grid">
            <div className="chapter10-matrix-cell accent-teal">
              <strong>{'Γ^r_{φφ}'}</strong>
              <span>{formatSigned(-radialCoeff)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-orange">
              <strong>{'Γ^φ_{rφ}'}</strong>
              <span>{formatSigned(angularCoeff)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-indigo">
              <strong>{'Γ^r_{rφ}'}</strong>
              <span>{formatSigned(geodesicCoeff)}</span>
            </div>
            <div className="chapter10-matrix-cell accent-slate">
              <strong>symmetry</strong>
              <span>lower indices match in a coordinate basis</span>
            </div>
          </div>
          <div className="chapter10-matrix-caption">
            <div>The exercise set uses this same sheet-of-paper geometry.</div>
            <div>Connection coefficients tell how the basis changes from point to point.</div>
          </div>
        </div>
      </div>

      <div className="chapter10-lab-notes">
        <div className="chapter10-note">
          <strong>What to look for:</strong> the coefficients are not forces; they are the
          bookkeeping terms for a changing basis.
        </div>
        <div className="chapter10-note">
          <strong>Why it matters:</strong> this is the component form that prepares Chapter
          11&apos;s curvature calculations.
        </div>
      </div>
    </article>
  )
}

function Chapter10VisualizationSuite() {
  return (
    <section className="chapter10-visual-suite">
      <div className="chapter10-visual-suite-header">
        <span className="chapter10-visual-suite-kicker">Chapter 10 Visualizations</span>
        <h2>How affine geometry packages free fall and transport</h2>
        <p>
          Chapter 10 turns geodesics, parallel transport, and covariant derivatives into a
          single affine picture and then exposes the connection coefficients in components.
        </p>
      </div>

      <nav className="chapter10-visual-suite-nav" aria-label="Chapter 10 visualization topics">
        <a href="#geodesics">Geodesics</a>
        <a href="#parallel-transport">Parallel transport</a>
        <a href="#covariant-derivative">Covariant derivative</a>
        <a href="#connection-coefficients">Connection coefficients</a>
      </nav>

      <Chapter10GeodesicDemo />
      <Chapter10TransportDemo />
      <Chapter10CovariantDemo />
      <Chapter10ConnectionDemo />
    </section>
  )
}

export default Chapter10VisualizationSuite
