import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ChaptersList from './components/chapters/ChaptersList'
import Chapter1 from './components/chapters/ch1/Chapter1'
import Chapter2 from './components/chapters/ch2/Chapter2'
import Chapter3 from './components/chapters/ch3/Chapter3'
import Chapter4 from './components/chapters/ch4/Chapter4'
import Chapter5 from './components/chapters/ch5/Chapter5'
import Chapter6 from './components/chapters/ch6/Chapter6'
import Chapter7 from './components/chapters/ch7/Chapter7'
import Chapter8 from './components/chapters/ch8/Chapter8'
import Chapter9 from './components/chapters/ch9/Chapter9'
import Chapter10 from './components/chapters/ch10/Chapter10'
import Chapter11 from './components/chapters/ch11/Chapter11'
import Chapter12 from './components/chapters/ch12/Chapter12'
import Chapter13 from './components/chapters/ch13/Chapter13'
import Chapter14 from './components/chapters/ch14/Chapter14'
import Khantraction from './components/chapters/khantraction/Khantraction'
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
        <Route path="/chapter/6" element={<Chapter6 />} />
        <Route path="/chapter/7" element={<Chapter7 />} />
        <Route path="/chapter/8" element={<Chapter8 />} />
        <Route path="/chapter/9" element={<Chapter9 />} />
        <Route path="/chapter/10" element={<Chapter10 />} />
        <Route path="/chapter/11" element={<Chapter11 />} />
        <Route path="/chapter/12" element={<Chapter12 />} />
        <Route path="/chapter/13" element={<Chapter13 />} />
        <Route path="/chapter/14" element={<Chapter14 />} />
        <Route path="/khantraction" element={<Khantraction />} />
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
