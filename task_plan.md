# Task Plan: Appendix D Tensor Calculus Intuition Visualization
## Goal
Implement inline intuition visualizations for Appendix D and insert them at the relevant points in the tensor-calculus crash-course page.
## Phases
- [x] Phase 1: Inspect appendix content and reference pattern
- [x] Phase 2: Decide appendix demo set and insertion points
- [x] Phase 3: Implement inline visualization components and integrate Appendix D
- [x] Phase 4: Verify build/lint and summarize
## Key Questions
1. Which tensor-calculus concepts need visual intuition support?
2. Where should the demos be inserted so they align with the markdown flow?
## Decisions Made
- Appendix D should use an inline suite that covers scalars/vectors/covectors, Einstein summation, coordinate transformations, dual bases, metrics, tensor products, symmetry, covariant derivatives, polar-coordinate operators, geodesics/curvature, conservation laws, workflow, and the difference from vector calculus and differential forms.
- The demos should be inserted between rendered markdown sections in `AppendixD.jsx` rather than as a top-level block.
## Errors Encountered
- None yet.
## Status
**Complete** - Appendix D visualizations implemented and verified
