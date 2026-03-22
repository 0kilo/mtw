import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Chapter3Summary from './Chapter3Summary'
import Chapter3Exercises from './Chapter3Exercises'
import './Chapter3.css'

function Chapter3() {
  const [activeTab, setActiveTab] = useState('summary')
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="chapter3-container">
        <div className="chapter3-header">
          <button className="back-button" onClick={() => navigate('/chapters')}>
            ← Back to Chapters
          </button>
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
    </Layout>
  )
}

export default Chapter3
