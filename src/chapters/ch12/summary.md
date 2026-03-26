# Chapter 12 Detailed Summary  
## Newtonian Gravity in the Language of Curved Spacetime

## 1. Chapter purpose and overall arc

Chapter 12 shows that **Newtonian gravity can be reformulated geometrically**, in a way that strongly parallels the curved-spacetime language developed earlier for Einsteinian gravity. The chapter’s central message is that Newton’s theory does **not** have to be interpreted as particles moving on curved paths in a flat Euclidean space while time flows independently. Instead, following **Cartan**, Newtonian gravity can be re-expressed as a theory of **geodesics in a curved spacetime**.

This shift in viewpoint is not merely cosmetic. It clarifies both:

- how Newtonian gravity fits into the language of differential geometry, and
- how Newtonian spacetime differs fundamentally from Einsteinian spacetime.

The chapter develops this idea in five major steps:

1. rewrite Newton’s equation of motion as a **geodesic equation** in a curved spacetime,
2. identify the **connection coefficients**, **Riemann tensor**, and **Ricci tensor** appropriate to Newtonian gravity,
3. explain the **stratified structure** of Newtonian spacetime, with universal time slicing spacetime into flat Euclidean space slices,
4. analyze the class of **Galilean coordinate systems** and how they transform,
5. state Newtonian gravity in **coordinate-free geometric axioms**, and contrast that geometric version with both the standard Newtonian formulation and Einstein’s theory,
6. end with a philosophical critique of the “geometric view” of physics and of the principle of general covariance.

The chapter is explicitly **Track 2** and depends on the machinery of Chapters 9–11. It functions as a bridge between:
- classical Newtonian gravity,
- Cartan’s geometric reformulation,
- and Einsteinian gravitation.

---

## 2. Section 12.1 — Newtonian gravity in brief

The chapter begins with the familiar Newtonian law for the motion of neutral test particles in rectangular space coordinates $x^j$ and universal time $t$:

$ \frac{d^2 x^j}{dt^2} + \frac{\partial \Phi}{\partial x^j} = 0. $

Here $ \Phi $ is the Newtonian gravitational potential.

In the standard pre-relativistic interpretation, this describes particles moving along curved trajectories in **Euclidean space**, while time flows independently. Cartan’s insight is to reinterpret these trajectories not as curved paths in space, but as **geodesics in spacetime**.

### 2.1 Affine parametrization

Because ideal Newtonian clocks carried by test particles read universal time, or any affine rescaling of it, one can choose an affine parameter $ \lambda $ with

$ \lambda = a t + b. $

Then the equations of motion become a geodesic equation in spacetime. Comparing Newton’s equation with the standard geodesic equation,

$ \frac{d^2 x^\alpha}{d\lambda^2} + \Gamma^\alpha{}_{\beta\gamma}
\frac{dx^\beta}{d\lambda}
\frac{dx^\gamma}{d\lambda} = 0, $

one reads off the Newtonian connection coefficients:

$ \Gamma^j{}_{00} = \frac{\partial \Phi}{\partial x^j}, \qquad \text{all other } \Gamma^\alpha{}_{\beta\gamma} = 0. $

This is the first major result of the chapter: **Newtonian gravity can be encoded in a spacetime connection.**

### 2.2 Curvature in Newtonian spacetime

Substituting these connection coefficients into the standard Riemann-tensor formula yields the only nonzero curvature components:

$ R^j{}_{0k0} = - R^j{}_{00k} = \frac{\partial^2 \Phi}{\partial x^j \partial x^k}, $

with all others vanishing.

Thus Newtonian tidal gravity appears as spacetime curvature, exactly as in the earlier relativistic development.

### 2.3 Ricci curvature and Poisson’s equation

The Newtonian field equation is the Poisson equation:

$ \nabla^2 \Phi = \sum_j \Phi_{,jj} = 4\pi \rho. $

Using the Ricci tensor

$ R_{\alpha\beta} \equiv R^\mu{}_{\alpha\mu\beta}, $

this becomes

$ R_{00} = 4\pi \rho, \qquad \text{all other } R_{\alpha\beta}=0. $

So the full content of Newtonian gravity can be written geometrically as:
- a special spacetime connection,
- a geodesic law for free fall,
- a corresponding curvature tensor,
- and a Ricci equation sourced by mass density.

### Main idea of §12.1

Newton’s law of free fall can be rewritten as a **geodesic equation** in a curved spacetime. The Newtonian potential $ \Phi $ determines the connection, its second derivatives determine the tidal curvature, and Poisson’s equation becomes a Ricci-curvature equation.

