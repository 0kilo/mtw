# Comprehensive Crash Course on *Introduction to Electrodynamics* by David J. Griffiths

## 1. Purpose of this crash course

This document is a compact but comprehensive study guide to the core material traditionally covered in *Introduction to Electrodynamics* by David J. Griffiths. It is designed to help you:

- see the big picture of electrodynamics,
- understand the main physical ideas,
- learn the standard equations and how they connect,
- build intuition for solving typical problems,
- and prepare for deeper study, homework, or review.

The focus is on the standard undergraduate arc:

1. Vector analysis
2. Electrostatics
3. Potentials
4. Electric fields in matter
5. Magnetostatics
6. Magnetic fields in matter
7. Electrodynamics
8. Conservation laws
9. Electromagnetic waves
10. Potentials and gauge ideas
11. Radiation

This is not a substitute for working problems, but it gives you the conceptual backbone and formula structure of the subject.

---

## 2. The big picture of electrodynamics

Electrodynamics studies electric and magnetic fields, their sources, and how they evolve.

The sources are:

- electric charge density $ \rho $
- electric current density $ \mathbf{J} $

The fields are:

- electric field $ \mathbf{E} $
- magnetic field $ \mathbf{B} $

At the deepest level, classical electrodynamics is summarized by **Maxwell's equations**:

$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $

$ \nabla \cdot \mathbf{B} = 0 $

$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $

$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} $

Everything in introductory electrodynamics is, in some sense, unpacking these four equations.

They tell you:

- how charges create electric fields,
- why isolated magnetic monopoles do not appear in ordinary classical theory,
- how changing magnetic fields create electric fields,
- and how currents and changing electric fields create magnetic fields.

The force law that connects fields to matter is the **Lorentz force law**:

$ \mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B}) $

So the full story is:

- charges and currents generate fields,
- fields act back on charges and currents,
- and the whole system evolves self-consistently.

---

## 3. Mathematical foundation: vector analysis

Griffiths begins with vector calculus because electrodynamics is a field theory written in vector language.

### 3.1 Scalars and vectors

A scalar has magnitude only, like temperature $T$ or potential $V$.

A vector has magnitude and direction, like displacement $ \mathbf{r} $, electric field $ \mathbf{E} $, or magnetic field $ \mathbf{B} $.

### 3.2 Coordinate systems

You need fluency in:

- Cartesian coordinates: $ (x,y,z) $
- Cylindrical coordinates: $ (s,\phi,z) $
- Spherical coordinates: $ (r,\theta,\phi) $

Each is useful depending on symmetry:

- planes and boxes $\to$ Cartesian
- wires and cylinders $\to$ cylindrical
- spheres and point charges $\to$ spherical

### 3.3 Differential operators

#### Gradient

For a scalar field $f$,

$ \nabla f $

points in the direction of greatest increase of $f$.

#### Divergence

For a vector field $ \mathbf{A} $,

$ \nabla \cdot \mathbf{A} $

measures how much the field flows outward from a point.

#### Curl

For a vector field $ \mathbf{A} $,

$ \nabla \times \mathbf{A} $

measures local circulation or rotational tendency.

### 3.4 Integral theorems

Two theorems appear constantly:

#### Divergence theorem

$ \int_V (\nabla \cdot \mathbf{A})\, d\tau = \oint_S \mathbf{A}\cdot d\mathbf{a} $

This converts volume divergence into total flux through the boundary.

#### Stokes' theorem

$ \int_S (\nabla \times \mathbf{A})\cdot d\mathbf{a} = \oint_C \mathbf{A}\cdot d\mathbf{l} $

This converts curl through a surface into circulation around the boundary.

These are essential because Maxwell's equations can be written in both differential and integral form.

### 3.5 Dirac delta function

The delta function $ \delta(\mathbf{r}) $ is used to represent point sources.

For a point charge $q$ at the origin,

$ \rho(\mathbf{r}) = q\, \delta^3(\mathbf{r}) $

This is a compact and powerful way to write localized sources.

### 3.6 Helmholtz idea

A vector field is largely determined by its divergence and curl, together with boundary conditions.

This is one reason Maxwell's equations are so powerful: they specify the essential local structure of the electromagnetic field.

---

## 4. Electrostatics

Electrostatics studies electric fields produced by charges that are stationary in time.

### 4.1 Coulomb's law

The electric force between two point charges is

$ \mathbf{F} = \frac{1}{4\pi \varepsilon_0} \frac{q_1 q_2}{r^2}\, \hat{\mathbf{r}} $

Like charges repel. Opposite charges attract.

The electric field of a point charge $q$ at the origin is

$ \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0}\frac{q}{r^2}\hat{\mathbf{r}} $

### 4.2 Superposition

If there are many charges, fields add linearly:

$ \mathbf{E}_{\text{total}} = \sum_i \mathbf{E}_i $

For a continuous charge distribution,

$ \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0}\int \frac{\rho(\mathbf{r}')\, \hat{\mathbf{R}}}{R^2}\, d\tau' $

where

$ \mathbf{R} = \mathbf{r} - \mathbf{r}' $

and

$ R = |\mathbf{r} - \mathbf{r}'| $

### 4.3 Gauss's law

In integral form,

$ \oint_S \mathbf{E}\cdot d\mathbf{a} = \frac{Q_{\text{enc}}}{\varepsilon_0} $

In differential form,

$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $

This is one of the most useful equations in all of physics.

### 4.4 When Gauss's law is useful

Gauss's law is always true, but it is only easy to use directly when symmetry is high.

It works best for:

- spherical symmetry
- cylindrical symmetry
- planar symmetry

Classic results:

#### Point charge

$ E = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2} $

#### Infinite line charge with density $ \lambda $

$ E = \frac{\lambda}{2\pi \varepsilon_0 s} $

#### Infinite plane sheet with surface charge density $ \sigma $

$ E = \frac{\sigma}{2\varepsilon_0} $

#### Conducting sphere

Outside: same as point charge at center  
Inside conductor in electrostatic equilibrium: $ \mathbf{E} = 0 $

### 4.5 Conductors in electrostatic equilibrium

Important facts:

- $ \mathbf{E} = 0 $ inside a conductor in static equilibrium
- excess charge resides on the surface
- the conductor is an equipotential
- the field just outside is perpendicular to the surface
- just outside a conductor,

$ E_\perp = \frac{\sigma}{\varepsilon_0} $

where $ \sigma $ is the surface charge density

### 4.6 Boundary conditions for $ \mathbf{E} $

Across a surface charge density $ \sigma $,

$ E^\perp_{\text{above}} - E^\perp_{\text{below}} = \frac{\sigma}{\varepsilon_0} $

Tangentially in electrostatics,

$ \mathbf{E}_{\text{above}}^\parallel = \mathbf{E}_{\text{below}}^\parallel $

These conditions are extremely useful for interfaces.

---

## 5. Electric potential

Potential reformulates electrostatics in terms of a scalar function $V$.

### 5.1 Relation to electric field

In electrostatics,

$ \mathbf{E} = -\nabla V $

This means the electric field points downhill in potential.

### 5.2 Potential difference

$ V(\mathbf{b}) - V(\mathbf{a}) = - \int_{\mathbf{a}}^{\mathbf{b}} \mathbf{E}\cdot d\mathbf{l} $

In electrostatics this line integral is path independent, because

$ \nabla \times \mathbf{E} = 0 $

### 5.3 Potential of a point charge

$ V(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0} \frac{q}{r} $

### 5.4 Potential of a charge distribution

$ V(\mathbf{r}) = \frac{1}{4\pi \varepsilon_0}\int \frac{\rho(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\, d\tau' $

Often it is easier to compute $V$ first, then obtain $ \mathbf{E} $ from $ -\nabla V $.

### 5.5 Poisson's and Laplace's equations

From

$ \nabla \cdot \mathbf{E} = \rho/\varepsilon_0 $

and

$ \mathbf{E} = -\nabla V $

we get

$ \nabla^2 V = -\frac{\rho}{\varepsilon_0} $

This is **Poisson's equation**.

In regions with no charge, $ \rho = 0 $, so

$ \nabla^2 V = 0 $

This is **Laplace's equation**.

These are among the most important PDEs in physics.

### 5.6 Uniqueness theorems

A solution to Laplace's or Poisson's equation is uniquely determined once appropriate boundary conditions are specified.

This matters because if you guess a solution that satisfies:

- the equation, and
- the boundary conditions,

then you are done.

### 5.7 Method of images

This is a clever technique for conductor problems.

Example: point charge near a grounded conducting plane.

Instead of solving directly with induced charges, replace the conductor by an appropriate fictional image charge. The resulting potential in the physical region satisfies the correct boundary conditions.

The method works because of uniqueness, not because the image charge is physically real.

### 5.8 Separation of variables

For Laplace's equation in symmetric geometries, solutions are built by separating the variables.

Common cases:

- Cartesian boxes
- cylindrical problems
- spherical problems

In spherical symmetry, Legendre polynomials appear naturally.

---

## 6. Work, energy, and electrostatic energy

### 6.1 Work done by the field

For a charge $q$ moved through a potential difference,

$ \Delta U = q \Delta V $

### 6.2 Energy of a system of point charges

$ U = \frac{1}{4\pi \varepsilon_0} \sum_{i<j} \frac{q_i q_j}{r_{ij}} $

### 6.3 Energy of a continuous distribution

$ U = \frac{1}{2}\int \rho V\, d\tau $

Equivalent field form:

$ U = \frac{\varepsilon_0}{2}\int E^2\, d\tau $

This implies the electrostatic energy density is

$ u_E = \frac{\varepsilon_0}{2} E^2 $

This is a deep conceptual result: energy is stored in the field itself.

---

## 7. Multipole expansion

When you are far from a localized charge distribution, the potential can be expanded in powers of $1/r$.

### 7.1 General structure

$ V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\left( \frac{Q}{r} + \frac{\mathbf{p}\cdot \hat{\mathbf{r}}}{r^2} + \cdots \right) $

The first terms are:

- monopole term
- dipole term
- quadrupole term
- higher multipoles

### 7.2 Dipole moment

For point charges,

$ \mathbf{p} = \sum_i q_i \mathbf{r}_i $

For a continuous distribution,

$ \mathbf{p} = \int \mathbf{r}' \rho(\mathbf{r}')\, d\tau' $

### 7.3 Field of an ideal dipole

Potential:

$ V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}\cdot \hat{\mathbf{r}}}{r^2} $

