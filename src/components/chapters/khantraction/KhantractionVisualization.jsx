import profile from '../../../chapters/khantraction/khantraction_profile.png'

function KhantractionVisualization() {
  return (
    <div className="khantraction-visualization">
      <figure>
        <img src={profile} alt="Khantraction glue profile" />
        <figcaption>
          Figure 1. Scalar/vector glue components, quaternion norm, mass, and Ricci scalar from the RK4 solution. The knot tapers into flat space near \(r=20\).
        </figcaption>
      </figure>
    </div>
  )
}

export default KhantractionVisualization
