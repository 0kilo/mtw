import ChapterPage from '../ChapterPage'
import Chapter8Summary from './Chapter8Summary'
import Chapter8Exercises from './Chapter8Exercises'

function Chapter8() {
  return (
    <ChapterPage
      title="Chapter 8 - Differential Geometry: An Overview"
      summary={<Chapter8Summary />}
      exercises={<Chapter8Exercises />}
    />
  )
}

export default Chapter8
