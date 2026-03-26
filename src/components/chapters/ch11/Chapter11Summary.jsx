import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch11/summary.md?raw'
import Chapter11VisualizationSuite from './Chapter11VisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter11Summary() {
  return (
    <div className="chapter-content">
      <Chapter11VisualizationSuite />
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter11Summary
