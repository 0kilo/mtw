# Khantraction Research Note: A Quaternion-Valued Toy Model with a Scalar-to-Quaternion Branch Family

## Source and scope
This summary distills the current Khantraction work—physics notes, derivations, numerical experiments, and the revised paper draft—into a site-facing overview. The goal is to present the actual strongest result of the project clearly and honestly.

## What Khantraction currently is
Khantraction is an **exploratory research program**, not a validated physical theory. In its current form, it studies whether a quaternion-valued toy field model can support localized spacetime contractions with nontrivial branch structure.

The rope-and-knot picture remains heuristic: a localized fold persists while spacetime threads through it, and the knot’s tightness influences how strongly the fold delays proper time. The current work should therefore be read as a toy-model investigation with real equations, real code, and real numerical branch structure—but not as a finished particle theory.

## Executive summary
1. **Quaternion-valued toy model:** Khantraction models a localized contraction using a quaternion-valued field $q=s+\vec v\cdot\vec\tau$ with norm $|q|^2=s^2+\vec v\cdot\vec v$, together with a quartic self-interaction and curvature coupling.
2. **Reduced radial model:** Early numerical work on a reduced static radial system showed that the toy equations can support regular localized-looking profiles over the integration domain.
3. **Strongest current result:** The fuller four-component norm-based quaternion model supports a **continuous family of regular radial solutions** connecting a scalar-dominated regime to a strongly quaternion-rich regime.
4. **What grows along the family:** As quaternion richness increases, the branch also shows increasing final mass, increasing integrated curvature magnitude, and increasing exponential-quaternion vector content.
5. **What is still missing:** The model remains a toy theory; it does not yet derive real particle properties, full stability, or experimentally relevant predictions.

## Quaternion-valued toy field theory
The toy-model glue Lagrangian is

$
\mathcal L=\sqrt{-g}\left[\tfrac{1}{2}g^{\mu\nu}(\partial_\mu s\partial_\nu s+\partial_\mu\vec v\cdot\partial_\nu\vec v)-U(|q|)+\xi R|q|^2\right]-\sqrt{-g}\left[\tfrac{1}{4}F_{\mu\nu}F^{\mu\nu}+\lambda|q|^2F_{\mu\nu}F^{\mu\nu}\right].
$

Here the quaternion field is packaged as

$
q=s+\vec v\cdot\vec\tau,
\qquad
|q|^2=s^2+\vec v\cdot\vec v,
$

and the potential is

$
U(|q|)=\tfrac{m_{\text{glue}}^2}{2}|q|^2+\tfrac{\lambda_q}{4}|q|^4.
$

At present this should be understood as a useful quaternion-valued toy model rather than a symmetry-derived microscopic theory.

## Reduced radial model and early profile
For static, spherically symmetric reductions one may write

$
ds^2=-e^{2\Phi}dt^2+e^{2\Lambda}dr^2+r^2d\Omega^2,
\qquad
 e^{-2\Lambda}=1-2m(r)/r,
$

with a reduced vector ansatz $\vec v=v(r)\hat r$. The reduced field equations take the schematic form

$
s''+\left(\frac{2}{r}+\Phi'-\Lambda'\right)s'-\frac{dU}{ds}+2\xi R s=0,
\quad
v''+\left(\frac{2}{r}+\Phi'-\Lambda'\right)v'-\frac{dU}{dv}+2\xi R v=0.
$

For parameter choices such as

$
m_{\text{glue}}=0.1,
\qquad
\lambda_q=0.01,
\qquad
\xi=0.002,
$

with initial data $s(10^{-3})=0.02$ and $v'(10^{-3})=0.001$, the RK4 solver reaches $r=20$ without encountering a horizon and yields a regular localized-looking profile with outer values roughly

$
|q|\approx0.0363,
\qquad
m(r)\approx0.178,
\qquad
R\approx-7.6\times10^{-4}.
$

That reduced profile remains useful as a first indication that the toy equations can support bounded radial structure. But it is no longer the strongest numerical result of the project.

## Full four-component quaternion model
The strongest current result comes from the fuller radial quaternion field

$
q(r)=a(r)+b(r)i+c(r)j+d(r)k,
$

with norm

$
|q|^2=a^2+b^2+c^2+d^2.
$

This version is still norm-symmetric—its dynamics depend on the quaternion norm rather than on quaternion direction in a strong way—but it reveals a much richer branch structure than the reduced amplitude model.

## Branch structure: scalar-dominated to quaternion-rich
A convenient branch coordinate is

$
\max_r \frac{\theta(r)}{|a(r)|},
\qquad
\theta(r)=\sqrt{b(r)^2+c(r)^2+d(r)^2}.
$

This quantity measures how strongly the imaginary quaternion sector dominates the real component.

In the scalar-dominated regime,

$
\max_r \frac{\theta}{|a|}\sim 5\times10^{-5}.
$

In the quaternion-rich regime,

$
\max_r \frac{\theta}{|a|}\sim 9.1\times10^{1}.
$

A numerical continuation between these endpoints remains regular across the sampled path, suggesting that they belong to the same connected family rather than to disconnected sectors.

Useful crossover markers occur at roughly:

- first $\theta/|a| \ge 1$: $t\approx0.125$
- first $\theta/|a| \ge 10$: $t\approx0.600$
- first $\theta/|a| \ge 50$: $t\approx0.9375$

These should be interpreted as branch-family milestones rather than as proven phase transitions.

## Geometric and exponential diagnostics along the family
As the family moves from scalar-dominated to quaternion-rich behavior, several observables increase monotonically:

- final mass,
- integrated curvature magnitude,
- integrated quaternion magnitude,
- and the exponential-quaternion vector component.

The exponential diagnostics are naturally written as

$
Q_0=e^a\cos\theta,
\qquad
Q_{\mathrm{vec}}=e^a|\sin\theta|.
$

On the scalar-dominated end, $Q_{\mathrm{vec}}$ is negligible. On the quaternion-rich end, it becomes clearly nontrivial. So while the quaternion exponential is still interpretive rather than fundamental in the current toy theory, it does capture a meaningful aspect of the branch progression.

## What the current model does and does not show
### What it does show
- the full quaternion-valued toy model supports regular scalar-dominated branches,
- it also supports regular quaternion-rich branches,
- and the two are connected by a continuous family of regular radial solutions.

### What it does not yet show
- recovery of real particle physics,
- spin/statistics/charge derivations,
- full nonlinear stability,
- uniqueness,
- or experimental contact.

So the current result is best understood as a strong toy-model branch-structure result, not a claim of physical completion.

## Current status
- **Paper status:** The paper draft has been revised to center the full quaternion norm-family result rather than only the original reduced profile.
- **Strongest numerical result:** The continuous scalar-to-quaternion branch family in the full norm-based quaternion model.
- **Exploratory extensions:** Direction-sensitive and Maurer–Cartan upgrades have also been explored, but in their present reduced forms they have not yet produced branch structure stronger than the full norm-based model.

## Limitations
The present Khantraction program remains limited in several important ways:

- no derivation from a compelling microscopic symmetry principle,
- no recovery of known particle properties such as spin/statistics/charge,
- no full perturbative or nonlinear stability analysis,
- no completed fluctuation spectrum or quantization,
- and no strong evidence yet that quaternion direction, rather than quaternion magnitude, controls branch structure in the current toy theories.

These limitations are substantial, and they define the current epistemic status of the project.

## Future directions
- characterize the scalar-to-quaternion branch family more sharply,
- strengthen stability analysis along the family,
- compute additional curvature and branch invariants,
- sharpen the quaternion-geometry correspondence,
- and investigate whether more intrinsically quaternionic transport formulations can make quaternion direction—not just quaternion magnitude—dynamically relevant.

In short: Khantraction is currently best viewed as an intriguing quaternion-valued toy model with real equations, real code, and a continuous family of regular radial solutions ranging from scalar-dominated to quaternion-rich behavior—not yet as an established theory of particles.
