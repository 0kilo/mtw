import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import content from '../graph/level2-metric-grid.md?raw'
import 'katex/dist/katex.min.css'
import '../chapters/ch1/Chapters.css'
import './LevelPage.css'

function Level2Grid() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="level-page">
        <div className="level-page-header">
          <button className="back-button" onClick={() => navigate('/visualizations')}>
            ← Back to Visualizations
          </button>
          <h1>Level 2: Metric-Aware Grid</h1>
          <p className="level-subtitle">Proper Distances - Accounting for curved spacetime geometry</p>
        </div>
        <div className="chapter-content">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export default Level2Grid
