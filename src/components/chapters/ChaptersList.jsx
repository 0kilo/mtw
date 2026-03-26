import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import './ChaptersList.css'

function ChaptersList() {
  const navigate = useNavigate()

  const chapters = [
    {
      number: 1,
      title: 'Geometrodynamics in Brief',
      description: 'Gaussian curvature, geodesics, and tidal forces',
    },
    {
      number: 2,
      title: 'Foundations of Special Relativity',
      description: 'Vectors, 1-forms, metric tensor, and Lorentz transforms',
    },
    {
      number: 3,
      title: 'The Electromagnetic Field',
      description: 'Lorentz force, Faraday tensor, and Maxwell equations',
    },
    {
      number: 4,
      title: 'Electromagnetism and Differential Forms',
      description: 'Exterior calculus, Faraday 2-form, and geometric Maxwell equations',
    },
    {
      number: 5,
      title: 'Stress-Energy Tensor and Conservation Laws',
      description: 'Energy density, momentum flux, perfect fluids, and angular momentum',
    },
    {
      number: 6,
      title: 'Accelerated Observers',
      description: 'Uniform acceleration, tetrads, and Fermi-Walker transport',
    },
    {
      number: 7,
      title: 'Incompatibility of Gravity and Special Relativity',
      description: 'Scalar, vector, and tensor gravity plus gravitational redshift',
    },
    {
      number: 8,
      title: 'Differential Geometry: An Overview',
      description: 'Tangent vectors, bases, commutators, and geometry language',
    },
    {
      number: 9,
      title: 'Differential Topology',
      description: 'Tangent spaces, vector fields, and coordinate-free structure',
    },
    {
      number: 10,
      title: 'Affine Geometry',
      description: 'Geodesics, parallel transport, and covariant derivatives',
    },
  ]

  return (
    <Layout>
      <div className="chapters-list">
        <h1>Chapters</h1>
        <p className="chapters-intro">Select a chapter to view exercises and solutions</p>

        <div className="chapter-cards">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="chapter-card"
              onClick={() => navigate(`/chapter/${chapter.number}`)}
            >
              <div className="chapter-number">Chapter {chapter.number}</div>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <span className="read-more">Read exercises →</span>
            </div>
          ))}
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
