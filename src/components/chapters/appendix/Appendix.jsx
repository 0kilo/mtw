import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import AppendixA from './AppendixA'
import AppendixB from './AppendixB'
import AppendixC from './AppendixC'
import AppendixD from './AppendixD'
import AppendixE from './AppendixE'
import AppendixF from './AppendixF'
import AppendixG from './AppendixG'
import AppendixH from './AppendixH'
import './Appendix.css'

function Appendix() {
  const { id } = useParams()
  const navigate = useNavigate()

  const appendices = [
    {
      id: 'A',
      title: 'Quaternions and the Exponential Map',
      description: 'A rigorous introduction to quaternion algebra, exponential function on ℝ, ℂ, and ℍ, and Jacobian matrices',
      topics: ['Quaternion Algebra ℍ', 'Exponential Function', 'Jacobian Matrix', '3D Rotations', 'Lie Group Theory']
    },
    {
      id: 'B',
      title: 'Differential Geometry',
      description: 'A comprehensive introduction to manifolds, tangent spaces, metrics, connections, geodesics, and curvature',
      topics: ['Manifolds', 'Tangent Vectors', 'Metric Tensor', 'Connections', 'Geodesics', 'Curvature', 'Differential Forms']
    },
    {
      id: 'C',
      title: 'Special Relativity',
      description: 'The geometry and physics of spacetime with the principle of relativity and constancy of the speed of light',
      topics: ['Lorentz Transformations', '4-Momentum', 'Time Dilation', 'Length Contraction', 'Mass-Energy Equivalence']
    },
    {
      id: 'D',
      title: 'Tensor Calculus',
      description: 'The language of coordinate-independent mathematics for vectors, tensors, and differential operators',
      topics: ['Index Notation', 'Tensor Transformations', 'Covariant Derivative', 'Christoffel Symbols', 'Tensor Operations']
    },
    {
      id: 'E',
      title: 'Calculus of Variations',
      description: 'The mathematical framework for optimizing functionals, including Euler-Lagrange equations and geodesics',
      topics: ['Functionals', 'Euler-Lagrange Equations', 'Lagrangian Mechanics', 'Geodesics', 'First Variation']
    },
    {
      id: 'F',
      title: 'Introduction to Electrodynamics',
      description: 'A compact study guide to vector analysis, electrostatics, magnetostatics, and Maxwell’s equations',
      topics: ['Vector Analysis', 'Maxwell Equations', 'Lorentz Force', 'Electromagnetic Waves', 'Radiation']
    },
    {
      id: 'G',
      title: 'Introduction to Quantum Mechanics',
      description: 'A compact study guide to wave mechanics, observables, angular momentum, and scattering',
      topics: ['Schrödinger Equation', 'Operators', 'Angular Momentum', 'Spin', 'Scattering']
    },
    {
      id: 'H',
      title: 'Partial Differential Equations',
      description: 'A compact crash course on first-order equations, classification, wave and heat equations, and Fourier methods',
      topics: ['Characteristics', 'Classification', 'Wave Equation', 'Heat Equation', 'Fourier Series']
    }
  ]

  if (id) {
    return (
      <Layout>
        <div className="chapter1-container">
          <div className="chapter1-header">
            <button className="back-button" onClick={() => navigate('/appendices')}>
              ← Back to Appendices
            </button>
            <h1>Appendix {id}</h1>
          </div>

          <div className="chapter1-content">
            {id === 'A' && <AppendixA />}
            {id === 'B' && <AppendixB />}
            {id === 'C' && <AppendixC />}
            {id === 'D' && <AppendixD />}
            {id === 'E' && <AppendixE />}
            {id === 'F' && <AppendixF />}
            {id === 'G' && <AppendixG />}
            {id === 'H' && <AppendixH />}
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="chapter1-container">
        <div className="chapter1-header">
          <h1>Appendices</h1>
          <p className="appendices-intro">Supplementary mathematical reference materials</p>
        </div>

        <div className="chapter1-content">
          <div className="appendices-list">
            {appendices.map((appendix) => (
              <div
                key={appendix.id}
                className="appendix-card"
                onClick={() => navigate(`/appendix/${appendix.id}`)}
              >
                <div className="appendix-badge">Appendix {appendix.id}</div>
                <div className="appendix-info">
                  <h3>{appendix.title}</h3>
                  <p className="appendix-description">{appendix.description}</p>
                  <div className="appendix-topics">
                    {appendix.topics.map((topic) => (
                      <span key={topic} className="appendix-tag">{topic}</span>
                    ))}
                  </div>
                </div>
                <div className="appendix-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Appendix
