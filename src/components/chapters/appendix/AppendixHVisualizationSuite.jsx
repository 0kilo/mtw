import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixHVisualizationSuite.css'

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
    <section className="appendix-h-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function AppendixHTransportDemo() {
  const [speed, setSpeed] = useState(48)
  const normalized = speed / 100
  const slope = 0.18 + 0.92 * normalized
  const charSlope = 0.22 + 0.68 * normalized
  const charLine = `M 72 ${164 - 26 * normalized} L 408 ${164 - 26 * normalized}`
  const transportPath = `M 84 160 L ${160 + 28 * normalized} ${124 - 10 * normalized} L ${240 + 54 * normalized} ${100 - 8 * normalized} L ${332 + 58 * normalized} ${76 - 12 * normalized}`

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">First-order PDEs and characteristics</span>
          <h3>Transport equations move a profile along characteristic curves without changing shape</h3>
        </div>
        <label className="appendix-h-inline-control">
          Transport speed: {speed}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={speed}
            onChange={(e) => setSpeed(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Section 6 introduces the transport equation and the method of characteristics. The key
        intuition is geometric: information flows along preferred curves.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Characteristic lines</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Transport and characteristics">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={charLine} fill="none" stroke="#0f766e" strokeWidth="4" strokeDasharray="8 6" />
            <path d={transportPath} fill="none" stroke="#c2410b" strokeWidth="5" />
            <path d={`M 84 160 L ${84 + 52 * normalized} ${160 - 10 * normalized}`} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
            <text x="82" y="58" className="appendix-h-svg-label">u_t + c u_x = 0</text>
            <text x="284" y="58" className="appendix-h-svg-label">x - ct = constant</text>
            <text x="86" y="224" className="appendix-h-svg-label">the profile moves intact along the characteristics</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Characteristic readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>speed</strong>
              <span>{speed}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>slope</strong>
              <span>{slope.toFixed(2)}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>characteristic slope</strong>
              <span>{charSlope.toFixed(2)}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>characteristics reduce the PDE to an ODE along the curve</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> the solution is constant along the natural travel
          lines.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> characteristics are the first geometric method in the chapter.
        </div>
      </div>
    </article>
  )
}

