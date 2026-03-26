import appendixContent from '../../../chapters/pde/pde.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'
import AppendixHVisualizationSuite from './AppendixHVisualizationSuite'

function AppendixH() {
  return (
    <div className="chapter-content">
      <AppendixHVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixH
