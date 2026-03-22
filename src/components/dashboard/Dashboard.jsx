import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()

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
    },
    {
      number: 3,
      title: 'The Electromagnetic Field',
      exercises: 18,
      topics: ['Lorentz Force', 'Faraday Tensor', 'Maxwell Equations', 'Stress-Energy'],
      status: 'complete'
    },
    {
      number: 4,
      title: 'Electromagnetism and Differential Forms',
      exercises: 12,
      topics: ['Exterior Calculus', 'Differential Forms', 'Hodge Dual', 'Geometric Maxwell'],
      status: 'complete'
    },
    {
      number: 5,
      title: 'Stress-Energy Tensor and Conservation Laws',
      exercises: 6,
      topics: ['Stress-Energy Tensor', 'Perfect Fluids', 'Conservation Laws', 'Angular Momentum'],
      status: 'complete'
    }
  ]

  const visualizations = [
    {
      name: 'Level 1: Coordinate Grid',
      description: 'Simple embedding - map parameter space to 3D',
      systems: ['Cartesian', 'Cylindrical', 'Spherical', 'Quaternion']
    },
    {
      name: 'Level 2: Metric-Aware Grid',
      description: 'Proper distances in curved spacetime',
      systems: ['Schwarzschild', 'FLRW', 'Minkowski']
    },
    {
      name: 'Level 3: Geodesic Grid',
      description: 'True geodesics - light and particle paths',
      systems: ['Null Geodesics', 'Timelike Geodesics', 'Light Bending']
    }
  ]

  return (
    <Layout>
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
                onClick={() => navigate(`/chapter/${chapter.number}`)}
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
                onClick={() => navigate('/visualizations')}
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
          <div className="stat-card" onClick={() => navigate('/chapters')}>
            <div className="stat-icon">📖</div>
            <div className="stat-info">
              <span className="stat-value">5</span>
              <span className="stat-label">Chapters</span>
            </div>
          </div>
          <div className="stat-card" onClick={() => navigate('/chapters')}>
            <div className="stat-icon">✏️</div>
            <div className="stat-info">
              <span className="stat-value">46</span>
              <span className="stat-label">Exercises Solved</span>
            </div>
          </div>
          <div className="stat-card" onClick={() => navigate('/visualizations')}>
            <div className="stat-icon">🔮</div>
            <div className="stat-info">
              <span className="stat-value">3</span>
              <span className="stat-label">Visualization Levels</span>
            </div>
          </div>
          <div className="stat-card" onClick={() => navigate('/appendices')}>
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <span className="stat-value">5</span>
              <span className="stat-label">Appendices</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Dashboard
