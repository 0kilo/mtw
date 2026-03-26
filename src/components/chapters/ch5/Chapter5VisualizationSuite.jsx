import { useState } from 'react'
import './Chapter5VisualizationSuite.css'

function formatSigned(value) {
  if (Math.abs(value) < 0.02) return '0.00'
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2)
}

function Chapter5FlowDemo() {
  const [observerSpeed, setObserverSpeed] = useState(35)
  const [surfaceTilt, setSurfaceTilt] = useState(45)

  const v = observerSpeed / 100
  const tilt = surfaceTilt / 100
  const energyDensity = 1 + 0.7 * tilt
  const momentumDensity = v * (0.6 + 0.8 * tilt)
  const flux = energyDensity * (0.35 + 0.45 * v)

  return (
    <article className="chapter5-lab" id="momentum-flow">
      <div className="chapter5-lab-header">
        <div>
          <span className="chapter5-lab-kicker">Momentum flow</span>
          <h3>Stress-energy measures 4-momentum crossing an oriented 3-volume</h3>
        </div>
        <div className="chapter5-control-stack">
          <label className="chapter5-inline-control">
            Observer speed: {observerSpeed}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={observerSpeed}
              onChange={(e) => setObserverSpeed(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="chapter5-inline-control">
            Surface tilt: {surfaceTilt}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={surfaceTilt}
              onChange={(e) => setSurfaceTilt(Number.parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </div>

      <p className="chapter5-lab-intro">
        Chapter 5 defines the stress-energy tensor by what it does to an oriented 3-volume:
        it turns a spacetime slice into the 4-momentum crossing that slice.
      </p>

      <div className="chapter5-dual-panel">
        <div className="chapter5-svg-card">
          <div className="chapter5-panel-title">Soap box in spacetime</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Oriented 3-volume measuring 4-momentum flow">
            <defs>
              <marker id="chapter5FlowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <polygon points="128,168 258,120 350,160 220,210" fill="rgba(15, 118, 110, 0.14)" stroke="#0f766e" strokeWidth="3" />
            <path d={`M 92 88 L ${92 + 92 * v} ${88 + 52 * v}`} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" markerEnd="url(#chapter5FlowHead)" />
            <path d={`M 364 84 L ${364 - 96 * v} ${84 + 42 * v}`} stroke="#c2410c" strokeWidth="3" strokeLinecap="round" markerEnd="url(#chapter5FlowHead)" />
            <path d={`M 182 214 L 182 ${214 - 88 * tilt}`} stroke="#7c3aed" strokeWidth="3" strokeDasharray="7 6" />
            <text x="68" y="60" className="chapter5-svg-label">incoming 4-momentum</text>
            <text x="290" y="60" className="chapter5-svg-label">outgoing flux</text>
            <text x="176" y="230" className="chapter5-svg-label">tilted 3-volume</text>
          </svg>
        </div>

        <div className="chapter5-matrix-card">
          <div className="chapter5-panel-title">What the tensor returns</div>
          <div className="chapter5-matrix-grid">
            <div className="chapter5-matrix-cell accent-teal">
              <strong>T(u,u)</strong>
              <span>energy density</span>
            </div>
            <div className="chapter5-matrix-cell accent-orange">
              <strong>T(u,n)</strong>
              <span>momentum flow through a face</span>
            </div>
            <div className="chapter5-matrix-cell accent-indigo">
              <strong>T(ej, ek)</strong>
              <span>stress and shear</span>
            </div>
            <div className="chapter5-matrix-cell accent-slate">
              <strong>T(·, Σ)</strong>
              <span>4-momentum crossing the 3-volume</span>
            </div>
          </div>
          <div className="chapter5-matrix-caption">
            <div>energy density: {formatSigned(energyDensity)}</div>
            <div>momentum density: {formatSigned(momentumDensity)}</div>
            <div>flux magnitude: {formatSigned(flux)}</div>
          </div>
        </div>
      </div>

      <div className="chapter5-lab-notes">
        <div className="chapter5-note">
          <strong>What to look for:</strong> the same machine measures the content inside a
          box and the momentum crossing its boundary.
        </div>
        <div className="chapter5-note">
          <strong>Why this matters:</strong> this is the geometric starting point for every
          later conservation law in the chapter.
        </div>
      </div>
    </article>
  )
}

function Chapter5FluidDemo() {
  const [speed, setSpeed] = useState(30)
  const [pressure, setPressure] = useState(45)

  const v = speed / 100
  const p = pressure / 100
  const rho = 1 + 0.8 * p
  const momentum = rho * v
  const stress = p + 0.45 * v

  return (
    <article className="chapter5-lab" id="perfect-fluid">
      <div className="chapter5-lab-header">
        <div>
          <span className="chapter5-lab-kicker">Perfect fluid</span>
          <h3>In the rest frame, a perfect fluid is isotropic pressure plus density</h3>
        </div>
        <div className="chapter5-control-stack">
          <label className="chapter5-inline-control">
            Bulk speed: {speed}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={speed}
              onChange={(e) => setSpeed(Number.parseInt(e.target.value, 10))}
            />
          </label>
          <label className="chapter5-inline-control">
            Pressure: {pressure}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={pressure}
              onChange={(e) => setPressure(Number.parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </div>

      <p className="chapter5-lab-intro">
        The chapter&apos;s perfect-fluid formula says that in the fluid rest frame the
        spatial stresses are all equal. In a moving frame, energy density, momentum
        density, and stress mix into the same tensor.
      </p>

      <div className="chapter5-dual-panel">
        <div className="chapter5-svg-card">
          <div className="chapter5-panel-title">Rest frame</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Perfect fluid in its rest frame">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="126" y="74" width="220" height="132" rx="20" fill="rgba(15, 118, 110, 0.12)" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx="180" cy="140" r="8" fill="#0f766e" />
            <circle cx="240" cy="140" r="8" fill="#0f766e" />
            <circle cx="300" cy="140" r="8" fill="#0f766e" />
            <path d={`M 166 106 L 166 ${106 - 58 * p}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" />
            <path d={`M 240 106 L 240 ${106 - 58 * p}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" />
            <path d={`M 314 106 L 314 ${106 - 58 * p}`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" />
            <text x="122" y="54" className="chapter5-svg-label">T = diag(ρ, p, p, p)</text>
            <text x="152" y="222" className="chapter5-svg-label">isotropic pressure in rest frame</text>
          </svg>
        </div>

        <div className="chapter5-svg-card">
          <div className="chapter5-panel-title">Moving frame</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Perfect fluid seen in a moving frame">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="126" y="74" width="220" height="132" rx="20" fill="rgba(194, 65, 12, 0.12)" stroke="#c2410c" strokeWidth="2.5" />
            <path d={`M 138 144 L ${138 + 140 * v} 144`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter5FlowHead)" />
            <path d={`M 138 176 L ${138 + 100 * v} 176`} stroke="#0f766e" strokeWidth="5" strokeLinecap="round" markerEnd="url(#chapter5FlowHead)" />
            <path d={`M 338 106 L ${338 - 90 * v} 106`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5FlowHead)" />
            <text x="122" y="54" className="chapter5-svg-label">boosted observer</text>
            <text x="134" y="220" className="chapter5-svg-label">momentum density and stress appear</text>
            <text x="238" y="132" className="chapter5-svg-label">T^0j, T^j0, T^jk</text>
          </svg>
        </div>
      </div>

      <div className="chapter5-lab-notes">
        <div className="chapter5-note">
          <strong>Current values:</strong> ρ = {formatSigned(rho)}, momentum density = {formatSigned(momentum)}, stress = {formatSigned(stress)}.
        </div>
        <div className="chapter5-note">
          <strong>Chapter lesson:</strong> pressure is not a separate concept from the
          tensor; it is what the spatial components look like in the fluid rest frame.
        </div>
      </div>
    </article>
  )
}

function Chapter5ElectromagneticDemo() {
  const [fieldStrength, setFieldStrength] = useState(48)

  const normalized = fieldStrength / 100
  const e = 0.4 + normalized * 0.95
  const b = 0.3 + normalized * 0.8
  const energyDensity = (e * e + b * b) / 2
  const poynting = e * b
  const tension = energyDensity - b * b
  const pressure = energyDensity

  return (
    <article className="chapter5-lab" id="electromagnetic-stress">
      <div className="chapter5-lab-header">
        <div>
          <span className="chapter5-lab-kicker">Electromagnetic stress</span>
          <h3>The field stores energy, transports momentum, and exerts stress</h3>
        </div>
        <label className="chapter5-inline-control">
          Field strength: {fieldStrength}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={fieldStrength}
            onChange={(e) => setFieldStrength(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter5-lab-intro">
        The chapter uses the electromagnetic stress tensor to read off energy density,
        Poynting flux, tension along field lines, and pressure perpendicular to them.
      </p>

      <div className="chapter5-dual-panel">
        <div className="chapter5-svg-card">
          <div className="chapter5-panel-title">Field and flux</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Electromagnetic field carrying energy and momentum">
            <defs>
              <marker id="chapter5EmHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="170" cy="138" r={26 + normalized * 12} fill="rgba(15, 118, 110, 0.16)" stroke="#0f766e" strokeWidth="3" />
            <circle cx="170" cy="138" r="10" fill="#0f766e" />
            <circle cx="310" cy="138" r={24 + normalized * 10} fill="rgba(194, 65, 12, 0.16)" stroke="#c2410c" strokeWidth="3" />
            <circle cx="310" cy="138" r="10" fill="#c2410c" />
            <path d={`M 170 92 L 310 ${92 - 14 * normalized}`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5EmHead)" />
            <path d={`M 170 184 L 310 ${184 + 14 * normalized}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5EmHead)" />
            <text x="112" y="56" className="chapter5-svg-label">energy in the field</text>
            <text x="286" y="60" className="chapter5-svg-label">Poynting flux</text>
            <text x="136" y="214" className="chapter5-svg-label">{'pressure and tension live in T^{jk}'}</text>
          </svg>
        </div>

        <div className="chapter5-matrix-card">
          <div className="chapter5-panel-title">Component readout</div>
          <div className="chapter5-matrix-grid">
            <div className="chapter5-matrix-cell accent-teal">
              <strong>T00</strong>
              <span>energy density</span>
            </div>
            <div className="chapter5-matrix-cell accent-orange">
              <strong>T0j = Tj0</strong>
              <span>momentum density and energy flux</span>
            </div>
            <div className="chapter5-matrix-cell accent-indigo">
              <strong>Tjk</strong>
              <span>stress, pressure, and tension</span>
            </div>
            <div className="chapter5-matrix-cell accent-slate">
              <strong>Symmetry</strong>
              <span>no hidden torque from the field</span>
            </div>
          </div>
          <div className="chapter5-matrix-caption">
            <div>energy density: {formatSigned(energyDensity)}</div>
            <div>Poynting flux: {formatSigned(poynting)}</div>
            <div>tension scale: {formatSigned(tension)}</div>
            <div>pressure scale: {formatSigned(pressure)}</div>
          </div>
        </div>
      </div>

      <div className="chapter5-lab-notes">
        <div className="chapter5-note">
          <strong>What to look for:</strong> the field carries its own energy-momentum,
          so it can exert pressure and tension like matter can.
        </div>
        <div className="chapter5-note">
          <strong>Why this matters:</strong> the chapter uses this tensor to make fields
          part of the conservation law, not exceptions to it.
        </div>
      </div>
    </article>
  )
}

function Chapter5ConservationDemo() {
  const [imbalance, setImbalance] = useState(36)

  const normalized = imbalance / 100
  const inwardFlux = 1 - normalized * 0.55
  const outwardFlux = 1 + normalized * 0.7
  const torqueMismatch = normalized * 0.8

  return (
    <article className="chapter5-lab" id="conservation-laws">
      <div className="chapter5-lab-header">
        <div>
          <span className="chapter5-lab-kicker">Conservation</span>
          <h3>Closed 3-surfaces force flux balance, and symmetry kills spurious torque</h3>
        </div>
        <label className="chapter5-inline-control">
          Imbalance: {imbalance}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={imbalance}
            onChange={(e) => setImbalance(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <p className="chapter5-lab-intro">
        The chapter&apos;s conservation law says the net 4-momentum flux through a closed
        3-surface vanishes. The symmetry of the tensor then removes the possibility of a
        runaway internal torque.
      </p>

      <div className="chapter5-dual-panel">
        <div className="chapter5-svg-card">
          <div className="chapter5-panel-title">Closed boundary in spacetime</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Closed 3-surface with balanced flux">
            <defs>
              <marker id="chapter5ConserveHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="240" cy="138" rx="116" ry="74" fill="rgba(15, 118, 110, 0.08)" stroke="#0f766e" strokeWidth="3" />
            <ellipse cx="240" cy="138" rx="68" ry="42" fill="rgba(194, 65, 12, 0.08)" stroke="#c2410c" strokeWidth="2.5" />
            <path d={`M 124 138 L ${124 - 70 * inwardFlux} 138`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <path d={`M 356 138 L ${356 + 70 * outwardFlux} 138`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <path d={`M 240 62 L 240 ${62 - 60 * normalized}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <text x="94" y="56" className="chapter5-svg-label">flux in</text>
            <text x="366" y="56" className="chapter5-svg-label">flux out</text>
            <text x="182" y="214" className="chapter5-svg-label">0 = net flux through closed boundary</text>
          </svg>
        </div>

        <div className="chapter5-svg-card">
          <div className="chapter5-panel-title">Torque balance</div>
          <svg viewBox="0 0 480 280" role="img" aria-label="Symmetric stress tensor removing torque">
            <rect x="36" y="28" width="408" height="212" rx="18" fill="#fffaf5" stroke="#fed7aa" strokeWidth="2" />
            <rect x="150" y="82" width="180" height="116" rx="16" fill="rgba(124, 58, 237, 0.08)" stroke="#7c3aed" strokeWidth="2.5" />
            <path d={`M 150 140 L ${116 - 26 * torqueMismatch} 140`} stroke="#0f766e" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <path d={`M 330 140 L ${364 + 26 * torqueMismatch} 140`} stroke="#c2410c" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <path d={`M 240 82 L 240 ${56 - 20 * torqueMismatch}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <path d={`M 240 198 L 240 ${224 + 20 * torqueMismatch}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" markerEnd="url(#chapter5ConserveHead)" />
            <text x="100" y="54" className="chapter5-svg-label">if Tjk were unequal</text>
            <text x="122" y="224" className="chapter5-svg-label">symmetry Tjk = Tkj prevents runaway torque</text>
          </svg>
        </div>
      </div>

      <div className="chapter5-lab-notes">
        <div className="chapter5-note">
          <strong>Balance condition:</strong> the visual imbalance shrinks to zero when the
          conservation law is satisfied.
        </div>
        <div className="chapter5-note">
          <strong>Chapter lesson:</strong> local conservation and stress symmetry are the
          same geometric discipline seen from two sides.
        </div>
      </div>
    </article>
  )
}

function Chapter5VisualizationSuite() {
  return (
    <section className="chapter5-visual-suite">
      <div className="chapter5-visual-suite-header">
        <span className="chapter5-visual-suite-kicker">Chapter 5 Visualizations</span>
        <h2>Stress-energy as flow, flux, and conservation</h2>
        <p>
          Chapter 5 turns the stress-energy tensor into a visual machine: it measures
          momentum flow through 3-volumes, organizes fluid and field components, and makes
          conservation of 4-momentum geometrically unavoidable.
        </p>
      </div>

      <nav className="chapter5-visual-suite-nav" aria-label="Chapter 5 visualization topics">
        <a href="#momentum-flow">Momentum flow</a>
        <a href="#perfect-fluid">Perfect fluid</a>
        <a href="#electromagnetic-stress">EM stress</a>
        <a href="#conservation-laws">Conservation</a>
      </nav>

      <Chapter5FlowDemo />
      <Chapter5FluidDemo />
      <Chapter5ElectromagneticDemo />
      <Chapter5ConservationDemo />
    </section>
  )
}

export default Chapter5VisualizationSuite
