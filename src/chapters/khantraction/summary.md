# Khantraction Research Note: Localized Spacetime Contractions

## Source and scope
This summary distills the Khantraction corpus—physics notes, numerical experiments, and the current draft paper—into a site-facing overview. The goal is to present the core idea, the toy-model field theory, the quaternion interpretation, and the present numerical status in a compact and honest way.

## What Khantraction currently is
Khantraction is an **exploratory research program**, not a validated physical theory. In its current form, it proposes a quaternion-valued toy field model for localized spacetime contractions and studies whether that model can support null-like and timelike regimes suggestive of photon-like and electron-like behavior.

The field combines:
- a scalar binding component,
- a three-component vector orientation,
- curvature coupling,
- and an electromagnetic coupling.

The rope-and-knot picture is heuristic: a localized fold persists while spacetime threads through it, and the knot’s tightness influences how strongly the fold delays proper time. The rest of this page should be read in that exploratory spirit.

## Executive summary
1. **Toy glue field:** Khantraction models a localized contraction using a quaternion-valued field $q=s+\vec v\cdot\vec\tau$ with norm $|q|^2=s^2+\vec v\cdot\vec v$. The potential $U(|q|)=\tfrac{m_{\text{glue}}^2}{2}|q|^2+\tfrac{\lambda_q}{4}|q|^4$ and couplings $\xi R|q|^2$ and $\lambda|q|^2F^2$ define a nonlinear classical toy model.
2. **Geometric intuition:** The rope-and-knot metaphor motivates two heuristic limits: a looser, null-like regime when the scalar binding weakens, and a tighter, timelike regime when the contraction remains more strongly bound. These may be described informally as photon-like and electron-like branches, but that identification remains speculative.
3. **Preliminary numerics and branch structure:** The early CPU solver produced a regular localized radial profile for one parameter set, but the more important current result is that the full four-component norm-based quaternion model supports a continuous family of regular radial solutions ranging from a scalar-dominated regime to a strongly quaternion-rich regime. This is evidence that the toy equations support a nontrivial branch structure, not yet evidence of a physical particle solution.

## Field-theoretic setup
The toy-model glue Lagrangian is

$
\mathcal L=\sqrt{-g}\left[\tfrac{1}{2}g^{\mu\nu}(\partial_\mu s\partial_\nu s+\partial_\mu\vec v\cdot\partial_\nu\vec v)-U(|q|)+\xi R|q|^2\right]-\sqrt{-g}\left[\tfrac{1}{4}F_{\mu\nu}F^{\mu\nu}+\lambda|q|^2F_{\mu\nu}F^{\mu\nu}\right].
$

Here $q=s+\vec v\cdot\vec\tau$ is a compact way to package one scalar and three vector-like degrees of freedom. At present this should be understood as a useful parametrization for a toy model, not yet as a symmetry-derived microscopic theory.

For static, spherically symmetric reductions we use

$
ds^2=-e^{2\Phi}dt^2+e^{2\Lambda}dr^2+r^2d\Omega^2,
\qquad
 e^{-2\Lambda}=1-2m(r)/r,
$

with $\vec v=v(r)\hat r$. The reduced glue equations become

$
s''+\left(\frac{2}{r}+\Phi'-\Lambda'\right)s'-\frac{dU}{ds}+2\xi R s=0,
\quad
v''+\left(\frac{2}{r}+\Phi'-\Lambda'\right)v'-\frac{dU}{dv}+2\xi R v=0.
$

These equations define the reduced radial system that motivated the earliest numerical experiments. Subsequent work also explored a fuller four-component quaternion version in which the real and imaginary sectors are allowed to vary independently through
\[
q(r)=a(r)+b(r)i+c(r)j+d(r)k.
\]
That fuller model is what revealed the strongest branch-family result discussed below.

## Null-like and timelike regimes
The model suggests two broad heuristic regimes.

- **Null-like regime:** When the scalar binding component becomes small, the contraction may approach a null-like configuration with vanishing internal proper-time scale. This motivates a photon-like interpretation, but only at the level of analogy.
- **Timelike regime:** When the scalar binding remains nonzero, the contraction can remain more tightly localized and more strongly timelike. This motivates an electron-like interpretation, again only heuristically.

At the current stage, the model does **not** yet derive:
- spin-1/2,
- Fermi statistics,
- charge quantization,
- realistic particle masses,
- or Standard-Model gauge structure.

