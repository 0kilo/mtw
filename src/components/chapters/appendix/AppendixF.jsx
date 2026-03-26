import appendixContent from '../../../chapters/electrodynamics/electrodynamics.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'
import AppendixFVisualizationSuite from './AppendixFVisualizationSuite'

function AppendixF() {
  return (
    <div className="chapter-content">
      <AppendixFVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixF
