import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixGVisualizationSuite.css'

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
    <section className="appendix-g-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function AppendixGWavefunctionDemo() {
  const [spread, setSpread] = useState(42)
  const normalized = spread / 100
  const sigma = 0.14 + 0.26 * normalized
  const current = 0.12 + 0.55 * normalized

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">State, probability, and current</span>
          <h3>The wavefunction is an amplitude; probability comes from its magnitude squared</h3>
        </div>
        <label className="appendix-g-inline-control">
          Packet spread: {spread}
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

      <p className="appendix-g-lab-intro">
        Section 4 introduces the wavefunction, Born rule, normalization, expectation values,
        and probability current. This is the first place where the quantum state becomes a
        probabilistic object rather than a classical trajectory.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Wave packet and probability density</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Quantum wave packet">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 72 168 C 120 ${168 - 72 * normalized}, 164 ${96 - 40 * normalized}, 240 ${92 - 20 * normalized} C 310 ${96 - 40 * normalized}, 360 ${168 - 72 * normalized}, 408 168`} fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 72 168 C 120 ${168 - 34 * normalized}, 164 ${136 - 20 * normalized}, 240 ${132 - 12 * normalized} C 310 ${136 - 20 * normalized}, 360 ${168 - 34 * normalized}, 408 168`} fill="none" stroke="#c2410c" strokeWidth="5" opacity="0.85" />
            <path d={`M 72 136 C 126 ${136 - 20 * normalized}, 180 ${112 - 12 * normalized}, 240 ${104 - 8 * normalized} C 300 ${112 - 12 * normalized}, 354 ${136 - 20 * normalized}, 408 136`} fill="none" stroke="#7c3aed" strokeWidth="4" />
            <text x="82" y="58" className="appendix-g-svg-label">ψ(x,t)</text>
            <text x="282" y="58" className="appendix-g-svg-label">|ψ|²</text>
            <text x="92" y="224" className="appendix-g-svg-label">a localized packet is built from many waves</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Probability readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>normalization</strong>
              <span>∫|ψ|² dx = 1</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>packet width</strong>
              <span>{sigma.toFixed(2)} relative units</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>probability current</strong>
              <span>{current.toFixed(2)} flow units</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>expectation value</strong>
              <span>⟨Q⟩ = ⟨ψ|Q̂|ψ⟩</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> the wavefunction itself is not a direct classical
          observable.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> quantum mechanics starts with amplitudes, and
          probabilities emerge from them.
        </div>
      </div>
    </article>
  )
}

