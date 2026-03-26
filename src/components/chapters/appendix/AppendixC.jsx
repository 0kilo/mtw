import appendixContent from '../../../chapters/special-relativity/special-relativity.md?raw'
import AppendixCVisualizationSuite from './AppendixCVisualizationSuite'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'

function AppendixC() {
  return (
    <div className="chapter-content">
      <AppendixCVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixC
