import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import summaryContent from '../../../chapters/ch3/summary.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter3Summary() {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {summaryContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter3Summary