function AppendixGSchrodingerDemo() {
  const [energy, setEnergy] = useState(48)
  const normalized = energy / 100
  const hamiltonianScale = 0.8 + 1.4 * normalized
  const phaseRate = 0.4 + 1.4 * normalized

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Schrödinger evolution</span>
          <h3>The Hamiltonian tells the wavefunction how to evolve in time</h3>
        </div>
        <label className="appendix-g-inline-control">
          Energy scale: {energy}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={energy}
            onChange={(e) => setEnergy(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Section 5 presents the time-dependent Schrödinger equation and the Hamiltonian operator.
        A single linear evolution law sits behind propagation, binding, and interference.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Hamiltonian flow</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Schrodinger equation time evolution">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="82" y="94" width="118" height="72" rx="12" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="4" />
            <rect x="278" y="94" width="118" height="72" rx="12" fill="rgba(194, 65, 12, 0.12)" stroke="#c2410c" strokeWidth="4" />
            <path d={`M 200 130 L ${278 - 20 * normalized} 130`} stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="98" y="58" className="appendix-g-svg-label">iħ ∂ψ/∂t = Ĥψ</text>
            <text x="286" y="58" className="appendix-g-svg-label">Ĥ = T̂ + V̂</text>
            <text x="96" y="214" className="appendix-g-svg-label">phase rotates while the state evolves linearly</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Evolution readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>Hamiltonian scale</strong>
              <span>{hamiltonianScale.toFixed(2)}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>phase rate</strong>
              <span>{phaseRate.toFixed(2)}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>core law</strong>
              <span>iħ ∂ψ/∂t = Ĥψ</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>the state evolves, but the equation is linear</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> the Hamiltonian is the total-energy operator.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> the Schrödinger equation is the dynamical backbone of
          the whole subject.
        </div>
      </div>
    </article>
  )
}

function AppendixGBoundaryDemo() {
  const [mode, setMode] = useState('well')
  const profiles = {
    well: {
      title: 'infinite well',
      accent: '#0f766e',
      note: 'boundary conditions quantize energy and force nodes'
    },
    harmonic: {
      title: 'harmonic oscillator',
      accent: '#c2410c',
      note: 'equally spaced levels and zero-point energy'
    },
    delta: {
      title: 'delta well',
      accent: '#7c3aed',
      note: 'even singular potentials can bind states'
    },
    free: {
      title: 'free particle',
      accent: '#475569',
      note: 'momentum eigenstates are delocalized plane waves'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Stationary states and one-dimensional systems</span>
          <h3>Boundary conditions select the allowed states and their energies</h3>
        </div>
        <label className="appendix-g-inline-control">
          System
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="well">Infinite square well</option>
            <option value="harmonic">Harmonic oscillator</option>
            <option value="delta">Delta-function well</option>
            <option value="free">Free particle</option>
          </select>
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Section 7 collects the first big family of exact solutions. The chapter teaches the
        structure of quantum mechanics by showing how wells, oscillators, and free particles
        behave under the same formalism.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Canonical one-dimensional picture</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Quantum well systems">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {mode === 'well' && (
              <>
                <path d="M 84 170 L 84 88 L 396 88 L 396 170" fill="none" stroke="#0f766e" strokeWidth="5" />
                <path d="M 110 136 C 146 88, 190 80, 240 136 C 290 192, 334 184, 370 136" fill="none" stroke="#c2410b" strokeWidth="5" />
              </>
            )}
            {mode === 'harmonic' && (
              <>
                <path d="M 76 170 C 130 88, 190 52, 240 44 C 290 52, 350 88, 404 170" fill="none" stroke="#c2410b" strokeWidth="5" />
                <path d="M 92 170 C 140 112, 194 90, 240 84 C 286 90, 340 112, 388 170" fill="none" stroke="#0f766e" strokeWidth="5" />
              </>
            )}
            {mode === 'delta' && (
              <>
                <path d="M 96 160 C 160 94, 198 82, 240 82 C 282 82, 320 94, 384 160" fill="none" stroke="#7c3aed" strokeWidth="5" />
                <line x1="240" y1="82" x2="240" y2="176" stroke="#c2410b" strokeWidth="6" />
              </>
            )}
            {mode === 'free' && (
              <>
                <path d="M 72 130 C 132 94, 192 94, 252 130 C 312 166, 372 166, 408 130" fill="none" stroke="#475569" strokeWidth="5" />
                <path d="M 72 148 C 132 112, 192 112, 252 148 C 312 184, 372 184, 408 148" fill="none" stroke="#0f766e" strokeWidth="5" opacity="0.8" />
              </>
            )}
            <text x="86" y="58" className="appendix-g-svg-label">{profile.title}</text>
            <text x="282" y="58" className="appendix-g-svg-label">stationary states</text>
            <text x="90" y="224" className="appendix-g-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">State summary</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>quantization</strong>
              <span>energy eigenvalues become discrete when boundaries constrain ψ</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>nodes</strong>
              <span>higher modes oscillate more and have more nodes</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>continuity</strong>
              <span>ψ and its derivative are typically smooth, except at singularities</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>classical limit</strong>
              <span>free waves approximate momentum states; localization needs superposition</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> the potential shape changes the allowed stationary
          patterns.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> this is where the formalism starts producing the
          familiar discrete spectra.
        </div>
      </div>
    </article>
  )
}

function AppendixGOperatorsDemo() {
  const [outcome, setOutcome] = useState('position')
  const profiles = {
    position: {
      title: 'position measurement',
      left: 'ψ(x)',
      right: 'xψ(x)',
      note: 'position acts by multiplication in the position representation'
    },
    momentum: {
      title: 'momentum measurement',
      left: 'ψ(x)',
      right: '-iħ d/dx',
      note: 'momentum is a derivative operator in position space'
    },
    dirac: {
      title: 'Dirac notation',
      left: '|ψ⟩',
      right: '⟨ψ|Q̂|ψ⟩',
      note: 'bras, kets, and sandwiches are basis-independent bookkeeping'
    }
  }
  const profile = profiles[outcome]

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Operators, observables, and measurement</span>
          <h3>Observables are Hermitian operators with real eigenvalues and measurable outcomes</h3>
        </div>
        <label className="appendix-g-inline-control">
          View
          <select value={outcome} onChange={(e) => setOutcome(e.target.value)}>
            <option value="position">Position operator</option>
            <option value="momentum">Momentum operator</option>
            <option value="dirac">Dirac notation</option>
          </select>
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Sections 9 through 11 turn the wavefunction into a vector-space object with operators,
        eigenvalues, and probabilities. The measurement postulate is the hinge between math
        and experiment.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Operator action</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Quantum operators and Dirac notation">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="88" y="92" width="124" height="76" rx="14" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="4" />
            <rect x="268" y="92" width="124" height="76" rx="14" fill="rgba(194, 65, 12, 0.12)" stroke="#c2410c" strokeWidth="4" />
            <path d="M 212 130 L 268 130" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="98" y="58" className="appendix-g-svg-label">{profile.left}</text>
            <text x="280" y="58" className="appendix-g-svg-label">{profile.right}</text>
            <text x="92" y="224" className="appendix-g-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Measurement readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>observable</strong>
              <span>Hermitian operator</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>eigenvalue</strong>
              <span>possible measurement result</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>probability</strong>
              <span>|c_n|² from the state expansion</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>collapse</strong>
              <span>the state projects into the measured eigenspace</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> operator language replaces classical variables.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> measurement outcomes are tied to eigenstructure, not
          to arbitrary numerical guesses.
        </div>
      </div>
    </article>
  )
}

function AppendixGCommutatorDemo() {
  const [spread, setSpread] = useState(38)
  const normalized = spread / 100
  const uncertainty = 0.18 + 0.72 * normalized

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Superposition, commutators, and uncertainty</span>
          <h3>Linear combinations make interference, while noncommutation limits simultaneous sharpness</h3>
        </div>
        <label className="appendix-g-inline-control">
          Packet spread: {spread}
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

      <p className="appendix-g-lab-intro">
        Sections 12 through 14 connect linearity, commutators, and uncertainty. Superposition is
        the source of interference, and noncommuting observables are the source of intrinsic
        spread.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Interference and commutator tradeoff</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Superposition and uncertainty">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 72 156 C 120 ${88 - 28 * normalized}, 160 ${88 + 14 * normalized}, 214 156`} fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 72 156 C 120 ${156 - 38 * normalized}, 164 ${124 - 20 * normalized}, 214 156`} fill="none" stroke="#c2410c" strokeWidth="5" />
            <path d={`M 260 156 C 304 ${96 - 20 * normalized}, 348 ${96 + 16 * normalized}, 392 156`} fill="none" stroke="#7c3aed" strokeWidth="5" />
            <circle cx="238" cy="126" r="20" fill="rgba(124, 58, 237, 0.12)" stroke="#7c3aed" strokeWidth="3" />
            <text x="86" y="58" className="appendix-g-svg-label">c₁ψ₁ + c₂ψ₂</text>
            <text x="286" y="58" className="appendix-g-svg-label">[x, p] = iħ</text>
            <text x="96" y="224" className="appendix-g-svg-label">more localization means more momentum spread</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Uncertainty readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>position spread</strong>
              <span>{(1 - normalized).toFixed(2)}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>momentum spread</strong>
              <span>{uncertainty.toFixed(2)}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>uncertainty bound</strong>
              <span>σ_x σ_p ≥ ħ/2</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>commutator</strong>
              <span>nonzero commutators encode incompatibility</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> narrowing one feature broadens its conjugate partner.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> uncertainty is structural, not an instrument error.
        </div>
      </div>
    </article>
  )
}

