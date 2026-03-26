import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch4/summary.md?raw'
import Chapter4VisualizationSuite from './Chapter4VisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter4Summary() {
  return (
    <div className="chapter-content">
      <Chapter4VisualizationSuite />
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter4Summary
