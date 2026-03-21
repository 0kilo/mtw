import { useState } from 'react'
import AppendixA from './AppendixA'
import '../ch1/Chapter1.css'

function Appendix() {
  const [activeAppendix, setActiveAppendix] = useState(null)

  const appendices = [
    {
      id: 'A',
      title: 'Quaternions and the Exponential Map',
      description: 'A rigorous introduction to quaternion algebra, exponential function on ℝ, ℂ, and ℍ, and Jacobian matrices',
      topics: ['Quaternion Algebra ℍ', 'Exponential Function', 'Jacobian Matrix', '3D Rotations', 'Lie Group Theory']
    }
  ]

  if (activeAppendix) {
    return (
      <div className="chapter1-container">
        <div className="chapter1-header">
          <h1>Appendix {activeAppendix}</h1>
          <div className="chapter1-tabs">
            <button
              className="tab active"
              onClick={() => setActiveAppendix(null)}
            >
              ← Back to Appendices
            </button>
          </div>
        </div>

        <div className="chapter1-content">
          {activeAppendix === 'A' && <AppendixA />}
        </div>
      </div>
    )
  }

  return (
    <div className="chapter1-container">
      <div className="chapter1-header">
        <h1>Appendices</h1>
        <p className="appendices-intro">Supplementary mathematical reference materials</p>
      </div>

      <div className="chapter1-content">
        <div className="appendices-list">
          {appendices.map((appendix) => (
            <div
              key={appendix.id}
              className="appendix-card"
              onClick={() => setActiveAppendix(appendix.id)}
            >
              <div className="appendix-badge">Appendix {appendix.id}</div>
              <div className="appendix-info">
                <h3>{appendix.title}</h3>
                <p className="appendix-description">{appendix.description}</p>
                <div className="appendix-topics">
                  {appendix.topics.map((topic) => (
                    <span key={topic} className="appendix-tag">{topic}</span>
                  ))}
                </div>
              </div>
              <div className="appendix-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Appendix
