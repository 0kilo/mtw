import ChapterPage from '../ChapterPage'
import Chapter12Summary from './Chapter12Summary'
import Chapter12Exercises from './Chapter12Exercises'

function Chapter12() {
  return (
    <ChapterPage
      title="Chapter 12 - Newtonian Gravity in the Language of Curved Spacetime"
      summary={<Chapter12Summary />}
      exercises={<Chapter12Exercises />}
    />
  )
}

export default Chapter12
