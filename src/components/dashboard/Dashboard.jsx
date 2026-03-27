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
    },
    {
      number: 6,
      title: 'Accelerated Observers',
      exercises: 9,
      topics: ['Uniform Acceleration', 'Tetrads', 'Rindler Coordinates', 'Fermi-Walker Transport'],
      status: 'complete'
    },
    {
      number: 7,
      title: 'Incompatibility of Gravity and Special Relativity',
      exercises: 3,
      topics: ['Scalar Gravity', 'Tensor Gravity', 'Redshift', 'Equivalence Principle'],
      status: 'complete'
    },
    {
      number: 8,
      title: 'Differential Geometry: An Overview',
      exercises: 2,
      topics: ['Tangent Vectors', 'Commutators', 'Dual Bases', 'Rotation Groups'],
      status: 'complete'
    },
    {
      number: 9,
      title: 'Differential Topology',
      exercises: 14,
      topics: ['Tangent Spaces', 'Lie Derivatives', 'Commutators', 'SO(3)'],
      status: 'complete'
    },
    {
      number: 10,
      title: 'Affine Geometry',
      exercises: 17,
      topics: ['Geodesics', 'Parallel Transport', 'Covariant Derivative', 'Connection Coefficients'],
      status: 'complete'
    },
    {
      number: 11,
      title: 'Geodesic Deviation and Spacetime Curvature',
      exercises: 12,
      topics: ['Riemann Curvature', 'Geodesic Deviation', 'Tidal Gravity', 'Normal Coordinates'],
      status: 'complete'
    },
    {
      number: 12,
      title: 'Newtonian Gravity in the Language of Curved Spacetime',
      exercises: 10,
      topics: ['Newton-Cartan Geometry', 'Galilean Frames', 'Poisson Equation', 'Inertial Forces'],
      status: 'complete'
    },
    {
      number: 13,
      title: 'Riemannian Geometry: Metric as Foundation of All',
      exercises: 15,
      topics: ['Local Lorentz Metrics', 'Levi-Civita Connection', 'Curvature Symmetries', 'Weyl Tensor'],
      status: 'complete'
    },
    {
      number: 14,
      title: 'Calculation of Curvature',
      exercises: 18,
      topics: ['Cartan Forms', 'Ricci Tensor', 'Einstein Tensor', 'Curvature Computation'],
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
              <div className={`chapter-status ${chapter.status}`}>✓</div>
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
                onClick={() => navigate('/viz')}
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
          <button className="view-all-viz" onClick={() => navigate('/visualizations')}>
            View Documentation →
          </button>
        </section>

        <section className="card research-section">
          <h3>Research Notes</h3>
          <div className="research-card" onClick={() => navigate('/khantraction')}>
            <div className="research-icon">🪢</div>
            <div className="research-details">
              <h4>Khantraction Knot</h4>
              <p>Quaternion glue, photon limits, and the numerical profile for a spacetime knot.</p>
            </div>
            <span className="read-more">View summary →</span>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-grid">
          <div className="stat-card" onClick={() => navigate('/chapters')}>
            <div className="stat-icon">📖</div>
            <div className="stat-info">
              <span className="stat-value">14</span>
              <span className="stat-label">Chapters</span>
            </div>
          </div>
          <div className="stat-card" onClick={() => navigate('/chapters')}>
            <div className="stat-icon">✏️</div>
            <div className="stat-info">
              <span className="stat-value">146</span>
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
              <span className="stat-value">8</span>
              <span className="stat-label">Appendices</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Dashboard
