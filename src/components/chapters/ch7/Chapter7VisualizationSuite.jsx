import { useMemo, useState } from 'react'
import './Chapter7VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter7TheoryDemo() {
  const [theory, setTheory] = useState('tensor')

  const copyMap = {
    scalar: {
      kicker: 'Scalar gravity',
      title: 'A scalar field can mimic Newtonian gravity, but it misses light bending',
      body: 'The chapter shows that a scalar potential can reproduce a static force law, but its relativistic behavior is wrong.',
      accent: '#0f766e',
      fieldLabel: 'Phi',
    },
    vector: {
      kicker: 'Vector gravity',
      title: 'A vector field feels closer to electromagnetism, but it becomes unstable',
      body: 'The vector theory gets some relativistic structure right, but its waves carry negative energy.',
      accent: '#c2410c',
      fieldLabel: 'Phi_mu',
    },
    tensor: {
      kicker: 'Tensor gravity',
      title: 'A symmetric tensor gets very close, but still fails globally in flat spacetime',
      body: 'The tensor theory bends light and yields positive-energy waves, yet its coupling to matter remains inconsistent.',
      accent: '#7c3aed',
      fieldLabel: 'h_mu_nu',
    },
  }

  const current = copyMap[theory]

  return (
    <article className="chapter7-lab" id="gravity-theories">
      <div className="chapter7-lab-header">
        <div>
          <span className="chapter7-lab-kicker">Flat-spacetime attempts</span>
          <h3>{current.title}</h3>
        </div>
        <label className="chapter7-inline-control">
          Theory
          <select value={theory} onChange={(e) => setTheory(e.target.value)}>
            <option value="scalar">Scalar</option>
            <option value="vector">Vector</option>
            <option value="tensor">Tensor</option>
          </select>
        </label>
      </div>

      <p className="chapter7-lab-intro">
        Chapter 7 compares increasingly sophisticated relativistic gravity models and
        shows that each flat-spacetime attempt fails in an important way.
      </p>

      <div className="chapter7-dual-panel">
        <div className="chapter7-svg-card">
          <div className="chapter7-panel-title">{current.kicker}</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Comparison of candidate relativistic gravity theories">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {theory === 'scalar' && (
              <>
                <circle cx="240" cy="136" r="26" fill="rgba(15, 118, 110, 0.16)" stroke="#0f766e" strokeWidth="3" />
                <path d="M 150 136 L 210 136" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <path d="M 330 136 L 270 136" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <text x="144" y="62" className="chapter7-svg-label">static potential</text>
                <text x="140" y="214" className="chapter7-svg-label">no bending of light</text>
              </>
            )}
            {theory === 'vector' && (
              <>
                <circle cx="240" cy="136" r="24" fill="rgba(194, 65, 12, 0.16)" stroke="#c2410c" strokeWidth="3" />
                <path d="M 240 72 L 240 108" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <path d="M 240 200 L 240 164" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <path d="M 150 96 L 328 176" stroke="#c2410c" strokeWidth="3" strokeDasharray="6 6" />
                <text x="132" y="62" className="chapter7-svg-label">vector field lines</text>
                <text x="116" y="214" className="chapter7-svg-label">negative-energy waves</text>
              </>
            )}
            {theory === 'tensor' && (
              <>
                <rect x="152" y="78" width="176" height="116" rx="18" fill="rgba(124, 58, 237, 0.12)" stroke="#7c3aed" strokeWidth="3" />
                <path d="M 152 136 L 118 118" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <path d="M 328 136 L 362 118" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <path d="M 240 78 L 240 52" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter7ArrowHead)" />
                <text x="132" y="62" className="chapter7-svg-label">symmetric tensor h</text>
                <text x="114" y="214" className="chapter7-svg-label">best flat-spacetime candidate</text>
              </>
            )}
            <defs>
              <marker id="chapter7ArrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill={current.accent} />
              </marker>
            </defs>
            <text x="58" y="54" className="chapter7-svg-label">{current.fieldLabel}</text>
          </svg>
        </div>

        <div className="chapter7-matrix-card">
          <div className="chapter7-panel-title">What the chapter says about it</div>
          <div className="chapter7-form-stack">
            <div className="chapter7-form-row">
              <span className="chapter7-form-pill scalar">scalar</span>
              <span className="chapter7-form-value">wrong light bending</span>
            </div>
            <div className="chapter7-form-row">
              <span className="chapter7-form-pill vector">vector</span>
              <span className="chapter7-form-value">negative-energy waves</span>
            </div>
            <div className="chapter7-form-row">
              <span className="chapter7-form-pill tensor">tensor</span>
              <span className="chapter7-form-value">closest, but inconsistent</span>
            </div>
          </div>
          <div className="chapter7-matrix-caption">
            <div>{current.body}</div>
            <div>The chapter uses these failures to motivate curved spacetime.</div>
          </div>
        </div>
      </div>

      <div className="chapter7-lab-notes">
        <div className="chapter7-note">
          <strong>What to look for:</strong> the scalar and vector models fail for different
          reasons, while the tensor model is only a near miss.
        </div>
        <div className="chapter7-note">
          <strong>Why it matters:</strong> the chapter&apos;s argument is that no flat-spacetime
          gravity model survives all the checks.
        </div>
      </div>
    </article>
  )
}

