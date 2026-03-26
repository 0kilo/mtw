import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import boxesContent from '../../../chapters/ch1/boxes.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter1Boxes() {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {boxesContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter1Boxes
