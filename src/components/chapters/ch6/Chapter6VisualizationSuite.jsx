import { useMemo, useState } from 'react'
import './Chapter6VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter6HyperbolaDemo() {
  const [acceleration, setAcceleration] = useState(42)

  const normalized = acceleration / 100
  const g = 0.45 + normalized * 1.1
  const horizon = 1 / g
  const tau = 0.7 + normalized * 1.1
  const t = Math.sinh(g * tau) / g
  const x = Math.cosh(g * tau) / g

  const worldline = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => {
        const s = index / 27
        const tauSample = 0.1 + s * 1.8
        return {
          t: Math.sinh(g * tauSample) / g,
          x: Math.cosh(g * tauSample) / g,
        }
      }),
    [g]
  )

  return (
    <article className="chapter6-lab" id="hyperbolic-motion">
      <div className="chapter6-lab-header">
        <div>
          <span className="chapter6-lab-kicker">Hyperbolic motion</span>
          <h3>Uniform proper acceleration traces a hyperbola in Minkowski space</h3>
        </div>
        <label className="chapter6-inline-control">
          Acceleration strength: {acceleration}
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

      <p className="chapter6-lab-intro">
        The chapter&apos;s prototype accelerated observer follows a hyperbola, with null
        asymptotes and a characteristic length scale of order <code>g^-1</code>.
      </p>

      <div className="chapter6-dual-panel">
        <div className="chapter6-svg-card">
          <div className="chapter6-panel-title">World line</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Hyperbolic world line with null asymptotes">
            <defs>
              <marker id="chapter6ArrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="82" y1="206" x2="392" y2="206" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="82" y1="206" x2="82" y2="62" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 110 192 L 348 82" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="7 6" />
            <path d="M 110 92 L 348 204" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="7 6" />
            <path
              d={worldline
                .map((point, index) => {
                  const px = 82 + point.x * 92
                  const py = 206 - point.t * 76
                  return `${index === 0 ? 'M' : 'L'} ${px} ${py}`
                })
                .join(' ')}
              fill="none"
              stroke="#0f766e"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx={82 + x * 92} cy={206 - t * 76} r="6.5" fill="#c2410c" />
            <path d={`M ${82 + x * 92 - 28} ${206 - t * 76 - 20} L ${82 + x * 92 + 18} ${206 - t * 76 + 6}`} stroke="#c2410c" strokeWidth="3" strokeLinecap="round" markerEnd="url(#chapter6ArrowHead)" />
            <text x="72" y="52" className="chapter6-svg-label">t</text>
            <text x="394" y="224" className="chapter6-svg-label">x</text>
            <text x="202" y="74" className="chapter6-svg-label">null asymptotes</text>
            <text x="192" y="214" className="chapter6-svg-label">x^2 - t^2 = g^-2</text>
          </svg>
        </div>

        <div className="chapter6-matrix-card">
          <div className="chapter6-panel-title">Instantaneous values</div>
          <div className="chapter6-matrix-grid">
            <div className="chapter6-matrix-cell accent-teal">
              <strong>g</strong>
              <span>proper acceleration</span>
            </div>
            <div className="chapter6-matrix-cell accent-orange">
              <strong>g^-1</strong>
              <span>natural length scale</span>
            </div>
            <div className="chapter6-matrix-cell accent-indigo">
              <strong>τ</strong>
              <span>proper time along the world line</span>
            </div>
            <div className="chapter6-matrix-cell accent-slate">
              <strong>u · a = 0</strong>
              <span>4-acceleration stays orthogonal to 4-velocity</span>
            </div>
          </div>
          <div className="chapter6-matrix-caption">
            <div>current event: t = {formatSigned(t)}, x = {formatSigned(x)}</div>
            <div>horizon scale: {formatSigned(horizon)}</div>
          </div>
        </div>
      </div>

      <div className="chapter6-lab-notes">
        <div className="chapter6-note">
          <strong>What to look for:</strong> the world line bends away from inertial motion
          but remains locally well described by special relativity.
        </div>
        <div className="chapter6-note">
          <strong>Why it matters:</strong> the scale <code>g^-1</code> is the chapter&apos;s
          first warning that the accelerated frame can only be local.
        </div>
      </div>
    </article>
  )
}

