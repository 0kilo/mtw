# Crash Course on Calculus of Variations

## 1. What Calculus of Variations Is

Calculus of variations studies how to optimize a *functional*, meaning a quantity whose input is an entire function rather than a finite list of numbers.

In ordinary calculus, we optimize a function such as $f(x)$.

In calculus of variations, we optimize something like

$J[y] = \int_{a}^{b} L(x, y(x), y'(x)) \, dx$

where:

- $y(x)$ is the unknown function
- $L$ is called the **Lagrangian**
- $J[y]$ is the quantity to be minimized or maximized

The goal is usually:

- find the function $y(x)$ that minimizes $J[y]$
- or find the function that makes $J[y]$ stationary, meaning the first-order change vanishes

This subject lies behind:

- shortest paths
- geodesics
- minimal surfaces
- mechanics
- optics
- elasticity
- field theory
- general relativity
- optimal control

---

## 2. Functionals and Variations

A **functional** assigns a number to a function.

Example:

$J[y] = \int_{0}^{1} \left(y'(x)\right)^2 dx$

This takes an entire function $y(x)$ and returns a number.

To test whether a function $y$ is optimal, we perturb it slightly:

$y(x) \to y(x) + \varepsilon \eta(x)$

where:

- $\varepsilon$ is a small parameter
- $\eta(x)$ is an arbitrary smooth perturbation
- usually $\eta(a)=\eta(b)=0$ when endpoints are fixed

Then we study how $J[y + \varepsilon \eta]$ changes with $\varepsilon$.

If $y$ is an extremum, the first derivative with respect to $\varepsilon$ at $\varepsilon = 0$ must vanish:

$\left.\frac{d}{d\varepsilon} J[y+\varepsilon \eta]\right|_{\varepsilon=0} = 0$

This is the **first variation**.

---

## 3. Deriving the Euler-Lagrange Equation

Consider the functional

$J[y] = \int_{a}^{b} L(x, y, y') \, dx$

Now perturb $y$:

$y \to y + \varepsilon \eta$

Then

$y' \to y' + \varepsilon \eta'$

So the perturbed functional is

$J[y+\varepsilon\eta] = \int_{a}^{b} L(x, y+\varepsilon\eta, y' + \varepsilon\eta') \, dx$

Differentiate with respect to $\varepsilon$ and evaluate at $\varepsilon=0$:

$\delta J = \left.\frac{d}{d\varepsilon}J[y+\varepsilon\eta]\right|_{\varepsilon=0} = \int_{a}^{b} \left( \frac{\partial L}{\partial y}\eta + \frac{\partial L}{\partial y'}\eta' \right) dx$

Integrate the second term by parts:

$\int_{a}^{b} \frac{\partial L}{\partial y'} \eta' \, dx = \left[ \frac{\partial L}{\partial y'} \eta \right]_{a}^{b} - \int_{a}^{b} \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)\eta \, dx$

If endpoints are fixed, then $\eta(a)=\eta(b)=0$, so the boundary term vanishes. Thus

$\delta J = \int_{a}^{b} \left( \frac{\partial L}{\partial y} - \frac{d}{dx}\frac{\partial L}{\partial y'} \right)\eta \, dx$

Because $\eta(x)$ is arbitrary, the integrand must be zero:

$\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right) = 0$

This is the **Euler-Lagrange equation**.

---

## 4. Why the Euler-Lagrange Equation Matters

The Euler-Lagrange equation is the analogue of the condition $f'(x)=0$ in ordinary calculus.

- ordinary calculus: optimize numbers
- calculus of variations: optimize functions

So:

- $f'(x)=0$ becomes
- $\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)=0$

Every time you see a variational problem, your first instinct should be:

1. identify the Lagrangian $L$
2. compute $\frac{\partial L}{\partial y}$
3. compute $\frac{\partial L}{\partial y'}$
4. plug into the Euler-Lagrange equation
5. solve the resulting differential equation

---

## 5. First Worked Example: Shortest Curve in a Plane

Suppose we want the shortest curve between two points. The arc length of a curve $y(x)$ is

$S[y] = \int_{a}^{b} \sqrt{1 + (y')^2} \, dx$

So the Lagrangian is

$L(y,y') = \sqrt{1 + (y')^2}$

Note that $L$ does not depend explicitly on $y$, so

$\frac{\partial L}{\partial y} = 0$

and

$\frac{\partial L}{\partial y'} = \frac{y'}{\sqrt{1+(y')^2}}$

Then Euler-Lagrange gives

$\frac{d}{dx}\left(\frac{y'}{\sqrt{1+(y')^2}}\right)=0$

So

$\frac{y'}{\sqrt{1+(y')^2}} = C$

which implies $y'$ is constant. Therefore

$y(x) = mx + c$

So the shortest path is a straight line.

---

## 6. Second Worked Example: Dirichlet Energy

Consider

$J[y] = \int_{a}^{b} \frac{1}{2}(y')^2 \, dx$

Then

$L = \frac{1}{2}(y')^2$

So

$\frac{\partial L}{\partial y} = 0$

and

$\frac{\partial L}{\partial y'} = y'$

Euler-Lagrange becomes

$\frac{d}{dx}(y') = 0$

so

$y'' = 0$

Hence the extremal is again

$y(x)=mx+c$

This functional appears in elasticity, harmonic functions, and energy minimization.

---

## 7. Natural Boundary Conditions

So far we assumed fixed endpoints, which means:

$y(a) = A, \qquad y(b)=B$

Then allowed perturbations satisfy

$\eta(a)=\eta(b)=0$

But if an endpoint is free, the boundary term from integration by parts does not disappear automatically:

$\left[\frac{\partial L}{\partial y'}\eta\right]_{a}^{b}$

For a free endpoint, the coefficient of the arbitrary boundary variation must vanish. That gives a **natural boundary condition**:

$\left.\frac{\partial L}{\partial y'}\right|_{x=a} = 0 \qquad \text{or} \qquad \left.\frac{\partial L}{\partial y'}\right|_{x=b}=0$

depending on which endpoint is free.

These conditions are crucial in mechanics and geometry.

---

## 8. Multiple Dependent Variables

Suppose the unknown is a vector-valued function

$\mathbf{y}(x) = (y_1(x), y_2(x), \dots, y_n(x))$

and the functional is

$J[\mathbf{y}] = \int_{a}^{b} L(x, y_1,\dots,y_n, y_1',\dots,y_n') \, dx$

Then each component satisfies its own Euler-Lagrange equation:

$\frac{\partial L}{\partial y_i} - \frac{d}{dx}\left(\frac{\partial L}{\partial y_i'}\right)=0, \qquad i=1,\dots,n$

This is common for:

- particle mechanics in several coordinates
- geodesics in multiple coordinates
- coupled physical systems

Example with planar curve $\mathbf{r}(t) = (x(t), y(t))$:

$J[\mathbf{r}] = \int_{t_0}^{t_1} L(x,y,\dot{x},\dot{y},t)\,dt$

Then we get two Euler-Lagrange equations:

$\frac{\partial L}{\partial x} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right)=0$

$\frac{\partial L}{\partial y} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{y}}\right)=0$

---

## 9. Functionals with Higher Derivatives

Sometimes the functional depends on $y''$ as well:

$J[y] = \int_{a}^{b} L(x, y, y', y'') \, dx$

Then after repeated integration by parts, the Euler-Lagrange equation becomes

$\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right) + \frac{d^2}{dx^2}\left(\frac{\partial L}{\partial y''}\right) = 0$

More generally, if derivatives up to order $n$ appear, then

$\sum_{k=0}^{n} (-1)^k \frac{d^k}{dx^k}\left(\frac{\partial L}{\partial y^{(k)}}\right)=0$

These occur in beam theory, plate theory, and geometric curve energies.

---

## 10. Several Independent Variables

For a field $u(x_1,\dots,x_n)$, the functional may be

$J[u] = \int_{\Omega} L(x_1,\dots,x_n, u, u_{x_1}, \dots, u_{x_n}) \, dV$

Then the Euler-Lagrange equation becomes a partial differential equation:

$\frac{\partial L}{\partial u} - \sum_{i=1}^{n}\frac{\partial}{\partial x_i}\left(\frac{\partial L}{\partial u_{x_i}}\right)=0$

In compact notation:

$\frac{\partial L}{\partial u} - \partial_i\left(\frac{\partial L}{\partial (\partial_i u)}\right)=0$

Example: minimizing

$J[u] = \int_{\Omega} \frac{1}{2} |\nabla u|^2 \, dV$

gives Laplace's equation:

$\Delta u = 0$

This is one of the most important bridges between variational methods and PDEs.

---

## 11. The Fundamental Lemma

A key theorem used in the derivation is the **fundamental lemma of the calculus of variations**:

If

$\int_{a}^{b} f(x)\eta(x)\,dx = 0$

for every smooth function $\eta(x)$ vanishing at the endpoints, then

$f(x)=0 \quad \text{for all } x \in [a,b]$

This is what allows us to conclude that the Euler-Lagrange integrand itself must vanish.

It is one of the structural foundations of the subject.

---

## 12. Beltrami Identity

If the Lagrangian does not depend explicitly on $x$, then there is a useful first integral.

If

$L=L(y,y')$

then

$L - y'\frac{\partial L}{\partial y'} = C$

This is called the **Beltrami identity**.

It often simplifies problems dramatically.

### Example

For the arc length problem,

$L = \sqrt{1+(y')^2}$

So

$L - y'\frac{\partial L}{\partial y'} = \sqrt{1+(y')^2} - y'\frac{y'}{\sqrt{1+(y')^2}} = \frac{1}{\sqrt{1+(y')^2}}$

Thus

$\frac{1}{\sqrt{1+(y')^2}} = C$

which again implies $y'$ is constant.

---

## 13. Conservation Laws and Cyclic Variables

If a coordinate does not appear explicitly in the Lagrangian, it is called **cyclic** or **ignorable**.

If $L$ does not depend on $y$, then

$\frac{\partial L}{\partial y} = 0$

and Euler-Lagrange implies

$\frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)=0$

so

$\frac{\partial L}{\partial y'} = \text{constant}$

This is a conservation law.

In mechanics:

- no explicit dependence on position can imply conserved momentum
- no explicit dependence on time can imply conserved energy

Variational symmetry and conservation become systematic in **Noether's theorem**.

---

## 14. Constraints and Lagrange Multipliers

Sometimes we want to extremize a functional subject to a constraint.

For example:

extremize $J[y]$ subject to

$K[y] = \int_{a}^{b} G(x,y,y')\,dx = c$

Then introduce a multiplier $\lambda$ and study

$\tilde{J}[y] = J[y] + \lambda K[y] = \int_{a}^{b} \left(L + \lambda G\right) dx$

Now apply Euler-Lagrange to the modified Lagrangian

$\tilde{L} = L + \lambda G$

This gives

$\frac{\partial \tilde{L}}{\partial y} - \frac{d}{dx}\left(\frac{\partial \tilde{L}}{\partial y'}\right)=0$

This is the variational analogue of constrained optimization in multivariable calculus.

---

## 15. Isoperimetric Problems

A classic example is the **isoperimetric problem**:

Among all closed curves with fixed perimeter, which encloses the largest area?

The answer is the circle.

This can be formulated as a constrained variational problem.

One functional represents area, another represents perimeter, and a Lagrange multiplier enforces the perimeter constraint.

The deeper lesson is that geometry often arises from variational principles.

---

## 16. First and Second Variation

The **first variation** determines stationary points.

The **second variation** helps decide whether the stationary point is:

- a minimum
- a maximum
- or neither

Expand the functional as

$J[y+\varepsilon\eta] = J[y] + \varepsilon \delta J[y;\eta] + \frac{1}{2}\varepsilon^2 \delta^2 J[y;\eta] + \cdots$

At a stationary point,

$\delta J[y;\eta]=0$

Then the sign of $\delta^2 J$ matters:

- $\delta^2 J > 0$ for all nonzero admissible $\eta$ suggests a local minimum
- $\delta^2 J < 0$ suggests a local maximum
- mixed sign suggests a saddle-type stationary point

For

$J[y] = \int_{a}^{b} L(x,y,y')\,dx$

the second variation typically has the structure

$\delta^2 J = \int_{a}^{b} \left( L_{yy}\eta^2 + 2L_{yy'}\eta\eta' + L_{y'y'}(\eta')^2 \right) dx$

where the derivatives are evaluated on the extremal.

---

## 17. Legendre Condition

A necessary condition for a weak local minimum is often

$\frac{\partial^2 L}{\partial (y')^2} \ge 0$

along the extremal.

This is called the **Legendre condition**.

For several variables, the Hessian with respect to derivative variables should be positive semidefinite.

This resembles the second derivative test from ordinary calculus.

---

## 18. Jacobi Equation and Conjugate Points

A deeper refinement of the second variation leads to the **Jacobi equation** and the concept of **conjugate points**.

These help determine whether an extremal truly minimizes the functional over an interval.

The Jacobi equation comes from linearizing the Euler-Lagrange equation around an extremal.

This topic is especially important in:

- geodesics
- Riemannian geometry
- mechanics
- stability theory

For a first crash course, the main point is:

A stationary path is not always a minimizing path.

---

## 19. Hamilton's Principle in Mechanics

One of the most important uses of calculus of variations is classical mechanics.

Define the action

$S[q] = \int_{t_1}^{t_2} L(q,\dot{q},t)\,dt$

where usually

$L = T - V$

with:

- $T$ kinetic energy
- $V$ potential energy

Hamilton's principle says that the actual motion of the system makes the action stationary:

$\delta S = 0$

Applying Euler-Lagrange gives

$\frac{\partial L}{\partial q_i} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)=0$

for each generalized coordinate $q_i$.

### Example: Particle in a Potential

Take

$L = \frac{1}{2}m\dot{x}^2 - V(x)$

Then

$\frac{\partial L}{\partial x} = -V'(x)$

and

$\frac{\partial L}{\partial \dot{x}} = m\dot{x}$

So Euler-Lagrange gives

$-V'(x) - \frac{d}{dt}(m\dot{x}) = 0$

or

$m\ddot{x} = -V'(x)$

which is Newton's second law.

This is one of the most beautiful facts in mathematical physics: dynamics can be derived from a variational principle.

---

## 20. Optics and Fermat's Principle

In optics, light travels along a path that makes travel time stationary.

If the refractive index is $n(x,y)$, then the optical path length is

$J[y] = \int n(x,y)\sqrt{1+(y')^2}\,dx$

The extremals of this functional describe rays of light.

From this viewpoint, reflection and refraction come from a variational principle.

This leads to Snell's law and geometric optics.

---

## 21. Geodesics and Differential Geometry

In differential geometry, geodesics arise by extremizing length or energy.

For a Riemannian metric $g_{ij}$, the length of a curve $x^i(t)$ is

$L[\gamma] = \int \sqrt{g_{ij}(x)\dot{x}^i\dot{x}^j}\,dt$

The associated energy functional is

$E[\gamma] = \frac{1}{2}\int g_{ij}(x)\dot{x}^i\dot{x}^j\,dt$

Applying Euler-Lagrange gives the geodesic equations.

In coordinates, these become

$\ddot{x}^k + \Gamma^{k}_{ij}\dot{x}^i\dot{x}^j = 0$

So variational methods connect directly to Christoffel symbols, curvature, and geometry.

---

## 22. Minimal Surfaces

A surface $z=u(x,y)$ has area

$A[u] = \int_{\Omega} \sqrt{1 + u_x^2 + u_y^2}\,dx\,dy$

The Euler-Lagrange equation gives the **minimal surface equation**:

$\frac{\partial}{\partial x}\left(\frac{u_x}{\sqrt{1+u_x^2+u_y^2}}\right) + \frac{\partial}{\partial y}\left(\frac{u_y}{\sqrt{1+u_x^2+u_y^2}}\right) = 0$

This is the PDE satisfied by soap films spanning a boundary.

---

## 23. Field Theory Viewpoint

In field theory, the unknown is a field $\phi(x^\mu)$, and the action is

$S[\phi] = \int \mathcal{L}(\phi,\partial_\mu \phi, x^\mu)\, d^n x$

Then the Euler-Lagrange equation becomes

$\frac{\partial \mathcal{L}}{\partial \phi} - \partial_\mu\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\right)=0$

This framework underlies:

- wave equations
- Klein-Gordon equation
- electromagnetism
- gauge theory
- general relativity

So calculus of variations is not just a classical topic; it is part of the language of modern physics.

---

## 24. Common Workflow for Solving Problems

When given a variational problem, use this workflow:

### Step 1: Identify the functional

Write it in the form

$J[y] = \int_{a}^{b} L(x,y,y')\,dx$

or the field version if needed.

### Step 2: Identify the admissible class

Determine which functions are allowed:

- fixed endpoints?
- free endpoints?
- smoothness assumptions?
- constraints?

### Step 3: Compute derivatives of the Lagrangian

Find:

- $\frac{\partial L}{\partial y}$
- $\frac{\partial L}{\partial y'}$

and more if needed.

### Step 4: Apply Euler-Lagrange

Use

$\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)=0$

### Step 5: Simplify with symmetries

Check whether:

- $L$ has no explicit $x$ dependence
- some coordinate is cyclic
- a conservation law appears
- Beltrami identity helps

### Step 6: Solve the resulting differential equation

Use boundary conditions to determine constants.

### Step 7: Check whether it is really a minimum

If needed, inspect the second variation or apply known physical or geometric reasoning.

---

## 25. Common Mistakes

### Mistake 1: Forgetting that the input is a function

You are not optimizing a number; you are optimizing over an infinite-dimensional space of functions.

### Mistake 2: Ignoring endpoint conditions

Whether endpoints are fixed or free changes the admissible perturbations and boundary terms.

### Mistake 3: Misidentifying the Lagrangian

Always isolate the integrand clearly.

### Mistake 4: Forgetting integration by parts

This is the key step that moves derivatives off $\eta'$ and onto $\frac{\partial L}{\partial y'}$.

### Mistake 5: Assuming every extremal is a minimum

Stationary does not automatically mean minimizing.

### Mistake 6: Missing symmetry-based shortcuts

If $L$ does not depend explicitly on some variable, there may be a conserved quantity.

---

## 26. A Short Formula Sheet

### Basic functional

$J[y] = \int_{a}^{b} L(x,y,y')\,dx$

### Variation

$y \to y + \varepsilon \eta$

### First variation condition

$\left.\frac{d}{d\varepsilon}J[y+\varepsilon\eta]\right|_{\varepsilon=0}=0$

### Euler-Lagrange equation

$\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)=0$

### Several dependent variables

$\frac{\partial L}{\partial y_i} - \frac{d}{dx}\left(\frac{\partial L}{\partial y_i'}\right)=0$

### Higher derivative case

$\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right) + \frac{d^2}{dx^2}\left(\frac{\partial L}{\partial y''}\right)=0$

### Several independent variables

$\frac{\partial L}{\partial u} - \partial_i\left(\frac{\partial L}{\partial (\partial_i u)}\right)=0$

### Beltrami identity

$L - y'\frac{\partial L}{\partial y'} = C$

### Mechanical action

$S[q] = \int_{t_1}^{t_2} L(q,\dot{q},t)\,dt$

### Natural boundary term

$\left[\frac{\partial L}{\partial y'}\eta\right]_{a}^{b}$

---

## 27. Mini Example Set

### Example A: Straight line from energy minimization

Functional:

$J[y]=\int_{0}^{1}(y')^2\,dx$

Euler-Lagrange:

$\frac{d}{dx}(2y')=0$

So:

$y''=0$

Solution:

$y(x)=mx+c$

Use endpoint conditions to determine $m$ and $c$.

### Example B: Harmonic oscillator

Take

$L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$

Then Euler-Lagrange gives

$m\ddot{x}+kx=0$

This is the harmonic oscillator equation.

### Example C: Brachistochrone idea

The brachistochrone problem asks for the curve of fastest descent under gravity.

The functional is based on travel time, not distance.

Its solution is a cycloid.

This is one of the most famous classical problems in calculus of variations.

---

## 28. Intuition Behind the Subject

A helpful intuition is this:

An optimal function should be so balanced that any tiny allowed perturbation changes the objective only at second order or smaller.

That is why the first variation vanishes.

So the Euler-Lagrange equation is a balance law.

In mechanics it becomes force balance.
In geometry it becomes curvature balance.
In optics it becomes path balance.
In PDEs it becomes an equilibrium equation.

---

## 29. Connections to Other Subjects

Calculus of variations connects strongly to:

- **ordinary differential equations** through Euler-Lagrange equations
- **partial differential equations** through variational PDEs
- **tensor calculus** through coordinate-based geometric formulations
- **differential geometry** through geodesics and minimal surfaces
- **special relativity** through action principles in spacetime
- **general relativity** through variational derivations of field equations
- **functional analysis** through infinite-dimensional spaces
- **optimal control** through Pontryagin-type principles
- **numerical methods** through finite elements and energy minimization

---

## 30. What to Learn Next

After this crash course, the best next topics are:

1. rigorous definition of admissible function spaces
2. weak derivatives and Sobolev spaces
3. direct methods in the calculus of variations
4. convexity and lower semicontinuity
5. Noether's theorem
6. geodesics and Riemannian geometry
7. minimal surfaces
8. Hamiltonian mechanics
9. variational principles for fields
10. numerical variational methods and finite elements

---

## 31. Final Takeaway

The core idea of calculus of variations is simple but profound:

Instead of optimizing numbers, we optimize shapes, paths, surfaces, and fields.

The central object is a functional:

$J[y] = \int L\,dx$

The central condition is stationarity:

$\delta J = 0$

And the central equation is Euler-Lagrange:

$\frac{\partial L}{\partial y} - \frac{d}{dx}\left(\frac{\partial L}{\partial y'}\right)=0$

From this single pattern, we get:

- shortest paths
- Newton's laws
- geodesics
- minimal surfaces
- optical rays
- equilibrium PDEs
- modern field equations

That is why calculus of variations is one of the great unifying languages of mathematics and physics.