import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixBVisualizationSuite.css'

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
    <section className="appendix-b-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function AppendixBCoordinateDemo() {
  const [skew, setSkew] = useState(36)
  const normalized = skew / 100
  const stretchX = 1 + normalized * 0.65
  const stretchY = 1 + (1 - normalized) * 0.35

  const transformedPath = `M 72 164 L ${170 + 22 * normalized} ${164 - 18 * normalized} L ${170 + 22 * normalized} ${76 + 20 * normalized}`

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Charts and coordinates</span>
          <h3>Different coordinates can describe the same geometric object</h3>
        </div>
        <label className="appendix-b-inline-control">
          Coordinate skew: {skew}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={skew}
            onChange={(e) => setSkew(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-b-lab-intro">
        Section 7 explains that charts are only local labels. The tangent basis changes with
        the coordinates, but the geometric point and its vector space do not.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Two coordinate grids, one patch</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Coordinate chart transformation">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <g transform="translate(112 132)">
              <rect x="-70" y="-70" width="140" height="140" fill="none" stroke="#0f766e" strokeWidth="2" opacity="0.7" />
              <path d={`M -56 0 L 56 0 M 0 -56 L 0 56`} stroke="#0f766e" strokeWidth="1.5" opacity="0.6" />
              <path d={`M ${-56 * stretchX} ${-42 * normalized} L ${56 * stretchX} ${42 * normalized}`} stroke="#0f766e" strokeWidth="2" opacity="0.7" />
              <path d={`M ${-56 * normalized} ${-56 * stretchY} L ${56 * normalized} ${56 * stretchY}`} stroke="#0f766e" strokeWidth="2" opacity="0.7" />
              <circle cx="0" cy="0" r="6" fill="#0f766e" />
            </g>
            <g transform="translate(336 132) rotate(-16)">
              <rect x="-70" y="-70" width="140" height="140" fill="none" stroke="#c2410c" strokeWidth="2" opacity="0.7" />
              <path d={`M -56 0 L 56 0 M 0 -56 L 0 56`} stroke="#c2410c" strokeWidth="1.5" opacity="0.6" />
              <path d={`M ${-56 * stretchX} ${-42 * normalized} L ${56 * stretchX} ${42 * normalized}`} stroke="#c2410c" strokeWidth="2" opacity="0.7" />
              <path d={`M ${-56 * normalized} ${-56 * stretchY} L ${56 * normalized} ${56 * stretchY}`} stroke="#c2410c" strokeWidth="2" opacity="0.7" />
              <circle cx="0" cy="0" r="6" fill="#c2410c" />
            </g>
            <text x="72" y="58" className="appendix-b-svg-label">chart x</text>
            <text x="308" y="58" className="appendix-b-svg-label">chart y</text>
            <text x="92" y="224" className="appendix-b-svg-label">same point, different coordinate labels</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Basis transformation</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>basis in chart x</strong>
              <span>∂/∂x¹, ∂/∂x²</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>basis in chart y</strong>
              <span>∂/∂y¹, ∂/∂y²</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>Jacobian effect</strong>
              <span>basis vectors rotate and stretch with the map</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>core lesson</strong>
              <span>the object stays fixed while components change</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Coordinate change readout</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Coordinate basis readout">
              <line x1="32" y1="128" x2="248" y2="128" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="140" y1="20" x2="140" y2="136" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 56 110 L 140 60 L 222 84" fill="none" stroke="#0f766e" strokeWidth="4" />
              <path d={transformedPath} fill="none" stroke="#c2410c" strokeWidth="4" />
              <circle cx="140" cy="60" r="5" fill="#7c3aed" />
              <text x="40" y="150" className="appendix-b-svg-label">x</text>
              <text x="150" y="34" className="appendix-b-svg-label">basis</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> the coordinate grid changes, but the geometric
          content does not.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> this is the entry point to tensor calculus on manifolds.
        </div>
      </div>
    </article>
  )
}

