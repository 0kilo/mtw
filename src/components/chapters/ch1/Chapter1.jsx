import { useState } from 'react'
import Chapter1Summary from './Chapter1Summary'
import Chapter1Exercises from './Chapter1Exercises'
import './Chapter1.css'

function Chapter1() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="chapter1-container">
      <div className="chapter1-header">
        <h1>Chapter 1 - Geometrodynamics in Brief</h1>
        <div className="chapter1-tabs">
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

      <div className="chapter1-content">
        {activeTab === 'summary' && <Chapter1Summary />}
        {activeTab === 'exercises' && <Chapter1Exercises />}
      </div>
    </div>
  )
}

export default Chapter1
