import { useState } from 'react'
import Chapter5Summary from './Chapter5Summary'
import Chapter5Exercises from './Chapter5Exercises'
import './Chapter5.css'

function Chapter5() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="chapter5-container">
      <div className="chapter5-header">
        <h1>Chapter 5 - Stress-Energy Tensor and Conservation Laws</h1>
        <div className="chapter5-tabs">
          <button
            className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('summary')}
          >
            Summary
          </button>
          <button
            className={`tab ${activeTab === 'exercises' ? 'active' : ''}`}
            onClick={() => setActiveTab('exercises')}
          >
            Exercises
          </button>
        </div>
      </div>

      <div className="chapter5-content">
        {activeTab === 'summary' && <Chapter5Summary />}
        {activeTab === 'exercises' && <Chapter5Exercises />}
      </div>
    </div>
  )
}

export default Chapter5
