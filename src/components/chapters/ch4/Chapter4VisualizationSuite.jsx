import { useMemo, useState } from 'react'
import './Chapter4VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter4FormDemo() {
  const [formDegree, setFormDegree] = useState('2')

  const copyMap = {
    '1': {
      title: '1-form',
      label: 'Oriented surfaces',
      body: 'A 1-form acts on a vector by counting how many oriented surfaces it pierces.',
      accent: '#0f766e',
      shapes: ['surface', 'surface', 'surface', 'surface'],
    },
    '2': {
      title: '2-form',
      label: 'Oriented tubes',
      body: 'A 2-form acts on an oriented surface by counting the tubes that pass through it.',
      accent: '#c2410c',
      shapes: ['tube', 'tube', 'tube', 'tube', 'tube'],
    },
    '3': {
      title: '3-form',
      label: 'Oriented volumes',
      body: 'A 3-form acts on a volume by counting the cells enclosed inside it.',
      accent: '#7c3aed',
      shapes: ['cell', 'cell', 'cell', 'cell'],
    },
  }

  const current = copyMap[formDegree]

  return (
    <article className="chapter4-lab" id="forms-as-geometry">
      <div className="chapter4-lab-header">
        <div>
          <span className="chapter4-lab-kicker">Exterior calculus</span>
          <h3>Forms are counted geometry, not just algebraic symbols</h3>
        </div>
        <label className="chapter4-inline-control">
          Form degree
          <select value={formDegree} onChange={(e) => setFormDegree(e.target.value)}>
            <option value="1">1-form</option>
            <option value="2">2-form</option>
            <option value="3">3-form</option>
          </select>
        </label>
      </div>

      <p className="chapter4-lab-intro">
        Chapter 4 starts by turning forms into geometry. The degree tells you what kind of
        object the form measures: a vector, a surface, or a volume.
      </p>

      <div className="chapter4-dual-panel">
        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">{current.title} picture</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Geometric picture of a differential form">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {formDegree === '1' && (
              <>
                {[0, 1, 2, 3].map((index) => (
                  <path
                    key={index}
                    d={`M ${96 + index * 70} 52 C ${120 + index * 70} 88, ${120 + index * 70} 174, ${96 + index * 70} 210`}
                    stroke="#0f766e"
                    strokeWidth="4"
                    fill="none"
                    opacity={0.8 - index * 0.1}
                  />
                ))}
                <path d="M 150 200 L 326 84" stroke="#334155" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter4VectorHead)" />
                <text x="136" y="224" className="chapter4-svg-label">v pierces stacked surfaces</text>
              </>
            )}
            {formDegree === '2' && (
              <>
                {[0, 1, 2, 3, 4].map((index) => (
                  <ellipse
                    key={index}
                    cx={110 + index * 66}
                    cy={124 + (index % 2) * 18}
                    rx="24"
                    ry="56"
                    fill="none"
                    stroke="#c2410c"
                    strokeWidth="4"
                    opacity={0.85 - index * 0.08}
                  />
                ))}
                <rect x="184" y="96" width="112" height="72" rx="14" fill="rgba(194, 65, 12, 0.08)" stroke="#c2410c" strokeWidth="2.5" />
                <text x="150" y="210" className="chapter4-svg-label">surface cuts a tube family</text>
              </>
            )}
            {formDegree === '3' && (
              <>
                {[0, 1, 2].map((row) => (
                  <g key={row} opacity={0.9 - row * 0.12}>
                    {[0, 1, 2].map((col) => (
                      <rect
                        key={col}
                        x={112 + col * 70}
                        y={70 + row * 52}
                        width="46"
                        height="36"
                        rx="8"
                        fill="rgba(124, 58, 237, 0.1)"
                        stroke="#7c3aed"
                        strokeWidth="2"
                      />
                    ))}
                  </g>
                ))}
                <text x="126" y="214" className="chapter4-svg-label">volume counts cells</text>
              </>
            )}
            <defs>
              <marker id="chapter4VectorHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#334155" />
              </marker>
            </defs>
            <text x="60" y="54" className="chapter4-svg-label">{current.label}</text>
          </svg>
        </div>

        <div className="chapter4-matrix-card">
          <div className="chapter4-panel-title">What the form counts</div>
          <div className="chapter4-form-stack">
            {current.shapes.map((shape, index) => (
              <div key={`${shape}-${index}`} className="chapter4-form-row">
                <span className={`chapter4-form-pill ${shape}`}>{shape}</span>
                <span className="chapter4-form-value" style={{ color: current.accent }}>
                  {index === 0 ? 'counts what crosses the probe' : 'same rule, repeated'}
                </span>
              </div>
            ))}
          </div>
          <div className="chapter4-matrix-caption">
            <div>{current.body}</div>
            <div>Exterior calculus turns all three into the same kind of bookkeeping.</div>
          </div>
        </div>
      </div>

      <div className="chapter4-lab-notes">
        <div className="chapter4-note">
          <strong>What to look for:</strong> the degree tells you what geometric object is
          being counted, not just how many indices appear in a formula.
        </div>
        <div className="chapter4-note">
          <strong>Why it matters:</strong> the chapter’s later Maxwell equations only make
          sense once forms are understood as these oriented counting devices.
        </div>
      </div>
    </article>
  )
}

