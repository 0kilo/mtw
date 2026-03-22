import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ChaptersList from './components/chapters/ChaptersList'
import Chapter1 from './components/chapters/ch1/Chapter1'
import Chapter2 from './components/chapters/ch2/Chapter2'
import Chapter3 from './components/chapters/ch3/Chapter3'
import Chapter4 from './components/chapters/ch4/Chapter4'
import Chapter5 from './components/chapters/ch5/Chapter5'
import Appendix from './components/chapters/appendix/Appendix'
import Visualizations from './components/visualizations/Visualizations'
import Level1Grid from './components/visualizations/Level1Grid'
import Level2Grid from './components/visualizations/Level2Grid'
import Level3Grid from './components/visualizations/Level3Grid'
import InteractiveViz from './components/visualizations/InteractiveViz'

function App() {
  return (
    <BrowserRouter basename="/mtw">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chapters" element={<ChaptersList />} />
        <Route path="/chapter/1" element={<Chapter1 />} />
        <Route path="/chapter/2" element={<Chapter2 />} />
        <Route path="/chapter/3" element={<Chapter3 />} />
        <Route path="/chapter/4" element={<Chapter4 />} />
        <Route path="/chapter/5" element={<Chapter5 />} />
        <Route path="/appendices" element={<Appendix />} />
        <Route path="/appendix/:id" element={<Appendix />} />
        <Route path="/visualizations" element={<Visualizations />} />
        <Route path="/visualization/level1" element={<Level1Grid />} />
        <Route path="/visualization/level2" element={<Level2Grid />} />
        <Route path="/visualization/level3" element={<Level3Grid />} />
        <Route path="/viz" element={<InteractiveViz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
