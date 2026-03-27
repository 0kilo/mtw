import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixDVisualizationSuite.css'

const markdownPlugins = [remarkMath, remarkGfm]
const rehypePlugins = [rehypeKatex]

function splitMarkdown(markdown) {
  const headingMatches = [...markdown.matchAll(/^##\s+(\d+)\./gm)]

  if (headingMatches.length === 0) {
    return [{ type: 'markdown', key: 'full', content: markdown }]
  }

  const blocks = []

  if (headingMatches[0].index > 0) {
    const intro = markdown.slice(0, headingMatches[0].index).trim()
    if (intro) {
      blocks.push({ type: 'markdown', key: 'intro', content: intro })
    }
  }

  headingMatches.forEach((match, index) => {
    const start = match.index
    const end = index + 1 < headingMatches.length ? headingMatches[index + 1].index : markdown.length
    const number = Number.parseInt(match[1], 10)
    const content = markdown.slice(start, end).trim()
    blocks.push({
      type: 'markdown',
      key: `section-${number}-${index}`,
      number,
      content
    })
  })

  return blocks
}

function SectionMarkdown({ content, blockKey }) {
  return (
    <section className="appendix-d-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function AppendixDLab({ kicker, title, intro, children, notes }) {
  return (
    <article className="appendix-d-lab">
      <div className="appendix-d-lab-header">
        <div>
          <span className="appendix-d-kicker">{kicker}</span>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="appendix-d-lab-intro">{intro}</p>
      {children}
      <div className="appendix-d-lab-notes">
        {notes.map((note) => (
          <div key={note.label} className="appendix-d-note">
            <strong>{note.label}:</strong> {note.text}
          </div>
        ))}
      </div>
    </article>
  )
}

function AppendixDStats({ items }) {
  return (
    <div className="appendix-d-stat-grid">
      {items.map((item) => (
        <div key={item.label} className={`appendix-d-stat-card ${item.accent || ''}`.trim()}>
          <strong>{item.label}</strong>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  )
}

function AppendixDTensorBasicsDemo() {
  return (
    <AppendixDLab
      kicker="The big idea"
      title="A tensor is the same object seen through different coordinate charts"
      intro="Scalars stay the same, vectors transform linearly, and higher-rank tensors carry one transformation factor per index."
      notes={[
        {
          label: 'What to look for',
          text: 'The same geometric quantity can appear as a scalar, a vector, a covector, or a matrix of components.'
        },
        {
          label: 'Why it matters',
          text: 'Tensor calculus is the language for writing laws that do not depend on the coordinate system.'
        }
      ]}
    >
      <div className="appendix-d-triple-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Scalar</div>
          <svg viewBox="0 0 260 180" role="img" aria-label="Scalar">
            <rect x="18" y="18" width="224" height="144" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="130" cy="90" r="28" fill="#0f766e" opacity="0.18" stroke="#0f766e" strokeWidth="3" />
            <text x="102" y="95" className="appendix-d-svg-label">f</text>
            <text x="68" y="136" className="appendix-d-svg-label">no direction, no indices</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Vector</div>
          <svg viewBox="0 0 260 180" role="img" aria-label="Vector">
            <rect x="18" y="18" width="224" height="144" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="54" y1="126" x2="190" y2="64" stroke="#c2410b" strokeWidth="5" />
            <polygon points="190,64 178,66 185,76" fill="#c2410b" />
            <text x="62" y="52" className="appendix-d-svg-label">vᵢ eᵢ</text>
            <text x="64" y="140" className="appendix-d-svg-label">one index, one direction</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Tensor</div>
          <svg viewBox="0 0 260 180" role="img" aria-label="Tensor">
            <rect x="18" y="18" width="224" height="144" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="72" y="54" width="116" height="68" rx="12" fill="#7c3aed" opacity="0.14" stroke="#7c3aed" strokeWidth="3" />
            <path d="M 92 92 H 168" stroke="#7c3aed" strokeWidth="4" />
            <path d="M 130 70 V 114" stroke="#7c3aed" strokeWidth="4" />
            <text x="88" y="50" className="appendix-d-svg-label">Tᶦⱼ</text>
            <text x="48" y="140" className="appendix-d-svg-label">multiple slots, multiple indices</text>
          </svg>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDSummationDemo() {
  return (
    <AppendixDLab
      kicker="Einstein summation"
      title="A repeated upper-lower index means a contraction"
      intro="The summation convention compresses matrix multiplication, dot products, and traces into a single notation."
      notes={[
        {
          label: 'What to look for',
          text: 'The repeated index is the one being summed over; the free indices remain visible in the result.'
        },
        {
          label: 'Why it matters',
          text: 'A contraction is the tensor-calculus version of taking a dot product or a matrix trace.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Matrix-vector form</div>
          <svg viewBox="0 0 340 220" role="img" aria-label="Summation contraction">
            <rect x="18" y="18" width="304" height="184" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="54" y="56" width="74" height="100" rx="12" fill="#0f766e" opacity="0.12" stroke="#0f766e" strokeWidth="2" />
            <rect x="136" y="56" width="74" height="100" rx="12" fill="#c2410b" opacity="0.12" stroke="#c2410b" strokeWidth="2" />
            <rect x="218" y="56" width="74" height="100" rx="12" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" strokeWidth="2" />
            <text x="74" y="113" className="appendix-d-svg-label">Aⁱⱼ</text>
            <text x="158" y="113" className="appendix-d-svg-label">vʲ</text>
            <text x="242" y="113" className="appendix-d-svg-label">wᵢ</text>
            <path d="M 128 106 H 136" stroke="#64748b" strokeWidth="3" strokeDasharray="6 4" />
            <path d="M 210 106 H 218" stroke="#64748b" strokeWidth="3" strokeDasharray="6 4" />
            <text x="52" y="182" className="appendix-d-svg-label">Aⁱⱼ vʲ → xⁱ</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">What is contracted</div>
          <div className="appendix-d-list">
            <div className="appendix-d-list-row">
              <span className="appendix-d-list-dot" />
              <span>vᵢ wⁱ is a scalar contraction</span>
            </div>
            <div className="appendix-d-list-row">
              <span className="appendix-d-list-dot" />
              <span>Aⁱⱼ vʲ keeps the free index i</span>
            </div>
            <div className="appendix-d-list-row">
              <span className="appendix-d-list-dot" />
              <span>Repeated indices must appear once up and once down</span>
            </div>
          </div>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDTransformDemo() {
  const [skew, setSkew] = useState(0.45)
  const jacobian = [
    [1, skew],
    [0, 1]
  ]
  const vector = [1, 0.65]
  const transformed = [vector[0] + skew * vector[1], vector[1]]

  return (
    <AppendixDLab
      kicker="Coordinate transformations"
      title="Vectors follow the Jacobian, covectors follow the inverse Jacobian"
      intro="Changing coordinates changes components, not the underlying geometric object."
      notes={[
        {
          label: 'What to look for',
          text: 'The basis lines shear as the coordinate map changes, but the vector itself represents the same arrow.'
        },
        {
          label: 'Why it matters',
          text: 'Upper and lower indices transform differently because vectors and covectors are dual objects.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Sheared coordinates</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Coordinate transformation">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="70" y1="176" x2="250" y2="176" stroke="#0f766e" strokeWidth="4" />
            <line x1="70" y1="176" x2={70 + skew * 100} y2="56" stroke="#c2410b" strokeWidth="4" />
            <line x1="70" y1="176" x2={160 + skew * 60} y2={96} stroke="#7c3aed" strokeWidth="4" />
            <text x="62" y="52" className="appendix-d-svg-label">x&apos; = x + s y</text>
            <text x="178" y="86" className="appendix-d-svg-label">basis changes</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Jacobian readout</div>
          <div className="appendix-d-matrix">
            <div>J =</div>
            <div className="appendix-d-matrix-block">
              <span>[{jacobian[0][0].toFixed(0)}, {jacobian[0][1].toFixed(2)}]</span>
              <span>[{jacobian[1][0].toFixed(0)}, {jacobian[1][1].toFixed(0)}]</span>
            </div>
          </div>
          <AppendixDStats
            items={[
              { label: 'v', value: `(${vector[0].toFixed(2)}, ${vector[1].toFixed(2)})`, accent: 'accent-teal' },
              { label: "v'", value: `(${transformed[0].toFixed(2)}, ${transformed[1].toFixed(2)})`, accent: 'accent-orange' },
              { label: 'skew', value: skew.toFixed(2), accent: 'accent-indigo' }
            ]}
          />
          <label className="appendix-d-inline-control">
            Shear strength: {skew.toFixed(2)}
            <input type="range" min="0" max="0.95" step="0.01" value={skew} onChange={(e) => setSkew(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDDualMetricDemo() {
  const [r, setR] = useState(2.5)
  const metricThetaTheta = r * r
  const vector = [1.2, 0.8]
  const lowered = [vector[0], metricThetaTheta * vector[1]]

  return (
    <AppendixDLab
      kicker="Dual basis and metric"
      title="The dual basis pairs with vectors, and the metric raises and lowers indices"
      intro="Vectors and covectors live in different spaces. The metric provides the bridge between them."
      notes={[
        {
          label: 'What to look for',
          text: 'The dual basis returns 1 on matching basis vectors and 0 on the others.'
        },
        {
          label: 'Why it matters',
          text: 'Without a metric, you should not casually identify upper and lower indices.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Dual pairing</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Dual basis">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="86" y1="176" x2="214" y2="176" stroke="#0f766e" strokeWidth="4" />
            <line x1="86" y1="176" x2="150" y2="76" stroke="#c2410b" strokeWidth="4" />
            <path d="M 234 86 h 48" stroke="#7c3aed" strokeWidth="4" />
            <path d="M 234 136 h 48" stroke="#7c3aed" strokeWidth="4" />
            <text x="56" y="56" className="appendix-d-svg-label">θⁱ(eⱼ) = δⁱⱼ</text>
            <text x="228" y="80" className="appendix-d-svg-label">1 on match</text>
            <text x="228" y="150" className="appendix-d-svg-label">0 on mismatch</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Index lowering</div>
          <div className="appendix-d-matrix">
            <div>g =</div>
            <div className="appendix-d-matrix-block">
              <span>[1, 0]</span>
              <span>[0, {metricThetaTheta.toFixed(2)}]</span>
            </div>
          </div>
          <AppendixDStats
            items={[
              { label: 'vᶦ', value: `(${vector[0].toFixed(1)}, ${vector[1].toFixed(1)})`, accent: 'accent-teal' },
              { label: 'vᵢ', value: `(${lowered[0].toFixed(1)}, ${lowered[1].toFixed(1)})`, accent: 'accent-orange' },
              { label: 'r', value: r.toFixed(2), accent: 'accent-indigo' }
            ]}
          />
          <label className="appendix-d-inline-control">
            Radius / scale: {r.toFixed(2)}
            <input type="range" min="0.8" max="4" step="0.05" value={r} onChange={(e) => setR(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDMultilinearDemo() {
  const [a, setA] = useState(0.7)
  const [b, setB] = useState(0.4)
  const output = (a * b).toFixed(2)

  return (
    <AppendixDLab
      kicker="Multilinear maps and tensor products"
      title="A tensor is linear in each slot separately"
      intro="The tensor product packages all independent linear slots into one object."
      notes={[
        {
          label: 'What to look for',
          text: 'Changing one input leaves the other slot structurally unchanged, which is the meaning of multilinearity.'
        },
        {
          label: 'Why it matters',
          text: 'Tensor products turn separate linear maps into a single multilinear map.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Outer-product grid</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Tensor product">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {Array.from({ length: 4 }).map((_, row) =>
              Array.from({ length: 4 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={72 + col * 44}
                  y={52 + row * 34}
                  width="34"
                  height="24"
                  rx="6"
                  fill={row === 1 || col === 2 ? '#c2410b' : '#0f766e'}
                  opacity="0.14"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
              ))
            )}
            <text x="62" y="44" className="appendix-d-svg-label">v ⊗ w</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Slot-by-slot linearity</div>
          <AppendixDStats
            items={[
              { label: 'slot 1', value: a.toFixed(2), accent: 'accent-teal' },
              { label: 'slot 2', value: b.toFixed(2), accent: 'accent-orange' },
              { label: 'T(a,b)', value: output, accent: 'accent-indigo' }
            ]}
          />
          <label className="appendix-d-inline-control">
            Input a: {a.toFixed(2)}
            <input type="range" min="0" max="1" step="0.01" value={a} onChange={(e) => setA(Number.parseFloat(e.target.value))} />
          </label>
          <label className="appendix-d-inline-control">
            Input b: {b.toFixed(2)}
            <input type="range" min="0" max="1" step="0.01" value={b} onChange={(e) => setB(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDSymmetryDemo() {
  const [mode, setMode] = useState('symmetric')
  const symmetric = mode === 'symmetric'

  return (
    <AppendixDLab
      kicker="Symmetry and antisymmetry"
      title="Swap indices and the tensor may stay the same or pick up a sign"
      intro="Symmetric tensors and antisymmetric tensors organize many important geometric objects."
      notes={[
        {
          label: 'What to look for',
          text: 'The Kronecker delta is symmetric; the Levi-Civita symbol is antisymmetric.'
        },
        {
          label: 'Why it matters',
          text: 'Symmetry rules reduce complexity and often encode geometry or conservation laws.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Tensor matrix</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Symmetry and antisymmetry">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="106" y="66" width="124" height="84" rx="12" fill={symmetric ? '#0f766e' : '#c2410b'} opacity="0.16" stroke={symmetric ? '#0f766e' : '#c2410b'} strokeWidth="3" />
            <text x="122" y="104" className="appendix-d-svg-label">{symmetric ? 'Tij = Tji' : 'Tij = -Tji'}</text>
            <text x="56" y="42" className="appendix-d-svg-label">swap i ↔ j</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Symmetry toggle</div>
          <div className="appendix-d-toggle-row">
            <button className={symmetric ? 'is-active' : ''} onClick={() => setMode('symmetric')}>Symmetric</button>
            <button className={!symmetric ? 'is-active' : ''} onClick={() => setMode('antisymmetric')}>Antisymmetric</button>
          </div>
          <AppendixDStats
            items={[
              { label: 'Kronecker delta', value: 'symmetric', accent: 'accent-teal' },
              { label: 'Levi-Civita', value: 'antisymmetric', accent: 'accent-orange' },
              { label: 'use', value: 'coordinate-free bookkeeping', accent: 'accent-indigo' }
            ]}
          />
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDConnectionDemo() {
  const [theta, setTheta] = useState(0.55)
  const correction = theta.toFixed(2)

  return (
    <AppendixDLab
      kicker="Ordinary vs covariant derivatives"
      title="When basis vectors change, the derivative must track that change too"
      intro="In curvilinear coordinates, the naive partial derivative misses basis rotation; the covariant derivative adds connection terms."
      notes={[
        {
          label: 'What to look for',
          text: 'The same geometric arrow has different coordinate components as the basis rotates.'
        },
        {
          label: 'Why it matters',
          text: 'The Christoffel symbols are exactly the correction terms that make differentiation geometric.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Rotating basis</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Covariant derivative and Christoffel symbols">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="90" y1="170" x2="210" y2="170" stroke="#0f766e" strokeWidth="4" />
            <line x1="90" y1="170" x2={90 + 80 * Math.cos(theta)} y2={170 - 80 * Math.sin(theta)} stroke="#c2410b" strokeWidth="4" />
            <line x1="90" y1="170" x2={90 + 50 * Math.sin(theta)} y2={170 - 50 * Math.cos(theta)} stroke="#7c3aed" strokeWidth="4" />
            <text x="58" y="54" className="appendix-d-svg-label">basis rotates with position</text>
            <text x="126" y="98" className="appendix-d-svg-label">∂ᵢ basis terms</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Correction term</div>
          <AppendixDStats
            items={[
              { label: 'ordinary derivative', value: 'misses basis change', accent: 'accent-teal' },
              { label: 'covariant derivative', value: 'adds Γ terms', accent: 'accent-orange' },
              { label: 'Γ', value: correction, accent: 'accent-indigo' }
            ]}
          />
          <div className="appendix-d-list">
            <div className="appendix-d-list-row">
              <span className="appendix-d-list-dot" />
              <span>∇ⱼ vⁱ = ∂ⱼ vⁱ + Γⁱⱼₖ vᵏ</span>
            </div>
            <div className="appendix-d-list-row">
              <span className="appendix-d-list-dot" />
              <span>the connection compensates for coordinate curvature</span>
            </div>
          </div>
          <label className="appendix-d-inline-control">
            Basis rotation: {theta.toFixed(2)}
            <input type="range" min="0" max="1.2" step="0.01" value={theta} onChange={(e) => setTheta(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDPolarDemo() {
  const [r, setR] = useState(2.2)
  const gradTheta = 1 / r
  const divFactor = 1 / r
  const lapFactor = 1 / (r * r)

  return (
    <AppendixDLab
      kicker="Polar coordinates"
      title="The operators look different because the basis and scale factors look different"
      intro="Gradient, divergence, and Laplacian acquire extra factors in curvilinear coordinates."
      notes={[
        {
          label: 'What to look for',
          text: 'The same field written in polar coordinates has extra 1/r factors because arc length and angle do not scale the same way.'
        },
        {
          label: 'Why it matters',
          text: 'This is the practical payoff of tensor notation: the formulas stay organized under coordinate changes.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Polar grid and field</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Polar coordinates and differential operators">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="140" cy="128" r={40 + r * 16} fill="none" stroke="#0f766e" strokeWidth="2" />
            <circle cx="140" cy="128" r={72 + r * 12} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="140" y1="128" x2={140 + 72} y2="128" stroke="#c2410b" strokeWidth="4" />
            <line x1="140" y1="128" x2={140 + 38 * Math.cos(0.8)} y2={128 - 38 * Math.sin(0.8)} stroke="#7c3aed" strokeWidth="4" />
            <text x="40" y="42" className="appendix-d-svg-label">basis vectors scale with r</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Operator factors</div>
          <AppendixDStats
            items={[
              { label: '∂θ', value: gradTheta.toFixed(3), accent: 'accent-teal' },
              { label: 'divergence scale', value: divFactor.toFixed(3), accent: 'accent-orange' },
              { label: 'Laplacian scale', value: lapFactor.toFixed(3), accent: 'accent-indigo' }
            ]}
          />
          <div className="appendix-d-list">
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />∇f = e_r ∂ᵣ f + e_θ (1/r) ∂θ f</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />the geometry is doing the bookkeeping</div>
          </div>
          <label className="appendix-d-inline-control">
            Radius scale: {r.toFixed(2)}
            <input type="range" min="0.8" max="4" step="0.05" value={r} onChange={(e) => setR(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDGeodesicDemo() {
  const [curve, setCurve] = useState(0.45)

  return (
    <AppendixDLab
      kicker="Geodesics, curvature, torsion, and Levi-Civita"
      title="Geodesics are the straightest possible curves in the geometry"
      intro="Curvature measures how far the geometry departs from flatness, while the Levi-Civita connection is the standard metric-compatible, torsion-free connection."
      notes={[
        {
          label: 'What to look for',
          text: 'The same local straight-line idea becomes a geodesic when you replace Euclidean space by curved geometry.'
        },
        {
          label: 'Why it matters',
          text: 'Torsion is set to zero in the standard connection, leaving metric compatibility and geodesic motion as the central geometric notions.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Straight vs curved</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Geodesics and curvature">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="70" y1="170" x2="210" y2="70" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 220 170 C ${220 + curve * 20} ${150 - curve * 20}, ${260 + curve * 16} ${88 - curve * 8}, ${300} 70`} fill="none" stroke="#c2410b" strokeWidth="5" />
            <text x="60" y="42" className="appendix-d-svg-label">geodesic path</text>
            <text x="212" y="42" className="appendix-d-svg-label">curved space</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Connection summary</div>
          <AppendixDStats
            items={[
              { label: 'curvature', value: curve.toFixed(2), accent: 'accent-teal' },
              { label: 'torsion', value: '0 in Levi-Civita', accent: 'accent-orange' },
              { label: 'compatibility', value: '∇g = 0', accent: 'accent-indigo' }
            ]}
          />
          <div className="appendix-d-list">
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />Christoffel symbols encode the connection</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />geodesics are autoparallel curves</div>
          </div>
          <label className="appendix-d-inline-control">
            Curvature strength: {curve.toFixed(2)}
            <input type="range" min="0" max="1" step="0.01" value={curve} onChange={(e) => setCurve(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDConservationDemo() {
  return (
    <AppendixDLab
      kicker="Covariant conservation"
      title="Conservation laws keep their form under coordinate change"
      intro="Divergence-free tensor equations such as ∇ᵢ Tⁱⱼ = 0 express balance laws in coordinate-independent form."
      notes={[
        {
          label: 'What to look for',
          text: 'The same conservation principle governs stress, momentum, energy, and charge in tensor language.'
        },
        {
          label: 'Why it matters',
          text: 'Many physical laws are naturally written as covariant conservation statements rather than componentwise equations.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Flux balance</div>
          <svg viewBox="0 0 360 240" role="img" aria-label="Covariant conservation">
            <rect x="18" y="18" width="324" height="204" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="88" y="78" width="96" height="84" rx="14" fill="#0f766e" opacity="0.14" stroke="#0f766e" strokeWidth="3" />
            <line x1="72" y1="120" x2="88" y2="120" stroke="#c2410b" strokeWidth="4" />
            <line x1="184" y1="120" x2="214" y2="120" stroke="#c2410b" strokeWidth="4" />
            <line x1="136" y1="60" x2="136" y2="78" stroke="#7c3aed" strokeWidth="4" />
            <line x1="136" y1="162" x2="136" y2="182" stroke="#7c3aed" strokeWidth="4" />
            <text x="56" y="42" className="appendix-d-svg-label">inflow = outflow</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Common tensors</div>
          <div className="appendix-d-list">
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />metric gᵢⱼ</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />stress-energy Tⁱⱼ</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />{`curvature Rⁱ{}_{jkl}`}</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />Kronecker delta and Levi-Civita symbol</div>
          </div>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDWorkflowDemo() {
  return (
    <AppendixDLab
      kicker="Practical workflow"
      title="Tensor calculus problems are easier when you track the geometry first"
      intro="A good workflow keeps the coordinate system, basis, metric, and physical meaning straight before writing the final components."
      notes={[
        {
          label: 'What to look for',
          text: 'Coordinate components are not the same as physical components unless the basis is orthonormal.'
        },
        {
          label: 'Why it matters',
          text: 'The safest path is to reason geometrically, then translate into components at the end.'
        }
      ]}
    >
      <div className="appendix-d-grid-summary">
        <div className="appendix-d-list-card accent-teal">
          <h4>Workflow</h4>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />identify the object and its type</div>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />choose coordinates and basis</div>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />write the transformation law</div>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />use the metric or connection if needed</div>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />translate back into physical meaning</div>
        </div>
        <div className="appendix-d-list-card accent-orange">
          <h4>Coordinate vs physical</h4>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />physical components need an orthonormal basis</div>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />component values depend on the chart</div>
          <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />the tensor does not</div>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDMistakesDemo() {
  const [mode, setMode] = useState('vector')
  const isTensorMode = mode === 'tensor'

  return (
    <AppendixDLab
      kicker="Typical mistakes"
      title="Tensor calculus is not just vector calculus with more indices"
      intro="The chapter closes by separating the ideas that are similar from the ideas that are genuinely different."
      notes={[
        {
          label: 'What to look for',
          text: 'Differential forms, tensors, and vectors overlap, but they are not interchangeable.'
        },
        {
          label: 'Why it matters',
          text: 'Clear notation prevents errors such as contracting the wrong indices or mistaking components for geometry.'
        }
      ]}
    >
      <div className="appendix-d-dual-panel">
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Concept comparison</div>
          <div className="appendix-d-toggle-row">
            <button className={mode === 'vector' ? 'is-active' : ''} onClick={() => setMode('vector')}>Vector calculus</button>
            <button className={isTensorMode ? 'is-active' : ''} onClick={() => setMode('tensor')}>Tensor calculus</button>
          </div>
          <svg viewBox="0 0 360 220" role="img" aria-label="Tensor calculus compared to vector calculus">
            <rect x="18" y="18" width="324" height="184" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="64" y="66" width="104" height="72" rx="14" fill={mode === 'vector' ? '#0f766e' : '#94a3b8'} opacity="0.2" stroke="#0f766e" strokeWidth="3" />
            <rect x="192" y="66" width="104" height="72" rx="14" fill={isTensorMode ? '#c2410b' : '#94a3b8'} opacity="0.2" stroke="#c2410b" strokeWidth="3" />
            <text x="82" y="108" className="appendix-d-svg-label">vector ops</text>
            <text x="205" y="108" className="appendix-d-svg-label">tensors</text>
            <text x="52" y="170" className="appendix-d-svg-label">forms add antisymmetry and orientation</text>
          </svg>
        </div>
        <div className="appendix-d-card">
          <div className="appendix-d-panel-title">Do not confuse</div>
          <div className="appendix-d-list">
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />components with the object itself</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />indices that contract naturally with those that do not</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />vector calculus identities with coordinate-independent tensor identities</div>
            <div className="appendix-d-list-row"><span className="appendix-d-list-dot" />tensor calculus with differential forms, which emphasize antisymmetry and integration</div>
          </div>
        </div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDFinalMapDemo() {
  return (
    <AppendixDLab
      kicker="Final intuition"
      title="Keep the object, keep the transformation law, then compute"
      intro="The main lesson of tensor calculus is that geometry comes first and coordinates come second."
      notes={[
        {
          label: 'Remember',
          text: 'If you know the type of object, you know how it transforms, contracts, and differentiates.'
        },
        {
          label: 'Finish line',
          text: 'That is the bridge from ordinary calculus to geometry and modern mathematical physics.'
        }
      ]}
    >
      <div className="appendix-d-final-grid">
        <div className="appendix-d-final-card accent-teal">object first</div>
        <div className="appendix-d-final-card accent-orange">indices second</div>
        <div className="appendix-d-final-card accent-indigo">geometry first</div>
        <div className="appendix-d-final-card accent-slate">components last</div>
      </div>
    </AppendixDLab>
  )
}

function AppendixDVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-d-visual-suite">
      {blocks.map((block) => {
        if (typeof block.number !== 'number') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 4 && <AppendixDTensorBasicsDemo />}
            {block.number === 5 && <AppendixDSummationDemo />}
            {block.number === 6 && <AppendixDTransformDemo />}
            {block.number === 8 && <AppendixDDualMetricDemo />}
            {block.number === 11 && <AppendixDMultilinearDemo />}
            {block.number === 13 && <AppendixDSymmetryDemo />}
            {block.number === 15 && <AppendixDConnectionDemo />}
            {block.number === 19 && <AppendixDPolarDemo />}
            {block.number === 26 && <AppendixDGeodesicDemo />}
            {block.number === 27 && <AppendixDConservationDemo />}
            {block.number === 32 && <AppendixDWorkflowDemo />}
            {block.number === 36 && <AppendixDMistakesDemo />}
            {block.number === 43 && <AppendixDFinalMapDemo />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixDVisualizationSuite
