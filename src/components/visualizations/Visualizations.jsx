import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import './Visualizations.css'

function Visualizations() {
  const navigate = useNavigate()

  const levels = [
    {
      id: 'level1',
      path: '/visualization/level1',
      title: 'Level 1: Coordinate Grid',
      subtitle: 'Simple Embedding',
      description: 'Direct mapping from parameter space to 3D visualization using embedding functions. No metric awareness—just pure coordinate transformations.',
      features: [
        'Embedding function (u,v,w) → (x,y,z)',
        'Fixed coordinate curves',
        'No metric awareness',
        'Fast rendering'
      ],
      useCases: [
        'Standard coordinate systems',
        'Parametric surfaces',
        'Quaternion visualizations'
      ],
      complexity: 'Low',
      icon: '📐'
    },
    {
      id: 'level2',
      path: '/visualization/level2',
      title: 'Level 2: Metric-Aware Grid',
      subtitle: 'Proper Distances',
      description: 'Accounts for the metric tensor when drawing lines. Shows what the grid "actually looks like" in curved spacetime with proper distances.',
      features: [
        'Metric tensor g_ij defines geometry',
        'Proper distances along curves',
        'Equidistant lines in actual geometry',
        'Shows curvature effects'
      ],
      useCases: [
        'Gravitational redshift visualization',
        'Black hole spacetime',
        'Cosmological metrics'
      ],
      complexity: 'Medium',
      icon: '📏'
    },
    {
      id: 'level3',
      path: '/visualization/level3',
      title: 'Level 3: Geodesic Grid',
      subtitle: 'True Geodesics',
      description: 'Renders true geodesics—the straightest possible paths in curved spacetime. Shows how light and matter actually move.',
      features: [
        'Christoffel symbols from metric',
        'Numerically integrated geodesics',
        'Null and timelike geodesics',
        'Light bending visualization'
      ],
      useCases: [
        'Gravitational lensing',
        'Black hole physics',
        'Orbital mechanics'
      ],
      complexity: 'High',
      icon: '🌌'
    }
  ]

  return (
    <Layout>
      <div className="visualizations-page">
        <div className="visualizations-header">
          <h1>Unified MeshGrid System</h1>
          <p className="visualizations-intro">
            Three levels of grid generation for visualizing coordinate systems and curved spacetime geometries
          </p>
        </div>

        <div className="comparison-matrix">
          <h2>Comparison Matrix</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Level 1</th>
                <th>Level 2</th>
                <th>Level 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Embedding function</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Metric tensor</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Proper distances</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Christoffel symbols</td>
                <td></td>
                <td></td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Null geodesics</td>
                <td></td>
                <td></td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Timelike geodesics</td>
                <td></td>
                <td></td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Light bending</td>
                <td></td>
                <td></td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Complexity</td>
                <td>Low</td>
                <td>Medium</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="interactive-section">
          <div className="interactive-card" onClick={() => navigate('/viz')}>
            <div className="interactive-icon">🔮</div>
            <div className="interactive-content">
              <h3>Interactive 3D Visualization</h3>
              <p>Explore coordinate systems and curved spacetime geometries in real-time with our interactive 3D viewer. Rotate, zoom, and pan to examine the grid from any angle.</p>
              <span className="launch-btn">Launch Interactive Viewer →</span>
            </div>
          </div>
        </div>

        <div className="levels-grid">
          {levels.map((level) => (
            <div
              key={level.id}
              className="level-card"
              onClick={() => navigate(level.path)}
            >
              <div className="level-icon">{level.icon}</div>
              <div className="level-content">
                <h3>{level.title}</h3>
                <p className="level-subtitle">{level.subtitle}</p>
                <p className="level-description">{level.description}</p>
                
                <div className="level-section">
                  <h4>Key Features</h4>
                  <ul>
                    {level.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="level-section">
                  <h4>Use Cases</h4>
                  <ul>
                    {level.useCases.map((use, i) => (
                      <li key={i}>{use}</li>
                    ))}
                  </ul>
                </div>

                <div className="level-footer">
                  <span className="complexity-badge">
                    Complexity: {level.complexity}
                  </span>
                  <span className="read-more">Read documentation →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Visualizations
