# Notes: Appendix D Tensor Calculus Intuition Visualization
## Sources

### Source 1: src/chapters/tensor-calculus/tensor-calculus.md
- Key points:
  - The chapter progresses from the big idea and index notation into transformation laws, dual bases, metrics, covariant derivatives, Christoffel symbols, geodesics, curvature, and worked polar-coordinate examples.
  - Strong visual anchors are basis transformations, duality, metrics, contraction, Christoffel symbols, geodesics, curvature, and the distinction between coordinate and physical components.

### Source 2: src/components/chapters/appendix/AppendixD.jsx
- Key points:
  - Appendix D currently renders the markdown directly with `ReactMarkdown`.
  - Inline insertion will require splitting the markdown into section-sized chunks and rendering visualization blocks between them.

### Source 3: src/components/chapters/ch1/Chapter1IntuitionViz.jsx and related files
- Key points:
  - The chapter 1 visual style uses compact explanatory copy, paired panels, and short takeaway notes.
  - The appendix visual blocks should follow the same visual language even though they are inserted inline.

## Synthesized Findings

### Appendix D demo set
- Build a fuller inline set:
  - tensors as coordinate-independent objects
  - Einstein summation and contractions
  - coordinate transformations with Jacobians
  - basis and dual basis
  - metric tensor and raising/lowering indices
  - multilinear maps and tensor products
  - symmetry, antisymmetry, Kronecker delta, and Levi-Civita symbol
  - ordinary derivatives versus covariant derivatives
  - Christoffel symbols and polar coordinates
  - geodesics, curvature, torsion, and the Levi-Civita connection
  - covariant conservation laws and common tensors
  - coordinate components versus physical components
  - tensor calculus versus vector calculus and differential forms
  - workflow, mistakes, and the final memory map

### Placement
- Insert each visualization at the corresponding point in the appendix narrative, not as a top-level summary block.

### Verification
- `npm run lint` passed.
- `npm run build` passed.