function Chapter6TetradDemo() {
  const [rotation, setRotation] = useState(28)

  const normalized = rotation / 100
  const g = 0.45 + normalized * 1.1
  const tau = 0.4 + normalized * 1.3
  const ch = Math.cosh(g * tau)
  const sh = Math.sinh(g * tau)
  const fwDrift = normalized * 0.6

  return (
    <article className="chapter6-lab" id="tetrad-transport">
      <div className="chapter6-lab-header">
        <div>
          <span className="chapter6-lab-kicker">Tetrads</span>
          <h3>A carried orthonormal frame keeps the observer locally at rest</h3>
        </div>
        <label className="chapter6-inline-control">
          Transport twist: {rotation}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={rotation}
            onChange={(e) => setRotation(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter6-lab-intro">
        The chapter&apos;s tetrad carries the observer&apos;s time axis with him and keeps the
        spatial axes orthonormal. Fermi-Walker transport is the no-extra-rotation rule.
      </p>

      <div className="chapter6-dual-panel">
        <div className="chapter6-svg-card">
          <div className="chapter6-panel-title">Instantaneous tetrad</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Orthonormal tetrad carried by an accelerated observer">
            <defs>
              <marker id="chapter6TetradHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="210" cy="156" r="8" fill="#0f766e" />
            <path d={`M 210 156 L ${210 + 84 * ch} ${156 - 74 * sh}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter6TetradHead)" />
            <path d={`M 210 156 L ${210 + 74 * sh} ${156 - 74 * ch}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter6TetradHead)" />
            <path d={`M 210 156 L ${210 - 30 * fwDrift} ${156 - 90 * fwDrift}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter6TetradHead)" />
            <path d={`M 210 156 L ${210 - 28 * fwDrift} ${156 + 64 * fwDrift}`} stroke="#475569" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter6TetradHead)" />
            <text x="170" y="194" className="chapter6-svg-label">e0 = u</text>
            <text x="282" y="96" className="chapter6-svg-label">e1</text>
            <text x="142" y="102" className="chapter6-svg-label">nonrotating carry</text>
          </svg>
        </div>

        <div className="chapter6-matrix-card">
          <div className="chapter6-panel-title">Transport rule</div>
          <div className="chapter6-matrix-grid">
            <div className="chapter6-matrix-cell accent-teal">
              <strong>e0 = u</strong>
              <span>time axis follows the observer</span>
            </div>
            <div className="chapter6-matrix-cell accent-orange">
              <strong>e1</strong>
              <span>points along the acceleration</span>
            </div>
            <div className="chapter6-matrix-cell accent-indigo">
              <strong>Fermi-Walker</strong>
              <span>keeps extra spatial rotation away</span>
            </div>
            <div className="chapter6-matrix-cell accent-slate">
              <strong>u ∧ a</strong>
              <span>the required boost plane</span>
            </div>
          </div>
          <div className="chapter6-matrix-caption">
            <div>cosh(gτ) = {formatSigned(ch)}</div>
            <div>sinh(gτ) = {formatSigned(sh)}</div>
          </div>
        </div>
      </div>

      <div className="chapter6-lab-notes">
        <div className="chapter6-note">
          <strong>What to look for:</strong> the time axis rotates into the acceleration
          direction, but the spatial axes do not pick up extra twisting.
        </div>
        <div className="chapter6-note">
          <strong>Why it matters:</strong> this is the operational meaning of a nonrotating
          carried frame in flat spacetime.
        </div>
      </div>
    </article>
  )
}

function Chapter6CoordinatesDemo() {
  const [position, setPosition] = useState(34)

  const normalized = position / 100
  const g = 0.45 + normalized * 1.1
  const xi1 = -0.4 + normalized * 0.9
  const clockRate = 1 + g * xi1
  const horizon = -1 / g

  return (
    <article className="chapter6-lab" id="local-coordinates">
      <div className="chapter6-lab-header">
        <div>
          <span className="chapter6-lab-kicker">Local coordinates</span>
          <h3>The accelerated frame is local, and clocks tick at different rates across it</h3>
        </div>
        <label className="chapter6-inline-control">
          Lattice position: {position}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={position}
            onChange={(e) => setPosition(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter6-lab-intro">
        The local coordinates become Rindler-type coordinates for uniform acceleration.
        Their metric makes the clock-rate variation across the accelerated lattice visible.
      </p>

      <div className="chapter6-dual-panel">
        <div className="chapter6-svg-card">
          <div className="chapter6-panel-title">Coordinate patch</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Local accelerated coordinate patch">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <path d="M 94 206 L 390 206" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 94 206 L 94 60" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 116 186 C 150 160, 188 142, 224 120 C 258 98, 300 82, 342 70" stroke="#0f766e" strokeWidth="4" fill="none" />
            <path d={`M 166 200 L 166 ${200 - 88 * (0.4 + normalized * 0.4)}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" />
            <path d={`M 238 200 L 238 ${200 - 118 * (0.3 + normalized * 0.5)}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
            <path d={`M 310 200 L 310 ${200 - 148 * (0.24 + normalized * 0.55)}`} stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            <text x="70" y="52" className="chapter6-svg-label">x0 = τ</text>
            <text x="394" y="224" className="chapter6-svg-label">x1</text>
            <text x="126" y="72" className="chapter6-svg-label">constant ξ0 slices bend into hyperbolas</text>
            <text x="146" y="224" className="chapter6-svg-label">{'ξ1 > horizon'}</text>
          </svg>
        </div>

        <div className="chapter6-matrix-card">
          <div className="chapter6-panel-title">Metric and clock rate</div>
          <div className="chapter6-matrix-grid">
            <div className="chapter6-matrix-cell accent-teal">
              <strong>ds^2</strong>
              <span>local accelerated line element</span>
            </div>
            <div className="chapter6-matrix-cell accent-orange">
              <strong>1 + g ξ1</strong>
              <span>clock rate factor across the frame</span>
            </div>
            <div className="chapter6-matrix-cell accent-indigo">
              <strong>ξ1 = 0</strong>
              <span>observer&apos;s own world line</span>
            </div>
            <div className="chapter6-matrix-cell accent-slate">
              <strong>ξ1 = -g^-1</strong>
              <span>coordinate breakdown / horizon</span>
            </div>
          </div>
          <div className="chapter6-matrix-caption">
            <div>g = {formatSigned(g)}</div>
            <div>clock rate dτ/dξ0 = {formatSigned(clockRate)}</div>
            <div>horizon location: {formatSigned(horizon)}</div>
          </div>
        </div>
      </div>

      <div className="chapter6-lab-notes">
        <div className="chapter6-note">
          <strong>What to look for:</strong> clocks at different positions in the frame do
          not stay synchronized once acceleration is present.
        </div>
        <div className="chapter6-note">
          <strong>Why it matters:</strong> the coordinate patch works only locally, which is
          exactly the point needed before general relativity.
        </div>
      </div>
    </article>
  )
}

function Chapter6RotationDemo() {
  const [twist, setTwist] = useState(38)

  const normalized = twist / 100
  const omega = 0.15 + normalized * 0.55
  const theta = normalized * Math.PI * 1.2
  const thomas = (1 + omega) * normalized * 0.45
  const x = Math.cos(theta)
  const y = Math.sin(theta)

  return (
    <article className="chapter6-lab" id="rotating-tetrad">
      <div className="chapter6-lab-header">
        <div>
          <span className="chapter6-lab-kicker">Rotation</span>
          <h3>Extra spatial rotation produces Coriolis terms and Thomas precession</h3>
        </div>
        <label className="chapter6-inline-control">
          Twist strength: {twist}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={twist}
            onChange={(e) => setTwist(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter6-lab-intro">
        If the tetrad is allowed to rotate, the observer picks up the familiar noninertial
        effects. Fermi-Walker transport removes the extra twist; otherwise a Thomas
        precession appears for spinning bodies.
      </p>

      <div className="chapter6-dual-panel">
        <div className="chapter6-svg-card">
          <div className="chapter6-panel-title">Rotating axes</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Rotating tetrad with Coriolis effects">
            <defs>
              <marker id="chapter6RotateHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="220" cy="138" r="10" fill="#0f766e" />
            <path d={`M 220 138 L ${220 + 98 * x} ${138 - 98 * y}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter6RotateHead)" />
            <path d={`M 220 138 L ${220 - 98 * y} ${138 - 98 * x}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter6RotateHead)" />
            <path d={`M 220 138 C ${246 + 22 * normalized} ${124 - 18 * normalized}, ${266 + 18 * normalized} ${166 + 18 * normalized}, ${286 + 34 * normalized} ${150 + 8 * normalized}`} stroke="#7c3aed" strokeWidth="4" fill="none" />
            <text x="146" y="58" className="chapter6-svg-label">extra spatial rotation</text>
            <text x="290" y="84" className="chapter6-svg-label">Coriolis term</text>
            <text x="176" y="220" className="chapter6-svg-label">Thomas precession scale</text>
          </svg>
        </div>

        <div className="chapter6-matrix-card">
          <div className="chapter6-panel-title">Transport consequences</div>
          <div className="chapter6-matrix-grid">
            <div className="chapter6-matrix-cell accent-teal">
              <strong>ω</strong>
              <span>extra spatial angular velocity</span>
            </div>
            <div className="chapter6-matrix-cell accent-orange">
              <strong>Coriolis</strong>
              <span>appears when the frame rotates</span>
            </div>
            <div className="chapter6-matrix-cell accent-indigo">
              <strong>Thomas</strong>
              <span>precession from noncommuting boosts</span>
            </div>
            <div className="chapter6-matrix-cell accent-slate">
              <strong>FW transport</strong>
              <span>removes the extra twist</span>
            </div>
          </div>
          <div className="chapter6-matrix-caption">
            <div>ω = {formatSigned(omega)}</div>
            <div>Thomas precession scale = {formatSigned(thomas)}</div>
          </div>
        </div>
      </div>

      <div className="chapter6-lab-notes">
        <div className="chapter6-note">
          <strong>What to look for:</strong> once the tetrad rotates, the local frame picks
          up the familiar noninertial behavior of rotating systems.
        </div>
        <div className="chapter6-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s bridge from accelerated
          observers to the inertial-force language used later in gravity.
        </div>
      </div>
    </article>
  )
}

function Chapter6VisualizationSuite() {
  return (
    <section className="chapter6-visual-suite">
      <div className="chapter6-visual-suite-header">
        <span className="chapter6-visual-suite-kicker">Chapter 6 Visualizations</span>
        <h2>Accelerated observers, made local</h2>
        <p>
          Chapter 6 turns accelerated motion into a local geometric toolkit: hyperbolic
          world lines, carried tetrads, Rindler-type coordinates, and rotating frames.
        </p>
      </div>

      <nav className="chapter6-visual-suite-nav" aria-label="Chapter 6 visualization topics">
        <a href="#hyperbolic-motion">Hyperbola</a>
        <a href="#tetrad-transport">Tetrad</a>
        <a href="#local-coordinates">Coordinates</a>
        <a href="#rotating-tetrad">Rotation</a>
      </nav>

      <Chapter6HyperbolaDemo />
      <Chapter6TetradDemo />
      <Chapter6CoordinatesDemo />
      <Chapter6RotationDemo />
    </section>
  )
}

export default Chapter6VisualizationSuite
