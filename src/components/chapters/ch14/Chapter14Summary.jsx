import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch14/summary.md?raw'
import Chapter14VisualizationSuite from './Chapter14VisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter14Summary() {
  return (
    <div className="chapter-content">
      <Chapter14VisualizationSuite />
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter14Summary
