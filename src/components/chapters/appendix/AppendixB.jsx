import appendixContent from '../../../chapters/differential-geomentry/differential-geometry.md?raw'
import 'katex/dist/katex.min.css'
import '../ch1/Chapters.css'
import AppendixBVisualizationSuite from './AppendixBVisualizationSuite'

function AppendixB() {
  return (
    <div className="chapter-content">
      <AppendixBVisualizationSuite markdown={appendixContent} />
    </div>
  )
}

export default AppendixB
