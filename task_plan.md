# Task Plan: Fix Geodesic Graph

## Goal
Make `src/components/graph/geodesic` render a correct level-3 visualization for the default Schwarzschild demo.

## Phases
- [x] Phase 1: Inspect the geodesic pipeline and compare it with the chapter docs
- [x] Phase 2: Patch the initial conditions / direction generation
- [ ] Phase 3: Verify the graph in the browser
- [ ] Phase 4: Summarize the fix and any remaining limitations

## Key Questions
1. Which part of the geodesic setup is producing the misleading display?
2. What is the smallest code change that makes the default view match the intended demo?

## Decisions Made
- Use the existing geodesic helpers rather than introducing a new rendering path.

## Errors Encountered
- None.

## Status
**Currently in Phase 3** - ready for visual verification of the updated Schwarzschild default view.
