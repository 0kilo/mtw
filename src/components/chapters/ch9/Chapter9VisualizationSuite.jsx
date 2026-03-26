import { useMemo, useState } from 'react'
import './Chapter9VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter9TangentDemo() {
  const [curveType, setCurveType] = useState('line')
  const [lambda, setLambda] = useState(46)

  const normalized = lambda / 100
  const current = {
    line: {
      kicker: 'Directional derivative',
      title: 'A tangent vector is the operator that differentiates along a curve',
      body: 'The chapter replaces “arrow between points” with an operator at one event.',
      accent: '#0f766e',
    },
    bend: {
      kicker: 'Curved path',
      title: 'The same operator still works when the curve bends through the manifold',
      body: 'What matters is the local derivative at the event, not a global straight line.',
      accent: '#c2410c',
    },
    spiral: {
      kicker: 'Helical path',
      title: 'Different curves through the same event can share the same tangent space',
      body: 'The tangent vector is local data attached to the event and independent of embedding.',
      accent: '#7c3aed',
    },
  }[curveType]

  const path = useMemo(() => {
    if (curveType === 'line') {
      return `M 96 180 L 390 ${160 - 26 * normalized}`
    }
    if (curveType === 'bend') {
      return `M 92 182 C 154 ${160 - 18 * normalized}, 228 ${90 - 16 * normalized}, 314 ${118 - 10 * normalized} S 372 ${154 - 8 * normalized}, 390 ${94 - 12 * normalized}`
    }
    return `M 108 ${198 - 10 * normalized} C 150 ${150 - 20 * normalized}, 194 ${86 - 18 * normalized}, 242 ${110 - 8 * normalized} S 334 ${196 - 4 * normalized}, 386 ${92 - 8 * normalized}`
  }, [curveType, normalized])

  const tangentAngle = curveType === 'line' ? -8 + normalized * 8 : curveType === 'bend' ? -26 + normalized * 44 : -18 + normalized * 36

  return (
    <article className="chapter9-lab" id="tangent-vectors">
      <div className="chapter9-lab-header">
        <div>
          <span className="chapter9-lab-kicker">Tangent vectors</span>
          <h3>{current.title}</h3>
        </div>
        <label className="chapter9-inline-control">
          Curve family
          <select value={curveType} onChange={(e) => setCurveType(e.target.value)}>
            <option value="line">Straight line</option>
            <option value="bend">Bending curve</option>
            <option value="spiral">Helical curve</option>
          </select>
        </label>
        <label className="chapter9-inline-control">
          Parameter λ: {lambda}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={lambda}
            onChange={(e) => setLambda(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter9-lab-intro">
        Chapter 9 defines vectors locally as tangent vectors and then identifies them with
        directional derivative operators acting on scalar functions.
      </p>

      <div className="chapter9-dual-panel">
        <div className="chapter9-svg-card">
          <div className="chapter9-panel-title">{current.kicker}</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Curve with tangent vector and derivative operator">
            <defs>
              <marker id="chapter9TangentHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill={current.accent} />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={path} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="240" cy={138 - 18 * Math.sin(normalized * Math.PI)} r="9" fill="#7c3aed" />
            <path
              d={`M 240 ${138 - 18 * Math.sin(normalized * Math.PI)} L ${240 + 64 * Math.cos((tangentAngle * Math.PI) / 180)} ${138 - 18 * Math.sin(normalized * Math.PI) + 64 * Math.sin((tangentAngle * Math.PI) / 180)}`}
              stroke="#7c3aed"
              strokeWidth="5"
              strokeLinecap="round"
              markerEnd="url(#chapter9TangentHead)"
            />
            <text x="88" y="58" className="chapter9-svg-label">curve through one event</text>
            <text x="276" y="214" className="chapter9-svg-label">tangent operator at the point</text>
          </svg>
        </div>

        <div className="chapter9-matrix-card">
          <div className="chapter9-panel-title">Operator view</div>
          <div className="chapter9-matrix-grid">
            <div className="chapter9-matrix-cell accent-teal">
              <strong>u = d/dλ</strong>
              <span>directional derivative along the curve</span>
            </div>
            <div className="chapter9-matrix-cell accent-orange">
              <strong>event</strong>
              <span>the point where the operator lives</span>
            </div>
            <div className="chapter9-matrix-cell accent-indigo">
              <strong>curve type</strong>
              <span>{curveType}</span>
            </div>
            <div className="chapter9-matrix-cell accent-slate">
              <strong>local angle</strong>
              <span>{formatSigned(tangentAngle)}°</span>
            </div>
          </div>
          <div className="chapter9-matrix-caption">
            <div>{current.body}</div>
            <div>The tangent space is the vector space of these local operators.</div>
          </div>
        </div>
      </div>

      <div className="chapter9-lab-notes">
        <div className="chapter9-note">
          <strong>What to look for:</strong> the operator is defined at one event, even
          though it comes from motion along a curve.
        </div>
        <div className="chapter9-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s replacement for the
          flat-spacetime displacement picture.
        </div>
      </div>
    </article>
  )
}

function Chapter9DualBasisDemo() {
  const [radius, setRadius] = useState(56)
  const normalized = radius / 100
  const radialScale = 1.0 + normalized * 1.9
  const thetaScale = 1.0 + normalized * 1.6
  const phiScale = 0.8 + normalized * 2.0

  return (
    <article className="chapter9-lab" id="dual-basis">
      <div className="chapter9-lab-header">
        <div>
          <span className="chapter9-lab-kicker">Basis and dual basis</span>
          <h3>Coordinate vectors and coordinate 1-forms come in dual pairs</h3>
        </div>
        <label className="chapter9-inline-control">
          Sphere scale: {radius}
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

      <p className="chapter9-lab-intro">
        The chapter separates vectors from 1-forms and shows that a coordinate basis has a
        matching dual basis of covectors.
      </p>

      <div className="chapter9-dual-panel">
        <div className="chapter9-svg-card">
          <div className="chapter9-panel-title">Vectors and covectors</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Dual basis vectors and hyperplanes">
            <defs>
              <marker id="chapter9DualHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="242" cy="140" r="22" fill="rgba(124, 58, 237, 0.14)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 242 140 L ${242 + 80 * radialScale / 3} 140`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9DualHead)" />
            <path d={`M 242 140 L 242 ${140 - 72 * thetaScale / 3}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9DualHead)" />
            <path d={`M 242 140 L ${242 - 70 * phiScale / 3} ${140 + 40 * phiScale / 3}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9DualHead)" />
            <path d={`M 80 ${92 - 6 * normalized} L 400 ${92 - 6 * normalized}`} stroke="#0f766e" strokeWidth="2" opacity="0.5" />
            <path d={`M 80 ${180 + 4 * normalized} L 400 ${180 + 4 * normalized}`} stroke="#c2410c" strokeWidth="2" opacity="0.5" />
            <text x="76" y="58" className="chapter9-svg-label">basis vectors</text>
            <text x="286" y="214" className="chapter9-svg-label">dual covector sheets</text>
          </svg>
        </div>

        <div className="chapter9-matrix-card">
          <div className="chapter9-panel-title">Duality rules</div>
          <div className="chapter9-matrix-grid">
            <div className="chapter9-matrix-cell accent-teal">
              <strong>e_r</strong>
              <span>radial basis vector</span>
            </div>
            <div className="chapter9-matrix-cell accent-orange">
              <strong>ω^r</strong>
              <span>dual 1-form</span>
            </div>
            <div className="chapter9-matrix-cell accent-indigo">
              <strong>e_θ, e_φ</strong>
              <span>angular basis vectors</span>
            </div>
            <div className="chapter9-matrix-cell accent-slate">
              <strong>scales</strong>
              <span>{formatSigned(radialScale)} / {formatSigned(thetaScale)} / {formatSigned(phiScale)}</span>
            </div>
          </div>
          <div className="chapter9-matrix-caption">
            <div>Coordinate 1-forms pick out components of tangent vectors.</div>
            <div>Exercise 9.6 is the same idea in spherical coordinates.</div>
          </div>
        </div>
      </div>

      <div className="chapter9-lab-notes">
        <div className="chapter9-note">
          <strong>What to look for:</strong> the vectors and covectors are different
          objects, even though they are dual to one another.
        </div>
        <div className="chapter9-note">
          <strong>Why it matters:</strong> chapter 9 removes the metric shortcut, so dual
          spaces have to stay distinct.
        </div>
      </div>
    </article>
  )
}

function Chapter9TransformDemo() {
  const [shear, setShear] = useState(38)
  const normalized = shear / 100
  const jacobian = 1 + normalized * 0.8
  const offDiagonal = normalized * 0.7
  const transformedX = 1.0 + normalized * 0.55
  const transformedY = 0.9 - normalized * 0.28

  return (
    <article className="chapter9-lab" id="basis-transform">
      <div className="chapter9-lab-header">
        <div>
          <span className="chapter9-lab-kicker">Change of basis</span>
          <h3>Basis vectors transform with a Jacobian while components transform inversely</h3>
        </div>
        <label className="chapter9-inline-control">
          Basis shear: {shear}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={shear}
            onChange={(e) => setShear(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter9-lab-intro">
        The chapter&apos;s transformation law is ordinary vector-space behavior: the basis
        changes one way, the components the opposite way.
      </p>

      <div className="chapter9-dual-panel">
        <div className="chapter9-svg-card">
          <div className="chapter9-panel-title">Jacobian and components</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Basis change with transformed component vector">
            <defs>
              <marker id="chapter9TransformHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 132 180 L 332 180" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 132 180 L 132 84" stroke="#94a3b8" strokeWidth="2" />
            <path d={`M 132 180 L ${132 + 102 * jacobian / 1.8} ${180 - 20 * offDiagonal}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9TransformHead)" />
            <path d={`M 132 180 L ${132 + 24 * offDiagonal} ${180 - 92 * jacobian / 1.8}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9TransformHead)" />
            <path d={`M 246 180 L ${246 + 106 * transformedX / 1.7} ${180 - 28 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9TransformHead)" />
            <text x="86" y="58" className="chapter9-svg-label">basis change</text>
            <text x="238" y="214" className="chapter9-svg-label">components adjust inversely</text>
          </svg>
        </div>

        <div className="chapter9-matrix-card">
          <div className="chapter9-panel-title">Transformation law</div>
          <div className="chapter9-matrix-grid">
            <div className="chapter9-matrix-cell accent-teal">
              <strong>Jacobian</strong>
              <span>{formatSigned(jacobian)}</span>
            </div>
            <div className="chapter9-matrix-cell accent-orange">
              <strong>off-diagonal</strong>
              <span>{formatSigned(offDiagonal)}</span>
            </div>
            <div className="chapter9-matrix-cell accent-indigo">
              <strong>u^x'</strong>
              <span>{formatSigned(transformedX)}</span>
            </div>
            <div className="chapter9-matrix-cell accent-slate">
              <strong>u^y'</strong>
              <span>{formatSigned(transformedY)}</span>
            </div>
          </div>
          <div className="chapter9-matrix-caption">
            <div>The vector stays the same; only its component description changes.</div>
            <div>That is the component rule behind equation (9.9).</div>
          </div>
        </div>
      </div>

      <div className="chapter9-lab-notes">
        <div className="chapter9-note">
          <strong>What to look for:</strong> the transformed components are not the same as
          the basis transformation.
        </div>
        <div className="chapter9-note">
          <strong>Why it matters:</strong> this is the basic covariance rule used throughout
          tensor calculus.
        </div>
      </div>
    </article>
  )
}

function Chapter9CommutatorDemo() {
  const [twist, setTwist] = useState(44)
  const normalized = twist / 100
  const commutator = normalized * 1.4

  const streamlines = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const y = 86 + index * 34
        return `M 92 ${y} C 158 ${y - 10 - 18 * normalized}, 224 ${y + 12 - 10 * normalized}, 390 ${y + 4 - 16 * normalized}`
      }),
    [normalized]
  )

  return (
    <article className="chapter9-lab" id="commutators">
      <div className="chapter9-lab-header">
        <div>
          <span className="chapter9-lab-kicker">Commutators</span>
          <h3>Coordinate bases commute, but twisted frames reveal nonzero commutators</h3>
        </div>
        <label className="chapter9-inline-control">
          Frame twist: {twist}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={twist}
            onChange={(e) => setTwist(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter9-lab-intro">
        The chapter uses commutators to test whether a basis is coordinate-induced. If the
        flows do not mesh, the frame is not a coordinate basis.
      </p>

      <div className="chapter9-dual-panel">
        <div className="chapter9-svg-card">
          <div className="chapter9-panel-title">Flow-box intuition</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Twisted vector fields and their commutator">
            <defs>
              <marker id="chapter9CommutatorHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            {streamlines.map((d, index) => (
              <path
                key={index}
                d={d}
                fill="none"
                stroke={index % 2 === 0 ? '#0f766e' : '#c2410c'}
                strokeWidth="3"
                opacity={0.88 - index * 0.1}
              />
            ))}
            <path d={`M 124 190 L ${186 + 20 * normalized} ${160 - 12 * normalized}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9CommutatorHead)" />
            <path d={`M 124 190 L ${146 + 12 * normalized} ${112 - 10 * normalized}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter9CommutatorHead)" />
            <text x="80" y="56" className="chapter9-svg-label">coordinate flows mesh when twist is zero</text>
            <text x="142" y="214" className="chapter9-svg-label">nonzero twist gives nonzero [u,v]</text>
          </svg>
        </div>

        <div className="chapter9-matrix-card">
          <div className="chapter9-panel-title">Commutator test</div>
          <div className="chapter9-matrix-grid">
            <div className="chapter9-matrix-cell accent-teal">
              <strong>[u, v]</strong>
              <span>commutator of the frame fields</span>
            </div>
            <div className="chapter9-matrix-cell accent-orange">
              <strong>twist</strong>
              <span>{formatSigned(commutator)}</span>
            </div>
            <div className="chapter9-matrix-cell accent-indigo">
              <strong>coordinate basis</strong>
              <span>commutator vanishes</span>
            </div>
            <div className="chapter9-matrix-cell accent-slate">
              <strong>non-coordinate basis</strong>
              <span>commutator can be nonzero</span>
            </div>
          </div>
          <div className="chapter9-matrix-caption">
            <div>Vanishing commutators are the signature of coordinate-induced vector fields.</div>
            <div>The chapter later uses the same logic for Lie derivatives and flows.</div>
          </div>
        </div>
      </div>

      <div className="chapter9-lab-notes">
        <div className="chapter9-note">
          <strong>What to look for:</strong> as the twist increases, the frame stops behaving
          like a coordinate basis.
        </div>
        <div className="chapter9-note">
          <strong>Why it matters:</strong> this is the local test behind the flow-box and
          Frobenius picture.
        </div>
      </div>
    </article>
  )
}

function Chapter9VisualizationSuite() {
  return (
    <section className="chapter9-visual-suite">
      <div className="chapter9-visual-suite-header">
        <span className="chapter9-visual-suite-kicker">Chapter 9 Visualizations</span>
        <h2>How differential topology builds the tangent-space language</h2>
        <p>
          Chapter 9 strips geometry down to the local differentiable structure: tangent
          vectors, dual bases, component transformations, and commutators of vector fields.
        </p>
      </div>

      <nav className="chapter9-visual-suite-nav" aria-label="Chapter 9 visualization topics">
        <a href="#tangent-vectors">Tangent vectors</a>
        <a href="#dual-basis">Dual basis</a>
        <a href="#basis-transform">Basis transform</a>
        <a href="#commutators">Commutators</a>
      </nav>

      <Chapter9TangentDemo />
      <Chapter9DualBasisDemo />
      <Chapter9TransformDemo />
      <Chapter9CommutatorDemo />
    </section>
  )
}

export default Chapter9VisualizationSuite