So “photon-like” and “electron-like” should be read as suggestive labels for null-like and timelike sectors of the toy model, not as established identifications.

## Quaternion geometry and fluctuation structure
Appendix A reviews the quaternion exponential

$
e^q=e^a(\cos\theta+\hat v\sin\theta),
$

which separates scalar scale from vector orientation. That decomposition makes quaternions a natural language for discussing localized contractions with both tightness and directional structure.

Khantraction uses this as an interpretive guide: the scalar part sets a binding scale, while the vector part organizes orientation. The linearized fluctuation equations of the radial model,

$
\delta s''+P_s(r)\delta s+Q_s(r)\delta v=0,
\quad
\delta v''+P_v(r)\delta v+Q_v(r)\delta s=0,
$

show a scalar/vector coupling structure that appears analogous to the sensitivity encoded by the quaternion exponential Jacobian. At present this is best described as a **structural analogy**, not a proved equivalence.

Likewise, the fluctuation system has not yet been quantized into a full spectral theory. It currently marks out a future direction rather than a completed result.

## Numerical profile and branch family
![Figure 1: Khantraction glue profile](khantraction_profile.png)

For the original reduced radial toy model, parameter choices such as

$
m_{\text{glue}}=0.1,
\qquad
\lambda_q=0.01,
\qquad
\xi=0.002,
$

with initial data $s(10^{-3})=0.02$ and $v'(10^{-3})=0.001$ produce a regular localized profile reaching $r=20$ without encountering a horizon. At the outer radius,

$
|q|\approx0.0363,
\qquad
m(r)\approx0.178,
\qquad
R\approx-7.6\times10^{-4}.
$

Figure 1 shows one such reduced profile.

The more important current numerical result, however, comes from the **full four-component norm-based quaternion model**. In that fuller model one finds a continuous family of regular radial solutions connecting a real/scalar-dominated regime to a strongly quaternion-rich regime. A convenient branch coordinate is

$
\max_r \frac{\theta(r)}{|a(r)|},
\qquad
\theta(r)=\sqrt{b(r)^2+c(r)^2+d(r)^2}.
$

Along the family this quantity grows smoothly from approximately

$
\max_r \frac{\theta}{|a|}\sim 5\times10^{-5}
$

at the scalar-dominated end to approximately

$
\max_r \frac{\theta}{|a|}\sim 9.1\times10^{1}
$

at the quaternion-rich end, while the branch remains regular over the sampled integration domain. The same family also shows monotone growth in final mass, integrated curvature magnitude, and exponential-quaternion vector content.

This should still be interpreted carefully. The present results do **not** yet establish:
- nonlinear stability,
- uniqueness,
- finite-energy soliton classification,
- realistic particle interpretation,
- or experimental relevance.

What they do show is stronger than a single profile: the current toy model appears to support a genuine regular branch family interpolating between scalar-dominated and quaternion-dominated radial behavior.

## Current status
- **Paper status:** Khantraction has been reframed as a quaternion-valued toy model for localized spacetime contractions rather than a finished particle theory.
- **Strongest numerical result:** The full norm-based quaternion solver reveals a continuous family of regular solutions connecting scalar-dominated and quaternion-rich branches.
- **Solver status:** The project now contains reduced, full-quaternion, and exploratory direction-sensitive / Maurer–Cartan toy solvers. The strongest current branch result comes from the full norm-based quaternion solver rather than from the later transport-based exploratory models.
- **Supporting code:** Flat-space and GPU-oriented variants also exist, though the GPU toolchain still requires environment fixes before those paths are fully usable.

## Limitations
The present Khantraction program remains limited in several important ways:

- no derivation from a compelling microscopic symmetry principle,
- no recovery of known particle properties such as spin/statistics/charge,
- no full perturbative or nonlinear stability analysis,
- no completed fluctuation spectrum or quantization,
- no direct experimental predictions yet.

These limitations are substantial, and they define the current epistemic status of the project.

## Future directions
- characterize the scalar-to-quaternion branch family more sharply,
- strengthen stability analysis along the family,
- compute additional curvature and branch invariants,
- sharpen the quaternion-geometry correspondence,
- and investigate whether more intrinsically quaternionic transport formulations can make quaternion direction—not just quaternion magnitude—dynamically relevant.

In short: Khantraction is currently best viewed as an intriguing geometric toy model with real equations, real code, and a continuous family of regular radial solutions ranging from scalar-dominated to quaternion-rich behavior—not yet as an established theory of particles.