---

## 3. Section 12.2 — Stratification of Newtonian spacetime

This section explains the distinctive structure of Newtonian spacetime.

### 3.1 Universal time as an intrinsic scalar field

Newtonian spacetime possesses a scalar field

$ t = t(\mathcal{P}), $

called **universal time**. This is not just a coordinate convenience; it is an intrinsic part of Newtonian spacetime structure. It stratifies spacetime into slices of constant $t$.

Each slice $t=\text{constant}$ is a **space slice**. These space slices are the geometric descendants of Newton’s “absolute space.”

### 3.2 Flat Euclidean spatial slices

Each slice is flat and Euclidean. In Galilean coordinates, the spatial basis vectors $e_j = \partial/\partial x^j$ satisfy

$ e_i \cdot e_j = \delta_{ij}, $

and all purely spatial connection coefficients vanish. Therefore the geometry induced on each slice is completely flat.

So the chapter emphasizes a crucial contrast:

- **space slices** are flat,
- but **spacetime** is curved.

This is a defining feature of Newton-Cartan geometry.

### 3.3 Where curvature lives

Curvature appears only when one compares directions involving time and space together. If one parallel transports a vector around a loop lying entirely inside a single spatial slice, nothing happens. But if one transports it around a loop that involves a time step and a spatial displacement, the vector changes by an amount controlled by curvature.

In this sense, Newtonian curvature is genuinely **spacetime curvature**, not spatial curvature.

### 3.4 Geodesic deviation in Newtonian spacetime

The section then gives the geodesic-deviation equation for neighboring freely falling particles:

$ \nabla_u \nabla_u n + \mathcal{R}(n,u)u = 0. $

In Galilean coordinates, using universal time $t$ as affine parameter, this becomes

$ \frac{d^2 n^0}{dt^2} = 0, $

and, for spatial components,

$ \frac{d^2 n^j}{dt^2} + \frac{\partial^2 \Phi}{\partial x^j \partial x^k} n^k = 0. $

This is exactly the Newtonian tidal-force law. Two initially parallel geodesics in space remain parallel, but two nearby **spacetime geodesics** corresponding to freely falling particles may accelerate relative to one another.

### Main idea of §12.2

Newtonian spacetime is **stratified** by universal time into flat Euclidean space slices. The slices themselves are flat, but spacetime as a whole is curved in a way that produces tidal relative acceleration of freely falling particles.

---

## 4. Section 12.3 — Galilean coordinate systems

This section studies the special class of coordinate systems that “cling” to Newtonian spacetime in a way analogous to Lorentz coordinates in Minkowski spacetime.

### 4.1 Defining properties of Galilean coordinates

A Galilean coordinate system is one in which:

- the time coordinate is universal time,
- spatial coordinates are Euclidean on each slice,
- and the only nonzero connection coefficients are

$ \Gamma^j{}_{00} = \Phi_{,j}. $

These coordinate systems are the Newtonian analogue of Lorentz coordinates, but with major differences.

### 4.2 General transformation between Galilean systems

Suppose one passes from one Galilean coordinate system to another. The transformation must preserve universal time and Euclidean geometry on each spatial slice. The most general such transformation has the form

$ x^{j'} = A_{j'k} x^k + a^{j'}(t), $

where:
- $A_{j'k}$ is a **time-independent rotation matrix**,
- $a^{j'}(t)$ is a **time-dependent translation**.

Thus any two Galilean coordinate systems differ by:
1. a single fixed rotation of the spatial grid, and
2. a possibly time-dependent translation of the origin.

### 4.3 Transformation of the Newtonian potential

Under such a change of Galilean coordinates, the Newtonian potential transforms as

$ \Phi' = \Phi - \ddot{a}^k x^k + \text{constant}. $

This is a very important conceptual point: **the Newtonian potential is not a coordinate-free scalar field on spacetime**. It depends on the choice of Galilean frame. By contrast, universal time $t$ and the covariant derivative $\nabla$ are coordinate-independent geometric objects.

### 4.4 Absolute Galilean coordinates

If the universe were an isolated finite island of matter surrounded by empty space, one could impose the asymptotic condition

$ \Phi \to 0 \quad \text{as } r \to \infty. $

That would single out a subclass of “absolute” Galilean coordinates related by the ordinary Galilean transformation

$ x^{j'} = A_{j'k} x^k + a^{j'} + v^{j'} t. $

But the chapter stresses that:
- such coordinates cannot be distinguished by local measurements alone,
- and the real universe is not such an idealized island universe.

### Main idea of §12.3

Galilean coordinates are the preferred coordinates of Newtonian spacetime, but they are not unique. They are related by time-independent rotations and time-dependent translations, and the Newtonian potential changes under those transformations. This shows that $ \Phi $ is frame-dependent, whereas the covariant derivative and universal time are geometric.

---

## 5. Section 12.4 — Geometric, coordinate-free formulation of Newtonian gravity

This section achieves the main technical goal of the chapter: stating Newtonian gravity in fully geometric, coordinate-independent language.

The passage from Galilean-coordinate formulas to coordinate-free form is conceptually straightforward:
- replace component statements with statements about tensors, 1-forms, curvature, and geodesics.

For example, the vanishing of certain connection coefficients in Galilean coordinates becomes the statement that the 1-form $dt$ is covariantly constant:

$ \nabla_u dt = 0 \quad \text{for all } u. $

### 5.1 Coordinate-free Newtonian axioms

The chapter then presents, in Box 12.4, a full set of geometric axioms equivalent to standard Newtonian gravity. The most important are:

1. There exists a universal time function $t$ and a symmetric covariant derivative $\nabla$.
2. The 1-form $dt$ is covariantly constant.
3. Spatial vectors are unchanged by parallel transport around infinitesimal closed curves.
4. All vectors are unchanged by parallel transport around infinitesimal **spatial** closed curves.
5. The Ricci tensor has the form

$ \mathrm{Ricci} = 4\pi \rho\, dt \otimes dt. $

6. There exists a **spatial metric** defined only on spatial vectors, compatible with $\nabla$.
7. The Jacobi curvature operator is self-adjoint on spatial vectors.
8. Ideal rods and clocks measure the spatial metric and universal time, and freely falling particles move on geodesics of $\nabla$.

### 5.2 Standard Newtonian axioms recovered

The chapter then places beside these geometric axioms the equivalent standard Newtonian ones:

1. Universal time $t$, Cartesian Galilean coordinates $x^j$, and a Newtonian potential $ \Phi $ exist.
2. The density $\rho$ generates $ \Phi $ by Poisson’s equation

$ \nabla^2 \Phi = 4\pi \rho. $

3. Freely falling particles obey

$ \frac{d^2 x^j}{dt^2} + \Phi_{,j} = 0. $

4. Ideal rods and clocks measure Galilean lengths and universal time.

So the chapter demonstrates genuine equivalence:
- one can derive the geometric formulation from the standard one,
- and derive the standard one from the geometric one.

### 5.3 No spacetime metric

A striking feature emerges: Newtonian spacetime admits a **spatial metric** on space slices, but **no nondegenerate spacetime metric** compatible with the covariant derivative. This sharply distinguishes Newton-Cartan geometry from Einsteinian gravity, where the spacetime metric is the central object.

### Main idea of §12.4

Newtonian gravity can be expressed entirely in coordinate-free geometric language. But unlike general relativity, its geometry is built from:
- universal time,
- a symmetric covariant derivative,
- a spatial metric only,
- and curvature conditions,
rather than from a full spacetime metric.

---

## 6. Section 12.5 — The geometric view of physics: a critique

The chapter ends with a philosophical digression.

### 6.1 General covariance by itself has no force

A common twentieth-century view says:

> Every physical quantity should be describable geometrically, and the laws of physics should be expressible as coordinate-free geometric relations.

The chapter notes that, in the strict Kretschmann sense, this principle of **general covariance** has little discriminatory power. Any viable physical theory can, in principle, be rewritten in coordinate-free language. Newtonian gravity itself is the chapter’s example: it can be recast geometrically even though its original formulation is not geometric.

So as a criterion for separating good theories from bad ones, general covariance alone is useless.

### 6.2 Simplicity of the geometric formulation as a better guide

The author then proposes a more interesting principle:

> Nature likes theories that are simple when stated in geometric, coordinate-free language.

By this criterion:
- **general relativity** scores very highly, because its geometric formulation is elegant and compact,
- while **Newtonian gravity** appears awkward and contrived in geometric language.

Yet the chapter also acknowledges the historical reversal:
- nineteenth-century physicists would have judged Newtonian theory simpler because its **coordinate formulation** is easy,
- whereas Einstein’s field equations look frighteningly complicated in components.

### Main idea of §12.5

General covariance alone is not a meaningful criterion of physical truth. What matters more is the **simplicity and naturalness** of a theory’s geometric formulation. By that standard, Einstein’s gravity is far more elegant than Newtonian gravity.

---

## 7. Box summaries

## Box 12.1 — Geodesic deviation in Newtonian spacetime

This box carries out the geodesic-deviation calculation explicitly in Galilean coordinates.

### Main content
- Use Galilean coordinates $x^j$ and universal time $t$.
- Choose affine parameter $ \lambda = t $.
- Then the separation vector between geodesics has zero time component:

$ n^0 = 0. $

- The covariant derivatives simplify because almost all connection coefficients vanish.
- The only nonzero curvature contribution comes from the tidal components $R^j{}_{0k0}$.

### Final result
The geodesic-deviation equation reduces to

$ \frac{d^2 n^0}{dt^2} = 0, $

and

$ \frac{d^2 n^j}{dt^2}
+
\frac{\partial^2 \Phi}{\partial x^j \partial x^k} n^k = 0. $

### Significance
The box makes completely explicit that the Newtonian tidal-force law is the geodesic-deviation equation in Newtonian curved spacetime.

---

## Box 12.2 — Newtonian spacetime, Minkowskian spacetime, and Einsteinian spacetime: comparison and contrast

This box is a major conceptual comparison table.

### Key contrasts
It compares Newtonian, special-relativistic, and general-relativistic spacetimes under questions such as:

- What intrinsic geometric structures exist a priori?
- What preferred coordinate systems are available?
- What must be chosen to select a preferred coordinate system?
- When are simultaneity, same-place, same-direction, or invariant-distance notions well-defined?

### Newtonian column
Newtonian spacetime has:
- a universal time function $t$,
- a covariant derivative $\nabla$,
- and a spatial metric only.

It has preferred coordinate systems:
- Galilean coordinates in general,
- and “absolute” Galilean coordinates only in the idealized island-universe case.

### Minkowski column
Minkowski spacetime has:
- a flat spacetime metric,
- Lorentz coordinates,
- and globally well-defined spacetime intervals.

### Einsteinian column
Einsteinian spacetime has:
- a spacetime metric,
- no globally preferred coordinates in general,
- only local notions of inertial structure and invariant distance.

### Significance
This box shows that Newtonian spacetime is not simply “a poor version of relativity.” It has a distinct geometric structure:
- stratified rather than homogeneous,
- with preferred time slicing,
- with a spatial metric but no spacetime metric.

---

## Box 12.3 — Newtonian gravity à la Cartan, and Einsteinian gravity: comparison and contrast

This box compares Newton-Cartan gravity with Einstein’s gravity.

### Newton-Cartan side
- Free-particle motion in a local freely falling, nonrotating frame looks like ordinary Newtonian mechanics in a gravity-free Galilean frame.
- Test particles with the same initial position and velocity follow the same world line.
- In every local region there is a freely falling frame in which geodesics appear straight.
- Spacetime is stratified into Euclidean space slices labeled by universal time.
- The gravitational structure is encoded in connection coefficients such as

$ \Gamma^i{}_{00} = \frac{\partial \Phi}{\partial x^i}. $

### Einstein side
- Physics in a local freely falling frame looks like special relativity in a Lorentz frame.
- Test particles with the same initial data also follow the same world line.
- In every local region there is a local inertial frame in which geodesics appear straight.
- Spacetime is not stratified; instead it has local Lorentz character everywhere.
- Gravity is a **metric theory**, with connection coefficients derived from the spacetime metric.

### Significance
The box highlights both the similarity and the profound difference:
- both theories geometrize gravity through free fall and local inertial frames,
- but Newton-Cartan uses stratified spacetime plus connection,
- whereas Einstein uses a full spacetime metric.

---

## Box 12.4 — Newtonian gravity: geometric formulation contrasted with standard formulation

This is the chapter’s central summary box.

### Geometric formulation
The box lists the coordinate-free axioms:
- universal time,
- symmetric covariant derivative,
- covariantly constant $dt$,
- special curvature restrictions,
- Ricci equation $ \mathrm{Ricci} = 4\pi \rho\, dt \otimes dt $,
- spatial metric compatibility,
- self-adjoint Jacobi curvature operator,
- geodesic motion of freely falling particles.

### Standard formulation
Beside it, the box lists the ordinary Newtonian axioms:
- universal time,
- Cartesian Galilean coordinates,
- Newtonian potential $ \Phi $,
- Poisson equation,
- and Newton’s second law for gravitational motion.

### Significance
This box is the chapter’s definitive statement that the geometric and standard formulations are fully equivalent, even though the geometric version is much more elaborate.

---

## 8. Figure summary

## Figure 12.1 — Coordinate system carried by an orbital laboratory

Figure 12.1 illustrates the coordinate system used in the exercise on geodesic deviation above the Earth.

### What the figure shows
- A laboratory moving in circular orbit around the Earth.
- A local coordinate system attached to the laboratory.
- The axes rotate and accelerate with the orbital motion.

### Why it matters
The figure supports the discussion of rotating and accelerating coordinate systems and helps interpret how non-Galilean frames generate Coriolis, centrifugal, and inertial-force terms through the transformed connection coefficients.

---

## 9. Key equations and what they mean

### Newtonian equation of motion
$ \frac{d^2 x^j}{dt^2} + \frac{\partial \Phi}{\partial x^j} = 0 $

This is the standard free-fall law in Newtonian gravity.

### Connection coefficients in Newtonian spacetime
$ \Gamma^j{}_{00} = \Phi_{,j}, \qquad \text{others vanish} $

This is the geometric encoding of the Newtonian gravitational field.

### Riemann curvature components
$ R^j{}_{0k0} = -R^j{}_{00k} = \frac{\partial^2 \Phi}{\partial x^j \partial x^k} $

These are the tidal curvature components of Newtonian spacetime.

### Poisson equation
$ \nabla^2 \Phi = 4\pi \rho $

This is Newton’s field equation in standard form.

### Ricci form of the field equation
$ R_{00} = 4\pi \rho $

This is the geometric form of Poisson’s equation.

### Universal time scalar field
$ t = t(\mathcal{P}) $

This is the intrinsic stratifying structure of Newtonian spacetime.

### Spatial metric on slices
$ e_i \cdot e_j = \delta_{ij} $

Each constant-$t$ slice has Euclidean geometry.

### Geodesic deviation
$ \frac{d^2 n^j}{dt^2}
+
\frac{\partial^2 \Phi}{\partial x^j \partial x^k} n^k = 0 $

This is the Newtonian tidal-force law in geometric form.

### Transformation between Galilean systems
$ x^{j'} = A_{j'k} x^k + a^{j'}(t) $

This is the general relation between Galilean coordinate systems.

### Potential transformation
$ \Phi' = \Phi - \ddot{a}^k x^k + \text{constant} $

This shows that the Newtonian potential depends on the chosen Galilean frame.

### Absolute Galilean transformation
$ x^{j'} = A_{j'k} x^k + a^{j'} + v^{j'} t $

This is the ordinary Galilean transformation in the idealized island-universe case.

### Coordinate-free Ricci law
$ \mathrm{Ricci} = 4\pi \rho\, dt \otimes dt $

This is the coordinate-free Newtonian field equation.

---

## 10. Conceptual backbone of the chapter

The chapter’s logic can be summarized as follows:

1. Start from Newton’s standard equation of motion.
2. Reinterpret free-fall trajectories as geodesics in spacetime.
3. Read off the spacetime connection from the Newtonian potential.
4. Compute the resulting curvature and show that tidal gravity is spacetime curvature.
5. Recognize that Newtonian spacetime is stratified by universal time into flat Euclidean slices.
6. Study the special coordinates adapted to that structure: Galilean coordinates.
7. Observe that the Newtonian potential depends on the Galilean frame and is not itself a geometric scalar.
8. Replace the coordinate formulation entirely with coordinate-free geometric axioms.
9. Compare Newton-Cartan structure with both special relativity and general relativity.
10. Conclude that geometric reformulability alone is not a profound criterion; what matters is how naturally and simply a theory takes geometric form.

---

## 11. Final takeaway

Chapter 12 shows that Newtonian gravity can be rewritten as a theory of **curved spacetime**, but that the resulting geometry is fundamentally different from Einsteinian spacetime.

Its deepest messages are:

- Newtonian free fall can be interpreted as **geodesic motion**.
- Newtonian tidal forces are encoded by **spacetime curvature**, specifically by the Riemann tensor.
- Newtonian spacetime is **stratified** by a universal time function into flat Euclidean space slices.
- It admits a **spatial metric** but no nondegenerate spacetime metric compatible with the connection.
- The Newtonian potential $ \Phi $ is not an invariant spacetime scalar; it depends on the chosen Galilean frame.
- Newtonian gravity has a fully valid **coordinate-free geometric formulation**, but it is more elaborate and less natural than Einstein’s metric theory.

So Chapter 12 is both a mathematical bridge and a conceptual critique: it proves that Newtonian gravity can be geometrized, but in doing so it also highlights why **general relativity is the more elegant geometric theory of gravitation**.
