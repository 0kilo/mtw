import { useMemo, useState } from 'react'
import './Chapter8VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter8LanguageDemo() {
  const [view, setView] = useState('pictorial')
  const [orbitPhase, setOrbitPhase] = useState(42)

  const normalized = orbitPhase / 100
  const rotation = 0.45 + normalized * 0.9
  const componentAngle = 18 + normalized * 28

  const current = {
    pictorial: {
      kicker: 'Pictorial language',
      title: 'A rotating basis makes the orbit feel curved before any formulas appear',
      body: 'The chapter starts with pictures: arrows, curves, and a basis that turns with position.',
      accent: '#0f766e',
    },
    abstract: {
      kicker: 'Abstract language',
      title: 'The same motion is a tangent vector field and a moving frame',
      body: 'The abstract view strips away coordinates and keeps only geometric objects.',
      accent: '#7c3aed',
    },
    component: {
      kicker: 'Component language',
      title: 'Components must track the rotating basis or the derivative is incomplete',
      body: 'The component view shows why basis change adds extra terms to the acceleration.',
      accent: '#c2410c',
    },
  }[view]

  const orbitPath = useMemo(() => {
    const sweep = 1 + normalized * 0.8
    return `M 136 138
            C 150 ${88 - 18 * sweep}, 190 ${64 - 10 * sweep}, 240 64
            C 290 ${64 - 10 * sweep}, 330 ${88 - 18 * sweep}, 344 138
            C 330 ${188 + 12 * sweep}, 290 ${212 + 14 * sweep}, 240 212
            C 190 ${212 + 14 * sweep}, 150 ${188 + 12 * sweep}, 136 138 Z`
  }, [normalized])

  return (
    <article className="chapter8-lab" id="geometry-languages">
      <div className="chapter8-lab-header">
        <div>
          <span className="chapter8-lab-kicker">Three aspects of geometry</span>
          <h3>{current.title}</h3>
        </div>
        <label className="chapter8-inline-control">
          View
          <select value={view} onChange={(e) => setView(e.target.value)}>
            <option value="pictorial">Pictorial</option>
            <option value="abstract">Abstract</option>
            <option value="component">Component</option>
          </select>
        </label>
        <label className="chapter8-inline-control">
          Orbit phase: {orbitPhase}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={orbitPhase}
            onChange={(e) => setOrbitPhase(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter8-lab-intro">
        Chapter 8 insists that differential geometry makes sense only when you can move
        between pictures, abstract objects, and components.
      </p>

      <div className="chapter8-dual-panel">
        <div className="chapter8-svg-card">
          <div className="chapter8-panel-title">{current.kicker}</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Orbit with rotating basis vectors">
            <defs>
              <marker id="chapter8BasisHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill={current.accent} />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="138" r="30" fill="rgba(194, 65, 12, 0.14)" stroke="#c2410c" strokeWidth="3" />
            <path d={orbitPath} fill="none" stroke="#0f766e" strokeWidth="3.5" opacity="0.95" />
            <circle cx="240" cy={138 - 74 * Math.sin(rotation)} r="8" fill="#7c3aed" />
            <path d={`M 240 ${138 - 74 * Math.sin(rotation)} L ${240 + 56 * Math.cos(rotation)} ${138 - 74 * Math.sin(rotation) - 56 * Math.sin(rotation)}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter8BasisHead)" />
            <path d={`M 240 ${138 - 74 * Math.sin(rotation)} L ${240 - 38 * Math.sin(rotation)} ${138 - 74 * Math.sin(rotation) + 38 * Math.cos(rotation)}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter8BasisHead)" />
            <text x="96" y="58" className="chapter8-svg-label">turning basis</text>
            <text x="310" y="222" className="chapter8-svg-label">same motion, three descriptions</text>
          </svg>
        </div>

        <div className="chapter8-matrix-card">
          <div className="chapter8-panel-title">What each language emphasizes</div>
          <div className="chapter8-matrix-grid">
            <div className="chapter8-matrix-cell accent-teal">
              <strong>Pictorial</strong>
              <span>arrows and moving frames</span>
            </div>
            <div className="chapter8-matrix-cell accent-indigo">
              <strong>Abstract</strong>
              <span>vectors and tensors as objects</span>
            </div>
            <div className="chapter8-matrix-cell accent-orange">
              <strong>Component</strong>
              <span>numbers that depend on basis change</span>
            </div>
            <div className="chapter8-matrix-cell accent-slate">
              <strong>Rotation</strong>
              <span>{formatSigned(componentAngle)} degrees of basis twist</span>
            </div>
          </div>
          <div className="chapter8-matrix-caption">
            <div>{current.body}</div>
            <div>The rotating basis is the first sign that derivatives must be covariant.</div>
          </div>
        </div>
      </div>

      <div className="chapter8-lab-notes">
        <div className="chapter8-note">
          <strong>What to look for:</strong> the picture changes even when the physical
          motion does not. The language changes, not the geometry.
        </div>
        <div className="chapter8-note">
          <strong>Why it matters:</strong> basis change is the bridge from simple
          components to covariant derivatives.
        </div>
      </div>
    </article>
  )
}

function Chapter8CovariantDemo() {
  const [transport, setTransport] = useState(44)

  const normalized = transport / 100
  const correction = 0.35 + normalized * 0.65
  const naiveChange = 1 - normalized * 0.2

  return (
    <article className="chapter8-lab" id="covariant-derivative">
      <div className="chapter8-lab-header">
        <div>
          <span className="chapter8-lab-kicker">Covariant differentiation</span>
          <h3>Compare a vector with its parallel-transported neighbor, not with a raw copy</h3>
        </div>
        <label className="chapter8-inline-control">
          Transport distance: {transport}
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

      <p className="chapter8-lab-intro">
        The chapter defines the covariant derivative by transporting a vector back to the
        same point before subtracting, so the comparison is geometric.
      </p>

      <div className="chapter8-dual-panel">
        <div className="chapter8-svg-card">
          <div className="chapter8-panel-title">Transport and subtract</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Parallel transport along a curved path">
            <defs>
              <marker id="chapter8TransportHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 106 188 C 158 ${160 - 22 * normalized}, 220 ${108 - 14 * normalized}, 286 ${118 - 8 * normalized} S 386 ${154 - 10 * normalized}, 402 ${102 - 8 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="124" cy="176" r="8" fill="#0f766e" />
            <circle cx="382" cy={112 - 10 * normalized} r="8" fill="#c2410c" />
            <path d={`M 124 176 L ${166 + 8 * normalized} ${144 - 8 * normalized}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter8TransportHead)" />
            <path d={`M 382 ${112 - 10 * normalized} L ${344 - 10 * normalized} ${82 - 8 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter8TransportHead)" />
            <path d={`M 166 ${144 - 8 * normalized} L ${356 - 12 * normalized} ${98 - 12 * normalized}`} stroke="#7c3aed" strokeWidth="4" strokeDasharray="7 6" />
            <text x="82" y="58" className="chapter8-svg-label">compare after transport</text>
            <text x="276" y="216" className="chapter8-svg-label">subtract at the same point</text>
          </svg>
        </div>

        <div className="chapter8-matrix-card">
          <div className="chapter8-panel-title">Geometric derivative</div>
          <div className="chapter8-matrix-grid">
            <div className="chapter8-matrix-cell accent-teal">
              <strong>naive change</strong>
              <span>what the components do by themselves</span>
            </div>
            <div className="chapter8-matrix-cell accent-orange">
              <strong>transport correction</strong>
              <span>what the basis change contributes</span>
            </div>
            <div className="chapter8-matrix-cell accent-indigo">
              <strong>covariant derivative</strong>
              <span>difference after transport</span>
            </div>
            <div className="chapter8-matrix-cell accent-slate">
              <strong>correction factor</strong>
              <span>{formatSigned(correction)}</span>
            </div>
          </div>
          <div className="chapter8-matrix-caption">
            <div>naive change factor: {formatSigned(naiveChange)}</div>
            <div>The chapter&apos;s definition is the transported difference, not a raw subtraction.</div>
          </div>
        </div>
      </div>

      <div className="chapter8-lab-notes">
        <div className="chapter8-note">
          <strong>What to look for:</strong> the vector on the right is not compared in a
          different tangent space.
        </div>
        <div className="chapter8-note">
          <strong>Why it matters:</strong> covariant differentiation keeps the comparison
          local and geometric.
        </div>
      </div>
    </article>
  )
}

function Chapter8DeviationDemo() {
  const [spread, setSpread] = useState(52)

  const normalized = spread / 100
  const separation = 0.22 + normalized * 0.86
  const tidal = 0.1 + normalized * 0.72

  const geodesicPaths = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const offset = index - 2
        const yBase = 170 - offset * 14
        return `M 110 ${yBase}
                C 180 ${146 - offset * 6 - normalized * 14}, 260 ${126 - offset * 4 - normalized * 12}, 348 ${96 - offset * 5 - normalized * 10}`
      }),
    [normalized]
  )

  return (
    <article className="chapter8-lab" id="geodesic-deviation">
      <div className="chapter8-lab-header">
        <div>
          <span className="chapter8-lab-kicker">Geodesic deviation</span>
          <h3>Nearby free-fall paths separate when curvature is present</h3>
        </div>
        <label className="chapter8-inline-control">
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

      <p className="chapter8-lab-intro">
        Chapter 8 identifies curvature physically through the relative acceleration of
        neighboring geodesics.
      </p>

      <div className="chapter8-dual-panel">
        <div className="chapter8-svg-card">
          <div className="chapter8-panel-title">A family of nearby geodesics</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Family of geodesics separating in curved spacetime">
            <defs>
              <marker id="chapter8DeviationHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            {geodesicPaths.map((d, index) => (
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
              d={`M 212 132 L ${302 + 16 * normalized} ${116 - 10 * normalized}`}
              stroke="#c2410c"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#chapter8DeviationHead)"
            />
            <text x="84" y="58" className="chapter8-svg-label">separation vector grows</text>
            <text x="126" y="214" className="chapter8-svg-label">neighboring geodesics do not stay parallel</text>
          </svg>
        </div>

        <div className="chapter8-matrix-card">
          <div className="chapter8-panel-title">Curvature signal</div>
          <div className="chapter8-matrix-grid">
            <div className="chapter8-matrix-cell accent-teal">
              <strong>initial spread</strong>
              <span>starting offset between geodesics</span>
            </div>
            <div className="chapter8-matrix-cell accent-orange">
              <strong>tidal factor</strong>
              <span>how strongly curvature pulls them apart</span>
            </div>
            <div className="chapter8-matrix-cell accent-indigo">
              <strong>relative acceleration</strong>
              <span>the operational signature of curvature</span>
            </div>
            <div className="chapter8-matrix-cell accent-slate">
              <strong>separation scale</strong>
              <span>{formatSigned(separation)}</span>
            </div>
          </div>
          <div className="chapter8-matrix-caption">
            <div>tidal factor: {formatSigned(tidal)}</div>
            <div>The chapter uses geodesic deviation as the bridge from motion to curvature.</div>
          </div>
        </div>
      </div>

      <div className="chapter8-lab-notes">
        <div className="chapter8-note">
          <strong>What to look for:</strong> the center geodesic is not special; it is the
          spacing change that reveals curvature.
        </div>
        <div className="chapter8-note">
          <strong>Why it matters:</strong> curvature becomes measurable through relative
          acceleration, not through a single path alone.
        </div>
      </div>
    </article>
  )
}

function Chapter8BasisDemo() {
  const [radius, setRadius] = useState(62)

  const normalized = radius / 100
  const r = 1.1 + normalized * 1.9
  const thetaScale = 1.4 + normalized * 1.4
  const phiScale = 0.9 + normalized * 2.2

  return (
    <article className="chapter8-lab" id="tensor-algebra">
      <div className="chapter8-lab-header">
        <div>
          <span className="chapter8-lab-kicker">Local tensor algebra</span>
          <h3>At one event, tensor algebra survives; the basis just changes its scale</h3>
        </div>
        <label className="chapter8-inline-control">
          Radius scale: {radius}
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

      <p className="chapter8-lab-intro">
        The chapter stresses that a single event still supports ordinary tensor algebra,
        even in curved spacetime. The metric components simply depend on the chosen basis.
      </p>

      <div className="chapter8-dual-panel">
        <div className="chapter8-svg-card">
          <div className="chapter8-panel-title">Coordinate basis vs orthonormal basis</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Basis vectors in spherical coordinates">
            <defs>
              <marker id="chapter8BasisScaleHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="138" r="22" fill="#7c3aed" opacity="0.18" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 240 138 L ${240 + 82 * r / 3} 138`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter8BasisScaleHead)" />
            <path d={`M 240 138 L 240 ${138 - 74 * thetaScale / 3}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter8BasisScaleHead)" />
            <path d={`M 240 138 L ${240 - 66 * phiScale / 3} ${138 + 40 * phiScale / 3}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter8BasisScaleHead)" />
            <text x="88" y="58" className="chapter8-svg-label">orthonormal vectors are rescaled coordinate vectors</text>
            <text x="118" y="214" className="chapter8-svg-label">same point, different basis components</text>
          </svg>
        </div>

        <div className="chapter8-matrix-card">
          <div className="chapter8-panel-title">Metric and dual basis</div>
          <div className="chapter8-matrix-grid">
            <div className="chapter8-matrix-cell accent-teal">
              <strong>g_rr</strong>
              <span>1</span>
            </div>
            <div className="chapter8-matrix-cell accent-orange">
              <strong>g_θθ</strong>
              <span>{formatSigned(thetaScale * thetaScale)}</span>
            </div>
            <div className="chapter8-matrix-cell accent-indigo">
              <strong>g_φφ</strong>
              <span>{formatSigned(phiScale * phiScale)}</span>
            </div>
            <div className="chapter8-matrix-cell accent-slate">
              <strong>r scale</strong>
              <span>{formatSigned(r)}</span>
            </div>
          </div>
          <div className="chapter8-matrix-caption">
            <div>orthonormal scaling factors track the basis, not the physics.</div>
            <div>The chapter&apos;s point is that local tensor algebra stays familiar.</div>
          </div>
        </div>
      </div>

      <div className="chapter8-lab-notes">
        <div className="chapter8-note">
          <strong>What to look for:</strong> coordinate components stretch while the local
          orthonormal basis stays normalized.
        </div>
        <div className="chapter8-note">
          <strong>Why it matters:</strong> this is the local starting point for Levi-Civita
          tensors and metric-dependent component work.
        </div>
      </div>
    </article>
  )
}

function Chapter8VisualizationSuite() {
  return (
    <section className="chapter8-visual-suite">
      <div className="chapter8-visual-suite-header">
        <span className="chapter8-visual-suite-kicker">Chapter 8 Visualizations</span>
        <h2>How differential geometry becomes a physical language</h2>
        <p>
          Chapter 8 introduces the geometry toolkit behind curved spacetime: rotating
          bases, covariant differentiation, geodesic deviation, and local tensor algebra.
        </p>
      </div>

      <nav className="chapter8-visual-suite-nav" aria-label="Chapter 8 visualization topics">
        <a href="#geometry-languages">Geometry languages</a>
        <a href="#covariant-derivative">Covariant derivative</a>
        <a href="#geodesic-deviation">Deviation</a>
        <a href="#tensor-algebra">Tensor algebra</a>
      </nav>

      <Chapter8LanguageDemo />
      <Chapter8CovariantDemo />
      <Chapter8DeviationDemo />
      <Chapter8BasisDemo />
    </section>
  )
}

export default Chapter8VisualizationSuite
