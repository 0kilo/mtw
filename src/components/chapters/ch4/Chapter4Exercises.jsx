import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import exercisesContent from '../../../chapters/ch4/exercises.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter4Exercises() {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {exercisesContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter4Exercises
