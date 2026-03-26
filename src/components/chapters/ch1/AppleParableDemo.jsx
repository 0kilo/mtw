import { useState } from 'react'

const globalPathA = 'M 88 206 C 120 170, 162 125, 205 82 C 242 50, 295 42, 346 70'
const globalPathB = 'M 104 214 C 144 170, 201 116, 260 88 C 309 65, 351 74, 384 108'
const localPathA = 'M 84 180 L 344 92'
const localPathB = 'M 102 214 L 362 126'

function AppleParableDemo() {
  const [viewMode, setViewMode] = useState('global')

  const isLocal = viewMode === 'local'
  const pathA = isLocal ? localPathA : globalPathA
  const pathB = isLocal ? localPathB : globalPathB

  return (
    <article className="chapter1-lab" id="apple-parable">
      <div className="chapter1-lab-header">
        <div>
          <span className="chapter1-lab-kicker">Apple Parable</span>
          <h3>Local straightness vs global curvature</h3>
        </div>
        <div className="chapter1-segmented">
          <button
            className={viewMode === 'global' ? 'active' : ''}
            onClick={() => setViewMode('global')}
          >
            Whole surface
          </button>
          <button
            className={viewMode === 'local' ? 'active' : ''}
            onClick={() => setViewMode('local')}
          >
            Local patch
          </button>
        </div>
      </div>

      <p className="chapter1-lab-intro">
        This is the opening move of the chapter: ants can follow the straightest
        available paths on a curved surface. Zoom in and the paths look straight;
        zoom out and the geometry makes them bend and reconverge.
      </p>

      <div className="chapter1-apple-layout">
        <div className="chapter1-svg-card">
          <svg viewBox="0 0 460 280" role="img" aria-label="Apple geodesic comparison">
            <defs>
              <radialGradient id="appleFill" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#fff3e0" />
                <stop offset="55%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#c2410c" />
              </radialGradient>
              <radialGradient id="patchFill" cx="50%" cy="40%" r="75%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#dbeafe" />
              </radialGradient>
            </defs>

            {isLocal ? (
              <>
                <rect x="50" y="42" width="360" height="196" rx="22" fill="url(#patchFill)" stroke="#93c5fd" strokeWidth="2" />
                {[0, 1, 2, 3, 4].map((index) => (
                  <line
                    key={`h-${index}`}
                    x1="72"
                    y1={76 + index * 34}
                    x2="388"
                    y2={58 + index * 34}
                    stroke="#bfdbfe"
                    strokeWidth="1.5"
                  />
                ))}
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <line
                    key={`v-${index}`}
                    x1={82 + index * 52}
                    y1="58"
                    x2={92 + index * 52}
                    y2="226"
                    stroke="#bfdbfe"
                    strokeWidth="1.5"
                  />
                ))}
                <circle cx="194" cy="142" r="18" fill="none" stroke="#60a5fa" strokeDasharray="4 4" />
              </>
            ) : (
              <>
                <ellipse cx="230" cy="140" rx="176" ry="102" fill="url(#appleFill)" />
                <ellipse cx="238" cy="120" rx="42" ry="20" fill="rgba(120, 53, 15, 0.32)" />
                <ellipse cx="238" cy="120" rx="72" ry="38" fill="none" stroke="rgba(120, 53, 15, 0.35)" strokeWidth="1.5" />
                <ellipse cx="238" cy="120" rx="112" ry="60" fill="none" stroke="rgba(120, 53, 15, 0.22)" strokeWidth="1.5" />
                <path d="M 224 56 C 230 28, 250 24, 257 46" fill="none" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />
              </>
            )}

            <path d={pathA} fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <path d={pathB} fill="none" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
            <circle cx={isLocal ? 84 : 88} cy={isLocal ? 180 : 206} r="6.5" fill="#0f766e" />
            <circle cx={isLocal ? 102 : 104} cy={isLocal ? 214 : 214} r="6.5" fill="#7c3aed" />
            <circle cx={isLocal ? 344 : 346} cy={isLocal ? 92 : 70} r="6.5" fill="#0f766e" />
            <circle cx={isLocal ? 362 : 384} cy={isLocal ? 126 : 108} r="6.5" fill="#7c3aed" />
            <text x="70" y="248" className="chapter1-svg-label">start</text>
            <text x="336" y="56" className="chapter1-svg-label">later</text>
          </svg>
        </div>

        <div className="chapter1-lab-notes">
          <div className="chapter1-note">
            <strong>Whole surface:</strong> nearby geodesics curve around the dimple and can
            reconverge without any force arrow drawn on the path.
          </div>
          <div className="chapter1-note">
            <strong>Local patch:</strong> once you zoom into a small enough region, the same
            story looks almost Euclidean. This is the seed of local inertial frames.
          </div>
        </div>
      </div>
    </article>
  )
}

export default AppleParableDemo
