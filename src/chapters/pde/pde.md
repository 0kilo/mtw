# Comprehensive Crash Course on *Partial Differential Equations: An Introduction* by Walter A. Strauss

## 1. Purpose of this crash course

This document is a compact but comprehensive study guide to the core material traditionally covered in *Partial Differential Equations: An Introduction* by Walter A. Strauss. It is designed to help you:

- see the big structure of partial differential equations,
- understand the major equation types and why they matter,
- learn the standard solution methods,
- build intuition for boundary conditions and physical interpretation,
- and create a strong bridge to deeper study.

The focus is on the standard undergraduate-to-early-graduate arc associated with Strauss-style PDE courses:

1. First-order PDEs and characteristics
2. Second-order linear PDE classification
3. The wave equation
4. The heat equation
5. Laplace's equation and harmonic functions
6. Fourier series and separation of variables
7. Sturm-Liouville theory
8. Fourier transform methods
9. Green's functions
10. Nonhomogeneous problems and boundary-value methods
11. Physical modeling and qualitative understanding

This is not a substitute for doing problems, but it gives you the conceptual backbone and formula structure of the subject.

---

## 2. What a PDE is and why it matters

A **partial differential equation** is an equation involving an unknown function of several variables and its partial derivatives.

Examples:

- $u_t + c u_x = 0$
- $u_{tt} = c^2 u_{xx}$
- $u_t = k u_{xx}$
- $u_{xx} + u_{yy} = 0$

These equations arise because physical systems depend on both **space** and **time**, or on several spatial variables at once.

Typical applications include:

- vibrations of strings and membranes
- diffusion of heat
- fluid flow
- electrostatics and gravitation
- quantum mechanics
- wave propagation
- elasticity
- population dynamics
- probability and stochastic processes

The central idea of PDEs is that local differential laws determine global behavior once you specify suitable **initial conditions** and **boundary conditions**.

---

## 3. The big picture: the three canonical PDEs

Much of an introductory PDE course revolves around three model equations.

### 3.1 The wave equation

$ u_{tt} = c^2 u_{xx} $

This models propagation with finite speed, such as:

- vibrating strings
- sound waves
- elastic disturbances

It is the basic **hyperbolic** equation.

### 3.2 The heat equation

$ u_t = k u_{xx} $

This models diffusion and smoothing, such as:

- heat flow
- diffusion of particles
- random spreading processes

It is the basic **parabolic** equation.

### 3.3 Laplace's equation

$ u_{xx} + u_{yy} = 0 $

This models equilibrium or steady-state behavior, such as:

- steady temperature
- electrostatic potential
- gravitational potential
- incompressible potential flow

It is the basic **elliptic** equation.

A large part of PDE theory is learning how these three types behave differently.

---

## 4. General structure of PDE problems

A PDE problem is usually not just an equation. It includes additional data.

### 4.1 Unknown function

The goal is to find $u(x,t)$ or $u(x,y)$ or more generally $u(x_1,\dots,x_n,t)$.

### 4.2 PDE itself

The differential equation constrains local behavior.

### 4.3 Initial conditions

For time-dependent equations, you often specify the state at $t=0$.

Examples:

$ u(x,0) = f(x) $

$ u_t(x,0) = g(x) $

### 4.4 Boundary conditions

If the domain is finite, you must say what happens at the edges.

Common types:

- **Dirichlet**: specify the value of $u$
- **Neumann**: specify the normal derivative
- **Robin**: specify a combination of value and derivative

Examples:

$ u(0,t)=0,\quad u(L,t)=0 $

or

$ u_x(0,t)=0,\quad u_x(L,t)=0 $

### 4.5 Well-posedness

A good PDE problem should ideally have:

- existence of a solution
- uniqueness of the solution
- continuous dependence on the data

This is the idea of a **well-posed problem**.

---

## 5. Order, linearity, and classification

### 5.1 Order

The order is the highest derivative appearing.

Examples:

- $u_t + c u_x = 0$ is first order
- $u_{tt} - c^2 u_{xx} = 0$ is second order

### 5.2 Linearity

A PDE is **linear** if the unknown function and its derivatives appear linearly.

