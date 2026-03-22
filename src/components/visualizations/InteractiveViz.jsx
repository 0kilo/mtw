import Layout from '../layout/Layout'
import Graph from '../graph/Graph'
import './InteractiveViz.css'

function InteractiveViz() {
  return (
    <Layout>
      <div className="interactive-viz">
        <div className="viz-container">
          <Graph />
        </div>
      </div>
    </Layout>
  )
}

export default InteractiveViz
