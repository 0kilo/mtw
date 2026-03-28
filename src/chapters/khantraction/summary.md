# Khantraction Research Note: A Quaternion-Valued Toy Model with a Scalar-to-Quaternion Branch Family

## Source and scope
This summary distills the current Khantraction work—physics notes, derivations, numerical experiments, and the revised paper draft—into a site-facing overview. The goal is to present the actual strongest result of the project clearly and honestly.

## What Khantraction currently is
Khantraction is an **exploratory research program**, not a validated physical theory. In its current form, it studies whether a quaternion-valued toy field model can support localized spacetime contractions with nontrivial branch structure.

The rope-and-knot picture remains heuristic: a localized fold persists while spacetime threads through it, and the knot’s tightness influences how strongly the fold delays proper time. The current work should therefore be read as a toy-model investigation with real equations, real code, and real numerical branch structure—but not as a finished particle theory.

## Executive summary
1. **Quaternion-valued toy model:** Khantraction models a localized contraction using a quaternion-valued field $q=s+\vec v\cdot\vec\tau$ with norm $|q|^2=s^2+\vec v\cdot\vec v$, together with a quartic self-interaction and curvature coupling.
2. **Reduced radial model:** Early numerical work on a reduced static radial system showed that the toy equations can support regular localized-looking profiles over the integration domain.
3. **Strongest current branch result:** The fuller four-component norm-based quaternion model supports a **continuous family of regular radial solutions** connecting a scalar-dominated regime to a strongly quaternion-rich regime.
4. **New structural result:** These branches are also accurately described by an **ordered quaternionic state map** whose quaternion-rich regime occupies a dominant locked internal-angle sector.
5. **Why that matters:** This locked sector is now the best current candidate for a branch-specific proto-excitation structure in the model.
6. **What is still missing:** The model remains a toy theory; it does not yet derive real particle properties, full stability, or experimentally relevant predictions.

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

## Ordered quaternionic state map
A major new structural result is that one can move beyond raw quaternion components and instead parameterize the internal state by an ordered quaternionic map

$
Q(\omega,\theta,\phi,\rho)=e^{\omega}e^{\theta i}e^{\phi j}e^{\rho k}.
$

This should **not** be read as the naive commuting identity

$
e^{\omega+\theta i+\phi j+\rho k}=e^{\omega}e^{\theta i}e^{\phi j}e^{\rho k},
$

since quaternion units do not commute. It is better interpreted as an **ordered factorized quaternionic state construction**.

Using

$
e^{\theta i}=\cos\theta+i\sin\theta,
\qquad
e^{\phi j}=\cos\phi+j\sin\phi,
\qquad
e^{\rho k}=\cos\rho+k\sin\rho,
$

and the quaternion multiplication rules

$
ij=k,
\qquad
jk=i,
\qquad
ki=j,
$

one obtains the explicit component form

$
Q=e^{\omega}(a+bi+cj+dk),
$

with

$
a=\cos\theta\cos\phi\cos\rho-\sin\theta\sin\phi\sin\rho,
$

$
b=\sin\theta\cos\phi\cos\rho+\cos\theta\sin\phi\sin\rho,
$

$
c=\cos\theta\sin\phi\cos\rho-\sin\theta\cos\phi\sin\rho,
$

$
d=\cos\theta\cos\phi\sin\rho+\sin\theta\sin\phi\cos\rho.
$

This makes the ordered state map an explicit nonlinear coordinate map from

$
(\omega,\theta,\phi,\rho)
$

to the quaternion components

$
(x_0,x_1,x_2,x_3)=(e^{\omega}a,e^{\omega}b,e^{\omega}c,e^{\omega}d).
$

Direct numerical fits now show that this ordered state map describes both scalar and quaternion-rich branch data accurately. More importantly, branchwise tracking and neighborhood fits indicate that the quaternion-rich regime settles into a dominant locked ordered-angle sector approximately equivalent to

$
\theta\approx \pi,
\qquad
\phi\approx -\frac{\pi}{2},
\qquad
\rho\approx +\frac{\pi}{2},
$

up to periodic branch ambiguities. Locked-sector scans find one dominant best-fit sector together with weaker alternate sectors that are currently better interpreted as residual parameterization degeneracies than as true species-like branches.

When this ordered-state result is combined with the pre-existing radial-mode proxy analysis, the strongest current interpretation is that the locked sector is the internal-state location of the model's most distinctive fluctuation anisotropy. That does not yet yield a true particle spectrum, but it does make the ordered state map more than just a convenient change of variables.

The newest soft-mode results sharpen the picture further: the dominant soft fluctuation of the quaternion-rich locked sector is overwhelmingly a $\theta$-type internal angular mode rather than a breathing-like scale mode, and a first radial $\theta$-channel proxy suggests a small stiff core together with a broadly soft internal region across most of the object.

The spin-like story has also become stronger. The rich family now appears to occupy a single chirality class in ordered-state space, mirrored-sector tests have not produced a competitive opposite-handed partner family, and opposite angular deviations around the locked sector produce asymmetric responses, especially in the dominant $\theta$-channel. A radial chiral-response map suggests that this chirality is globally present but most strongly anchored in the inner core.

Charge is better interpreted more modestly: not as something the folded geometry intrinsically creates from nothing, but as content that may be **externally induced** and then hosted or stabilized by the structured object. In that framing, the current model already shows a first weak but systematic sign-sensitive hosting asymmetry, again strongest near the core and weaker through the bulk.

The newest quantum-facing result is a first refined proto-spectrum in the dominant soft $\theta$-channel. A denser radial shooting scan reveals multiple resonance-like candidate minima, and the leading candidates shift under both opposite chiral perturbation directions and opposite signed induced loading directions. So while Khantraction does not yet have a true quantum spectrum, its richest structured object now appears to possess a chirality-sensitive and loading-sensitive proto-spectrum.

This makes the richest branches look less like literal point-particle candidates and more like **compact structured spacetime-fold objects** with particle-like external behavior, nontrivial internal geometry, emerging spin-like chirality, early charge-hosting behavior under external induction, and the first hints of a property-sensitive internal excitation landscape.

## Future directions
- characterize the scalar-to-quaternion branch family more sharply,
- strengthen stability analysis along the family,
- compute additional curvature and branch invariants,
- derive sharper fluctuation equations directly in ordered-state variables,
- determine whether the current proto-spectrum survives improved operators and boundary conditions,
- test whether chirality- and loading-sensitive spectral shifts remain under stronger formulations,
- resolve the weaker alternate sectors more rigorously,
- and investigate whether more intrinsically quaternionic transport formulations can make quaternion direction—not just quaternion magnitude—dynamically relevant.

In short: Khantraction is currently best viewed as an intriguing quaternion-valued toy model with real equations, real code, a continuous family of regular radial solutions ranging from scalar-dominated to quaternion-rich behavior, and now a fitted ordered-state description in which the quaternion-rich regime occupies a dominant locked internal sector with the first hints of a chirality-sensitive and loading-sensitive proto-spectrum—not yet as an established theory of particles.
