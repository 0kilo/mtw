import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import Graph from '../graph/Graph'
import './Layout.css'

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showViz, setShowViz] = useState(false)

  const handleNavClick = (path, e) => {
    e.preventDefault()
    navigate(path)
    setSidebarOpen(false)
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const getPageTitle = () => {
    if (location.pathname === '/viz') return 'Interactive Visualization'
    if (showViz) return 'Visualization'
    if (location.pathname === '/') return 'Overview'
    if (location.pathname === '/chapters') return 'Chapters'
    if (location.pathname === '/khantraction') return 'Khantraction'
    if (location.pathname === '/appendices') return 'Appendices'
    if (location.pathname === '/visualizations') return 'Visualizations'
    if (location.pathname.startsWith('/visualization/')) return 'Visualization Documentation'
    if (location.pathname.startsWith('/appendix/')) return 'Appendix'
    if (location.pathname.startsWith('/chapter/')) {
      const num = location.pathname.split('/').pop()
      return `Chapter ${num}`
    }
    return 'MTW'
  }

  if (showViz) {
    return (
      <div className="layout">
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-header">
            <Link to="/">
              <h2>MTW</h2>
            </Link>
            <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
              ×
            </button>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={(e) => handleNavClick('/', e)}>
              <span className="nav-label">Dashboard</span>
            </a>
            <a href="#" className={`nav-item ${isActive('/chapters') ? 'active' : ''}`} onClick={(e) => handleNavClick('/chapters', e)}>
              <span className="nav-label">Chapters</span>
            </a>
            <a href="#" className={`nav-item ${isActive('/visualizations') ? 'active' : ''}`} onClick={(e) => handleNavClick('/visualizations', e)}>
              <span className="nav-label">Visualizations</span>
            </a>
            <a href="#" className={`nav-item ${isActive('/khantraction') ? 'active' : ''}`} onClick={(e) => handleNavClick('/khantraction', e)}>
              <span className="nav-label">Khantraction</span>
            </a>
            <a href="#" className={`nav-item ${isActive('/appendices') ? 'active' : ''}`} onClick={(e) => handleNavClick('/appendices', e)}>
              <span className="nav-label">Appendices</span>
            </a>
            <a href="#" className="nav-item active" onClick={(e) => { e.preventDefault(); setShowViz(false) }}>
              <span className="nav-label">Viz (Interactive)</span>
            </a>
          </nav>
        </aside>

        <main className="main-content">
          <header className="top-header">
            <button className="menu-toggle" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              ☰
            </button>
            <h1>{getPageTitle()}</h1>
          </header>

          <div className="page-content">
            <Graph />
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="layout">
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/">
            <h2>MTW</h2>
          </Link>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            ×
          </button>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={(e) => handleNavClick('/', e)}>
            <span className="nav-label">Dashboard</span>
          </a>
          <a href="#" className={`nav-item ${isActive('/chapters') ? 'active' : ''}`} onClick={(e) => handleNavClick('/chapters', e)}>
            <span className="nav-label">Chapters</span>
          </a>
          <a href="#" className={`nav-item ${isActive('/visualizations') ? 'active' : ''}`} onClick={(e) => handleNavClick('/visualizations', e)}>
            <span className="nav-label">Visualizations</span>
          </a>
            <a href="#" className={`nav-item ${isActive('/khantraction') ? 'active' : ''}`} onClick={(e) => handleNavClick('/khantraction', e)}>
              <span className="nav-label">Khantraction</span>
            </a>
          <a href="#" className={`nav-item ${isActive('/viz') ? 'active' : ''}`} onClick={(e) => handleNavClick('/viz', e)}>
            <span className="nav-label">Interactive Viz</span>
          </a>
          <a href="#" className={`nav-item ${isActive('/appendices') ? 'active' : ''}`} onClick={(e) => handleNavClick('/appendices', e)}>
            <span className="nav-label">Appendices</span>
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            ☰
          </button>
          <h1>{getPageTitle()}</h1>
        </header>

        <div className="page-content">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout