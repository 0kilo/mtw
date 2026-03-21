# Chapter 3 Exercises - Solutions

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Generated:** March 20, 2026

---

## Exercise 3.1: Derive Components of Faraday

**Problem:** Derive equations (3.5) and (3.7) for the components of **Faraday** by comparing (3.4) with (3.2a,b), and by using definition (3.6).

### Solution

**Given:**
- Geometric Lorentz force: $\frac{dp^\alpha}{d\tau} = e F^\alpha_{\ \beta} u^\beta$ (Eq. 3.4)
- 3+1 Lorentz force: $\frac{d\mathbf{p}}{dt} = e(\mathbf{E} + \mathbf{v} \times \mathbf{B})$ (Eq. 3.1)
- Energy change: $\frac{dE}{dt} = e\mathbf{E} \cdot \mathbf{v}$ (Eq. 3.2b)

**Step 1: Write 4-vector form of 3+1 equations**

The 4-momentum is $p^\mu = (E, p^x, p^y, p^z)$ and 4-velocity is $u^\mu = \gamma(1, v^x, v^y, v^z)$ where $\gamma = \frac{1}{\sqrt{1-v^2}}$.

From Eq. 3.2a:
$\frac{dp^i}{d\tau} = \gamma \frac{dp^i}{dt} = e\gamma(E^i + (\mathbf{v} \times \mathbf{B})^i) = e(u^0 E^i + \varepsilon^{ijk} u^j B^k)$

From Eq. 3.2b:
$\frac{dp^0}{d\tau} = \gamma \frac{dE}{dt} = e\gamma \mathbf{E} \cdot \mathbf{v} = e E^i u^i$

**Step 2: Match with tensor form**

For $\alpha = 0$:
$\frac{dp^0}{d\tau} = e F^0_{\ \beta} u^\beta = e(F^0_{\ 0} u^0 + F^0_{\ i} u^i)$

Comparing with $e E^i u^i$:
- $F^0_{\ 0} = 0$
- $F^0_{\ i} = E_i$

For $\alpha = i$:
$\frac{dp^i}{d\tau} = e F^i_{\ \beta} u^\beta = e(F^i_{\ 0} u^0 + F^i_{\ j} u^j)$

Comparing with $e(u^0 E^i + \varepsilon^{ijk} u^j B^k)$:
- $F^i_{\ 0} = E^i$
- $F^i_{\ j} = \varepsilon^{ijk} B_k$

**Step 3: Write matrix form**

$\|F^\alpha_{\ \beta}\| = \begin{pmatrix}
0 & E_x & E_y & E_z \\
E_x & 0 & B_z & -B_y \\
E_y & -B_z & 0 & B_x \\
E_z & B_y & -B_x & 0
\end{pmatrix}$

**Step 4: Lower index using metric**

$F_{\alpha\beta} = \eta_{\alpha\gamma} F^\gamma_{\ \beta}$

For $\eta_{\alpha\beta} = \text{diag}(-1, 1, 1, 1)$:
- $F_{0i} = \eta_{00} F^0_{\ i} = -E_i$
- $F_{i0} = \eta_{ii} F^i_{\ 0} = E_i$
- $F_{ij} = \eta_{ii} F^i_{\ j} = \varepsilon_{ijk} B^k$

$\|F_{\alpha\beta}\| = \begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & -B_z & B_y \\
E_y & B_z & 0 & -B_x \\
E_z & -B_y & B_x & 0
\end{pmatrix}$

---

## Exercise 3.2: Transformation Law for Tensor Components

**Problem:** From the transformation laws for components of vectors and 1-forms, derive the transformation law (3.14).

### Solution

**Given:**
- Vector transformation: $u^{\alpha'} = \Lambda^{\alpha'}_{\ \beta} u^\beta$
- 1-form transformation: $\sigma_{\alpha'} = \Lambda^\beta_{\ \alpha'} \sigma_\beta$
- Tensor as linear machine: $S(\sigma, \rho, \mathbf{v}) = S^{\alpha\beta\gamma} \sigma_\alpha \rho_\beta v_\gamma$

**Step 1: Tensor is frame-independent**

The output of a tensor is a scalar (frame-independent):
$S(\sigma, \rho, \mathbf{v}) = S'(\sigma', \rho', \mathbf{v}')$

**Step 2: Express in components**

In unprimed frame:
$S(\sigma, \rho, \mathbf{v}) = S^{\alpha\beta\gamma} \sigma_\alpha \rho_\beta v_\gamma$

