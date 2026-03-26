import ChapterPage from '../ChapterPage'
import Chapter10Summary from './Chapter10Summary'
import Chapter10Exercises from './Chapter10Exercises'

function Chapter10() {
  return (
    <ChapterPage
      title="Chapter 10 - Affine Geometry: Geodesics, Parallel Transport, and Covariant Derivative"
      summary={<Chapter10Summary />}
      exercises={<Chapter10Exercises />}
    />
  )
}

export default Chapter10
