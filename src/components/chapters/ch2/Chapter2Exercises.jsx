import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import exercisesContent from '../../../chapters/ch2/exercises.md?raw'
import 'katex/dist/katex.min.css'
import './Chapters.css'

function Chapter2Exercises() {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {exercisesContent}
      </ReactMarkdown>
    </div>
  )
}

export default Chapter2Exercises
