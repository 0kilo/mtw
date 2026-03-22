# Detailed Summary of Chapter 5: *Stress-Energy Tensor and Conservation Laws*

## Source and scope
This summary covers the attached chapter titled **"Stress-Energy Tensor and Conservation Laws"**. The chapter introduces the **stress-energy tensor** as the object that measures local energy density, momentum density, energy flux, and stress, and then uses it to formulate conservation of 4-momentum and angular momentum in a geometric, frame-independent way.

The chapter has two layers:

- a rapid **Track 1** summary in **Box 5.1**;
- a more developed **Track 2** treatment that explains how 3-volumes, stress, flux, and integral/differential conservation laws fit together.

## Executive summary
The chapter's central claim is that spacetime is filled with a local **flow of 4-momentum**, and the machine that measures that flow is the **stress-energy tensor** $T$. Given a 3-volume in spacetime, $T$ tells how much 4-momentum crosses it. Given an observer, $T$ tells that observer the locally measured energy density, momentum density, pressure, shear stress, and energy flux.

From this viewpoint, many familiar laws become different faces of one statement:

- local conservation of charge is written as $\nabla \cdot J = 0$;
- local conservation of energy-momentum is written as $\nabla \cdot T = 0$.

The chapter develops this law in several equivalent forms:

- as a geometric machine acting on 3-volumes;
- as component formulas such as $T^{00}$, $T^{0j}$, and $T^{jk}$;
- as an integral conservation law over a closed 3-surface in spacetime;
- as the differential law $T^{\mu\alpha}{}_{,\alpha} = 0$.

It then applies the formalism to particle swarms, perfect fluids, and electromagnetic fields, and shows that the symmetry $T^{\mu\nu} = T^{\nu\mu}$ leads directly to conservation of angular momentum.

## High-level roadmap of the chapter
The chapter unfolds in the following conceptual order:

1. It introduces the stress-energy tensor as a device for measuring 4-momentum flow through 3-volumes.
2. It shows how special choices of 3-volume produce the physical meanings of the tensor's components.
3. It computes $T$ for a swarm of particles.
4. It specializes that result to a perfect fluid.
5. It presents the electromagnetic stress-energy tensor.
6. It proves that the stress-energy tensor is symmetric.
7. It states conservation of 4-momentum in integral form.
8. It derives the differential conservation law $\nabla \cdot T = 0$.
9. It applies that law to Newtonian hydrodynamics and matter-field interaction.
10. It uses the symmetry of $T$ to define and conserve angular momentum.

---

## 1. Track-1 overview: why the chapter matters
The chapter opens with Wheeler's famous slogan in mind: geometry tells matter how to move, and matter tells geometry how to curve. But before matter can curve spacetime, one needs a tool that says **how much mass-energy is present locally**. That tool is the stress-energy tensor.

The overview emphasizes that the tensor stores, at each event in spacetime, the energy density, momentum density, and stresses associated with **all matter and all nongravitational fields**. The rest of the chapter explains how to read that information off from the tensor and how to use it to express conservation laws.

A practical point is also made early: the chapter is preparatory. Its ideas are not merely formal. They will be needed later for conservation laws, gravitation theory, and angular momentum.

---

## 2. Three-dimensional volumes and the definition of the stress-energy tensor

### Spacetime as a river of 4-momentum
The chapter begins the technical development with a vivid picture: spacetime contains a flowing **river of 4-momentum**. Particles carry 4-momentum along their world lines, and continuous media and fields create a smooth continuum version of that same flow.

The question then becomes: how does one measure how much 4-momentum crosses a chosen 3-dimensional slice of spacetime? The answer is the stress-energy tensor $T$.

### The 3-volume and its volume 1-form
Take a small spacetime parallelepiped with edges $A$, $B$, and $C$. Its associated **volume 1-form** is

$\Sigma_\mu = \epsilon_{\mu\alpha\beta\gamma} A^\alpha B^\beta C^\gamma$.

This 1-form encodes both the size and orientation of the 3-volume. The chapter stresses that the positive sense across the volume is defined by the positive sense of $\Sigma$.

### The defining action of the tensor
Once the 3-volume 1-form is chosen, the stress-energy tensor acts on it to produce the 4-momentum crossing that 3-volume:

$T(\cdot, \Sigma) = p$.

This is the defining relation. The tensor is the machine that turns an oriented 3-volume into a 4-momentum vector.

If one wants the projection of that 4-momentum along a vector $w$ or a 1-form $\alpha$, one inserts those in the remaining slot:

- $T(w, \Sigma) = w \cdot p$,
- $T(\alpha, \Sigma) = \langle \alpha, p \rangle$.

This is the chapter's most important conceptual move. It defines $T$ not first by a matrix of components, but by what it **does**.

### Figure 5.1: the geometric picture of momentum flow
**Figure 5.1** is the chapter's basic visual anchor. It shows the river of 4-momentum and three kinds of 3-volumes across which momentum can flow:

- the interior of a soap box at one instant of time;
- the world sheet swept out by the top of a box over a short time interval;
- an arbitrary 3-volume with edges $A$, $B$, and $C$.

The figure makes clear that the same tensor can measure momentum contained in a box, momentum flowing out through a face, or momentum crossing any other oriented 3-surface.

### Special case: the interior of a soap box
For a box at rest in its own instantaneous rest frame, the chapter identifies the volume 1-form as

$\Sigma = -V u$,

where $V$ is the box volume in its rest frame and $u$ is the box's 4-velocity.

Therefore the total 4-momentum inside the box is

$p_{\text{box}} = T(\cdot, \Sigma) = -V T(\cdot, u)$,

or in components,

$(p^\alpha)_{\text{box}} = -V T^\alpha{}_{\beta} u^\beta$.

Projecting this onto the box's 4-velocity gives the energy in the box, and dividing by $V$ gives the energy density measured in the box's rest frame:

$E/V = T(u,u)$.

That formula is the chapter's first major physical interpretation of the tensor.

### Special case: a box top swept out in time
If the top of area $\mathcal A$ is followed during a short interval $\Delta t$, then the swept 3-volume has volume 1-form

$\Sigma = \mathcal A \, \Delta t \, \sigma$,

where $\sigma$ is an outward-pointing unit 1-form normal to the world sheet. The 4-momentum flowing out through the top is then

$p_{\text{flows out}} = \mathcal A \, \Delta t \, T(\cdot, \sigma)$.

This is the flux interpretation of $T$.

---

## 3. Components of the stress-energy tensor
Once $T$ is defined geometrically, the chapter turns to its component interpretation in a particular Lorentz frame.

### Time-time component
The most important component is

$T^{00} = T(e_0, e_0)$,

which is the **density of mass-energy** measured by the observer associated with that Lorentz frame.

### Space-time components
The components $T^{j0}$ are interpreted as **momentum density**. Specifically,

$\frac{p^\mu}{V} = T^{\mu 0}$,

so the spatial components $T^{j0}$ give the density of the $j$-component of momentum.

### Time-space components
The components $T^{0k}$ are interpreted as **energy flux**: the $k$-component of energy crossing a unit area per unit time.

### Space-space components
The components $T^{jk}$ are the components of **stress**. The chapter gives several equivalent interpretations:

- $T^{jk}$ is the $k$-component of flux of $j$-momentum;
- equivalently, it is the $j$-component of force across a unit surface whose normal points in the $k$ direction.

This is the bridge between tensor language and the older language of pressures, tensions, and shears.

### Physical summary of the matrix entries
In a Lorentz frame, the chapter organizes the entries of the tensor as follows:

- $T^{00}$: energy density,
- $T^{j0}$: momentum density,
- $T^{0k}$: energy flux,
- $T^{jk}$: stress.

This is the dictionary that makes later examples readable.

---

## 4. Stress-energy tensor for a swarm of particles
The chapter next derives $T$ for a collection of particles by grouping nearby particles into categories labeled by $A$, each category having common rest mass $m_{(A)}$, 4-velocity $u_{(A)}$, and 4-momentum $p_{(A)} = m_{(A)} u_{(A)}$.

Let $N_{(A)}$ be the number of category-$A$ particles per unit volume measured in their own rest frame. Then the **number-flux vector** for that category is

$S_{(A)} = N_{(A)} u_{(A)}$.

In a frame where these particles have ordinary velocity $v_{(A)}$, the time component gives the number density and the spatial components give the particle flux.

From this, the chapter obtains the category-$A$ stress-energy tensor:

$T_{(A)} = m_{(A)} N_{(A)} u_{(A)} \otimes u_{(A)} = p_{(A)} \otimes S_{(A)}$.

The total number-flux vector and total stress-energy tensor are then sums over categories:

- $S = \sum_A N_{(A)} u_{(A)}$,
- $T = \sum_A m_{(A)} N_{(A)} u_{(A)} \otimes u_{(A)} = \sum_A p_{(A)} \otimes S_{(A)}$.

This section is important because it shows that $T$ is not an abstract geometric ornament. It is exactly what one gets by adding up the local contributions of moving matter.

---

## 5. Stress-energy tensor for a perfect fluid

### From an ideal gas to a perfect fluid
The chapter then specializes to an isotropic gas of noninteracting particles in the frame where the gas is locally at rest. Isotropy forces the off-diagonal space-space components to vanish and the diagonal ones to be equal, so in the rest frame the tensor has the form

$T_{\alpha\beta} = \begin{pmatrix}
\rho & 0 & 0 & 0 \\
0 & p & 0 & 0 \\
0 & 0 & p & 0 \\
0 & 0 & 0 & p
\end{pmatrix}$.

Here $\rho$ is the rest-frame density of mass-energy and $p$ is the isotropic pressure.

### Covariant form
Rewriting that rest-frame matrix in frame-independent language gives one of the chapter's central formulas:

$T = p g + (\rho + p) u \otimes u$,

or in components,

$T_{\alpha\beta} = (\rho + p) u_\alpha u_\beta + p g_{\alpha\beta}$.

### Interpretation
This formula is exact not only for an ideal gas but for any **perfect fluid**, meaning a fluid with no viscosity, no heat conduction, and no shear stress in its rest frame. The section emphasizes that $\rho$ is the full rest-frame mass-energy density. It can include not only rest mass and kinetic energy, but also compression energy, binding energy, and other contributions.

This result becomes the standard matter model used throughout relativistic hydrodynamics and general relativity.

---

## 6. Electromagnetic stress-energy

### Figure 5.2: Faraday stresses at work
**Figure 5.2** shows a classic demonstration: an aluminum ring above an electromagnet rises when alternating current is applied. The figure is used to motivate the idea that electromagnetic fields themselves carry energy, momentum, tension, and pressure.

### Maxwell's stress-energy tensor
The chapter writes the electromagnetic stress-energy tensor as

$4\pi T^{\mu\nu} = F^{\mu\alpha} F^\nu{}_{\alpha} - \frac{1}{4} \eta^{\mu\nu} F_{\alpha\beta} F^{\alpha\beta}$.

In a Lorentz frame, the corresponding components are

- $T^{00} = (E^2 + B^2)/8\pi$,
- $T^{0j} = T^{j0} = (E \times B)^j/4\pi$,
- $T^{jk} = \frac{1}{4\pi}\left[-(E^jE^k + B^jB^k) + \frac{1}{2}(E^2 + B^2)\delta^{jk}\right]$.

The chapter interprets these as follows:

- the field stores energy density $(E^2 + B^2)/8\pi$,
- the field transports energy through the Poynting vector $(E \times B)/4\pi$,
- the field exerts tension along field lines and pressure perpendicular to them.

This section deepens the physical idea that fields are genuine carriers of mass-energy and momentum.

---

## 7. Symmetry of the stress-energy tensor
The chapter then explains why all the previously encountered stress-energy tensors are symmetric:

$T^{\mu\nu} = T^{\nu\mu}$.

### Equality of energy flux and momentum density
First, the equality $T^{0j} = T^{j0}$ is linked to the equivalence of energy and mass. Energy flux is the transport of mass-energy, and therefore it is the same physical quantity as momentum density.

### Torque balance and the symmetry of stress
Second, the chapter considers a tiny cube and computes the torque on it due to the surrounding stresses. If the off-diagonal stresses were unequal, the torque would scale too strongly as the cube shrinks, producing absurdly large angular accelerations. To avoid that, the stresses must satisfy

$T^{jk} = T^{kj}$.

This is the mechanical core of the symmetry proof.

The symmetry of $T$ will later be what makes angular momentum conservation work so cleanly.

---

## 8. Conservation of 4-momentum: integral formulation

### The closed 3-surface law
The chapter next formulates conservation of energy-momentum over a finite spacetime region $\mathcal V$ bounded by a closed 3-surface $\partial \mathcal V$. The total outward 4-momentum flux across that closed boundary must vanish:

$\oint_{\partial \mathcal V} T \cdot d^3\Sigma = 0$.

In component form,

$\oint_{\partial \mathcal V} T^{\mu\alpha} \, d^3\Sigma_\alpha = 0$.

This says that whatever 4-momentum flows into the region must flow out again. None can disappear inside.

### Figure 5.3: geometric cases of conservation
**Figure 5.3** is the chapter's major conservation-law figure. It shows a four-dimensional region of spacetime bounded by a closed 3-surface and then illustrates several special cases:

- two constant-time slices joined at infinity,
- two different spacelike hypersurfaces,
- a box whose walls move between two states,
- the general case of a closed boundary.

The point of the figure is that the same integral law covers all of these situations.

### Important special cases
From the integral law, the chapter extracts several useful conclusions:

- the total 4-momentum in all space is conserved in time;
- the total 4-momentum is the same when evaluated on different spacelike slices, provided no flux leaks in from infinity;
- the change in a system's 4-momentum equals the net 4-momentum entering through its boundary.

This section is one of the clearest demonstrations in the chapter that geometric conservation laws unify many familiar physical statements.

---

## 9. Conservation of 4-momentum: differential formulation
The chapter then passes from the integral law to the local law using Gauss's theorem in four dimensions:

$0 = \oint_{\partial \mathcal V} T^{\mu\alpha} \, d^3\Sigma_\alpha = \int_{\mathcal V} T^{\mu\alpha}{}_{,\alpha} \, d^4x$.

Because this must hold for every 4-volume $\mathcal V$, the integrand must vanish everywhere:

$T^{\mu\alpha}{}_{,\alpha} = 0$.

In geometric notation, this becomes

$\nabla \cdot T = 0$.

The chapter describes this as the **differential formulation of 4-momentum conservation** and also as the **equation of motion for stress-energy**, since it constrains how the stress-energy distribution may evolve.

This is the chapter's master equation.

---

## 10. Sample applications of $\nabla \cdot T = 0$

### Nearly Newtonian perfect fluid
For a fluid with low speeds $|v| \ll 1$ and small pressure $p \ll \rho$, the perfect-fluid tensor reduces to

- $T^{00} \approx \rho$,
- $T^{0j} = T^{j0} \approx \rho v^j$,
- $T^{jk} \approx \rho v^j v^k + p \delta^{jk}$.

Then the local conservation law splits into two familiar classical equations.

The time component gives the continuity equation:

$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho v) = 0$.

The spatial components give Euler's equation:

$\frac{\partial v}{\partial t} + (v \cdot \nabla) v = -\frac{1}{\rho} \nabla p$.

This is an important conceptual payoff. The relativistic conservation law contains Newtonian fluid mechanics as an approximation.

### Matter exchanging energy-momentum with electromagnetic fields
The chapter next considers a vibrating rubber block with electrically charged beads embedded in it and interacting with an electromagnetic field. Here neither the matter part nor the field part is separately conserved, but the total is:

$\nabla \cdot (T_{\text{block}} + T_{\text{em field}}) = 0$.

For the electromagnetic field,

$T^{\mu\nu}_{(\text{em field}),\nu} = -F^{\mu\alpha} J_\alpha$.

The time component says the field loses energy at the rate it does electrical work on matter, and the spatial components say the field loses momentum at the Lorentz-force density rate. The matter gains exactly that same energy-momentum. This is the local bookkeeping law for field-matter interaction.

---

## 11. Angular momentum
The final major topic is angular momentum.

### Angular momentum tensor density
Choose an origin event with coordinates $a^\alpha$. The chapter defines the angular-momentum tensor density by

$\mathcal J^{\alpha\beta\gamma} = (x^\alpha - a^\alpha) T^{\beta\gamma} - (x^\beta - a^\beta) T^{\alpha\gamma}$.

Because $T$ is symmetric and divergence-free, this quantity has vanishing divergence:

$\mathcal J^{\alpha\beta\gamma}{}_{,\gamma} = 0$.

Hence its integral over any closed 3-surface vanishes.

### Total angular momentum on a spacelike slice
On a constant-time hypersurface, the conserved total angular momentum is

$J^{\alpha\beta} = \int \mathcal J^{\alpha\beta 0} \, dx \, dy \, dz$.

The chapter notes that this has the same structure as the Newtonian expression $J = r \times p$, but in a covariant tensor form.

### Intrinsic and orbital parts
Using the center-of-mass world line, the chapter decomposes angular momentum into intrinsic and orbital pieces. In the notation of Box 5.6, one may write

$J^{\mu\nu} = U_\alpha S_\beta \epsilon^{\alpha\beta\mu\nu} + Y^\mu P^\nu - Y^\nu P^\mu$,

where:

- $P$ is the total 4-momentum,
- $U = P/M$ is the 4-velocity of the center of mass,
- $S$ is the intrinsic spin-like angular momentum 4-vector,
- $Y$ measures displacement from the center-of-mass world line.

The chapter ends with a geometrically suggestive bound: for a system with intrinsic angular momentum magnitude $|S|$ and rest mass $M$, the minimum possible radius in its rest frame satisfies

$r_0 \ge |S|/M$.

So angular momentum places a lower bound on how tightly the system can be localized.

---

## Key figures and what they contribute

### Figure 5.1
This figure introduces the chapter's central picture: the **river of 4-momentum** flowing through spacetime and the different kinds of 3-volumes across which that momentum can be measured. It is the key visual aid for understanding why the stress-energy tensor is fundamentally a flux machine.

### Figure 5.2
This figure shows **Faraday stresses** at work in an electromagnet-and-ring setup. Its purpose is to make the electromagnetic stress tensor physically intuitive: the field is not passive background structure but an active carrier of energy, momentum, tension, and pressure.

### Figure 5.3
This figure illustrates the **integral conservation law** over closed 3-surfaces in spacetime. It ties together conservation in time, invariance under choice of hypersurface, and the relation between change of system momentum and flux through boundaries.

---

# Detailed summaries of the boxes

## Box 5.1 — Chapter 5 summarized
This box is the fast summary for readers who want the minimum working picture.

### A. Stress-energy tensor as a machine
The box describes the stress-energy tensor as a **linear, symmetric machine with two vector slots**. Depending on what is inserted, it produces different measurable quantities.

1. Insert the observer's 4-velocity $u$ in one slot and leave the other empty. The result is the 4-momentum density seen by that observer.
2. Insert $u$ in one slot and a spacelike unit normal $n$ in the other. The result is the component of 4-momentum density flowing in the $n$ direction.
3. Insert $u$ in both slots. The result is the observer's measured **mass-energy density**:
   $T(u,u)$.
4. Insert two spacelike basis vectors $e_j$ and $e_k$ of the observer's Lorentz frame. The result is the stress component $T_{jk}$.

The box thereby compresses the whole component interpretation of $T$ into one conceptual rule: the tensor tells an observer what local energy, momentum, and stress look like.

### B. Stress-energy tensor for a perfect fluid
The box then states the perfect-fluid formula directly:

$T = (\rho + p) u \otimes u + p g$.

It explains that a perfect fluid is one whose rest frame has density $\rho$ and isotropic pressure $p$, with no shear stresses, anisotropic pressures, or viscosity. In the fluid rest frame, the energy density is $\rho$, the momentum density vanishes, and the spatial stress components are simply $p\delta_{jk}$.

### C. Conservation of energy-momentum
Finally, the box presents the conservation law in the most compact form:

$\nabla \cdot T = 0$.

This is explicitly compared with charge conservation $\nabla \cdot J = 0$. The box's message is that the stress-energy tensor is not only a measuring device but the central object in the local conservation law for 4-momentum.

---

## Box 5.2 — Three-dimensional volumes
This box supplies the geometric details behind the 3-volume language used in the chapter.

### A. General parallelepiped
A 3-volume is built from three edges $A$, $B$, and $C$. Their chosen order matters because orientation matters. The box defines:

- the **volume trivector** $A \wedge B \wedge C$;
- the associated **volume 1-form** $\Sigma_\mu = \epsilon_{\mu\alpha\beta\gamma} A^\alpha B^\beta C^\gamma$.

It emphasizes that the positive sense of the 3-volume is the positive sense of the 1-form $\Sigma$ and that changing the order of the edges reverses the orientation.

The box also notes a standard convention: for a spacelike 3-volume, the standard orientation is the one whose positive sense points toward the future, corresponding to a right-handed ordered triple of spatial edges.

### B. 3-volumes of arbitrary shape
Arbitrary 3-volumes are handled by decomposing them into unions of small parallelepipeds. This reinforces that the parallelepiped construction is not restrictive; it is the local building block of all 3-surfaces.

### C. Interior of a soap box
The box works out the soap-box example used in the main text. In the box rest frame, the edges are purely spatial, and the resulting volume 1-form has time component equal to the ordinary spatial volume. Reexpressed geometrically, the result is

$\Sigma = -V u$

for standard orientation, or $\Sigma = +V u$ with reversed orientation.

This example explains why inserting the box's 4-velocity into $T$ gives the 4-momentum content of the box.

### D. 3-volume swept out by the top of a box
The box next analyzes the 3-volume generated by a 2-dimensional top surface during a proper time interval $\Delta t$. If the top has area $\mathcal A$ and outward unit 1-form $\sigma$, then

$\Sigma = \mathcal A \, \Delta t \, \sigma$.

This is the geometric basis for interpreting $T$ as a flux tensor through moving surfaces.

Overall, Box 5.2 is the structural backbone of the chapter. It explains what sort of geometric object the tensor acts on and why different choices of 3-volume correspond to different physical measurements.

---

## Box 5.3 — Volume integrals, surface integrals, and Gauss's theorem in component notation
This box translates the chapter's integral geometry into explicit coordinate formulas.

### A. Volume integrals in spacetime
The box defines a 4-volume element using four edge vectors $A$, $B$, $C$, and $D$ and shows that the 4-volume is given by a determinant, equivalently by the oriented spacetime volume form. In a standard Lorentz frame, the elementary 4-volume becomes

$d^4\Omega = dt \, dx \, dy \, dz$.

It then defines the integral of a tensor field over a 4-dimensional region of spacetime in the natural Riemann-sum way.

### B. Integrals over 3-surfaces in spacetime
For a 3-surface parameterized by coordinates $(a,b,c)$, the box constructs the corresponding 3-volume element and writes the surface integral of a tensor over that 3-surface in component notation. It also presents an equivalent Jacobian form.

This gives concrete formulas for the hypersurface integrals used in the main conservation law.

### C. Gauss's theorem stated
The box states the spacetime version of Gauss's theorem:

$\int_{\mathcal V} S^\alpha{}_{\beta,\alpha} \, d^4\Omega = \oint_{\partial \mathcal V} S^\alpha{}_{\beta} \, d^3\Sigma_\alpha$.

This is the theorem that connects the integral and differential conservation laws.

### D. Proof of Gauss's theorem
The box then sketches the proof by splitting the boundary into "up" and "down" pieces and showing explicitly that the surface terms match the integrated derivative terms. The proof is coordinate-based but geometrically transparent.

Box 5.3 is therefore the technical bridge between the chapter's visual argument and its formal tensor calculus.

---

## Box 5.4 — Every integral is the integral of a form; Gauss's theorem in the language of forms
This box is written for readers who have studied Chapter 4 and want to connect the present chapter to differential forms.

### Every relevant integral is an integral of a differential form
The box explains that the 4-volume element $d^4\Omega$ and the 3-surface element $d^3\Sigma_\mu$ are naturally differential forms. Therefore the tensor integrals in Chapter 5 can be interpreted as integrals of tensor-valued forms.

### Tensor-valued forms and basis factoring
Because the basis vectors and basis 1-forms of a global Lorentz frame are constant in flat spacetime, they can be pulled outside the integral sign. This lets one write expressions such as surface integrals of $S \cdot d^3\Sigma$ and volume integrals of $(\nabla \cdot S) d^4\Omega$ in a compact differential-form language.

### Gauss's theorem as a Stokes theorem
The box states Gauss's theorem in this language as

$\int_{\mathcal V} (\nabla \cdot S) \, d^4\Omega = \oint_{\partial \mathcal V} S \cdot d^3\Sigma$.

It then shows how this is just an application of generalized Stokes' theorem once the tensor quantity is viewed as a tensor-valued form.

### Glossary of notations
The last part of the box gives a compact notation glossary linking current density 3-forms, field 2-forms, energy-momentum density 3-forms, and angular-momentum density 3-forms.

The conceptual message is important: Chapter 5's tensor integrals are not foreign to Chapter 4's exterior calculus. They are direct continuations of it.

---

## Box 5.5 — Newtonian hydrodynamics reviewed
This box reviews the classical perfect-fluid equations and shows how they fit into the stress-energy framework.

### Newton's law for a fluid element
Applying Newton's law to a small fixed mass of fluid gives

$\frac{dv}{dt} = -\frac{1}{\rho} \nabla p$.

This is the acceleration of a fluid particle due to the pressure gradient.

### Euler's equation
The box then converts the time derivative following the fluid into a derivative at fixed spatial position, yielding

$\frac{\partial v}{\partial t} + (v \cdot \nabla) v = -\frac{1}{\rho} \nabla p$.

This is Euler's equation for a perfect fluid.

### Entropy advection and mass conservation
Two additional equations complete the classical perfect-fluid description:

- constant specific entropy along each fluid worldline,
- conservation of mass,
  $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho v) = 0$.

### Momentum flux and stress
On the continuation page, the box interprets the Newtonian stress tensor as the sum of two pieces:

- a convective part $\rho v_i v_k$,
- a pressure part $\delta_{ik} p$.

So the Newtonian stress tensor is

$T^{ik} = \rho v_i v_k + \delta_{ik} p$.

Together with the momentum density $T^{0i} = \rho v_i$ and mass density $T^{00} = \rho$, this leads to the continuity-like conservation laws

$\partial T^{i\mu}/\partial x^\mu = 0$

and

$\partial T^{0\mu}/\partial x^\mu = 0$.

### Relativistic approximation
The box closes by showing that these Newtonian quantities are exactly the low-velocity, low-pressure approximation to the relativistic perfect-fluid tensor.

This box is important because it makes the relativistic formalism feel familiar: the relativistic stress-energy tensor is the covariant upgrade of the classical continuum-mechanics stress tensor.

---

## Box 5.6 — Angular momentum
This box is the chapter's compact summary of angular momentum in stress-energy language.

### A. Definition of angular momentum
Choose a spacelike hypersurface $S$ and an origin event with coordinates $a^\alpha$. The total angular momentum on $S$ about that origin is defined by integrating the angular-momentum density over the hypersurface:

$J^{\mu\nu} = \int_S \mathcal J^{\mu\nu\alpha} \, d^3\Sigma_\alpha$,

with

$\mathcal J^{\mu\nu\alpha} = (x^\mu - a^\mu) T^{\nu\alpha} - (x^\nu - a^\nu) T^{\mu\alpha}$.

For a constant-time slice this reduces to the familiar spatial integral over $\mathcal J^{\mu\nu 0}$.

### B. Conservation of angular momentum
If $T^{\mu\nu}{}_{,\nu} = 0$ and $T^{\mu\nu}$ is symmetric, then $\mathcal J^{\mu\nu\alpha}{}_{,\alpha} = 0$. Therefore the total angular momentum is independent of the spacelike hypersurface on which it is computed.

### C. Change of origin
If the reference point is shifted by $b^\alpha$, then angular momentum changes according to

$J^{\mu\nu}(a_1) - J^{\mu\nu}(a_0) = -b^\mu P^\nu + b^\nu P^\mu$.

So changing origin only changes the orbital part, in direct analogy with Newtonian mechanics.

### D. Intrinsic angular momentum
In the system rest frame, with center of mass at $x_{\text{CM}}$, the intrinsic angular momentum is the angular momentum about an event on the center-of-mass world line. Its spatial part reduces to the familiar integral of position relative to the center of mass crossed with momentum density. The corresponding covariant quantity is an intrinsic angular momentum 4-vector $S^\mu$ orthogonal to the total 4-velocity.

### E. Decomposition into intrinsic and orbital parts
The total angular momentum about an arbitrary event splits into

- an intrinsic part carried by $S$,
- an orbital part determined by the displacement from the center-of-mass world line and the total 4-momentum $P$.

The box also gives formulas for reconstructing the center-of-mass displacement from $J$ and $P$, and for recovering $S$ from $J$ and the system's 4-velocity.

Finally, the exercise that follows develops a physically striking result: if energy density is everywhere nonnegative, then for a given rest mass $M$ and intrinsic angular momentum magnitude $|S|$, the system must have minimum size

$r_{0\min} = |S|/M$.

This gives angular momentum a direct geometric meaning as a lower bound on localization.

---

## Closing synthesis
Chapter 5 introduces one of the most important objects in relativistic physics. The stress-energy tensor $T$ is at once:

- a local ledger of energy, momentum, and stress,
- a machine for measuring 4-momentum flux through 3-volumes,
- the source language for perfect fluids, particle swarms, and electromagnetic fields,
- the heart of both integral and differential conservation laws,
- and, through its symmetry, the generator of angular-momentum conservation.

In compact form, the chapter's central laws are:

- $p = T(\cdot, \Sigma)$,
- $T = p g + (\rho + p) u \otimes u$ for a perfect fluid,
- $4\pi T^{\mu\nu}_{\text{em}} = F^{\mu\alpha}F^\nu{}_{\alpha} - \frac{1}{4}\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}$,
- $\oint_{\partial \mathcal V} T \cdot d^3\Sigma = 0$,
- $\nabla \cdot T = 0$.

The overall lesson is that conservation laws in relativity are best understood geometrically. Matter and fields do not merely possess energy and momentum; they carry them through spacetime in a structured way, and the stress-energy tensor is the mathematical object that captures that structure.