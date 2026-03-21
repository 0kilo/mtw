import { useState } from 'react'
import Chapter3Summary from './Chapter3Summary'
import Chapter3Exercises from './Chapter3Exercises'
import './Chapter3.css'

function Chapter3() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="chapter3-container">
      <div className="chapter3-header">
        <h1>Chapter 3 - The Electromagnetic Field</h1>
        <div className="chapter3-tabs">
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

      <div className="chapter3-content">
        {activeTab === 'summary' && <Chapter3Summary />}
        {activeTab === 'exercises' && <Chapter3Exercises />}
      </div>
    </div>
  )
}

export default Chapter3
