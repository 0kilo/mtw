import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import appendixContent from '../../../chapters/pde/pde.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function AppendixH() {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {appendixContent}
      </ReactMarkdown>
    </div>
  )
}

export default AppendixH
