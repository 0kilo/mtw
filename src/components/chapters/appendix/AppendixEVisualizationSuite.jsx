import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixEVisualizationSuite.css'

const markdownPlugins = [remarkMath, remarkGfm]
const rehypePlugins = [rehypeKatex]

function formatValue(value) {
  if (Math.abs(value) < 0.005) return '0.00'
  return value >= 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

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
    <section className="appendix-e-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function AppendixEVariationDemo() {
  const [epsilon, setEpsilon] = useState(58)
  const t = (epsilon - 50) / 50
  const variation = t * 0.85
  const baseJ = 1
  const perturbedJ = baseJ + 0.72 * variation * variation
  const perturbationStrength = Math.abs(variation)

  const curvePath = `M 76 154 C 146 ${152 - 36 * perturbationStrength}, 200 ${84 - 20 * perturbationStrength}, 260 ${118 + 10 * perturbationStrength} C 316 ${150 + 30 * perturbationStrength}, 370 ${178 - 16 * perturbationStrength}, 432 ${134 - 10 * perturbationStrength}`
  const baselinePath = 'M 76 154 C 160 154, 252 154, 432 154'

  return (
    <article className="appendix-e-lab">
      <div className="appendix-e-lab-header">
        <div>
          <span className="appendix-e-kicker">Functionals and variations</span>
          <h3>Change the function a little and watch the functional respond</h3>
        </div>
        <label className="appendix-e-inline-control">
          Perturbation strength: {epsilon}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={epsilon}
            onChange={(e) => setEpsilon(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-e-lab-intro">
        Section 2 introduces the basic move in calculus of variations: replace y(x) by
        y(x) + εη(x), then ask how the functional changes. The extremal is the point where
        the first-order change disappears.
      </p>

      <div className="appendix-e-dual-panel">
        <div className="appendix-e-svg-card">
          <div className="appendix-e-panel-title">Base curve and perturbed curve</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Perturbed curve visualization">
            <rect x="26" y="24" width="428" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={baselinePath} fill="none" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
            <path d={curvePath} fill="none" stroke="#c2410c" strokeWidth="4" strokeLinecap="round" />
            <circle cx="76" cy="154" r="6" fill="#0f766e" />
            <circle cx="432" cy="154" r="6" fill="#0f766e" />
            <text x="88" y="56" className="appendix-e-svg-label">y(x)</text>
            <text x="308" y="88" className="appendix-e-svg-label">y(x) + εη(x)</text>
            <text x="92" y="222" className="appendix-e-svg-label">fixed endpoints keep the perturbation anchored</text>
          </svg>
        </div>

        <div className="appendix-e-matrix-card">
          <div className="appendix-e-panel-title">Variation readout</div>
          <div className="appendix-e-matrix-grid">
            <div className="appendix-e-matrix-cell accent-teal">
              <strong>J[y]</strong>
              <span>{formatValue(baseJ)}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-orange">
              <strong>J[y + εη]</strong>
              <span>{formatValue(perturbedJ)}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-indigo">
              <strong>first variation</strong>
              <span>zero at ε = 0 for an extremum</span>
            </div>
            <div className="appendix-e-matrix-cell accent-slate">
              <strong>intuition</strong>
              <span>small perturbations probe stationarity, not just slope</span>
            </div>
          </div>

          <div className="appendix-e-mini-plot">
            <div className="appendix-e-mini-plot-title">Functional value near the extremum</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Functional versus perturbation strength">
              <line x1="32" y1="128" x2="248" y2="128" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="140" y1="20" x2="140" y2="136" stroke="#cbd5e1" strokeWidth="2" />
              <path
                d="M 44 118 C 78 88, 106 60, 140 52 C 174 60, 202 88, 236 118"
                fill="none"
                stroke="#0f766e"
                strokeWidth="4"
              />
              <circle cx={140 + 86 * (variation / 1.7)} cy={52 + 58 * Math.abs(variation)} r="5" fill="#c2410c" />
              <text x="40" y="150" className="appendix-e-svg-label">ε</text>
              <text x="152" y="34" className="appendix-e-svg-label">J</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-e-lab-notes">
        <div className="appendix-e-note">
          <strong>What to look for:</strong> the perturbation is anchored at the endpoints, but the
          interior of the curve moves freely.
        </div>
        <div className="appendix-e-note">
          <strong>Why it matters:</strong> this is the subject&apos;s core viewpoint: optimize over
          whole functions, not just numbers.
        </div>
      </div>
    </article>
  )
}

function AppendixEEulerLagrangeDemo() {
  const [endpointMode, setEndpointMode] = useState('fixed')
  const isFixed = endpointMode === 'fixed'
  const boundaryTerm = isFixed ? 0 : 1
  const boundaryLabel = isFixed ? 'vanishes' : 'survives'
  const eulerExpression = String.raw`\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)=0`

  return (
    <article className="appendix-e-lab">
      <div className="appendix-e-lab-header">
        <div>
          <span className="appendix-e-kicker">Euler-Lagrange equation</span>
          <h3>The boundary term decides whether the perturbation vanishes at the ends</h3>
        </div>
        <label className="appendix-e-inline-control">
          Endpoint condition
          <select value={endpointMode} onChange={(e) => setEndpointMode(e.target.value)}>
            <option value="fixed">Fixed endpoints</option>
            <option value="free">Free endpoint</option>
          </select>
        </label>
      </div>

      <p className="appendix-e-lab-intro">
        Section 3 shows the key integration-by-parts step. Section 7 then explains why
        free endpoints change the answer: the boundary term no longer disappears on its own.
      </p>

      <div className="appendix-e-dual-panel">
        <div className="appendix-e-svg-card">
          <div className="appendix-e-panel-title">Integration by parts in one picture</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Euler-Lagrange boundary term">
            <rect x="26" y="24" width="428" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d="M 90 138 L 166 138" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#appendixEArrow)" />
            <path d="M 166 138 L 242 138" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#appendixEArrow)" />
            <path d="M 242 138 L 320 138" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#appendixEArrow)" />
            <path d="M 320 138 L 392 138" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#appendixEArrow)" />
            <defs>
              <marker id="appendixEArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <text x="88" y="104" className="appendix-e-svg-label">δJ</text>
            <text x="154" y="104" className="appendix-e-svg-label">∫ (∂L/∂y)η dx</text>
            <text x="238" y="104" className="appendix-e-svg-label">+ ∫ (∂L/∂y')η' dx</text>
            <text x="336" y="104" className="appendix-e-svg-label">boundary term</text>
            <text x="92" y="188" className="appendix-e-svg-label">fixed endpoints</text>
            <text x="322" y="188" className="appendix-e-svg-label">free endpoints</text>
          </svg>
        </div>

        <div className="appendix-e-matrix-card">
          <div className="appendix-e-panel-title">Boundary term check</div>
          <div className="appendix-e-matrix-grid">
            <div className="appendix-e-matrix-cell accent-teal">
              <strong>endpoint mode</strong>
              <span>{isFixed ? 'η(a)=η(b)=0' : 'one endpoint varies'}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-orange">
              <strong>boundary term</strong>
              <span>{boundaryLabel}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-indigo">
              <strong>Euler-Lagrange</strong>
              <span>{eulerExpression}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-slate">
              <strong>natural condition</strong>
              <span>free ends force ∂L/∂y' = 0 at the boundary</span>
            </div>
          </div>

          <div className="appendix-e-boundary-meter">
            <div className="appendix-e-mini-plot-title">Boundary contribution</div>
            <div className="appendix-e-meter-track">
              <div
                className={`appendix-e-meter-fill ${isFixed ? 'is-zero' : ''}`}
                style={{ width: `${20 + 70 * boundaryTerm}%` }}
              />
            </div>
            <div className="appendix-e-meter-caption">
              {isFixed
                ? 'With fixed endpoints, the boundary term is killed by the admissible variations.'
                : 'With a free endpoint, the boundary term survives and becomes a condition to satisfy.'}
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-e-lab-notes">
        <div className="appendix-e-note">
          <strong>What to look for:</strong> the integration-by-parts step shifts the derivative
          off the perturbation and onto the Lagrangian term.
        </div>
        <div className="appendix-e-note">
          <strong>Why it matters:</strong> the same derivation explains both the Euler-Lagrange
          equation and the natural boundary conditions.
        </div>
      </div>
    </article>
  )
}

function AppendixEShortestCurveDemo() {
  const [bend, setBend] = useState(44)
  const t = bend / 100
  const curveLift = 16 + 58 * t
  const samples = 80
  const points = Array.from({ length: samples }, (_, index) => {
    const x = index / (samples - 1)
    const y = curveLift * x * (1 - x)
    return { x, y }
  })

  let length = 0
  let energy = 0
  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1]
    const next = points[index]
    const dx = next.x - prev.x
    const dy = (next.y - prev.y) / 90
    length += Math.hypot(dx, dy)
    energy += 0.5 * dy * dy * dx
  }

  const path = points
    .map((point, index) => {
      const x = 72 + point.x * 320
      const y = 160 - point.y
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <article className="appendix-e-lab">
      <div className="appendix-e-lab-header">
        <div>
          <span className="appendix-e-kicker">Shortest curves and energy</span>
          <h3>The same straight line extremizes both arc length and Dirichlet energy</h3>
        </div>
        <label className="appendix-e-inline-control">
          Curve bend: {bend}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={bend}
            onChange={(e) => setBend(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-e-lab-intro">
        Sections 5 and 6 show two classic functionals. One measures geometric length and the
        other measures energy, but both give the same extremal in this simple planar setting.
      </p>

      <div className="appendix-e-dual-panel">
        <div className="appendix-e-svg-card">
          <div className="appendix-e-panel-title">Arc length functional</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Arc length curve">
            <rect x="26" y="24" width="428" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 72 160 L 392 160" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="7 6" />
            <path d={path} fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <circle cx="72" cy="160" r="6" fill="#0f766e" />
            <circle cx="392" cy="160" r="6" fill="#0f766e" />
            <text x="82" y="60" className="appendix-e-svg-label">S[y] = ∫ √(1 + y'²) dx</text>
            <text x="88" y="214" className="appendix-e-svg-label">bend the curve and the length increases</text>
          </svg>
        </div>

        <div className="appendix-e-matrix-card">
          <div className="appendix-e-panel-title">Energy functional</div>
          <div className="appendix-e-matrix-grid">
            <div className="appendix-e-matrix-cell accent-teal">
              <strong>arc length</strong>
              <span>{length.toFixed(2)}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-orange">
              <strong>Dirichlet energy</strong>
              <span>{energy.toFixed(2)}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-indigo">
              <strong>extremal</strong>
              <span>straight line when bend = 0</span>
            </div>
            <div className="appendix-e-matrix-cell accent-slate">
              <strong>shared lesson</strong>
              <span>different integrands can produce the same minimizer</span>
            </div>
          </div>

          <div className="appendix-e-mini-plot">
            <div className="appendix-e-mini-plot-title">Why the straight line wins</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Energy and length versus bend">
              <line x1="30" y1="128" x2="246" y2="128" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="44" y1="122" x2="44" y2="24" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 44 112 C 86 112, 118 106, 140 92 C 168 72, 200 54, 232 36" fill="none" stroke="#c2410c" strokeWidth="4" />
              <path d="M 44 114 C 82 112, 116 108, 140 96 C 170 78, 202 58, 232 42" fill="none" stroke="#0f766e" strokeWidth="4" />
              <circle cx={44 + 188 * t} cy={120 - 84 * t} r="5" fill="#7c3aed" />
              <text x="40" y="150" className="appendix-e-svg-label">bend</text>
              <text x="44" y="20" className="appendix-e-svg-label">J</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-e-lab-notes">
        <div className="appendix-e-note">
          <strong>What to look for:</strong> the curve straightens as the bend goes to zero.
        </div>
        <div className="appendix-e-note">
          <strong>Why it matters:</strong> the appendix uses these examples to connect the abstract
          Euler-Lagrange equation to geometry and mechanics.
        </div>
      </div>
    </article>
  )
}

function AppendixEVariationStabilityDemo() {
  const [mode, setMode] = useState('minimum')

  const profiles = {
    minimum: {
      title: 'local minimum',
      left: 'positive',
      right: 'positive',
      leftPath: 'M 40 116 C 76 82, 116 58, 140 50 C 164 58, 204 82, 240 116',
      rightPath: 'M 40 116 C 78 88, 116 72, 140 70 C 164 72, 202 88, 240 116',
      accent: '#0f766e',
      description: 'second variation is positive in every admissible direction'
    },
    saddle: {
      title: 'saddle point',
      left: 'mixed',
      right: 'mixed',
      leftPath: 'M 40 116 C 78 90, 116 74, 140 70 C 164 74, 202 90, 240 116',
      rightPath: 'M 40 116 C 74 76, 114 54, 140 60 C 166 66, 206 96, 240 116',
      accent: '#7c3aed',
      description: 'one perturbation direction raises the functional while another lowers it'
    },
    maximum: {
      title: 'local maximum',
      left: 'negative',
      right: 'negative',
      leftPath: 'M 40 58 C 76 92, 116 116, 140 120 C 164 116, 204 92, 240 58',
      rightPath: 'M 40 64 C 76 92, 116 108, 140 110 C 164 108, 204 92, 240 64',
      accent: '#c2410c',
      description: 'the curvature of the functional bends downward near the extremum'
    }
  }

  const profile = profiles[mode]

  return (
    <article className="appendix-e-lab">
      <div className="appendix-e-lab-header">
        <div>
          <span className="appendix-e-kicker">First and second variation</span>
          <h3>Stationary is not the same as minimizing</h3>
        </div>
        <label className="appendix-e-inline-control">
          Stationary type
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="minimum">Minimum</option>
            <option value="saddle">Saddle</option>
            <option value="maximum">Maximum</option>
          </select>
        </label>
      </div>

      <p className="appendix-e-lab-intro">
        Sections 16 to 18 explain why a vanishing first variation only guarantees stationarity.
        The second variation tells you whether the stationary function is a minimum, a maximum,
        or neither.
      </p>

      <div className="appendix-e-dual-panel">
        <div className="appendix-e-svg-card">
          <div className="appendix-e-panel-title">Two perturbation directions</div>
          <svg viewBox="0 0 280 180" role="img" aria-label="Second variation slices">
            <rect x="18" y="18" width="244" height="144" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="44" y1="124" x2="236" y2="124" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="140" y1="34" x2="140" y2="140" stroke="#cbd5e1" strokeWidth="2" />
            <path d={profile.leftPath} fill="none" stroke={profile.accent} strokeWidth="4" />
            <path d={profile.rightPath} fill="none" stroke="#0f766e" strokeWidth="4" opacity="0.8" />
            <circle cx="140" cy="86" r="5" fill="#c2410c" />
            <text x="50" y="40" className="appendix-e-svg-label">direction 1</text>
            <text x="168" y="40" className="appendix-e-svg-label">direction 2</text>
            <text x="84" y="158" className="appendix-e-svg-label">δJ = 0 at the stationary point</text>
          </svg>
        </div>

        <div className="appendix-e-matrix-card">
          <div className="appendix-e-panel-title">Stability readout</div>
          <div className="appendix-e-matrix-grid">
            <div className="appendix-e-matrix-cell accent-teal">
              <strong>type</strong>
              <span>{profile.title}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-orange">
              <strong>second variation</strong>
              <span>{profile.left}, {profile.right}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-indigo">
              <strong>interpretation</strong>
              <span>{profile.description}</span>
            </div>
            <div className="appendix-e-matrix-cell accent-slate">
              <strong>Legendre/Jacobi</strong>
              <span>further tests refine whether the extremal really minimizes</span>
            </div>
          </div>

          <div className="appendix-e-mini-plot">
            <div className="appendix-e-mini-plot-title">Stationary profile near ε = 0</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Stationary profile plot">
              <line x1="32" y1="124" x2="248" y2="124" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="140" y1="20" x2="140" y2="138" stroke="#cbd5e1" strokeWidth="2" />
              {mode === 'minimum' && (
                <path d="M 44 116 C 80 88, 114 60, 140 52 C 166 60, 200 88, 236 116" fill="none" stroke="#0f766e" strokeWidth="4" />
              )}
              {mode === 'saddle' && (
                <>
                  <path d="M 44 116 C 80 92, 114 76, 140 72 C 166 76, 200 92, 236 116" fill="none" stroke="#7c3aed" strokeWidth="4" />
                  <path d="M 44 72 C 80 92, 114 108, 140 112 C 166 108, 200 92, 236 72" fill="none" stroke="#c2410b" strokeWidth="4" />
                </>
              )}
              {mode === 'maximum' && (
                <path d="M 44 52 C 80 80, 114 108, 140 114 C 166 108, 200 80, 236 52" fill="none" stroke="#c2410b" strokeWidth="4" />
              )}
              <circle cx="140" cy="86" r="5" fill={profile.accent} />
              <text x="40" y="150" className="appendix-e-svg-label">ε</text>
              <text x="150" y="34" className="appendix-e-svg-label">J</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-e-lab-notes">
        <div className="appendix-e-note">
          <strong>What to look for:</strong> zero first variation only says the slope vanishes.
        </div>
        <div className="appendix-e-note">
          <strong>Why it matters:</strong> the second variation decides whether the stationary
          function is truly stable.
        </div>
      </div>
    </article>
  )
}

function AppendixEVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-e-visual-suite">
      {blocks.map((block) => {
        if (block.type === 'markdown') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 2 && <AppendixEVariationDemo />}
            {block.number === 3 && <AppendixEEulerLagrangeDemo />}
            {block.number === 6 && <AppendixEShortestCurveDemo />}
            {block.number === 16 && <AppendixEVariationStabilityDemo />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixEVisualizationSuite
