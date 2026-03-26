import ChapterPage from '../ChapterPage'
import Chapter9Summary from './Chapter9Summary'
import Chapter9Exercises from './Chapter9Exercises'

function Chapter9() {
  return (
    <ChapterPage
      title="Chapter 9 - Differential Topology"
      summary={<Chapter9Summary />}
      exercises={<Chapter9Exercises />}
    />
  )
}

export default Chapter9