function AppendixHClassificationDemo() {
  const [mode, setMode] = useState('hyperbolic')
  const profiles = {
    hyperbolic: {
      title: 'hyperbolic',
      accent: '#0f766e',
      equation: 'u_tt = c²u_xx',
      behavior: 'finite-speed propagation'
    },
    parabolic: {
      title: 'parabolic',
      accent: '#c2410c',
      equation: 'u_t = ku_xx',
      behavior: 'diffusion and smoothing'
    },
    elliptic: {
      title: 'elliptic',
      accent: '#7c3aed',
      equation: 'u_xx + u_yy = 0',
      behavior: 'equilibrium and boundary control'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Classification of second-order PDEs</span>
          <h3>The sign of B² - AC predicts propagation, diffusion, or equilibrium behavior</h3>
        </div>
        <label className="appendix-h-inline-control">
          PDE type
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="hyperbolic">Hyperbolic</option>
            <option value="parabolic">Parabolic</option>
            <option value="elliptic">Elliptic</option>
          </select>
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Section 7 organizes the rest of the course. Once you know the type, you know the
        qualitative behavior and the right family of methods.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Equation personality</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="PDE classification">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d={`M 88 182 C 144 ${142 - 24 * (mode === 'hyperbolic')}, 180 ${132 - 20 * (mode === 'hyperbolic')}, 236 ${182 - 42 * (mode === 'hyperbolic')}`} fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 248 182 C 288 ${148 - 18 * (mode === 'parabolic')}, 328 ${118 - 18 * (mode === 'parabolic')}, 392 ${82 - 24 * (mode === 'parabolic')}`} fill="none" stroke="#c2410c" strokeWidth="5" />
            <circle cx="240" cy="112" r="36" fill="rgba(124, 58, 237, 0.14)" stroke="#7c3aed" strokeWidth="4" />
            <text x="82" y="58" className="appendix-h-svg-label">{profile.equation}</text>
            <text x="286" y="58" className="appendix-h-svg-label">{profile.title}</text>
            <text x="94" y="224" className="appendix-h-svg-label">{profile.behavior}</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Classification readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>hyperbolic</strong>
              <span>signals propagate with finite speed</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>parabolic</strong>
              <span>solutions smooth and diffuse</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>elliptic</strong>
              <span>boundary data controls the interior equilibrium</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>sign test</strong>
              <span>B² - AC tells you which personality the PDE has</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> the classification is not just terminology; it
          predicts the geometry of the solution behavior.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> it is the organizing principle for the entire course.
        </div>
      </div>
    </article>
  )
}

function AppendixHWaveHeatLaplaceDemo() {
  const [mode, setMode] = useState('wave')
  const profiles = {
    wave: {
      title: 'wave equation',
      accent: '#0f766e',
      behavior: 'oscillatory propagation',
      note: 'finite-speed travel and conserved energy'
    },
    heat: {
      title: 'heat equation',
      accent: '#c2410c',
      behavior: 'diffusive smoothing',
      note: 'high frequencies decay rapidly'
    },
    laplace: {
      title: "Laplace's equation",
      accent: '#7c3aed',
      behavior: 'harmonic equilibrium',
      note: 'boundary data shape the interior'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Wave, heat, and Laplace behavior</span>
          <h3>The three canonical PDEs feel fundamentally different</h3>
        </div>
        <label className="appendix-h-inline-control">
          Canonical PDE
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="wave">Wave</option>
            <option value="heat">Heat</option>
            <option value="laplace">Laplace</option>
          </select>
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Sections 8 through 10 anchor the subject. These equations are the models everything else
        is compared against.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Qualitative behavior</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Wave heat and Laplace behavior">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {mode === 'wave' && (
              <>
                <path d="M 72 156 C 120 88, 172 88, 220 156 S 320 224, 408 156" fill="none" stroke="#0f766e" strokeWidth="5" />
                <path d="M 72 156 C 140 124, 184 124, 240 156 S 340 188, 408 156" fill="none" stroke="#c2410b" strokeWidth="4" opacity="0.8" />
              </>
            )}
            {mode === 'heat' && (
              <>
                <path d="M 72 148 C 120 112, 168 96, 240 96 C 312 96, 360 112, 408 148" fill="none" stroke="#c2410b" strokeWidth="5" />
                <path d="M 72 156 C 120 132, 168 124, 240 124 C 312 124, 360 132, 408 156" fill="none" stroke="#0f766e" strokeWidth="4" />
              </>
            )}
            {mode === 'laplace' && (
              <>
                <path d="M 92 170 C 140 86, 184 66, 240 66 C 296 66, 340 86, 388 170" fill="none" stroke="#7c3aed" strokeWidth="5" />
                <path d="M 84 178 C 136 110, 184 96, 240 96 C 296 96, 344 110, 396 178" fill="none" stroke="#0f766e" strokeWidth="4" opacity="0.8" />
              </>
            )}
            <text x="86" y="58" className="appendix-h-svg-label">{profile.title}</text>
            <text x="282" y="58" className="appendix-h-svg-label">{profile.behavior}</text>
            <text x="86" y="224" className="appendix-h-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Behavior readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>wave</strong>
              <span>u_tt = c²u_xx</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>heat</strong>
              <span>u_t = ku_xx</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>Laplace</strong>
              <span>u_xx + u_yy = 0</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>hyperbolic, parabolic, and elliptic equations behave differently</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> the wave propagates, the heat profile smooths, and the
          harmonic function equilibrates to the boundary.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> these are the canonical personalities of PDE theory.
        </div>
      </div>
    </article>
  )
}

function AppendixHFourierDemo() {
  const [frequency, setFrequency] = useState(44)
  const normalized = frequency / 100
  const decay = 0.22 + 0.68 * normalized

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Fourier series and eigenmodes</span>
          <h3>Separation produces orthogonal modes, and Fourier series recombine them</h3>
        </div>
        <label className="appendix-h-inline-control">
          Mode frequency: {frequency}
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

      <p className="appendix-h-lab-intro">
        Sections 11 through 13 build the eigenmode viewpoint that underlies Fourier series and
        Sturm-Liouville theory. The point is to write a complicated function as a sum of simple,
        orthogonal pieces.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Mode family</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Fourier series and eigenmodes">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d={`M 72 168 C 116 ${92 - 20 * normalized}, 164 ${92 + 14 * normalized}, 240 168 C 316 ${244 - 14 * normalized}, 364 ${92 - 20 * normalized}, 408 168`} fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 72 132 C 120 ${116 - 12 * normalized}, 168 ${116 + 10 * normalized}, 240 132 C 312 ${148 - 10 * normalized}, 360 ${116 - 12 * normalized}, 408 132`} fill="none" stroke="#c2410b" strokeWidth="5" />
            <path d={`M 72 96 C 120 ${96 - 16 * normalized}, 168 ${96 + 16 * normalized}, 240 96 C 312 ${96 - 16 * normalized}, 360 ${96 + 16 * normalized}, 408 96`} fill="none" stroke="#7c3aed" strokeWidth="5" />
            <text x="82" y="58" className="appendix-h-svg-label">sin(nπx/L), cos(nπx/L)</text>
            <text x="286" y="58" className="appendix-h-svg-label">orthogonal eigenfunctions</text>
            <text x="88" y="224" className="appendix-h-svg-label">higher modes oscillate faster and often decay faster</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Spectral readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>frequency</strong>
              <span>{frequency}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>decay scale</strong>
              <span>{decay.toFixed(2)}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>orthogonality</strong>
              <span>different modes separate cleanly under the inner product</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>the full solution is a sum over eigenmodes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> Fourier coefficients package the initial data into a
          modal basis.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> separation and spectral decomposition are the engine
          behind bounded-domain PDEs.
        </div>
      </div>
    </article>
  )
}

function AppendixHSeparationDemo() {
  const [mode, setMode] = useState('separation')
  const profiles = {
    separation: {
      title: 'separation of variables',
      left: 'u(x,t)=X(x)T(t)',
      right: 'PDE → ODE eigenproblems',
      note: 'the product ansatz splits one hard equation into two easier ones'
    },
    fourier: {
      title: 'Fourier series',
      left: 'sine/cosine modes',
      right: 'orthogonal expansion coefficients',
      note: 'initial data becomes a sum of eigenmodes'
    },
    sturm: {
      title: 'Sturm-Liouville',
      left: '-(p y\')\' + qy = λwy',
      right: 'orthogonal eigenfunctions',
      note: 'eigenvalue problems underlie the mode decomposition'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Separation and spectral modes</span>
          <h3>Many PDE problems reduce to eigenvalue problems and mode expansions</h3>
        </div>
        <label className="appendix-h-inline-control">
          Method
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="separation">Separation of variables</option>
            <option value="fourier">Fourier series</option>
            <option value="sturm">Sturm-Liouville</option>
          </select>
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Sections 11 through 13 explain why orthogonal modes are the natural language of bounded
        PDEs. The point is to turn a PDE into a collection of ODEs and then recombine the modes.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Mode decomposition</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Separation and Fourier modes">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d="M 80 160 L 160 90 L 240 130 L 320 90 L 400 160" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d="M 80 130 L 160 160 L 240 98 L 320 160 L 400 130" fill="none" stroke="#c2410b" strokeWidth="5" />
            <text x="82" y="58" className="appendix-h-svg-label">{profile.left}</text>
            <text x="286" y="58" className="appendix-h-svg-label">{profile.right}</text>
            <text x="88" y="224" className="appendix-h-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Spectral readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>separation</strong>
              <span>assume product form and separate variables</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>Fourier</strong>
              <span>expand the initial data into sine/cosine modes</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>Sturm-Liouville</strong>
              <span>eigenfunctions are orthogonal with respect to a weight</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>spectral decomposition is the core computational tool</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> a PDE on a geometry-friendly domain becomes a mode
          expansion problem.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> this is the bridge to Fourier, eigenmodes, and special functions.
        </div>
      </div>
    </article>
  )
}

function AppendixHTransformDemo() {
  const [mode, setMode] = useState('fourier')
  const profiles = {
    fourier: {
      title: 'Fourier transform',
      left: 'f(x) ↔ f̂(ξ)',
      right: 'd/dx becomes iξ',
      note: 'whole-line problems diagonalize in frequency space'
    },
    laplace: {
      title: 'Laplace transform',
      left: 'f(t) ↔ F(s)',
      right: 'time derivatives become algebraic',
      note: 'half-line and initial-value problems become easier'
    },
    green: {
      title: "Green's functions",
      left: 'L[G] = δ',
      right: 'solution = source convolved with response',
      note: 'a linear PDE is built from point-source responses'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Transform and Green methods</span>
          <h3>Fourier, Laplace, and Green methods linearize the hard part of the problem</h3>
        </div>
        <label className="appendix-h-inline-control">
          Method
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="fourier">Fourier transform</option>
            <option value="laplace">Laplace transform</option>
            <option value="green">Green&apos;s function</option>
          </select>
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Sections 14 through 18 show how transform methods and Green&apos;s functions solve
        inhomogeneous and whole-line problems by turning differentiation into algebra or
        convolution.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Transform diagram</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Fourier Laplace and Green methods">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="76" y="88" width="110" height="80" rx="14" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="4" />
            <rect x="292" y="88" width="110" height="80" rx="14" fill="rgba(194, 65, 12, 0.12)" stroke="#c2410b" strokeWidth="4" />
            <path d="M 186 128 L 292 128" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
            <text x="88" y="58" className="appendix-h-svg-label">{profile.left}</text>
            <text x="294" y="58" className="appendix-h-svg-label">{profile.right}</text>
            <text x="90" y="224" className="appendix-h-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Method readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>Fourier</strong>
              <span>d/dx → iξ, whole-line frequency analysis</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>Laplace</strong>
              <span>initial data becomes algebra in s</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>Green</strong>
              <span>point-source response drives integral solutions</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>linear PDEs become manageable in transform space</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> the transform methods change the domain in which the
          PDE is solved.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> this is how forced problems and whole-line problems are actually solved.
        </div>
      </div>
    </article>
  )
}

function AppendixHGreenDemo() {
  const [source, setSource] = useState(54)
  const normalized = source / 100
  const response = 0.4 + 1.2 * normalized

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Green&apos;s functions and forcing</span>
          <h3>A Green&apos;s function is the response to a point source, and the full solution is a superposition of responses</h3>
        </div>
        <label className="appendix-h-inline-control">
          Source strength: {source}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={source}
            onChange={(e) => setSource(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Sections 18 and 27 turn forcing into convolution. Once you know the point response,
        you can build the solution to a linear inhomogeneous PDE by superposition.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Point-source response</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="Green's function point source">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="130" r="12" fill="#c2410b" />
            <circle cx="240" cy="130" r={46 + 20 * normalized} fill="none" stroke="#0f766e" strokeWidth="5" />
            <circle cx="240" cy="130" r={78 + 20 * normalized} fill="none" stroke="#7c3aed" strokeWidth="4" strokeDasharray="8 6" />
            <text x="84" y="58" className="appendix-h-svg-label">L[G] = δ</text>
            <text x="286" y="58" className="appendix-h-svg-label">point response</text>
            <text x="94" y="224" className="appendix-h-svg-label">convolution with the source builds the full solution</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Green readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>source strength</strong>
              <span>{source}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>response</strong>
              <span>{response.toFixed(2)}</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>integral form</strong>
              <span>u(x) = ∫G(x, ξ)f(ξ)dξ</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>lesson</strong>
              <span>linear response is the point-source building block</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> a Green&apos;s function encodes both the operator and the boundary setup.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> forced PDEs become integral superpositions of point responses.
        </div>
      </div>
    </article>
  )
}

function AppendixHQualitativeDemo({ defaultMode = 'wave' }) {
  const [mode, setMode] = useState(defaultMode)
  const profiles = {
    wave: {
      title: 'wave equation',
      accent: '#0f766e',
      note: 'finite domains of dependence and conserved energy'
    },
    heat: {
      title: 'heat equation',
      accent: '#c2410b',
      note: 'maximum principle and smoothing'
    },
    boundary: {
      title: 'boundary data',
      accent: '#7c3aed',
      note: 'initial conditions versus boundary conditions determine the problem class'
    },
    nonlinear: {
      title: 'nonlinearity',
      accent: '#475569',
      note: 'superposition fails; shocks and blow-up can appear'
    }
  }
  const profile = profiles[mode]

  return (
    <article className="appendix-h-lab">
      <div className="appendix-h-lab-header">
        <div>
          <span className="appendix-h-kicker">Qualitative principles</span>
          <h3>Uniqueness, domains of dependence, and energy methods tell you what solutions can do</h3>
        </div>
        <label className="appendix-h-inline-control">
          Principle
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="wave">Wave energy and dependence</option>
            <option value="heat">Heat maximum principle</option>
            <option value="boundary">Boundary vs initial value</option>
            <option value="nonlinear">Nonlinearity</option>
          </select>
        </label>
      </div>

      <p className="appendix-h-lab-intro">
        Sections 23 through 31 are about behavior, not just formulas. The chapter teaches how to
        predict what a PDE solution can and cannot do.
      </p>

      <div className="appendix-h-dual-panel">
        <div className="appendix-h-svg-card">
          <div className="appendix-h-panel-title">Qualitative behavior map</div>
          <svg viewBox="0 0 480 260" role="img" aria-label="PDE qualitative behavior">
            <rect x="28" y="24" width="424" height="200" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d="M 76 172 L 164 120 L 240 134 L 316 108 L 404 72" fill="none" stroke={profile.accent} strokeWidth="6" />
            <circle cx="164" cy="120" r="8" fill={profile.accent} />
            <circle cx="316" cy="108" r="8" fill={profile.accent} />
            <text x="86" y="58" className="appendix-h-svg-label">{profile.title}</text>
            <text x="286" y="58" className="appendix-h-svg-label">qualitative principle</text>
            <text x="90" y="224" className="appendix-h-svg-label">{profile.note}</text>
          </svg>
        </div>

        <div className="appendix-h-matrix-card">
          <div className="appendix-h-panel-title">Behavior readout</div>
          <div className="appendix-h-matrix-grid">
            <div className="appendix-h-matrix-cell accent-teal">
              <strong>wave</strong>
              <span>finite propagation and energy conservation</span>
            </div>
            <div className="appendix-h-matrix-cell accent-orange">
              <strong>heat</strong>
              <span>maximum principle and rapid smoothing</span>
            </div>
            <div className="appendix-h-matrix-cell accent-indigo">
              <strong>initial vs boundary data</strong>
              <span>problem type depends on the geometry of the domain</span>
            </div>
            <div className="appendix-h-matrix-cell accent-slate">
              <strong>nonlinear warning</strong>
              <span>shocks, blow-up, and loss of superposition can occur</span>
            </div>
          </div>
        </div>
      </div>

      <div className="appendix-h-lab-notes">
        <div className="appendix-h-note">
          <strong>What to look for:</strong> the PDE type determines what information can travel
          and how solutions settle.
        </div>
        <div className="appendix-h-note">
          <strong>Why it matters:</strong> qualitative analysis is as important as exact formulas.
        </div>
      </div>
    </article>
  )
}

function AppendixHVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-h-visual-suite">
      {blocks.map((block) => {
        if (typeof block.number !== 'number') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 6 && <AppendixHTransportDemo />}
            {block.number === 7 && <AppendixHClassificationDemo />}
            {block.number === 8 && <AppendixHWaveHeatLaplaceDemo />}
            {block.number === 11 && <AppendixHSeparationDemo />}
            {block.number === 12 && <AppendixHFourierDemo />}
            {block.number === 16 && <AppendixHTransformDemo />}
            {block.number === 18 && <AppendixHGreenDemo />}
            {block.number === 22 && <AppendixHQualitativeDemo defaultMode="boundary" />}
            {block.number === 26 && <AppendixHQualitativeDemo defaultMode="wave" />}
            {block.number === 29 && <AppendixHQualitativeDemo defaultMode="nonlinear" />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixHVisualizationSuite
