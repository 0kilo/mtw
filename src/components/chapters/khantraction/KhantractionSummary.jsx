import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/khantraction/summary.md?raw'
import KhantractionVisualization from './KhantractionVisualization'
import 'katex/dist/katex.min.css'
import './Chapters.css'
import './Khantraction.css'

function KhantractionSummary() {
  return (
    <div className="chapter-content">
      <KhantractionVisualization />
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default KhantractionSummary
