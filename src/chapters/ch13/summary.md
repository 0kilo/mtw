# Chapter 13 Detailed Summary  
## Riemannian Geometry: Metric as Foundation of All

## 1. Chapter purpose and overall arc

Chapter 13 marks a major transition in the book. Earlier chapters developed the geometry of spacetime using **tangent vectors**, **parallel transport**, **covariant differentiation**, **geodesics**, and **curvature**, first in a metric-free setting and then in the geometric reformulation of Newtonian gravity. Chapter 13 now places a **metric** at the foundation of the theory and shows that once a suitable spacetime metric is introduced, much of the preceding geometric structure becomes not merely compatible but **uniquely determined**.

The chapter’s core message is:

- spacetime must be endowed with a **locally Lorentz metric**,
- that metric determines the distinction between timelike, spacelike, and null directions,
- compatibility between the metric and the covariant derivative fixes the **connection coefficients**,
- geodesics can then be characterized not only by the geodesic equation but also as **world lines of extremal proper time**,
- the metric imposes new symmetries on the Riemann tensor and allows construction of derived curvature tensors,
- and metric geometry also provides the natural framework for the **proper reference frame of an accelerated observer**.

So the chapter is doing several things at once:

1. introducing the metric as the fundamental new structure,
2. showing how the metric replaces Newtonian stratification by local Lorentz structure,
3. proving the equivalence of several formulations of free-fall motion,
4. deriving the Levi-Civita connection from the metric,
5. analyzing the extra symmetries and tensors that become available when a metric exists,
6. and showing how a physically meaningful local coordinate system is built around an accelerated observer.

This chapter is explicitly **Track 2**, and it prepares the way for later chapters in which curvature will be computed directly from the metric and tied to Einstein’s field equations.

---

## 2. Section 13.1 — New features imposed on geometry by local validity of special relativity

The chapter begins by arguing that the Newton-Cartan viewpoint of Chapter 12, though successful in geometrizing Newtonian gravity, is still physically inadequate. Newtonian spacetime was stratified by universal time into flat spatial slices, but special relativity teaches that this cannot be the correct local structure of the real world.

### 2.1 Main physical lessons of special relativity

The section highlights several lessons that any acceptable local spacetime geometry must obey:

1. **No Newtonian stratification**: spacetime cannot be sliced into globally meaningful “simultaneous” spatial layers in the Newtonian sense.
2. **Local homogeneity and isotropy**: in any sufficiently small region where tidal curvature effects are negligible, spacetime must look like special relativity.
3. **No experiment can distinguish one local inertial frame from another**.
4. **The speed of light is the same in every local inertial frame**.
5. **There is a coordinate-independent interval between any event and any nearby event**.
6. **Spacetime is locally Lorentzian everywhere**.

These points force the conclusion that the additional mathematical structure needed is a **metric**, specifically a metric with local Lorentz signature.

### 2.2 Why the metric matters

The text emphasizes that once the metric is introduced:

- Newtonian stratification disappears,
- universal time disappears as a built-in structure,
- the Newtonian gravitational potential no longer plays a foundational role,
- but the deeper achievements of earlier chapters survive:
  - the **equivalence principle**,
  - the **geodesic description of free fall**,
  - and **spacetime curvature** as measured by tidal effects.

Thus the metric does not destroy the previous “skyscraper” of vectors, tensors, geodesics, and curvature. It relocates that structure onto a more secure and more physical foundation.

### Main idea of §13.1

The local validity of special relativity forces spacetime geometry to be built on a **locally Lorentz metric**, not on Newtonian stratification. The metric becomes the new foundation, while geodesics and curvature remain central.

---

## 3. Section 13.2 — Metric

This section introduces the metric in three complementary languages and shows how it reshapes tensor algebra.

### 3.1 Metric in three languages

The chapter describes the metric in three ways:

#### A. Elementary-geometry language
A metric is a device that gives the interval between nearby events.

#### B. Coordinate language
It is a set of functions $g_{\mu\nu}(x^\alpha)$ such that the interval between neighboring events is

$ \Delta s^2 = g_{\mu\nu}(x^\alpha)\,\Delta x^\mu \Delta x^\nu. \tag{13.1} $

#### C. Abstract differential-geometric language
It is a bilinear machine $g(\cdot,\cdot)$ that takes two tangent vectors and produces a scalar:

$ g(u,v) = u \cdot v. $

This connects directly to the earlier abstract tensor language.

### 3.2 Metric tensor and “line element”

The chapter explicitly replaces the old scalar notation for the line element by the metric tensor itself:

$ g_{\mu\nu} = g(e_\mu,e_\nu) = e_\mu \cdot e_\nu. \tag{13.2} $

$ ds^2 = g_{\mu\nu}\,dx^\mu dx^\nu \tag{13.3} $

and in tensor notation

$ g \equiv ds^2 = g_{\mu\nu}\,dx^\mu \otimes dx^\nu. \tag{13.4} $

Thus the line element becomes the metric tensor viewed as a bilinear form.

### 3.3 Metric induces a vector–1-form correspondence

With a metric present, every tangent vector $u$ has an associated 1-form $\tilde{u}$ defined by

$ \langle \tilde{u}, v \rangle = g(u,v) \qquad \text{for all } v. \tag{13.5} $

This is the metric-based identification between vectors and covectors. In components this leads to the ordinary lowering of indices:

$ u_\beta = g_{\alpha\beta} u^\alpha, $

and, conversely, raising indices with the inverse metric:

$ u^\alpha = g^{\alpha\beta}u_\beta. $

The inverse metric is defined by

$ g^{\alpha\mu}g_{\mu\beta} = \delta^\alpha{}_\beta. \tag{13.11} $

So $ \|g^{\alpha\beta}\| $ is the matrix inverse of $ \|g_{\alpha\beta}\| $. This makes possible the full familiar machinery of index raising and lowering.

### 3.4 Local Lorentz condition

The section then asks: how does one know a metric is locally Lorentz rather than locally Euclidean?

In four dimensions, one demands that at every event there exists an orthonormal basis with

$ g_{\hat\alpha\hat\beta} = \eta_{\hat\alpha\hat\beta}
= \mathrm{diag}(-1,1,1,1). \tag{13.14} $

Operationally:
- one looks for a timelike vector $u$ with $u\cdot u < 0$,
- then examines the orthogonal directions and requires them to be spacelike.

This local Lorentz condition is the direct mathematical encoding of special relativity inside curved spacetime.

### Main idea of §13.2

A metric is a bilinear tensor that gives spacetime intervals, induces the correspondence between vectors and 1-forms, provides the machinery of raising and lowering indices, and must be **locally Lorentzian** in the real physical world.

---

## 4. Box 13.1 — Metric distilled from distances

This is the chapter’s main conceptual box on what a metric really is.

### Raw distance data

The box imagines describing the geometry of the Earth by listing distances between a huge collection of identifiable points. In principle, one could list all pairwise distances, but this would be an astronomically large amount of data.

### First distillation: nearby distances only

Because distant distances can be recovered by adding short legs of journeys, it is enough to know distances between nearby points.

### Second distillation: local Euclidean coordinates

In a sufficiently small region, geometry is approximately Euclidean, so one can introduce coordinates and express nearby distances via formulas such as

$ (\Delta s)^2 = (\Delta x)^2 + (\Delta y)^2. $

Thus instead of listing all short distances directly, one can encode them through coordinates plus metric relations.

### Third distillation: metric coefficients as functions

On a curved surface or curved manifold, one generalizes this by writing

$ ds^2 = g_{jk}\,dx^j dx^k. $

Now the geometry is stored not by a gigantic table of pairwise distances, but by a comparatively small set of metric coefficients as functions of position.

### Why the box matters

The box makes an important philosophical point: the metric is not an arbitrary invention. It is a **compressed encoding of distance data**. Its meaning lies in the physically measurable distances and intervals that it summarizes.

