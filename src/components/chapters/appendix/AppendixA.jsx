import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import appendixContent from '../../../chapters/exponential-quaternion/exponential-quat.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function AppendixA() {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {appendixContent}
      </ReactMarkdown>
    </div>
  )
}

export default AppendixA
