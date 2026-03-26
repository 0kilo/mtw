# Chapter 1 Visualization Plan

## Target Outcome
Use focused, chapter-specific visuals to turn the main conceptual claims of Chapter 1 into interactive intuition.

## Recommended Build Order

### 1. Flat vs Curved Geodesics
- Purpose: show the transition from "motion under force" to "motion determined by geometry."
- Implementation: side-by-side `GeodesicGrid` comparison using Minkowski and Schwarzschild presets.
- Status: implemented.

### 2. Apple Geodesic Demo
- Purpose: connect directly to the opening ant-on-apple story.
- Implementation: custom surface embedding with a local tangent-patch toggle and animated geodesic tracks.
- Why second: strongest chapter fit, but needs custom surface code beyond current graph presets.
- Status: implemented as an SVG lab with whole-surface vs local-patch toggle.

### 3. Local Inertial Frame Demo
- Purpose: show that gravity disappears locally in free fall.
- Implementation: 2D or 2.5D split-view elevator scene with frame toggle and box-size slider.
- Status: implemented as a split-view falling-lab comparison with lab-size slider.

### 4. Bad Clock Demo
- Purpose: show why "time is defined so that motion looks simple."
- Implementation: worldline plotted under good time `t` and warped time `T(t)`.
- Status: implemented.

### 5. Geodesic Deviation Demo
- Purpose: make curvature observable through relative acceleration.
- Implementation: initially parallel nearby paths or a particle ring evolving near a mass.
- Status: implemented as a tidal-ring deformation demo.

## Placement in the Chapter
- Put the first visualization at the top of the Summary tab, before the long markdown body.
- Keep it framed as an "intuition lab" so the user knows it is there to support the text, not replace it.

## Design Constraints
- Reuse existing graph components where possible.
- Avoid dropping the full generic graph control surface into the chapter.
- Prefer clear comparisons and short explanatory copy over heavy UI.