Example of linear:

$ u_t - k u_{xx} = f(x,t) $

Example of nonlinear:

$ u_t + u u_x = 0 $

Linear PDEs are much more tractable, especially in an introductory course.

### 5.3 Homogeneous versus nonhomogeneous

Homogeneous:

$ L[u] = 0 $

Nonhomogeneous:

$ L[u] = f $

where $f$ is a forcing term or source term.

Because linear equations obey superposition, nonhomogeneous problems are often handled by splitting into:

- homogeneous part
- particular part

---

## 6. First-order PDEs

Strauss typically begins with first-order equations because they reveal the geometric structure of PDEs very clearly.

### 6.1 Transport equation

The simplest example is:

$ u_t + c u_x = 0 $

This says the profile moves with speed $c$ without changing shape.

If

$ u(x,0)=f(x) $

then the solution is

$ u(x,t)=f(x-ct) $

This is one of the most important exact solutions in all PDEs.

### 6.2 Characteristics

The key method for first-order PDEs is the method of **characteristics**.

For the transport equation, the characteristic curves are:

$ x - ct = \text{constant} $

Along each such line, the solution is constant.

This generalizes to more complicated first-order PDEs of the form

$ a(x,t,u)u_x + b(x,t,u)u_t = c(x,t,u) $

where one seeks curves along which the PDE becomes an ODE.

### 6.3 Why characteristics matter

Characteristics tell you:

- where information travels
- how initial data propagates
- where shocks or singularities may develop
- how to reduce a PDE to ordinary differential equations along curves

### 6.4 Inhomogeneous transport

For

$ u_t + c u_x = F(x,t) $

the solution can be found by integrating along characteristics:

$ \frac{d}{dt}u(x(t),t) = F(x(t),t) $

with

$ x(t)=x_0+ct $

This shows the general philosophy:

- move along the natural curves,
- reduce the PDE to an ODE,
- integrate.

---

## 7. Second-order PDEs in two variables

A general linear second-order PDE in two variables looks like

$ A u_{xx} + 2B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G $

The classification depends on the discriminant

$ B^2 - AC $

### 7.1 Hyperbolic

If

$ B^2 - AC > 0 $

the equation is hyperbolic.

Prototype: wave equation.

Behavior:

- signals propagate along characteristic curves
- finite-speed propagation
- initial-value problems are natural

### 7.2 Parabolic

If

$ B^2 - AC = 0 $

the equation is parabolic.

Prototype: heat equation.

Behavior:

- smoothing and diffusion
- initial-value problems with boundary conditions
- influence spreads instantly in the classical model, but with rapid decay

### 7.3 Elliptic

If

$ B^2 - AC < 0 $

the equation is elliptic.

Prototype: Laplace's equation.

Behavior:

- no real characteristic propagation
- equilibrium type behavior
- boundary-value problems are natural

This classification is one of the core organizing ideas of PDE theory.

---

## 8. The wave equation

The one-dimensional wave equation is

$ u_{tt} = c^2 u_{xx} $

It models a vibrating string under tension.

### 8.1 Derivation idea

A small segment of string obeys Newton's second law. Balancing vertical forces from tension leads, under small-slope approximations, to the wave equation.

### 8.2 Initial conditions

Typically one specifies:

$ u(x,0)=f(x) $

$ u_t(x,0)=g(x) $

where:

- $f$ is the initial displacement
- $g$ is the initial velocity

### 8.3 d'Alembert solution on the line

For $x \in \mathbb{R}$, the solution is

$ u(x,t)
=
\frac{1}{2}\bigl[f(x-ct)+f(x+ct)\bigr]
+
\frac{1}{2c}\int_{x-ct}^{x+ct} g(s)\, ds $

This is one of the great exact formulas in PDEs.

Interpretation:

- the initial shape splits into left- and right-moving parts
- the initial velocity contributes through an averaging integral

### 8.4 Finite speed of propagation

A disturbance initially localized in some interval only influences points reachable by speed $c$.

This is a defining feature of hyperbolic equations.

### 8.5 Boundary-value problems for vibrating strings

On $0 < x < L$, one often imposes

