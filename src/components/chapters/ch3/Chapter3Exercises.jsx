import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import exercisesContent from '../../../chapters/ch3/exercises.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function Chapter3Exercises() {
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

export default Chapter3Exercises
