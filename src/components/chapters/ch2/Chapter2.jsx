import { useState } from 'react'
import Chapter2Summary from './Chapter2Summary'
import Chapter2Exercises from './Chapter2Exercises'
import './Chapter2.css'

function Chapter2() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="chapter2-container">
      <div className="chapter2-header">
        <h1>Chapter 2 - Foundations of Special Relativity</h1>
        <div className="chapter2-tabs">
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

      <div className="chapter2-content">
        {activeTab === 'summary' && <Chapter2Summary />}
        {activeTab === 'exercises' && <Chapter2Exercises />}
      </div>
    </div>
  )
}

export default Chapter2
