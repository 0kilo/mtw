import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch9/summary.md?raw'
import Chapter9VisualizationSuite from './Chapter9VisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter9Summary() {
  return (
    <div className="chapter-content">
      <Chapter9VisualizationSuite />
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter9Summary
