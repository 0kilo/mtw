import ChapterPage from '../ChapterPage'
import Chapter13Summary from './Chapter13Summary'
import Chapter13Exercises from './Chapter13Exercises'

function Chapter13() {
  return (
    <ChapterPage
      title="Chapter 13 - Riemannian Geometry: Metric as Foundation of All"
      summary={<Chapter13Summary />}
      exercises={<Chapter13Exercises />}
    />
  )
}

export default Chapter13
