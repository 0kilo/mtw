# Tensor Calculus Crash Course

## 1. Purpose of This Crash Course

This document is a compact but comprehensive introduction to tensor calculus. It is designed for someone who has seen multivariable calculus, linear algebra, and some mathematical physics, and wants the core ideas organized into one coherent framework.

Tensor calculus is the language used when:

- vectors and derivatives must be written in a way that does **not depend on the coordinate system**
- geometry is curved or coordinates are curvilinear
- physical laws must keep the same form under change of variables
- quantities naturally carry multiple directions or slots, such as stress, strain, inertia, diffusion, curvature, and spacetime metrics

You can think of tensor calculus as the combination of:

- **linear algebra** for multilinear objects
- **calculus** for change and differentiation
- **geometry** for curved spaces and coordinate systems
- **index notation** for precise computation

---

## 2. The Big Idea

A tensor is an object whose components transform in a specific way under a change of coordinates so that the geometric or physical quantity it represents remains the same.

A scalar stays the same.

A vector changes linearly.

A tensor of higher rank transforms with one matrix factor per index.

This transformation law is the essence of tensor calculus.

---

## 3. Prerequisites You Should Recall

You should already be comfortable with:

- partial derivatives: $\partial f / \partial x^i$
- matrices and linear maps
- dot product and basis expansion
- chain rule in several variables
- Jacobian matrices
- basic vector calculus: gradient, divergence, curl
- preferably some differential equations

---

## 4. Scalars, Vectors, Covectors, and Tensors

### 4.1 Scalars

A scalar is a rank-0 tensor. It has no direction and no indices.

Examples:

- temperature
- mass density at a point
- electric potential
- curvature scalar

Usually written as $\phi$, $f$, or $s$.

---

### 4.2 Vectors

A vector is a rank-1 tensor with one upper index in index notation:

$ v = v^i e_i $

Here:

- $e_i$ are basis vectors
- $v^i$ are contravariant components

Examples:

- velocity
- displacement
- force
- tangent vector to a curve

---

### 4.3 Covectors

A covector, or dual vector, is also rank 1, but written with a lower index:

$ \omega = \omega_i \, dx^i $

Covectors eat vectors and produce scalars:

$ \omega(v) = \omega_i v^i $

A gradient is naturally a covector:

$ df = \frac{\partial f}{\partial x^i} dx^i $

So the components of the gradient are naturally $\partial_i f$, not $\partial^i f$ unless a metric is used to raise the index.

---

### 4.4 General Tensors

A tensor of type $(r,s)$ has $r$ upper indices and $s$ lower indices:

$ T^{i_1 \dots i_r}{}_{j_1 \dots j_s} $

Examples:

- $T^i{}_j$ is type $(1,1)$
- $g_{ij}$ is type $(0,2)$
- $R^i{}_{jkl}$ is type $(1,3)$

Rank means total number of indices: $r+s$.

---

## 5. Einstein Summation Convention

If an index appears once upstairs and once downstairs in a term, summation over that index is implied.

So instead of writing

$ \sum_{i=1}^n a_i b^i $

we write

$ a_i b^i $

This notation is one of the main reasons tensor calculus becomes compact and powerful.

Examples:

- dot product: $v_i w^i$
- matrix-vector multiplication: $A^i{}_j v^j$
- trace: $A^i{}_i$

A repeated index must appear exactly twice in a valid term.

Bad example: $a_i b_i$ is not a proper contraction unless a metric is implicitly present.

---

## 6. Coordinate Transformations

Suppose the old coordinates are $x^i$ and the new coordinates are $x^{i'}$.

### 6.1 Contravariant Vector Transformation

A vector transforms as

$ v^{i'} = \frac{\partial x^{i'}}{\partial x^j} v^j $

Contravariant components change with the Jacobian of the coordinate map.

---

### 6.2 Covariant Vector Transformation

A covector transforms as

$ \omega_{i'} = \frac{\partial x^j}{\partial x^{i'}} \omega_j $

Covariant components change with the inverse Jacobian.

---

### 6.3 General Tensor Transformation

A tensor of type $(r,s)$ transforms with one Jacobian for each upper index and one inverse Jacobian for each lower index:

$ T^{i_1' \dots i_r'}{}_{j_1' \dots j_s'} =
\frac{\partial x^{i_1'}}{\partial x^{a_1}} \cdots
\frac{\partial x^{i_r'}}{\partial x^{a_r}}
\frac{\partial x^{b_1}}{\partial x^{j_1'}} \cdots
\frac{\partial x^{b_s}}{\partial x^{j_s'}}
T^{a_1 \dots a_r}{}_{b_1 \dots b_s} $

This is the defining law of tensors.

---

## 7. Why Upper and Lower Indices Matter

Upper and lower indices are not just notation style. They tell you how an object transforms.

- upper index: contravariant
- lower index: covariant

You can only naturally contract one upper with one lower:

$ T^i{}_i $

Without a metric, $v^i w^i$ is not a coordinate-invariant scalar.

This distinction becomes crucial in non-Cartesian coordinates and curved geometry.

---

## 8. Basis and Dual Basis

Let $e_i$ be a basis for tangent vectors and let $\theta^i$ be the dual basis, defined by

$ \theta^i(e_j) = \delta^i_j $

where $\delta^i_j$ is the Kronecker delta:

$ \delta^i_j = 1 $ if $i=j$, and $0$ otherwise.

Then:

- vectors expand as $v = v^i e_i$
- covectors expand as $\omega = \omega_i \theta^i$

This duality is foundational.

---

## 9. The Metric Tensor

The metric is one of the most important tensors in all of mathematics and physics.

It is a symmetric covariant rank-2 tensor:

$ g = g_{ij} \, dx^i \otimes dx^j $

It defines lengths, angles, dot products, and distances.

### 9.1 Length of a Vector

$ \|v\|^2 = g_{ij} v^i v^j $

### 9.2 Line Element

$ ds^2 = g_{ij} dx^i dx^j $

In Euclidean Cartesian coordinates, $g_{ij} = \delta_{ij}$.

In curved or curvilinear coordinates, $g_{ij}$ is generally nontrivial.

---

### 9.3 Raising and Lowering Indices

The metric converts vectors to covectors:

$ v_i = g_{ij} v^j $

Its inverse $g^{ij}$ converts covectors to vectors:

$ \omega^i = g^{ij} \omega_j $

The inverse metric satisfies

$ g^{ik} g_{kj} = \delta^i_j $

This is often the first place where students realize tensors are more than matrices: the index positions encode meaning.

---

## 10. Examples of Metrics

### 10.1 Cartesian Coordinates in $\mathbb{R}^2$

$ ds^2 = dx^2 + dy^2 $

So

$ g_{ij} =
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix} $

---

### 10.2 Polar Coordinates in $\mathbb{R}^2$

With coordinates $(r,\theta)$,

$ ds^2 = dr^2 + r^2 d\theta^2 $

So

$ g_{ij} =
\begin{pmatrix}
1 & 0 \\
0 & r^2
\end{pmatrix} $

and

$ g^{ij} =
\begin{pmatrix}
1 & 0 \\
0 & 1/r^2
\end{pmatrix} $

This is a good reminder that even flat space can have nontrivial metric components in curvilinear coordinates.

---

### 10.3 Spherical Coordinates in $\mathbb{R}^3$

With coordinates $(r,\theta,\phi)$,

$ ds^2 = dr^2 + r^2 d\theta^2 + r^2 \sin^2\theta \, d\phi^2 $

So the metric is diagonal, but coordinate dependent.

---

## 11. Tensors as Multilinear Maps

A tensor can also be viewed abstractly as a multilinear map.

For example, a type $(0,2)$ tensor takes two vectors and returns a scalar:

$ T(u,v) = T_{ij} u^i v^j $

A type $(1,1)$ tensor can be interpreted as a linear map from vectors to vectors, with components $T^i{}_j$.

This viewpoint helps explain why tensor operations are basis independent.

---

## 12. Tensor Products

Given tensors $A$ and $B$, their tensor product creates a higher-rank tensor.

If $u$ and $v$ are vectors, then

$ (u \otimes v)^{ij} = u^i v^j $

If $\omega$ and $\eta$ are covectors, then

$ (\omega \otimes \eta)_{ij} = \omega_i \eta_j $

Tensor product is not the same as contraction or dot product. It keeps all indices.

---

## 13. Symmetry and Antisymmetry

A tensor may have special symmetry properties.

### 13.1 Symmetric Tensor

$ T_{ij} = T_{ji} $

Examples:

- metric tensor
- stress tensor in many physical settings
- Hessian of a smooth scalar field, under appropriate regularity

### 13.2 Antisymmetric Tensor

$ A_{ij} = -A_{ji} $

Hence $A_{ii} = 0$.

Examples:

- electromagnetic field tensor
- differential 2-forms
- infinitesimal area orientation structures

A general rank-2 tensor can often be decomposed into symmetric and antisymmetric parts:

$ T_{ij} = \frac{1}{2}(T_{ij}+T_{ji}) + \frac{1}{2}(T_{ij}-T_{ji}) $

---

## 14. Kronecker Delta and Levi-Civita Symbol

### 14.1 Kronecker Delta

$ \delta^i_j $

acts like the identity tensor.

Examples:

- $\delta^i_j v^j = v^i$
- $\delta^i_i = n$ in $n$ dimensions

---

### 14.2 Levi-Civita Symbol

In 3D:

$ \varepsilon_{ijk} =
\begin{cases}
+1 & \text{even permutation of } (1,2,3) \\
-1 & \text{odd permutation of } (1,2,3) \\
0 & \text{if any indices repeat}
\end{cases} $

It is useful for cross products, determinants, curls, and oriented volume.

For example, the cross product can be written as

$ (u \times v)^i = \varepsilon^i{}_{jk} u^j v^k $

Strictly speaking, in curved spaces the Levi-Civita **symbol** and Levi-Civita **tensor** differ by metric determinant factors.

---

## 15. Differentiating Tensors: Why Ordinary Derivatives Fail

Suppose you differentiate vector components directly:

$ \partial_j v^i $

In Cartesian coordinates in flat space this works fine. But in curvilinear coordinates or curved spaces, these partial derivatives do **not** transform tensorially.

Why? Because the basis itself changes from point to point.

So tensor calculus introduces a corrected derivative: the **covariant derivative**.

---

## 16. Covariant Derivative

The covariant derivative is denoted by $\nabla$.

For a scalar:

$ \nabla_i \phi = \partial_i \phi $

No correction is needed.

For a contravariant vector:

$ \nabla_j v^i = \partial_j v^i + \Gamma^i_{jk} v^k $

For a covariant vector:

$ \nabla_j \omega_i = \partial_j \omega_i - \Gamma^k_{ji} \omega_k $

For a general tensor, each upper index contributes a $+\Gamma$ term and each lower index contributes a $-\Gamma$ term.

For example:

$ \nabla_k T^i{}_j = \partial_k T^i{}_j + \Gamma^i_{k\ell} T^\ell{}_j - \Gamma^\ell_{kj} T^i{}_\ell $

These formulas are central.

---

## 17. Christoffel Symbols

The coefficients $\Gamma^i_{jk}$ are the Christoffel symbols of the connection.

For the Levi-Civita connection associated with a metric, they are

$ \Gamma^i_{jk}
= \frac{1}{2} g^{i\ell}
\left(
\partial_j g_{k\ell}
+ \partial_k g_{j\ell}
- \partial_\ell g_{jk}
\right) $

Important point: Christoffel symbols are **not tensors**. They are connection coefficients.

They encode how basis vectors change and how differentiation must be corrected.

---

## 18. Geometric Meaning of Covariant Derivative

Ordinary derivative compares components at nearby points as if all vectors lived in the same vector space.

But on a manifold, tangent spaces at different points are different spaces.

The covariant derivative tells you how a vector field changes after accounting for the geometry.

This idea is closely related to **parallel transport**.

A vector field is parallel along a curve if its covariant derivative along the curve vanishes.

---

## 19. Covariant Derivatives in Polar Coordinates

Take the metric in polar coordinates:

$ ds^2 = dr^2 + r^2 d\theta^2 $

Then

$ g_{rr}=1, \quad g_{\theta\theta}=r^2, \quad g_{r\theta}=0 $

Using the Christoffel formula, the nonzero Christoffel symbols are:

$ \Gamma^r_{\theta\theta} = -r $

$ \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = 1/r $

These terms tell you why basis directions change in polar coordinates.

For a vector field $v = v^r e_r + v^\theta e_\theta$, the radial and angular derivatives pick up correction terms from the coordinate geometry.

Even flat plane geometry produces nonzero Christoffel symbols in non-Cartesian coordinates.

---

## 20. Divergence, Gradient, and Laplacian in Tensor Language

Tensor calculus generalizes vector calculus.

### 20.1 Gradient

For scalar $\phi$:

$ (\nabla \phi)_i = \partial_i \phi $

If you want the associated vector:

$ (\nabla \phi)^i = g^{ij} \partial_j \phi $

---

### 20.2 Divergence

For vector $v^i$:

$ \nabla_i v^i = \partial_i v^i + \Gamma^i_{ik} v^k $

A very useful equivalent formula is

$ \nabla_i v^i = \frac{1}{\sqrt{|g|}} \partial_i \left( \sqrt{|g|} \, v^i \right) $

where $g = \det(g_{ij})$.

This form is extremely important in physics and curvilinear coordinates.

---

### 20.3 Laplacian / Laplace-Beltrami Operator

For a scalar field:

$ \Delta \phi = \nabla_i \nabla^i \phi
= \frac{1}{\sqrt{|g|}} \partial_i \left( \sqrt{|g|} \, g^{ij} \partial_j \phi \right) $

This is the natural generalization of the ordinary Laplacian to curved spaces and general coordinates.

---

## 21. Worked Example: Divergence in Polar Coordinates

In polar coordinates,

$ g_{ij} =
\begin{pmatrix}
1 & 0 \\
0 & r^2
\end{pmatrix} $

so

$ \det(g) = r^2, \quad \sqrt{|g|} = r $

Then for a vector field $v^i = (v^r, v^\theta)$,

$ \nabla_i v^i
= \frac{1}{r} \partial_r (r v^r) + \frac{1}{r} \partial_\theta (r v^\theta) $

Because $r$ does not depend on $\theta$, this simplifies to

$ \nabla_i v^i
= \frac{1}{r} \partial_r (r v^r) + \partial_\theta v^\theta $

Be careful here: this depends on what convention is used for the angular component. In many physics texts, the physical angular component is not the same as the contravariant coordinate component. This is a common source of confusion.

If one uses standard vector-calculus physical components, the familiar formula is

$ \operatorname{div} v =
\frac{1}{r}\frac{\partial}{\partial r}(r v_r^{\text{phys}})
+ \frac{1}{r}\frac{\partial}{\partial \theta}(v_\theta^{\text{phys}}) $

Tensor calculus helps keep these distinctions clean.

---

## 22. Hessian

For a scalar field $\phi$, the Hessian in curved geometry is

$ \nabla_i \nabla_j \phi = \partial_i \partial_j \phi - \Gamma^k_{ij} \partial_k \phi $

Even though $\nabla_i \phi = \partial_i \phi$, the second derivative requires a correction term because the first derivative is a covector.

---

## 23. Geodesics

A geodesic is a curve that generalizes the idea of a straight line to curved spaces.

If $x^i(\lambda)$ is a curve, its tangent vector is

$ \dot{x}^i = dx^i/d\lambda $

The geodesic equation is

$ \ddot{x}^i + \Gamma^i_{jk} \dot{x}^j \dot{x}^k = 0 $

Interpretation:

- in flat Cartesian coordinates, Christoffel symbols vanish and this becomes $\ddot{x}^i = 0$
- in curved spaces or curvilinear coordinates, extra terms appear because the coordinate grid bends or because the space itself is curved

Geodesics describe shortest paths in Riemannian geometry and free-fall motion in general relativity.

---

## 24. Curvature

Curvature measures the failure of second covariant derivatives to commute and the failure of parallel transport around a loop to return a vector unchanged.

### 24.1 Riemann Curvature Tensor

$ R^i{}_{jkl}
= \partial_k \Gamma^i_{lj}
- \partial_l \Gamma^i_{kj}
+ \Gamma^i_{km}\Gamma^m_{lj}
- \Gamma^i_{lm}\Gamma^m_{kj} $

Equivalent operator form:

$ (\nabla_k \nabla_l - \nabla_l \nabla_k) v^i = R^i{}_{mkl} v^m $

This is one of the most important tensors in geometry.

---

### 24.2 Ricci Tensor

Contract the Riemann tensor:

$ R_{jl} = R^i{}_{jil} $

---

### 24.3 Scalar Curvature

Contract again:

$ R = g^{jl} R_{jl} $

These curvature objects appear in geometry, elasticity, diffusion on manifolds, and general relativity.

---

## 25. Torsion and Why It Is Often Zero Here

A general connection may have torsion.

The torsion tensor is

$ T^i{}_{jk} = \Gamma^i_{jk} - \Gamma^i_{kj} $

For the Levi-Civita connection used in standard Riemannian geometry, torsion is zero:

$ \Gamma^i_{jk} = \Gamma^i_{kj} $

This is one of the two defining properties of the Levi-Civita connection.

---

## 26. Levi-Civita Connection: The Standard Connection from the Metric

The Levi-Civita connection is uniquely determined by:

1. **metric compatibility**: $\nabla_k g_{ij} = 0$
2. **zero torsion**: $\Gamma^i_{jk} = \Gamma^i_{kj}$

Metric compatibility means lengths and angles are preserved under parallel transport.

This connection is the default one in most tensor calculus courses.

---

## 27. Covariant Conservation Laws

Many physical laws become elegant tensor equations.

Examples:

- incompressible flow: $\nabla_i v^i = 0$
- covariant conservation of stress-energy: $\nabla_\mu T^{\mu\nu} = 0$
- Maxwell-type equations can be written compactly with antisymmetric tensors

This coordinate-free structure is one reason tensor calculus is so important in theoretical physics.

---

## 28. Common Tensors in Applications

### 28.1 Continuum Mechanics

- stress tensor: $\sigma_{ij}$
- strain tensor: $\varepsilon_{ij}$
- deformation gradient: $F^i{}_j$

These describe forces, deformations, and response of materials.

---

### 28.2 Electromagnetism

Electromagnetic field tensor:

$ F_{\mu\nu} = -F_{\nu\mu} $

This packages electric and magnetic fields into one tensorial object.

---

### 28.3 General Relativity

- metric: $g_{\mu\nu}$
- Christoffel symbols: $\Gamma^\mu_{\nu\rho}$
- Riemann tensor: $R^\mu{}_{\nu\rho\sigma}$
- Ricci tensor: $R_{\mu\nu}$
- Einstein tensor: $G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu}$

Einstein's field equation is

$ G_{\mu\nu} = 8\pi T_{\mu\nu} $

up to unit conventions.

---

## 29. Tensor Identities You Should Know

Here are several useful identities.

### 29.1 Metric Inverse Identity

$ g^{ik} g_{kj} = \delta^i_j $

### 29.2 Trace

$ T^i{}_i $

### 29.3 Product Rule for Covariant Derivative

$ \nabla_k (A^i B_i) = (\nabla_k A^i) B_i + A^i (\nabla_k B_i) $

### 29.4 Contraction Commutes with Covariant Differentiation

If the contraction is valid, then covariant differentiation distributes through it.

### 29.5 Metric Compatibility

$ \nabla_k g_{ij} = 0, \quad \nabla_k g^{ij} = 0 $

### 29.6 Commutator on Scalars

For scalar $\phi$,

$ \nabla_i \nabla_j \phi = \nabla_j \nabla_i \phi $

But not generally for vectors and higher tensors.

---

## 30. Coordinate Components vs Physical Components

This is a major source of confusion in curvilinear coordinates.

In an orthogonal curvilinear system, the coordinate basis vectors may not have unit length. So a component such as $v^\theta$ is not always the same thing as the physical angular speed per unit arc length.

For example, in polar coordinates:

- coordinate basis: $\partial_r, \partial_\theta$
- $\|\partial_\theta\| = r$

So the physical angular basis unit vector is related to the coordinate basis by a scale factor.

Tensor calculus keeps track of coordinate components rigorously, while engineering or vector-calculus formulas often use physical components. Always check conventions.

---

## 31. Index Gymnastics Cheat Sheet

### 31.1 Raise an Index

$ v^i = g^{ij} v_j $

### 31.2 Lower an Index

$ v_i = g_{ij} v^j $

### 31.3 Contract

$ A_i B^i $

### 31.4 Tensor Product

$ (A \otimes B)^i{}_j = A^i B_j $

### 31.5 Symmetrization

$ T_{(ij)} = \frac{1}{2}(T_{ij}+T_{ji}) $

### 31.6 Antisymmetrization

$ T_{[ij]} = \frac{1}{2}(T_{ij}-T_{ji}) $

These notations are standard in geometry and physics.

---

## 32. A Minimal Workflow for Solving Tensor Calculus Problems

When given a tensor-calculus problem, this workflow helps:

### Step 1: Identify the coordinates

What are the variables? Cartesian, polar, spherical, cylindrical, spacetime coordinates?

### Step 2: Write the metric

Find $g_{ij}$, $g^{ij}$, and $\det(g)$.

### Step 3: Determine what kind of object you have

Is it a scalar, vector, covector, or general tensor? What is its type $(r,s)$?

### Step 4: Decide what operation is needed

- raise/lower index?
- covariant derivative?
- divergence?
- Laplacian?
- geodesic equation?
- curvature?

### Step 5: Use the appropriate formula

Do not use ordinary vector-calculus formulas blindly when coordinates are curved or non-Cartesian.

### Step 6: Check invariance and index structure

Every free index on the left must appear exactly once on the right. Repeated dummy indices must be summed consistently.

### Step 7: Simplify using symmetry

Diagonal metrics, symmetric tensors, or antisymmetric tensors often reduce the work dramatically.

---

## 33. Worked Example: Christoffel Symbols in Polar Coordinates

Take

$ g_{rr}=1, \quad g_{\theta\theta}=r^2, \quad g_{r\theta}=0 $

The inverse metric is

$ g^{rr}=1, \quad g^{\theta\theta}=1/r^2 $

Now compute one Christoffel symbol:

$ \Gamma^r_{\theta\theta}
= \frac{1}{2} g^{rr}
(\partial_\theta g_{\theta r} + \partial_\theta g_{r\theta} - \partial_r g_{\theta\theta}) $

Since $g_{\theta r}=g_{r\theta}=0$ and $\partial_r(r^2)=2r$, this becomes

$ \Gamma^r_{\theta\theta} = \frac{1}{2}(0+0-2r) = -r $

Next,

$ \Gamma^\theta_{r\theta}
= \frac{1}{2} g^{\theta\theta}
(\partial_r g_{\theta\theta} + \partial_\theta g_{r\theta} - \partial_\theta g_{r\theta}) $

So

$ \Gamma^\theta_{r\theta}
= \frac{1}{2} (1/r^2)(2r) = 1/r $

This is the standard result.

---

## 34. Worked Example: Geodesics in Euclidean Plane Using Polar Coordinates

The space is flat, but coordinates are curved.

The nonzero Christoffel symbols are

$ \Gamma^r_{\theta\theta}=-r $,  
$ \Gamma^\theta_{r\theta}=\Gamma^\theta_{\theta r}=1/r $

So the geodesic equations become

$ \ddot{r} - r \dot{\theta}^2 = 0 $

$ \ddot{\theta} + \frac{2}{r}\dot{r}\dot{\theta} = 0 $

These look nontrivial, even though the underlying paths are just straight lines in the plane.

This is a perfect illustration of the distinction between:

- true geometric curvature of the space
- apparent complication caused by coordinate choice

Nonzero Christoffel symbols do **not** necessarily mean the space is curved.

---

## 35. Worked Example: Covariant Derivative of a Covector

Let $\omega_i$ be a covector field. Then

$ \nabla_j \omega_i = \partial_j \omega_i - \Gamma^k_{ji}\omega_k $

Why the minus sign?

Because lower indices transform oppositely to upper indices. The connection must correct the derivative accordingly.

This pattern generalizes:

- upper index gives a plus correction
- lower index gives a minus correction

Remember this rule and most tensor derivative formulas become manageable.

---

## 36. Typical Mistakes

### Mistake 1: Ignoring index position

$v_i$ and $v^i$ are not the same object unless the metric is the identity in the chosen basis.

### Mistake 2: Treating Christoffel symbols as tensors

They are not tensors.

### Mistake 3: Using partial derivatives when covariant derivatives are needed

This usually breaks invariance.

### Mistake 4: Forgetting that basis vectors can vary with position

This is the core reason covariant derivatives exist.

### Mistake 5: Confusing flat space in curvilinear coordinates with curved space

Polar and spherical coordinates can have complicated formulas even in flat Euclidean space.

### Mistake 6: Contracting invalid indices

Only one upper and one lower instance of the same index may be contracted naturally.

### Mistake 7: Mixing coordinate and physical components

Very common in cylindrical and spherical coordinate calculations.

---

## 37. Tensor Calculus vs Vector Calculus

Vector calculus is often enough in Cartesian coordinates in flat Euclidean space.

Tensor calculus becomes necessary when:

- coordinates are non-Cartesian
- dimensions are arbitrary
- curved spaces appear
- laws must be coordinate independent
- higher-rank quantities such as stress, curvature, inertia, conductivity, and spacetime fields are involved

You can think of vector calculus as a special case of tensor calculus.

---

## 38. Tensor Calculus vs Differential Forms

These subjects overlap but are not identical.

Differential forms focus on antisymmetric covariant tensors and exterior calculus. They are excellent for integration, topology, and coordinate-free formulations of conservation laws.

Tensor calculus is broader and includes:

- metrics
- general rank tensors
- covariant differentiation
- curvature
- mechanics and relativity applications

It is useful to learn both eventually.

---

## 39. A Compact Dictionary

Here is a compact dictionary of common objects.

- scalar field: $\phi$
- vector field: $v^i$
- covector field: $\omega_i$
- metric: $g_{ij}$
- inverse metric: $g^{ij}$
- identity tensor: $\delta^i_j$
- connection coefficients: $\Gamma^i_{jk}$
- covariant derivative: $\nabla_j$
- Riemann tensor: $R^i{}_{jkl}$
- Ricci tensor: $R_{ij}$
- scalar curvature: $R$
- geodesic curve: $x^i(\lambda)$
- Laplace-Beltrami: $\Delta \phi$

---

## 40. What to Memorize First

If you only memorize a small core, memorize these:

1. vector transformation:  
   $ v^{i'} = \frac{\partial x^{i'}}{\partial x^j} v^j $

2. covector transformation:  
   $ \omega_{i'} = \frac{\partial x^j}{\partial x^{i'}} \omega_j $

3. raising/lowering:  
   $ v_i = g_{ij} v^j $,  
   $ v^i = g^{ij} v_j $

4. Christoffel formula:  
   $ \Gamma^i_{jk}
   = \frac{1}{2} g^{i\ell}
   (\partial_j g_{k\ell} + \partial_k g_{j\ell} - \partial_\ell g_{jk}) $

5. covariant derivative of a vector:  
   $ \nabla_j v^i = \partial_j v^i + \Gamma^i_{jk} v^k $

6. divergence:  
   $ \nabla_i v^i = \frac{1}{\sqrt{|g|}} \partial_i(\sqrt{|g|} v^i) $

7. Laplace-Beltrami:  
   $ \Delta \phi = \frac{1}{\sqrt{|g|}} \partial_i(\sqrt{|g|} g^{ij} \partial_j \phi) $

8. geodesic equation:  
   $ \ddot{x}^i + \Gamma^i_{jk} \dot{x}^j \dot{x}^k = 0 $

9. curvature:  
   $ (\nabla_k \nabla_l - \nabla_l \nabla_k) v^i = R^i{}_{mkl} v^m $

These formulas are enough to begin solving many problems.

---

## 41. A Suggested Learning Sequence After This Crash Course

To deepen your understanding, study in this order:

1. tensor transformation laws
2. metric tensor and index raising/lowering
3. covariant derivative and Christoffel symbols
4. divergence and Laplace-Beltrami operator
5. geodesics
6. curvature tensors
7. applications to mechanics, electromagnetism, and relativity
8. differential forms and exterior calculus

---

## 42. Quick Practice Problems

Try these to internalize the ideas.

### Problem 1
Given polar coordinates with metric $ds^2 = dr^2 + r^2 d\theta^2$, compute $g^{ij}$ and $\det(g)$.

### Problem 2
For a scalar field $\phi(r,\theta)$, compute $\Delta \phi$ in polar coordinates using the Laplace-Beltrami formula.

### Problem 3
Show that $\nabla_i \phi = \partial_i \phi$ for a scalar but that the Hessian needs Christoffel corrections.

### Problem 4
Compute the nonzero Christoffel symbols for the 2-sphere with metric  
$ ds^2 = d\theta^2 + \sin^2\theta \, d\phi^2 $.

### Problem 5
Write the geodesic equations for the 2-sphere.

### Problem 6
Given a symmetric tensor $S_{ij}$, decompose it into trace and trace-free parts.

---

## 43. Final Intuition

Tensor calculus is not just “harder notation.” It is a disciplined way of describing quantities that remain meaningful under coordinate change.

Its core philosophy is:

- physical or geometric reality should not depend on coordinates
- coordinates are bookkeeping devices
- tensors encode invariant content
- covariant derivatives restore meaningful differentiation in curved settings

Once you internalize the distinction between:

- components versus geometric objects
- upper versus lower indices
- partial versus covariant derivatives
- flat-space coordinate effects versus true curvature

the subject becomes much more coherent.

---

## 44. One-Page Summary

- A tensor is defined by how it transforms under coordinate changes.
- Scalars have no indices, vectors have one, higher tensors have many.
- Upper indices are contravariant; lower indices are covariant.
- The metric $g_{ij}$ measures lengths and angles and raises/lowers indices.
- Partial derivatives of tensors are generally not tensors.
- Covariant derivatives fix this using Christoffel symbols.
- Christoffel symbols come from the metric for the Levi-Civita connection.
- Divergence, Laplacian, and geodesics all generalize naturally in tensor form.
- Curvature measures the nontrivial geometry of a space.
- Tensor calculus is the mathematical language behind continuum mechanics, geometry, and relativity.

---

## 45. Formula Sheet

### Transformations

$ v^{i'} = \frac{\partial x^{i'}}{\partial x^j} v^j $

$ \omega_{i'} = \frac{\partial x^j}{\partial x^{i'}} \omega_j $

### Metric

$ ds^2 = g_{ij} dx^i dx^j $

$ v_i = g_{ij} v^j $

$ v^i = g^{ij} v_j $

### Connection

$ \Gamma^i_{jk}
= \frac{1}{2} g^{i\ell}
(\partial_j g_{k\ell} + \partial_k g_{j\ell} - \partial_\ell g_{jk}) $

### Covariant Derivatives

$ \nabla_j v^i = \partial_j v^i + \Gamma^i_{jk} v^k $

$ \nabla_j \omega_i = \partial_j \omega_i - \Gamma^k_{ji} \omega_k $

$ \nabla_k T^i{}_j = \partial_k T^i{}_j + \Gamma^i_{k\ell} T^\ell{}_j - \Gamma^\ell_{kj} T^i{}_\ell $

### Divergence and Laplacian

$ \nabla_i v^i = \frac{1}{\sqrt{|g|}} \partial_i(\sqrt{|g|} v^i) $

$ \Delta \phi = \frac{1}{\sqrt{|g|}} \partial_i(\sqrt{|g|} g^{ij}\partial_j \phi) $

### Geodesics

$ \ddot{x}^i + \Gamma^i_{jk} \dot{x}^j \dot{x}^k = 0 $

### Curvature

$ R^i{}_{jkl}
= \partial_k \Gamma^i_{lj}
- \partial_l \Gamma^i_{kj}
+ \Gamma^i_{km}\Gamma^m_{lj}
- \Gamma^i_{lm}\Gamma^m_{kj} $

$ R_{jl} = R^i{}_{jil} $

$ R = g^{jl} R_{jl} $

---

## 46. Closing Note

A good practical definition of mastery is this:

You understand tensor calculus when you can start with a metric, compute the inverse metric, compute Christoffel symbols, take covariant derivatives, and derive geodesic, divergence, Laplacian, or curvature formulas without getting lost in index structure.

That is the transition from “recognizing formulas” to actually using the subject.