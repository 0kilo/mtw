import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch13/summary.md?raw'
import Chapter13VisualizationSuite from './Chapter13VisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter13Summary() {
  return (
    <div className="chapter-content">
      <Chapter13VisualizationSuite />
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter13Summary
