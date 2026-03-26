import { useMemo, useState } from 'react'
import './Chapter12VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter12PotentialDemo() {
  const [mass, setMass] = useState(54)
  const normalized = mass / 100
  const potentialGradient = 0.25 + normalized * 1.1
  const tidalCurvature = 0.2 + normalized * 0.95

  return (
    <article className="chapter12-lab" id="newtonian-potential">
      <div className="chapter12-lab-header">
        <div>
          <span className="chapter12-lab-kicker">Newtonian potential</span>
          <h3>The potential becomes a spacetime connection with tidal curvature</h3>
        </div>
        <label className="chapter12-inline-control">
          Mass density: {mass}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={mass}
            onChange={(e) => setMass(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter12-lab-intro">
        Chapter 12 reads the Newtonian force law as a geodesic equation with{' '}
        <code>Γ^j_00 = Φ_,j</code>, so the field becomes a connection and its second
        derivatives become tidal curvature.
      </p>

      <div className="chapter12-dual-panel">
        <div className="chapter12-svg-card">
          <div className="chapter12-panel-title">Potential well to curvature field</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Potential well and tidal arrows">
            <defs>
              <marker id="chapter12PotentialHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 92 92 C 150 ${70 - 14 * normalized}, 208 ${64 - 10 * normalized}, 240 ${138 - 4 * normalized} C 272 ${212 + 12 * normalized}, 330 ${194 + 14 * normalized}, 388 ${168 + 8 * normalized}`} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="240" cy="138" r={26 + 8 * normalized} fill="rgba(124, 58, 237, 0.16)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 240 84 L 240 ${66 - 16 * tidalCurvature}`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12PotentialHead)" />
            <path d={`M 240 192 L 240 ${210 + 16 * tidalCurvature}`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12PotentialHead)" />
            <path d={`M 192 138 L ${172 - 18 * tidalCurvature} 138`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12PotentialHead)" />
            <path d={`M 288 138 L ${308 + 18 * tidalCurvature} 138`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12PotentialHead)" />
            <text x="80" y="58" className="chapter12-svg-label">Φ determines the connection</text>
            <text x="118" y="214" className="chapter12-svg-label">tidal curvature comes from second derivatives</text>
          </svg>
        </div>

        <div className="chapter12-matrix-card">
          <div className="chapter12-panel-title">Geometric dictionary</div>
          <div className="chapter12-matrix-grid">
            <div className="chapter12-matrix-cell accent-teal">
              <strong>{'Γ^j_{00}'}</strong>
              <span>{formatSigned(potentialGradient)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-orange">
              <strong>{'R^j_{0k0}'}</strong>
              <span>{formatSigned(tidalCurvature)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-indigo">
              <strong>Poisson</strong>
              <span>∇²Φ = 4πρ</span>
            </div>
            <div className="chapter12-matrix-cell accent-slate">
              <strong>Ricci</strong>
              <span>R_00 = 4πρ</span>
            </div>
          </div>
          <div className="chapter12-matrix-caption">
            <div>The same potential controls free fall, tidal curvature, and the Ricci equation.</div>
            <div>This is the Newton-Cartan version of gravity.</div>
          </div>
        </div>
      </div>

      <div className="chapter12-lab-notes">
        <div className="chapter12-note">
          <strong>What to look for:</strong> the field strength is not just a force; it is a
          connection with curvature in spacetime directions involving time.
        </div>
        <div className="chapter12-note">
          <strong>Why it matters:</strong> chapter 12 translates Newtonian gravity into the
          same geometric language used for relativity.
        </div>
      </div>
    </article>
  )
}

function Chapter12StratificationDemo() {
  const [height, setHeight] = useState(44)
  const normalized = height / 100
  const sliceSeparation = 0.2 + normalized * 0.95
  const timeFlow = 0.35 + normalized * 0.75

  return (
    <article className="chapter12-lab" id="stratification">
      <div className="chapter12-lab-header">
        <div>
          <span className="chapter12-lab-kicker">Stratified spacetime</span>
          <h3>Universal time slices spacetime into flat Euclidean space layers</h3>
        </div>
        <label className="chapter12-inline-control">
          Slice height: {height}
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

      <p className="chapter12-lab-intro">
        Each time slice is flat and Euclidean, but the full Newton-Cartan spacetime is still
        curved because time and space interact through the connection.
      </p>

      <div className="chapter12-dual-panel">
        <div className="chapter12-svg-card">
          <div className="chapter12-panel-title">Slices at fixed universal time</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Stack of flat spatial slices">
            <defs>
              <marker id="chapter12SliceHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <line x1="92" y1={184 - 10 * normalized} x2="388" y2={184 - 10 * normalized} stroke="#0f766e" strokeWidth="3" />
            <line x1="92" y1={138 - 8 * normalized} x2="388" y2={138 - 8 * normalized} stroke="#c2410c" strokeWidth="3" />
            <line x1="92" y1={92 - 6 * normalized} x2="388" y2={92 - 6 * normalized} stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 334 192 L 334 ${72 - 14 * timeFlow}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter12SliceHead)" />
            <text x="86" y="58" className="chapter12-svg-label">space slices are individually flat</text>
            <text x="126" y="214" className="chapter12-svg-label">time flow links the slices into spacetime</text>
          </svg>
        </div>

        <div className="chapter12-matrix-card">
          <div className="chapter12-panel-title">Stratification facts</div>
          <div className="chapter12-matrix-grid">
            <div className="chapter12-matrix-cell accent-teal">
              <strong>space slice</strong>
              <span>flat Euclidean geometry</span>
            </div>
            <div className="chapter12-matrix-cell accent-orange">
              <strong>universal time</strong>
              <span>the stratifying scalar field t</span>
            </div>
            <div className="chapter12-matrix-cell accent-indigo">
              <strong>slice separation</strong>
              <span>{formatSigned(sliceSeparation)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-slate">
              <strong>time flow</strong>
              <span>{formatSigned(timeFlow)}</span>
            </div>
          </div>
          <div className="chapter12-matrix-caption">
            <div>The spatial metric lives on the slices, not on full spacetime.</div>
            <div>Curvature only appears when time and space are combined.</div>
          </div>
        </div>
      </div>

      <div className="chapter12-lab-notes">
        <div className="chapter12-note">
          <strong>What to look for:</strong> the layers themselves remain flat even as the
          spacetime stack encodes gravity.
        </div>
        <div className="chapter12-note">
          <strong>Why it matters:</strong> this is the geometric signature of Newtonian
          stratification.
        </div>
      </div>
    </article>
  )
}

function Chapter12GalileanDemo() {
  const [drift, setDrift] = useState(40)
  const normalized = drift / 100
  const rotation = 0.05 + normalized * 0.18
  const translation = 0.2 + normalized * 0.9
  const potentialShift = 0.15 + normalized * 0.95

  const framePath = useMemo(
    () =>
      `M 112 184 L 330 ${176 - 8 * rotation * 100}
       M 112 184 L ${122 + 10 * translation * 10} ${94 - 18 * translation * 10}
       M 216 184 L 216 ${78 - 12 * potentialShift}`,
    [rotation, translation, potentialShift]
  )

  return (
    <article className="chapter12-lab" id="galilean-frames">
      <div className="chapter12-lab-header">
        <div>
          <span className="chapter12-lab-kicker">Galilean frames</span>
          <h3>Galilean coordinates differ by time-independent rotations and time-dependent translations</h3>
        </div>
        <label className="chapter12-inline-control">
          Frame drift: {drift}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={drift}
            onChange={(e) => setDrift(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter12-lab-intro">
        The chapter shows that the Newtonian potential is frame-dependent under Galilean
        changes, while the universal time function and covariant derivative are geometric.
      </p>

      <div className="chapter12-dual-panel">
        <div className="chapter12-svg-card">
          <div className="chapter12-panel-title">Rotating and drifting grid</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Galilean frame with rotation and translation">
            <defs>
              <marker id="chapter12FrameHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 112 184 L 360 184" stroke="#0f766e" strokeWidth="3" />
            <path d="M 216 72 L 216 224" stroke="#0f766e" strokeWidth="3" />
            <path d={framePath} fill="none" stroke="#7c3aed" strokeWidth="3" strokeDasharray="7 6" opacity="0.75" />
            <path d={`M 112 184 L ${330 - 14 * normalized} ${176 - 10 * normalized}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12FrameHead)" />
            <path d={`M 216 184 L ${216 + 44 * translation} ${86 - 18 * translation}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12FrameHead)" />
            <path d={`M 292 184 L ${292 + 16 * potentialShift} ${138 - 18 * potentialShift}`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter12FrameHead)" />
            <text x="78" y="58" className="chapter12-svg-label">only rotations + translations preserve the Galilean structure</text>
            <text x="104" y="214" className="chapter12-svg-label">Φ shifts under accelerating frames</text>
          </svg>
        </div>

        <div className="chapter12-matrix-card">
          <div className="chapter12-panel-title">Transformation facts</div>
          <div className="chapter12-matrix-grid">
            <div className="chapter12-matrix-cell accent-teal">
              <strong>rotation</strong>
              <span>{formatSigned(rotation)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-orange">
              <strong>translation</strong>
              <span>{formatSigned(translation)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-indigo">
              <strong>potential shift</strong>
              <span>{formatSigned(potentialShift)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-slate">
              <strong>frame type</strong>
              <span>Galilean</span>
            </div>
          </div>
          <div className="chapter12-matrix-caption">
            <div>Time-independent rotations and time-dependent translations preserve the class.</div>
            <div>That is why Φ is frame-dependent but t is not.</div>
          </div>
        </div>
      </div>

      <div className="chapter12-lab-notes">
        <div className="chapter12-note">
          <strong>What to look for:</strong> the frame can drift and rotate, but the Galilean
          structure is preserved only in the restricted transformation class.
        </div>
        <div className="chapter12-note">
          <strong>Why it matters:</strong> this is the Newtonian analogue of frame choice in
          relativity.
        </div>
      </div>
    </article>
  )
}

function Chapter12EquivalenceDemo() {
  const [bias, setBias] = useState(46)
  const normalized = bias / 100
  const standardStrength = 0.25 + normalized * 0.95
  const geometricStrength = 0.3 + normalized * 0.9

  return (
    <article className="chapter12-lab" id="equivalence">
      <div className="chapter12-lab-header">
        <div>
          <span className="chapter12-lab-kicker">Standard vs geometric</span>
          <h3>The Newtonian law and the Newton-Cartan axioms are the same gravity in two languages</h3>
        </div>
        <label className="chapter12-inline-control">
          Equivalence bias: {bias}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={bias}
            onChange={(e) => setBias(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter12-lab-intro">
        The chapter ends by showing that the standard Newtonian axioms and the geometric
        Cartan axioms reconstruct each other.
      </p>

      <div className="chapter12-dual-panel">
        <div className="chapter12-svg-card">
          <div className="chapter12-panel-title">Two equivalent descriptions</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Standard Newtonian law and geometric reformulation">
            <defs>
              <marker id="chapter12EquivalenceHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="82" y="72" width="128" height="120" rx="18" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="3" />
            <rect x="270" y="72" width="128" height="120" rx="18" fill="rgba(124, 58, 237, 0.12)" stroke="#7c3aed" strokeWidth="3" />
            <path d={`M 210 132 L ${258 + 20 * normalized} 132`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter12EquivalenceHead)" />
            <text x="98" y="58" className="chapter12-svg-label">standard Newton: Φ and Poisson</text>
            <text x="274" y="214" className="chapter12-svg-label">Cartan geometry: ∇, Ricci, geodesics</text>
          </svg>
        </div>

        <div className="chapter12-matrix-card">
          <div className="chapter12-panel-title">Equivalent statements</div>
          <div className="chapter12-matrix-grid">
            <div className="chapter12-matrix-cell accent-teal">
              <strong>standard law</strong>
              <span>d²x^j/dt² + Φ_,j = 0</span>
            </div>
            <div className="chapter12-matrix-cell accent-orange">
              <strong>geometric law</strong>
              <span>geodesics of ∇</span>
            </div>
            <div className="chapter12-matrix-cell accent-indigo">
              <strong>standard strength</strong>
              <span>{formatSigned(standardStrength)}</span>
            </div>
            <div className="chapter12-matrix-cell accent-slate">
              <strong>geometric strength</strong>
              <span>{formatSigned(geometricStrength)}</span>
            </div>
          </div>
          <div className="chapter12-matrix-caption">
            <div>The chapter shows the two formulations reconstruct each other exactly.</div>
            <div>The difference is language, not physical content.</div>
          </div>
        </div>
      </div>

      <div className="chapter12-lab-notes">
        <div className="chapter12-note">
          <strong>What to look for:</strong> the standard and geometric panels point to the
          same gravitational structure.
        </div>
        <div className="chapter12-note">
          <strong>Why it matters:</strong> chapter 12 is the bridge from Newtonian gravity to
          the curved-spacetime language used later.
        </div>
      </div>
    </article>
  )
}

function Chapter12VisualizationSuite() {
  return (
    <section className="chapter12-visual-suite">
      <div className="chapter12-visual-suite-header">
        <span className="chapter12-visual-suite-kicker">Chapter 12 Visualizations</span>
        <h2>Newtonian gravity recast as spacetime geometry</h2>
        <p>
          Chapter 12 turns the Newtonian potential, the Galilean frame structure, and the
          Newton-Cartan axioms into one geometric picture.
        </p>
      </div>

      <nav className="chapter12-visual-suite-nav" aria-label="Chapter 12 visualization topics">
        <a href="#newtonian-potential">Potential</a>
        <a href="#stratification">Stratification</a>
        <a href="#galilean-frames">Galilean frames</a>
        <a href="#equivalence">Equivalence</a>
      </nav>

      <Chapter12PotentialDemo />
      <Chapter12StratificationDemo />
      <Chapter12GalileanDemo />
      <Chapter12EquivalenceDemo />
    </section>
  )
}

export default Chapter12VisualizationSuite