function Chapter7RedshiftDemo() {
  const [height, setHeight] = useState(48)

  const normalized = height / 100
  const gh = normalized * 0.95
  const z = gh
  const topLambda = 1 + z
  const bottomEnergy = 1 + gh

  return (
    <article className="chapter7-lab" id="gravitational-redshift">
      <div className="chapter7-lab-header">
        <div>
          <span className="chapter7-lab-kicker">Energy conservation</span>
          <h3>Gravitational redshift drops out of the bookkeeping for light climbing uphill</h3>
        </div>
        <label className="chapter7-inline-control">
          Height difference: {height}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={height}
            onChange={(e) => setHeight(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter7-lab-intro">
        The chapter&apos;s weak-field argument says a photon climbing in a gravitational
        field loses energy, so its wavelength increases by about <code>gh</code>.
      </p>

      <div className="chapter7-dual-panel">
        <div className="chapter7-svg-card">
          <div className="chapter7-panel-title">Bottom to top</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Photon climbing in a gravitational field">
            <defs>
              <marker id="chapter7PhotonHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="118" y1="196" x2="360" y2="196" stroke="#94a3b8" strokeWidth="2" />
            <line x1="118" y1="76" x2="360" y2="76" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="214" cy="196" r="7" fill="#0f766e" />
            <circle cx="266" cy="76" r="7" fill="#c2410c" />
            <path d={`M 214 196 C 224 ${176 - normalized * 18}, 244 ${136 - normalized * 22}, 266 76`} stroke="#c2410c" strokeWidth="5" fill="none" markerEnd="url(#chapter7PhotonHead)" />
            <text x="98" y="58" className="chapter7-svg-label">top observer</text>
            <text x="92" y="220" className="chapter7-svg-label">bottom observer</text>
            <text x="282" y="122" className="chapter7-svg-label">photon climbs</text>
          </svg>
        </div>

        <div className="chapter7-matrix-card">
          <div className="chapter7-panel-title">Energy and wavelength shift</div>
          <div className="chapter7-matrix-grid">
            <div className="chapter7-matrix-cell accent-teal">
              <strong>z</strong>
              <span>redshift</span>
            </div>
            <div className="chapter7-matrix-cell accent-orange">
              <strong>E_top / E_bottom</strong>
              <span>energy ratio</span>
            </div>
            <div className="chapter7-matrix-cell accent-indigo">
              <strong>λ_top / λ_bottom</strong>
              <span>wavelength ratio</span>
            </div>
            <div className="chapter7-matrix-cell accent-slate">
              <strong>gh</strong>
              <span>weak-field prediction</span>
            </div>
          </div>
          <div className="chapter7-matrix-caption">
            <div>bottom energy factor: {formatSigned(bottomEnergy)}</div>
            <div>top wavelength factor: {formatSigned(topLambda)}</div>
          </div>
        </div>
      </div>

      <div className="chapter7-lab-notes">
        <div className="chapter7-note">
          <strong>What to look for:</strong> the photon loses energy as it climbs, so the
          received wavelength is longer.
        </div>
        <div className="chapter7-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s cleanest observational
          clue that gravity must affect light.
        </div>
      </div>
    </article>
  )
}

function Chapter7RocketDemo() {
  const [rocketAccel, setRocketAccel] = useState(45)

  const normalized = rocketAccel / 100
  const g = normalized * 0.95
  const z = g
  const lowerShift = 1 + z
  const upperShift = 1

  return (
    <article className="chapter7-lab" id="equivalence-principle">
      <div className="chapter7-lab-header">
        <div>
          <span className="chapter7-lab-kicker">Equivalence principle</span>
          <h3>A uniformly accelerated rocket reproduces the same redshift</h3>
        </div>
        <label className="chapter7-inline-control">
          Rocket acceleration: {rocketAccel}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={rocketAccel}
            onChange={(e) => setRocketAccel(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter7-lab-intro">
        The chapter&apos;s rocket argument shows that a uniform gravitational field and a
        uniformly accelerated frame give the same redshift, locally.
      </p>

      <div className="chapter7-dual-panel">
        <div className="chapter7-svg-card">
          <div className="chapter7-panel-title">Rocket frame</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Accelerating rocket with photon signal">
            <defs>
              <marker id="chapter7RocketHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="196" y="72" width="88" height="126" rx="20" fill="rgba(124, 58, 237, 0.12)" stroke="#7c3aed" strokeWidth="3" />
            <circle cx="240" cy="184" r="9" fill="#0f766e" />
            <circle cx="240" cy="92" r="9" fill="#c2410c" />
            <path d={`M 240 184 L ${240 + 74 * normalized} ${184 - 90 * normalized}`} stroke="#c2410c" strokeWidth="5" fill="none" markerEnd="url(#chapter7RocketHead)" />
            <path d={`M 284 76 C 306 ${58 - 14 * normalized}, 324 ${48 - 12 * normalized}, 344 ${40 - 8 * normalized}`} stroke="#7c3aed" strokeWidth="4" fill="none" />
            <text x="158" y="56" className="chapter7-svg-label">accelerating rocket</text>
            <text x="156" y="224" className="chapter7-svg-label">lower clock emits; upper clock receives later</text>
          </svg>
        </div>

        <div className="chapter7-matrix-card">
          <div className="chapter7-panel-title">Redshift comparison</div>
          <div className="chapter7-matrix-grid">
            <div className="chapter7-matrix-cell accent-teal">
              <strong>g</strong>
              <span>rocket acceleration</span>
            </div>
            <div className="chapter7-matrix-cell accent-orange">
              <strong>z = gh</strong>
              <span>equivalence-principle redshift</span>
            </div>
            <div className="chapter7-matrix-cell accent-indigo">
              <strong>lower clock</strong>
              <span>emits the photon</span>
            </div>
            <div className="chapter7-matrix-cell accent-slate">
              <strong>upper clock</strong>
              <span>receives a redshifted pulse</span>
            </div>
          </div>
          <div className="chapter7-matrix-caption">
            <div>lower frequency factor: {formatSigned(lowerShift)}</div>
            <div>upper frequency factor: {formatSigned(upperShift)}</div>
          </div>
        </div>
      </div>

      <div className="chapter7-lab-notes">
        <div className="chapter7-note">
          <strong>What to look for:</strong> the same weak-field redshift appears whether you
          describe it as gravity or acceleration.
        </div>
        <div className="chapter7-note">
          <strong>Why it matters:</strong> the equivalence principle is the bridge from the
          gravitational argument to the accelerated-observer picture.
        </div>
      </div>
    </article>
  )
}

function Chapter7CurvatureDemo() {
  const [mismatch, setMismatch] = useState(36)

  const normalized = mismatch / 100
  const localFlatness = 1 - normalized * 0.8
  const globalMismatch = normalized * 0.9

  const curvePath = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => {
        const x = 126 + index * 42
        const y = 184 - index * 18 - normalized * 22
        return `M ${x} ${y} C ${x + 14} ${y - 16}, ${x + 28} ${y - 18}, ${x + 36} ${y - 8}`
      }),
    [normalized]
  )

  return (
    <article className="chapter7-lab" id="local-flatness">
      <div className="chapter7-lab-header">
        <div>
          <span className="chapter7-lab-kicker">Local flatness</span>
          <h3>Local inertial frames fit, but they do not globally mesh in a gravitational field</h3>
        </div>
        <label className="chapter7-inline-control">
          Frame mismatch: {mismatch}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={mismatch}
            onChange={(e) => setMismatch(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter7-lab-intro">
        Chapter 7 concludes that gravity forces us to abandon a single global Minkowski
        frame. Local inertial frames still exist, but they do not line up everywhere.
      </p>

      <div className="chapter7-dual-panel">
        <div className="chapter7-svg-card">
          <div className="chapter7-panel-title">Local frames near Earth</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Local inertial frames around a curved Earth">
            <defs>
              <marker id="chapter7FrameHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="138" r="54" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="3" />
            <path d={`M 186 138 L ${150 - 18 * globalMismatch} 138`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter7FrameHead)" />
            <path d={`M 294 138 L ${330 + 18 * globalMismatch} 138`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter7FrameHead)" />
            <path d={`M 240 84 L 240 ${60 - 16 * globalMismatch}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter7FrameHead)" />
            <text x="100" y="56" className="chapter7-svg-label">local inertial axes</text>
            <text x="172" y="214" className="chapter7-svg-label">frames do not globally mesh</text>
          </svg>
        </div>

        <div className="chapter7-svg-card">
          <div className="chapter7-panel-title">Curvature by nonmeshing</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Nonmeshing local frames indicate curvature">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            {curvePath.map((d, index) => (
              <path
                key={index}
                d={d}
                fill="none"
                stroke={index % 2 === 0 ? '#c2410c' : '#7c3aed'}
                strokeWidth="3.5"
                opacity={0.9 - index * 0.08}
              />
            ))}
            <text x="86" y="56" className="chapter7-svg-label">small patches are flat</text>
            <text x="120" y="214" className="chapter7-svg-label">global curvature shows up when patches refuse to fit</text>
          </svg>
        </div>
      </div>

      <div className="chapter7-lab-notes">
        <div className="chapter7-note">
          <strong>What to look for:</strong> each local frame is nearly inertial, but the
          mismatch grows as you try to extend it globally. The local-flatness factor is{' '}
          {formatSigned(localFlatness)}.
        </div>
        <div className="chapter7-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s geometric conclusion:
          gravity requires curved spacetime, not one global inertial chart.
        </div>
      </div>
    </article>
  )
}

function Chapter7VisualizationSuite() {
  return (
    <section className="chapter7-visual-suite">
      <div className="chapter7-visual-suite-header">
        <span className="chapter7-visual-suite-kicker">Chapter 7 Visualizations</span>
        <h2>Why gravity cannot stay inside flat spacetime</h2>
        <p>
          Chapter 7 shows how flat-spacetime gravity fails, why gravitational redshift is
          unavoidable, and how local inertial frames survive only in a curved geometry.
        </p>
      </div>

      <nav className="chapter7-visual-suite-nav" aria-label="Chapter 7 visualization topics">
        <a href="#gravity-theories">Gravity theories</a>
        <a href="#gravitational-redshift">Redshift</a>
        <a href="#equivalence-principle">Equivalence</a>
        <a href="#local-flatness">Local flatness</a>
      </nav>

      <Chapter7TheoryDemo />
      <Chapter7RedshiftDemo />
      <Chapter7RocketDemo />
      <Chapter7CurvatureDemo />
    </section>
  )
}

export default Chapter7VisualizationSuite
