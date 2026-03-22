import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Chapter4Summary from './Chapter4Summary'
import Chapter4Exercises from './Chapter4Exercises'
import './Chapter4.css'

function Chapter4() {
  const [activeTab, setActiveTab] = useState('summary')
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="chapter4-container">
        <div className="chapter4-header">
          <button className="back-button" onClick={() => navigate('/chapters')}>
            ← Back to Chapters
          </button>
          <h1>Chapter 4 - Electromagnetism and Differential Forms</h1>
          <div className="chapter4-tabs">
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

        <div className="chapter4-content">
          {activeTab === 'summary' && <Chapter4Summary />}
          {activeTab === 'exercises' && <Chapter4Exercises />}
        </div>
      </div>
    </Layout>
  )
}

export default Chapter4
