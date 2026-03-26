import appendixContent from '../../../chapters/calculus-of-variations/calculus-of-variations.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'
import AppendixEVisualizationSuite from './AppendixEVisualizationSuite'

function AppendixE() {
  return (
    <div className="chapter-content">
      <AppendixEVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixE
