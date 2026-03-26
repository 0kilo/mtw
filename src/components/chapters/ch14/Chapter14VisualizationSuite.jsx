import { useState } from 'react'
import './Chapter14VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter14MetricPipelineDemo() {
  const [roughness, setRoughness] = useState(48)
  const normalized = roughness / 100
  const metricScale = 0.35 + normalized * 1.1
  const connectionScale = 0.28 + normalized * 0.95
  const curvatureScale = 0.2 + normalized * 0.88

  return (
    <article className="chapter14-lab" id="metric-pipeline">
      <div className="chapter14-lab-header">
        <div>
          <span className="chapter14-lab-kicker">Metric to curvature pipeline</span>
          <h3>The direct route starts from the metric, then computes connection and curvature</h3>
        </div>
        <label className="chapter14-inline-control">
          Roughness: {roughness}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={roughness}
            onChange={(e) => setRoughness(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter14-lab-intro">
        Chapter 14&apos;s baseline algorithm is: metric first, then connection coefficients,
        then Riemann curvature. This is the general-purpose tensor pipeline.
      </p>

      <div className="chapter14-dual-panel">
        <div className="chapter14-svg-card">
          <div className="chapter14-panel-title">Three-step computation chain</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Metric connection curvature pipeline">
            <defs>
              <marker id="chapter14PipelineHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="78" y="88" width="84" height="96" rx="14" fill="rgba(15, 118, 110, 0.14)" stroke="#0f766e" strokeWidth="3" />
            <rect x="198" y="88" width="84" height="96" rx="14" fill="rgba(194, 65, 12, 0.14)" stroke="#c2410c" strokeWidth="3" />
            <rect x="318" y="88" width="84" height="96" rx="14" fill="rgba(124, 58, 237, 0.14)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 162 136 L ${198 - 12 * normalized} 136`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter14PipelineHead)" />
            <path d={`M 282 136 L ${318 - 12 * normalized} 136`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter14PipelineHead)" />
            <text x="96" y="60" className="chapter14-svg-label">g → Γ → R</text>
            <text x="112" y="214" className="chapter14-svg-label">compute curvature from the metric</text>
          </svg>
        </div>

        <div className="chapter14-matrix-card">
          <div className="chapter14-panel-title">Pipeline readout</div>
          <div className="chapter14-matrix-grid">
            <div className="chapter14-matrix-cell accent-teal">
              <strong>metric scale</strong>
              <span>{formatSigned(metricScale)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-orange">
              <strong>connection scale</strong>
              <span>{formatSigned(connectionScale)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-indigo">
              <strong>curvature scale</strong>
              <span>{formatSigned(curvatureScale)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-slate">
              <strong>output</strong>
              <span>Riemann, Ricci, Einstein tensors</span>
            </div>
          </div>
          <div className="chapter14-matrix-caption">
            <div>The standard method is universal but algebraically wasteful.</div>
            <div>It is the reference method for the rest of the chapter.</div>
          </div>
        </div>
      </div>

      <div className="chapter14-lab-notes">
        <div className="chapter14-note">
          <strong>What to look for:</strong> the pipeline goes from metric data to curvature
          output with no extra physical input.
        </div>
        <div className="chapter14-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s baseline computational
          recipe.
        </div>
      </div>
    </article>
  )
}

function Chapter14SurfaceDemo() {
  const [radius, setRadius] = useState(54)
  const normalized = radius / 100
  const principal1 = 0.2 + normalized * 0.95
  const principal2 = -0.1 - normalized * 0.7
  const gaussian = principal1 * principal2

  return (
    <article className="chapter14-lab" id="surface-curvature">
      <div className="chapter14-lab-header">
        <div>
          <span className="chapter14-lab-kicker">Intrinsic curvature</span>
          <h3>Surface curvature can be seen from inside the surface by circumference deficit</h3>
        </div>
        <label className="chapter14-inline-control">
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

      <p className="chapter14-lab-intro">
        Box 14.1 emphasizes intrinsic curvature: ants walking on a surface can measure
        curvature without any embedding space.
      </p>

      <div className="chapter14-dual-panel">
        <div className="chapter14-svg-card">
          <div className="chapter14-panel-title">Curved patch and tangent circle</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Curved surface patch with principal curvatures">
            <defs>
              <marker id="chapter14SurfaceHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={`M 96 176 C 146 ${108 - 12 * normalized}, 210 ${70 - 14 * normalized}, 240 ${112 - 8 * normalized} C 282 ${162 + 10 * normalized}, 332 ${194 + 12 * normalized}, 388 ${154 + 8 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="240" cy="138" r={30 + 8 * normalized} fill="rgba(124, 58, 237, 0.16)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 240 138 L ${240 + 90 * principal1} 138`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter14SurfaceHead)" />
            <path d={`M 240 138 L 240 ${138 - 78 * Math.abs(principal2)}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter14SurfaceHead)" />
            <text x="86" y="58" className="chapter14-svg-label">principal curvatures from tangent patch data</text>
            <text x="118" y="214" className="chapter14-svg-label">intrinsic geometry beats embedding shape</text>
          </svg>
        </div>

        <div className="chapter14-matrix-card">
          <div className="chapter14-panel-title">Surface diagnostics</div>
          <div className="chapter14-matrix-grid">
            <div className="chapter14-matrix-cell accent-teal">
              <strong>κ₁</strong>
              <span>{formatSigned(principal1)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-orange">
              <strong>κ₂</strong>
              <span>{formatSigned(principal2)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-indigo">
              <strong>Gaussian</strong>
              <span>{formatSigned(gaussian)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-slate">
              <strong>measurement</strong>
              <span>circumference deficit / area</span>
            </div>
          </div>
          <div className="chapter14-matrix-caption">
            <div>Curvature can be read from the intrinsic geometry of a patch.</div>
            <div>Extrinsic bending is optional; intrinsic curvature is what matters here.</div>
          </div>
        </div>
      </div>

      <div className="chapter14-lab-notes">
        <div className="chapter14-note">
          <strong>What to look for:</strong> the same surface can bend in space while its
          intrinsic curvature stays the real diagnostic.
        </div>
        <div className="chapter14-note">
          <strong>Why it matters:</strong> the chapter uses intrinsic curvature to motivate the
          2-sphere and related examples.
        </div>
      </div>
    </article>
  )
}

function Chapter14CartanDemo() {
  const [flux, setFlux] = useState(46)
  const normalized = flux / 100
  const connectionStrength = 0.25 + normalized * 0.9
  const curvatureTwoForm = 0.2 + normalized * 1.05

  return (
    <article className="chapter14-lab" id="cartan-forms">
      <div className="chapter14-lab-header">
        <div>
          <span className="chapter14-lab-kicker">Cartan 2-forms</span>
          <h3>Connection 1-forms and curvature 2-forms compress the algebra into differential forms</h3>
        </div>
        <label className="chapter14-inline-control">
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

      <p className="chapter14-lab-intro">
        Cartan&apos;s method packages the connection into 1-forms and curvature into 2-forms,
        reducing the algebraic clutter of the coordinate approach.
      </p>

      <div className="chapter14-dual-panel">
        <div className="chapter14-svg-card">
          <div className="chapter14-panel-title">Wedge-product loop</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Connection and curvature forms">
            <defs>
              <marker id="chapter14FormsHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 136 84 L 344 84 L 344 196 L 136 196 Z`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 136 84 L 344 196`} fill="none" stroke="#c2410c" strokeWidth="4" markerEnd="url(#chapter14FormsHead)" />
            <path d={`M 344 84 L 136 196`} fill="none" stroke="#7c3aed" strokeWidth="4" markerEnd="url(#chapter14FormsHead)" />
            <text x="92" y="58" className="chapter14-svg-label">ω and ℛ as differential forms</text>
            <text x="120" y="214" className="chapter14-svg-label">dω + ω∧ω = ℛ</text>
          </svg>
        </div>

        <div className="chapter14-matrix-card">
          <div className="chapter14-panel-title">Cartan readout</div>
          <div className="chapter14-matrix-grid">
            <div className="chapter14-matrix-cell accent-teal">
              <strong>connection</strong>
              <span>{formatSigned(connectionStrength)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-orange">
              <strong>curvature 2-form</strong>
              <span>{formatSigned(curvatureTwoForm)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-indigo">
              <strong>wedge product</strong>
              <span>oriented area element</span>
            </div>
            <div className="chapter14-matrix-cell accent-slate">
              <strong>benefit</strong>
              <span>less algebra, same curvature</span>
            </div>
          </div>
          <div className="chapter14-matrix-caption">
            <div>The chapter uses forms to streamline curvature calculations.</div>
            <div>This is the natural Cartan language for later computations.</div>
          </div>
        </div>
      </div>

      <div className="chapter14-lab-notes">
        <div className="chapter14-note">
          <strong>What to look for:</strong> the curvature is encoded by a compact 2-form
          rather than a huge table of components.
        </div>
        <div className="chapter14-note">
          <strong>Why it matters:</strong> Cartan&apos;s method is the algebra-saving route
          through the chapter.
        </div>
      </div>
    </article>
  )
}

function Chapter14EinsteinDemo() {
  const [density, setDensity] = useState(50)
  const normalized = density / 100
  const ricciScale = 0.24 + normalized * 1.05
  const einsteinScale = 0.18 + normalized * 0.92

  return (
    <article className="chapter14-lab" id="einstein-tensor">
      <div className="chapter14-lab-header">
        <div>
          <span className="chapter14-lab-kicker">Einstein tensor</span>
          <h3>Curvature contracts down to the Einstein tensor for field equations</h3>
        </div>
        <label className="chapter14-inline-control">
          Mass-energy density: {density}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={density}
            onChange={(e) => setDensity(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter14-lab-intro">
        The chapter shows how Riemann contracts to Ricci and then to the Einstein tensor,
        which is the object that appears in the field equations.
      </p>

      <div className="chapter14-dual-panel">
        <div className="chapter14-svg-card">
          <div className="chapter14-panel-title">Curvature contraction</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Riemann contracted to Ricci and Einstein tensors">
            <defs>
              <marker id="chapter14EinsteinHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="74" y="90" width="92" height="90" rx="14" fill="rgba(124, 58, 237, 0.14)" stroke="#7c3aed" strokeWidth="3" />
            <rect x="194" y="90" width="92" height="90" rx="14" fill="rgba(194, 65, 12, 0.14)" stroke="#c2410c" strokeWidth="3" />
            <rect x="314" y="90" width="92" height="90" rx="14" fill="rgba(15, 118, 110, 0.14)" stroke="#0f766e" strokeWidth="3" />
            <path d={`M 166 135 L ${194 - 10 * normalized} 135`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter14EinsteinHead)" />
            <path d={`M 286 135 L ${314 - 10 * normalized} 135`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter14EinsteinHead)" />
            <text x="92" y="58" className="chapter14-svg-label">Riemann → Ricci → Einstein</text>
            <text x="122" y="214" className="chapter14-svg-label">contract the local curvature data</text>
          </svg>
        </div>

        <div className="chapter14-matrix-card">
          <div className="chapter14-panel-title">Field-equation output</div>
          <div className="chapter14-matrix-grid">
            <div className="chapter14-matrix-cell accent-teal">
              <strong>Ricci scale</strong>
              <span>{formatSigned(ricciScale)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-orange">
              <strong>Einstein scale</strong>
              <span>{formatSigned(einsteinScale)}</span>
            </div>
            <div className="chapter14-matrix-cell accent-indigo">
              <strong>source</strong>
              <span>mass-energy density</span>
            </div>
            <div className="chapter14-matrix-cell accent-slate">
              <strong>equation</strong>
              <span>G_μν = 8π T_μν</span>
            </div>
          </div>
          <div className="chapter14-matrix-caption">
            <div>The contracted tensor is the compact source-side measure of curvature.</div>
            <div>This is why Einstein tensor is the useful field-equation object.</div>
          </div>
        </div>
      </div>

      <div className="chapter14-lab-notes">
        <div className="chapter14-note">
          <strong>What to look for:</strong> the output is a contracted curvature object, not
          the full Riemann tensor.
        </div>
        <div className="chapter14-note">
          <strong>Why it matters:</strong> this is the curvature object that couples naturally
          to matter-energy.
        </div>
      </div>
    </article>
  )
}

function Chapter14VisualizationSuite() {
  return (
    <section className="chapter14-visual-suite">
      <div className="chapter14-visual-suite-header">
        <span className="chapter14-visual-suite-kicker">Chapter 14 Visualizations</span>
        <h2>How curvature gets computed in practice</h2>
        <p>
          Chapter 14 is a methods chapter: it turns a metric or geometric setup into
          curvature, then compresses that curvature into useful tensors.
        </p>
      </div>

      <nav className="chapter14-visual-suite-nav" aria-label="Chapter 14 visualization topics">
        <a href="#metric-pipeline">Metric pipeline</a>
        <a href="#surface-curvature">Surface curvature</a>
        <a href="#cartan-forms">Cartan forms</a>
        <a href="#einstein-tensor">Einstein tensor</a>
      </nav>

      <Chapter14MetricPipelineDemo />
      <Chapter14SurfaceDemo />
      <Chapter14CartanDemo />
      <Chapter14EinsteinDemo />
    </section>
  )
}

export default Chapter14VisualizationSuite
