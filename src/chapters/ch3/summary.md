# Chapter 3 Detailed Summary: The Electromagnetic Field

## Overall purpose of the chapter

Chapter 3 introduces electromagnetism in the geometric language of relativity. Its central idea is that the electric field $\mathbf{E}$ and magnetic field $\mathbf{B}$ are not fundamentally separate objects. Instead, they are frame-dependent parts of a single spacetime object: the electromagnetic field tensor, called **Faraday** and denoted $F$.

The chapter develops this idea in five stages:

1. It reinterprets the Lorentz force law as the operational definition of the electromagnetic field.
2. It introduces tensors in general, treating them as multilinear “machines” that take vectors and 1-forms as inputs.
3. It contrasts the ordinary “3 + 1” split into space and time with the more economical geometric spacetime view.
4. It shows how Maxwell’s equations become compact and frame-independent when written in tensor form.
5. It develops a toolkit for working with tensors: gradients, contractions, divergence, transpose, symmetrization, antisymmetrization, wedge products, duals, vector potentials, gauge transformations, and the electromagnetic stress-energy tensor.

A major conceptual theme runs throughout the chapter: **geometric objects are primary; frame-dependent components are secondary**.

---

## Key figures and visual anchors

Although this chapter contains few conventional diagrams, it has several important visual reference items:

- **pp. 72-73 (Box 3.1 and the tensor matrices):** operational determination of the field from test-particle accelerations, followed by the matrix form of the electromagnetic tensor.
- **pp. 73-74:** the explicit matrices for $F^\alpha{}_\beta$ and $F_{\alpha\beta}$, which visually display how $\mathbf{E}$ and $\mathbf{B}$ fit into one antisymmetric tensor.
- **p. 77 (Box 3.2):** the metric written in four parallel “languages,” connecting geometric notation, component notation, and the line element.
- **p. 85 (Box 3.3):** a compact “index gymnastics” formula sheet summarizing the chapter’s main tensor manipulations.

---

## Section 3.1 - The Lorentz force and the electromagnetic field tensor

The chapter begins by contrasting the **impulsive** momentum changes of collisions (from Chapter 2) with the **continuous** change in momentum of a charged particle under electric and magnetic forces. The key physical law is the Lorentz force law.

In ordinary three-dimensional notation, it is written as

$ \dfrac{d\mathbf{p}}{dt} = e(\mathbf{E} + \mathbf{v} \times \mathbf{B}) $.

This form is familiar and useful, but the author argues that it is not yet fully geometric, because:

- it uses the spatial momentum $\mathbf{p}$ rather than the full energy-momentum 4-vector,
- it is written relative to a particular observer’s time coordinate $t$,
- and it artificially separates electric and magnetic fields.

The geometric reformulation uses the particle’s own proper time $\tau$ and its 4-velocity $u$. The force law becomes

$ \dfrac{dp}{d\tau} = eF(u) $,

where $F$ is the electromagnetic field tensor (Faraday). In components,

$ \dfrac{dp^\alpha}{d\tau} = e F^\alpha{}_\beta u^\beta $.

This is the central move of the chapter: the electromagnetic field is redefined as a **linear map from 4-velocity to 4-force**.

### Why this matters

This formulation makes several things clear at once:

- the force law is frame-independent in form,
- the electric and magnetic fields are united,
- and the “field” is not an arbitrary collection of six numbers but a single antisymmetric geometric object.

### Components of the electromagnetic tensor

By comparing the geometric law with the ordinary Lorentz force law and the energy-change law, the chapter identifies the components of $F^\alpha{}_\beta$ as

$ F^\alpha{}_\beta =
\begin{pmatrix}
0 & E_x & E_y & E_z \\
E_x & 0 & B_z & -B_y \\
E_y & -B_z & 0 & B_x \\
E_z & B_y & -B_x & 0
\end{pmatrix}. $

Lowering an index with the metric gives the more common covariant version

$ F_{\alpha\beta} =
\begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & B_z & -B_y \\
E_y & -B_z & 0 & B_x \\
E_z & B_y & -B_x & 0
\end{pmatrix}. $

These matrices are visually important because they show that $\mathbf{E}$ and $\mathbf{B}$ are not separate frame-independent entities. Only the combined object $F$ has invariant geometric meaning.

### Main takeaway from Section 3.1

The Lorentz force law does more than predict motion. It also provides the operational meaning of the field itself. The electromagnetic field tensor is the geometric object that packages all the measurable electric and magnetic influences into one spacetime structure.

---

## Box 3.1 - Lorentz force law as both definer of fields and predictor of motions

This box explains in operational detail how one could determine the electromagnetic field from particle accelerations.

The basic comparison is between:

- electromagnetism, where acceleration is related to $F_{\alpha\beta}$ through
  $ \dfrac{d^2 x^\alpha}{d\tau^2} = \dfrac{e}{m} F^\alpha{}_\beta u^\beta $,
- and gravity, where relative acceleration is related to curvature.

### Core idea

To determine the six independent field components (three electric, three magnetic), one uses suitably chosen test particles.

- **First test particle:** choose a Lorentz frame in which it is instantaneously at rest. Then the magnetic field has no effect, so the three measured acceleration components give directly $E_x$, $E_y$, and $E_z$.
- **Second test particle:** choose it moving along a chosen axis (say the $x$-direction). Its response reveals two magnetic components, here $B_y$ and $B_z$.
- **A third particle is still needed** to determine the remaining magnetic component $B_x$, because the acceleration component along the particle’s direction of motion repeats already-known electric information rather than isolating the missing magnetic piece.

So the box makes a subtle but important point: **two test particles are not enough** in general to determine all six field components.

### Least-squares formulation

Rather than treating particles one by one, the box proposes using $N$ particles simultaneously and fitting the six unknown components of $F_{\alpha\beta}$ by least squares. For the $K$th particle, define the discrepancy between observed and predicted acceleration by

$ \ddot{u}_\alpha^{\,K} - \dfrac{e}{m} F_{\alpha\beta} u^{\beta,K} = \delta a_\alpha^{\,K}. $

Then minimize the summed squared discrepancy

$ S = \sum_k \eta^{\alpha\beta} \delta a_\alpha^{\,K} \delta a_\beta^{\,K}. $

This operational viewpoint is one of the chapter’s strongest conceptual points: the field is not merely an abstract mathematical object; it is what one infers from systematic acceleration measurements.

### Why this box matters

The box shows that the Lorentz force law plays a double role:

1. **Definer of fields** - it tells us what electric and magnetic fields mean experimentally.
2. **Predictor of motion** - once those fields are known, it predicts the motion of other test particles.

---

## Section 3.2 - Tensors in all generality

After introducing the electromagnetic field tensor, the chapter broadens the discussion to tensors in general.

The author emphasizes that tensors should be thought of as **linear machines**. A tensor takes in vectors and/or 1-forms and produces either a scalar or another tensorially meaningful output.

A general tensor $H$ of rank $(n,m)$ is defined as a multilinear object with $n$ slots for 1-forms and $m$ slots for vectors, giving a real number

$ H(\sigma, \lambda, \ldots, \beta, u, v, \ldots, w). $

### Important conceptual point

The chapter argues that there is no deep conceptual divide between tensors that “output vectors” and tensors that “output scalars.” A vector-valued tensor can be reinterpreted as a scalar-valued tensor by inserting an extra 1-form slot. This reinforces the idea that the same tensor can be expressed in several equivalent ways depending on what is inserted into it.

### Components of a tensor

For a tensor $S$ of rank $(2,1)$, components in a chosen frame are defined by inserting basis 1-forms and basis vectors:

$ S^{\alpha\beta}{}_\gamma \equiv S(\omega^\alpha, \omega^\beta, e_\gamma). $

Once the components are known, the tensor’s action on arbitrary inputs follows by multilinearity. For example,

$ S(\sigma,\rho,v) = S^{\alpha\beta}{}_\gamma \sigma_\alpha \rho_\beta v^\gamma. $

So the components are not the tensor itself; they are the numerical instructions for how the tensor acts in one particular frame.

### Lorentz transformation law

If one changes frames, the tensor itself remains the same geometric object, but its components transform. The chapter writes the component transformation law schematically as

$ S^{\mu\nu'}{}_{\lambda'} = S^{\alpha\beta}{}_\gamma \Lambda^\mu{}_\alpha \Lambda^\nu{}_\beta \Lambda^\gamma{}_{\lambda'}. $

The details depend on index placement, but the general rule is consistent: **each index gets its own transformation matrix**.

### Raising and lowering indices

Using the metric $\eta_{\mu\nu}$, one may convert vectors to 1-forms and vice versa, or more generally shift indices up and down. For example,

$ S^\alpha{}_{\beta\gamma} = \eta_{\beta\mu} S^{\alpha\mu}{}_\gamma, \qquad
S^{\alpha\mu}{}_\gamma = \eta^{\mu\beta} S^\alpha{}_{\beta\gamma}. $

This is not a trivial notational device; it changes how the tensor is presented while referring to the same underlying object.

### Algebra of tensors

The chapter also notes that tensors of the same type can be added and multiplied by scalars, exactly because they are multilinear functions. This prepares the reader for later operations such as contraction, symmetrization, and tensor products.

### Main takeaway from Section 3.2

A tensor is best understood as a multilinear geometric machine. Components, index positions, and transformation rules are ways of expressing that machine in a chosen coordinate system.

---

## Box 3.2 - The metric in different languages

This box is an important conceptual translation guide. It shows that one and the same object, the metric $g$, can be described in several mathematically equivalent ways.

### A. Geometric language

The metric is first described abstractly as a symmetric bilinear map that takes two vectors and returns their scalar product:

$ g(u,v) = u \cdot v. $

This is the cleanest coordinate-free definition.

### B. Component language

In a specific Lorentz frame, the scalar product is computed using metric components:

$ u \cdot v = \eta_{\mu\nu} u^\mu v^\nu. $

This is the familiar indexed version and is how actual calculations are often carried out.

### C. Coordinate-based geometric language

The same metric can also be written as a tensor built from basis 1-forms:

$ g = \eta_{\mu\nu}\,\omega^\mu \otimes \omega^\nu
   = \eta_{\mu\nu}\,dx^\mu \otimes dx^\nu. $

This version makes explicit that the metric is itself a tensor field.

### D. Connection to the line element

The box then connects the metric to the elementary line element:

$ ds^2 = \eta_{\mu\nu} dx^\mu dx^\nu. $

The important conceptual point is that the metric tensor and the line element are not different physical objects. The metric has the **potential** to assign squared length to any displacement vector; once a specific infinitesimal displacement $\xi$ is inserted, it yields the actual squared length

$ \xi^2 = \eta_{\mu\nu} \xi^\mu \xi^\nu. $

### Why this box matters

This box teaches the reader to move flexibly between four perspectives:

- geometric,
- component-based,
- coordinate tensor form,
- and line-element notation.

That flexibility is essential for reading relativity texts, because different authors move between these languages without warning.

---

## Section 3.3 - Three-plus-one view versus geometric view

This section argues that Einstein’s geometric spacetime view is not merely elegant; it is computationally and conceptually superior.

### The 3 + 1 viewpoint

In the ordinary split into space and time, one works with separate electric and magnetic fields and writes the Lorentz force as

$ \dfrac{d\mathbf{p}}{dt} = e(\mathbf{E} + \mathbf{v} \times \mathbf{B}). $

But this description depends on the observer’s frame. When one changes Lorentz frames, $\mathbf{E}$ and $\mathbf{B}$ mix into each other.

### Transformation of electric and magnetic fields

For a boost, the chapter writes the transformation law schematically as

$ \bar{\mathbf{E}}_{\parallel} = \mathbf{E}_{\parallel}, \qquad
\bar{\mathbf{E}}_{\perp} = \gamma(\mathbf{E}_{\perp} + \boldsymbol{\beta} \times \mathbf{B}), $

$ \bar{\mathbf{B}}_{\parallel} = \mathbf{B}_{\parallel}, \qquad
\bar{\mathbf{B}}_{\perp} = \gamma(\mathbf{B}_{\perp} - \boldsymbol{\beta} \times \mathbf{E}). $

So electric and magnetic fields are frame-relative decompositions of the same underlying tensor.

### Geometric viewpoint

In the geometric view, one simply says that electromagnetism is represented by a rank-2 antisymmetric tensor $F$, and that a charged particle feels a force

$ \dfrac{dp}{d\tau} = eF(u). $

That is the whole story. The complicated 3 + 1 transformation formulas appear only when one insists on decomposing the geometric object into frame-dependent electric and magnetic pieces.

### Main lesson of Section 3.3

The geometric formulation is more fundamental and easier to use. It derives the 3 + 1 formulas with much less effort, while the reverse direction is cumbersome. What looks complicated in separate space-and-time language becomes simple when viewed as a relation between spacetime objects.

---

## Section 3.4 - Maxwell’s equations

This section shifts from the question “How do fields act on charges?” to the question “How do fields themselves behave?”

The chapter starts with the simplest Maxwell equation in a particular Lorentz frame:

$ \nabla \cdot \mathbf{B} = 0. $

This is the statement that there are no free magnetic monopoles.

### Deriving Faraday’s law from covariance

The clever argument is that since this law must hold in **all** Lorentz frames, it must also hold in an infinitesimally boosted frame. By expanding the transformed fields and derivatives, the chapter extracts new information from the requirement of covariance. The result is the time-dependent law

$ \dfrac{\partial \mathbf{B}}{\partial t} + \nabla \times \mathbf{E} = 0. $

Thus magnetostatics and one of the dynamical Maxwell equations are shown to be two parts of a single relativistically covariant structure.

### Geometric magnetic Maxwell law

The unified geometric form is

$ F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0. $

In coordinate-free notation this is written as

$ dF = 0, $

or equivalently

$ \nabla \cdot {}^\ast F = 0. $

This single tensor equation contains both:

- $ \nabla \cdot \mathbf{B} = 0 $,
- $ \dfrac{\partial \mathbf{B}}{\partial t} + \nabla \times \mathbf{E} = 0 $.

### Electric Maxwell equations

The remaining pair are

$ \nabla \cdot \mathbf{E} = 4\pi \rho, $

$ \dfrac{\partial \mathbf{E}}{\partial t} - \nabla \times \mathbf{B} = -4\pi \mathbf{J}. $

These too are shown to unify into one tensor equation:

$ F^{\alpha\beta}{}_{,\beta} = 4\pi J^\alpha, $

where the 4-current is

$ J^0 = \rho, \qquad (J^1,J^2,J^3) = \text{current density components}. $

In coordinate-free language this becomes

$ d{}^\ast F = 4\pi {}^\ast J, $

or equivalently

$ \nabla \cdot F = 4\pi J. $

### Main takeaway from Section 3.4

Maxwell’s four equations are not four unrelated laws. They are the frame-split expressions of **two** geometric tensor equations:

- $ dF = 0 $,
- $ \nabla \cdot F = 4\pi J $.

This is one of the chapter’s main achievements.

---

## Section 3.5 - Working with tensors

This long section provides the main computational toolkit for tensor calculus in the spacetime setting.

### 1. Gradient

Given a tensor field $S$, its gradient $\nabla S$ describes how it changes from point to point. If $S$ has rank 3, then $\nabla S$ has rank 4. The chapter defines it operationally by comparing the value of $S$ at nearby points separated by a displacement $\xi$.

For example,

$ \nabla S(u,v,w,\xi) \approx \partial_\xi S(u,v,w). $

In components, the entries of $\nabla S$ are simply the partial derivatives of the components of $S$. The key conceptual point is that **taking a gradient raises tensor rank by 1**.

### 2. Contraction

Contraction lowers rank by pairing one upstairs and one downstairs index and summing over them. For a fourth-rank tensor $R$, contracting its first and third slots gives a second-rank tensor $M$.

Conceptually, contraction extracts part of a tensor’s content by identifying two slots. In component language, it is the familiar operation of summing over repeated upper/lower indices.

### 3. Divergence

Divergence is defined as a gradient followed by contraction. For a tensor $S$, the divergence on the first slot is a new tensor with components schematically of the form

$ S^\alpha{}_{\beta\gamma,\alpha}. $

This operation will later be crucial for expressing conservation laws.

### 4. Transpose

Transpose simply swaps selected slots. For example, if $N$ is formed by transposing the second and third slots of $S$, then

$ N(u,v,w) = S(u,w,v). $

### 5. Symmetrization and antisymmetrization

A tensor is **symmetric** if interchanging selected inputs does not change its value, and **antisymmetric** if such an interchange reverses the sign.

The chapter emphasizes that any tensor can be decomposed into symmetric and antisymmetric parts by combining it with its transposes.

This is especially important for electromagnetism because the electromagnetic field tensor is antisymmetric:

$ F_{\alpha\beta} = F_{[\alpha\beta]}, \qquad F_{(\alpha\beta)} = 0. $

### 6. Wedge product

The wedge product is the antisymmetrized tensor product. For two vectors,

$ u \wedge v \equiv u \otimes v - v \otimes u. $

For two 1-forms,

$ \alpha \wedge \beta \equiv \alpha \otimes \beta - \beta \otimes \alpha. $

From three vectors one similarly constructs a trivector $u \wedge v \wedge w$.

The wedge product is not just formal notation. It provides a clean test of linear dependence:

- if $u$ and $v$ are collinear, then $u \wedge v = 0$;
- if $w$ lies in the plane of $u$ and $v$, then $w \wedge u \wedge v = 0$.

So wedge products encode geometric independence.

### 7. Duality and the Levi-Civita tensor

The chapter introduces the Levi-Civita tensor $\epsilon$, the completely antisymmetric rank-4 tensor of spacetime. It is used to define the duals of antisymmetric tensors.

Examples include

$ {}^\ast J_{\alpha\beta\gamma} = J^\mu \epsilon_{\mu\alpha\beta\gamma}, $

$ {}^\ast F_{\alpha\beta} = \dfrac{1}{2} F^{\mu\nu}\epsilon_{\mu\nu\alpha\beta}, $

$ {}^\ast B_\alpha = \dfrac{1}{3!} B^{\mu\nu\rho}\epsilon_{\mu\nu\rho\alpha}. $

A very important property is that taking the dual twice returns the original object up to a sign:

$ {}^{\ast\ast}J = J, \qquad {}^{\ast\ast}F = -F, \qquad {}^{\ast\ast}B = B. $

This explains why the dual of a 2-form in four-dimensional spacetime is again a 2-form.

### 8. Geometric Maxwell equations revisited

Using dual notation, the chapter restates Maxwell’s equations geometrically:

- magnetic pair: $ \nabla \cdot {}^\ast F = 0 $,
- electric pair: $ \nabla \cdot F = 4\pi J $.

This shows the deep formal symmetry between the two halves of electromagnetism.

### 9. Vector potential and gauge freedom

The chapter then introduces the vector potential $A$, from which the electromagnetic field tensor is derived by antisymmetrized differentiation:

$ F = -(\text{antisymmetric part of }\nabla A), $

that is,

$ F_{\mu\nu} = A_{\nu,\mu} - A_{\mu,\nu}. $

In a specific Lorentz frame this gives the familiar field formulas

$ \mathbf{B} = \nabla \times \mathbf{A}, \qquad
\mathbf{E} = -\dfrac{\partial \mathbf{A}}{\partial t} - \nabla A^0. $

The potential is not unique. Gauge transformations

$ A_{\text{new}} = A_{\text{old}} + d\phi $

leave $F$ unchanged. One may impose the Lorenz gauge

$ \nabla \cdot A = 0, $

after which the potential satisfies the wave equation

$ \Box A = -4\pi J. $

This introduces a powerful formulation of electromagnetism in terms of potentials rather than fields directly.

### 10. Electromagnetic stress-energy tensor

Finally, the chapter defines the symmetric second-rank stress-energy tensor of the electromagnetic field:

$ T^{\mu\nu} = \dfrac{1}{4\pi}\left(F^{\mu\alpha}F^\nu{}_\alpha - \dfrac{1}{4}\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}\right). $

This tensor packages energy density, momentum density, and stress carried by the electromagnetic field.

By taking its divergence and using Maxwell’s equations, the chapter arrives at

$ T^{\mu\nu}{}_{,\nu} = -F^{\mu\alpha}J_\alpha. $

This equation expresses the exchange of energy-momentum between fields and matter. The divergence of the field’s stress-energy is the negative of the force density exerted on charge-current.

### Main takeaway from Section 3.5

This section turns tensor notation into a practical toolset. It also completes the chapter’s conceptual arc: electromagnetism is not just a force law but a full relativistic field theory with field equations, potentials, gauge freedom, and energy-momentum content.

---

## Box 3.3 - Techniques of index gymnastics

This box is essentially a compact reference sheet for tensor manipulation. It does not introduce a new concept so much as summarize the translation rules between geometric operations and component calculations.

### What the box collects

The box gathers formulas for:

- computing tensor components by inserting basis vectors and basis 1-forms,
- reconstructing a tensor from its components and basis tensors,
- raising and lowering indices with the metric,
- performing contractions,
- building tensor products,
- computing squared lengths like $A^2 = A^\alpha A_\alpha$,
- using the metric and its inverse to obtain the Kronecker delta,
- taking gradients and divergences,
- commuting gradients with index raising/lowering,
- differentiating tensor products,
- symmetrizing and antisymmetrizing tensors,
- and constructing duals via the Levi-Civita tensor.

### Why this box matters

Its real purpose is to train the reader to move between two modes of thought:

1. **geometric meaning** - what operation is being performed on the tensor as an object,
2. **component execution** - how to carry that operation out with indices.

The chapter repeatedly insists that index manipulation should not become empty formalism. The indices are useful only insofar as they faithfully encode geometric operations.

### Conceptual value of the box

The box shows that “index gymnastics” is not a separate subject from geometry; it is the bookkeeping system that lets one extract computational consequences from geometric definitions.

---

## Consolidated chapter takeaways

Chapter 3 accomplishes several major conceptual unifications:

### 1. Electric and magnetic fields are one object

$\mathbf{E}$ and $\mathbf{B}$ are not fundamental separately. They are observer-dependent parts of a single antisymmetric tensor $F$.

### 2. Maxwell’s equations are fundamentally tensor equations

The familiar four 3-dimensional Maxwell equations condense into two geometric equations:

$ dF = 0, \qquad \nabla \cdot F = 4\pi J. $

### 3. Tensor notation is not cosmetic

The tensor framework makes covariance obvious, simplifies transformations, and reveals why the laws of electromagnetism take the same form in every Lorentz frame.

### 4. Potentials and gauge freedom arise naturally

The vector potential $A$ generates $F$, gauge transformations leave physics unchanged, and Lorenz gauge reduces the potential equations to a wave equation.

### 5. Electromagnetic fields carry energy and momentum

The stress-energy tensor $T^{\mu\nu}$ shows that fields themselves store and transport physical quantities, and that they exchange energy-momentum with charged matter.

---

## Short concluding summary

Chapter 3 is a foundational bridge chapter. It starts with the familiar Lorentz force law and ends with a fully geometric account of electromagnetism in spacetime language. Along the way it teaches the reader how to think about tensors as geometric machines, how to translate between geometric and component languages, how Maxwell’s equations become elegant in tensor form, and how electromagnetism naturally leads to potentials, gauge invariance, and stress-energy.

If Chapter 2 emphasized motion and collisions, Chapter 3 shows that in relativity the correct language for fields is not separate “electric” and “magnetic” pictures, but unified spacetime geometry.