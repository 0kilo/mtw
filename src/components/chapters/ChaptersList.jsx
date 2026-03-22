import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import './ChaptersList.css'

function ChaptersList() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="chapters-list">
        <h1>Chapters</h1>
        <p className="chapters-intro">Select a chapter to view exercises and solutions</p>

        <div className="chapter-cards">
          <div
            className="chapter-card"
            onClick={() => navigate('/chapter/1')}
          >
            <div className="chapter-number">Chapter 1</div>
            <h3>Geometrodynamics in Brief</h3>
            <p>Gaussian curvature, geodesics, and tidal forces</p>
            <span className="read-more">Read exercises →</span>
          </div>
          <div
            className="chapter-card"
            onClick={() => navigate('/chapter/2')}
          >
            <div className="chapter-number">Chapter 2</div>
            <h3>Foundations of Special Relativity</h3>
            <p>4-momentum, Lorentz transformations, and temperature gradients</p>
            <span className="read-more">Read exercises →</span>
          </div>
          <div
            className="chapter-card"
            onClick={() => navigate('/chapter/3')}
          >
            <div className="chapter-number">Chapter 3</div>
            <h3>The Electromagnetic Field</h3>
            <p>Lorentz force, Faraday tensor, and Maxwell's equations</p>
            <span className="read-more">Read exercises →</span>
          </div>
          <div
            className="chapter-card"
            onClick={() => navigate('/chapter/4')}
          >
            <div className="chapter-number">Chapter 4</div>
            <h3>Electromagnetism and Differential Forms</h3>
            <p>Exterior calculus, Faraday 2-form, and geometric Maxwell equations</p>
            <span className="read-more">Read exercises →</span>
          </div>
          <div
            className="chapter-card"
            onClick={() => navigate('/chapter/5')}
          >
            <div className="chapter-number">Chapter 5</div>
            <h3>Stress-Energy Tensor and Conservation Laws</h3>
            <p>Energy density, momentum flux, perfect fluids, and angular momentum</p>
            <span className="read-more">Read exercises →</span>
          </div>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Appendices</h2>
        <p className="chapters-intro">Supplementary mathematical reference materials</p>

        <div className="chapter-cards">
          <div
            className="chapter-card"
            onClick={() => navigate('/appendices')}
          >
            <div className="chapter-number">All Appendices</div>
            <h3>Mathematical Reference Collection</h3>
            <p>Quaternions, differential geometry, special relativity, and tensor calculus</p>
            <span className="read-more">Browse appendices →</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChaptersList
