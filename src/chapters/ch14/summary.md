# Chapter 14 Detailed Summary  
## Calculation of Curvature

## 1. Chapter purpose and overall arc

Chapter 14 is a **methods chapter**. The previous chapters developed the geometric meaning of curvature: geodesic deviation, parallel transport around loops, Riemann curvature, Ricci curvature, Einstein curvature, and the metric as the foundation of relativistic geometry. Chapter 14 now asks a practical question:

**Once a metric is given, or once a geometrical situation is specified, how does one actually compute the curvature efficiently?**

The chapter is explicitly **Track 2**, and it serves as technical preparation for later chapters, especially Chapter 15 on Bianchi identities and many later applications of gravitation theory. Its aim is not to introduce new physical principles as much as to teach the reader **how to turn geometry into explicit formulas**.

The chapter develops three major computational viewpoints:

1. the **standard direct method**, starting from the metric $g_{\mu\nu}$, then computing connection coefficients $\Gamma^\mu{}_{\alpha\beta}$, then the Riemann tensor $R^\mu{}_{\nu\alpha\beta}$,
2. the **geodesic Lagrangian method**, which extracts the connection coefficients directly from the geodesic equations instead of computing them from Christoffel formulas first,
3. the **curvature 2-form method**, Cartan’s differential-form approach, which packages the connection and curvature into 1-forms and 2-forms and often eliminates enormous amounts of algebraic waste.

The chapter also shows how to:
- pass from the Riemann tensor to the Ricci tensor, scalar curvature, and Einstein tensor,
- display curvature compactly in orthonormal frames,
- and compute curvature for important examples such as:
  - the 2-sphere,
  - a plane gravitational wave,
  - Friedmann cosmology,
  - Schwarzschild geometry,
  - and dynamic spherically symmetric spacetimes.

So Chapter 14 is where curvature becomes a **working computational tool** rather than only a conceptual structure.

---

## 2. Section 14.1 — Curvature as a tool for understanding physics

The chapter opens by observing that in some simple physical situations one can infer curvature indirectly from physics, without carrying out a full tensor computation. Examples include:
- frequency of oscillation of a test particle,
- tidal accelerations near a center of attraction,
- curvature of a closed 3-sphere model universe,
- or vector/gyroscope rotation under parallel transport.

But in many other cases the quickest route to understanding a spacetime is simply to **compute its curvature first**.

This is especially true when:
- one has a complicated metric expression that solves Einstein’s equations,
- one suspects a metric has hidden geometric simplicity,
- or one is trying to construct a metric from symmetry assumptions and wants curvature conditions as guidance.

The section emphasizes that curvature is the **simplest local measure of geometry**, so it is often the right first diagnostic tool.

### 2.1 The standard procedure

The chapter describes a standard three-step procedure:

1. start with the metric components $g_{\mu\nu}$,
2. compute the connection coefficients $\Gamma^\mu{}_{\alpha\beta}$ from derivatives of the metric,
3. compute the curvature components $R^\mu{}_{\nu\alpha\beta}$ from derivatives and quadratic products of the connection.

After that, the results can be displayed in several useful ways:
- Ricci tensor $R_{\mu\nu}$,
- scalar curvature $R$,
- invariants like $R^{\mu\nu\alpha\beta}R_{\mu\nu\alpha\beta}$,
- orthonormal-frame components,
- matrix displays of Riemann,
- and, most importantly for general relativity, the Einstein tensor $G^\mu{}_\nu$.

The section also notes that the standard method is reliable but often **dull and wasteful**, especially when many intermediate terms vanish.

### Main idea of §14.1

Curvature is often the quickest route to the physics of a spacetime. The standard computation method is universally applicable, but it can be algebraically inefficient, which motivates the more refined methods later in the chapter.

---

## 3. Box 14.1 — Perspectives on curvature

This is one of the most conceptually rich boxes in the chapter. It gives a historical and geometric meditation on what curvature means.

### 3.1 Curvature of a plane curve

The starting point is a curve in a plane. One defines its curvature by how its tangent direction changes with arc length:

$ \kappa(s) = \frac{d\theta}{ds} = \frac{1}{\rho(s)} $

where:
- $\theta$ is the azimuthal angle of the tangent,
- $s$ is proper distance along the curve,
- $\rho$ is the radius of curvature.

An equivalent viewpoint is to describe how the curve departs from its tangent line locally, with curvature determined by the second derivative of the departure from the tangent.

### 3.2 Curvature of a surface embedded in Euclidean 3-space

The box then moves to a smooth surface embedded in Euclidean 3-space. Near a chosen point, the departure of the surface from its tangent plane can be written quadratically as

$ z = \frac{1}{2}ax^2 + bxy + \frac{1}{2}cy^2. $

After rotating the axes, this becomes

$ z = \frac{1}{2}\kappa_1 \xi^2 + \frac{1}{2}\kappa_2 \eta^2, $

where $\kappa_1$ and $\kappa_2$ are the **principal curvatures**.

This leads to two distinct notions:
- **extrinsic curvature**, involving the sum $\kappa_1 + \kappa_2$,
- **intrinsic curvature**, involving the product $\kappa_1\kappa_2$.

### 3.3 Gauss’s intrinsic viewpoint

Gauss’s great insight was that one can define curvature by measurements **entirely within the surface**, without reference to an embedding in 3-space.

The box describes the “society of ants” viewpoint:
- start at a point on the surface,
- move out along geodesics of equal proper length $\epsilon$,
- these endpoints form a small intrinsic “circle,”
- compare its proper circumference with the Euclidean value $2\pi\epsilon$.

The deviation is governed by the Gaussian curvature:

$ \lim_{\epsilon \to 0} \frac{6}{\epsilon^2}\left(1-\frac{\text{circumference}}{2\pi\epsilon}\right)
= \kappa_1\kappa_2. $

This is one of the deepest themes in geometry: intrinsic curvature can be read off from internal measurements alone.

### 3.4 Intrinsic versus extrinsic curvature

The box emphasizes the difference by using the example of a flat sheet of paper rolled into a cylinder:
- the **extrinsic** curvature changes,
- but the **intrinsic/Gaussian** curvature remains zero.

So the curvature used in general relativity is intrinsic curvature of spacetime, not embedding curvature in some higher-dimensional space.

### 3.5 Curvature from parallel transport around a loop

The box next explains curvature through vector rotation under parallel transport around a closed loop. On a sphere, transporting a vector around a spherical triangle causes it to rotate by an angle proportional to the enclosed area. In two dimensions, this gives a direct definition of Gaussian curvature:

$ \text{Gaussian curvature}
=
\frac{\text{angle turned}}{\text{area circumnavigated}}. $

### 3.6 Curvature as a 2-form

The box then introduces the idea of representing curvature by a **2-form**, especially natural in two dimensions. The rotation accumulated around a small loop is represented as the integral of a curvature 2-form over the enclosed area.

For a rotationally symmetric surface with metric

$ ds^2 = d\sigma^2 + r^2(\sigma)d\phi^2, $

the curvature 2-form is

$ \text{curvature}
=
-\frac{1}{r}\frac{d^2r}{d\sigma^2} \, d\sigma \wedge r\,d\phi. $

This prepares the reader for Cartan’s curvature 2-form method later in the chapter.

### 3.7 Connection to Riemann curvature components

The box concludes by showing how one reads ordinary Riemann-tensor components out of these curvature 2-forms. In two dimensions this is easy because there is only one independent plane, but the same logic generalizes to higher-dimensional spacetime.

### Why Box 14.1 matters

This box is not just background. It teaches the reader the **meaning** of curvature from multiple angles:
- turning of tangent directions,
- departure from tangent planes,
- circumference deficits,
- intrinsic versus extrinsic geometry,
- vector rotation under parallel transport,
- and finally curvature represented as a 2-form.

It is the chapter’s conceptual anchor.

---

## 4. Box 14.2 — Straightforward curvature computation

This box gives the chapter’s standard algorithm in compact form.

Starting from the metric components $g_{\mu\nu}$ in a coordinate basis, one computes:

### Step 1: Lowered-index connection coefficients

$ \Gamma_{\mu\alpha\beta}
=
\frac{1}{2}
\left(
\frac{\partial g_{\mu\alpha}}{\partial x^\beta}
+
\frac{\partial g_{\mu\beta}}{\partial x^\alpha}
-
\frac{\partial g_{\alpha\beta}}{\partial x^\mu}
\right). \tag{14.2.1} $

### Step 2: Raise the first index

$ \Gamma^\mu{}_{\alpha\beta} = g^{\mu\nu}\Gamma_{\nu\alpha\beta}. \tag{14.2.2} $

### Step 3: Compute curvature

$ R^\mu{}_{\nu\alpha\beta}
=
\frac{\partial \Gamma^\mu{}_{\nu\beta}}{\partial x^\alpha}
-
\frac{\partial \Gamma^\mu{}_{\nu\alpha}}{\partial x^\beta}
+
\Gamma^\mu{}_{\rho\alpha}\Gamma^\rho{}_{\nu\beta}
-
\Gamma^\mu{}_{\rho\beta}\Gamma^\rho{}_{\nu\alpha}. \tag{14.2.3} $

The box illustrates the procedure on the 2-sphere with metric

$ ds^2 = a^2(d\theta^2 + \sin^2\theta\, d\phi^2). \tag{14.2.4} $

From this one obtains:
- the nonzero Christoffel symbols,
- the unique independent Riemann component,
- the Ricci tensor,
- the scalar curvature

$ R = \frac{2}{a^2}, \tag{14.2.10} $

and the orthonormal-frame curvature component

$ R^{\hat\theta}{}_{\hat\phi\hat\theta\hat\phi} = \frac{1}{a^2}. \tag{14.2.12} $

### Why Box 14.2 matters

This is the chapter’s **baseline computational recipe**. Every other method in the chapter is judged relative to it.

---

## 5. Box 14.3 — Analytical calculations on a computer

This box is historically interesting. It discusses symbolic computer algebra for curvature calculations.

The box explains that long analytic computations in general relativity, especially curvature and Einstein-tensor calculations, are well suited to computers because they are mostly:
- algebraic,
- repetitive,
- and logically straightforward.

It surveys several computer algebra systems and focuses especially on **FORMAC**, along with related symbolic-processing tools.

### Main lesson of the box
- Computers are excellent for tensor algebra and symbolic differentiation.
- They are less suited to creative insight or analytical integration.
- Curvature computation often benefits from symbolic automation because the direct method contains so much repetitive algebra.

### Why Box 14.3 matters

It reinforces the chapter’s theme that standard curvature computations are often **mechanical**. The box also shows how early general-relativity researchers were already thinking algorithmically about tensor algebra.

---

## 6. Section 14.2 — Forming the Einstein tensor

This section explains how to extract the Einstein tensor from curvature.

The chapter reminds the reader that the local distribution of matter does **not** determine all components of the Riemann tensor directly. Instead, Einstein’s equations involve only a particular contraction: the **Einstein tensor**.

### 6.1 Standard contraction route

One can compute the Einstein tensor by successive contractions:

$ R_{\mu\nu} = R^\alpha{}_{\mu\alpha\nu}, \qquad
R = g^{\mu\nu}R_{\mu\nu}, \qquad
G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R. \tag{14.4} $

### 6.2 Dual-tensor route

The section recalls the equivalent construction using the dual of the Riemann tensor and then contracting.

### 6.3 Best compact route

By combining the previous approaches, the chapter arrives at a particularly economical way to compute the Einstein tensor in orthonormal frames:

$ G^\delta{}_\beta
=
-\delta^{\delta\rho\sigma}_{\beta\mu\nu}
R^{\mu\nu}{}_{|\rho\sigma|}. \tag{14.6} $

It then writes out representative explicit component formulas, such as:

$ G^0{}_0 = -(R^{12}{}_{12} + R^{23}{}_{23} + R^{31}{}_{31}), \tag{14.7} $

and analogous formulas for other components.

### Main idea of §14.2

The Einstein tensor is a particular contraction of curvature, and the section shows several equivalent ways of obtaining it from the Riemann tensor, especially useful in orthonormal frames.

---

## 7. Section 14.3 — More efficient computation

This section motivates the need for alternatives to the standard method.

The problem is simple:
- many physically important metrics have many zero metric components,
- many Christoffel symbols vanish,
- many Riemann terms cancel,
- but the standard method still forces one to compute and inspect a huge number of quantities that end up contributing nothing.

The chapter therefore introduces two more efficient alternatives:

1. the **geodesic Lagrangian method**,
2. the **curvature 2-form method**.

The section makes a balanced judgment:
- the geodesic Lagrangian method is a moderate improvement that requires only calculus of variations,
- the curvature 2-form method is much more efficient, but requires more mathematical investment in forms and exterior derivatives.

### Main idea of §14.3

The standard method is universal but wasteful. Better methods exist when a metric has structure or symmetry.

---

## 8. Section 14.4 — The geodesic Lagrangian method

This section explains how to compute connection coefficients without first computing Christoffel symbols directly.

### 8.1 Key principle

Ordinarily, one thinks that the geodesic equation

$ \ddot{x}^\mu + \Gamma^\mu{}_{\alpha\beta}\dot{x}^\alpha \dot{x}^\beta = 0 \tag{14.8} $

requires the Christoffel symbols first. But the chapter reverses the logic:

- derive the geodesic equations directly from the geodesic variational principle,
- then **read off** the Christoffel symbols from those equations.

For the 2-sphere, for example, the geodesic equations are

$ \ddot{\theta} - \sin\theta\cos\theta\,\dot{\phi}^2 = 0, \tag{14.9\theta} $

$ \ddot{\phi} + 2\cot\theta\,\dot{\theta}\dot{\phi} = 0, \tag{14.9\phi} $

and from these one immediately identifies the corresponding connection coefficients.

### 8.2 Variational starting point

The geodesic equations come from extremizing

$ I = \frac{1}{2}\int g_{\mu\nu}\dot{x}^\mu \dot{x}^\nu \, d\lambda, \tag{14.10} $

with

$ \delta I = 0. $

This is the same “dynamic” variational principle for geodesics discussed earlier, now turned into a computational tool.

### 8.3 Practical four-step algorithm

The chapter’s sidebar summarizes the geodesic Lagrangian method in four steps:

1. write $I$ in the simplest possible form,
2. vary it to obtain the geodesic equations,
3. read off the $\Gamma^\mu{}_{\alpha\beta}$ from those equations,
4. compute $R^\mu{}_{\nu\alpha\beta}$ by the standard formula using those $\Gamma$’s.

### Main idea of §14.4

The geodesic equations themselves are an efficient table of the connection coefficients. This avoids a full Christoffel computation when the variational principle yields simple equations quickly.

---

## 9. Box 14.4 — Geodesic Lagrangian method shortens some curvature computations

This box works through a concrete example: a plane gravitational-wave metric

$ ds^2 = L^2(e^{2\beta}dx^2 + e^{-2\beta}dy^2) - 2\,du\,dv, \tag{14.4.1} $

where $L$ and $\beta$ are functions of $u$ only.

### 9.1 Step 1: Write the variational integral

The geodesic action becomes

$ I = \int \left[\frac{1}{2}L^2(e^{2\beta}\dot{x}^2 + e^{-2\beta}\dot{y}^2) - \dot{u}\dot{v}\right] d\lambda. \tag{14.4.2} $

### 9.2 Step 2: Vary the coordinates

Varying $x$, $y$, $u$, and $v$ gives four differential equations.

### 9.3 Step 3: Rearrange into geodesic form

After rearrangement, the equations are interpreted as a table of Christoffel symbols.

The box notes that, in this example, only a few Christoffel symbols are nonzero, which is exactly why the method saves effort.

### 9.4 Step 4: Compute curvature

Using the resulting $\Gamma$’s, the box computes the Riemann tensor and then the Ricci tensor.

The main result is that only one Ricci component is nonzero:

$ R_{uu} = -2\left(\frac{L''}{L} + \beta'^2\right), \tag{14.4.5} $

with all others zero, and

$ R = 0. \tag{14.4.6} $

Therefore the Einstein tensor equals the Ricci tensor in this case.

### Why Box 14.4 matters

It demonstrates exactly when the geodesic Lagrangian method is useful:
- when the geodesic equations are easy to derive,
- and when the metric has enough structure that most connection coefficients vanish or are easy to spot.

---

## 10. Section 14.5 — Curvature 2-forms

This is the most mathematically sophisticated part of the chapter.

The section takes ideas familiar from electrodynamics—especially differential forms and exterior derivatives—and extends them to geometry. The motivation is compactness and efficiency:
- in electrodynamics one writes $F=dA$ instead of six separate component equations,
- so in geometry one can similarly package the 21 independent Riemann components in four dimensions into six **curvature 2-forms**.

### 10.1 Extended exterior derivative

The chapter first defines the extended exterior derivative on:
- scalar functions,
- vector fields,
- tensor-valued forms.

For a scalar function $f$:

$ \langle df, u \rangle = \partial_u f. \tag{14.11} $

For a vector field $v$:

$ \langle dv, u \rangle = \nabla_u v, \tag{14.12a} $

so that, abstractly,

$ dv = \nabla v. \tag{14.12b} $

The product rule for forms is generalized to tensor-valued forms:

$ d(\alpha \wedge \beta)
=
(d\alpha)\wedge \beta + (-1)^p \alpha \wedge d\beta, \tag{14.13a} $

and similarly for tensor-valued forms.

### 10.2 Connection 1-forms

Expand a vector field in a basis:

$ v = e_\mu v^\mu. $

Then

$ de_\mu = e_\nu \,\omega^\nu{}_\mu, \tag{14.14} $

where the $\omega^\nu{}_\mu$ are the **connection 1-forms**.

These are related to the ordinary Christoffel symbols by

$ \omega^\nu{}_\mu = \Gamma^\nu{}_{\mu\alpha}\,\omega^\alpha. \tag{14.15} $

Thus the connection 1-forms package the connection coefficients into basis-independent differential forms.

### 10.3 Curvature 2-forms

Differentiating again and simplifying leads to the fundamental definition of the curvature 2-forms:

$ \mathcal{R}^\mu{}_\nu
=
d\omega^\mu{}_\nu
+
\omega^\mu{}_\alpha \wedge \omega^\alpha{}_\nu. \tag{14.18} $

This is Cartan’s structural curvature equation.

The section emphasizes how remarkable this is:
- on the left appears a second derivative,
- but on the right the result is purely algebraic in the vector field being acted upon.
This shows curvature emerging as an intrinsic property of geometry itself, independent of the detailed variation of any chosen test vector field.

### 10.4 Curvature 2-form as curvature operator

The section relates the curvature 2-form to the curvature operator from Chapter 11:

$ \langle \mathcal{R}, u\wedge v \rangle = \mathcal{R}(u,v). \tag{14.24} $

This proves that Cartan’s curvature 2-form formalism is not a new geometric object; it is the same Riemann curvature already introduced abstractly, simply repackaged.

### 10.5 Reading off Riemann components

Finally, the individual curvature 2-forms are related to Riemann components by

$ \mathcal{R}^\mu{}_\nu = R^\mu{}_{\nu\alpha\beta}\,\omega^\alpha \wedge \omega^\beta, \qquad (\alpha<\beta). \tag{14.25} $

So the six curvature 2-forms in four dimensions package the 21 independent Riemann components.

### Main idea of §14.5

The curvature 2-form method compresses the geometry into Cartan’s structural equations. It is both conceptually illuminating and computationally efficient.

---

## 11. Section 14.6 — Computation of curvature using exterior differential forms

This section turns the formalism of §14.5 into a practical algorithm.

### 11.1 First choose a metric and frame

Write the metric as

$ ds^2 = g_{\mu\nu}\,\omega^\mu \otimes \omega^\nu, $

where the $\omega^\mu$ are chosen basis 1-forms. Usually one chooses an **orthonormal frame**, so that $g_{\mu\nu}=\eta_{\mu\nu}$ or another constant matrix.

### 11.2 Solve for the connection 1-forms

The connection 1-forms are determined uniquely by two Cartan structure equations:

#### Symmetry / torsion-free equation

$ 0 = d\omega^\mu + \omega^\mu{}_\nu \wedge \omega^\nu. \tag{14.31a} $

#### Metric compatibility equation

$ dg_{\mu\nu} = \omega_{\mu\nu} + \omega_{\nu\mu}. \tag{14.31b} $

When the frame is orthonormal, $dg_{\mu\nu}=0$, so

$ \omega_{\mu\nu} = -\omega_{\nu\mu}. $

This immediately cuts the number of unknown connection 1-forms to six in four dimensions.

The chapter also gives a systematic alternative, using commutation coefficients from

$ d\omega^\mu = -c^\mu{}_{\alpha\beta}\,\omega^\alpha \wedge \omega^\beta, \tag{14.32} $

and then

$ \omega_{\mu\nu}
=
\frac{1}{2}
(c_{\mu\nu\alpha}+c_{\mu\alpha\nu}-c_{\nu\alpha\mu})\,\omega^\alpha. \tag{14.33} $

### 11.3 Compute the curvature 2-forms

Once the connection 1-forms are known, compute

$ \mathcal{R}^\mu{}_\nu = d\omega^\mu{}_\nu + \omega^\mu{}_\alpha \wedge \omega^\alpha{}_\nu. \tag{14.34} $

Then read off the Riemann components through

$ \mathcal{R}^\mu{}_\nu = R^\mu{}_{\nu\alpha\beta}\,\omega^\alpha \wedge \omega^\beta. \tag{14.35} $

### 11.4 Compute the Einstein tensor

Finally, use the orthonormal-frame formulas of §14.2 to compute $G^\mu{}_\nu$ from the curvature components.

### Main idea of §14.6

The full curvature 2-form algorithm is:
1. choose a frame,
2. solve for the connection 1-forms,
3. compute the curvature 2-forms,
4. read off Riemann, Ricci, scalar, and Einstein curvature.

---

## 12. Box 14.5 — Curvature computed using exterior differential forms (metric for Friedmann cosmology)

This is the chapter’s major worked example of the curvature 2-form method.

The metric is the Friedmann cosmology metric:

$ ds^2 = -dt^2 + a^2(t)\,[d\chi^2 + \sin^2\chi(d\theta^2 + \sin^2\theta\,d\phi^2)]. $

The box chooses an orthonormal basis:

$ \omega^{\hat t} = dt, $

$ \omega^{\hat \chi} = a\,d\chi, $

$ \omega^{\hat \theta} = a\sin\chi\, d\theta, $

$ \omega^{\hat \phi} = a\sin\chi\sin\theta\, d\phi. \tag{14.5.1} $

### 12.1 Connection computation

Since the frame is orthonormal, the connection 1-forms satisfy

$ \omega_{\mu\nu} = -\omega_{\nu\mu}. \tag{14.5.2} $

Using the structural equations, the box finds the nonzero connection 1-forms, including terms such as

$ \omega^{\hat \chi}{}_{\hat t} = (\dot a/a)\,\omega^{\hat \chi}, $

and the expected spherical-coordinate angular pieces, such as

$ \omega^{\hat \theta}{}_{\hat \chi} = a^{-1}\cot\chi\,\omega^{\hat \theta}, $

$ \omega^{\hat \phi}{}_{\hat \theta} = (a\sin\chi)^{-1}\cot\theta\,\omega^{\hat \phi}. \tag{14.5.3} $

### 12.2 Curvature computation

Substituting these into the curvature 2-form equation yields the curvature 2-forms. The box shows that the isotropy of the model universe means many components are equivalent by symmetry.

The results include curvature 2-forms of the form

$ \mathcal{R}^{\hat k}{}_{\hat t} = (\ddot a/a)\,\omega^{\hat t}\wedge \omega^{\hat k}, \tag{14.5.6} $

and

$ \mathcal{R}^{\hat i}{}_{\hat j}
=
a^{-2}(1+\dot a^2)\,\omega^{\hat i}\wedge \omega^{\hat j}. \tag{14.5.7} $

### 12.3 Einstein tensor

From these, the box computes the Einstein tensor components:

$ G^{\hat 0}{}_{\hat 0} = -3a^{-2}(1+\dot a^2), \tag{14.5.8a} $

$ G^{\hat i}{}_{\hat i} = -[2a^{-1}\ddot a + a^{-2}(1+\dot a^2)], \qquad \text{no sum on } i, \tag{14.5.8c} $

with off-diagonal components vanishing.

The scalar curvature is

$ R = 6[a^{-1}\ddot a + a^{-2}(1+\dot a^2)]. \tag{14.5.9} $

### Why Box 14.5 matters

This box shows the full power of Cartan’s method:
- pick an orthonormal frame,
- solve for the connection 1-forms,
- compute the curvature 2-forms,
- read off Einstein curvature directly.

It is the chapter’s strongest case for why the differential-form method is superior in highly symmetric spacetimes.

---

## 13. Key equations and what they mean

### Standard Christoffel formula
$ \Gamma_{\mu\alpha\beta}
=
\frac{1}{2}
\left(
\partial_\beta g_{\mu\alpha}
+
\partial_\alpha g_{\mu\beta}
-
\partial_\mu g_{\alpha\beta}
\right) $

This is the usual first step in direct curvature computation.

### Standard Riemann formula
$ R^\mu{}_{\nu\alpha\beta}
=
\partial_\alpha \Gamma^\mu{}_{\nu\beta}
-
\partial_\beta \Gamma^\mu{}_{\nu\alpha}
+
\Gamma^\mu{}_{\rho\alpha}\Gamma^\rho{}_{\nu\beta}
-
\Gamma^\mu{}_{\rho\beta}\Gamma^\rho{}_{\nu\alpha} $

This is the baseline coordinate formula for curvature.

### Einstein tensor from Ricci contraction
$ G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R $

This gives the curvature combination used in Einstein’s equations.

### Geodesic variational action
$ I = \frac{1}{2}\int g_{\mu\nu}\dot{x}^\mu \dot{x}^\nu\, d\lambda $

This is the starting point for the geodesic Lagrangian method.

### Curvature 2-form
$ \mathcal{R}^\mu{}_\nu
=
d\omega^\mu{}_\nu
+
\omega^\mu{}_\alpha \wedge \omega^\alpha{}_\nu $

This is Cartan’s second structural equation and the chapter’s most important compact formula.

### Curvature 2-form to Riemann components
$ \mathcal{R}^\mu{}_\nu = R^\mu{}_{\nu\alpha\beta}\,\omega^\alpha\wedge\omega^\beta $

This identifies the curvature 2-forms with the usual curvature tensor.

### Symmetry / torsion-free structural equation
$ 0 = d\omega^\mu + \omega^\mu{}_\nu \wedge \omega^\nu $

This determines the connection 1-forms once the frame is chosen.

### Metric compatibility in form language
$ dg_{\mu\nu} = \omega_{\mu\nu} + \omega_{\nu\mu} $

This is the form-language version of $\nabla g = 0$.

---

## 14. Conceptual backbone of the chapter

The chapter’s logic can be summarized as follows:

1. Curvature is often the quickest way to understand a spacetime physically.
2. The standard direct method computes curvature from the metric through Christoffel symbols.
3. This method is universal but often algebraically wasteful.
4. The Einstein tensor can be formed from the Riemann tensor by contraction or dualization.
5. A first efficiency improvement comes from the geodesic Lagrangian method, which extracts the connection directly from the geodesic equations.
6. A much deeper and more efficient reorganization comes from Cartan’s curvature 2-forms.
7. The curvature 2-forms package the 21 independent Riemann components in four dimensions into six 2-forms.
8. In orthonormal frames, the structural equations become especially simple.
9. This makes highly symmetric cosmological and gravitational metrics much easier to analyze.

---

## 15. Final takeaway

Chapter 14 is the book’s practical handbook for curvature computation.

Its deepest message is:

- curvature is not only a conceptual measure of gravitational geometry,
- it is also a **calculable object**, and there are better and worse ways to calculate it.

The chapter teaches three approaches:

- the **direct metric $\to$ connection $\to$ curvature** route,
- the **geodesic Lagrangian** shortcut,
- and the highly efficient **Cartan curvature 2-form** method.

It also shows how to pass from Riemann curvature to the Einstein tensor, which is the quantity that matters most in general relativity.

So Chapter 14 turns the reader from someone who understands what curvature means into someone who can **actually compute it**.