---

## 5. Figure 13.1 — Distances determine geometry

Figure 13.1 supports Box 13.1 with a vivid geometric picture.

### What the figure shows

The figure presents a deformed Earth-like surface and illustrates how one can reconstruct its geometry from a network of distances:
- a polyhedral approximation built from triangles,
- local triangles whose side lengths determine local Euclidean geometry,
- and “deficit angles” that measure concentrated curvature at vertices.

The figure also illustrates how flat lay-outs of triangles fail to close when curvature is present.

### Why it matters

This figure reinforces the central idea that:
- **distances determine geometry**,
- and curvature can be recognized from how local distance-based constructions fail to fit together in flat space.

---

## 6. Section 13.3 — Concord between geodesics of curved spacetime geometry and straight lines of local Lorentz geometry

This section explains how the metric must be connected to the affine geometry of geodesics and covariant derivatives.

### 6.1 Consistency requirement

There are two ways of describing the world line of a free test particle near an event:

1. In a **local Lorentz frame**, it should look like a straight line, so at the event one has

$ \frac{d^2 x^\alpha}{d\tau^2} = 0. \tag{13.16} $

2. In the general geometric formalism, it must satisfy the geodesic equation

$ \frac{d^2 x^\alpha}{d\tau^2}
+ \Gamma^\alpha{}_{\beta\gamma}
\frac{dx^\beta}{d\tau}
\frac{dx^\gamma}{d\tau}
= 0. \tag{13.17} $

Consistency between these two descriptions demands that in every local Lorentz frame at the chosen event,

$ \Gamma^\alpha{}_{\beta\gamma}(\mathcal{P}_0)=0. \tag{13.18} $

That is exactly the statement that every local Lorentz frame is also a **local inertial frame**.

### 6.2 Metric compatibility

The section then reformulates this coordinate-based condition abstractly as the compatibility condition

$ \nabla g = 0. \tag{13.19} $

In components,

$ g_{\alpha\beta;\gamma}
=
\frac{\partial g_{\alpha\beta}}{\partial x^\gamma}
-
\Gamma^\mu{}_{\alpha\gamma} g_{\mu\beta}
-
\Gamma^\mu{}_{\beta\gamma} g_{\alpha\mu}
= 0. \tag{13.19'} $

This says the covariant derivative preserves the metric. It is the metric version of saying that parallel transport preserves inner products.

### 6.3 Connection coefficients from the metric

From $ \nabla g = 0 $ and the earlier commutator structure, the chapter derives the connection coefficients:

$ \Gamma^\alpha{}_{\beta\gamma} = g^{\alpha\mu}\Gamma_{\mu\beta\gamma}, \tag{13.22} $

with

$ \Gamma_{\mu\beta\gamma}
=
\frac{1}{2}
\left(
g_{\mu\beta,\gamma}
+
g_{\mu\gamma,\beta}
-
g_{\beta\gamma,\mu}
+
c_{\mu\beta\gamma}
+
c_{\mu\gamma\beta}
-
c_{\beta\gamma\mu}
\right), \tag{13.23} $

and in a coordinate basis, where commutators vanish, this reduces to the usual Christoffel-symbol formula.

This is one of the central results of the chapter: **the metric uniquely determines the connection**.

### 6.4 Equivalence of several statements

The chapter summarizes that the following are equivalent in locally Lorentz spacetime geometry:

1. geodesics coincide locally with straight lines in local Lorentz frames,
2. every local Lorentz frame is a local inertial frame,
3. metric compatibility holds: $ \nabla g = 0 $,
4. the covariant derivative obeys the metric chain rule,
5. the connection coefficients are the metric-derived Christoffel symbols.

### Main idea of §13.3

The metric and covariant derivative must be compatible. This requirement forces the connection coefficients to be those uniquely determined by the metric, so that geodesics coincide locally with straight lines in local Lorentz frames.

---

## 7. Section 13.4 — Geodesics as world lines of extremal proper time

This section gives the metric variational characterization of timelike geodesics.

### 7.1 Straight lines maximize proper time in flat spacetime

In a local Lorentz frame, the proper time along a timelike world line is

$ \tau = \int d\tau = \int \bigl(-\eta_{\mu\nu}\,dx^\mu dx^\nu\bigr)^{1/2}. \tag{13.24} $

The section uses simple examples to show that in flat spacetime the straight line between two timelike-separated events gives an extremal, in fact maximal, proper time among nearby curves.

### 7.2 General curved spacetime statement

In curved spacetime, this local argument is extended to the general expression

$ \tau = \int_{\mathcal A}^{\mathcal B} d\tau
= \int_{\mathcal A}^{\mathcal B}
\left(
-g_{\mu\nu}\frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}
\right)^{1/2} d\lambda. \tag{13.27} $

The chapter then varies the curve

$ x^\mu(\lambda) = a^\mu(\lambda) + \delta a^\mu(\lambda) \tag{13.26} $

with endpoints fixed, computes the first variation $ \delta\tau $, and derives Euler-Lagrange conditions for extremality.

### 7.3 Resulting differential equation

The extremality condition leads to

$ g_{\sigma\nu}\frac{d^2 x^\nu}{d\tau^2}
+\frac{1}{2}
\left(
\frac{\partial g_{\sigma\nu}}{\partial x^\mu}
+
\frac{\partial g_{\sigma\mu}}{\partial x^\nu}
-
\frac{\partial g_{\mu\nu}}{\partial x^\sigma}
\right)
\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}
=0, \tag{13.36} $

or, after raising an index,

$ \frac{d^2 x^\beta}{d\tau^2}
+
g^{\beta\sigma}\frac{1}{2}
\left(
\frac{\partial g_{\sigma\nu}}{\partial x^\mu}
+
\frac{\partial g_{\sigma\mu}}{\partial x^\nu}
-
\frac{\partial g_{\mu\nu}}{\partial x^\sigma}
\right)
\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}
=0. \tag{13.38} $

Comparing with the geodesic equation

$ \frac{d^2 x^\beta}{d\lambda^2}
+
\Gamma^\beta{}_{\mu\nu}
\frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}
=0, \tag{13.39} $

one concludes that the world lines extremizing proper time are precisely timelike geodesics, with affine parameter proportional to proper time:

$ \lambda = a\tau + b. $

### 7.4 Important nuance: “maximum” versus “extremum”

The chapter stresses that for widely separated events a timelike geodesic need not give a strict local maximum of proper time; multiple geodesics may exist, and some may correspond to saddle points. So the mathematically correct statement is **extremal proper time**, not always maximum proper time.

### Main idea of §13.4

Timelike geodesics are exactly the world lines that extremize proper time between nearby events. This variational principle is the metric counterpart to the earlier affine-geometric characterization of geodesics.

---

## 8. Figure 13.2 — More than one geodesic and extremal proper time

Figure 13.2 explores the subtlety that more than one geodesic may connect two events.

### What the figure shows

The figure uses the example of a star oscillating through the plane of a galaxy and compares several possible world lines between two events. It shows:
- cases with one excursion and two excursions,
- and a “path space” diagram where different curves correspond to different values of elapsed proper time or the associated action.

### Why it matters

The figure illustrates why the correct variational language is **extremum**, not always maximum. Different geodesics connecting the same events can correspond to maxima, minima, or saddle-type extrema in path space.

---

## 9. Figure 13.3 — Extremizing lapse of proper time in path space

Figure 13.3 continues the same idea in a more abstract way.

### What the figure shows
- On the left: several world lines between two events.
- On the right: a contour plot in a reduced “path space” parametrized by a small number of amplitudes $a_1, a_2$.

Each point in path space represents a candidate world line, and the contours represent equal elapsed proper time.

### Why it matters

The figure gives a geometric visualization of the calculus of variations for geodesics. The true geodesic appears as a critical point in this path space, and the figure highlights the distinction between maxima, minima, and saddle points.

---

## 10. Box 13.2 — “Geodesic” versus “extremal world line”

This box clarifies a possible source of confusion.

### Main point
Once the connection coefficients have been expressed in terms of the metric, it becomes natural to use the word **geodesic** in two closely related senses:

1. a properly parameterized curve satisfying the geodesic equation,
2. a world line that extremizes proper time (or, for spacelike curves, proper distance) between events.

### Source of ambiguity
The first notion presupposes a particular parametrization, while the second concerns only the geometric curve itself, independent of parametrization.

### Resolution
The box resolves the ambiguity by insisting that when “geodesic” refers to a parametrized curve, it means a **properly parameterized geodesic**. With that understood, the two notions coincide.

### Why Box 13.2 matters

It sharpens terminology and prevents confusion between:
- the curve itself,
- and the curve plus its affine/proper parameter.

---

## 11. Box 13.3 — “Dynamic” variational principle for geodesics

This box gives an alternative variational principle.

### Standard geometric principle
The geometric principle extremizes

$ \tau = \int
\left(
-g_{\mu\nu}\frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}
\right)^{1/2} d\lambda. \tag{1} $

This is reparameterization-invariant, but it does not directly determine the preferred affine parameter.

### Dynamic principle
The box proposes instead the “dynamic” action

$ I
=
\frac{1}{2}\int
g_{\mu\nu}
\frac{dx^\mu}{d\lambda}
\frac{dx^\nu}{d\lambda}
\, d\lambda. \tag{2} $

Its Euler-Lagrange equations yield

$ \frac{d^2 x^\alpha}{d\lambda^2}
+
\Gamma^\alpha{}_{\mu\nu}
\frac{dx^\mu}{d\lambda}
\frac{dx^\nu}{d\lambda}
=0. \tag{6} $

### Why this matters
Unlike the square-root proper-time functional, this dynamic action is extremal **only** when the curve is affinely parameterized. So it packages together:
- the correct geodesic curve,
- and the correct affine parameter.

### Why Box 13.3 matters

It provides a mechanical-style Lagrangian principle for geodesics and clarifies the role of affine parametrization.

---

## 12. Section 13.5 — Metric-induced properties of Riemann

This section explains how the presence of a metric enriches the algebraic structure of curvature.

### 12.1 Symmetries already present without metric

Even before a metric is introduced, the Riemann tensor obeys:
- antisymmetry on its last two indices,

$ R^\alpha{}_{\beta\gamma\delta}
=
R^\alpha{}_{\beta[\gamma\delta]}, \tag{13.40} $

- vanishing of the totally antisymmetric part,

$ R^\alpha{}_{[\beta\gamma\delta]} = 0, \tag{13.41} $

- and the differential Bianchi identity,

$ R^\alpha{}_{\beta[\gamma\delta;\epsilon]} = 0. \tag{13.42} $

### 12.2 New symmetries induced by the metric

Once the metric is present, Riemann gains additional symmetries. In fully covariant form:

$ R_{\alpha\beta\gamma\delta} = R_{[\alpha\beta]\gamma\delta}, \tag{13.43} $

$ R_{\alpha\beta\gamma\delta} = R_{\gamma\delta\alpha\beta}, \tag{13.44} $

$ R_{[\alpha\beta\gamma]\delta} = 0, \tag{13.45} $

These reduce the number of independent components dramatically: in four dimensions from 256 naive components down to only 20 independent ones.

### 12.3 New tensors from Riemann

With a metric available, one can define several important curvature tensors:

#### A. Double dual curvature tensor $G$
Defined as the double dual of Riemann. It shares the same basic information but in a different representation.

#### B. Einstein tensor
The chapter defines the Einstein tensor $G_{\alpha\beta}$, symmetric by construction.

#### C. Ricci tensor and scalar curvature
The Ricci tensor and scalar curvature are defined by contraction:

$ R_{\beta\delta} = R^\mu{}_{\beta\mu\delta}, \qquad R = R^\beta{}_\beta. \tag{13.48} $

They relate to the Einstein tensor by

$ R^\beta{}_\delta = G^\beta{}_\delta + \frac{1}{2}R\,\delta^\beta{}_\delta. \tag{13.49} $

#### D. Weyl conformal tensor
The traceless part of curvature is introduced as the Weyl conformal tensor:

$ C^\alpha{}_{\beta\gamma\delta}
=
R^\alpha{}_{\beta\gamma\delta}
-
2\delta^\alpha{}_{[\gamma}R^\beta{}_{\delta]}
+
\frac{1}{3}\delta^\alpha{}_{[\gamma}\delta^\beta{}_{\delta]}R. \tag{13.50} $

The text notes that in manifolds of dimension 1, 2, or 3 the Weyl tensor vanishes identically; only in dimension 4 and above does it carry independent information.

### 12.4 Bianchi identity in dual form

The Bianchi identity becomes especially simple in terms of the double dual curvature tensor, and it implies the contracted Bianchi identity

$ G^\alpha{}_{\beta;\alpha}=0. \tag{13.52} $

This will later become crucial for Einstein’s equations.

### Main idea of §13.5

The metric imposes new symmetries on the Riemann tensor and permits the definition of important derived curvature tensors—Ricci, scalar curvature, Einstein, and Weyl—while also simplifying the Bianchi identities.

---

## 13. Section 13.6 — The proper reference frame of an accelerated observer

The final section constructs the local coordinate system naturally carried by an accelerated, rotating observer.

### 13.1 Physical picture

Imagine a physicist inside an airplane cabin or spacecraft. The most natural coordinates for experiments are those fixed to the apparatus and walls of the cabin, not arbitrary local Lorentz coordinates. Such a frame may be:

- **accelerated** relative to free-fall frames,
- **rotating** relative to local gyroscopes.

The question is how to describe this “proper reference frame” geometrically in curved spacetime.

### 13.2 Six-step construction

The chapter constructs the frame as follows:

1. Let $ \tau $ be proper time along the observer’s world line $ \mathcal{P}_0(\tau) $.
2. Carry an orthonormal tetrad $ \{e_{\hat\alpha}\} $ along the world line, with

$ e_{\hat 0} = u = d\mathcal{P}_0/d\tau, \tag{13.58} $

and orthonormality

$ e_{\hat\alpha}\cdot e_{\hat\beta} = \eta_{\hat\alpha\hat\beta}. \tag{13.59} $

3. The tetrad is transported according to

$ \nabla_u e_{\hat\alpha} = -\Omega \cdot e_{\hat\alpha}, \tag{13.60} $

where

$ \Omega^{\mu\nu}
=
a^\mu u^\nu - u^\mu a^\nu + u_\alpha \omega_\beta \epsilon^{\alpha\beta\mu\nu}. \tag{13.61} $

Here:
- $a = \nabla_u u$ is the observer’s 4-acceleration,
- $\omega$ is the angular velocity of the spatial basis relative to Fermi-Walker transport.

4. From each event on the observer’s world line, send out spatial geodesics orthogonal to $u$, parameterized by proper length $s$.
5. Any nearby event is reached by exactly one such geodesic (locally).
6. Use the coordinates

$ (x^{\hat 0},x^{\hat 1},x^{\hat 2},x^{\hat 3})
=
(\tau, s n^{\hat 1}, s n^{\hat 2}, s n^{\hat 3}), \tag{13.65} $

where $n$ is the unit spatial tangent direction at emission.

### 13.3 Metric and connection along the observer’s world line

Along the observer’s world line:

$ g_{\hat\alpha\hat\beta} = \eta_{\hat\alpha\hat\beta}, \tag{13.67} $

and the connection coefficients are directly determined by the observer’s acceleration and rotation. The resulting metric near the world line is

$ ds^2
=
-(1+2a_j x^{\hat j})\,d{x^{\hat 0}}^2
-
2(\epsilon_{\hat j \hat k \hat l} x^{\hat k}\omega^{\hat l})\,d{x^{\hat 0}}\,dx^{\hat j}
+
\delta_{\hat i \hat j}\,dx^{\hat i}dx^{\hat j}
+
O(|x^{\hat i}|^2)\,dx^{\hat\alpha}dx^{\hat\beta}. \tag{13.71} $

This has clear physical content:
- acceleration appears in the correction to $g_{\hat 0 \hat 0}$,
- rotation appears in the mixed $g_{\hat 0 \hat j}$ terms,
- curvature enters only at second order in spatial distance from the observer’s world line.

### 13.4 Fermi normal coordinates

In the special case of zero acceleration and zero rotation, the frame reduces to a geodesic observer’s frame, and the metric to second order becomes

$ ds^2
=
\left(
-1 - R_{\hat 0 \hat i \hat 0 \hat j} x^{\hat i}x^{\hat j}
\right)d\tau^2
-
\frac{4}{3}R_{\hat 0 \hat j \hat i \hat k}x^{\hat i}x^{\hat k}\,d\tau\,dx^{\hat j}
+
\left(
\delta_{\hat i\hat j}
-
\frac{1}{3}R_{\hat i \hat m \hat j \hat n}x^{\hat m}x^{\hat n}
\right)dx^{\hat i}dx^{\hat j}
+
O(|x|^3). \tag{13.73} $

These are the **Fermi normal coordinates**.

### Main idea of §13.6

An accelerated observer carries a natural proper reference frame built from an orthonormal tetrad and orthogonal spatial geodesics. Near the observer’s world line, the metric shows separately the effects of:
- acceleration,
- rotation,
- and curvature.

---

## 14. Figure 13.4 — Proper reference frame of an accelerated observer

Figure 13.4 is the chapter’s main picture for the final section.

### What the figure shows

Diagram (a) shows the observer’s world line together with an orthonormal tetrad carried along it. Diagram (b) shows the family of spatial geodesics shot out orthogonally from the world line at different proper times. These geodesics furnish the spatial grid of the observer’s proper reference frame.

### Why it matters

The figure turns the six-step abstract construction into a concrete geometric procedure. It also makes clear that the proper reference frame is built locally from:
- the observer’s own proper time,
- a carried tetrad,
- and nearby spatial geodesics.

---

## 15. Key equations and what they mean

### Metric interval
$ \Delta s^2 = g_{\mu\nu}\Delta x^\mu \Delta x^\nu \tag{13.1} $

This is the coordinate expression of the spacetime interval.

### Metric as tensor
$ g = g_{\mu\nu} dx^\mu \otimes dx^\nu \tag{13.4} $

This is the abstract tensor version of the line element.

### Metric-induced covector
$ \langle \tilde{u},v\rangle = g(u,v) \tag{13.5} $

This is the vector–1-form correspondence created by the metric.

### Inverse metric
$ g^{\alpha\mu}g_{\mu\beta}=\delta^\alpha{}_\beta \tag{13.11} $

This underlies raising indices.

### Local Lorentz condition
$ g_{\hat\alpha\hat\beta} = \eta_{\hat\alpha\hat\beta} \tag{13.14} $

This encodes the local special-relativistic structure of spacetime.

### Metric compatibility
$ \nabla g = 0 \tag{13.19} $

This ensures parallel transport preserves inner products.

### Levi-Civita / Christoffel formula
$ \Gamma_{\mu\beta\gamma}
=
\frac{1}{2}
\left(
g_{\mu\beta,\gamma}
+
g_{\mu\gamma,\beta}
-
g_{\beta\gamma,\mu}
+
c_{\mu\beta\gamma}
+
c_{\mu\gamma\beta}
-
c_{\beta\gamma\mu}
\right) \tag{13.23} $

This is the connection fixed uniquely by the metric and torsion-free condition.

### Proper-time extremal
$ \tau = \int
\left(
-g_{\mu\nu}\frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}
\right)^{1/2} d\lambda \tag{13.27} $

This is the variational functional for timelike geodesics.

### Geodesic equation from metric
$ \frac{d^2 x^\beta}{d\tau^2} + \Gamma^\beta{}_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}=0 \tag{13.39} $

This is the metric form of free-fall motion.

### Weyl tensor
$ C^\alpha{}_{\beta\gamma\delta}
=
R^\alpha{}_{\beta\gamma\delta}
-
2\delta^\alpha{}_{[\gamma}R^\beta{}_{\delta]}
+
\frac{1}{3}\delta^\alpha{}_{[\gamma}\delta^\beta{}_{\delta]}R \tag{13.50} $

This is the trace-free part of curvature.

### Proper frame transport law
$ \nabla_u e_{\hat\alpha} = -\Omega\cdot e_{\hat\alpha} \tag{13.60} $

This governs how the accelerated observer carries the tetrad.

### Near-world-line metric of proper reference frame
$ ds^2
=
-(1+2a_j x^{\hat j})\,d{x^{\hat 0}}^2
-
2(\epsilon_{\hat j\hat k\hat l}x^{\hat k}\omega^{\hat l})\,d{x^{\hat 0}}dx^{\hat j}
+
\delta_{\hat i\hat j}\,dx^{\hat i}dx^{\hat j}
+
O(|x|^2) \tag{13.71} $

This shows separately the local contributions of acceleration and rotation.

### Fermi normal metric
$ ds^2
=
\left(
-1 - R_{\hat 0\hat i\hat 0\hat j}x^{\hat i}x^{\hat j}
\right)d\tau^2
-
\frac{4}{3}R_{\hat 0\hat j\hat i\hat k}x^{\hat i}x^{\hat k}d\tau\,dx^{\hat j}
+
\left(
\delta_{\hat i\hat j}
-\frac{1}{3}R_{\hat i\hat m\hat j\hat n}x^{\hat m}x^{\hat n}
\right)dx^{\hat i}dx^{\hat j}
+
O(|x|^3) \tag{13.73} $

This is the curvature-corrected local frame of a freely falling, nonrotating observer.

---

## 16. Conceptual backbone of the chapter

The chapter’s logical flow can be summarized like this:

1. Special relativity demands that spacetime be **locally Lorentzian**.
2. Therefore geometry must be built on a **metric**.
3. The metric determines intervals, orthonormal frames, and the timelike/spacelike/null distinction.
4. The metric also induces the raising/lowering machinery that links vectors and covectors.
5. To make free-fall consistent with local Lorentz straightness, one must impose **metric compatibility**.
6. Metric compatibility uniquely determines the Levi-Civita connection.
7. With that connection, geodesics can be seen either as:
   - solutions of the geodesic equation, or
   - curves of extremal proper time.
8. The metric also imposes extra symmetries on Riemann and permits the construction of Ricci, Einstein, and Weyl curvature tensors.
9. Finally, the metric furnishes the natural proper reference frame of an accelerated observer, in which acceleration, rotation, and curvature each have precise local signatures.

This is why the chapter is called **metric as foundation of all**: once the metric is introduced, the rest of spacetime geometry is organized around it.

---

## 17. Final takeaway

Chapter 13 establishes the metric as the central foundational object of relativistic spacetime geometry.

Its deepest messages are:

- the real physical world requires a **locally Lorentz metric**,
- this metric determines spacetime intervals and the causal character of directions,
- compatibility between the metric and the covariant derivative fixes the **Levi-Civita connection**,
- timelike geodesics are the world lines of **extremal proper time**,
- the metric gives Riemann new symmetries and yields important derived tensors such as **Ricci**, **Einstein**, and **Weyl**,
- and the metric framework naturally describes the local coordinates of an accelerated, rotating observer through proper reference frames and Fermi normal coordinates.

So Chapter 13 is the point where the book’s earlier geometric constructions become fully rooted in the metric structure demanded by special relativity.