Field:

$ \mathbf{E} = \frac{1}{4\pi\varepsilon_0}\frac{1}{r^3}\left[ 3(\mathbf{p}\cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{p} \right] $

### 7.4 Force and torque on a dipole

Torque:

$ \boldsymbol{\tau} = \mathbf{p}\times \mathbf{E} $

Potential energy:

$ U = -\mathbf{p}\cdot \mathbf{E} $

A dipole tends to align with the field.

---

## 8. Electric fields in matter

Now the subject turns to macroscopic matter, where charges can rearrange inside materials.

### 8.1 Polarization

A dielectric placed in an electric field develops dipoles. The dipole moment per unit volume is the **polarization**:

$ \mathbf{P} $

Polarization produces bound charges:

Volume bound charge:

$ \rho_b = -\nabla \cdot \mathbf{P} $

Surface bound charge:

$ \sigma_b = \mathbf{P}\cdot \hat{\mathbf{n}} $

### 8.2 Displacement field

To separate free and bound charge, define

$ \mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} $

Then Gauss's law becomes

$ \nabla \cdot \mathbf{D} = \rho_f $

or in integral form,

$ \oint \mathbf{D}\cdot d\mathbf{a} = Q_{f,\text{enc}} $

This is often much easier for matter problems.

### 8.3 Linear dielectrics

In a simple linear dielectric,

$ \mathbf{P} = \varepsilon_0 \chi_e \mathbf{E} $

so

$ \mathbf{D} = \varepsilon \mathbf{E} $

with

$ \varepsilon = \varepsilon_0(1+\chi_e) $

This introduces the relative permittivity.

### 8.4 Boundary conditions in matter

For $ \mathbf{D} $,

$ D^\perp_{\text{above}} - D^\perp_{\text{below}} = \sigma_f $

For $ \mathbf{E} $ tangentially,

$ \mathbf{E}_{\text{above}}^\parallel = \mathbf{E}_{\text{below}}^\parallel $

### 8.5 Capacitors and dielectric response

Dielectrics reduce the field for fixed free charge and increase capacitance.

For a parallel-plate capacitor,

$ C = \frac{\varepsilon A}{d} $

Energy can be written as

$ U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV $

---

## 9. Magnetostatics

Magnetostatics studies steady currents and time-independent magnetic fields.

### 9.1 Magnetic force

On a moving charge,

$ \mathbf{F}_B = q\, \mathbf{v}\times \mathbf{B} $

The magnetic force is always perpendicular to velocity, so it does no work on a point charge directly.

### 9.2 Force on a current element

$ d\mathbf{F} = I\, d\mathbf{l}\times \mathbf{B} $

### 9.3 Biot-Savart law

For steady current density $ \mathbf{J} $,

$ \mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}') \times \hat{\mathbf{R}}}{R^2}\, d\tau' $

For a filamentary current,

$ \mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi}\int \frac{d\mathbf{l}'\times \hat{\mathbf{R}}}{R^2} $

### 9.4 Ampere's law

Integral form:

$ \oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{enc}} $

Differential form:

$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} $

Also,

$ \nabla \cdot \mathbf{B} = 0 $

### 9.5 When Ampere's law is useful

Ampere's law is easiest with strong symmetry.

Classic results:

#### Infinite straight wire

$ B = \frac{\mu_0 I}{2\pi s} $

#### Infinite solenoid

Inside:

$ B \approx \mu_0 n I $

#### Toroid

$ B = \frac{\mu_0 N I}{2\pi s} $

inside the core region

### 9.6 Magnetic vector potential

Since

$ \nabla \cdot \mathbf{B} = 0 $

we can write

$ \mathbf{B} = \nabla \times \mathbf{A} $

This is analogous to writing $ \mathbf{E} = -\nabla V $ in electrostatics, though the magnetic case is more subtle because the curl representation is automatic from zero divergence.

In magnetostatics and Coulomb gauge,

$ \nabla \cdot \mathbf{A} = 0 $

and

$ \nabla^2 \mathbf{A} = -\mu_0 \mathbf{J} $

### 9.7 Boundary conditions for $ \mathbf{B} $

Since $ \nabla \cdot \mathbf{B} = 0 $,

$ B^\perp_{\text{above}} = B^\perp_{\text{below}} $

Tangential discontinuity comes from surface current $ \mathbf{K} $.

---

## 10. Magnetic fields in matter

Matter can also magnetize.

### 10.1 Magnetization

The magnetic dipole moment per unit volume is

$ \mathbf{M} $

It produces bound currents:

Volume bound current:

$ \mathbf{J}_b = \nabla \times \mathbf{M} $

Surface bound current:

$ \mathbf{K}_b = \mathbf{M}\times \hat{\mathbf{n}} $

### 10.2 Auxiliary field $ \mathbf{H} $

Define

$ \mathbf{H} = \frac{1}{\mu_0}\mathbf{B} - \mathbf{M} $

Then Ampere's law becomes

$ \nabla \times \mathbf{H} = \mathbf{J}_f $

or

$ \oint \mathbf{H}\cdot d\mathbf{l} = I_{f,\text{enc}} $

### 10.3 Linear magnetic materials

In simple media,

$ \mathbf{M} = \chi_m \mathbf{H} $

so

$ \mathbf{B} = \mu \mathbf{H} $

with

$ \mu = \mu_0(1+\chi_m) $

### 10.4 Comparison with dielectrics

The analogy is important:

- $ \mathbf{P} $ pairs with $ \mathbf{D} $
- $ \mathbf{M} $ pairs with $ \mathbf{H} $

But the analogy is not perfect, so it must be used carefully.

---

## 11. Electrodynamics: time-dependent fields

This is where electricity and magnetism become fully unified.

### 11.1 Faraday's law

A changing magnetic field induces an electric field:

$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $

Integral form:

$ \oint \mathbf{E}\cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} $

This is the basis of electromagnetic induction.

### 11.2 Motional emf versus transformer emf

Electromotive force can arise from:

- motion through a magnetic field, or
- a changing magnetic flux field

You must keep straight what is moving and what is varying in time.

### 11.3 Maxwell's displacement current

Ampere's law in its original form fails for time-dependent situations like charging capacitors.

Maxwell fixed this by adding the displacement-current term:

$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} $

This was the key step that made electromagnetic waves possible.

### 11.4 Continuity equation

Charge conservation requires

$ \frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{J} = 0 $

This follows directly from Maxwell's equations.

This is a major consistency check: electrodynamics automatically conserves charge.

---

## 12. Maxwell's equations in full

Here they are again, because everything centers on them.

### Differential form

$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $

$ \nabla \cdot \mathbf{B} = 0 $

$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $

$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} $

### Integral form

$ \oint_S \mathbf{E}\cdot d\mathbf{a} = \frac{Q_{\text{enc}}}{\varepsilon_0} $

$ \oint_S \mathbf{B}\cdot d\mathbf{a} = 0 $

$ \oint_C \mathbf{E}\cdot d\mathbf{l} = -\frac{d}{dt}\int_S \mathbf{B}\cdot d\mathbf{a} $

$ \oint_C \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0 \frac{d}{dt}\int_S \mathbf{E}\cdot d\mathbf{a} $

### Physical meanings

- first equation: electric charge is the source of electric flux
- second: no magnetic monopoles in classical theory
- third: changing magnetic fields produce circulating electric fields
- fourth: currents and changing electric fields produce circulating magnetic fields

---

## 13. Electromagnetic waves

This is one of the great triumphs of Maxwell theory.

### 13.1 Wave equation in vacuum

In vacuum, where $ \rho = 0 $ and $ \mathbf{J} = 0 $, Maxwell's equations imply

$ \nabla^2 \mathbf{E} = \mu_0\varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} $

$ \nabla^2 \mathbf{B} = \mu_0\varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} $

These are wave equations with speed

$ c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} $

This is the speed of light.

### 13.2 Plane waves

A typical plane wave traveling in direction $ \mathbf{k} $ looks like

$ \mathbf{E}(\mathbf{r},t) = \mathbf{E}_0 \cos(\mathbf{k}\cdot \mathbf{r} - \omega t) $

$ \mathbf{B}(\mathbf{r},t) = \mathbf{B}_0 \cos(\mathbf{k}\cdot \mathbf{r} - \omega t) $

with

$ \omega = ck $

### 13.3 Transverse nature

In vacuum plane waves:

- $ \mathbf{E} \perp \mathbf{B} $
- $ \mathbf{E} \perp \mathbf{k} $
- $ \mathbf{B} \perp \mathbf{k} $

and

$ B_0 = \frac{E_0}{c} $

Also,

$ \mathbf{B} = \frac{1}{\omega}\mathbf{k}\times \mathbf{E} $

### 13.4 Energy flow: Poynting vector

The electromagnetic energy flux is

$ \mathbf{S} = \frac{1}{\mu_0}\mathbf{E}\times \mathbf{B} $

This is the **Poynting vector**.

For a wave, it points in the direction of propagation.

### 13.5 Energy density

Total field energy density:

$ u = \frac{\varepsilon_0}{2}E^2 + \frac{1}{2\mu_0}B^2 $

For plane waves in vacuum, electric and magnetic contributions are equal on average.

### 13.6 Momentum and radiation pressure

Electromagnetic fields carry momentum.

Momentum density:

$ \mathbf{g} = \varepsilon_0\, \mathbf{E}\times \mathbf{B} $

Radiation exerts pressure on surfaces. This is a physical manifestation of field momentum.

---

## 14. Potentials and gauge transformations

### 14.1 Scalar and vector potentials

In general time-dependent electrodynamics,

$ \mathbf{B} = \nabla \times \mathbf{A} $

and

$ \mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t} $

These automatically satisfy Faraday's law.

### 14.2 Gauge freedom

The potentials are not unique.

If

$ \mathbf{A}' = \mathbf{A} + \nabla \Lambda $

$ V' = V - \frac{\partial \Lambda}{\partial t} $

then $ \mathbf{E} $ and $ \mathbf{B} $ remain unchanged.

This is called a **gauge transformation**.

### 14.3 Common gauges

#### Coulomb gauge

$ \nabla \cdot \mathbf{A} = 0 $

#### Lorenz gauge

$ \nabla \cdot \mathbf{A} + \mu_0 \varepsilon_0 \frac{\partial V}{\partial t} = 0 $

In Lorenz gauge, the potentials satisfy wave equations:

$ \nabla^2 V - \mu_0\varepsilon_0 \frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0} $

$ \nabla^2 \mathbf{A} - \mu_0\varepsilon_0 \frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J} $

Gauge freedom is one of the central conceptual ideas in field theory.

---

## 15. Retarded potentials

Because electromagnetic influence propagates at finite speed, the potentials at time $t$ depend on the sources at earlier times.

### 15.1 Retarded time

$ t_r = t - \frac{R}{c} $

where $R$ is the distance from source point to field point.

### 15.2 Retarded potentials

$ V(\mathbf{r},t) = \frac{1}{4\pi \varepsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{R}\, d\tau' $

$ \mathbf{A}(\mathbf{r},t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{R}\, d\tau' $

These are extremely important because they show how causality enters classical field theory.

Fields do not respond instantaneously to source changes at a distance.

---

## 16. Electromagnetic radiation

Accelerating charges radiate electromagnetic waves.

### 16.1 Static versus accelerated charges

- a stationary charge creates an electrostatic field
- a uniformly moving charge creates a transformed field pattern
- an accelerating charge emits radiation

The radiative part falls like $1/r$, while near-field terms fall faster.

### 16.2 Oscillating dipole

A standard introductory radiation source is the oscillating electric dipole.

Far away, the fields are transverse and behave like outgoing waves.

The radiated power depends on the second time derivative of the dipole moment.

### 16.3 Larmor formula

For a nonrelativistic accelerating point charge,

$ P = \frac{\mu_0 q^2 a^2}{6\pi c} $

This gives total radiated power.

Radiation is one of the most profound consequences of combining charges with finite-speed field propagation.

---

## 17. Conservation laws in electrodynamics

Electrodynamics has elegant conservation principles.

### 17.1 Charge conservation

$ \frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{J} = 0 $

Charge can flow, but it cannot disappear.

### 17.2 Energy conservation: Poynting theorem

A standard form is

$ \frac{\partial u}{\partial t} + \nabla \cdot \mathbf{S} = -\mathbf{J}\cdot \mathbf{E} $

where

$ u = \frac{\varepsilon_0}{2}E^2 + \frac{1}{2\mu_0}B^2 $

and

$ \mathbf{S} = \frac{1}{\mu_0}\mathbf{E}\times \mathbf{B} $

Interpretation:

- change in field energy inside a region
- plus net energy flow out through the boundary
- equals negative of work done on matter

This is one of the deepest equations in classical field theory.

### 17.3 Momentum conservation

The field carries momentum, and forces on matter are balanced by momentum changes in the field plus fluxes of momentum through space.

At the introductory level, the big takeaway is:
- fields are not just bookkeeping devices,
- they store and transport real energy and momentum.

---

## 18. Boundary conditions and interfaces

A recurring theme in Griffiths is how fields behave across boundaries.

### 18.1 Electric field

Normal component jump:

$ E^\perp_{\text{above}} - E^\perp_{\text{below}} = \frac{\sigma}{\varepsilon_0} $

Tangential component continuity in electrostatics:

$ \mathbf{E}_{\text{above}}^\parallel = \mathbf{E}_{\text{below}}^\parallel $

### 18.2 Magnetic field

Normal component continuity:

$ B^\perp_{\text{above}} = B^\perp_{\text{below}} $

Tangential jump from surface current:

$ \mathbf{B}_{\text{above}}^\parallel - \mathbf{B}_{\text{below}}^\parallel = \mu_0\, \mathbf{K}\times \hat{\mathbf{n}} $

or equivalently in the usual boundary-form arrangement.

### 18.3 Matter versions

For $ \mathbf{D} $ and $ \mathbf{H} $ you use free charge and free current rather than total microscopic charge/current.

These conditions are essential for solving piecewise-medium problems.

---

## 19. Relativity and electrodynamics

Even in an introductory treatment, an important message appears: classical electromagnetism points naturally toward special relativity.

### 19.1 Why relativity enters

Maxwell's equations predict a universal wave speed $c$.

This clashes with old Galilean ideas and leads historically and conceptually to special relativity.

### 19.2 Electric and magnetic fields are frame-dependent aspects of one structure

What looks purely electric in one frame may partly appear magnetic in another.

This is one reason electrodynamics is such a natural gateway to relativistic field theory.

### 19.3 Potentials and covariance

Later formulations show that $V$ and $ \mathbf{A} $ combine into a four-potential, and Maxwell's equations become compact in spacetime notation.

At the introductory Griffiths level, the main point is conceptual: relativity is not an optional add-on but deeply woven into electromagnetism.

---

## 20. Typical problem-solving workflow

When solving Griffiths-style problems, this workflow helps.

### Step 1: Identify the regime

Ask:

- electrostatics or magnetostatics?
- time-dependent or static?
- vacuum or matter?
- symmetry present or not?

### Step 2: Pick the right main tool

Use:

- Coulomb's law for direct integration in electrostatics
- Gauss's law when symmetry is strong
- potential methods when scalar formulation is easier
- Laplace/Poisson methods when boundary conditions matter
- Biot-Savart for direct magnetic integration
- Ampere's law when magnetic symmetry is strong
- Maxwell equations directly for time-dependent systems

### Step 3: Exploit symmetry aggressively

Symmetry is often the difference between a one-line solution and an impossible integral.

Look for:

- spherical symmetry
- cylindrical symmetry
- planar symmetry
- translational invariance
- azimuthal invariance

### Step 4: Check units

Electrodynamics is full of constants $ \varepsilon_0 $, $ \mu_0 $, and geometric factors.

Dimensional analysis catches many mistakes.

### Step 5: Check limiting behavior

Ask:

- what happens far away?
- what happens at the center?
- does the answer reduce to a known special case?
- does it blow up where it should not?

### Step 6: Use boundary conditions carefully

A guessed solution is often correct if it:
- solves the field equation, and
- satisfies the boundary conditions

### Step 7: Interpret physically

After the math, ask:
- what do the field lines look like?
- where is the energy?
- what is doing work?
- what is conserved?

---

## 21. Common conceptual pitfalls

### Pitfall 1: Confusing field with force

The field is $ \mathbf{E} $ or $ \mathbf{B} $.  
The force on charge $q$ is derived from the field.

### Pitfall 2: Using Gauss's law without symmetry

Gauss's law is always true, but it only solves for $E$ easily in highly symmetric cases.

### Pitfall 3: Mixing up source point and field point

When integrating over charge or current distributions, keep $ \mathbf{r} $ and $ \mathbf{r}' $ distinct.

### Pitfall 4: Forgetting that electrostatic potential is only path independent when $ \nabla \times \mathbf{E} = 0 $

In time-dependent settings, induced electric fields are not generally conservative.

### Pitfall 5: Treating $ \mathbf{D} $ and $ \mathbf{H} $ as more fundamental than $ \mathbf{E} $ and $ \mathbf{B} $

$ \mathbf{D} $ and $ \mathbf{H} $ are useful auxiliary fields, especially in matter, but $ \mathbf{E} $ and $ \mathbf{B} $ are the more direct physical fields.

### Pitfall 6: Forgetting that magnetic force does no work on a point charge

Because $ \mathbf{v}\cdot (\mathbf{v}\times \mathbf{B}) = 0 $.

### Pitfall 7: Neglecting the displacement-current term

Without it, Maxwell's equations are inconsistent for time-varying situations.

### Pitfall 8: Confusing near fields with radiation fields

Radiation terms dominate far away and scale differently from static-like near-field terms.

---

## 22. Core formulas to memorize

Here is a compact formula list.

### Electrostatics

$ \mathbf{E} = \frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf{r}')\hat{\mathbf{R}}}{R^2}\, d\tau' $

$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $

$ \oint \mathbf{E}\cdot d\mathbf{a} = \frac{Q_{\text{enc}}}{\varepsilon_0} $

$ \mathbf{E} = -\nabla V $

$ \nabla^2 V = -\frac{\rho}{\varepsilon_0} $

### Dipoles

$ \mathbf{p} = \int \mathbf{r}'\rho(\mathbf{r}')\, d\tau' $

$ V_{\text{dip}} = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}\cdot \hat{\mathbf{r}}}{r^2} $

$ \boldsymbol{\tau} = \mathbf{p}\times \mathbf{E} $

$ U = -\mathbf{p}\cdot \mathbf{E} $

### Dielectrics

$ \rho_b = -\nabla \cdot \mathbf{P} $

$ \sigma_b = \mathbf{P}\cdot \hat{\mathbf{n}} $

$ \mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} $

$ \nabla \cdot \mathbf{D} = \rho_f $

### Magnetostatics

$ \mathbf{B} = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}')\times \hat{\mathbf{R}}}{R^2}\, d\tau' $

$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} $

$ \oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{enc}} $

$ \nabla \cdot \mathbf{B} = 0 $

$ \mathbf{B} = \nabla \times \mathbf{A} $

### Magnetic matter

$ \mathbf{J}_b = \nabla \times \mathbf{M} $

$ \mathbf{K}_b = \mathbf{M}\times \hat{\mathbf{n}} $

$ \mathbf{H} = \frac{1}{\mu_0}\mathbf{B} - \mathbf{M} $

$ \nabla \times \mathbf{H} = \mathbf{J}_f $

### Electrodynamics

$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $

$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t} $

$ \frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{J} = 0 $

### Potentials

$ \mathbf{B} = \nabla \times \mathbf{A} $

$ \mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t} $

### Waves

$ \nabla^2 \mathbf{E} = \mu_0\varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} $

$ \nabla^2 \mathbf{B} = \mu_0\varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} $

$ c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} $

### Energy and momentum

$ u = \frac{\varepsilon_0}{2}E^2 + \frac{1}{2\mu_0}B^2 $

$ \mathbf{S} = \frac{1}{\mu_0}\mathbf{E}\times \mathbf{B} $

$ \mathbf{g} = \varepsilon_0 \mathbf{E}\times \mathbf{B} $

---

## 23. A chapter-by-chapter mental map

A useful way to organize Griffiths is this:

### Vector analysis
Learn the language.

### Electrostatics
Charges create static electric fields.

### Potentials
Scalar reformulation of electrostatics.

### Electric fields in matter
Matter polarizes; introduce $ \mathbf{P} $ and $ \mathbf{D} $.

### Magnetostatics
Currents create static magnetic fields.

### Magnetic fields in matter
Matter magnetizes; introduce $ \mathbf{M} $ and $ \mathbf{H} $.

### Electrodynamics
Time variation couples electricity and magnetism.

### Conservation laws
Fields carry energy and momentum.

### Electromagnetic waves
Maxwell predicts light.

### Potentials and fields
Gauge freedom and retarded potentials.

### Radiation
Accelerating charges emit waves.

This sequence is not arbitrary. It is a carefully staged ascent toward Maxwell theory in its full form.

---

## 24. Deep conceptual lessons of the book

Griffiths is not just a collection of formulas. The book teaches several deep ideas.

### 24.1 Fields are real physical objects

They are not merely shortcuts for action at a distance.

They:
- store energy,
- carry momentum,
- propagate through space,
- and mediate interactions.

### 24.2 Symmetry is a problem-solving superpower

Most elegant solutions come from recognizing symmetry early.

### 24.3 Potentials are often simpler than fields

The scalar and vector potentials are not merely optional; they often reveal structure more clearly.

### 24.4 Matter response is organized through auxiliary fields

$ \mathbf{D} $ and $ \mathbf{H} $ are bookkeeping devices that separate free from bound sources.

### 24.5 Time dependence changes everything

The moment fields vary in time, conservative electrostatics gives way to full electrodynamics.

### 24.6 Electromagnetism unifies electricity, magnetism, optics, and relativity

This is one of the great unifications in physics.

---

## 25. What to study next after Griffiths

After mastering this material, common next steps are:

1. more advanced boundary-value methods
2. special relativity in four-vector form
3. covariant electrodynamics
4. waveguides and optics
5. radiation theory in more depth
6. Green's functions
7. advanced classical mechanics and field theory
8. quantum mechanics
9. quantum electrodynamics later on

A strong next conceptual step is learning to rewrite Maxwell's theory in relativistic notation.

---

## 26. Final takeaway

The central idea of *Introduction to Electrodynamics* is that all classical electromagnetic phenomena arise from a small set of elegant principles:

- charge and current generate fields,
- fields satisfy Maxwell's equations,
- fields exert Lorentz forces on matter,
- and fields themselves carry energy, momentum, and waves.

The subject begins with Coulomb's law and simple static fields, but it culminates in an extraordinary synthesis:

- light is an electromagnetic wave,
- electromagnetic influence propagates causally at speed $c$,
- electric and magnetic fields are deeply unified,
- and classical field theory becomes one of the foundational languages of modern physics.

If you keep the following backbone in mind, you will keep the subject organized:

1. Learn vector calculus.
2. Master electrostatics and potential theory.
3. Understand matter response through $ \mathbf{P} $ and $ \mathbf{D} $.
4. Master magnetostatics and vector potential.
5. Understand matter response through $ \mathbf{M} $ and $ \mathbf{H} $.
6. Learn full Maxwell theory.
7. Understand energy, momentum, and waves.
8. Learn potentials, gauges, and radiation.

That is the Griffiths electrodynamics story in one line:

**charges and currents create fields, fields act on matter, and Maxwell's equations knit the whole structure into a unified theory of classical electromagnetism.**
