import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch1/summary.md?raw'
import Chapter1VisualizationSuite from './Chapter1VisualizationSuite'
import 'katex/dist/katex.min.css'
import './Chapters.css'

function Chapter1Summary() {
  return (
    <div className="chapter-content">
      <Chapter1VisualizationSuite />
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter1Summary
