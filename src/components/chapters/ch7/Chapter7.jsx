import ChapterPage from '../ChapterPage'
import Chapter7Summary from './Chapter7Summary'
import Chapter7Exercises from './Chapter7Exercises'

function Chapter7() {
  return (
    <ChapterPage
      title="Chapter 7 - Incompatibility of Gravity and Special Relativity"
      summary={<Chapter7Summary />}
      exercises={<Chapter7Exercises />}
    />
  )
}

export default Chapter7