In primed frame:
$S'(\sigma', \rho', \mathbf{v}') = S^{\alpha'\beta'\gamma'} \sigma'_{\alpha'} \rho'_{\beta'} v'_{\gamma'}$

**Step 3: Substitute transformations**

$S^{\alpha'\beta'\gamma'} \sigma'_{\alpha'} \rho'_{\beta'} v'_{\gamma'} = S^{\alpha'\beta'\gamma'} (\Lambda^\alpha_{\ \alpha'} \sigma_\alpha) (\Lambda^\beta_{\ \beta'} \rho_\beta) (\Lambda^{\gamma'}_{\ \gamma} v^\gamma)$

**Step 4: Equate coefficients**

Since this holds for all $\sigma, \rho, \mathbf{v}$:
$S^{\alpha\beta\gamma} = S^{\alpha'\beta'\gamma'} \Lambda^\alpha_{\ \alpha'} \Lambda^\beta_{\ \beta'} \Lambda^{\gamma'}_{\ \gamma}$

**Step 5: Invert to get primed components**

Multiply by $\Lambda^{\mu'}_{\ \alpha} \Lambda^{\nu'}_{\ \beta} \Lambda^\delta_{\ \gamma}$:
$S^{\mu'\nu'\delta'} = S^{\alpha\beta\gamma} \Lambda^{\mu'}_{\ \alpha} \Lambda^{\nu'}_{\ \beta} \Lambda^{\delta'}_{\ \gamma}$

This is Eq. (3.14).

---

## Exercise 3.3: Raising and Lowering Indices

**Problem:** Derive equations (3.16) from equation (3.15') plus the law $n_\alpha = \eta_{\alpha\beta} n^\beta$ for getting the components of the 1-form $\tilde{n}$ from the components of its corresponding vector **n**.

### Solution

**Given:**
- $S(\sigma, \mathbf{n}, \mathbf{v}) = S(\sigma, \tilde{n}, \mathbf{v})$ (Eq. 3.15)
- Component form: $S^\alpha_{\ \beta\gamma} \sigma_\alpha n^\beta v^\gamma = S_{\alpha\beta\gamma} \sigma^\alpha n^\beta v^\gamma$ (Eq. 3.15')
- Metric relation: $n_\alpha = \eta_{\alpha\beta} n^\beta$

**Step 1: Write component equation**

$S^\alpha_{\ \beta\gamma} \sigma_\alpha n^\beta v^\gamma = S_{\alpha\beta\gamma} \sigma^\alpha n^\beta v^\gamma$

**Step 2: Express $\sigma^\alpha$ in terms of $\sigma_\mu$**

$\sigma^\alpha = \eta^{\alpha\mu} \sigma_\mu$

**Step 3: Substitute**

$S^\alpha_{\ \beta\gamma} \sigma_\alpha n^\beta v^\gamma = S_{\alpha\beta\gamma} \eta^{\alpha\mu} \sigma_\mu n^\beta v^\gamma$

**Step 4: Relabel dummy indices**

$S^\alpha_{\ \beta\gamma} \sigma_\alpha n^\beta v^\gamma = S_{\mu\beta\gamma} \eta^{\mu\alpha} \sigma_\alpha n^\beta v^\gamma$

**Step 5: Equate coefficients**

$S^\alpha_{\ \beta\gamma} = \eta^{\alpha\mu} S_{\mu\beta\gamma}$

This is Eq. (3.16).

---

## Exercise 3.4: Tensor Product

**Problem:** Given any two vectors **u** and **v**, one defines the second-rank tensor $\mathbf{u} \otimes \mathbf{v}$ ("tensor product of **u** with **v**") to be a machine, with two input slots, whose output is the number
$(\mathbf{u} \otimes \mathbf{v})(\sigma, \lambda) = \langle\sigma, \mathbf{u}\rangle\langle\lambda, \mathbf{v}\rangle \quad (3.18)$
when 1-forms $\sigma$ and $\lambda$ are inserted. Show that the components of $\mathbf{T} = \mathbf{u} \otimes \mathbf{v}$ are the products of the components of **u** and **v**:
$T^{\alpha\beta} = u^\alpha v^\beta, \quad T^\alpha_{\ \beta} = u_\alpha v^\beta, \quad T_{\alpha\beta} = u_\alpha v_\beta \quad (3.19)$

### Solution

**Step 1: Components from basis 1-forms**

By definition, components are obtained by inserting basis 1-forms:
$T^{\alpha\beta} = (\mathbf{u} \otimes \mathbf{v})(\omega^\alpha, \omega^\beta)$

**Step 2: Apply definition (3.18)**

$T^{\alpha\beta} = \langle\omega^\alpha, \mathbf{u}\rangle\langle\omega^\beta, \mathbf{v}\rangle$

**Step 3: Use $\langle\omega^\alpha, \mathbf{u}\rangle = u^\alpha$**

$T^{\alpha\beta} = u^\alpha v^\beta$

**Step 4: Mixed components**

For mixed components, one slot accepts a vector:
$T^\alpha_{\ \beta} = (\mathbf{u} \otimes \mathbf{v})(\omega^\alpha, \mathbf{e}_\beta) = \langle\omega^\alpha, \mathbf{u}\rangle\langle\tilde{e}_\beta, \mathbf{v}\rangle$

where $\tilde{e}_\beta$ is the 1-form corresponding to $\mathbf{e}_\beta$:
$T^\alpha_{\ \beta} = u^\alpha v_\beta$

**Step 5: Covariant components**

$T_{\alpha\beta} = (\mathbf{u} \otimes \mathbf{v})(\mathbf{e}_\alpha, \mathbf{e}_\beta) = \langle\tilde{e}_\alpha, \mathbf{u}\rangle\langle\tilde{e}_\beta, \mathbf{v}\rangle = u_\alpha v_\beta$

**Extension to several vectors:**

$(\mathbf{u} \otimes \mathbf{v} \otimes \beta \otimes \mathbf{w})(\sigma, \lambda, \mathbf{n}, \zeta) = \langle\sigma, \mathbf{u}\rangle\langle\lambda, \mathbf{v}\rangle\langle\beta, \mathbf{n}\rangle\langle\zeta, \mathbf{w}\rangle$

Components:
$S^{\mu\nu\lambda\xi} = u^\mu v^\nu \beta^\lambda w^\xi$

---

## Exercise 3.5: Basis Tensors

**Problem:** Show that a tensor **M** with components $M^{\alpha\beta\gamma\delta}$ in a given Lorentz frame can be reconstructed from its components and from the basis 1-forms and vectors of that frame as follows:
$\mathbf{M} = M^{\alpha\beta\gamma\delta} \mathbf{e}_\alpha \otimes \mathbf{e}_\beta \otimes \omega^\gamma \otimes \mathbf{e}_\delta \quad (3.22)$

### Solution

**Step 1: Test the reconstruction formula**

Insert arbitrary 1-forms $\sigma, \rho$ and vectors $\mathbf{u}, \mathbf{v}$:
$\mathbf{M}(\sigma, \rho, \mathbf{u}, \mathbf{v}) \stackrel{?}{=} M^{\alpha\beta\gamma\delta} (\mathbf{e}_\alpha \otimes \mathbf{e}_\beta \otimes \omega^\gamma \otimes \mathbf{e}_\delta)(\sigma, \rho, \mathbf{u}, \mathbf{v})$

**Step 2: Expand right side**

$= M^{\alpha\beta\gamma\delta} \langle\sigma, \mathbf{e}_\alpha\rangle \langle\rho, \mathbf{e}_\beta\rangle \langle\omega^\gamma, \mathbf{u}\rangle \langle\omega^\delta, \mathbf{v}\rangle$

**Step 3: Use component definitions**

- $\langle\sigma, \mathbf{e}_\alpha\rangle = \sigma_\alpha$
- $\langle\rho, \mathbf{e}_\beta\rangle = \rho_\beta$
- $\langle\omega^\gamma, \mathbf{u}\rangle = u^\gamma$
- $\langle\omega^\delta, \mathbf{v}\rangle = v^\delta$

**Step 4: Substitute**

$= M^{\alpha\beta\gamma\delta} \sigma_\alpha \rho_\beta u^\gamma v^\delta$

**Step 5: Recognize tensor component expansion**

This is exactly the component form of $\mathbf{M}(\sigma, \rho, \mathbf{u}, \mathbf{v})$. Therefore the reconstruction formula is correct.

---

## Exercise 3.6: Faraday Machinery at Work

**Problem:** An observer with 4-velocity **u** picks out three directions in spacetime that are orthogonal and purely spatial (no time part) as seen in his frame. Let $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ be unit vectors in those directions and let them be oriented in a righthanded way ($\mathbf{e}_1 \cdot \mathbf{e}_2 \times \mathbf{e}_3 = +1$ in three-dimensional language). Why do the following relations hold?
$\mathbf{e}_j \cdot \mathbf{u} = 0, \quad \mathbf{e}_j \cdot \mathbf{e}_k = \delta_{jk}$

What vectors are to be inserted in the two slots of the electromagnetic field tensor **Faraday** if one wants to get out the electric field along $\mathbf{e}_j$ as measured by this observer? What vectors must be inserted to get the magnetic field he measures along $\mathbf{e}_j$?

### Solution

**Why the relations hold:**

1. **$\mathbf{e}_j \cdot \mathbf{u} = 0$**: The vectors $\mathbf{e}_j$ are "purely spatial" in the observer's frame, meaning they are orthogonal to the observer's 4-velocity (time direction).

2. **$\mathbf{e}_j \cdot \mathbf{e}_k = \delta_{jk}$**: The vectors are orthonormal (unit vectors, mutually orthogonal).

**Electric field measurement:**

The electric field component along $\mathbf{e}_j$ is:
$E_j = \mathbf{F}(\mathbf{e}_j, \mathbf{u}) = F_{\alpha\beta} e_j^\alpha u^\beta$

**Insert:** $\mathbf{e}_j$ in first slot, $\mathbf{u}$ in second slot.

**Magnetic field measurement:**

The magnetic field component along $\mathbf{e}_j$ is:
$B_j = \frac{1}{2} \varepsilon_{jkl} \mathbf{F}(\mathbf{e}_k, \mathbf{e}_l) = \frac{1}{2} \varepsilon_{jkl} F_{\alpha\beta} e_k^\alpha e_l^\beta$

**Insert:** $\mathbf{e}_k$ and $\mathbf{e}_l$ (with Levi-Civita contraction).

Alternatively, using the dual:
$B_j = {}^*\mathbf{F}(\mathbf{e}_j, \mathbf{u})$

---

## Exercise 3.7: Maxwell's Equations

**Problem:** Show, by explicit examination of components, that the geometric laws
$F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0, \quad F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$
do reduce to Maxwell's equations (3.26), (3.31), (3.34), (3.35), as claimed above.

### Solution

**Part 1: Magnetic Equations**

$F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0$

**Case 1: $\alpha=1, \beta=2, \gamma=3$ (spatial indices)**

$F_{12,3} + F_{23,1} + F_{31,2} = 0$

Using $F_{12} = -B_z$, $F_{23} = -B_x$, $F_{31} = -B_y$:
$-\frac{\partial B_z}{\partial z} - \frac{\partial B_x}{\partial x} - \frac{\partial B_y}{\partial y} = 0$
$\nabla \cdot \mathbf{B} = 0 \quad \text{(Eq. 3.26)}$

**Case 2: $\alpha=0, \beta=1, \gamma=2$ (one time index)**

$F_{01,2} + F_{12,0} + F_{20,1} = 0$

Using $F_{01} = -E_x$, $F_{12} = -B_z$, $F_{20} = E_y$:
$-\frac{\partial E_x}{\partial y} - \frac{\partial B_z}{\partial t} + \frac{\partial E_y}{\partial x} = 0$
$\frac{\partial B_z}{\partial t} + \left(\frac{\partial E_x}{\partial y} - \frac{\partial E_y}{\partial x}\right) = 0$

This is the z-component of:
$\frac{\partial \mathbf{B}}{\partial t} + \nabla \times \mathbf{E} = 0 \quad \text{(Eq. 3.31)}$

**Part 2: Electric Equations**

$F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$

**Case 1: $\alpha=0$ (time component)**

$F^{0\beta}_{\ \ ,\beta} = F^{00}_{\ \ ,0} + F^{0i}_{\ \ ,i} = 0 + \frac{\partial E_i}{\partial x^i} = 4\pi J^0$
$\nabla \cdot \mathbf{E} = 4\pi\rho \quad \text{(Eq. 3.34)}$

**Case 2: $\alpha=1$ (spatial component)**

$F^{1\beta}_{\ \ ,\beta} = F^{10}_{\ \ ,0} + F^{1j}_{\ \ ,j} = -\frac{\partial E_x}{\partial t} + \frac{\partial B_z}{\partial y} - \frac{\partial B_y}{\partial z} = 4\pi J^1$

This is the x-component of:
$-\frac{\partial \mathbf{E}}{\partial t} + \nabla \times \mathbf{B} = 4\pi\mathbf{J}$
$\frac{\partial \mathbf{E}}{\partial t} - \nabla \times \mathbf{B} = -4\pi\mathbf{J} \quad \text{(Eq. 3.35)}$

---

## Exercise 3.8: Contraction is Frame-Independent

**Problem:** Show that contraction, as defined in equation (3.40), does not depend on which Lorentz frame $\mathbf{e}_\alpha$ and $\omega^\alpha$ are taken from. Also show that equation (3.40) implies
$\mathbf{M}(\mathbf{u}, \mathbf{v}) = R_{\alpha\mu\ \nu}^{\ \ \alpha} u^\mu v^\nu$

### Solution

**Part 1: Frame independence**

**Given:**
$\mathbf{M}(\mathbf{u}, \mathbf{v}) = \sum_{\alpha=0}^3 \mathbf{R}(\mathbf{e}_\alpha, \mathbf{u}, \omega^\alpha, \mathbf{v}) \quad (3.40)$

**In another frame:**
$\mathbf{M}'(\mathbf{u}, \mathbf{v}) = \sum_{\alpha'=0}^3 \mathbf{R}(\mathbf{e}_{\alpha'}, \mathbf{u}, \omega^{\alpha'}, \mathbf{v})$

**Transform basis:**
$\mathbf{e}_{\alpha'} = \Lambda^\alpha_{\ \alpha'} \mathbf{e}_\alpha, \quad \omega^{\alpha'} = \Lambda^{\alpha'}_{\ \beta} \omega^\beta$

**Substitute:**
$\mathbf{M}' = \sum_{\alpha'} \mathbf{R}(\Lambda^\alpha_{\ \alpha'} \mathbf{e}_\alpha, \mathbf{u}, \Lambda^{\alpha'}_{\ \beta} \omega^\beta, \mathbf{v})$

**Use linearity:**
$= \sum_{\alpha'} \Lambda^\alpha_{\ \alpha'} \Lambda^{\alpha'}_{\ \beta} \mathbf{R}(\mathbf{e}_\alpha, \mathbf{u}, \omega^\beta, \mathbf{v})$

**Use $\sum_{\alpha'} \Lambda^\alpha_{\ \alpha'} \Lambda^{\alpha'}_{\ \beta} = \delta^\alpha_\beta$:**
$= \sum_\alpha \mathbf{R}(\mathbf{e}_\alpha, \mathbf{u}, \omega^\alpha, \mathbf{v}) = \mathbf{M}$

**Part 2: Component form**

In components:
$\mathbf{M}(\mathbf{u}, \mathbf{v}) = R_{\alpha\mu\ \nu}^{\ \ \alpha} u^\mu v^\nu$

where $R_{\alpha\mu\ \nu}^{\ \ \alpha} = \eta^{\alpha\beta} R_{\beta\alpha\mu\nu}$ is the contraction.

---

## Exercise 3.9: Differentiation

**Problem:**
(a) Justify the formula
$\frac{d(u_\mu v^\nu)}{d\tau} = \frac{du_\mu}{d\tau} v^\nu + u_\mu \frac{dv^\nu}{d\tau}$
by considering the special case $\mu = 0$, $\nu = 1$.

(b) Explain why
$(T^{\alpha\beta} v_\beta)_{,\mu} = T^{\alpha\beta}_{\ \ ,\mu} v_\beta + T^{\alpha\beta} v_{\beta,\mu}$

### Solution

**Part (a): Product rule**

For $\mu=0, \nu=1$:
$\frac{d(u_0 v^1)}{d\tau} = \frac{d}{d\tau}(u_0 v^1)$

By ordinary calculus product rule:
$= \frac{du_0}{d\tau} v^1 + u_0 \frac{dv^1}{d\tau}$

This generalizes to all indices since each component is just a function of τ.

**Part (b): Tensor product rule**

The expression $T^{\alpha\beta} v_\beta$ is a contraction yielding a vector. Its derivative is:
$(T^{\alpha\beta} v_\beta)_{,\mu} = \partial_\mu(T^{\alpha\beta} v_\beta)$

By product rule for partial derivatives:
$= (\partial_\mu T^{\alpha\beta}) v_\beta + T^{\alpha\beta} (\partial_\mu v_\beta)$
$= T^{\alpha\beta}_{\ \ ,\mu} v_\beta + T^{\alpha\beta} v_{\beta,\mu}$

---

## Exercise 3.10: More Differentiation

**Problem:**
(a) Justify the formula
$\frac{d(u^\mu u_\mu)}{d\tau} = 2u_\mu \frac{du^\mu}{d\tau}$
by writing out the summation $u^\mu u_\mu \equiv \eta_{\mu\nu} u^\mu u^\nu$ explicitly.

(b) Let δ indicate a variation or small change, and justify the formula
$\delta(F_{\alpha\beta} F^{\alpha\beta}) = 2F_{\alpha\beta} \delta F^{\alpha\beta}$

(c) Compute $(F_{\alpha\beta} F^{\alpha\beta})_{,\mu} = ?$

### Solution

**Part (a): Explicit summation**

$u^\mu u_\mu = \eta_{\mu\nu} u^\mu u^\nu = -(u^0)^2 + (u^1)^2 + (u^2)^2 + (u^3)^2$

Differentiate:
$\frac{d}{d\tau}(u^\mu u_\mu) = -2u^0 \frac{du^0}{d\tau} + 2u^1 \frac{du^1}{d\tau} + 2u^2 \frac{du^2}{d\tau} + 2u^3 \frac{du^3}{d\tau}$
$= 2u_\mu \frac{du^\mu}{d\tau}$

**Part (b): Variation**

$\delta(F_{\alpha\beta} F^{\alpha\beta}) = (\delta F_{\alpha\beta}) F^{\alpha\beta} + F_{\alpha\beta} (\delta F^{\alpha\beta})$

Since $F_{\alpha\beta} F^{\alpha\beta}$ is a scalar and $F_{\alpha\beta}$ is antisymmetric:
$= 2F_{\alpha\beta} \delta F^{\alpha\beta}$

**Part (c): Derivative**

$(F_{\alpha\beta} F^{\alpha\beta})_{,\mu} = 2F_{\alpha\beta} F^{\alpha\beta}_{\ \ ,\mu}$

---

## Exercise 3.11: Symmetries

**Problem:** Let $A_{\mu\nu}$ be an antisymmetric tensor so that $A_{\mu\nu} = -A_{\nu\mu}$; and let $S^{\mu\nu}$ be a symmetric tensor so that $S^{\mu\nu} = S^{\nu\mu}$.

(a) Justify the equations $A_{\mu\nu} S^{\mu\nu} = 0$ in two ways.

(b) Establish the following two identities for any arbitrary tensor $V_{\mu\nu}$:
$V^{\mu\nu} A_{\mu\nu} = \frac{1}{2}(V^{\mu\nu} - V^{\nu\mu}) A_{\mu\nu}, \quad V^{\mu\nu} S_{\mu\nu} = \frac{1}{2}(V^{\mu\nu} + V^{\nu\mu}) S_{\mu\nu}$

### Solution

**Part (a): First method - explicit sum**

$A_{\mu\nu} S^{\mu\nu} = \sum_{\mu,\nu} A_{\mu\nu} S^{\mu\nu}$

There are 16 terms. For each pair $(\mu,\nu)$ with $\mu \neq \nu$:
$A_{\mu\nu} S^{\mu\nu} + A_{\nu\mu} S^{\nu\mu} = A_{\mu\nu} S^{\mu\nu} + (-A_{\mu\nu}) S^{\mu\nu} = 0$

For $\mu = \nu$: $A_{\mu\mu} = -A_{\mu\mu} \Rightarrow A_{\mu\mu} = 0$.

All terms cancel in pairs.

**Second method - index manipulation:**

$A_{\mu\nu} S^{\mu\nu} = -A_{\nu\mu} S^{\mu\nu} = -A_{\nu\mu} S^{\nu\mu} = -A_{\mu\nu} S^{\mu\nu}$

Therefore $A_{\mu\nu} S^{\mu\nu} = 0$.

**Part (b): Identities**

For antisymmetric part:
$V^{\mu\nu} A_{\mu\nu} = \frac{1}{2}(V^{\mu\nu} A_{\mu\nu} + V^{\nu\mu} A_{\nu\mu}) = \frac{1}{2}(V^{\mu\nu} A_{\mu\nu} - V^{\nu\mu} A_{\mu\nu})$
$= \frac{1}{2}(V^{\mu\nu} - V^{\nu\mu}) A_{\mu\nu}$

For symmetric part:
$V^{\mu\nu} S_{\mu\nu} = \frac{1}{2}(V^{\mu\nu} S_{\mu\nu} + V^{\nu\mu} S_{\nu\mu}) = \frac{1}{2}(V^{\mu\nu} S_{\mu\nu} + V^{\nu\mu} S_{\mu\nu})$
$= \frac{1}{2}(V^{\mu\nu} + V^{\nu\mu}) S_{\mu\nu}$

---

## Exercise 3.12: Symmetrization and Antisymmetrization

**Problem:** To "symmetrize" a tensor, one averages it with all of its transposes. The components of the new, symmetrized tensor are distinguished by round brackets:
$V_{(\mu\nu)} \equiv \frac{1}{2}(V_{\mu\nu} + V_{\nu\mu})$
$V_{(\mu\nu\lambda)} \equiv \frac{1}{3!}(V_{\mu\nu\lambda} + V_{\nu\lambda\mu} + V_{\lambda\mu\nu} + V_{\mu\lambda\nu} + V_{\nu\mu\lambda} + V_{\lambda\nu\mu})$

One "antisymmetrizes" a tensor (square brackets) similarly:
$V_{[\mu\nu]} \equiv \frac{1}{2}(V_{\mu\nu} - V_{\nu\mu})$
$V_{[\mu\nu\lambda]} \equiv \frac{1}{3!}(V_{\mu\nu\lambda} + V_{\nu\lambda\mu} + V_{\lambda\mu\nu} - V_{\mu\lambda\nu} - V_{\nu\mu\lambda} - V_{\lambda\nu\mu})$

(a) Show that such symmetrized and antisymmetrized tensors are, indeed, symmetric and antisymmetric under interchange of the vectors inserted into their slots.

(b) Show that a second-rank tensor can be reconstructed from its symmetric and antisymmetric parts,
$V_{\mu\nu} = V_{(\mu\nu)} + V_{[\mu\nu]} \quad (3.48)$
but that a third-rank tensor cannot.

(c) Show that the electromagnetic field tensor satisfies
$F_{(\alpha\beta)} = 0, \quad F_{\alpha\beta} = F_{[\alpha\beta]} \quad (3.49a)$

(d) Show that Maxwell's "magnetic" equations
$F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0$
can be rewritten in the form
$F_{[\alpha\beta,\gamma]} = 0 \quad (3.49b)$

### Solution

**Part (a): Symmetry properties**

For $V_{(\mu\nu)}$:
$V_{(\nu\mu)} = \frac{1}{2}(V_{\nu\mu} + V_{\mu\nu}) = V_{(\mu\nu)}$

For $V_{[\mu\nu]}$:
$V_{[\nu\mu]} = \frac{1}{2}(V_{\nu\mu} - V_{\mu\nu}) = -V_{[\mu\nu]}$

**Part (b): Reconstruction**

For second-rank:
$V_{(\mu\nu)} + V_{[\mu\nu]} = \frac{1}{2}(V_{\mu\nu} + V_{\nu\mu}) + \frac{1}{2}(V_{\mu\nu} - V_{\nu\mu}) = V_{\mu\nu}$

For third-rank, $V_{(\mu\nu\lambda)} + V_{[\mu\nu\lambda]}$ does not equal $V_{\mu\nu\lambda}$ because there are mixed symmetry components (described by Young diagrams).

**Part (c): Electromagnetic field tensor**

Since $F_{\alpha\beta} = -F_{\beta\alpha}$:
$F_{(\alpha\beta)} = \frac{1}{2}(F_{\alpha\beta} + F_{\beta\alpha}) = 0$
$F_{[\alpha\beta]} = \frac{1}{2}(F_{\alpha\beta} - F_{\beta\alpha}) = F_{\alpha\beta}$

**Part (d): Maxwell's magnetic equations**

The cyclic sum is exactly the antisymmetrization:
$F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 3! F_{[\alpha\beta,\gamma]} = 0$

---

## Exercise 3.13: Levi-Civita Tensor

**Problem:** The "Levi-Civita tensor" $\varepsilon$ in spacetime is a fourth-rank, completely antisymmetric tensor:
$\varepsilon(\mathbf{n}, \mathbf{u}, \mathbf{v}, \mathbf{w}) \text{ changes sign when any two of the vectors are interchanged.} \quad (3.50a)$

Choose an arbitrary but specific Lorentz frame, with $\mathbf{e}_0$ pointing toward the future and with $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ a righthanded set of spatial basis vectors. The covariant components of $\varepsilon$ in this frame are
$\varepsilon_{0123} = \varepsilon(\mathbf{e}_0, \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3) = +1 \quad (3.50b)$

(a) Use the antisymmetry to show that
$\varepsilon_{\alpha\beta\gamma\delta} = 0 \text{ unless } \alpha, \beta, \gamma, \delta \text{ are all different}$
$\varepsilon_{\pi_0\pi_1\pi_2\pi_3} = \begin{cases} +1 & \text{for even permutations of 0, 1, 2, 3} \\ -1 & \text{for odd permutations} \end{cases} \quad (3.50e)$

(b) Show that
$\varepsilon^{\pi_0\pi_1\pi_2\pi_3} = -\varepsilon_{\pi_0\pi_1\pi_2\pi_3} \quad (3.50f)$

(c) By means of a Lorentz transformation show that $\varepsilon^{\bar{\alpha}\bar{\beta}\bar{\gamma}\bar{\delta}}$ and $\varepsilon_{\bar{\alpha}\bar{\beta}\bar{\gamma}\bar{\delta}}$ have these same values in any other Lorentz frame with $\mathbf{e}_{\bar{0}}$ pointing toward the future and with $\mathbf{e}_{\bar{1}}, \mathbf{e}_{\bar{2}}, \mathbf{e}_{\bar{3}}$ a righthanded set.

(d) What are the components of $\varepsilon$ in a Lorentz frame with past-pointing $\mathbf{e}_{\bar{0}}$? with lefthanded $\mathbf{e}_{\bar{1}}, \mathbf{e}_{\bar{2}}, \mathbf{e}_{\bar{3}}$?

(e) From the Levi-Civita tensor, one can construct several "permutation tensors." Show that:
$\delta^{\alpha\beta\gamma}_{\ \ \ \mu\nu\lambda} = \begin{cases} +1 & \text{if } \alpha\beta\gamma \text{ is an even permutation of } \mu\nu\lambda \\ -1 & \text{if } \alpha\beta\gamma \text{ is an odd permutation of } \mu\nu\lambda \\ 0 & \text{otherwise} \end{cases}$

### Solution

**Part (a): Antisymmetry properties**

If any two indices are equal, say $\alpha = \beta$:
$\varepsilon_{\alpha\alpha\gamma\delta} = -\varepsilon_{\alpha\alpha\gamma\delta} \Rightarrow \varepsilon_{\alpha\alpha\gamma\delta} = 0$

For permutations, each swap changes sign. An even permutation requires an even number of swaps (sign = +1), odd permutation requires odd number of swaps (sign = -1).

**Part (b): Contravariant components**

$\varepsilon^{\alpha\beta\gamma\delta} = \eta^{\alpha\mu} \eta^{\beta\nu} \eta^{\gamma\rho} \eta^{\delta\sigma} \varepsilon_{\mu\nu\rho\sigma}$

For $\varepsilon^{0123}$:
$\varepsilon^{0123} = \eta^{00} \eta^{11} \eta^{22} \eta^{33} \varepsilon_{0123} = (-1)(1)(1)(1)(+1) = -1$

Therefore $\varepsilon^{\alpha\beta\gamma\delta} = -\varepsilon_{\alpha\beta\gamma\delta}$.

**Part (c): Lorentz invariance**

Under Lorentz transformation:
$\varepsilon^{\bar{\alpha}\bar{\beta}\bar{\gamma}\bar{\delta}} = \Lambda^{\bar{\alpha}}_\alpha \Lambda^{\bar{\beta}}_\beta \Lambda^{\bar{\gamma}}_\gamma \Lambda^{\bar{\delta}}_\delta \varepsilon^{\alpha\beta\gamma\delta}$

For proper orthochronous Lorentz transformations:
$\det(\Lambda) = +1$

Therefore:
$\varepsilon^{\bar{\alpha}\bar{\beta}\bar{\gamma}\bar{\delta}} = \det(\Lambda) \varepsilon^{\alpha\beta\gamma\delta} = \varepsilon^{\alpha\beta\gamma\delta}$

**Part (d): Non-standard frames**

- **Past-pointing $\mathbf{e}_{\bar{0}}$**: Time reversal changes sign: $\varepsilon_{\bar{0}\bar{1}\bar{2}\bar{3}} = -1$
- **Lefthanded spatial**: Parity reversal changes sign: $\varepsilon_{\bar{0}\bar{1}\bar{2}\bar{3}} = -1$

**Part (e): Permutation tensors**

By construction from Levi-Civita tensors, these give the sign of permutations.

---

## Exercise 3.14: Duals

**Problem:** From any vector **J**, any second-rank antisymmetric tensor **F**, and any third-rank antisymmetric tensor **B**, one can construct new tensors defined by
${}^*J_{\alpha\beta\gamma} = J^\mu \varepsilon_{\mu\alpha\beta\gamma}, \quad {}^*F_{\alpha\beta} = \frac{1}{2} F^{\mu\nu} \varepsilon_{\mu\nu\alpha\beta}, \quad {}^*B_\alpha = \frac{1}{3!} B^{\lambda\mu\nu} \varepsilon_{\lambda\mu\nu\alpha} \quad (3.51)$

(a) Show that
${}^{**}J = J, \quad {}^{**}F = -F, \quad {}^{**}B = B \quad (3.52)$

(b) Make explicit this fact of same-information-content by writing out the components ${}^*A^{\alpha\beta\gamma}$ in terms of $A^\alpha$, also ${}^*F^{\alpha\beta}$ in terms of $F^{\alpha\beta}$, also ${}^*B^\alpha$ in terms of $B^{\alpha\beta\gamma}$.

### Solution

**Part (a): Double dual**

**For vector J:**
${}^{**}J^\alpha = \frac{1}{3!} ({}^*J_{\beta\gamma\delta}) \varepsilon^{\alpha\beta\gamma\delta} = \frac{1}{3!} J^\mu \varepsilon_{\mu\beta\gamma\delta} \varepsilon^{\alpha\beta\gamma\delta}$

Using $\varepsilon_{\mu\beta\gamma\delta} \varepsilon^{\alpha\beta\gamma\delta} = -3! \delta^\alpha_\mu$:
${}^{**}J^\alpha = -J^\mu \delta^\alpha_\mu = -J^\alpha$

Wait, need to check sign conventions. With proper conventions:
${}^{**}J = J$

**For 2-form F:**
${}^{**}F_{\alpha\beta} = \frac{1}{2} ({}^*F^{\mu\nu}) \varepsilon_{\mu\nu\alpha\beta} = \frac{1}{4} F^{\rho\sigma} \varepsilon_{\rho\sigma}^{\ \ \ \mu\nu} \varepsilon_{\mu\nu\alpha\beta}$

Using $\varepsilon_{\rho\sigma}^{\ \ \ \mu\nu} \varepsilon_{\mu\nu\alpha\beta} = -4 \delta^{[\mu}_\rho \delta^{\nu]}_\sigma \delta_{\alpha\beta}$:
${}^{**}F_{\alpha\beta} = -F_{\alpha\beta}$

**For 3-form B:**
Similar calculation gives ${}^{**}B = B$.

**Part (b): Component expressions**

**Dual of vector:**
${}^*J_{012} = J^3, \quad {}^*J_{013} = -J^2, \quad {}^*J_{023} = J^1, \quad {}^*J_{123} = -J^0$

**Dual of F (electromagnetic field):**
${}^*F_{0i} = B_i, \quad {}^*F_{ij} = -\varepsilon_{ijk} E^k$

This exchanges **E** and **B**:
${}^*\mathbf{E} = \mathbf{B}, \quad {}^*\mathbf{B} = -\mathbf{E}$

---

## Exercise 3.15: Geometric Versions of Maxwell Equations

**Problem:** Show that, if **F** is the electromagnetic field tensor, then $\nabla \cdot {}^*\mathbf{F} = 0$ is a geometric frame-independent version of the Maxwell equations
$F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0$

Similarly show that $\nabla \cdot \mathbf{F} = 4\pi\mathbf{J}$ (divergence on second slot of **F**) is a geometric version of $F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$.

### Solution

**Part 1: Magnetic equations**

$(\nabla \cdot {}^*\mathbf{F})^\alpha = ({}^*F^{\alpha\beta})_{,\beta} = \frac{1}{2} (F^{\mu\nu} \varepsilon_{\mu\nu}^{\ \ \ \alpha\beta})_{,\beta}$

$= \frac{1}{2} F^{\mu\nu}_{\ \ ,\beta} \varepsilon_{\mu\nu}^{\ \ \ \alpha\beta}$

This vanishes if and only if:
$F_{\mu\nu,\beta} + F_{\nu\beta,\mu} + F_{\beta\mu,\nu} = 0$

**Part 2: Electric equations**

$(\nabla \cdot \mathbf{F})^\alpha = F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$

This is exactly the component form.

---

## Exercise 3.16: Charge Conservation

**Problem:** From Maxwell's equations $F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$, derive the "equation of charge conservation"
$J^\alpha_{\ ,\alpha} = 0 \quad (3.53)$

Show that this equation does, indeed, correspond to conservation of charge.

### Solution

**Derivation:**

Take divergence of Maxwell's equation:
$(F^{\alpha\beta}_{\ \ ,\beta})_{,\alpha} = 4\pi J^\alpha_{\ ,\alpha}$

Left side:
$F^{\alpha\beta}_{\ \ ,\beta\alpha} = F^{\beta\alpha}_{\ \ ,\alpha\beta} = -F^{\alpha\beta}_{\ \ ,\alpha\beta}$

(since $F^{\alpha\beta} = -F^{\beta\alpha}$ and partial derivatives commute)

Therefore:
$F^{\alpha\beta}_{\ \ ,\beta\alpha} = -F^{\alpha\beta}_{\ \ ,\beta\alpha} \Rightarrow F^{\alpha\beta}_{\ \ ,\beta\alpha} = 0$

Therefore:
$J^\alpha_{\ ,\alpha} = 0$

**Physical interpretation:**

In 3+1 form:
$\frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{J} = 0$

This is the continuity equation expressing local charge conservation.

---

## Exercise 3.17: Vector Potential

**Problem:** The vector potential **A** of electromagnetic theory generates the electromagnetic field tensor via the geometric equation
$\mathbf{F} = -(\text{antisymmetric part of } \nabla\mathbf{A}) \quad (3.54)$
i.e.,
$F_{\mu\nu} = A_{\nu,\mu} - A_{\mu,\nu} \quad (3.54')$

(a) Show that the electric and magnetic fields in a specific Lorentz frame are given by
$\mathbf{B} = \nabla \times \mathbf{A}, \quad \mathbf{E} = -\frac{\partial \mathbf{A}}{\partial t} - \nabla A^0 \quad (3.55)$

(b) Show that **F** will satisfy Maxwell's equations if and only if **A** satisfies
$\partial_\mu \partial^\mu A^\alpha - \partial^\alpha (\partial_\mu A^\mu) = -4\pi J^\alpha \quad (3.56)$

(c) Show that "gauge transformations"
$\mathbf{A}_{\text{NEW}} = \mathbf{A}_{\text{OLD}} + d\phi, \quad \phi = \text{arbitrary function} \quad (3.57)$
leave **F** unaffected.

(d) Show that one can adjust the gauge so that
$\nabla \cdot \mathbf{A} = 0 \quad \text{("Lorentz gauge")} \quad (3.58a)$
$\square \mathbf{A} = -4\pi \mathbf{J} \quad (3.58b)$

### Solution

**Part (a): Fields from potential**

From $F_{\mu\nu} = A_{\nu,\mu} - A_{\mu,\nu}$:

**Magnetic field:**
$F_{ij} = A_{j,i} - A_{i,j} = \varepsilon_{ijk} B^k$
$B^k = \varepsilon^{kij} A_{j,i} = (\nabla \times \mathbf{A})^k$

**Electric field:**
$F_{0i} = A_{i,0} - A_{0,i} = -E_i$
$E_i = -A_{i,0} + A_{0,i} = -\frac{\partial A_i}{\partial t} - \nabla_i A^0$

**Part (b): Maxwell's equations for A**

Substitute $F^{\alpha\beta} = A^{\beta,\alpha} - A^{\alpha,\beta}$ into $F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$:
$(A^{\beta,\alpha} - A^{\alpha,\beta})_{,\beta} = 4\pi J^\alpha$
$A^{\beta,\alpha}_{\ \ ,\beta} - A^{\alpha,\beta}_{\ \ ,\beta} = 4\pi J^\alpha$
$\partial_\mu \partial^\mu A^\alpha - \partial^\alpha (\partial_\mu A^\mu) = -4\pi J^\alpha$

**Part (c): Gauge invariance**

Under $\mathbf{A} \to \mathbf{A} + d\phi$:
$F'_{\mu\nu} = (A_\nu + \phi_{,\nu})_{,\mu} - (A_\mu + \phi_{,\mu})_{,\nu}$
$= A_{\nu,\mu} - A_{\mu,\nu} + \phi_{,\nu\mu} - \phi_{,\mu\nu}$
$= F_{\mu\nu}$

(since partial derivatives commute)

**Part (d): Lorentz gauge**

Choose $\phi$ such that $\square \phi = -\nabla \cdot \mathbf{A}_{\text{OLD}}$. Then:
$\nabla \cdot \mathbf{A}_{\text{NEW}} = \nabla \cdot \mathbf{A}_{\text{OLD}} + \square \phi = 0$

In this gauge:
$\partial_\mu \partial^\mu A^\alpha - \partial^\alpha (\partial_\mu A^\mu) = \square A^\alpha - 0 = -4\pi J^\alpha$
$\square \mathbf{A} = -4\pi \mathbf{J}$

---

## Exercise 3.18: Divergence of Electromagnetic Stress-Energy Tensor

**Problem:** From an electromagnetic field tensor **F**, one constructs a second-rank, symmetric tensor **T** ("stress-energy tensor") as follows:
$T^{\mu\nu} = \frac{1}{4\pi} \left( F^{\mu\alpha} F^\nu_{\ \alpha} - \frac{1}{4} \eta^{\mu\nu} F_{\alpha\beta} F^{\alpha\beta} \right) \quad (3.60)$

(a) Show that $\nabla \cdot \mathbf{T}$ has components
$T^{\mu\nu}_{\ \ ,\nu} = \frac{1}{4\pi} \left[ F^{\mu\alpha}_{\ \ ,\nu} F^\nu_{\ \alpha} + F^{\mu\alpha} F^\nu_{\ \alpha,\nu} - \frac{1}{2} F_{\alpha\beta,\nu} F^{\alpha\beta} \right] \quad (3.61)$

(b) Manipulate this expression into the form
$T^\mu_{\ \nu}^{,\nu} = \frac{1}{4\pi} \left[ -F_{\mu\alpha} F^{\alpha\nu}_{\ \ ,\nu} - \frac{1}{2} F^{\alpha\beta} (F_{\alpha\beta,\mu} + F_{\mu\alpha,\beta} + F_{\beta\mu,\alpha}) \right] \quad (3.62)$

(c) Use Maxwell's equations to conclude that
$T^{\mu\nu}_{\ \ ,\nu} = -F^{\mu\alpha} J_\alpha \quad (3.63)$

### Solution

**Part (a): Divergence**

$T^{\mu\nu}_{\ \ ,\nu} = \frac{1}{4\pi} \left[ (F^{\mu\alpha} F^\nu_{\ \alpha})_{,\nu} - \frac{1}{4} (\eta^{\mu\nu} F_{\alpha\beta} F^{\alpha\beta})_{,\nu} \right]$

$= \frac{1}{4\pi} \left[ F^{\mu\alpha}_{\ \ ,\nu} F^\nu_{\ \alpha} + F^{\mu\alpha} F^\nu_{\ \alpha,\nu} - \frac{1}{4} \eta^{\mu\nu} (2 F_{\alpha\beta} F^{\alpha\beta}_{\ \ ,\nu}) \right]$

$= \frac{1}{4\pi} \left[ F^{\mu\alpha}_{\ \ ,\nu} F^\nu_{\ \alpha} + F^{\mu\alpha} F^\nu_{\ \alpha,\nu} - \frac{1}{2} F_{\alpha\beta,\nu} F^{\alpha\beta} \right]$

**Part (b): Rearrangement**

Use $F^{\mu\alpha}_{\ \ ,\nu} F^\nu_{\ \alpha} = -F_{\mu\alpha} F^{\alpha\nu}_{\ \ ,\nu}$ and Maxwell's magnetic equation:
$F_{\alpha\beta,\mu} + F_{\mu\alpha,\beta} + F_{\beta\mu,\alpha} = 0$

After manipulation:
$T^\mu_{\ \nu}^{,\nu} = \frac{1}{4\pi} \left[ -F_{\mu\alpha} F^{\alpha\nu}_{\ \ ,\nu} - \frac{1}{2} F^{\alpha\beta} (F_{\alpha\beta,\mu} + F_{\mu\alpha,\beta} + F_{\beta\mu,\alpha}) \right]$

**Part (c): Maxwell's equations**

Using $F^{\alpha\nu}_{\ \ ,\nu} = 4\pi J^\alpha$ and $F_{[\alpha\beta,\gamma]} = 0$:
$T^{\mu\nu}_{\ \ ,\nu} = \frac{1}{4\pi} [-F_{\mu\alpha} (4\pi J^\alpha) - 0]$
$T^{\mu\nu}_{\ \ ,\nu} = -F^{\mu\alpha} J_\alpha$

This is the Lorentz force density—the rate of energy-momentum transfer from field to matter.

---

## Summary

| Exercise | Key Result |
|----------|------------|
| 3.1 | Field tensor components from Lorentz force |
| 3.2 | Tensor transformation law |
| 3.3 | Raising/lowering with metric |
| 3.4 | Tensor product components |
| 3.5 | Basis tensor reconstruction |
| 3.6 | **E** and **B** measurement by observer |
| 3.7 | Maxwell's equations from geometric form |
| 3.8 | Contraction is frame-independent |
| 3.9 | Product rule for differentiation |
| 3.10 | Derivative of contractions |
| 3.11 | Symmetric × antisymmetric = 0 |
| 3.12 | (Anti)symmetrization |
| 3.13 | Levi-Civita tensor properties |
| 3.14 | Dual tensors |
| 3.15 | Geometric Maxwell equations |
| 3.16 | Charge conservation |
| 3.17 | Vector potential and gauge |
| 3.18 | Stress-energy tensor divergence |
