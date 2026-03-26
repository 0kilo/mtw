import ChapterPage from '../ChapterPage'
import Chapter6Summary from './Chapter6Summary'
import Chapter6Exercises from './Chapter6Exercises'

function Chapter6() {
  return (
    <ChapterPage
      title="Chapter 6 - Accelerated Observers"
      summary={<Chapter6Summary />}
      exercises={<Chapter6Exercises />}
    />
  )
}

export default Chapter6
