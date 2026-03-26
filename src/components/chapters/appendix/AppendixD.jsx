import appendixContent from '../../../chapters/tensor-calculus/tensor-calculus.md?raw'
import AppendixDVisualizationSuite from './AppendixDVisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function AppendixD() {
  return (
    <div className="chapter-content">
      <AppendixDVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixD
