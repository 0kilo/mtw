import appendixContent from '../../../chapters/intro-quantum/into-quantum.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'
import AppendixGVisualizationSuite from './AppendixGVisualizationSuite'

function AppendixG() {
  return (
    <div className="chapter-content">
      <AppendixGVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixG
