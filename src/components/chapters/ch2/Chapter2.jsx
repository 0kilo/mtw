import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Chapter2Summary from './Chapter2Summary'
import Chapter2Exercises from './Chapter2Exercises'
import Chapter2Boxes from './Chapter2Boxes'
import './Chapter2.css'

function Chapter2() {
  const [activeTab, setActiveTab] = useState('summary')
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="chapter2-container">
        <div className="chapter2-header">
          <button className="back-button" onClick={() => navigate('/chapters')}>
            ← Back to Chapters
          </button>
          <h1>Chapter 2 - Foundations of Special Relativity</h1>
          <div className="chapter2-tabs">
            <button
              className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
              onClick={() => setActiveTab('summary')}
            >
              Summary
            </button>
            <button
              className={`tab ${activeTab === 'boxes' ? 'active' : ''}`}
              onClick={() => setActiveTab('boxes')}
            >
              Boxes
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
          {activeTab === 'boxes' && <Chapter2Boxes />}
          {activeTab === 'exercises' && <Chapter2Exercises />}
        </div>
      </div>
    </Layout>
  )
}

export default Chapter2
