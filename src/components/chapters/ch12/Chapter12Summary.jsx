import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch12/summary.md?raw'
import Chapter12VisualizationSuite from './Chapter12VisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter12Summary() {
  return (
    <div className="chapter-content">
      <Chapter12VisualizationSuite />
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter12Summary
