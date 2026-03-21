import { useState } from 'react'
import MetricGraph from '../graph/MetricGraph'
import ChaptersList from '../chapters/ChaptersList'
import './Dashboard.css'

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  const chapters = [
    {
      number: 1,
      title: 'Geometrodynamics in Brief',
      exercises: 3,
      topics: ['Curvature', 'Geodesics', 'Tidal Forces', 'Kepler Density'],
      status: 'complete'
    },
    {
      number: 2,
      title: 'Foundations of Special Relativity',
      exercises: 7,
      topics: ['Vectors', '1-Forms', 'Metric Tensor', 'Lorentz Transforms'],
      status: 'complete'
    }
  ]

  const visualizations = [
    {
      name: 'Metric Grid',
      description: 'Visualize different coordinate systems',
      systems: ['Cartesian', 'Cylindrical', 'Spherical', 'Q1 Quaternion', 'Schwarzschild']
    }
  ]

  const renderPage = () => {
    switch (currentPage) {
      case 'viz':
        return <MetricGraph />
      case 'chapters':
        return <ChaptersList />
      default:
        return (
          <div className="dashboard-content">
            {/* Welcome Section */}
            <section className="card welcome-card">
              <h2>MTW Problem Solver</h2>
              <p>Visualize and solve problems from <em>Gravitation</em> by Misner, Thorne, and Wheeler</p>
            </section>

            {/* Chapters Overview */}
            <section className="card">
              <h3>Chapters</h3>
              <div className="chapters-overview">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="chapter-overview-item"
                    onClick={() => setCurrentPage('chapters')}
                  >
                    <div className="chapter-badge">Ch {chapter.number}</div>
                    <div className="chapter-info">
                      <h4>{chapter.title}</h4>
                      <p className="chapter-topics">{chapter.topics.join(' • ')}</p>
                      <span className="chapter-exercises">{chapter.exercises} exercises solved</span>
                    </div>
                    <div className="chapter-status complete">✓</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Visualizations */}
            <section className="card">
              <h3>Visualizations</h3>
              <div className="viz-grid">
                {visualizations.map((viz) => (
                  <div
                    key={viz.name}
                    className="viz-card"
                    onClick={() => setCurrentPage('viz')}
                  >
                    <div className="viz-icon">🔮</div>
                    <h4>{viz.name}</h4>
                    <p>{viz.description}</p>
                    <div className="viz-systems">
                      {viz.systems.map((sys) => (
                        <span key={sys} className="viz-tag">{sys}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📖</div>
                <div className="stat-info">
                  <span className="stat-value">2</span>
                  <span className="stat-label">Chapters</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✏️</div>
                <div className="stat-info">
                  <span className="stat-value">10</span>
                  <span className="stat-label">Exercises Solved</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🔮</div>
                <div className="stat-info">
                  <span className="stat-value">5</span>
                  <span className="stat-label">Coordinate Systems</span>
                </div>
              </div>
            </section>
          </div>
        )
    }
  }

  const handleNavClick = (page, e) => {
    e.preventDefault()
    setCurrentPage(page)
    setSidebarOpen(false)
  }

  return (
    <div className="dashboard">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2>MTW</h2>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <nav className="sidebar-nav">
          <a
            href="#"
            className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('dashboard', e)}
          >
            <span className="nav-label">Dashboard</span>
          </a>
          <a
            href="#"
            className={`nav-item ${currentPage === 'chapters' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('chapters', e)}
          >
            <span className="nav-label">Chapters</span>
          </a>
          <a
            href="#"
            className={`nav-item ${currentPage === 'viz' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('viz', e)}
          >
            <span className="nav-label">Viz</span>
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
          <h1>
            {currentPage === 'dashboard' ? 'Overview' : 
             currentPage === 'chapters' ? 'Chapters' : 'Visualization'}
          </h1>
        </header>

        {renderPage()}
      </main>
    </div>
  )
}

export default Dashboard
