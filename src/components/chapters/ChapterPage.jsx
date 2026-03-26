import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import './ChapterPage.css'

function ChapterPage({ title, summary, exercises }) {
  const [activeTab, setActiveTab] = useState('summary')
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="chapter-page-container">
        <div className="chapter-page-header">
          <button className="back-button" onClick={() => navigate('/chapters')}>
            ← Back to Chapters
          </button>
          <h1>{title}</h1>
          <div className="chapter-page-tabs">
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

        <div className="chapter-page-content">
          {activeTab === 'summary' && summary}
          {activeTab === 'exercises' && exercises}
        </div>
      </div>
    </Layout>
  )
}

export default ChapterPage
