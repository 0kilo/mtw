import ChapterPage from '../ChapterPage'
import Chapter14Summary from './Chapter14Summary'
import Chapter14Exercises from './Chapter14Exercises'

function Chapter14() {
  return (
    <ChapterPage
      title="Chapter 14 - Calculation of Curvature"
      summary={<Chapter14Summary />}
      exercises={<Chapter14Exercises />}
    />
  )
}

export default Chapter14