$ u(0,t)=0,\quad u(L,t)=0 $

which corresponds to fixed ends.

Then separation of variables yields standing-wave solutions with frequencies

$ \omega_n = \frac{n\pi c}{L} $

and modes

$ \sin\left(\frac{n\pi x}{L}\right) $

### 8.6 Energy of the wave equation

A typical energy is

$ E(t)=\frac{1}{2}\int_0^L \left(u_t^2 + c^2 u_x^2\right)\, dx $

For ideal undamped fixed-end strings, this is conserved.

This reflects the nondissipative nature of the wave equation.

---

## 9. The heat equation

The one-dimensional heat equation is

$ u_t = k u_{xx} $

It models diffusion of heat in a rod.

### 9.1 Derivation idea

Combine:

- conservation of energy,
- Fourier's law of heat flux,
- constitutive assumptions,

and you obtain the heat equation.

### 9.2 Initial and boundary data

A standard problem on $0<x<L$ is:

$ u_t = k u_{xx} $

$ u(0,t)=0,\quad u(L,t)=0 $

$ u(x,0)=f(x) $

### 9.3 Separation of variables

Set

$ u(x,t)=X(x)T(t) $

Substitution leads to

$ \frac{T'}{kT} = \frac{X''}{X} = -\lambda $

This yields eigenfunctions

$ X_n(x)=\sin\left(\frac{n\pi x}{L}\right) $

and time factors

$ T_n(t)=e^{-k(n\pi/L)^2 t} $

So the solution is

$ u(x,t)=\sum_{n=1}^\infty b_n e^{-k(n\pi/L)^2 t}\sin\left(\frac{n\pi x}{L}\right) $

where the coefficients come from the Fourier sine series of $f$.

### 9.4 Smoothing effect

Unlike the wave equation, the heat equation smooths rough initial data over time.

High-frequency oscillations decay rapidly because of the factor

$ e^{-k(n\pi/L)^2 t} $

This is the defining qualitative feature of diffusion.

### 9.5 Maximum principle intuition

For the heat equation, maxima tend to decrease and minima tend to increase. Heat spreads from hot to cold, flattening the profile.

This leads to strong uniqueness and stability results.

---

## 10. Laplace's equation and harmonic functions

Laplace's equation in two dimensions is

$ u_{xx}+u_{yy}=0 $

Solutions are called **harmonic functions**.

### 10.1 Physical meaning

Laplace's equation describes steady-state or equilibrium situations:

- steady temperature distribution
- electrostatic potential in source-free regions
- gravitational potential away from mass
- incompressible irrotational flow

### 10.2 Boundary-value problems

Typical elliptic problems specify data on the boundary of a region.

For example, on a rectangle or disk, one might prescribe:

$ u = f \quad \text{on the boundary} $

This is a Dirichlet problem.

### 10.3 Mean value property

A harmonic function at a point equals the average of its values over circles or spheres centered at that point.

This is one of the most beautiful features of harmonic functions.

### 10.4 Maximum principle

A nonconstant harmonic function cannot attain its maximum or minimum in the interior of a connected region.

This implies uniqueness for many boundary-value problems.

### 10.5 Why elliptic equations feel different

Elliptic equations do not describe propagation in time. Instead, the value at one point is influenced by the entire boundary structure in a global way.

---

## 11. Separation of variables

This is one of the master techniques in Strauss.

### 11.1 Core idea

Assume the solution can be written as a product:

$ u(x,t)=X(x)T(t) $

or in higher dimensions,

$ u(x,y,t)=X(x)Y(y)T(t) $

Substitute into the PDE and separate variables so each side depends on different variables. Then each side must equal a constant.

### 11.2 Why it works

It transforms a PDE into a family of ODE eigenvalue problems.

### 11.3 Where it works best

Separation of variables is especially effective on domains and equations with compatible geometry:

- intervals
- rectangles
- cylinders
- circles
- spheres

### 11.4 Typical outcome

You get a sequence of modes:

- spatial eigenfunctions
- temporal exponential or oscillatory factors
- coefficients determined from initial or boundary data

The full solution is then a series expansion in these modes.

---

## 12. Fourier series

Fourier series are one of the main tools used to represent initial data and solutions.

### 12.1 Basic idea

A function on an interval can often be expanded in sines and cosines.

For example, on $(-L,L)$:

$ f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty \left(
a_n \cos\frac{n\pi x}{L} + b_n \sin\frac{n\pi x}{L}
\right) $

with coefficients

$ a_n = \frac{1}{L}\int_{-L}^L f(x)\cos\frac{n\pi x}{L}\, dx $

$ b_n = \frac{1}{L}\int_{-L}^L f(x)\sin\frac{n\pi x}{L}\, dx $

### 12.2 Sine and cosine series

On $0<x<L$, one often uses:

- sine series for odd extensions or zero Dirichlet boundary conditions
- cosine series for even extensions or zero Neumann boundary conditions

### 12.3 Why Fourier series matter in PDEs

They convert complicated functions into combinations of eigenmodes, and each mode evolves simply under the PDE.

This is exactly why the heat and wave equations on finite intervals become manageable.

### 12.4 Convergence and Gibbs phenomenon

At discontinuities, Fourier series converge to the midpoint of the jump. Near jumps, oscillatory overshoot appears. This is called the Gibbs phenomenon.

Understanding this helps interpret PDE solutions with nonsmooth data.

---

## 13. Sturm-Liouville theory

A large fraction of separation-of-variables problems leads to an eigenvalue problem of the form

$ -(p(x) y')' + q(x) y = \lambda w(x) y $

with suitable boundary conditions.

This is a **Sturm-Liouville problem**.

### 13.1 Why it matters

It gives the theoretical foundation for:

- orthogonal eigenfunctions
- real eigenvalues
- completeness of eigenfunction expansions

### 13.2 Orthogonality

Eigenfunctions corresponding to distinct eigenvalues are orthogonal with respect to the weight $w(x)$:

$ \int_a^b y_m(x) y_n(x) w(x)\, dx = 0 \quad \text{if } m\ne n $

### 13.3 Expansion in eigenfunctions

Many functions can be expanded as generalized Fourier series in terms of the eigenfunctions.

This is the general principle behind separation of variables on nontrivial domains or with nontrivial coefficients.

---

## 14. The heat equation on the whole line

On $x\in\mathbb{R}$, the heat equation with initial data $u(x,0)=f(x)$ has solution

$ u(x,t)=\frac{1}{\sqrt{4\pi k t}}\int_{-\infty}^{\infty}
e^{-(x-y)^2/(4kt)} f(y)\, dy $

The Gaussian kernel

$ G(x,t)=\frac{1}{\sqrt{4\pi k t}} e^{-x^2/(4kt)} $

is called the **heat kernel**.

### 14.1 Interpretation

The solution is a convolution:

$ u(x,t)=(G(\cdot,t)*f)(x) $

This shows that the initial data is averaged against a Gaussian that widens as time grows.

### 14.2 Qualitative message

The heat equation:

- smooths
- spreads
- and damps localized peaks

This explicit formula makes those properties transparent.

---

## 15. The wave equation on the whole line

We already saw d'Alembert's formula. It provides the whole-line solution to the one-dimensional wave equation.

In higher dimensions, the wave equation has more complicated formulas, often involving spherical means. The geometric idea remains the same:

- information propagates at finite speed
- domains of dependence are determined by characteristic cones
- the solution at a point depends only on a causally reachable region

This finite-propagation structure is central in PDE theory and physics.

---

## 16. Fourier transform methods

When the spatial domain is the whole real line, Fourier series are replaced by the **Fourier transform**.

### 16.1 Definition idea

For a function $f(x)$, the Fourier transform is typically written as

$ \hat{f}(\xi) = \int_{-\infty}^\infty f(x)e^{-i\xi x}\, dx $

with inverse transform

$ f(x)=\frac{1}{2\pi}\int_{-\infty}^\infty \hat{f}(\xi)e^{i\xi x}\, d\xi $

depending on the normalization convention.

### 16.2 Why it is useful

Differentiation becomes multiplication:

$ \widehat{f'}(\xi)= i\xi \hat{f}(\xi) $

and

$ \widehat{f''}(\xi)= -\xi^2 \hat{f}(\xi) $

This turns constant-coefficient PDEs into ODEs in time or algebraic equations in transform space.

### 16.3 Example: heat equation

For

$ u_t = k u_{xx} $

the transform yields

$ \hat{u}_t = -k\xi^2 \hat{u} $

so

$ \hat{u}(\xi,t)=\hat{f}(\xi)e^{-k\xi^2 t} $

Then invert the transform to recover the heat kernel solution.

### 16.4 Example: wave equation

For

$ u_{tt}=c^2 u_{xx} $

the transform yields

$ \hat{u}_{tt} + c^2 \xi^2 \hat{u}=0 $

which is just a harmonic-oscillator ODE in time for each frequency $\xi$.

This frequency-by-frequency viewpoint is one of the most powerful ideas in PDEs.

---

## 17. Laplace transform methods

The **Laplace transform** is especially useful for time-dependent problems on $t\ge 0$.

### 17.1 Basic idea

For a function $f(t)$,

$ \mathcal{L}\{f\}(s)=\int_0^\infty e^{-st}f(t)\, dt $

### 17.2 Why it helps

Time derivatives become algebraic expressions involving initial data. This makes it very useful for initial-value problems.

Example:

$ \mathcal{L}\{f'(t)\}= sF(s)-f(0) $

### 17.3 PDE use

For heat or wave problems, one can transform in time, solve a boundary-value ODE in space, and then invert.

This is particularly useful when forcing or boundary data are complicated.

---

## 18. Green's functions

A **Green's function** is the response of a linear operator to a point source.

### 18.1 Basic idea

If

$ L[u]=f $

one tries to find $G$ such that

$ L[G(\cdot,\xi)] = \delta(\cdot-\xi) $

Then the solution can often be written as

$ u(x)=\int G(x,\xi)f(\xi)\, d\xi $

### 18.2 Why this matters

It converts the PDE into an integral formula.

Green's functions encode:

- the operator
- the geometry of the domain
- the boundary conditions

### 18.3 PDE viewpoint

Different boundary conditions lead to different Green's functions. This is a key lesson: the operator alone is not enough; the problem includes the boundary behavior.

### 18.4 Physical interpretation

A Green's function is the field generated by a point source. The full solution is then the superposition of point-source responses.

This is exactly the PDE version of linear response.

---

## 19. The Poisson equation

A standard elliptic nonhomogeneous problem is

$ -\Delta u = f $

or equivalently

$ \Delta u = -f $

This generalizes Laplace's equation by including sources.

### 19.1 Physical meaning

Examples:

- electric potential with charge density
- gravitational potential with mass density
- steady-state temperature with internal heat generation

### 19.2 Relation to Laplace's equation

Laplace's equation is the source-free case:

$ \Delta u = 0 $

### 19.3 Boundary-value problems

Solving Poisson's equation usually requires both the source term and boundary conditions.

---

## 20. Higher-dimensional separation of variables

Separation of variables extends beyond one dimension.

### 20.1 Rectangles

For Laplace's equation on a rectangle, one typically sets

$ u(x,y)=X(x)Y(y) $

and obtains trigonometric functions in one variable and hyperbolic functions in the other.

### 20.2 Circular domains

For Laplace's equation in polar coordinates,

$ u_{rr}+\frac{1}{r}u_r+\frac{1}{r^2}u_{\theta\theta}=0 $

Separation leads to radial powers $r^n$ and angular modes $\cos(n\theta)$, $\sin(n\theta)$.

### 20.3 Spherical domains

In three dimensions, spherical symmetry leads to special functions such as Legendre polynomials and spherical harmonics.

This is where PDEs begin to connect strongly with mathematical physics.

---

## 21. Bessel functions and special functions

Many PDE problems in cylindrical or spherical coordinates lead to special functions.

### 21.1 Bessel's equation

A standard form is

$ x^2 y'' + x y' + (x^2-\nu^2)y = 0 $

Its solutions are Bessel functions $J_\nu(x)$ and $Y_\nu(x)$.

### 21.2 Why they appear

They arise naturally when separating variables in cylindrical coordinates, such as:

- circular membranes
- heat flow in cylinders
- electromagnetic modes in cylindrical geometry

### 21.3 Legendre polynomials

In spherical coordinates, one often meets Legendre's equation and spherical harmonics.

These are the natural angular eigenfunctions for spherical geometry.

An important lesson from Strauss-style PDEs is that geometry determines the natural eigenfunctions.

---

## 22. Boundary conditions in more detail

Boundary conditions are not an afterthought. They are part of the problem.

### 22.1 Dirichlet boundary condition

Specify the value of the solution:

$ u = g \quad \text{on the boundary} $

### 22.2 Neumann boundary condition

Specify the normal derivative:

$ \frac{\partial u}{\partial n} = g \quad \text{on the boundary} $

### 22.3 Robin boundary condition

Specify a combination:

$ a u + b \frac{\partial u}{\partial n} = g $

### 22.4 Physical meaning

- Dirichlet often means fixed temperature or fixed displacement
- Neumann often means fixed flux or insulated boundary
- Robin often means convective exchange or spring-like boundary effects

Understanding the physical meaning of the boundary data is crucial for modeling.

---

## 23. Initial-value versus boundary-value problems

### 23.1 Initial-value problems

These are natural for time-dependent evolution equations like:

- transport
- wave
- heat

You specify the initial state and evolve forward.

### 23.2 Boundary-value problems

These are natural for equilibrium equations like:

- Laplace
- Poisson

You specify boundary behavior and solve throughout the domain.

### 23.3 Mixed problems

Many realistic PDE problems involve both initial and boundary data, especially on finite spatial intervals.

This is common for heat and wave equations on bounded domains.

---

## 24. Superposition and eigenmode decomposition

For linear PDEs, superposition is a central tool.

If $u_1$ and $u_2$ solve the homogeneous PDE, then so does

$ c_1 u_1 + c_2 u_2 $

This makes eigenmode expansions possible.

### 24.1 Why this matters

A complicated initial profile can be decomposed into simple modes.

Each mode then evolves in a simple way:

- oscillatory for wave equations
- exponentially decaying for heat equations
- static for Laplace-type spatial problems

The full solution is the sum of these mode evolutions.

This is the main organizing principle behind much of Strauss.

---

## 25. Uniqueness, maximum principles, and energy methods

These are among the most important qualitative tools.

### 25.1 Uniqueness

For many PDEs, uniqueness can be proved without constructing the solution explicitly.

### 25.2 Maximum principle

For elliptic and parabolic equations, maxima and minima obey strong restrictions.

This yields uniqueness and qualitative bounds.

### 25.3 Energy methods

For wave equations and related systems, one defines an energy and differentiates it in time.

This can show:

- uniqueness
- stability
- conservation
- decay

Energy methods are foundational across modern PDE theory.

---

## 26. Domains of dependence and influence

This concept is especially important for hyperbolic PDEs.

### 26.1 Domain of dependence

The solution at a point depends only on data in a certain region.

For the one-dimensional wave equation, the value at $(x,t)$ depends only on initial data from the interval

$ [x-ct,\ x+ct] $

### 26.2 Domain of influence

A disturbance at one point affects only certain future points.

This finite-speed structure is why wave equations are suited to propagation problems.

### 26.3 Compare with the heat equation

The heat equation, by contrast, has infinite propagation speed in the classical model: data at one point instantly affects the entire domain, though often weakly far away.

This sharp difference between wave and heat equations is one of the core lessons of PDE classification.

---

## 27. Inhomogeneous equations and Duhamel's principle

For forced time-dependent linear PDEs, one often uses **Duhamel's principle**.

### 27.1 Basic idea

Solve the homogeneous problem first, then integrate the effect of the forcing over time.

For example, if

$ u_t - k u_{xx} = F(x,t) $

the solution can often be represented as the accumulation of responses to impulse-like forcings at earlier times.

### 27.2 Why this matters

It turns a nonhomogeneous PDE into a superposition of homogeneous problems.

This is a major unifying method in linear PDEs.

---

## 28. Nonlinearity: a brief introduction

Although Strauss is mainly an introduction, it often gestures toward nonlinear PDEs.

### 28.1 Why nonlinear PDEs are harder

Superposition fails.

Solutions can develop:

- shocks
- blow-up
- pattern formation
- solitons
- singularities

### 28.2 Example: Burgers-type equation

$ u_t + u u_x = 0 $

Characteristics can intersect, leading to multivalued classical solutions and the need for weak solutions or shock conditions.

### 28.3 Why introductory linear PDEs still matter

The linear theory teaches:

- core geometric ideas
- transform methods
- boundary analysis
- spectral decompositions

All of these remain foundational even in nonlinear PDE theory.

---

## 29. Common modeling interpretations

A Strauss-style PDE course constantly moves between formulas and physical meaning.

### 29.1 Wave equation

Think:

- oscillation
- propagation
- finite speed
- inertia and restoring force

### 29.2 Heat equation

Think:

- smoothing
- averaging
- loss of sharp features
- dissipation

### 29.3 Laplace equation

Think:

- equilibrium
- no sources in the interior
- values constrained by the boundary

Keeping these physical interpretations in mind helps choose methods and check answers.

---

## 30. Typical problem-solving workflow

When solving Strauss-style PDE problems, this workflow helps.

### Step 1: Identify the PDE type

Ask:

- first order or second order?
- linear or nonlinear?
- hyperbolic, parabolic, or elliptic?

### Step 2: Identify the domain and data

Ask:

- whole line or finite interval?
- rectangle, disk, sphere?
- initial conditions?
- boundary conditions?

### Step 3: Choose the natural method

Use:

- characteristics for first-order equations
- d'Alembert for wave equation on the line
- separation of variables for bounded domains
- Fourier series for interval problems
- Fourier transform for whole-line problems
- Laplace transform for time-initial problems
- Green's functions for forced linear problems

### Step 4: Match the basis to the boundary condition

Examples:

- sine series for zero-endpoint values
- cosine series for zero-derivative endpoints
- special functions for cylindrical or spherical domains

### Step 5: Check the solution qualitatively

Ask:

- does the wave propagate at finite speed?
- does the heat solution smooth out?
- does the harmonic function respect the boundary data?
- are dimensions and decay rates sensible?

### Step 6: Use uniqueness when possible

If you find a solution satisfying the PDE and all conditions, uniqueness often tells you it is the solution.

---

## 31. Common conceptual pitfalls

### Pitfall 1: Treating the PDE alone as the whole problem

Without initial and boundary data, there are usually infinitely many solutions.

### Pitfall 2: Using separation of variables blindly

Separation works only when the geometry and data are compatible.

### Pitfall 3: Forgetting the physical meaning of boundary conditions

Boundary conditions are not arbitrary decorations; they encode the environment of the problem.

### Pitfall 4: Mixing up wave and heat behavior

Wave equations preserve oscillatory structure and propagate at finite speed. Heat equations smooth and dissipate.

### Pitfall 5: Ignoring orthogonality in Fourier methods

Orthogonality is what allows you to extract coefficients correctly.

### Pitfall 6: Forgetting the classification of second-order equations

The sign of $B^2-AC$ fundamentally changes the behavior of the problem.

### Pitfall 7: Treating transforms as formal magic

Fourier and Laplace transforms work because they diagonalize differentiation in a systematic way.

### Pitfall 8: Neglecting regularity issues

Discontinuous or nonsmooth data may still be allowed, but then convergence and derivative interpretation require care.

---

## 32. Core formulas to memorize

Here is a compact formula sheet.

### Transport equation

$ u_t + c u_x = 0 $

$ u(x,t)=f(x-ct) $

### Wave equation

$ u_{tt} = c^2 u_{xx} $

d'Alembert formula:

$ u(x,t)
=
\frac{1}{2}\bigl[f(x-ct)+f(x+ct)\bigr]
+
\frac{1}{2c}\int_{x-ct}^{x+ct} g(s)\, ds $

### Heat equation

$ u_t = k u_{xx} $

### Laplace equation

$ \Delta u = 0 $

### Poisson equation

$ \Delta u = -f $

### Classification

For

$ A u_{xx}+2B u_{xy}+C u_{yy}+\cdots=0 $

use

$ B^2-AC $

- $>0$: hyperbolic
- $=0$: parabolic
- $<0$: elliptic

### Fourier series

$ f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty
\left(
a_n \cos\frac{n\pi x}{L} + b_n \sin\frac{n\pi x}{L}
\right) $

### Heat kernel

$ G(x,t)=\frac{1}{\sqrt{4\pi k t}}e^{-x^2/(4kt)} $

### Fourier transform derivative rule

$ \widehat{f'}(\xi)=i\xi \hat{f}(\xi) $

$ \widehat{f''}(\xi)=-\xi^2 \hat{f}(\xi) $

### Sturm-Liouville form

$ -(p y')' + q y = \lambda w y $

---

## 33. A chapter-by-chapter mental map

A useful way to organize Strauss is this:

### First-order equations
Learn characteristics and how information flows.

### Classification
Understand hyperbolic, parabolic, and elliptic behavior.

### Wave equation
Learn propagation, finite speed, and energy ideas.

### Heat equation
Learn diffusion, smoothing, and exponential decay of modes.

### Laplace and Poisson equations
Learn equilibrium, boundary-value problems, and maximum principles.

### Fourier series and separation of variables
Learn eigenmodes on bounded domains.

### Sturm-Liouville theory
Learn why orthogonal eigenfunction expansions work.

### Fourier and Laplace transforms
Learn whole-line and half-line methods.

### Green's functions
Learn point-source response and integral solution formulas.

This progression is not arbitrary. It is the standard conceptual ascent from simple transport and propagation ideas to spectral and transform-based PDE theory.

---

## 34. Deep conceptual lessons of the subject

A Strauss-style PDE course teaches several deep ideas.

### 34.1 PDEs connect local laws to global structure

A differential equation is local, but boundary and initial data determine the full solution.

### 34.2 Geometry matters

The shape of the domain influences the natural coordinates, eigenfunctions, and special functions.

### 34.3 Spectral thinking is fundamental

Many PDEs are solved by decomposing data into eigenmodes.

### 34.4 Different PDE types have different personalities

- hyperbolic equations propagate
- parabolic equations smooth
- elliptic equations equilibrate

### 34.5 Boundary conditions are part of the physics

They determine what the system is interacting with at the edges.

### 34.6 Transform methods reveal hidden simplicity

Differentiation becomes multiplication, and complicated PDEs become manageable algebra or ODEs.

### 34.7 PDEs unify mathematics and physics

The same techniques appear in mechanics, thermodynamics, electrodynamics, quantum theory, and geometry.

---

## 35. What to study next after Strauss

After mastering this material, common next steps are:

1. more rigorous functional analysis
2. Sobolev spaces and weak derivatives
3. distributions and generalized functions
4. advanced elliptic theory
5. advanced hyperbolic theory
6. nonlinear conservation laws
7. semigroup theory for evolution equations
8. numerical PDE methods
9. finite elements and finite differences
10. mathematical physics applications

A particularly valuable next step is learning weak formulations and the functional-analytic foundations of PDE theory.

---

## 36. Final takeaway

The central idea of *Partial Differential Equations: An Introduction* is that many physical and mathematical systems are governed by local differential laws whose behavior is shaped by equation type, geometry, and boundary data.

The subject begins with simple first-order transport and quickly opens into a unified theory built around:

- characteristics
- wave propagation
- diffusion
- equilibrium
- Fourier methods
- eigenfunction expansions
- transforms
- and Green's functions

If you keep the following backbone in mind, the subject stays organized:

1. Learn what PDE type you are dealing with.
2. Understand the role of initial and boundary conditions.
3. Match the method to the geometry and data.
4. Use characteristics for first-order equations.
5. Use separation and Fourier methods for bounded linear problems.
6. Use transforms for infinite domains.
7. Use Green's functions for forced linear problems.
8. Always interpret the answer qualitatively: propagation, smoothing, or equilibrium.

That is the Strauss PDE story in one line:

**partial differential equations describe how local change in space and time produces global structure, and their solutions are organized by characteristics, eigenmodes, transforms, and boundary conditions.**