function AppendixBTangentDemo() {
  const [slope, setSlope] = useState(40)
  const normalized = slope / 100
  const tangentSlope = 0.4 + normalized * 1.4
  const pointX = 148
  const pointY = 118
  const tangentLength = 92
  const x1 = pointX - tangentLength
  const y1 = pointY + tangentSlope * tangentLength * 0.55
  const x2 = pointX + tangentLength
  const y2 = pointY - tangentSlope * tangentLength * 0.55

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Tangent and cotangent spaces</span>
          <h3>A tangent vector differentiates, and a covector measures that directional change</h3>
        </div>
        <label className="appendix-b-inline-control">
          Directional slope: {slope}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={slope}
            onChange={(e) => setSlope(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-b-lab-intro">
        Section 8 defines tangent vectors as derivations, and section 9 turns the differential
        of a function into a covector. The same local arrow can either push a function forward
        or be measured by a 1-form.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Directional derivative at a point</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Tangent vector and differential">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 62 184 C 112 132, 146 74, 188 76 C 232 78, 260 148, 310 144 C 350 140, 380 106, 410 72" fill="none" stroke="#0f766e" strokeWidth="4" />
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" />
            <circle cx={pointX} cy={pointY} r="6" fill="#7c3aed" />
            <path d={`M ${pointX} ${pointY} L ${pointX + 52} ${pointY - 16}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
            <text x="72" y="56" className="appendix-b-svg-label">f(x)</text>
            <text x="286" y="56" className="appendix-b-svg-label">v = vⁱ ∂/∂xⁱ</text>
            <text x="96" y="224" className="appendix-b-svg-label">the tangent vector acts as a directional derivative</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Tangent / covector readout</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>tangent action</strong>
              <span>v(f) = df(v)</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>covector</strong>
              <span>df = ∂f/∂xⁱ dxⁱ</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>direction</strong>
              <span>{tangentSlope.toFixed(2)} local slope units</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>dual picture</strong>
              <span>vectors push along motion; covectors test that motion</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Function change along v</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Directional derivative readout">
              <line x1="32" y1="124" x2="248" y2="124" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="44" y1="132" x2="44" y2="28" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 54 118 C 92 100, 118 74, 138 60 C 160 44, 198 38, 232 50" fill="none" stroke="#0f766e" strokeWidth="4" />
              <circle cx="138" cy="60" r="5" fill="#c2410b" />
              <path d={`M 138 60 L ${170 + 32 * normalized} ${40 - 18 * normalized}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
              <text x="40" y="150" className="appendix-b-svg-label">df(v)</text>
              <text x="146" y="34" className="appendix-b-svg-label">1-form</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> the same geometric data can be viewed as a vector,
          a directional derivative, or a 1-form depending on the slot you are filling.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> tangent and cotangent spaces are the algebraic base
          layer for everything that follows.
        </div>
      </div>
    </article>
  )
}

function AppendixBMetricDemo() {
  const [stretch, setStretch] = useState(44)
  const normalized = stretch / 100
  const metricA = 0.8 + normalized * 1.1
  const metricB = 1.4 - normalized * 0.6
  const lowered = metricA * 0.75
  const raised = lowered / metricB

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Metric tensor</span>
          <h3>The metric tells vectors how long they are and converts vectors to covectors</h3>
        </div>
        <label className="appendix-b-inline-control">
          Metric stretch: {stretch}
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

      <p className="appendix-b-lab-intro">
        Section 12 defines the metric, and section 13 uses it to lower and raise indices.
        The same geometric data appears as either a vector or a covector depending on how
        the metric is applied.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Metric ellipse and index change</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Metric and index raising lowering">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <ellipse cx="150" cy="132" rx={44 + 18 * normalized} ry={72 - 16 * normalized} fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="4" />
            <path d="M 150 132 L 224 96" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <path d="M 150 132 L 104 68" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" />
            <path d="M 294 132 L 370 96" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
            <circle cx="150" cy="132" r="6" fill="#0f766e" />
            <text x="82" y="56" className="appendix-b-svg-label">g(v, w)</text>
            <text x="286" y="56" className="appendix-b-svg-label">vᵢ = gᵢⱼ vʲ</text>
            <text x="86" y="224" className="appendix-b-svg-label">metric deforms the unit circle into an ellipse</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Raise / lower readout</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>metric scale g₁₁</strong>
              <span>{metricA.toFixed(2)}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>metric scale g₂₂</strong>
              <span>{metricB.toFixed(2)}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>lowered component</strong>
              <span>{lowered.toFixed(2)}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>raised component</strong>
              <span>{raised.toFixed(2)}</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Length from the metric</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Metric length readout">
              <line x1="32" y1="124" x2="248" y2="124" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="140" y1="22" x2="140" y2="136" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 54 120 C 92 82, 122 56, 140 48 C 164 56, 196 84, 228 120" fill="none" stroke="#0f766e" strokeWidth="4" />
              <circle cx={140 + 54 * normalized} cy={84 - 34 * normalized} r="6" fill="#c2410c" />
              <text x="42" y="150" className="appendix-b-svg-label">|v|² = gᵢⱼ vᵢ vⱼ</text>
              <text x="150" y="34" className="appendix-b-svg-label">g</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> the metric is the geometric data that makes lengths
          and angles meaningful.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> lowering and raising indices is not notation; it is
          geometry doing work.
        </div>
      </div>
    </article>
  )
}

function AppendixBConnectionDemo() {
  const [strength, setStrength] = useState(46)
  const normalized = strength / 100
  const gamma = 0.08 + 0.9 * normalized
  const rotation = 8 + 38 * normalized
  const arrowX = 106 + 62 * normalized
  const arrowY = 132 - 40 * normalized

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Connections and covariant derivatives</span>
          <h3>A connection corrects ordinary derivatives so vectors transform geometrically</h3>
        </div>
        <label className="appendix-b-inline-control">
          Connection strength: {strength}
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

      <p className="appendix-b-lab-intro">
        Section 15 introduces covariant differentiation, and section 16 shows that the
        Levi-Civita connection is the unique torsion-free, metric-compatible choice.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Vector field dragged through a curved chart</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Connection and covariant derivative">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d="M 80 168 C 136 132, 190 104, 250 96 C 312 88, 360 112, 408 156" fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="136" cy="128" r="16" fill="rgba(124, 58, 237, 0.1)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 136 128 L ${arrowX} ${arrowY}`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 228 112 L ${228 + 56 * normalized} ${112 - 28 * normalized}`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
            <text x="72" y="56" className="appendix-b-svg-label">∇ᵢ Yᵏ = ∂ᵢYᵏ + Γᵏᵢⱼ Yʲ</text>
            <text x="304" y="56" className="appendix-b-svg-label">Γ corrects the raw derivative</text>
            <text x="92" y="224" className="appendix-b-svg-label">transport changes the arrow in a way a plain derivative misses</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Connection readout</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>Christoffel scale</strong>
              <span>{gamma.toFixed(2)}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>rotation correction</strong>
              <span>{rotation.toFixed(1)}°</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>torsion-free</strong>
              <span>Γᵏᵢⱼ = Γᵏⱼᵢ in a coordinate basis</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>metric-compatible</strong>
              <span>the connection preserves inner products</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Ordinary vs covariant derivative</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Covariant derivative readout">
              <rect x="30" y="28" width="220" height="104" rx="16" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <path d={`M 70 112 L 138 ${86 - 26 * normalized} L 208 ${112 - 8 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
              <path d={`M 70 112 L 140 ${104 - 36 * normalized} L 212 ${78 - 20 * normalized}`} fill="none" stroke="#c2410b" strokeWidth="4" />
              <circle cx="140" cy={104 - 36 * normalized} r="5" fill="#7c3aed" />
              <text x="44" y="150" className="appendix-b-svg-label">∂Y and ∇Y differ by Γ</text>
              <text x="148" y="36" className="appendix-b-svg-label">covariant correction</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> the connection tells you how to compare vectors
          at different points without falling back on coordinates.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> this is the bridge from tensor components to geometry
          on a curved manifold.
        </div>
      </div>
    </article>
  )
}

function AppendixBGeodesicDemo() {
  const [curvature, setCurvature] = useState(40)
  const normalized = curvature / 100
  const pathLift = 18 + 66 * normalized
  const transportAngle = 10 + 48 * normalized
  const geodesicPath = `M 72 160 C 130 ${160 - pathLift}, 202 ${84 + 10 * normalized}, 408 128`

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Geodesics and parallel transport</span>
          <h3>Curvature bends geodesics and rotates transported vectors</h3>
        </div>
        <label className="appendix-b-inline-control">
          Curvature strength: {curvature}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={curvature}
            onChange={(e) => setCurvature(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-b-lab-intro">
        Sections 17 and 18 make the geometric meaning of a connection concrete. A geodesic
        is the straightest possible path, and parallel transport tests whether the space is flat.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Geodesic on a curved patch</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Geodesic and parallel transport">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 74 164 C 128 132, 180 96, 232 92 C 290 88, 338 112, 408 156" fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <path d={geodesicPath} fill="none" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" />
            <path d={`M 230 104 L ${246 + 4 * normalized} ${72 + 8 * normalized}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
            <text x="82" y="58" className="appendix-b-svg-label">geodesic</text>
            <text x="308" y="58" className="appendix-b-svg-label">transported vector</text>
            <text x="98" y="224" className="appendix-b-svg-label">curvature deflects the path and twists the arrow</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Transport diagnostics</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>geodesic bend</strong>
              <span>{(pathLift / 10).toFixed(2)}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>transport rotation</strong>
              <span>{transportAngle.toFixed(1)}°</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>flat limit</strong>
              <span>straight line and no net rotation</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>curved space</strong>
              <span>path dependence reveals the connection</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Loop rotation</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Parallel transport loop">
              <rect x="36" y="28" width="208" height="104" rx="18" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <path d={`M 80 104 L 200 104 L 200 56 L 80 56 Z`} fill="none" stroke="#0f766e" strokeWidth="4" />
              <path d={`M 140 104 L ${164 + 16 * normalized} ${82 - 18 * normalized}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" />
              <circle cx="140" cy="104" r="5" fill="#7c3aed" />
              <text x="52" y="150" className="appendix-b-svg-label">closed loop</text>
              <text x="152" y="38" className="appendix-b-svg-label">rotation after transport</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> parallel transport keeps a vector as constant as the
          connection allows, but a loop can still produce a mismatch.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> geodesics and transport are the practical faces of
          covariant differentiation.
        </div>
      </div>
    </article>
  )
}

function AppendixBNormalCoordinatesDemo() {
  const [radius, setRadius] = useState(42)
  const normalized = radius / 100
  const flatten = 1 - normalized * 0.7
  const curvature = normalized * 0.95

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Normal coordinates</span>
          <h3>At one point the metric looks flat, but curvature survives in second order</h3>
        </div>
        <label className="appendix-b-inline-control">
          Distance from point p: {radius}
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

      <p className="appendix-b-lab-intro">
        Section 19 says that normal coordinates flatten the metric to first order at a chosen
        point. Section 20 then explains why curvature still shows up once you move away from p.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Local flatness at p</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Normal coordinates and local flatness">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 84 176 C 126 ${154 - 12 * normalized}, 180 ${110 - 10 * normalized}, 240 ${118 - 2 * normalized} C 300 ${126 + 10 * normalized}, 352 ${162 + 14 * normalized}, 400 ${150 + 10 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 74 ${160 - 24 * flatten} L 408 ${160 - 24 * flatten}`} stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 6" />
            <path d={`M 240 118 L 240 70`} stroke="#c2410b" strokeWidth="5" strokeLinecap="round" />
            <circle cx="240" cy="118" r="8" fill="#7c3aed" />
            <text x="82" y="58" className="appendix-b-svg-label">g(p)=δ and Γ(p)=0</text>
            <text x="300" y="58" className="appendix-b-svg-label">flat to first order</text>
            <text x="100" y="224" className="appendix-b-svg-label">curvature enters in the second-order deformation away from p</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Local geometry readout</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>metric at p</strong>
              <span>δᵢⱼ</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>connection at p</strong>
              <span>Γᵏᵢⱼ(p) = 0</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>first order</strong>
              <span>locally Euclidean around the chosen point</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>second order</strong>
              <span>curvature factor {curvature.toFixed(2)} shows up as you move away from p</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Curvature increases with radius</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Normal coordinate curvature plot">
              <line x1="32" y1="124" x2="248" y2="124" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="140" y1="20" x2="140" y2="136" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M 44 120 C 82 110, 114 94, 140 80 C 166 66, 202 48, 236 36" fill="none" stroke="#0f766e" strokeWidth="4" />
              <circle cx={140 + 72 * normalized} cy={80 - 44 * normalized} r="5" fill="#c2410b" />
              <text x="40" y="150" className="appendix-b-svg-label">second-order deviation</text>
              <text x="150" y="34" className="appendix-b-svg-label">K</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> the grid straightens around the chosen point, but
          the surface does not become globally flat.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> normal coordinates separate local flatness from real
          curvature.
        </div>
      </div>
    </article>
  )
}

function AppendixBCurvatureDemo() {
  const [mode, setMode] = useState('sphere')

  const profiles = {
    plane: {
      title: 'flat plane',
      curve: 'M 68 160 C 116 160, 168 160, 412 160',
      surface: '#0f766e',
      curvature: '0',
      note: 'intrinsic and extrinsic curvature are both zero'
    },
    sphere: {
      title: 'sphere',
      curve: 'M 68 164 C 122 122, 178 88, 236 88 C 292 88, 346 122, 412 164',
      surface: '#c2410c',
      curvature: 'positive',
      note: 'geodesics converge and Gaussian curvature is positive'
    },
    saddle: {
      title: 'saddle surface',
      curve: 'M 68 164 C 122 126, 178 100, 236 108 C 292 118, 346 144, 412 152',
      surface: '#7c3aed',
      curvature: 'negative',
      note: 'intrinsic curvature is negative even if the surface bends both ways'
    }
  }

  const profile = profiles[mode]

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Intrinsic vs extrinsic curvature</span>
          <h3>Curvature is an intrinsic property, not just a picture of bending in space</h3>
        </div>
        <label className="appendix-b-inline-control">
          Surface type
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="plane">Plane</option>
            <option value="sphere">Sphere</option>
            <option value="saddle">Saddle</option>
          </select>
        </label>
      </div>

      <p className="appendix-b-lab-intro">
        Sections 24 and 25 separate Gaussian curvature from extrinsic bending. The surface
        may sit in space in a visually dramatic way, but the intrinsic metric is what determines
        the real curvature.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Surface comparison</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Intrinsic and extrinsic curvature comparison">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={profile.curve} fill="none" stroke={profile.surface} strokeWidth="5" strokeLinecap="round" />
            <circle cx="238" cy="100" r="34" fill="rgba(124, 58, 237, 0.12)" stroke="#7c3aed" strokeWidth="3" />
            <path d="M 238 100 L 288 74" stroke="#c2410c" strokeWidth="5" strokeLinecap="round" />
            <path d="M 238 100 L 202 58" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <text x="74" y="58" className="appendix-b-svg-label">{profile.title}</text>
            <text x="276" y="58" className="appendix-b-svg-label">principal curvatures</text>
            <text x="94" y="224" className="appendix-b-svg-label">Gaussian curvature is read from the metric</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Curvature readout</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>surface</strong>
              <span>{profile.title}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>Gaussian curvature</strong>
              <span>{profile.curvature}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>intrinsic test</strong>
              <span>{profile.note}</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>extrinsic view</strong>
              <span>the embedding can bend without changing intrinsic flatness</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Geodesic triangle angle sum</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Geodesic triangle and curvature">
              <polygon
                points={mode === 'plane' ? '68,120 140,52 212,120' : mode === 'sphere' ? '74,126 140,54 206,126' : '68,124 140,70 216,118'}
                fill="rgba(15, 118, 110, 0.08)"
                stroke="#0f766e"
                strokeWidth="4"
              />
              <text x="40" y="150" className="appendix-b-svg-label">angle sum</text>
              <text x="160" y="34" className="appendix-b-svg-label">
                {mode === 'plane' ? 'π' : mode === 'sphere' ? '&gt; π' : '&lt; π'}
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> the same geometric language explains flat, positively
          curved, and negatively curved spaces.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> intrinsic curvature is what survives coordinate change
          and captures the real geometry.
        </div>
      </div>
    </article>
  )
}

function AppendixBFormsDemo() {
  const [flux, setFlux] = useState(48)
  const normalized = flux / 100
  const wedgeSize = 0.22 + normalized * 0.88
  const boundarySize = 0.18 + normalized * 0.95

  return (
    <article className="appendix-b-lab">
      <div className="appendix-b-lab-header">
        <div>
          <span className="appendix-b-kicker">Differential forms and Stokes</span>
          <h3>Exterior derivatives turn local circulation into boundary flux</h3>
        </div>
        <label className="appendix-b-inline-control">
          Form flux: {flux}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={flux}
            onChange={(e) => setFlux(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-b-lab-intro">
        Sections 29 through 31 introduce 1-forms, the exterior derivative, and Stokes&apos;
        theorem. These are the intrinsic tools that make integration on manifolds work cleanly.
      </p>

      <div className="appendix-b-dual-panel">
        <div className="appendix-b-svg-card">
          <div className="appendix-b-panel-title">Oriented area and exterior derivative</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Differential forms and Stokes theorem">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={`M 112 78 L 352 78 L 352 182 L 112 182 Z`} fill="rgba(15, 118, 110, ${0.08 + 0.14 * normalized})" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 112 78 L 352 182`} stroke="#c2410b" strokeWidth="4" strokeLinecap="round" />
            <path d={`M 352 78 L 112 182`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
            <text x="84" y="58" className="appendix-b-svg-label">ω</text>
            <text x="282" y="58" className="appendix-b-svg-label">dω</text>
            <text x="108" y="224" className="appendix-b-svg-label">oriented area is built into the wedge product</text>
          </svg>
        </div>

        <div className="appendix-b-matrix-card">
          <div className="appendix-b-panel-title">Forms and Stokes readout</div>
          <div className="appendix-b-matrix-grid">
            <div className="appendix-b-matrix-cell accent-teal">
              <strong>1-form</strong>
              <span>ω = ωᵢ dxⁱ</span>
            </div>
            <div className="appendix-b-matrix-cell accent-orange">
              <strong>exterior derivative</strong>
              <span>dω = (∂ᵢωⱼ - ∂ⱼωᵢ) dxⁱ ∧ dxʲ / 2</span>
            </div>
            <div className="appendix-b-matrix-cell accent-indigo">
              <strong>wedge size</strong>
              <span>{wedgeSize.toFixed(2)} oriented area units</span>
            </div>
            <div className="appendix-b-matrix-cell accent-slate">
              <strong>Stokes</strong>
              <span>∫_M dω = ∫_∂M ω over a boundary span of {boundarySize.toFixed(2)}</span>
            </div>
          </div>

          <div className="appendix-b-mini-plot">
            <div className="appendix-b-mini-plot-title">Boundary circulation</div>
            <svg viewBox="0 0 280 160" role="img" aria-label="Boundary circulation readout">
              <rect x="62" y="34" width="156" height="92" rx="16" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <path d={`M 82 ${88 - 12 * normalized} L 198 ${88 - 12 * normalized}`} stroke="#0f766e" strokeWidth="4" />
              <path d={`M 198 ${88 - 12 * normalized} L 198 ${120 + 14 * normalized}`} stroke="#c2410b" strokeWidth="4" />
              <path d={`M 198 ${120 + 14 * normalized} L 82 ${120 + 14 * normalized}`} stroke="#7c3aed" strokeWidth="4" />
              <path d={`M 82 ${120 + 14 * normalized} L 82 ${88 - 12 * normalized}`} stroke="#0f766e" strokeWidth="4" />
              <text x="44" y="150" className="appendix-b-svg-label">boundary ∂M</text>
              <text x="154" y="34" className="appendix-b-svg-label">flux grows with area</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="appendix-b-lab-notes">
        <div className="appendix-b-note">
          <strong>What to look for:</strong> a form stores oriented local data, and the exterior
          derivative packages its infinitesimal circulation.
        </div>
        <div className="appendix-b-note">
          <strong>Why it matters:</strong> Stokes&apos; theorem is the bridge between local geometry
          and boundary measurements.
        </div>
      </div>
    </article>
  )
}

function AppendixBVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-b-visual-suite">
      {blocks.map((block) => {
        if (block.type === 'markdown') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 7 && <AppendixBCoordinateDemo />}
            {block.number === 9 && <AppendixBTangentDemo />}
            {block.number === 13 && <AppendixBMetricDemo />}
            {block.number === 16 && <AppendixBConnectionDemo />}
            {block.number === 18 && <AppendixBGeodesicDemo />}
            {block.number === 19 && <AppendixBNormalCoordinatesDemo />}
            {block.number === 25 && <AppendixBCurvatureDemo />}
            {block.number === 31 && <AppendixBFormsDemo />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixBVisualizationSuite
