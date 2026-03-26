import ChapterPage from '../ChapterPage'
import Chapter11Summary from './Chapter11Summary'
import Chapter11Exercises from './Chapter11Exercises'

function Chapter11() {
  return (
    <ChapterPage
      title="Chapter 11 - Geodesic Deviation and Spacetime Curvature"
      summary={<Chapter11Summary />}
      exercises={<Chapter11Exercises />}
    />
  )
}

export default Chapter11
