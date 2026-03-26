import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './AppendixCVisualizationSuite.css'

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
    <section className="appendix-c-markdown-block" key={blockKey}>
      <ReactMarkdown remarkPlugins={markdownPlugins} rehypePlugins={rehypePlugins}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

function useUnitGamma(beta) {
  return 1 / Math.sqrt(1 - beta * beta)
}

function AppendixCLab({ kicker, title, intro, children, notes }) {
  return (
    <article className="appendix-c-lab">
      <div className="appendix-c-lab-header">
        <div>
          <span className="appendix-c-kicker">{kicker}</span>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="appendix-c-lab-intro">{intro}</p>
      {children}
      <div className="appendix-c-lab-notes">
      {notes.map((note) => (
          <div key={note.label} className="appendix-c-note">
            <strong>{note.label}:</strong> {note.text}
          </div>
        ))}
      </div>
    </article>
  )
}

function AppendixCPostulatesDemo() {
  const [beta, setBeta] = useState(0.45)
  const gamma = useUnitGamma(beta)
  const offset = 58 * beta
  const movingClockX = 330 + offset
  const movingLightTop = `M ${movingClockX} 56 L ${movingClockX - 42} 120 L ${movingClockX} 184 L ${movingClockX + 42} 120 Z`

  return (
    <AppendixCLab
      kicker="Two postulates"
      title="The same light speed and the same laws force space and time to mix"
      intro="Special relativity starts with a simple demand: all inertial observers must describe physics with the same laws, and light must move at speed c in every inertial frame."
      notes={[
        {
          label: 'What to look for',
          text: 'The light clock works in any inertial frame, but the moving observer sees diagonal light paths instead of purely vertical ones.'
        },
        {
          label: 'Why it matters',
          text: 'If c is fixed for everyone, the transformation cannot be purely Galilean; it has to mix x and t.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Light clock at rest</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Light clock at rest">
            <rect x="34" y="26" width="412" height="208" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="168" y1="52" x2="168" y2="210" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="168" y1="132" x2="314" y2="132" stroke="#0f766e" strokeWidth="4" />
            <line x1="314" y1="132" x2="168" y2="132" stroke="#0f766e" strokeWidth="4" strokeDasharray="8 8" />
            <circle cx="168" cy="132" r="18" fill="#0f766e" opacity="0.18" />
            <circle cx="314" cy="132" r="16" fill="#c2410b" opacity="0.22" />
            <text x="92" y="70" className="appendix-c-svg-label">same pulse rate in every inertial frame</text>
            <text x="170" y="228" className="appendix-c-svg-label">rest frame: vertical tick-tock</text>
          </svg>
        </div>

        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Moving observer</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Light clock moving relative to observer">
            <rect x="34" y="26" width="412" height="208" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="72" y1="204" x2="406" y2="204" stroke="#64748b" strokeWidth="2" />
            <line x1="108" y1="50" x2="108" y2="204" stroke="#64748b" strokeWidth="2" />
            <path d={movingLightTop} fill="none" stroke="#c2410b" strokeWidth="4" />
            <line x1="164" y1="120" x2={movingClockX} y2="56" stroke="#0f766e" strokeWidth="4" />
            <line x1={movingClockX} y1="184" x2="164" y2="120" stroke="#0f766e" strokeWidth="4" strokeDasharray="8 8" />
            <circle cx={movingClockX} cy="120" r="18" fill="#0f766e" opacity="0.2" />
            <circle cx="164" cy="120" r="14" fill="#7c3aed" opacity="0.22" />
            <text x="88" y="70" className="appendix-c-svg-label">moving frame: space and time both matter</text>
            <text x="86" y="228" className="appendix-c-svg-label">speed = {beta.toFixed(2)} c</text>
          </svg>
        </div>
      </div>

      <label className="appendix-c-inline-control">
        Relative speed: {beta.toFixed(2)} c
        <input
          type="range"
          min="0"
          max="0.9"
          step="0.01"
          value={beta}
          onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
        />
      </label>

      <div className="appendix-c-stat-grid">
        <div className="appendix-c-stat-card accent-teal">
          <strong>gamma</strong>
          <span>{gamma.toFixed(3)}</span>
        </div>
        <div className="appendix-c-stat-card accent-orange">
          <strong>invariant</strong>
          <span>speed of light</span>
        </div>
        <div className="appendix-c-stat-card accent-indigo">
          <strong>message</strong>
          <span>mixing x and t is unavoidable</span>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCLorentzDemo() {
  const [beta, setBeta] = useState(0.5)
  const gamma = useUnitGamma(beta)
  const eventX = 120
  const eventT = 150
  const xPrime = gamma * (eventX - beta * eventT)
  const tPrime = gamma * (eventT - beta * eventX)
  const ctAxis = 190 - 120 * beta
  const tPrimeAxis = 190 + 120 * beta

  return (
    <AppendixCLab
      kicker="Lorentz transformation"
      title="A boost skews the axes instead of just shifting coordinates"
      intro="The Lorentz transformation preserves the light cone while rotating the coordinate grid in Minkowski space."
      notes={[
        {
          label: 'What to look for',
          text: 'The x\' and t\' axes tilt as beta changes, but the 45° light lines stay fixed.'
        },
        {
          label: 'Why it matters',
          text: 'A Lorentz boost does not just relabel events; it changes which slices of spacetime count as equal time.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Spacetime grid</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Lorentz transformed axes">
            <rect x="26" y="24" width="428" height="236" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {Array.from({ length: 7 }).map((_, index) => (
              <line
                key={`v-${index}`}
                x1={80 + index * 48}
                y1="38"
                x2={80 + index * 48}
                y2="244"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            ))}
            {Array.from({ length: 5 }).map((_, index) => (
              <line
                key={`h-${index}`}
                x1="62"
                y1={64 + index * 40}
                x2="430"
                y2={64 + index * 40}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            ))}
            <line x1="74" y1="180" x2="414" y2="180" stroke="#0f766e" strokeWidth="4" />
            <line x1="128" y1="244" x2="128" y2="40" stroke="#0f766e" strokeWidth="4" />
            <line x1="74" y1="180" x2="414" y2="52" stroke="#c2410b" strokeWidth="4" />
            <line x1="240" y1="244" x2={tPrimeAxis} y2="40" stroke="#7c3aed" strokeWidth="4" />
            <line x1="74" y1="180" x2={ctAxis} y2="40" stroke="#7c3aed" strokeWidth="4" />
            <text x="84" y="202" className="appendix-c-svg-label">x</text>
            <text x="132" y="54" className="appendix-c-svg-label">ct</text>
            <text x="362" y="212" className="appendix-c-svg-label">x&apos;</text>
            <text x="248" y="54" className="appendix-c-svg-label">ct&apos;</text>
            <circle cx={eventX + 120} cy={eventT} r="7" fill="#c2410b" />
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Readout for a sample event</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>x&apos;</strong>
              <span>{xPrime.toFixed(1)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>t&apos;</strong>
              <span>{tPrime.toFixed(1)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>gamma</strong>
              <span>{gamma.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>formula</strong>
              <span>x&apos; = γ(x - vt), t&apos; = γ(t - vx/c²)</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Boost speed: {beta.toFixed(2)} c
            <input
              type="range"
              min="0"
              max="0.9"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCSimultaneityDemo() {
  const [beta, setBeta] = useState(0.55)
  const [deltaX, setDeltaX] = useState(120)
  const gamma = useUnitGamma(beta)
  const deltaTPrime = -gamma * beta * deltaX
  const slope = 1 / Math.max(beta, 0.08)

  return (
    <AppendixCLab
      kicker="Relativity of simultaneity"
      title="Events that are simultaneous in one frame are not simultaneous in another"
      intro="A single boost tilts the equal-time slices. Spatial separation matters when observers move relative to each other."
      notes={[
        {
          label: 'What to look for',
          text: 'The red line marks two events with Δt = 0 in the rest frame, but the moving frame reads a nonzero Δt\'.'
        },
        {
          label: 'Why it matters',
          text: 'Simultaneity is not absolute. It depends on the observer\'s inertial frame.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Equal-time slice</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Relativity of simultaneity">
            <rect x="30" y="26" width="420" height="210" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="78" y1="200" x2="410" y2="200" stroke="#64748b" strokeWidth="2" />
            <line x1="150" y1="44" x2="150" y2="200" stroke="#64748b" strokeWidth="2" />
            <line x1="150" y1="156" x2="354" y2="156" stroke="#c2410b" strokeWidth="4" />
            <line x1="150" y1="156" x2="306" y2="156" stroke="#c2410b" strokeWidth="4" strokeDasharray="8 8" />
            <line x1="150" y1="156" x2={150 + deltaX} y2="156" stroke="#0f766e" strokeWidth="4" />
            <line x1="210" y1="200" x2={210 + 120} y2="92" stroke="#7c3aed" strokeWidth="4" />
            <circle cx="150" cy="156" r="8" fill="#0f766e" />
            <circle cx={150 + deltaX} cy="156" r="8" fill="#c2410b" />
            <text x="76" y="50" className="appendix-c-svg-label">Δt = 0 in this frame</text>
            <text x="246" y="94" className="appendix-c-svg-label">t&apos; = const</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Moving-frame readout</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>Δx</strong>
              <span>{deltaX.toFixed(0)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>Δt&apos;</strong>
              <span>{deltaTPrime.toFixed(1)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>gamma</strong>
              <span>{gamma.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>observation</strong>
              <span>simultaneity tilts with the observer&apos;s motion</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Relative speed: {beta.toFixed(2)} c
            <input
              type="range"
              min="0"
              max="0.9"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
          <label className="appendix-c-inline-control">
            Spatial separation: {deltaX}
            <input
              type="range"
              min="40"
              max="180"
              step="1"
              value={deltaX}
              onChange={(e) => setDeltaX(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <div className="appendix-c-mini-caption">equal-time line slope ≈ {slope.toFixed(2)}</div>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCIntervalDemo() {
  const [dt, setDt] = useState(120)
  const [dx, setDx] = useState(70)
  const ds2 = -(dt ** 2) + dx ** 2
  const classification = ds2 < 0 ? 'timelike' : ds2 === 0 ? 'null' : 'spacelike'
  const regionColor = classification === 'timelike' ? '#0f766e' : classification === 'null' ? '#7c3aed' : '#c2410b'

  return (
    <AppendixCLab
      kicker="Spacetime interval"
      title="The light cone separates timelike, null, and spacelike separation"
      intro="The invariant interval is the geometric quantity that all inertial observers agree on."
      notes={[
        {
          label: 'What to look for',
          text: 'Moving the point across the cone changes the sign of ds², which changes the causal interpretation.'
        },
        {
          label: 'Why it matters',
          text: 'Causality is encoded in the sign of the interval, not in coordinate values alone.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Causal diagram</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Light cone and interval classification">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="88" y1="210" x2="392" y2="210" stroke="#64748b" strokeWidth="2" />
            <line x1="160" y1="232" x2="160" y2="44" stroke="#64748b" strokeWidth="2" />
            <line x1="160" y1="158" x2="92" y2="90" stroke="#94a3b8" strokeWidth="3" />
            <line x1="160" y1="158" x2="228" y2="90" stroke="#94a3b8" strokeWidth="3" />
            <line x1="160" y1="158" x2="92" y2="226" stroke="#94a3b8" strokeWidth="3" />
            <line x1="160" y1="158" x2="228" y2="226" stroke="#94a3b8" strokeWidth="3" />
            <circle cx={160 + dx * 1.2} cy={210 - dt * 0.8} r="11" fill={regionColor} opacity="0.9" />
            <text x="74" y="68" className="appendix-c-svg-label">light cone</text>
            <text x="248" y="74" className="appendix-c-svg-label">timelike inside</text>
            <text x="250" y="210" className="appendix-c-svg-label">spacelike outside</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Interval readout</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>Δt</strong>
              <span>{dt}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>Δx</strong>
              <span>{dx}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>ds²</strong>
              <span>{ds2}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>type</strong>
              <span>{classification}</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Time separation: {dt}
            <input
              type="range"
              min="30"
              max="180"
              step="1"
              value={dt}
              onChange={(e) => setDt(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="appendix-c-inline-control">
            Space separation: {dx}
            <input
              type="range"
              min="10"
              max="180"
              step="1"
              value={dx}
              onChange={(e) => setDx(Number.parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCKinematicsDemo() {
  const [beta, setBeta] = useState(0.6)
  const gamma = useUnitGamma(beta)
  const properYears = 10
  const labYears = properYears * gamma
  const restLength = 8
  const movingLength = restLength / gamma

  return (
    <AppendixCLab
      kicker="Proper time, time dilation, length contraction"
      title="The same geometry makes moving clocks run slow and moving rods shrink"
      intro="Proper time is the invariant clock time along a worldline. Coordinate time, by contrast, depends on the frame."
      notes={[
        {
          label: 'What to look for',
          text: 'The moving clock accumulates less proper time for the same lab-frame duration, and a moving rod is shorter along the direction of motion.'
        },
        {
          label: 'Why it matters',
          text: 'The two effects are not separate tricks. They are both consequences of the same invariant interval.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Clock worldlines</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Proper time and time dilation">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="138" y1="232" x2="138" y2="48" stroke="#0f766e" strokeWidth="5" />
            <line x1="284" y1="232" x2={284 + beta * 72} y2="88" stroke="#c2410b" strokeWidth="5" />
            <line x1={356} y1="232" x2={356 + beta * 72} y2="88" stroke="#c2410b" strokeWidth="5" strokeDasharray="8 8" />
            <text x="116" y="54" className="appendix-c-svg-label">rest clock</text>
            <text x="300" y="54" className="appendix-c-svg-label">moving clock</text>
            <text x="68" y="252" className="appendix-c-svg-label">worldline length = proper time</text>
          </svg>
        </div>

        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Rod contraction</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Length contraction">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="90" y1="160" x2="390" y2="160" stroke="#64748b" strokeWidth="2" />
            <rect x="128" y="128" width="200" height="64" rx="18" fill="#0f766e" opacity="0.18" stroke="#0f766e" strokeWidth="3" />
            <rect x="128" y="212" width={100 + movingLength * 10} height="34" rx="10" fill="#c2410b" opacity="0.18" stroke="#c2410b" strokeWidth="3" />
            <text x="130" y="118" className="appendix-c-svg-label">rest length L₀ = {restLength}</text>
            <text x="130" y="272" className="appendix-c-svg-label">moving length L = {movingLength.toFixed(2)}</text>
          </svg>
        </div>
      </div>

      <label className="appendix-c-inline-control">
        Relative speed: {beta.toFixed(2)} c
        <input
          type="range"
          min="0"
          max="0.9"
          step="0.01"
          value={beta}
          onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
        />
      </label>

      <div className="appendix-c-stat-grid">
        <div className="appendix-c-stat-card accent-teal">
          <strong>proper time</strong>
          <span>{properYears} years</span>
        </div>
        <div className="appendix-c-stat-card accent-orange">
          <strong>lab time</strong>
          <span>{labYears.toFixed(2)} years</span>
        </div>
        <div className="appendix-c-stat-card accent-indigo">
          <strong>gamma</strong>
          <span>{gamma.toFixed(3)}</span>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCVelocityDemo() {
  const [u, setU] = useState(0.7)
  const [v, setV] = useState(0.5)
  const classical = Math.min(u + v, 0.999)
  const relativistic = (u + v) / (1 + u * v)

  return (
    <AppendixCLab
      kicker="Velocity addition"
      title="Relativistic velocities never add past light speed"
      intro="The relativistic composition law replaces simple subtraction or addition when frames move relative to each other."
      notes={[
        {
          label: 'What to look for',
          text: 'The classical sum can exceed c, while the relativistic formula stays safely below it.'
        },
        {
          label: 'Why it matters',
          text: 'The speed limit is built into the transformation law itself.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Composition chart</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Relativistic velocity addition">
            <rect x="32" y="24" width="416" height="208" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="92" y1="176" x2="396" y2="176" stroke="#64748b" strokeWidth="2" />
            <line x1="92" y1="176" x2={92 + u * 220} y2="112" stroke="#0f766e" strokeWidth="6" />
            <line x1={92 + u * 220} y1="112" x2={92 + u * 220 + v * 150} y2="76" stroke="#c2410b" strokeWidth="6" />
            <line x1="92" y1="176" x2={92 + classical * 270} y2="76" stroke="#7c3aed" strokeWidth="4" strokeDasharray="8 8" />
            <line x1="92" y1="176" x2={92 + relativistic * 270} y2="44" stroke="#2563eb" strokeWidth="4" />
            <text x="96" y="202" className="appendix-c-svg-label">frame A</text>
            <text x="338" y="94" className="appendix-c-svg-label">frame B</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Result</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>u</strong>
              <span>{u.toFixed(2)} c</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>v</strong>
              <span>{v.toFixed(2)} c</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>classical</strong>
              <span>{classical.toFixed(3)} c</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>relativistic</strong>
              <span>{relativistic.toFixed(3)} c</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Object speed: {u.toFixed(2)} c
            <input type="range" min="0" max="0.95" step="0.01" value={u} onChange={(e) => setU(Number.parseFloat(e.target.value))} />
          </label>
          <label className="appendix-c-inline-control">
            Frame speed: {v.toFixed(2)} c
            <input type="range" min="0" max="0.95" step="0.01" value={v} onChange={(e) => setV(Number.parseFloat(e.target.value))} />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCFourVectorDemo() {
  const [beta, setBeta] = useState(0.65)
  const gamma = useUnitGamma(beta)
  const p = gamma * beta
  const E = gamma
  const minkowskiNorm = (E ** 2) - (p ** 2)

  return (
    <AppendixCLab
      kicker="Four-vectors, momentum, and energy"
      title="Energy and momentum are pieces of one relativistic object"
      intro="Four-vectors package spatial and temporal components together so Lorentz transformations act linearly."
      notes={[
        {
          label: 'What to look for',
          text: 'For a massive particle, E² - p²c² stays fixed while E and p individually change with speed.'
        },
        {
          label: 'Why it matters',
          text: 'The photon case sits on the lightlike boundary, where E = pc.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Energy-momentum plane</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Energy momentum relation">
            <rect x="30" y="24" width="420" height="236" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="86" y1="208" x2="398" y2="208" stroke="#64748b" strokeWidth="2" />
            <line x1="86" y1="208" x2="86" y2="54" stroke="#64748b" strokeWidth="2" />
            <path d="M 92 190 C 182 190, 258 160, 366 72" fill="none" stroke="#0f766e" strokeWidth="5" />
            <path d="M 92 190 L 360 74" fill="none" stroke="#c2410b" strokeWidth="4" strokeDasharray="8 6" />
            <circle cx={92 + p * 170} cy={190 - E * 110} r="10" fill="#7c3aed" />
            <circle cx={358} cy={74} r="9" fill="#2563eb" />
            <text x="92" y="228" className="appendix-c-svg-label">p</text>
            <text x="64" y="68" className="appendix-c-svg-label">E</text>
            <text x="278" y="54" className="appendix-c-svg-label">massive curve</text>
            <text x="286" y="236" className="appendix-c-svg-label">lightlike boundary</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Four-vector readout</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>Uμ</strong>
              <span>(γ, γβ)</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>pμ</strong>
              <span>(E, p)</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>E</strong>
              <span>{E.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>E² - p²</strong>
              <span>{minkowskiNorm.toFixed(3)}</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Particle speed: {beta.toFixed(2)} c
            <input
              type="range"
              min="0"
              max="0.95"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
          <div className="appendix-c-mini-caption">massless limit lies exactly on the line E = pc</div>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCTwinDemo() {
  const [beta, setBeta] = useState(0.75)
  const [labYears, setLabYears] = useState(12)
  const gamma = useUnitGamma(beta)
  const travelerYears = labYears / gamma
  const turnaround = 120 + beta * 24

  return (
    <AppendixCLab
      kicker="Twin paradox"
      title="The straighter worldline accumulates more proper time"
      intro="The paradox disappears once you compare entire worldlines, not just speeds at one moment."
      notes={[
        {
          label: 'What to look for',
          text: 'The traveling twin takes a kinked path through spacetime, so the accumulated proper time is smaller.'
        },
        {
          label: 'Why it matters',
          text: 'Acceleration matters here because it changes the worldline and the inertial frame, not because acceleration itself directly causes aging.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Worldline comparison</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Twin paradox worldlines">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="138" y1="232" x2="138" y2="48" stroke="#0f766e" strokeWidth="5" />
            <path d={`M 138 232 L ${turnaround} 130 L 138 48`} fill="none" stroke="#c2410b" strokeWidth="5" />
            <circle cx="138" cy="232" r="10" fill="#0f766e" />
            <circle cx={turnaround} cy="130" r="10" fill="#c2410b" />
            <circle cx="138" cy="48" r="10" fill="#0f766e" />
            <text x="106" y="46" className="appendix-c-svg-label">Earth twin</text>
            <text x="246" y="120" className="appendix-c-svg-label">travel twin</text>
            <text x="66" y="272" className="appendix-c-svg-label">same endpoints, different proper times</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Proper-time comparison</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>lab duration</strong>
              <span>{labYears.toFixed(1)} years</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>travel twin</strong>
              <span>{travelerYears.toFixed(1)} years</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>gamma</strong>
              <span>{gamma.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>result</strong>
              <span>the traveling twin ages less</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Outbound speed: {beta.toFixed(2)} c
            <input
              type="range"
              min="0.2"
              max="0.9"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
          <label className="appendix-c-inline-control">
            Earth-frame duration: {labYears}
            <input
              type="range"
              min="6"
              max="20"
              step="1"
              value={labYears}
              onChange={(e) => setLabYears(Number.parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCDopplerDemo() {
  const [beta, setBeta] = useState(0.55)
  const [angle, setAngle] = useState(25)
  const lineFactor = Math.sqrt((1 - beta) / (1 + beta))
  const forwardBoost = Math.pow(Math.max(0.08, Math.cos((angle * Math.PI) / 180)), 3) / Math.pow(1 - beta, 2)

  return (
    <AppendixCLab
      kicker="Doppler effect and beaming"
      title="Motion changes the observed frequency and squeezes radiation forward"
      intro="Relativistic wavefronts arrive with different spacing, and high-speed sources concentrate radiation into a forward cone."
      notes={[
        {
          label: 'What to look for',
          text: 'Receding motion lowers the observed frequency, while the forward lobe sharpens dramatically as beta increases.'
        },
        {
          label: 'Why it matters',
          text: 'The same transformation rules explain both frequency shifts and apparent angular compression.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Wavefront spacing</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Doppler shift">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="140" cy="156" r="10" fill="#0f766e" />
            <circle cx="310" cy="156" r="10" fill="#c2410b" />
            {Array.from({ length: 5 }).map((_, index) => (
              <circle
                key={`wave-${index}`}
                cx={140 - index * 18}
                cy="156"
                r={30 + index * 20}
                fill="none"
                stroke={index < 2 ? '#0f766e' : '#c2410b'}
                strokeWidth="3"
                opacity="0.9"
              />
            ))}
            <text x="88" y="54" className="appendix-c-svg-label">approach: higher frequency</text>
            <text x="274" y="54" className="appendix-c-svg-label">recession: lower frequency</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Observed shift</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>beta</strong>
              <span>{beta.toFixed(2)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>Doppler factor</strong>
              <span>{lineFactor.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>forward beaming</strong>
              <span>{forwardBoost.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>angle</strong>
              <span>{angle}°</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Relative speed: {beta.toFixed(2)} c
            <input
              type="range"
              min="0"
              max="0.9"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
          <label className="appendix-c-inline-control">
            View angle: {angle}°
            <input
              type="range"
              min="0"
              max="80"
              step="1"
              value={angle}
              onChange={(e) => setAngle(Number.parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCEMDemo() {
  const [beta, setBeta] = useState(0.45)
  const gamma = useUnitGamma(beta)
  const ePerp = gamma * (1 + beta)
  const bPerp = gamma * (1 + beta * 0.75)

  return (
    <AppendixCLab
      kicker="Electromagnetism"
      title="Electric and magnetic fields are frame-dependent pieces of the same tensor"
      intro="A boost changes the split between E and B, even when the underlying electromagnetic field tensor is the same."
      notes={[
        {
          label: 'What to look for',
          text: 'Perpendicular electric and magnetic components mix under a boost, while the relativistic tensor remains the invariant object.'
        },
        {
          label: 'Why it matters',
          text: 'This is one of the clearest physical examples of why special relativity unifies space and time.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Field mixing</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Electric and magnetic field mixing">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="96" y1="176" x2="188" y2="176" stroke="#0f766e" strokeWidth="6" />
            <line x1="96" y1="176" x2="96" y2="88" stroke="#c2410b" strokeWidth="6" />
            <path d="M 280 176 L 366 176" stroke="#2563eb" strokeWidth="6" />
            <path d="M 280 176 L 280 110" stroke="#7c3aed" strokeWidth="6" />
            <text x="72" y="74" className="appendix-c-svg-label">rest frame</text>
            <text x="258" y="74" className="appendix-c-svg-label">boosted frame</text>
            <text x="92" y="200" className="appendix-c-svg-label">E</text>
            <text x="108" y="114" className="appendix-c-svg-label">B</text>
            <text x="274" y="200" className="appendix-c-svg-label">E&apos;</text>
            <text x="294" y="124" className="appendix-c-svg-label">B&apos;</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Boosted components</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>gamma</strong>
              <span>{gamma.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>E&apos;⊥</strong>
              <span>{ePerp.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>B&apos;⊥</strong>
              <span>{bPerp.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>tensor</strong>
              <span>Fμν packages the fields together</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Boost speed: {beta.toFixed(2)} c
            <input
              type="range"
              min="0"
              max="0.9"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCDynamicsDemo() {
  const [beta, setBeta] = useState(0.35)
  const gamma = useUnitGamma(beta)
  const parallelFactor = Math.pow(gamma, 3)
  const perpendicularFactor = gamma
  const lowVLimit = beta < 0.25 ? 'Newtonian' : 'relativistic correction is visible'

  return (
    <AppendixCLab
      kicker="Dynamics and the low-velocity limit"
      title="Force, acceleration, and momentum reduce to Newtonian forms when beta is small"
      intro="The four-force packages relativistic dynamics, while the small-velocity limit recovers the familiar formulas from classical mechanics."
      notes={[
        {
          label: 'What to look for',
          text: 'Longitudinal response grows faster than transverse response as speed approaches c.'
        },
        {
          label: 'Why it matters',
          text: 'Newtonian mechanics is not replaced; it emerges as the small-beta limit.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Acceleration response</div>
          <svg viewBox="0 0 480 300" role="img" aria-label="Relativistic dynamics">
            <rect x="28" y="24" width="424" height="238" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="92" y1="208" x2="392" y2="208" stroke="#64748b" strokeWidth="2" />
            <rect x="128" y="158" width={90 + parallelFactor * 16} height="32" rx="10" fill="#c2410b" opacity="0.18" stroke="#c2410b" strokeWidth="3" />
            <rect x="128" y="106" width={90 + perpendicularFactor * 16} height="32" rx="10" fill="#0f766e" opacity="0.18" stroke="#0f766e" strokeWidth="3" />
            <text x="130" y="148" className="appendix-c-svg-label">parallel response</text>
            <text x="130" y="198" className="appendix-c-svg-label">perpendicular response</text>
            <text x="80" y="72" className="appendix-c-svg-label">F = dp/dt, p = γmu</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Response factors</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>gamma</strong>
              <span>{gamma.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>parallel factor</strong>
              <span>{parallelFactor.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>perpendicular factor</strong>
              <span>{perpendicularFactor.toFixed(3)}</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>limit</strong>
              <span>{lowVLimit}</span>
            </div>
          </div>
          <label className="appendix-c-inline-control">
            Speed scale: {beta.toFixed(2)} c
            <input
              type="range"
              min="0"
              max="0.95"
              step="0.01"
              value={beta}
              onChange={(e) => setBeta(Number.parseFloat(e.target.value))}
            />
          </label>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCInvariantDemo() {
  const invariantItems = [
    'spacetime interval',
    'speed of light',
    'proper time',
    'rest mass',
    'laws of physics'
  ]
  const frameDependentItems = [
    'time coordinate',
    'space coordinate',
    'simultaneity',
    'energy',
    'momentum direction'
  ]

  return (
    <AppendixCLab
      kicker="Common misunderstandings"
      title="Special relativity preserves objective structure instead of erasing it"
      intro="A good intuition check is to separate invariants from frame-dependent descriptions."
      notes={[
        {
          label: 'What to look for',
          text: 'The same theory makes some quantities universal and others observer-dependent.'
        },
        {
          label: 'Why it matters',
          text: 'Relativity replaces naive absolutes with better invariants, not with subjectivism.'
        }
      ]}
    >
      <div className="appendix-c-two-column-list">
        <div className="appendix-c-list-card accent-teal">
          <h4>Invariants</h4>
          {invariantItems.map((item) => (
            <div key={item} className="appendix-c-list-row">
              <span className="appendix-c-list-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="appendix-c-list-card accent-orange">
          <h4>Frame dependent</h4>
          {frameDependentItems.map((item) => (
            <div key={item} className="appendix-c-list-row">
              <span className="appendix-c-list-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCBridgeDemo() {
  return (
    <AppendixCLab
      kicker="Bridge to tensor calculus and geometry"
      title="Special relativity is the flat-spacetime limit of differential geometry"
      intro="The Minkowski metric is the relativistic starting point for the tensor and curvature language used in general relativity."
      notes={[
        {
          label: 'What to look for',
          text: 'The same metric-based reasoning used here becomes local metric geometry on a curved manifold.'
        },
        {
          label: 'Why it matters',
          text: 'Tensor calculus is not separate from relativity; it is the natural language that expresses it cleanly.'
        }
      ]}
    >
      <div className="appendix-c-dual-panel">
        <div className="appendix-c-svg-card">
          <div className="appendix-c-panel-title">Flat-to-curved map</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Minkowski geometry bridge">
            <rect x="28" y="24" width="424" height="208" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="92" y1="188" x2="204" y2="188" stroke="#0f766e" strokeWidth="4" />
            <line x1="148" y1="238" x2="148" y2="76" stroke="#0f766e" strokeWidth="4" />
            <path d="M 276 188 C 310 128, 350 112, 390 140 C 418 160, 428 190, 406 216" fill="none" stroke="#c2410b" strokeWidth="5" />
            <path d="M 276 188 C 310 128, 350 112, 390 140 C 418 160, 428 190, 406 216" fill="none" stroke="#c2410b" strokeWidth="5" opacity="0.22" />
            <text x="86" y="60" className="appendix-c-svg-label">flat inertial frame</text>
            <text x="274" y="60" className="appendix-c-svg-label">curved local geometry</text>
          </svg>
        </div>

        <div className="appendix-c-matrix-card">
          <div className="appendix-c-panel-title">Language bridge</div>
          <div className="appendix-c-matrix-grid">
            <div className="appendix-c-matrix-cell accent-teal">
              <strong>metric</strong>
              <span>ημν → gμν(x)</span>
            </div>
            <div className="appendix-c-matrix-cell accent-orange">
              <strong>connection</strong>
              <span>zero in inertial Cartesian coordinates</span>
            </div>
            <div className="appendix-c-matrix-cell accent-indigo">
              <strong>objects</strong>
              <span>vectors, tensors, worldlines</span>
            </div>
            <div className="appendix-c-matrix-cell accent-slate">
              <strong>meaning</strong>
              <span>flat spacetime is the local tangent model</span>
            </div>
          </div>
        </div>
      </div>
    </AppendixCLab>
  )
}

function AppendixCVisualizationSuite({ markdown }) {
  const blocks = useMemo(() => splitMarkdown(markdown), [markdown])

  return (
    <div className="appendix-c-visual-suite">
      {blocks.map((block) => {
        if (block.type === 'markdown') {
          return <SectionMarkdown key={block.key} blockKey={block.key} content={block.content} />
        }

        return (
          <div key={block.key}>
            <SectionMarkdown blockKey={block.key} content={block.content} />
            {block.number === 2 && <AppendixCPostulatesDemo />}
            {block.number === 4 && <AppendixCLorentzDemo />}
            {block.number === 6 && <AppendixCSimultaneityDemo />}
            {block.number === 7 && <AppendixCIntervalDemo />}
            {block.number === 9 && <AppendixCKinematicsDemo />}
            {block.number === 12 && <AppendixCVelocityDemo />}
            {block.number === 13 && <AppendixCFourVectorDemo />}
            {block.number === 17 && <AppendixCTwinDemo />}
            {block.number === 20 && <AppendixCDopplerDemo />}
            {block.number === 22 && <AppendixCEMDemo />}
            {block.number === 23 && <AppendixCDynamicsDemo />}
            {block.number === 26 && <AppendixCInvariantDemo />}
            {block.number === 30 && <AppendixCBridgeDemo />}
          </div>
        )
      })}
    </div>
  )
}

export default AppendixCVisualizationSuite
