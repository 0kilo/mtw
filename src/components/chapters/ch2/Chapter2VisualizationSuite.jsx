import { useMemo, useState } from 'react'
import './Chapter2VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0'
  return value > 0 ? '+' + value.toFixed(2) : value.toFixed(2)
}

function Chapter2TangentDemo() {
  const [bend, setBend] = useState(45)

  const normalized = bend / 100
  const curveLift = 18 + normalized * 26
  const curveSpread = 44 + normalized * 18

  const straightCurve = 'M 82 214 C 132 184, 184 142, 248 118 C 312 94, 354 82, 392 78'
  const bentCurve = `M 82 214 C 136 ${216 - curveLift}, 182 ${162 - curveLift * 0.7}, 244 ${130 - curveLift * 0.35} C 302 ${98 - curveLift * 0.15}, 348 ${90 + normalized * 8}, 392 82`

  return (
    <article className="chapter2-lab" id="vectors-as-tangents">
      <div className="chapter2-lab-header">
        <div>
          <span className="chapter2-lab-kicker">Vectors</span>
          <h3>From arrows between events to tangent objects</h3>
        </div>
        <label className="chapter2-inline-control">
          Curve bend: {bend}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={bend}
            onChange={(e) => setBend(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter2-lab-intro">
        Chapter 2 replaces the “vector as an arrow between two points” picture with
        the tangent-vector picture. Different curves can share the same local tangent
        at one event, even when their global shapes look very different.
      </p>

      <div className="chapter2-dual-panel">
        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Arrow picture</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Vector as an arrow between two events">
            <defs>
              <marker id="chapter2ArrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="192" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="104" cy="180" r="7" fill="#0f766e" />
            <circle cx="336" cy="88" r="7" fill="#7c3aed" />
            <path d="M 104 180 L 336 88" fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter2ArrowHead)" />
            <text x="88" y="206" className="chapter2-svg-label">A</text>
            <text x="332" y="78" className="chapter2-svg-label">B</text>
            <text x="158" y="132" className="chapter2-svg-label">v = B - A</text>
          </svg>
        </div>

        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Tangent picture</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Same tangent at a point on different curves">
            <defs>
              <marker id="chapter2TangentHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#ea580c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="192" rx="20" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={straightCurve} fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeDasharray="7 6" />
            <path d={bentCurve} fill="none" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
            <circle cx="240" cy="130" r="7" fill="#111827" />
            <path
              d={`M ${210 - curveSpread * 0.25} ${130 + curveLift * 0.14} L ${286 + curveSpread * 0.15} ${130 - curveLift * 0.14}`}
              stroke="#0f766e"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#chapter2TangentHead)"
            />
            <text x="172" y="108" className="chapter2-svg-label">same tangent at P</text>
            <text x="308" y="194" className="chapter2-svg-label">global shape can change</text>
          </svg>
        </div>
      </div>

      <div className="chapter2-lab-notes">
        <div className="chapter2-note">
          <strong>What to look for:</strong> the tangent vector is local. It depends on
          the derivative at a point, not on the whole history of the curve.
        </div>
        <div className="chapter2-note">
          <strong>Why this matters:</strong> this is the definition that survives when
          spacetime is no longer flat and arrows between distant points stop being reliable.
        </div>
      </div>
    </article>
  )
}

function Chapter2MetricDemo() {
  const [tilt, setTilt] = useState(38)

  const normalized = tilt / 100
  const timeComponent = 1.25 + normalized * 0.9
  const spaceComponent = 0.25 + normalized * 1.15
  const squaredLength = -(timeComponent ** 2) + spaceComponent ** 2
  const classification =
    Math.abs(squaredLength) < 0.05
      ? 'null'
      : squaredLength < 0
        ? 'timelike'
        : 'spacelike'

  const dualSlope = -(spaceComponent / Math.max(timeComponent, 0.1))

  return (
    <article className="chapter2-lab" id="metric-and-signature">
      <div className="chapter2-lab-header">
        <div>
          <span className="chapter2-lab-kicker">Metric</span>
          <h3>The metric measures length and fixes the sign convention</h3>
        </div>
        <label className="chapter2-inline-control">
          Vector tilt: {tilt}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={tilt}
            onChange={(e) => setTilt(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter2-lab-intro">
        The Minkowski metric is not a decorative matrix. It tells you how to compute
        scalar products, squared lengths, and causal type. The same vector can be
        timelike, null, or spacelike depending on the balance between its time and
        space components.
      </p>

      <div className="chapter2-dual-panel">
        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Metric in the x0-x1 plane</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Vector classification in Minkowski space">
            <defs>
              <marker id="chapter2MetricArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="38" y="28" width="404" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="86" y1="178" x2="394" y2="178" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="86" y1="178" x2="86" y2="56" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 86 178 L 330 96" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter2MetricArrow)" />
            <path d="M 86 178 L 392 178" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 86 178 L 160 114" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
            <path d={`M 104 ${180 - timeComponent * 42} C 140 ${180 - timeComponent * 52}, 176 ${174 - timeComponent * 44}, 214 ${170 - timeComponent * 36}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <text x="70" y="48" className="chapter2-svg-label">x0</text>
            <text x="404" y="200" className="chapter2-svg-label">x1</text>
            <text x="250" y="112" className="chapter2-svg-label">u</text>
            <text x="122" y="138" className="chapter2-svg-label">g(u,u) = {formatSigned(squaredLength)}</text>
          </svg>
        </div>

        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Lowering an index</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Metric duality between a vector and a one-form">
            <rect x="38" y="28" width="404" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path
              d={`M 102 186 C 154 ${186 - timeComponent * 46}, 224 ${152 - timeComponent * 26}, 276 ${124 - timeComponent * 8}`}
              fill="none"
              stroke="#0f766e"
              strokeWidth="4"
            />
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <line
                key={index}
                x1={118 + index * 45}
                y1={88 + index * dualSlope * 7}
                x2={118 + index * 45 - 28}
                y2={118 + index * dualSlope * 7}
                stroke="#c2410c"
                strokeWidth="2.25"
              />
            ))}
            <path d="M 322 98 L 322 194" stroke="#c2410c" strokeWidth="3" strokeDasharray="6 6" />
            <text x="64" y="214" className="chapter2-svg-label">vector u</text>
            <text x="298" y="84" className="chapter2-svg-label">u♭ as a 1-form</text>
            <text x="190" y="68" className="chapter2-svg-label">same geometry, different object</text>
          </svg>
        </div>
      </div>

      <div className="chapter2-lab-notes">
        <div className="chapter2-note">
          <strong>Current type:</strong> {classification}. The sign of the squared length
          is what distinguishes timelike, null, and spacelike vectors.
        </div>
        <div className="chapter2-note">
          <strong>Metric role:</strong> the same metric that measures length also lowers
          and raises indices, turning vectors into 1-forms and back again.
        </div>
      </div>
    </article>
  )
}

function Chapter2GradientDemo() {
  const [direction, setDirection] = useState(55)

  const normalized = direction / 100
  const angle = normalized * Math.PI * 1.2 - Math.PI * 0.6
  const dx = Math.cos(angle)
  const dy = Math.sin(angle)
  const fieldStrength = 0.7 + normalized * 1.4
  const directionalDerivative = fieldStrength * (0.8 * dx + 0.45 * dy)

  const contourOffset = 40 + normalized * 26

  const contourPath = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => {
        const x = 86 + index * 50
        return `M ${x} 206 C ${x + 20} 178, ${x + 34} 118, ${x + 48} 56`
      }),
    []
  )

  return (
    <article className="chapter2-lab" id="gradient-as-1-form">
      <div className="chapter2-lab-header">
        <div>
          <span className="chapter2-lab-kicker">1-forms</span>
          <h3>Gradients are directional probes, not just arrows on a page</h3>
        </div>
        <label className="chapter2-inline-control">
          Probe direction: {direction}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={direction}
            onChange={(e) => setDirection(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter2-lab-intro">
        The differential <code>df</code> is a linear map that asks how fast a function
        changes in a chosen direction. The contour picture shows the 1-form as a stack
        of surfaces: the more it pierces, the larger the directional derivative.
      </p>

      <div className="chapter2-dual-panel">
        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Scalar field and contours</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Contours pierced by a directional vector">
            <defs>
              <marker id="chapter2ProbeHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="38" y="28" width="404" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {contourPath.map((d, index) => (
              <path
                key={index}
                d={d}
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5 7"
              />
            ))}
            <circle cx="236" cy="134" r="26" fill="rgba(15, 118, 110, 0.08)" stroke="#0f766e" strokeWidth="2.5" />
            <path d={`M 170 176 L ${170 + dx * 98} ${176 - dy * 98}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter2ProbeHead)" />
            <text x="88" y="54" className="chapter2-svg-label">contours of f</text>
            <text x="182" y="206" className="chapter2-svg-label">v</text>
          </svg>
        </div>

        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">The 1-form value</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="The gradient as a one-form">
            <rect x="38" y="28" width="404" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            {Array.from({ length: 7 }, (_, index) => {
              const x = 90 + index * 46
              const y = 66 + index * contourOffset * 0.14
              return (
                <line
                  key={index}
                  x1={x}
                  y1={y}
                  x2={x + 170}
                  y2={y - 82}
                  stroke="#c2410c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )
            })}
            <path d={`M 160 196 C 214 ${182 - direction * 0.18}, 256 ${138 - direction * 0.1}, 322 ${112 - direction * 0.04}`} fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <circle cx="160" cy="196" r="7" fill="#0f766e" />
            <circle cx="322" cy="112" r="7" fill="#0f766e" />
            <text x="86" y="54" className="chapter2-svg-label">df</text>
            <text x="176" y="88" className="chapter2-svg-label">∂v f = {formatSigned(directionalDerivative)}</text>
            <text x="286" y="198" className="chapter2-svg-label">change along v</text>
          </svg>
        </div>
      </div>

      <div className="chapter2-lab-notes">
        <div className="chapter2-note">
          <strong>Reading the diagram:</strong> the vector selects a direction, and the
          1-form returns the rate of change in that direction.
        </div>
        <div className="chapter2-note">
          <strong>Chapter payoff:</strong> this is why the gradient is treated as a
          covector in the chapter instead of being forced into the wrong box as a vector.
        </div>
      </div>
    </article>
  )
}

function Chapter2BoostDemo() {
  const [rapidity, setRapidity] = useState(48)

  const normalized = rapidity / 100
  const beta = Math.tanh(normalized * 1.05)
  const gamma = 1 / Math.sqrt(1 - beta ** 2)
  const photonAngle = 34 + normalized * 26
  const emitterX = 160
  const emitterY = 148
  const absorberX = 320
  const absorberY = 122
  const radius = 84
  const photonMidX = (emitterX + absorberX) / 2
  const photonMidY = (emitterY + absorberY) / 2 - 10

  return (
    <article className="chapter2-lab" id="lorentz-and-photon">
      <div className="chapter2-lab-header">
        <div>
          <span className="chapter2-lab-kicker">Lorentz geometry</span>
          <h3>Boosts preserve the interval, and the centrifuge example stays symmetric</h3>
        </div>
        <label className="chapter2-inline-control">
          Rapidity: {rapidity}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={rapidity}
            onChange={(e) => setRapidity(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter2-lab-intro">
        The chapter returns to explicit Lorentz transformations only after building the
        geometric picture. The same logic also powers the centrifuge-photon example:
        equal speed and equal viewing angle give the same measured energy.
      </p>

      <div className="chapter2-dual-panel">
        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Boost diagram</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Lorentz boost in a spacetime diagram">
            <defs>
              <marker id="chapter2BoostHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="38" y="28" width="404" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="90" y1="212" x2="390" y2="212" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="90" y1="212" x2="90" y2="58" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 156 212 L 156 74" stroke="#0f766e" strokeWidth="4" strokeDasharray="8 6" />
            <path d={`M 90 212 L ${90 + 130 + normalized * 36} ${212 - 94 - normalized * 10}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter2BoostHead)" />
            <path d={`M 90 212 L ${90 + 130 + normalized * 36} ${212 - 154 - normalized * 6}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter2BoostHead)" />
            <path d={`M ${90 + 100} ${212 - 100} L ${90 + 190} ${212 - 40 - normalized * 12}`} stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="6 6" />
            <text x="74" y="52" className="chapter2-svg-label">x0</text>
            <text x="392" y="230" className="chapter2-svg-label">x1</text>
            <text x="210" y="120" className="chapter2-svg-label">boosted axes</text>
            <text x="104" y="86" className="chapter2-svg-label">light cone</text>
          </svg>
        </div>

        <div className="chapter2-svg-card">
          <div className="chapter2-panel-title">Centrifuge photon</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Photon exchanged between equal-radius points on a rotating rim">
            <defs>
              <marker id="chapter2PhotonHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#ea580c" />
              </marker>
            </defs>
            <rect x="38" y="28" width="404" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r={radius} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 7" />
            <circle cx="240" cy="138" r="14" fill="#7c2d12" />
            <circle cx={emitterX} cy={emitterY} r="7" fill="#0f766e" />
            <circle cx={absorberX} cy={absorberY} r="7" fill="#7c3aed" />
            <path d={`M ${emitterX} ${emitterY} L ${photonMidX} ${photonMidY} L ${absorberX} ${absorberY}`} fill="none" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter2PhotonHead)" />
            <path d={`M ${emitterX - 14} ${emitterY - 18} C ${emitterX - 28} ${emitterY - 52}, ${emitterX - 12} ${emitterY - 72}, ${emitterX + 8} ${emitterY - 88}`} fill="none" stroke="#0f766e" strokeWidth="3" />
            <path d={`M ${absorberX + 12} ${absorberY - 16} C ${absorberX + 26} ${absorberY - 52}, ${absorberX + 12} ${absorberY - 70}, ${absorberX - 8} ${absorberY - 86}`} fill="none" stroke="#7c3aed" strokeWidth="3" />
            <text x="62" y="54" className="chapter2-svg-label">same radius</text>
            <text x="292" y="92" className="chapter2-svg-label">same speed</text>
            <text x="164" y="206" className="chapter2-svg-label">z = 0 by symmetry</text>
            <text x="178" y="70" className="chapter2-svg-label">photon angle {photonAngle.toFixed(0)}°</text>
          </svg>
        </div>
      </div>

      <div className="chapter2-lab-notes">
        <div className="chapter2-note">
          <strong>Invariant check:</strong> γ = {gamma.toFixed(2)} for the current boost
          setting, so the diagram is visibly changing frame while the geometry itself is not.
        </div>
        <div className="chapter2-note">
          <strong>Physical lesson:</strong> the centrifuge example is not a coordinate trick.
          It is a symmetry argument using the same geometric object measured by both observers.
        </div>
      </div>
    </article>
  )
}

function Chapter2VisualizationSuite() {
  return (
    <section className="chapter2-visual-suite">
      <div className="chapter2-visual-suite-header">
        <span className="chapter2-visual-suite-kicker">Chapter 2 Visualizations</span>
        <h2>Coordinate-free special relativity, made visible</h2>
        <p>
          Chapter 2 builds the language that the rest of the book uses: vectors as tangent
          objects, the metric as the length machine, 1-forms as linear probes, and
          Lorentz transformations as structure-preserving maps.
        </p>
      </div>

      <nav className="chapter2-visual-suite-nav" aria-label="Chapter 2 visualization topics">
        <a href="#vectors-as-tangents">Vectors</a>
        <a href="#metric-and-signature">Metric</a>
        <a href="#gradient-as-1-form">1-forms</a>
        <a href="#lorentz-and-photon">Lorentz</a>
      </nav>

      <Chapter2TangentDemo />
      <Chapter2MetricDemo />
      <Chapter2GradientDemo />
      <Chapter2BoostDemo />
    </section>
  )
}

export default Chapter2VisualizationSuite
