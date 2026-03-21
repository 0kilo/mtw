# Chapter 4 Exercises - Solutions

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Generated:** March 21, 2026

---

## Exercise 4.1: Generic Local Electromagnetic Field Expressed in Simplest Form

**Problem:** In the laboratory Lorentz frame, the electric field is $\mathbf{E}$, the magnetic field $\mathbf{B}$. Special cases are: (1) pure electric field ($\mathbf{B} = 0$); (2) pure magnetic field ($\mathbf{E} = 0$); and (3) "radiation field" or "null field" ($\mathbf{E}$ and $\mathbf{B}$ equal in magnitude and perpendicular in direction). All cases other than (1), (2), and (3) are "generic." In the generic case, calculate the Poynting density of flow of energy $\mathbf{E} \times \mathbf{B}/4\pi$ and the density of energy $(E^2 + B^2)/8\pi$. Define the direction of a unit vector $\mathbf{n}$ and the magnitude of a velocity parameter $\alpha$ by the ratio of energy flow to energy density:

$$\mathbf{n} \tanh 2\alpha = \frac{2\mathbf{E} \times \mathbf{B}}{E^2 + B^2}$$

View the same electromagnetic field in a rocket frame moving in the direction of $\mathbf{n}$ with the velocity parameter $\alpha$. By employing the formulas for a Lorentz transformation, show that the energy flux vanishes in the rocket frame, with the consequence that $\bar{\mathbf{E}}$ and $\bar{\mathbf{B}}$ are parallel. Show that with this choice of direction, **Faraday** becomes

$$F = \bar{E}_z \, d\bar{z} \wedge d\bar{t} + \bar{B}_z \, d\bar{x} \wedge d\bar{y}$$

### Solution

**Step 1: Energy density and flux in laboratory frame**

The energy density is:
$$u = \frac{1}{8\pi}(E^2 + B^2)$$

The Poynting flux (energy flow density) is:
$$\mathbf{S} = \frac{1}{4\pi}\mathbf{E} \times \mathbf{B}$$

**Step 2: Define the boost direction and parameter**

Let $\mathbf{n}$ be the unit vector in the direction of $\mathbf{E} \times \mathbf{B}$:
$$\mathbf{n} = \frac{\mathbf{E} \times \mathbf{B}}{|\mathbf{E} \times \mathbf{B}|}$$

Define $\alpha$ by:
$$\tanh 2\alpha = \frac{2|\mathbf{E} \times \mathbf{B}|}{E^2 + B^2}$$

**Step 3: Lorentz transformation of fields**

For a boost with velocity $v = \tanh\alpha$ in the $\mathbf{n}$ direction (taken as $z$-axis):

$$\bar{E}_\parallel = E_\parallel, \quad \bar{E}_\perp = \gamma(E_\perp - v B_\perp)$$
$$\bar{B}_\parallel = B_\parallel, \quad \bar{B}_\perp = \gamma(B_\perp + v E_\perp)$$

where $\gamma = \cosh\alpha$ and $v\gamma = \sinh\alpha$.

**Step 4: Choose $\alpha$ to make $\bar{\mathbf{E}} \times \bar{\mathbf{B}} = 0$**

The Poynting flux in the rocket frame is:
$$\bar{\mathbf{S}} = \frac{1}{4\pi}\bar{\mathbf{E}} \times \bar{\mathbf{B}}$$

For the perpendicular components:
$$\bar{E}_\perp \times \bar{B}_\perp = \gamma^2(E_\perp - vB_\perp) \times (B_\perp + vE_\perp)$$
$$= \gamma^2[(1-v^2)E_\perp \times B_\perp + v(E_\perp^2 - B_\perp^2)\mathbf{n}]$$

Setting this to zero and using $\gamma^2(1-v^2) = 1$:
$$E_\perp \times B_\perp + v(E_\perp^2 - B_\perp^2)\mathbf{n} = 0$$

This determines $v = \tanh\alpha$ such that $\bar{\mathbf{E}}$ and $\bar{\mathbf{B}}$ are parallel.

**Step 5: Canonical form of Faraday**

With $\bar{\mathbf{E}} \parallel \bar{\mathbf{B}}$, choose the $z$-axis along their common direction. Then:
$$\bar{E}_x = \bar{E}_y = 0, \quad \bar{B}_x = \bar{B}_y = 0$$

The Faraday 2-form becomes:
$$F = \bar{E}_z \, d\bar{z} \wedge d\bar{t} + \bar{B}_z \, d\bar{x} \wedge d\bar{y}$$

This is the **canonical representation** of a generic electromagnetic field, requiring only two wedge products.

---

## Exercise 4.2: Freedom of Choice of 1-Forms in Canonical Representation of Generic Local Field

**Problem:** Write **Faraday** in canonical representation in the form

$$F = dp_I \wedge dq^I + dp_{II} \wedge dq^{II}$$

where $p_A$ ($A = I$ or $II$) and $q^A$ are scalar functions of position in spacetime. Define a "canonical transformation" to new scalar functions $p_{\bar{A}}$ and $q^{\bar{A}}$ by way of the "equation of transformation"

$$p_A \, dq^A = dS + p_{\bar{A}} \, dq^{\bar{A}}$$

where the "generating function" $S$ of the transformation is an arbitrary function of the $q^A$ and the $q^{\bar{A}}$.

(a) Derive expressions for the two $p_A$'s and the two $p_{\bar{A}}$'s in terms of $S$ by equating coefficients of $dq^I$, $dq^{II}$, $dq^{\bar{I}}$, $dq^{\bar{II}}$ individually on the two sides of the equation of transformation.

(b) Use these expressions to show that $F = dp_A \wedge dq^A$ and $\bar{F} = dp_{\bar{A}} \wedge dq^{\bar{A}}$ are actually expressions for one and the same 2-form.

### Solution

**Part (a): Derive transformation equations**

The generating function $S = S(q^I, q^{II}, q^{\bar{I}}, q^{\bar{II}})$ has exterior derivative:
$$dS = \frac{\partial S}{\partial q^I} dq^I + \frac{\partial S}{\partial q^{II}} dq^{II} + \frac{\partial S}{\partial q^{\bar{I}}} dq^{\bar{I}} + \frac{\partial S}{\partial q^{\bar{II}}} dq^{\bar{II}}$$

The transformation equation is:
$$p_I \, dq^I + p_{II} \, dq^{II} = dS + p_{\bar{I}} \, dq^{\bar{I}} + p_{\bar{II}} \, dq^{\bar{II}}$$

Equating coefficients:

For $dq^I$:
$$p_I = \frac{\partial S}{\partial q^I}$$

For $dq^{II}$:
$$p_{II} = \frac{\partial S}{\partial q^{II}}$$

For $dq^{\bar{I}}$:
$$0 = \frac{\partial S}{\partial q^{\bar{I}}} + p_{\bar{I}} \quad \Rightarrow \quad p_{\bar{I}} = -\frac{\partial S}{\partial q^{\bar{I}}}$$

For $dq^{\bar{II}}$:
$$0 = \frac{\partial S}{\partial q^{\bar{II}}} + p_{\bar{II}} \quad \Rightarrow \quad p_{\bar{II}} = -\frac{\partial S}{\partial q^{\bar{II}}}$$

**Part (b): Show $F$ is invariant**

Compute $d(p_A \, dq^A)$:
$$d(p_A \, dq^A) = dp_A \wedge dq^A + p_A \, d(dq^A) = dp_A \wedge dq^A$$

(since $d^2 = 0$)

Similarly:
$$d(p_{\bar{A}} \, dq^{\bar{A}}) = dp_{\bar{A}} \wedge dq^{\bar{A}}$$

From the transformation equation:
$$p_A \, dq^A - p_{\bar{A}} \, dq^{\bar{A}} = dS$$

Taking exterior derivative of both sides:
$$d(p_A \, dq^A) - d(p_{\bar{A}} \, dq^{\bar{A}}) = d(dS) = 0$$

Therefore:
$$dp_A \wedge dq^A = dp_{\bar{A}} \wedge dq^{\bar{A}}$$

This shows that $F$ is the same 2-form regardless of the canonical coordinate representation.

---

## Exercise 4.3: A Closed or Curl-Free 1-Form is a Gradient

**Problem:** Given a 1-form $\sigma$ such that $d\sigma = 0$, show that $\sigma$ can be expressed in the form $\sigma = df$, where $f$ is some scalar. When the 1-form $\sigma$ is expressed in terms of basis 1-forms $dx^\alpha$, multiplied by corresponding components $\sigma_\alpha$, show that "curl-free" implies $\sigma_{[\alpha,\beta]} = 0$.

### Solution

**Step 1: Component form of $d\sigma = 0$**

Write $\sigma = \sigma_\alpha \, dx^\alpha$. The exterior derivative is:
$$d\sigma = \partial_\beta \sigma_\alpha \, dx^\beta \wedge dx^\alpha = \frac{1}{2}(\partial_\beta \sigma_\alpha - \partial_\alpha \sigma_\beta) \, dx^\beta \wedge dx^\alpha$$

The condition $d\sigma = 0$ implies:
$$\partial_\beta \sigma_\alpha - \partial_\alpha \sigma_\beta = 0$$

In antisymmetric bracket notation:
$$\sigma_{[\alpha,\beta]} = \frac{1}{2}(\partial_\alpha \sigma_\beta - \partial_\beta \sigma_\alpha) = 0$$

**Step 2: Poincaré lemma**

The Poincaré lemma states that on a contractible (simply connected) region, every closed form is exact. That is, if $d\sigma = 0$, then there exists a scalar function $f$ such that:
$$\sigma = df$$

**Step 3: Construct $f$ explicitly**

Define $f$ by path integration from a reference point $x_0$:
$$f(x) = \int_{x_0}^x \sigma_\alpha \, dx^\alpha$$

Since $d\sigma = 0$, the integral is path-independent (by Stokes' theorem), so $f$ is well-defined. Then:
$$\partial_\alpha f = \sigma_\alpha$$

Therefore $\sigma = df$.

---

## Exercise 4.4: Canonical Expression for a Rotation-Free 1-Form

**Problem:** Show that a 1-form $\mathbf{v}$ is rotation-free if and only if it can be written in the form

$$\mathbf{v} = h \, df$$

where $h$ and $f$ are scalar functions of position (the "Frobenius theorem").

### Solution

**Step 1: Rotation-free condition**

A 1-form $\mathbf{v}$ is rotation-free if:
$$d\mathbf{v} \wedge \mathbf{v} = 0$$

In components, with $\mathbf{v} = v_\alpha \, dx^\alpha$:
$$v_{[\alpha,\beta} v_{\gamma]} = 0$$

**Step 2: Show $h \, df$ is rotation-free**

Let $\mathbf{v} = h \, df = h \, \partial_\alpha f \, dx^\alpha$. Then:
$$d\mathbf{v} = dh \wedge df$$

Therefore:
$$d\mathbf{v} \wedge \mathbf{v} = (dh \wedge df) \wedge (h \, df) = h \, dh \wedge df \wedge df = 0$$

(since $df \wedge df = 0$)

**Step 3: Converse - Frobenius theorem**

The Frobenius theorem states that if $d\mathbf{v} \wedge \mathbf{v} = 0$, then locally there exist scalar functions $h$ and $f$ such that $\mathbf{v} = h \, df$.

**Proof sketch:**

The condition $d\mathbf{v} \wedge \mathbf{v} = 0$ means that the hyperplanes defined by $\mathbf{v} = 0$ are integrable. That is, they fit together to form a family of hypersurfaces.

Let these hypersurfaces be level sets of some function $f$. Then $\mathbf{v}$ must be proportional to $df$:
$$\mathbf{v} = h \, df$$

for some scalar function $h$.

---

## Exercise 4.5: Forms Endowed with Polar Singularities

**Problem:** List the principal results on how such forms are representable, such as

$$\Phi_1 = \frac{dS}{S} \wedge \psi_1 + \theta_1$$

and the conditions under which each applies.

### Solution

Forms with polar singularities arise when forms have poles (divergences) along certain submanifolds. The key results are:

**1. Logarithmic poles:**

A 1-form with a simple pole along a hypersurface $S = 0$ can be written as:
$$\Phi_1 = \frac{dS}{S} \wedge \psi_0 + \theta_1$$

where $\psi_0$ is a 0-form (scalar) and $\theta_1$ is regular at $S = 0$.

**2. Residue formula:**

The residue of $\Phi_1$ along $S = 0$ is:
$$\text{Res}_{S=0} \, \Phi_1 = \psi_0|_{S=0}$$

**3. Higher-degree forms:**

A $p$-form with a simple pole along $S = 0$:
$$\Phi_p = \frac{dS}{S} \wedge \psi_{p-1} + \theta_p$$

where $\psi_{p-1}$ is a regular $(p-1)$-form and $\theta_p$ is a regular $p$-form.

**4. Exterior derivative:**

$$d\Phi_p = d\left(\frac{dS}{S}\right) \wedge \psi_{p-1} - \frac{dS}{S} \wedge d\psi_{p-1} + d\theta_p$$

Since $d(dS/S) = 0$ away from the pole, the singular part comes from $d\psi_{p-1}$.

**5. Integration around poles:**

For a cycle $\gamma$ encircling the pole:
$$\oint_\gamma \Phi_p = 2\pi i \int_{\partial\gamma} \psi_{p-1}$$

**Reference:** See Lascoux (1968) for detailed treatment of forms with polar singularities and their cohomological properties.

---

## Exercise 4.6: The Field of the Oscillating Dipole

**Problem:** Verify that the expressions given for the electromagnetic field of an oscillating dipole in equations (4.23) and (4.24) satisfy $dF = 0$ everywhere and $d*F = 0$ everywhere except at the origin.

### Solution

**Step 1: Faraday 2-form for oscillating dipole**

For an electric dipole $\mathbf{p}(t) = p_1 \cos(\omega t) \, \hat{\mathbf{z}}$ at the origin, the field in spherical coordinates has the form:

$$F = E_r \, dr \wedge dt + E_\theta \, d\theta \wedge dt + B_\phi \, r\sin\theta \, d\phi \wedge dr + \cdots$$

The explicit expressions (from the chapter) contain terms scaling as $1/r^3$, $1/r^2$, and $1/r$.

**Step 2: Verify $dF = 0$**

Since $F = dA$ for some potential 1-form $A$, we have:
$$dF = d(dA) = 0$$

This holds everywhere by the nilpotency of exterior derivative.

Explicitly, if $A = A_t \, dt + A_r \, dr + A_\theta \, d\theta + A_\phi \, d\phi$, then:
$$F = dA = (\partial_r A_t - \partial_t A_r) \, dr \wedge dt + (\partial_\theta A_t - \partial_t A_\theta) \, d\theta \wedge dt + \cdots$$

**Step 3: Verify $d*F = 0$ away from origin**

The dual $*F$ contains the complementary field components. Away from the origin (where $J = 0$):
$$d*F = 4\pi *J = 0$$

At the origin, there is a source term corresponding to the oscillating dipole.

**Step 4: Explicit verification**

For the $1/r$ radiation terms:
$$E_\theta^{\text{rad}} = -\frac{\omega^2 p_1}{r} \sin\theta \cos(\omega(t-r))$$
$$B_\phi^{\text{rad}} = -\frac{\omega^2 p_1}{r} \sin\theta \cos(\omega(t-r))$$

These satisfy the source-free Maxwell equations:
$$\nabla \cdot \mathbf{E} = 0, \quad \nabla \cdot \mathbf{B} = 0$$
$$\nabla \times \mathbf{E} + \dot{\mathbf{B}} = 0, \quad \nabla \times \mathbf{B} - \dot{\mathbf{E}} = 0$$

which are equivalent to $dF = 0$ and $d*F = 0$.

---

## Exercise 4.7: The 2-Form Machinery Translated into Tensor Machinery

**Problem:** This exercise is stated at the end of the legend caption of Figure 4.1.

### Solution

Figure 4.1 shows how a 2-form acts on an oriented surface to produce a number (the count of tubes cut).

**Translation to tensor language:**

A 2-form $F$ with components $F_{\alpha\beta}$ acts on a bivector (oriented surface element) $\Sigma^{\alpha\beta}$ by contraction:

$$\text{number} = \frac{1}{2} F_{\alpha\beta} \Sigma^{\alpha\beta}$$

For a surface parameterized by $(u,v)$ with embedding $x^\alpha(u,v)$:
$$\Sigma^{\alpha\beta} = \int \left(\frac{\partial x^\alpha}{\partial u} \frac{\partial x^\beta}{\partial v} - \frac{\partial x^\alpha}{\partial v} \frac{\partial x^\beta}{\partial u}\right) du \, dv$$

The integral of the 2-form is:
$$\int_S F = \int_S \frac{1}{2} F_{\alpha\beta} \, dx^\alpha \wedge dx^\beta = \frac{1}{2} \int F_{\alpha\beta} \Sigma^{\alpha\beta}$$

This matches the geometric picture: the 2-form $F$ is a machine that takes an oriented surface and returns a number.

---

## Exercise 4.8: Pancaking the Coulomb Field

**Problem:** Figure 4.5 shows a spacelike slice, $t = \text{const}$, through the **Maxwell** of a point-charge at rest. By the following pictorial steps, verify that the electric-field lines get compressed into the transverse direction when viewed from a moving Lorentz frame: (1) Draw a picture of an equatorial slice ($\theta = \pi/2$; $t$, $r$, $\phi$ variable) through **Maxwell** $= *F$. (2) Draw various spacelike slices, corresponding to constant time in various Lorentz frames, through the resultant geometric structure. (3) Interpret the intersection of **Maxwell** $= *F$ with each Lorentz slice in the manner of Figure 4.3.

### Solution

**Step 1: Maxwell 2-form for point charge at rest**

For a charge $e$ at rest at the origin:
$$*F = e \sin\theta \, d\theta \wedge d\phi$$

In the equatorial plane ($\theta = \pi/2$):
$$*F|_{\theta=\pi/2} = e \, d\theta \wedge d\phi$$

This represents tubes radiating outward from the charge.

**Step 2: Lorentz boost**

Consider a boost with velocity $v$ along the $z$-axis. The coordinates transform as:
$$\bar{t} = \gamma(t - vz), \quad \bar{z} = \gamma(z - vt)$$
$$\bar{x} = x, \quad \bar{y} = y$$

**Step 3: Field transformation**

The electric field transforms as:
$$\bar{E}_\parallel = E_\parallel, \quad \bar{E}_\perp = \gamma E_\perp$$

For the Coulomb field $\mathbf{E} = \frac{e}{r^2} \hat{\mathbf{r}}$:
- The radial component along the boost direction is unchanged
- The transverse components are enhanced by $\gamma$

**Step 4: Geometric interpretation**

In the moving frame, the Maxwell tubes are compressed in the direction of motion. The tube density increases in the transverse plane, corresponding to the enhanced transverse electric field:
$$\bar{E}_\perp = \gamma \frac{e \sin\theta}{r^2}$$

This is the "pancaking" effect: the field lines bunch up in the plane perpendicular to the motion.

**Step 5: Spacelike slices**

Different Lorentz frames correspond to different spacelike slices through the same 4-dimensional Faraday structure. The tube count through any closed surface surrounding the charge remains $4\pi e$ (Gauss's law), but the distribution changes with the slice angle.

---

## Exercise 4.9: Computation of Surface Integrals

**Problem:** From the definition of the integral of a $p$-form $\alpha$ over a $p$-surface $\mathcal{P}(\lambda^1, \ldots, \lambda^p)$ in $n$-dimensional space, show that the computational rule works: (1) substitute the equation for the surface into $\alpha$ and collect terms, (2) integrate.

### Solution

**Step 1: Definition of surface integral**

Let $\mathcal{P}$ be parameterized by $x^k = x^k(\lambda^1, \ldots, \lambda^p)$. The integral is defined as:
$$\int_{\mathcal{P}} \alpha = \int \left\langle \alpha, \frac{\partial \mathcal{P}}{\partial \lambda^1} \wedge \cdots \wedge \frac{\partial \mathcal{P}}{\partial \lambda^p} \right\rangle d\lambda^1 \cdots d\lambda^p$$

**Step 2: Pullback of the form**

Substitute $x^k = x^k(\lambda^1, \ldots, \lambda^p)$ into $\alpha$:
$$\alpha = \frac{1}{p!} \alpha_{i_1\cdots i_p}(x) \, dx^{i_1} \wedge \cdots \wedge dx^{i_p}$$

Using $dx^i = \frac{\partial x^i}{\partial \lambda^a} d\lambda^a$:
$$\alpha|_{\mathcal{P}} = \frac{1}{p!} \alpha_{i_1\cdots i_p} \frac{\partial x^{i_1}}{\partial \lambda^{a_1}} \cdots \frac{\partial x^{i_p}}{\partial \lambda^{a_p}} d\lambda^{a_1} \wedge \cdots \wedge d\lambda^{a_p}$$

**Step 3: Collect wedge products**

The only non-zero term is when $(a_1, \ldots, a_p)$ is a permutation of $(1, \ldots, p)$:
$$\alpha|_{\mathcal{P}} = \alpha_{i_1\cdots i_p} \frac{\partial x^{i_1}}{\partial \lambda^1} \cdots \frac{\partial x^{i_p}}{\partial \lambda^p} d\lambda^1 \wedge \cdots \wedge d\lambda^p$$

**Step 4: Integrate**

$$\int_{\mathcal{P}} \alpha = \int \alpha_{i_1\cdots i_p} \frac{\partial x^{i_1}}{\partial \lambda^1} \cdots \frac{\partial x^{i_p}}{\partial \lambda^p} d\lambda^1 \cdots d\lambda^p$$

This is the computational rule: substitute, collect, integrate.

---

## Exercise 4.10: Whitaker's Calumoid, or, The Life of a Loop

**Problem:** Take a closed loop, bounding a 2-dimensional surface $S$. It entraps a certain flux of **Faraday** $\Phi_F = \int_S F$ ("magnetic tubes") and a certain flux of **Maxwell** $\Phi_M = \int_S *F$ ("electric tubes").

(a) Show that the fluxes depend only on the choice of loop, and not on the choice of the surface $S$ bounded by the loop, if and only if $dF = d*F = 0$.

(b) Move the loop in space and time so that it continues to entrap the same two fluxes. Trace out a 2-dimensional surface ("calumoid") $\mathcal{P} = \mathcal{P}(a,b)$. Show that the elementary bivector satisfies $\langle F, \Sigma \rangle = 0$ and $\langle *F, \Sigma \rangle = 0$.

(c) Show that these differential equations can possess a solution if $dF = 0$ and $d*F = 0$.

(d) Consider a static, uniform electric field $F = -E_z \, dt \wedge dx$. Solve the equations to find the equation $\mathcal{P}(a,b)$ for the most general calumoid.

### Solution

**Part (a): Flux independence**

By Stokes' theorem, for two surfaces $S_1$ and $S_2$ with the same boundary $\partial S$:
$$\int_{S_1} F - \int_{S_2} F = \int_{S_1 - S_2} F = \int_{\partial(S_1 - S_2)} A = 0$$

if $dF = 0$ (so $F = dA$ locally).

Similarly for $*F$: flux is independent of surface choice iff $d*F = 0$.

**Part (b): Calumoid equations**

Let the calumoid be parameterized by $x^\mu = x^\mu(a,b)$. The condition that fluxes remain constant as the loop moves means:
$$\frac{\partial}{\partial a} \int_{S(a,b)} F = 0, \quad \frac{\partial}{\partial b} \int_{S(a,b)} F = 0$$

The elementary bivector is:
$$\Sigma = \frac{\partial \mathcal{P}}{\partial a} \wedge \frac{\partial \mathcal{P}}{\partial b}$$

The flux conservation conditions become:
$$\langle F, \Sigma \rangle = 0, \quad \langle *F, \Sigma \rangle = 0$$

**Part (c): Integrability**

If $dF = 0$ and $d*F = 0$, then by the Poincaré lemma, both $F$ and $*F$ are locally exact. The system of PDEs for $x^\mu(a,b)$ is integrable.

**Part (d): Uniform electric field**

For $F = -E_z \, dt \wedge dx$, we have $*F = E_z \, dy \wedge dz$.

The calumoid equations are:
$$\langle -E_z \, dt \wedge dx, \Sigma \rangle = 0 \quad \Rightarrow \quad \frac{\partial(t,x)}{\partial(a,b)} = 0$$
$$\langle E_z \, dy \wedge dz, \Sigma \rangle = 0 \quad \Rightarrow \quad \frac{\partial(y,z)}{\partial(a,b)} = 0$$

Solutions:
- (i) $y = y(a)$, $z = z(a)$, $x = x(b)$, $t = t(b)$: loop moves at infinite velocity
- (ii) $t = \text{const}$, $x = \text{const}$: loop remains at rest

---

## Exercise 4.11: Differential Forms and Hamiltonian Mechanics

**Problem:** Consider a dynamic system with two degrees of freedom. Derive the laws of mechanics from the five-dimensional space of $p_1$, $p_2$, $q^1$, $q^2$, and $t$.

### Solution

**Part (a): Evaluate $d\omega$**

The action 1-form is:
$$\omega = p_i \, dq^i - H \, dt$$

Exterior derivative:
$$d\omega = dp_i \wedge dq^i - dH \wedge dt$$
$$= dp_i \wedge dq^i - \left(\frac{\partial H}{\partial q^i} dq^i + \frac{\partial H}{\partial p_i} dp_i + \frac{\partial H}{\partial t} dt\right) \wedge dt$$
$$= dp_i \wedge dq^i - \frac{\partial H}{\partial q^i} dq^i \wedge dt - \frac{\partial H}{\partial p_i} dp_i \wedge dt$$

**Part (b): Principle of least action**

Let $\mathcal{P}/dt$ be the tangent vector to the path. The condition $d\omega(\ldots, d\mathcal{P}/dt) = 0$ gives:

$$\langle dp_i \wedge dq^i, d\mathcal{P}/dt \rangle - \frac{\partial H}{\partial q^i} \langle dq^i \wedge dt, d\mathcal{P}/dt \rangle - \frac{\partial H}{\partial p_i} \langle dp_i \wedge dt, d\mathcal{P}/dt \rangle = 0$$

With $d\mathcal{P}/dt = \dot{q}^i \frac{\partial}{\partial q^i} + \dot{p}_i \frac{\partial}{\partial p_i} + \frac{\partial}{\partial t}$:

$$\dot{q}^i dp_i - \dot{p}_i dq^i - \frac{\partial H}{\partial q^i} dq^i + \frac{\partial H}{\partial p_i} dp_i = 0$$

**Part (c): Hamilton's equations**

Collecting coefficients:
$$\left(\dot{q}^i - \frac{\partial H}{\partial p_i}\right) dp_i - \left(\dot{p}_i + \frac{\partial H}{\partial q^i}\right) dq^i = 0$$

Since $dp_i$ and $dq^i$ are independent:
$$\dot{q}^i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q^i}$$

These are Hamilton's equations.

**Part (d): Coordinate independence**

The derivation depends only on the form of $\omega = p_i \, dq^i - H \, dt$, which is preserved under canonical transformations. Therefore Hamilton's equations hold in any canonical coordinate system $(\bar{q}^i, \bar{p}_i)$.

---

## Exercise 4.12: Symmetry Operations as Tensors

**Problem:** We define the meaning of square and round brackets enclosing a set of indices. Show various properties of the alternation operator and exterior product.

### Solution

**Part (a): Components of Alt tensor**

The alternation operator is defined by:
$$[\text{Alt}(V)]_{\mu_1\ldots\mu_p} = V_{[\mu_1\ldots\mu_p]} = \frac{1}{p!} \sum_\pi (-1)^\pi V_{\pi(\mu_1)\ldots\pi(\mu_p)}$$

The components are:
$$(\text{Alt})_{\beta_1\ldots\beta_p}^{\alpha_1\ldots\alpha_p} = (p!)^{-1} \delta_{\beta_1\ldots\beta_p}^{\alpha_1\ldots\alpha_p}$$

where $\delta_{\beta_1\ldots\beta_p}^{\alpha_1\ldots\alpha_p}$ is the generalized Kronecker delta:
$$\delta_{\beta_1\ldots\beta_p}^{\alpha_1\ldots\alpha_p} = \begin{cases} +1 & \text{if } (\alpha) \text{ is even permutation of } (\beta) \\ -1 & \text{if } (\alpha) \text{ is odd permutation of } (\beta) \\ 0 & \text{otherwise} \end{cases}$$

**Part (b): Alternating tensor identity**

For any alternating tensor $A_{\alpha_1\ldots\alpha_p}$:
$$\frac{1}{p!} A_{\alpha_1\ldots\alpha_p} \delta_{\gamma_1\ldots\gamma_p\beta_{p+1}\ldots\beta_{p+q}}^{\alpha_1\ldots\alpha_p\beta_1\ldots\beta_q} = \sum_{\alpha_1 < \alpha_2 < \ldots < \alpha_p} A_{\alpha_1\ldots\alpha_p} \delta_{\gamma_1\ldots\gamma_p\beta_{p+1}\ldots\beta_{p+q}}^{\alpha_1\ldots\alpha_p\beta_1\ldots\beta_q}$$

The sum over ordered indices accounts for the antisymmetry.

**Part (c): Exterior product**

The exterior product of alternating tensors is:
$$(\alpha \wedge \beta)_{\lambda_1\ldots\lambda_{p+q}} = \delta_{\mu_1\ldots\mu_p\nu_1\ldots\nu_q}^{\lambda_1\ldots\lambda_{p+q}} \alpha_{[\mu_1\ldots\mu_p]} \beta_{[\nu_1\ldots\nu_q]}$$

This implies the component formula:
$$(\alpha \wedge \beta)_{\lambda_1\ldots\lambda_{p+q}} = \frac{(p+q)!}{p!q!} \alpha_{[\lambda_1\ldots\lambda_p} \beta_{\lambda_{p+1}\ldots\lambda_{p+q}]}$$

**Associativity:**
$$[(\alpha \wedge \beta) \wedge \gamma] = [\alpha \wedge (\beta \wedge \gamma)]$$

This follows from the associativity of the tensor product and the linearity of Alt.

**Part (d): Exterior product of vectors**

$$(u_1 \wedge u_2 \wedge \cdots \wedge u_p)^{\alpha_1\ldots\alpha_p} = \delta_{\mu_1\ldots\mu_p}^{\alpha_1\ldots\alpha_p} (u_1)^{\mu_1} \cdots (u_p)^{\mu_p}$$
$$= p! \, u_1^{[\alpha_1} u_2^{\alpha_2} \cdots u_p^{\alpha_p]}$$
$$= \det[(u_\mu)^\lambda]$$

This is the determinant of the matrix with columns $u_1, \ldots, u_p$.

---

## Summary

| Exercise | Key Result |
|----------|------------|
| 4.1 | Generic EM field has canonical form with two wedge products |
| 4.2 | Canonical transformations preserve the 2-form $F$ |
| 4.3 | Closed 1-forms are gradients: $d\sigma = 0 \Rightarrow \sigma = df$ |
| 4.4 | Rotation-free 1-forms: $dv \wedge v = 0 \Leftrightarrow v = h \, df$ |
| 4.5 | Forms with polar singularities have residue structure |
| 4.6 | Oscillating dipole satisfies $dF = 0$, $d*F = 4\pi *J$ |
| 4.7 | 2-form contraction with bivector gives tube count |
| 4.8 | Moving charge fields are "pancaked" transversely |
| 4.9 | Surface integral: substitute, collect, integrate |
| 4.10 | Calumoid: loop motion preserving fluxes |
| 4.11 | Hamilton's equations from $d\omega = 0$ |
| 4.12 | Alternation and wedge product as tensor operations |
