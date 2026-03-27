import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import KhantractionSummary from './KhantractionSummary'
import './Khantraction.css'

function Khantraction() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="khantraction-page">
        <div className="khantraction-header">
          <button className="back-button" onClick={() => navigate('/chapters')}>
            ← Back to Chapters
          </button>
          <div>
            <h1>Khantraction: Spacetime Knot Research</h1>
            <p className="khantraction-tagline">
              Quaternion glue, photon limits, and the numerical profile that ties another knot between geometry and quantum mechanics.
            </p>
          </div>
        </div>
        <div className="khantraction-content">
          <KhantractionSummary />
        </div>
      </div>
    </Layout>
  )
}

export default Khantraction
