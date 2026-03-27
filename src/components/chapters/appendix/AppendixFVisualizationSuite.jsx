import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixFVisualizationSuite.css'

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
    <section className="appendix-f-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function AppendixFVectorAnalysisDemo() {
  const [mode, setMode] = useState('gradient')
  const modes = {
    gradient: { title: 'gradient', accent: '#0f766e', label: 'steepest ascent' },
    divergence: { title: 'divergence', accent: '#c2410c', label: 'source or sink' },
    curl: { title: 'curl', accent: '#7c3aed', label: 'local rotation' }
  }
  const profile = modes[mode]

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Vector analysis</span>
          <h3>Gradient, divergence, and curl are three different ways of asking what a field does</h3>
        </div>
        <label className="appendix-f-inline-control">
          Operator
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="gradient">Gradient</option>
            <option value="divergence">Divergence</option>
            <option value="curl">Curl</option>
          </select>
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 3 is the mathematical warm-up. Electrodynamics lives and dies by vector calculus,
        so the chapter begins by teaching you how to read field geometry.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Operator picture</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Vector analysis operators">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="140" cy="128" r="48" fill={`rgba(15, 118, 110, ${mode === 'gradient' ? 0.16 : 0.08})`} stroke="#0f766e" strokeWidth="4" />
            <path d="M 140 128 L 208 96" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <path d="M 276 96 C 304 78, 336 78, 364 96" fill="none" stroke="#c2410b" strokeWidth="5" />
            <path d="M 276 160 C 304 178, 336 178, 364 160" fill="none" stroke="#7c3aed" strokeWidth="5" />
            <circle cx="320" cy="128" r="26" fill="rgba(124, 58, 237, 0.12)" stroke={profile.accent} strokeWidth="3" />
            <text x="82" y="58" className="appendix-f-svg-label">∇f</text>
            <text x="282" y="58" className="appendix-f-svg-label">∇·A</text>
            <text x="282" y="214" className="appendix-f-svg-label">∇×A</text>
            <text x="92" y="224" className="appendix-f-svg-label">{profile.label}</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">What each operator means</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>gradient</strong>
              <span>points uphill in a scalar field</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>divergence</strong>
              <span>measures net outflow from a point</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>curl</strong>
              <span>measures local swirling circulation</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>importance</strong>
              <span>these are the native tools of Maxwell theory</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> the same field can be analyzed for slope, source
          strength, or rotation.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> Maxwell&apos;s equations are built from exactly these
          operations.
        </div>
      </div>
    </article>
  )
}

function AppendixFElectrostaticsDemo() {
  const [charge, setCharge] = useState(56)
  const normalized = charge / 100
  const fieldStrength = 0.8 + 2.4 * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Electrostatics and Gauss&apos;s law</span>
          <h3>Flux through a closed surface counts enclosed charge</h3>
        </div>
        <label className="appendix-f-inline-control">
          Enclosed charge: {charge}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={charge}
            onChange={(e) => setCharge(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 4 is the first major physics block. Gauss&apos;s law ties the electric field to
        charge density, and symmetry turns that law into a fast solution engine.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Flux surface around a charge</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Gauss law flux surface">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="130" r={22 + 14 * normalized} fill="rgba(194, 65, 12, 0.18)" stroke="#c2410c" strokeWidth="4" />
            <circle cx="240" cy="130" r="70" fill="none" stroke="#0f766e" strokeWidth="4" strokeDasharray="9 7" />
            <path d={`M 240 60 L 240 ${90 - 22 * normalized}`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 240 200 L 240 ${170 + 22 * normalized}`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 170 130 L ${200 - 24 * normalized} 130`} stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 310 130 L ${280 + 24 * normalized} 130`} stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            <text x="86" y="58" className="appendix-f-svg-label">Q_enclosed</text>
            <text x="296" y="58" className="appendix-f-svg-label">closed surface</text>
            <text x="88" y="224" className="appendix-f-svg-label">more charge means more electric flux</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Flux readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>enclosed charge</strong>
              <span>{charge}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>field strength</strong>
              <span>{fieldStrength.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>law</strong>
              <span>∮ E · da = Q_enc / ε₀</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>symmetry payoff</strong>
              <span>spheres, cylinders, and planes are the easy cases</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> the field is best understood as flux through a
          boundary, not just as an arrow at a point.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> this is the electrostatic skeleton of the chapter.
        </div>
      </div>
    </article>
  )
}

function AppendixFPotentialDemo() {
  const [mode, setMode] = useState('potential')
  const profiles = {
    potential: {
      title: 'potential well',
      accent: '#0f766e',
      field: 'E = -∇V',
      note: 'the field points downhill in the potential landscape'
    },
    laplace: {
      title: 'Laplace region',
      accent: '#7c3aed',
      field: '∇²V = 0',
      note: 'no charge means harmonic potential'
    },
    uniqueness: {
      title: 'unique solution',
      accent: '#c2410c',
      field: 'boundary conditions fix the answer',
      note: 'satisfy the equation and the boundaries, and the solution is determined'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Potential, Poisson, and Laplace</span>
          <h3>The scalar potential often solves the problem before the field does</h3>
        </div>
        <label className="appendix-f-inline-control">
          Problem type
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="potential">Potential</option>
            <option value="laplace">Laplace</option>
            <option value="uniqueness">Uniqueness</option>
          </select>
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 5 shows why scalar potentials are so powerful: they simplify electrostatics,
        convert Gauss&apos;s law into Poisson&apos;s equation, and let boundary conditions do the heavy
        lifting.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Potential landscape</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Potential and field">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 76 170 C 120 150, 150 86, 210 82 C 260 78, 310 124, 360 116 C 392 110, 418 90, 410 62" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d="M 176 124 L 238 96" stroke={profile.accent} strokeWidth="6" strokeLinecap="round" />
            <circle cx="176" cy="124" r="7" fill={profile.accent} />
            <text x="82" y="58" className="appendix-f-svg-label">V</text>
            <text x="272" y="58" className="appendix-f-svg-label">{profile.field}</text>
            <text x="92" y="224" className="appendix-f-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Equation readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>field law</strong>
              <span>E = -∇V</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>Poisson</strong>
              <span>∇²V = -ρ/ε₀</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>Laplace</strong>
              <span>∇²V = 0 when ρ = 0</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>uniqueness</strong>
              <span>boundary conditions determine the solution</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> the potential is a scalar field; the electric field is
          its gradient with a minus sign.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> this is the cleanest route through many electrostatic
          boundary-value problems.
        </div>
      </div>
    </article>
  )
}

function AppendixFEnergyDemo() {
  const [density, setDensity] = useState(46)
  const normalized = density / 100
  const energyDensity = 0.2 + 1.5 * normalized * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Field energy</span>
          <h3>Electrostatic energy lives in the field, not just in the charges</h3>
        </div>
        <label className="appendix-f-inline-control">
          Field intensity: {density}
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

      <p className="appendix-f-lab-intro">
        Section 6 turns electrostatics into an energy story. The energy density is proportional
        to E², so stronger fields store more energy per unit volume.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Energy stored in the field</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Electrostatic energy">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="150" cy="128" r={20 + 26 * normalized} fill="rgba(194, 65, 12, 0.16)" stroke="#c2410c" strokeWidth="4" />
            <circle cx="304" cy="128" r={20 + 42 * normalized} fill="rgba(15, 118, 110, 0.16)" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 150 128 L ${220 + 18 * normalized} 128`} stroke="#c2410b" strokeWidth="5" strokeLinecap="round" />
            <path d={`M 304 128 L ${392 + 18 * normalized} 128`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <text x="86" y="58" className="appendix-f-svg-label">u_E = ε₀E²/2</text>
            <text x="286" y="58" className="appendix-f-svg-label">field energy density</text>
            <text x="86" y="224" className="appendix-f-svg-label">bigger fields mean more stored energy</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Energy readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>field intensity</strong>
              <span>{density}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>energy density</strong>
              <span>{energyDensity.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>field form</strong>
              <span>U = ε₀ ∫ E² dτ / 2</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>the field is a physical energy reservoir</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> the energy is distributed throughout space wherever
          the field exists.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> this idea becomes essential again in waves, momentum,
          and radiation.
        </div>
      </div>
    </article>
  )
}

function AppendixFMultipoleDemo() {
  const [offset, setOffset] = useState(36)
  const normalized = offset / 100
  const dipole = 0.7 + 1.7 * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Multipole expansion</span>
          <h3>Far away, a charge distribution is mostly its monopole and dipole content</h3>
        </div>
        <label className="appendix-f-inline-control">
          Dipole offset: {offset}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={offset}
            onChange={(e) => setOffset(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 7 explains why distant fields can be summarized by a small number of moments.
        The multipole expansion is a controlled hierarchy of approximations.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Charge distribution moments</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Multipole expansion and dipole">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx={200 - 40 * normalized} cy="128" r="10" fill="#c2410c" />
            <circle cx={280 + 40 * normalized} cy="128" r="10" fill="#0f766e" />
            <path d={`M 240 128 L ${240 + 90 * dipole} 96`} stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 240 128 L ${240 - 90 * dipole} 160`} stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="92" y="58" className="appendix-f-svg-label">monopole + dipole + ...</text>
            <text x="282" y="58" className="appendix-f-svg-label">p = Σ q r</text>
            <text x="96" y="224" className="appendix-f-svg-label">the far field remembers only a few moments</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Multipole readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>monopole</strong>
              <span>1/r term, total charge</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>dipole</strong>
              <span>1/r² term, charge separation</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>dipole strength</strong>
              <span>{dipole.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>torque</strong>
              <span>p × E tends to align the dipole</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> the far field is a compressed summary of the source.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> multipoles are the natural language of localized sources.
        </div>
      </div>
    </article>
  )
}

function AppendixFMatterDemo() {
  const [polarization, setPolarization] = useState(48)
  const normalized = polarization / 100
  const displacement = 0.7 + 1.3 * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Electric fields in matter</span>
          <h3>Polarization reorganizes charge, and the displacement field tracks the free charge</h3>
        </div>
        <label className="appendix-f-inline-control">
          Polarization: {polarization}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={polarization}
            onChange={(e) => setPolarization(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 8 extends electrostatics into dielectric media. Bound charge comes from
        polarization, and the D field packages the effect of the medium in a cleaner equation.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Polarized dielectric slab</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Dielectric polarization and displacement field">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="150" y="78" width="180" height="104" rx="12" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="4" />
            <path d={`M 88 130 L ${140 - 18 * normalized} 130`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 330 130 L ${392 + 18 * normalized} 130`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 240 62 L 240 ${86 + 26 * normalized}`} stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 240 190 L 240 ${166 - 26 * normalized}`} stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="74" y="58" className="appendix-f-svg-label">P</text>
            <text x="282" y="58" className="appendix-f-svg-label">D = ε₀E + P</text>
            <text x="96" y="224" className="appendix-f-svg-label">bound charge appears on surfaces and in volume</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Matter readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>polarization</strong>
              <span>{polarization}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>displacement scale</strong>
              <span>{displacement.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>Gauss for D</strong>
              <span>∇·D = ρ_free</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>boundary condition</strong>
              <span>D⊥ jumps by free surface charge</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> matter changes the bookkeeping by splitting free and
          bound charge.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> dielectric problems become much simpler in the D field.
        </div>
      </div>
    </article>
  )
}

function AppendixFMagnetostaticsDemo() {
  const [current, setCurrent] = useState(54)
  const normalized = current / 100
  const fieldStrength = 0.8 + 1.8 * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Magnetostatics</span>
          <h3>Steady currents make curling magnetic fields, and Ampere&apos;s law turns symmetry into a solution</h3>
        </div>
        <label className="appendix-f-inline-control">
          Current strength: {current}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={current}
            onChange={(e) => setCurrent(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 9 introduces magnetic forces, Biot-Savart, and Ampere&apos;s law. The visual
        story is circulatory: current wraps the field around it.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Current and circular magnetic field</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Magnetostatics and Ampere law">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="130" r="24" fill="rgba(194, 65, 12, 0.18)" stroke="#c2410b" strokeWidth="4" />
            <circle cx="240" cy="130" r={72 + 14 * normalized} fill="none" stroke="#0f766e" strokeWidth="4" strokeDasharray="8 8" />
            <path d={`M 240 58 L 240 ${92 - 14 * normalized}`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 312 130 C 336 114, 336 146, 312 130`} fill="none" stroke="#7c3aed" strokeWidth="5" />
            <text x="88" y="58" className="appendix-f-svg-label">I</text>
            <text x="286" y="58" className="appendix-f-svg-label">∮ B · dl = μ₀ I_enc</text>
            <text x="86" y="224" className="appendix-f-svg-label">current makes B wrap around the wire</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Magnetostatic readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>current</strong>
              <span>{current}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>field scale</strong>
              <span>{fieldStrength.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>Biot-Savart</strong>
              <span>sum current elements over distance</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>vector potential</strong>
              <span>B = ∇ × A with ∇·B = 0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> magnetic fields are inherently circulatory around
          steady current.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> Ampere&apos;s law is the magnetostatic analogue of Gauss&apos;s law.
        </div>
      </div>
    </article>
  )
}

function AppendixFMaxwellWavesDemo() {
  const [frequency, setFrequency] = useState(52)
  const normalized = frequency / 100
  const waveSpeed = 0.9 + normalized * 1.1

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Maxwell equations and waves</span>
          <h3>Displacement current closes the system and makes electromagnetic waves possible</h3>
        </div>
        <label className="appendix-f-inline-control">
          Wave frequency: {frequency}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={frequency}
            onChange={(e) => setFrequency(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 11 introduces the time-dependent correction to Ampere&apos;s law, and section 12
        packages the full Maxwell system. Section 13 then reveals wave propagation and the
        Poynting vector.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Wave propagating through space</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Electromagnetic waves">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={`M 64 136 C 104 ${96 - 8 * normalized}, 144 ${96 + 8 * normalized}, 184 136 S 264 ${176 - 8 * normalized}, 304 136 S 384 ${96 + 8 * normalized}, 416 136`} fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 64 172 C 104 ${132 - 8 * normalized}, 144 ${132 + 8 * normalized}, 184 172 S 264 ${212 - 8 * normalized}, 304 172 S 384 ${132 + 8 * normalized}, 416 172`} fill="none" stroke="#c2410b" strokeWidth="5" />
            <path d={`M 352 88 L ${392 + 14 * normalized} 88`} stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="84" y="58" className="appendix-f-svg-label">E and B are transverse</text>
            <text x="284" y="58" className="appendix-f-svg-label">ω = ck</text>
            <text x="88" y="224" className="appendix-f-svg-label">the fields propagate as a self-sustaining wave</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Wave readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>speed</strong>
              <span>{waveSpeed.toFixed(2)} relative units</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>Poynting vector</strong>
              <span>S = (1/μ₀) E × B</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>energy density</strong>
              <span>u = ε₀E²/2 + B²/(2μ₀)</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>message</strong>
              <span>fields carry energy and momentum across space</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> the correction to Ampere&apos;s law is what lets the
          system support propagating waves.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> the wave equations are the payoff of Maxwell&apos;s unification.
        </div>
      </div>
    </article>
  )
}

function AppendixFGaugeRetardedDemo() {
  const [phase, setPhase] = useState(38)
  const normalized = phase / 100
  const gaugeShift = 0.7 + 1.2 * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Gauge freedom and retarded potentials</span>
          <h3>Potentials are not unique, and their influence arrives with finite delay</h3>
        </div>
        <label className="appendix-f-inline-control">
          Gauge phase: {phase}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={phase}
            onChange={(e) => setPhase(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Section 14 introduces the potentials, gauge transformations, and the Lorenz and Coulomb
        gauges. Section 15 then restores causality with retarded time.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Gauge transform and finite propagation</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Gauge freedom and retarded potentials">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 88 150 C 124 102, 176 82, 224 92 C 270 100, 306 136, 350 136 C 382 136, 408 122, 416 90" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 92 150 L ${152 + 36 * normalized} ${92 - 18 * normalized}`} stroke="#c2410b" strokeWidth="5" strokeLinecap="round" />
            <path d={`M 320 136 L ${370 + 20 * normalized} 108`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
            <text x="74" y="58" className="appendix-f-svg-label">A → A + ∇Λ</text>
            <text x="290" y="58" className="appendix-f-svg-label">t_r = t - R/c</text>
            <text x="78" y="224" className="appendix-f-svg-label">potentials shift, fields stay the same</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Gauge and retardation readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>gauge shift</strong>
              <span>{gaugeShift.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>potentials</strong>
              <span>E and B come from V and A</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>retarded time</strong>
              <span>source information arrives later</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>causality</strong>
              <span>fields do not update instantaneously at a distance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> gauge freedom changes the potentials, not the
          physical fields.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> retarded potentials make the finite speed of
          electromagnetic influence explicit.
        </div>
      </div>
    </article>
  )
}

function AppendixFRadiationDemo() {
  const [acceleration, setAcceleration] = useState(58)
  const normalized = acceleration / 100
  const radiatedPower = 0.35 + 1.8 * normalized * normalized

  return (
    <article className="appendix-f-lab">
      <div className="appendix-f-lab-header">
        <div>
          <span className="appendix-f-kicker">Radiation, conservation, and relativity</span>
          <h3>Accelerating charges radiate, and the fields carry energy, momentum, and frame dependence</h3>
        </div>
        <label className="appendix-f-inline-control">
          Acceleration: {acceleration}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={acceleration}
            onChange={(e) => setAcceleration(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-f-lab-intro">
        Sections 16, 17, and 19 connect the field picture to radiation, conservation laws, and
        the relativistic structure behind electromagnetism.
      </p>

      <div className="appendix-f-dual-panel">
        <div className="appendix-f-svg-card">
          <div className="appendix-f-panel-title">Radiating charge and energy flow</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Radiation and conservation">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="188" cy="128" r="18" fill="rgba(194, 65, 12, 0.18)" stroke="#c2410b" strokeWidth="4" />
            <circle cx="188" cy="128" r={60 + 26 * normalized} fill="none" stroke="#0f766e" strokeWidth="4" />
            <circle cx="188" cy="128" r={88 + 26 * normalized} fill="none" stroke="#7c3aed" strokeWidth="4" strokeDasharray="9 7" />
            <path d={`M 284 88 L ${356 + 18 * normalized} ${70 + 10 * normalized}`} stroke="#c2410b" strokeWidth="6" strokeLinecap="round" />
            <path d={`M 284 168 L ${356 + 18 * normalized} ${186 - 10 * normalized}`} stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            <text x="66" y="58" className="appendix-f-svg-label">accelerating charge</text>
            <text x="292" y="58" className="appendix-f-svg-label">S = E × B / μ₀</text>
            <text x="88" y="224" className="appendix-f-svg-label">radiation escapes as energy and momentum flux</text>
          </svg>
        </div>

        <div className="appendix-f-matrix-card">
          <div className="appendix-f-panel-title">Conservation readout</div>
          <div className="appendix-f-matrix-grid">
            <div className="appendix-f-matrix-cell accent-teal">
              <strong>radiated power</strong>
              <span>{radiatedPower.toFixed(2)}</span>
            </div>
            <div className="appendix-f-matrix-cell accent-orange">
              <strong>Poynting theorem</strong>
              <span>energy change + flux = work on matter</span>
            </div>
            <div className="appendix-f-matrix-cell accent-indigo">
              <strong>momentum</strong>
              <span>fields carry momentum as well as energy</span>
            </div>
            <div className="appendix-f-matrix-cell accent-slate">
              <strong>relativity</strong>
              <span>E and B mix across inertial frames</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-f-lab-notes">
        <div className="appendix-f-note">
          <strong>What to look for:</strong> radiation is the far-field consequence of
          acceleration, not just a static field pattern.
        </div>
        <div className="appendix-f-note">
          <strong>Why it matters:</strong> the conservation laws and relativistic mixing are the
          conceptual endpoint of the chapter.
        </div>
      </div>
    </article>
  )
}

function AppendixFVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-f-visual-suite">
      {blocks.map((block) => {
        if (typeof block.number !== 'number') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 3 && <AppendixFVectorAnalysisDemo />}
            {block.number === 4 && <AppendixFElectrostaticsDemo />}
            {block.number === 5 && <AppendixFPotentialDemo />}
            {block.number === 6 && <AppendixFEnergyDemo />}
            {block.number === 7 && <AppendixFMultipoleDemo />}
            {block.number === 8 && <AppendixFMatterDemo />}
            {block.number === 9 && <AppendixFMagnetostaticsDemo />}
            {block.number === 12 && <AppendixFMaxwellWavesDemo />}
            {block.number === 14 && <AppendixFGaugeRetardedDemo />}
            {block.number === 16 && <AppendixFRadiationDemo />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixFVisualizationSuite
