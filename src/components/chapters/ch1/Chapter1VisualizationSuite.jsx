import Chapter1IntuitionViz from './Chapter1IntuitionViz'
import AppleParableDemo from './AppleParableDemo'
import LocalInertialFrameDemo from './LocalInertialFrameDemo'
import BadClockDemo from './BadClockDemo'
import GeodesicDeviationDemo from './GeodesicDeviationDemo'
import './Chapter1VisualizationSuite.css'

function Chapter1VisualizationSuite() {
  return (
    <section className="chapter1-visual-suite">
      <div className="chapter1-visual-suite-header">
        <span className="chapter1-visual-suite-kicker">Chapter 1 Visualizations</span>
        <h2>Interactive intuition before the formalism</h2>
        <p>
          These labs track the chapter&apos;s argument in order: geodesics on a curved
          surface, local free-fall frames, the role of time coordinates, and curvature
          detected through relative motion.
        </p>
      </div>

      <nav className="chapter1-visual-suite-nav" aria-label="Chapter 1 visualization topics">
        <a href="#flat-vs-curved">Flat vs curved</a>
        <a href="#apple-parable">Apple parable</a>
        <a href="#local-inertial-frame">Free-fall lab</a>
        <a href="#bad-clock">Bad clock</a>
        <a href="#geodesic-deviation">Geodesic deviation</a>
      </nav>

      <div id="flat-vs-curved">
        <Chapter1IntuitionViz />
      </div>
      <AppleParableDemo />
      <LocalInertialFrameDemo />
      <BadClockDemo />
      <GeodesicDeviationDemo />
    </section>
  )
}

export default Chapter1VisualizationSuite