function AppendixGEhrenfestDemo() {
  const [curvature, setCurvature] = useState(44)
  const normalized = curvature / 100
  const classicalTrack = 0.16 + 0.62 * normalized

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Ehrenfest theorem and wave packets</span>
          <h3>Expectation values can follow classical equations even when the state remains quantum</h3>
        </div>
        <label className="appendix-g-inline-control">
          Packet curvature: {curvature}
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

      <p className="appendix-g-lab-intro">
        Section 15 bridges the quantum and classical pictures, while section 23 reminds you
        that free packets spread because they are built from many momenta.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Expectation-value trajectory</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Ehrenfest theorem">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d="M 80 170 C 132 132, 182 114, 240 128 C 300 142, 350 114, 400 76" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 80 ${170 - 28 * normalized} C 132 ${132 - 20 * normalized}, 182 ${114 - 18 * normalized}, 240 ${128 - 12 * normalized} C 300 ${142 - 14 * normalized}, 350 ${114 - 20 * normalized}, 400 ${76 - 24 * normalized}`} fill="none" stroke="#c2410c" strokeWidth="4" opacity="0.85" />
            <text x="82" y="58" className="appendix-g-svg-label">d⟨x⟩/dt = ⟨p⟩/m</text>
            <text x="286" y="58" className="appendix-g-svg-label">d⟨p⟩/dt = -⟨dV/dx⟩</text>
            <text x="90" y="224" className="appendix-g-svg-label">a wave packet can shadow a classical path</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Classical-limit readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>classical track</strong>
              <span>{classicalTrack.toFixed(2)}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>quantum packet</strong>
              <span>many momentum components</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>lesson</strong>
              <span>expectation values can obey Newton-like motion</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>contrast</strong>
              <span>the underlying state is still a wavefunction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> the packet center behaves more classically than the
          microscopic state itself.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> this is the bridge to the classical world and to free
          wave-packet spreading.
        </div>
      </div>
    </article>
  )
}

function AppendixGAngularMomentumDemo() {
  const [level, setLevel] = useState('orbital')
  const profiles = {
    orbital: {
      title: 'orbital angular momentum',
      left: 'L̂ = r̂ × p̂',
      right: 'Y_l^m(θ, φ)',
      note: 'spherical harmonics label the angular dependence'
    },
    spin: {
      title: 'spin-1/2',
      left: 'σx, σy, σz',
      right: '|χ⟩ = (a, b)^T',
      note: 'a two-component spinor supports discrete Stern-Gerlach outcomes'
    },
    ladder: {
      title: 'ladder operators',
      left: 'L± = Lx ± iLy',
      right: '|l,m⟩ → |l,m±1⟩',
      note: 'algebra moves between m-values without solving the PDE directly'
    }
  }
  const profile = profiles[level]

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Angular momentum and spin</span>
          <h3>Rotational symmetry gives quantized angular momentum, and spin adds intrinsic structure</h3>
        </div>
        <label className="appendix-g-inline-control">
          Mode
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="orbital">Orbital angular momentum</option>
            <option value="spin">Spin-1/2</option>
            <option value="ladder">Ladder operators</option>
          </select>
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Sections 16 and 17 are the rotational core of the chapter. They show how quantization
        comes from symmetry and how spin introduces a fundamentally nonclassical two-state
        degree of freedom.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Rotation geometry</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Angular momentum and spin">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="130" r="58" fill="rgba(15, 118, 110, 0.10)" stroke="#0f766e" strokeWidth="4" />
            <path d="M 240 130 L 308 88" stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d="M 240 130 L 202 64" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="86" y="58" className="appendix-g-svg-label">{profile.left}</text>
            <text x="282" y="58" className="appendix-g-svg-label">{profile.right}</text>
            <text x="90" y="224" className="appendix-g-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Rotation readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>mode</strong>
              <span>{profile.title}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>commutator</strong>
              <span>[Lx, Ly] = iħ Lz</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>eigenvalues</strong>
              <span>ħ² l(l+1) and ħ m</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>spin lesson</strong>
              <span>spin is intrinsic, not literal classical spinning</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> angular momentum organizes states into multiplets.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> the algebraic ladder structure is one of quantum
          mechanics&apos; cleanest tools.
        </div>
      </div>
    </article>
  )
}

function AppendixGHydrogenDemo() {
  const [mode, setMode] = useState('hydrogen')
  const profiles = {
    hydrogen: {
      title: 'hydrogen atom',
      left: 'V(r) = -e²/(4πϵ₀r)',
      right: 'E_n ∝ -1/n²',
      note: 'radial and angular parts separate in spherical coordinates'
    },
    identical: {
      title: 'identical particles',
      left: 'symmetric bosons',
      right: 'antisymmetric fermions',
      note: 'exchange symmetry determines allowed many-body states'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Hydrogen and identical particles</span>
          <h3>Central potentials separate cleanly, and identical particles obey exchange symmetry</h3>
        </div>
        <label className="appendix-g-inline-control">
          Topic
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="hydrogen">Hydrogen atom</option>
            <option value="identical">Identical particles</option>
          </select>
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Sections 18 and 19 connect the formalism to atomic structure and many-particle symmetry.
        Hydrogen demonstrates separation of variables; identical particles introduce the boson / fermion divide.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Central symmetry picture</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Hydrogen and identical particles">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="130" r="22" fill="rgba(194, 65, 12, 0.18)" stroke="#c2410b" strokeWidth="4" />
            <path d="M 240 130 C 300 110, 330 84, 360 58" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d="M 240 130 C 178 148, 140 170, 104 198" fill="none" stroke="#7c3aed" strokeWidth="5" />
            <text x="76" y="58" className="appendix-g-svg-label">{profile.left}</text>
            <text x="286" y="58" className="appendix-g-svg-label">{profile.right}</text>
            <text x="84" y="224" className="appendix-g-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Atomic / exchange readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>topic</strong>
              <span>{profile.title}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>key formula</strong>
              <span>{mode === 'hydrogen' ? 'E_n ∝ -1/n²' : 'ψ(1,2) = ±ψ(2,1)'}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>lesson</strong>
              <span>{mode === 'hydrogen' ? 'discrete atomic spectra emerge from symmetry and bound states' : 'exchange symmetry controls statistics'}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>consequence</strong>
              <span>{mode === 'hydrogen' ? 'quantum numbers label the state' : 'Pauli exclusion reshapes many-body physics'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> central potentials separate into radial and angular
          structure, and exchange symmetry is a new ingredient for many-particle systems.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> these are the archetypes for atoms and for quantum matter.
        </div>
      </div>
    </article>
  )
}

function AppendixGApproximationDemo() {
  const [barrier, setBarrier] = useState(58)
  const normalized = barrier / 100
  const tunneling = 0.12 + 0.88 * (1 - normalized) * (1 - normalized)
  const variational = 0.8 + 0.22 * normalized

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Approximation methods and tunneling</span>
          <h3>When exact solutions fail, perturbation, variational methods, and WKB take over</h3>
        </div>
        <label className="appendix-g-inline-control">
          Barrier strength: {barrier}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={barrier}
            onChange={(e) => setBarrier(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Sections 20, 21, and 24 collect the main approximation tools. They are the practical
        answer when the exact eigenproblem is not solvable and when classically forbidden regions
        still matter.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Barrier and tunneling</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Approximation and tunneling">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 74 168 C 122 168, 152 168, 184 168 L 184 108 L 296 108 L 296 168 C 336 168, 372 168, 406 168" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 74 156 C 122 156, 152 156, 184 156 L 184 ${128 - 22 * normalized} L 296 ${128 - 22 * normalized} L 296 156 C 336 156, 372 156, 406 156`} fill="none" stroke="#c2410b" strokeWidth="5" opacity="0.85" />
            <path d={`M 238 168 C 250 ${128 - 16 * normalized}, 268 ${128 - 28 * normalized}, 296 128`} fill="none" stroke="#7c3aed" strokeWidth="5" strokeDasharray="8 6" />
            <text x="86" y="58" className="appendix-g-svg-label">barrier</text>
            <text x="286" y="58" className="appendix-g-svg-label">classically forbidden region</text>
            <text x="88" y="224" className="appendix-g-svg-label">the wavefunction can penetrate the barrier</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Approximation readout</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>perturbation</strong>
              <span>small H' corrections to known states</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>variational estimate</strong>
              <span>{variational.toFixed(2)} relative upper-bound scale</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>tunneling factor</strong>
              <span>{tunneling.toFixed(2)}</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>approximate methods are essential, not secondary</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> tunneling survives where classical mechanics would
          stop.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> approximation methods are how quantum mechanics gets
          used on real systems.
        </div>
      </div>
    </article>
  )
}

function AppendixGPostulatesDemo() {
  const [representation, setRepresentation] = useState('position')
  const profiles = {
    position: {
      title: 'position space',
      left: 'ψ(x)',
      right: 'Fourier transform',
      note: 'wavefunctions can be viewed in different bases'
    },
    momentum: {
      title: 'momentum space',
      left: 'φ(p)',
      right: 'x and p swap roles via transform',
      note: 'representation changes reveal complementary structure'
    },
    postulates: {
      title: 'postulates',
      left: 'state, observable, measurement, time evolution',
      right: 'tensor products and symmetry rules',
      note: 'the compact postulate list is the formal skeleton of the subject'
    }
  }
  const profile = profiles[representation]

  return (
    <article className="appendix-g-lab">
      <div className="appendix-g-lab-header">
        <div>
          <span className="appendix-g-kicker">Representation dependence and the postulates</span>
          <h3>The same quantum state can be described in different bases, but the postulates stay fixed</h3>
        </div>
        <label className="appendix-g-inline-control">
          Representation
          <select value={representation} onChange={(e) => setRepresentation(e.target.value)}>
            <option value="position">Position space</option>
            <option value="momentum">Momentum space</option>
            <option value="postulates">Postulates</option>
          </select>
        </label>
      </div>

      <p className="appendix-g-lab-intro">
        Sections 27 and 28 remind you that the wavefunction is basis-dependent, while the
        structure of the theory itself is basis-independent.
      </p>

      <div className="appendix-g-dual-panel">
        <div className="appendix-g-svg-card">
          <div className="appendix-g-panel-title">Change of representation</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Representation dependence">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="88" y="92" width="124" height="76" rx="14" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="4" />
            <rect x="268" y="92" width="124" height="76" rx="14" fill="rgba(194, 65, 12, 0.12)" stroke="#c2410c" strokeWidth="4" />
            <path d="M 212 130 L 268 130" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="98" y="58" className="appendix-g-svg-label">{profile.left}</text>
            <text x="280" y="58" className="appendix-g-svg-label">{profile.right}</text>
            <text x="88" y="224" className="appendix-g-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-g-matrix-card">
          <div className="appendix-g-panel-title">Formal skeleton</div>
          <div className="appendix-g-matrix-grid">
            <div className="appendix-g-matrix-cell accent-teal">
              <strong>state postulate</strong>
              <span>a normalized vector or wavefunction</span>
            </div>
            <div className="appendix-g-matrix-cell accent-orange">
              <strong>observable postulate</strong>
              <span>a Hermitian operator</span>
            </div>
            <div className="appendix-g-matrix-cell accent-indigo">
              <strong>evolution postulate</strong>
              <span>Schrödinger time evolution</span>
            </div>
            <div className="appendix-g-matrix-cell accent-slate">
              <strong>composite systems</strong>
              <span>tensor products and exchange symmetry</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-g-lab-notes">
        <div className="appendix-g-note">
          <strong>What to look for:</strong> a basis change can alter the representation without
          altering the underlying state.
        </div>
        <div className="appendix-g-note">
          <strong>Why it matters:</strong> this is the clean final summary of the formalism.
        </div>
      </div>
    </article>
  )
}

function AppendixGVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-g-visual-suite">
      {blocks.map((block) => {
        if (typeof block.number !== 'number') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 4 && <AppendixGWavefunctionDemo />}
            {block.number === 5 && <AppendixGSchrodingerDemo />}
            {block.number === 7 && <AppendixGBoundaryDemo />}
            {block.number === 9 && <AppendixGOperatorsDemo />}
            {block.number === 12 && <AppendixGCommutatorDemo />}
            {block.number === 15 && <AppendixGEhrenfestDemo />}
            {block.number === 16 && <AppendixGAngularMomentumDemo />}
            {block.number === 18 && <AppendixGHydrogenDemo />}
            {block.number === 20 && <AppendixGApproximationDemo />}
            {block.number === 23 && <AppendixGPostulatesDemo />}
            {block.number === 24 && <AppendixGApproximationDemo />}
            {block.number === 28 && <AppendixGPostulatesDemo />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixGVisualizationSuite
