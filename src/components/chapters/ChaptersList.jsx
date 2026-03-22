import { useState } from 'react'
import Chapter1 from './ch1/Chapter1'
import Chapter2 from './ch2/Chapter2'
import Chapter3 from './ch3/Chapter3'
import Chapter4 from './ch4/Chapter4'
import Chapter5 from './ch5/Chapter5'
import Appendix from './appendix/Appendix'
import './ChaptersList.css'

function ChaptersList() {
  const [selectedView, setSelectedView] = useState(null)
  const [viewType, setViewType] = useState(null)

  if (selectedView) {
    return (
      <div className="chapters-viewer">
        <button className="back-button" onClick={() => setSelectedView(null)}>
          ← Back to {viewType === 'chapter' ? 'Chapters' : 'Appendices'}
        </button>
        {viewType === 'chapter' && selectedView === 'ch1' && <Chapter1 />}
        {viewType === 'chapter' && selectedView === 'ch2' && <Chapter2 />}
        {viewType === 'chapter' && selectedView === 'ch3' && <Chapter3 />}
        {viewType === 'chapter' && selectedView === 'ch4' && <Chapter4 />}
        {viewType === 'chapter' && selectedView === 'ch5' && <Chapter5 />}
        {viewType === 'appendix' && selectedView === 'main' && <Appendix />}
      </div>
    )
  }

  return (
    <div className="chapters-list">
      <h1>Chapters</h1>
      <p className="chapters-intro">Select a chapter to view exercises and solutions</p>

      <div className="chapter-cards">
        <div
          className="chapter-card"
          onClick={() => { setSelectedView('ch1'); setViewType('chapter') }}
        >
          <div className="chapter-number">Chapter 1</div>
          <h3>Geometrodynamics in Brief</h3>
          <p>Gaussian curvature, geodesics, and tidal forces</p>
          <span className="read-more">Read exercises →</span>
        </div>
        <div
          className="chapter-card"
          onClick={() => { setSelectedView('ch2'); setViewType('chapter') }}
        >
          <div className="chapter-number">Chapter 2</div>
          <h3>Foundations of Special Relativity</h3>
          <p>4-momentum, Lorentz transformations, and temperature gradients</p>
          <span className="read-more">Read exercises →</span>
        </div>
        <div
          className="chapter-card"
          onClick={() => { setSelectedView('ch3'); setViewType('chapter') }}
        >
          <div className="chapter-number">Chapter 3</div>
          <h3>The Electromagnetic Field</h3>
          <p>Lorentz force, Faraday tensor, and Maxwell's equations</p>
          <span className="read-more">Read exercises →</span>
        </div>
        <div
          className="chapter-card"
          onClick={() => { setSelectedView('ch4'); setViewType('chapter') }}
        >
          <div className="chapter-number">Chapter 4</div>
          <h3>Electromagnetism and Differential Forms</h3>
          <p>Exterior calculus, Faraday 2-form, and geometric Maxwell equations</p>
          <span className="read-more">Read exercises →</span>
        </div>
        <div
          className="chapter-card"
          onClick={() => { setSelectedView('ch5'); setViewType('chapter') }}
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
          onClick={() => { setSelectedView('main'); setViewType('appendix') }}
        >
          <div className="chapter-number">All Appendices</div>
          <h3>Mathematical Reference Collection</h3>
          <p>Quaternions, differential geometry, special relativity, and tensor calculus</p>
          <span className="read-more">Browse appendices →</span>
        </div>
      </div>
    </div>
  )
}

export default ChaptersList