function Chapter4FaradayDemo() {
  const [mix, setMix] = useState(48)

  const normalized = mix / 100
  const eWeight = 0.45 + normalized * 0.9
  const bWeight = 0.2 + normalized * 0.75

  return (
    <article className="chapter4-lab" id="faraday-2-form">
      <div className="chapter4-lab-header">
        <div>
          <span className="chapter4-lab-kicker">Faraday</span>
          <h3>The electromagnetic field is one antisymmetric 2-form</h3>
        </div>
        <label className="chapter4-inline-control">
          Mixing strength
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={mix}
            onChange={(e) => setMix(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter4-lab-intro">
        The chapter writes the field as <code>F = E dt∧dx + B dy∧dz</code>-type pieces.
        Electric parts live in time-space slots, while magnetic parts live in space-space
        slots. They are not separate fields.
      </p>

      <div className="chapter4-dual-panel">
        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">Time-space part</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Electric part of the electromagnetic 2-form">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <line x1="94" y1="200" x2="388" y2="200" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="94" y1="200" x2="94" y2="60" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 154 200 L 154 ${108 - eWeight * 50}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <path d={`M 240 200 L 240 ${92 - eWeight * 68}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <path d={`M 326 200 L 326 ${114 - eWeight * 46}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <text x="118" y="222" className="chapter4-svg-label">dt ∧ dx</text>
            <text x="198" y="74" className="chapter4-svg-label">electric slots</text>
          </svg>
        </div>

        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">Space-space part</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Magnetic part of the electromagnetic 2-form">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {[0, 1, 2, 3].map((index) => (
              <ellipse
                key={index}
                cx={140 + index * 80}
                cy="136"
                rx={26 + normalized * 12}
                ry={56 + index * 2}
                fill="none"
                stroke="#c2410c"
                strokeWidth="4"
                opacity={0.9 - index * 0.12}
              />
            ))}
            <text x="106" y="208" className="chapter4-svg-label">dy ∧ dz</text>
            <text x="202" y="74" className="chapter4-svg-label">magnetic tubes</text>
          </svg>
        </div>
      </div>

      <div className="chapter4-lab-notes">
        <div className="chapter4-note">
          <strong>Current blend:</strong> E-weight {formatSigned(eWeight)}, B-weight {formatSigned(bWeight)}.
        </div>
        <div className="chapter4-note">
          <strong>Chapter point:</strong> the different pieces are just coordinates of one
          2-form, not different physical objects.
        </div>
      </div>
    </article>
  )
}

function Chapter4TubeDemo() {
  const [sourceStrength, setSourceStrength] = useState(52)

  const normalized = sourceStrength / 100
  const tubeCount = 4 + Math.round(normalized * 4)
  const endRadius = 56 + normalized * 28

  return (
    <article className="chapter4-lab" id="tubes-and-sources">
      <div className="chapter4-lab-header">
        <div>
          <span className="chapter4-lab-kicker">Stokes</span>
          <h3>Faraday tubes never end; Maxwell tubes begin or end where charge exists</h3>
        </div>
        <label className="chapter4-inline-control">
          Source strength
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={sourceStrength}
            onChange={(e) => setSourceStrength(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter4-lab-intro">
        This is the chapter&apos;s cleanest interpretation of Maxwell&apos;s equations. The
        homogeneous equation says Faraday tubes close on themselves. The sourced equation
        says Maxwell tubes terminate on charge-current.
      </p>

      <div className="chapter4-dual-panel">
        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">Faraday: closed tubes</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Closed Faraday tubes">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="138" r="18" fill="#111827" />
            {Array.from({ length: tubeCount }, (_, index) => (
              <ellipse
                key={index}
                cx="240"
                cy="138"
                rx={48 + index * 16}
                ry={30 + index * 10}
                fill="none"
                stroke="#0f766e"
                strokeWidth="3"
                strokeDasharray={index % 2 === 0 ? '9 6' : '5 7'}
                opacity={0.9 - index * 0.09}
              />
            ))}
            <text x="98" y="56" className="chapter4-svg-label">closed surfaces never find an end</text>
            <text x="192" y="214" className="chapter4-svg-label">dF = 0</text>
          </svg>
        </div>

        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">Maxwell: sourced tubes</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Maxwell tubes ending on charge current">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r="18" fill="#7c2d12" />
            {Array.from({ length: 6 }, (_, index) => {
              const angle = (index / 6) * Math.PI * 2
              const x1 = 240 + Math.cos(angle) * 26
              const y1 = 138 + Math.sin(angle) * 26
              const x2 = 240 + Math.cos(angle) * (endRadius + 42)
              const y2 = 138 + Math.sin(angle) * (endRadius + 42)
              return <path key={index} d={`M ${x1} ${y1} L ${x2} ${y2}`} stroke="#c2410c" strokeWidth="4" fill="none" />
            })}
            <circle cx="160" cy="90" r="7" fill="#c2410c" />
            <circle cx="320" cy="186" r="7" fill="#c2410c" />
            <text x="108" y="56" className="chapter4-svg-label">source and sink on charge-current</text>
            <text x="182" y="214" className="chapter4-svg-label">d*F = 4pi *J</text>
          </svg>
        </div>
      </div>

      <div className="chapter4-lab-notes">
        <div className="chapter4-note">
          <strong>Reading the image:</strong> if no charge-current is present, the tubes
          close. If charge-current is present, they can start or stop there.
        </div>
        <div className="chapter4-note">
          <strong>Why it matters:</strong> this is the geometric content of Maxwell&apos;s
          equations in the chapter&apos;s form language.
        </div>
      </div>
    </article>
  )
}

function Chapter4RadiationDemo() {
  const [distance, setDistance] = useState(52)

  const normalized = distance / 100
  const nearField = 1 / Math.max(0.35, 1 - normalized * 0.25)
  const radiationField = 1 / Math.max(0.3, 0.42 + normalized * 0.7)
  const shellRadius = 70 + normalized * 70
  const shellThickness = 18 + (1 - normalized) * 16

  const shellPaths = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const r = shellRadius + index * 12
        return `M 240 ${138 - r} A ${r} ${r} 0 1 1 239.9 ${138 - r}`
      }),
    [shellRadius]
  )

  return (
    <article className="chapter4-lab" id="radiation-shell">
      <div className="chapter4-lab-header">
        <div>
          <span className="chapter4-lab-kicker">Radiation</span>
          <h3>Near field and radiation field behave differently with distance</h3>
        </div>
        <label className="chapter4-inline-control">
          Observation distance
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={distance}
            onChange={(e) => setDistance(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter4-lab-intro">
        Chapter 4 explains radiation as a stretched transition shell. The near field
        falls off faster, while the radiative part survives at large radius with the
        characteristic shell behavior.
      </p>

      <div className="chapter4-dual-panel">
        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">Near field</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Near-field pattern around an oscillating source">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="138" r="16" fill="#7c2d12" />
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <path
                key={index}
                d={`M ${156 + index * 28} 138 C ${184 + index * 28} ${118 - normalized * 10}, ${212 + index * 28} ${118 + normalized * 10}, ${240 + index * 28} 138`}
                stroke="#0f766e"
                strokeWidth={3 + nearField}
                fill="none"
                opacity={0.84 - index * 0.08}
              />
            ))}
            <text x="90" y="56" className="chapter4-svg-label">quasi-static shell: stronger falloff</text>
            <text x="186" y="214" className="chapter4-svg-label">1/r^2 and 1/r^3 terms</text>
          </svg>
        </div>

        <div className="chapter4-svg-card">
          <div className="chapter4-panel-title">Radiation shell</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Radiation shell propagating outward">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="138" r="16" fill="#7c2d12" />
            {shellPaths.map((d, index) => (
              <path
                key={index}
                d={d}
                fill="none"
                stroke="#c2410c"
                strokeWidth={shellThickness / 6}
                opacity={0.85 - index * 0.12}
              />
            ))}
            <path d={`M 240 ${138 - shellRadius - 20} A ${shellRadius + 20} ${shellRadius + 20} 0 1 1 239.8 ${138 - shellRadius - 20}`} fill="none" stroke="#7c3aed" strokeWidth="3" strokeDasharray="8 6" />
            <text x="78" y="56" className="chapter4-svg-label">stretched wave shell</text>
            <text x="186" y="214" className="chapter4-svg-label">1/r term survives far away</text>
            <text x="294" y="98" className="chapter4-svg-label">radius {Math.round(shellRadius)}</text>
          </svg>
        </div>
      </div>

      <div className="chapter4-lab-notes">
        <div className="chapter4-note">
          <strong>Current scaling:</strong> near-field {formatSigned(nearField)}, radiation {formatSigned(radiationField)}.
        </div>
        <div className="chapter4-note">
          <strong>Chapter lesson:</strong> radiation is not a separate object. It is the
          same field viewed in the far zone, where the shell has stretched out.
        </div>
      </div>
    </article>
  )
}

function Chapter4VisualizationSuite() {
  return (
    <section className="chapter4-visual-suite">
      <div className="chapter4-visual-suite-header">
        <span className="chapter4-visual-suite-kicker">Chapter 4 Visualizations</span>
        <h2>Differential forms make electromagnetism geometric</h2>
        <p>
          Chapter 4 replaces component juggling with oriented geometry: forms, wedges,
          duality, closed and sourced tubes, and the radiation shell picture.
        </p>
      </div>

      <nav className="chapter4-visual-suite-nav" aria-label="Chapter 4 visualization topics">
        <a href="#forms-as-geometry">Forms</a>
        <a href="#faraday-2-form">Faraday</a>
        <a href="#tubes-and-sources">Tubes</a>
        <a href="#radiation-shell">Radiation</a>
      </nav>

      <Chapter4FormDemo />
      <Chapter4FaradayDemo />
      <Chapter4TubeDemo />
      <Chapter4RadiationDemo />
    </section>
  )
}

export default Chapter4VisualizationSuite
