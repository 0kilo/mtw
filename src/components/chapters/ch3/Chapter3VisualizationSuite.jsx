import { useMemo, useState } from 'react'
import './Chapter3VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter3FieldTensorDemo() {
  const [eField, setEField] = useState(55)
  const [bField, setBField] = useState(40)
  const [speed, setSpeed] = useState(35)

  const e = eField / 100
  const b = bField / 100
  const v = speed / 100

  const forceX = e
  const forceY = v * b
  const forceMag = Math.hypot(forceX, forceY)
  const tensorRows = [
    ['0', `E=${e.toFixed(2)}`, '0', '0'],
    [`E=${e.toFixed(2)}`, '0', `B=${b.toFixed(2)}`, '0'],
    ['0', `-B=${(-b).toFixed(2)}`, '0', '0'],
    ['0', '0', '0', '0'],
  ]

  return (
    <article className="chapter3-lab" id="field-tensor">
      <div className="chapter3-lab-header">
        <div>
          <span className="chapter3-lab-kicker">Lorentz force</span>
          <h3>The field tensor is the machine behind the force law</h3>
        </div>
        <div className="chapter3-control-stack">
          <label className="chapter3-inline-control">
            Electric field: {eField}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={eField}
              onChange={(e) => setEField(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="chapter3-inline-control">
            Magnetic field: {bField}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={bField}
              onChange={(e) => setBField(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="chapter3-inline-control">
            Particle speed: {speed}
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
      </div>

      <p className="chapter3-lab-intro">
        Chapter 3 defines the electromagnetic field operationally: a charged particle
        feels a 4-force given by <code>dp/dtau = eF(u)</code>. The familiar electric and
        magnetic fields are just the frame split of that tensor.
      </p>

      <div className="chapter3-dual-panel">
        <div className="chapter3-svg-card">
          <div className="chapter3-panel-title">Test particle view</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Charged particle moving in an electromagnetic field">
            <defs>
              <marker id="chapter3ForceHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="236" cy="136" r="18" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx="236" cy="136" r="6" fill="#0f766e" />
            <path d={`M 236 136 L ${236 + 120 * e} 136`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter3ForceHead)" />
            <path d={`M 236 136 L ${236 + 70 * v} ${136 - 110 * b * v}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter3ForceHead)" />
            <path d={`M 140 210 L ${140 + 120 * v} 210`} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" markerEnd="url(#chapter3ForceHead)" />
            <circle cx="326" cy="92" r="6" fill="#7c3aed" />
            <text x="122" y="72" className="chapter3-svg-label">E pushes along x</text>
            <text x="300" y="120" className="chapter3-svg-label">v x B adds y-force</text>
            <text x="122" y="232" className="chapter3-svg-label">v</text>
            <text x="186" y="166" className="chapter3-svg-label">force</text>
          </svg>
        </div>

        <div className="chapter3-matrix-card">
          <div className="chapter3-panel-title">Field tensor components</div>
          <div className="chapter3-matrix-grid" role="img" aria-label="Electromagnetic field tensor matrix">
            {tensorRows.map((row, rowIndex) =>
              row.map((cell, cellIndex) => {
                const active = (rowIndex === 0 && cellIndex === 1) || (rowIndex === 1 && cellIndex === 0) || (rowIndex === 1 && cellIndex === 2) || (rowIndex === 2 && cellIndex === 1)
                return (
                  <div
                    key={`${rowIndex}-${cellIndex}`}
                    className={`chapter3-matrix-cell ${active ? 'active' : ''}`}
                  >
                    {cell}
                  </div>
                )
              })
            )}
          </div>
          <div className="chapter3-matrix-caption">
            <div>force magnitude: {forceMag.toFixed(2)}</div>
            <div>dp/dtau = eF(u)</div>
          </div>
        </div>
      </div>

      <div className="chapter3-lab-notes">
        <div className="chapter3-note">
          <strong>What to look for:</strong> the same object explains both electric and
          magnetic influence. The split into E and B is a choice of frame.
        </div>
        <div className="chapter3-note">
          <strong>Why it matters:</strong> the chapter uses this operational definition to
          motivate tensor notation before it ever starts doing Maxwell algebra.
        </div>
      </div>
    </article>
  )
}

function Chapter3MixingDemo() {
  const [boost, setBoost] = useState(42)
  const [ePerp, setEPerp] = useState(55)
  const [bPerp, setBPerp] = useState(30)

  const beta = (boost / 100) * 0.78
  const gamma = 1 / Math.sqrt(1 - beta ** 2)

  const e = ePerp / 100
  const b = bPerp / 100

  const ePrime = gamma * (e + beta * b)
  const bPrime = gamma * (b - beta * e)

  return (
    <article className="chapter3-lab" id="eb-mixing">
      <div className="chapter3-lab-header">
        <div>
          <span className="chapter3-lab-kicker">Boosts</span>
          <h3>Electric and magnetic fields mix when you change frame</h3>
        </div>
        <div className="chapter3-control-stack">
          <label className="chapter3-inline-control">
            Boost speed: {boost}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={boost}
              onChange={(e) => setBoost(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="chapter3-inline-control">
            E component: {ePerp}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={ePerp}
              onChange={(e) => setEPerp(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="chapter3-inline-control">
            B component: {bPerp}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={bPerp}
              onChange={(e) => setBPerp(Number.parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </div>

      <p className="chapter3-lab-intro">
        Section 3.3 shows the key payoff of the tensor view: a boost does not preserve
        the separate electric and magnetic pieces. It preserves the field tensor, while
        the split into E and B changes with the observer.
      </p>

      <div className="chapter3-dual-panel">
        <div className="chapter3-svg-card">
          <div className="chapter3-panel-title">Lab frame</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Electric and magnetic field in the lab frame">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="112" y1="202" x2="364" y2="202" stroke="#e2e8f0" strokeWidth="2" />
            <line x1="112" y1="202" x2="112" y2="62" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="126" y={202 - e * 96} width="56" height={e * 96} rx="8" fill="#0f766e" opacity="0.8" />
            <rect x="216" y={202 - b * 96} width="56" height={b * 96} rx="8" fill="#c2410c" opacity="0.8" />
            <text x="126" y="224" className="chapter3-svg-label">E</text>
            <text x="216" y="224" className="chapter3-svg-label">B</text>
            <text x="112" y="52" className="chapter3-svg-label">component sizes</text>
            <text x="280" y="96" className="chapter3-svg-label">before boost</text>
          </svg>
        </div>

        <div className="chapter3-svg-card">
          <div className="chapter3-panel-title">Boosted frame</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Electric and magnetic field in a boosted frame">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <line x1="112" y1="202" x2="364" y2="202" stroke="#e2e8f0" strokeWidth="2" />
            <line x1="112" y1="202" x2="112" y2="62" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="126" y={202 - Math.max(0, ePrime) * 72} width="56" height={Math.max(0, ePrime) * 72} rx="8" fill="#2563eb" opacity="0.82" />
            <rect x="216" y={202 - Math.max(0, Math.abs(bPrime)) * 72} width="56" height={Math.max(0, Math.abs(bPrime)) * 72} rx="8" fill="#7c3aed" opacity="0.82" />
            <text x="126" y="224" className="chapter3-svg-label">E'</text>
            <text x="216" y="224" className="chapter3-svg-label">B'</text>
            <text x="112" y="52" className="chapter3-svg-label">mixed by the boost</text>
            <text x="276" y="96" className="chapter3-svg-label">gamma = {gamma.toFixed(2)}</text>
          </svg>
        </div>
      </div>

      <div className="chapter3-lab-notes">
        <div className="chapter3-note">
          <strong>Current transform:</strong> E' = {formatSigned(ePrime)}, B' = {formatSigned(bPrime)}.
        </div>
        <div className="chapter3-note">
          <strong>Chapter lesson:</strong> the field tensor is invariant data; the split
          into electric and magnetic components depends on the observer.
        </div>
      </div>
    </article>
  )
}

function Chapter3MaxwellDemo() {
  const [source, setSource] = useState(45)

  const normalized = source / 100
  const loopCount = 4 + Math.round(normalized * 3)
  const radialCount = 5 + Math.round(normalized * 4)

  return (
    <article className="chapter3-lab" id="maxwell-eqns">
      <div className="chapter3-lab-header">
        <div>
          <span className="chapter3-lab-kicker">Maxwell</span>
          <h3>The two geometric equations hide all four Maxwell laws</h3>
        </div>
        <label className="chapter3-inline-control">
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

      <p className="chapter3-lab-intro">
        The chapter shows that the magnetic pair collapses into <code>dF = 0</code>
        while the electric pair becomes <code>div F = 4piJ</code>. The familiar
        three-dimensional laws are frame-split versions of those two equations.
      </p>

      <div className="chapter3-dual-panel">
        <div className="chapter3-svg-card">
          <div className="chapter3-panel-title">No magnetic monopoles</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Magnetic field loops around a current">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="240" cy="140" r="18" fill="#1f2937" />
            {Array.from({ length: loopCount }, (_, index) => (
              <ellipse
                key={index}
                cx="240"
                cy="140"
                rx={48 + index * 18}
                ry={48 + index * 18}
                fill="none"
                stroke="#0f766e"
                strokeWidth="2.4"
                strokeDasharray={index % 2 === 0 ? '8 6' : '4 8'}
                opacity={0.78 - index * 0.08}
              />
            ))}
            <text x="68" y="54" className="chapter3-svg-label">curling B around the source</text>
            <text x="180" y="214" className="chapter3-svg-label">div B = 0</text>
          </svg>
        </div>

        <div className="chapter3-svg-card">
          <div className="chapter3-panel-title">Charge and current source</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Electric field lines from a source and current">
            <defs>
              <marker id="chapter3ElectricHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#c2410c" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <circle cx="240" cy="140" r="16" fill="#7c2d12" />
            {Array.from({ length: radialCount }, (_, index) => {
              const angle = (index / radialCount) * Math.PI * 2
              const x1 = 240 + Math.cos(angle) * 26
              const y1 = 140 + Math.sin(angle) * 26
              const x2 = 240 + Math.cos(angle) * (72 + normalized * 48)
              const y2 = 140 + Math.sin(angle) * (72 + normalized * 48)
              return <path key={index} d={`M ${x1} ${y1} L ${x2} ${y2}`} stroke="#c2410c" strokeWidth="3" fill="none" markerEnd="url(#chapter3ElectricHead)" />
            })}
            <text x="72" y="54" className="chapter3-svg-label">field lines leave the charge</text>
            <text x="166" y="214" className="chapter3-svg-label">div E = 4pi rho</text>
          </svg>
        </div>
      </div>

      <div className="chapter3-lab-notes">
        <div className="chapter3-note">
          <strong>Unified view:</strong> the magnetic and electric laws are not separate
          ingredients. They are two projections of the same tensor equation.
        </div>
        <div className="chapter3-note">
          <strong>Reading the slider:</strong> it changes the source strength, which makes
          the field pattern denser without changing the geometric form of the law.
        </div>
      </div>
    </article>
  )
}

function Chapter3TensorDemo() {
  const [alignment, setAlignment] = useState(48)

  const normalized = alignment / 100
  const angle = 10 + normalized * 80
  const radians = (angle * Math.PI) / 180
  const ux = 110
  const uy = 0
  const vx = 95 * Math.cos(radians)
  const vy = -95 * Math.sin(radians)
  const wedgeArea = Math.abs(Math.sin(radians)) * 0.66

  const slotLabels = useMemo(
    () => ['1-form slot', 'vector slot', 'vector slot', 'output scalar'],
    []
  )

  return (
    <article className="chapter3-lab" id="tensor-machines">
      <div className="chapter3-lab-header">
        <div>
          <span className="chapter3-lab-kicker">Tensors</span>
          <h3>A tensor is a multilinear machine with slots</h3>
        </div>
        <label className="chapter3-inline-control">
          Alignment: {alignment}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={alignment}
              onChange={(e) => setAlignment(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter3-lab-intro">
        Section 3.2 and Box 3.3 treat tensors as geometric machines. Wedge products
        expose antisymmetry directly: if two vectors line up, the area collapses to
        zero; if they point in different directions, the wedge grows.
      </p>

      <div className="chapter3-dual-panel">
        <div className="chapter3-svg-card">
          <div className="chapter3-panel-title">Antisymmetry test</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Wedge product changes with alignment">
            <defs>
              <marker id="chapter3TensorHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="188" cy="176" r="6" fill="#0f766e" />
            <path d={`M 188 176 L ${188 + ux} ${176 + uy}`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter3TensorHead)" />
            <path d={`M 188 176 L ${188 + vx} ${176 + vy}`} stroke="#c2410c" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter3TensorHead)" />
            <path d={`M ${188 + ux} ${176 + uy} L ${188 + ux + vx} ${176 + uy + vy}`} stroke="#94a3b8" strokeWidth="2.5" fill="none" />
            <path d={`M ${188 + vx} ${176 + vy} L ${188 + ux + vx} ${176 + uy + vy}`} stroke="#94a3b8" strokeWidth="2.5" fill="none" />
            <text x="176" y="202" className="chapter3-svg-label">u</text>
            <text x={188 + vx + 4} y={176 + vy + 4} className="chapter3-svg-label">v</text>
            <text x="268" y="70" className="chapter3-svg-label">u ^ v = {wedgeArea.toFixed(2)}</text>
            <text x="286" y="96" className="chapter3-svg-label">swap flips sign</text>
          </svg>
        </div>

        <div className="chapter3-matrix-card">
          <div className="chapter3-panel-title">Tensor slots</div>
          <div className="chapter3-slot-diagram">
            {slotLabels.map((label, index) => (
              <div key={label} className="chapter3-slot">
                <div className="chapter3-slot-label">{label}</div>
                <div className="chapter3-slot-box">
                  {index === 0 ? 'omega' : index === 3 ? 'S(omega, u, v)' : index === 1 ? 'u' : 'v'}
                </div>
              </div>
            ))}
          </div>
          <div className="chapter3-matrix-caption">
            <div>multilinearity: change one slot, the output changes linearly</div>
            <div>antisymmetry: swap u and v, the sign flips</div>
          </div>
        </div>
      </div>

      <div className="chapter3-lab-notes">
        <div className="chapter3-note">
          <strong>What to look for:</strong> the wedge vanishes as the vectors become
          parallel, which is the clean geometric test for linear dependence.
        </div>
        <div className="chapter3-note">
          <strong>Why it matters:</strong> this is the chapter&apos;s bookkeeping model for
          more complicated tensors and index manipulations later in the text.
        </div>
      </div>
    </article>
  )
}

function Chapter3VisualizationSuite() {
  return (
    <section className="chapter3-visual-suite">
      <div className="chapter3-visual-suite-header">
        <span className="chapter3-visual-suite-kicker">Chapter 3 Visualizations</span>
        <h2>Electromagnetism as one spacetime object</h2>
        <p>
          Chapter 3 turns the field into geometry: the Lorentz force defines the tensor,
          boosts mix E and B, Maxwell&apos;s equations collapse into two covariant laws,
          and tensor slots replace ad hoc component juggling.
        </p>
      </div>

      <nav className="chapter3-visual-suite-nav" aria-label="Chapter 3 visualization topics">
        <a href="#field-tensor">Field tensor</a>
        <a href="#eb-mixing">E/B mixing</a>
        <a href="#maxwell-eqns">Maxwell</a>
        <a href="#tensor-machines">Tensors</a>
      </nav>

      <Chapter3FieldTensorDemo />
      <Chapter3MixingDemo />
      <Chapter3MaxwellDemo />
      <Chapter3TensorDemo />
    </section>
  )
}

export default Chapter3VisualizationSuite
