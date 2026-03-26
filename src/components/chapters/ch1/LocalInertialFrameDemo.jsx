import { useState } from 'react'

function LocalInertialFrameDemo() {
  const [labSize, setLabSize] = useState(35)

  const normalized = labSize / 100
  const drift = normalized * 12
  const shaftOffset = normalized * 18

  return (
    <article className="chapter1-lab" id="local-inertial-frame">
      <div className="chapter1-lab-header">
        <div>
          <span className="chapter1-lab-kicker">Equivalence Principle</span>
          <h3>Weightlessness appears in a small enough falling lab</h3>
        </div>
        <label className="chapter1-inline-control">
          Lab size: {labSize}
          <input
            type="range"
            min="10"
            max="100"
            step="1"
            value={labSize}
            onChange={(e) => setLabSize(parseInt(e.target.value))}
          />
        </label>
      </div>

      <p className="chapter1-lab-intro">
        Outside the box, everything is falling in the Earth field. Inside the box,
        free particles look almost inertial. Make the lab larger and the tiny tidal
        differences become harder to ignore.
      </p>

      <div className="chapter1-dual-panel">
        <div className="chapter1-svg-card">
          <div className="chapter1-panel-title">Outside observer</div>
          <svg viewBox="0 0 320 250" role="img" aria-label="Falling elevator seen from outside">
            <rect x="44" y="18" width="232" height="214" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="112" y1="24" x2="112" y2="226" stroke="#cbd5e1" strokeDasharray="5 5" />
            <line x1="208" y1="24" x2="208" y2="226" stroke="#cbd5e1" strokeDasharray="5 5" />
            <rect x="112" y={74 + shaftOffset} width="96" height="110" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <circle cx="140" cy={102 + shaftOffset} r="7" fill="#0f766e" />
            <circle cx="160" cy={132 + shaftOffset} r="7" fill="#7c3aed" />
            <circle cx="182" cy={116 + shaftOffset} r="7" fill="#ea580c" />
            {[0, 1, 2].map((index) => (
              <path
                key={index}
                d={`M ${140 + index * 20} ${58 + index * 8} L ${140 + index * 20} ${86 + shaftOffset + index * 12}`}
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            ))}
            <text x="56" y="46" className="chapter1-svg-label">shaft frame</text>
          </svg>
        </div>

        <div className="chapter1-svg-card">
          <div className="chapter1-panel-title">Inside the falling lab</div>
          <svg viewBox="0 0 320 250" role="img" aria-label="Inside local inertial frame">
            <rect x="58" y="34" width="204" height="170" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx={112 - drift * 0.45} cy={98 - drift * 0.25} r="8" fill="#0f766e" />
            <circle cx="160" cy="126" r="8" fill="#7c3aed" />
            <circle cx={208 + drift * 0.45} cy={152 + drift * 0.35} r="8" fill="#ea580c" />
            <path d={`M 112 98 C 118 ${96 + drift * 0.2}, 124 ${102 + drift * 0.3}, ${112 - drift * 0.45} ${98 - drift * 0.25}`} fill="none" stroke="#99f6e4" strokeWidth="2" />
            <path d="M 160 126 L 160 126" fill="none" stroke="#c4b5fd" strokeWidth="2" />
            <path d={`M 208 152 C 202 ${148 + drift * 0.15}, 196 ${146 + drift * 0.2}, ${208 + drift * 0.45} ${152 + drift * 0.35}`} fill="none" stroke="#fdba74" strokeWidth="2" />
            <text x="74" y="224" className="chapter1-svg-label">
              {labSize < 40 ? 'small lab: almost perfect weightlessness' : 'larger lab: tidal drift shows up'}
            </text>
          </svg>
        </div>
      </div>
    </article>
  )
}

export default LocalInertialFrameDemo
