# Chapter 2 Technical Summary - For Exercises

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Purpose:** Mathematical tools and concepts needed to solve Chapter 2 exercises

**Generated:** March 20, 2026

---

## 1. Vectors and 1-Forms (For Exercises 2.1, 2.2, 2.3, 2.4)

### 1.1 Vectors as Geometric Objects

**From §2.3:**

A **vector** is a geometric object that exists independently of coordinates.

**Two equivalent definitions:**

1. **As an arrow (bilocal):** Vector from event $\mathcal{A}$ to event $\mathcal{B}$:
   $$\mathbf{v}_{\mathcal{A}\mathcal{B}} = \mathcal{B} - \mathcal{A}$$

2. **As a tangent vector (local):** Derivative along a curve:
   $$\mathbf{u} = \frac{d\mathcal{P}}{d\tau}$$
   where $\mathcal{P}(\tau)$ is a world line parametrized by proper time.

**Components in a Lorentz frame:**
$$\mathbf{u} = u^\alpha \mathbf{e}_\alpha$$
where $\mathbf{e}_\alpha$ are orthonormal basis vectors.

**4-velocity components:**
$$u^0 = \frac{dt}{d\tau} = \frac{1}{\sqrt{1-v^2}}, \quad u^i = \frac{dx^i}{d\tau} = \frac{v^i}{\sqrt{1-v^2}}$$

### 1.2 1-Forms (Differential Forms)

**From §2.5:**

A **1-form** $\tilde{\sigma}$ is:
- A pattern of surfaces in spacetime
- A linear machine that takes a vector and outputs a number: $\langle \tilde{\sigma}, \mathbf{v} \rangle$

**Physical example:** de Broglie wave surfaces of constant phase $\phi = \text{const}$.

**Mathematical definition:**
A 1-form is a **linear, real-valued function of vectors**:
$$\langle \tilde{\sigma}, a\mathbf{u} + b\mathbf{v} \rangle = a\langle \tilde{\sigma}, \mathbf{u} \rangle + b\langle \tilde{\sigma}, \mathbf{v} \rangle$$

**Addition of 1-forms:**
$$\langle a\tilde{\alpha} + b\tilde{\beta}, \mathbf{u} \rangle = a\langle \tilde{\alpha}, \mathbf{u} \rangle + b\langle \tilde{\beta}, \mathbf{u} \rangle$$

### 1.3 Vector ↔ 1-Form Correspondence

**From §2.5 and Eq. (2.14):**

Every vector $\mathbf{p}$ has a corresponding 1-form $\tilde{p}$, and vice versa:
$$\mathbf{p} \cdot \mathbf{v} = \langle \tilde{p}, \mathbf{v} \rangle$$

**Physical example (de Broglie wave):**
- Momentum vector: $\mathbf{p} = \hbar(\omega, \mathbf{k})$
- Momentum 1-form: $\tilde{p}$ with components $p_\mu = \hbar(-\omega, \mathbf{k})$
- Phase: $\phi = k_\mu x^\mu = \mathbf{k} \cdot \mathbf{x} - \omega t$

**Key insight:** The number of surfaces pierced by a vector equals the scalar projection.

### 1.4 Metric Tensor and Index Manipulation

**From §2.4 and Box 2.3:**

The **metric tensor** $\eta$ (Minkowski metric) is used to:
- Compute scalar products
- Convert between vectors and 1-forms

**Minkowski metric components:**
$$\eta_{\alpha\beta} = \text{diag}(-1, 1, 1, 1)$$

**Lowering an index (vector → 1-form):**
$$u_\alpha = \eta_{\alpha\beta} u^\beta$$

In components:
$$u_0 = -u^0, \quad u_k = u^k$$

**Raising an index (1-form → vector):**
$$u^\alpha = \eta^{\alpha\beta} u_\beta$$

**Key fact:** $\eta^{\alpha\beta} = \eta_{\alpha\beta}$ (the metric is its own inverse)

### 1.5 Scalar Product Forms

**From Exercise 2.4:**

The scalar product can be computed in multiple equivalent ways:
$$\mathbf{u} \cdot \mathbf{v} = g(\mathbf{u}, \mathbf{v}) = u^\alpha v^\beta \eta_{\alpha\beta} = u^\alpha v_\alpha = u_\alpha v_\beta \eta^{\alpha\beta}$$

---

## 2. Gradients and Directional Derivatives (For Exercise 2.6)

### 2.1 Gradient as a 1-Form

**From §2.6:**

The **gradient** $df$ of a scalar function $f$ is a 1-form.

**Geometric meaning:**
- Surfaces of $df$ are level surfaces of $f$ (flattened and equally spaced)
- $df$ describes first-order changes in $f$:
  $$f(\mathcal{P}) = f(\mathcal{P}_0) + \langle df, \mathcal{P} - \mathcal{P}_0 \rangle + \text{(higher order)}$$

**Components:**
$$(df)_\alpha = \frac{\partial f}{\partial x^\alpha}$$

### 2.2 Directional Derivative

**Definition:**
The directional derivative of $f$ along vector $\mathbf{v}$ is:
$$\partial_{\mathbf{v}} f = \langle df, \mathbf{v} \rangle$$

**In coordinates:**
$$\partial_{\mathbf{v}} f = v^\alpha \frac{\partial f}{\partial x^\alpha}$$

**Physical interpretation:**
- Rate of change of $f$ as measured by an observer moving with 4-velocity $\mathbf{v}$
- Relativistic generalization of convective derivative $\frac{D}{Dt} = \frac{\partial}{\partial t} + \mathbf{v} \cdot \nabla$

### 2.3 Application: Temperature Gradient (Exercise 2.6)

**Problem setup:**
- Temperature field $T(\mathcal{Q})$ in the sun
- Cosmic ray with 4-velocity $\mathbf{u}$ flies through
- Find: rate of change of $T$ as measured by cosmic ray's clock

**Solution:**
$$\frac{dT}{d\tau} = \partial_{\mathbf{u}} T = \langle dT, \mathbf{u} \rangle = u^\alpha \frac{\partial T}{\partial x^\alpha}$$

**In local Lorentz frame:**
$$\frac{dT}{d\tau} = \gamma \frac{\partial T}{\partial t} + \gamma v^j \frac{\partial T}{\partial x^j}$$
where $\gamma = \frac{1}{\sqrt{1-v^2}}$

---

## 3. 4-Momentum and Energy (For Exercise 2.5)

### 3.1 4-Momentum Vector

**Definition:**
$$\mathbf{p} = m \mathbf{u}$$
where $m$ is rest mass and $\mathbf{u}$ is 4-velocity.

**Components in a Lorentz frame:**
$$p^\mu = (E, p^1, p^2, p^3)$$

**Mass-shell condition:**
$$\mathbf{p} \cdot \mathbf{p} = \eta_{\mu\nu} p^\mu p^\nu = -E^2 + |\mathbf{p}|^2 = -m^2$$

### 3.2 Energy Measured by an Observer

**From Exercise 2.5:**

An observer with 4-velocity $\mathbf{u}$ measures a particle's energy as:
$$E = -\mathbf{p} \cdot \mathbf{u}$$

**Derivation:**
In observer's rest frame:
- $\mathbf{u} = (1, 0, 0, 0)$
- $\mathbf{p} = (E, p^1, p^2, p^3)$
- $\mathbf{p} \cdot \mathbf{u} = -E(1) + 0 = -E$

### 3.3 Rest Mass from 4-Momentum

$$m^2 = -\mathbf{p}^2 = -\mathbf{p} \cdot \mathbf{p}$$

This is frame-independent (Lorentz scalar).

### 3.4 Momentum and Velocity Relations

**Momentum magnitude:**
$$|\mathbf{p}| = \sqrt{(\mathbf{p} \cdot \mathbf{u})^2 + (\mathbf{p} \cdot \mathbf{p})} = \sqrt{E^2 - m^2}$$

**Ordinary velocity magnitude:**
$$|\mathbf{v}| = \frac{|\mathbf{p}|}{E}$$

**Spatial 4-velocity (relative to observer):**
$$\mathbf{v} = \frac{\mathbf{p} + (\mathbf{p} \cdot \mathbf{u})\mathbf{u}}{-\mathbf{p} \cdot \mathbf{u}}$$

This is the projection of $\mathbf{p}$ orthogonal to $\mathbf{u}$, divided by energy.

---

## 4. Lorentz Transformations (For Exercise 2.7)

### 4.1 Lorentz Condition

**From §2.7:**

A Lorentz transformation $\Lambda$ must satisfy:
$$\Lambda^T \eta \Lambda = \eta$$

Or in component form:
$$\Lambda^\alpha_{\ \ \mu'} \eta_{\alpha\beta} \Lambda^\beta_{\ \ \nu'} = \eta_{\mu'\nu'}$$

This preserves the metric (and thus all scalar products).

### 4.2 Boost in Arbitrary Direction

**From Exercise 2.7:**

A boost with velocity $\beta \mathbf{n}$ (where $|\mathbf{n}| = 1$) has matrix components:

$$\begin{aligned}
\Lambda^{0'}_{\ \ 0} &= \gamma = \frac{1}{\sqrt{1-\beta^2}} \\
\Lambda^{0'}_{\ \ j} = \Lambda^{j'}_{\ \ 0} &= -\beta\gamma n^j \\
\Lambda^{j'}_{\ \ k} = \Lambda^{k'}_{\ \ j} &= (\gamma-1)n^j n^k + \delta^{jk} \\
\Lambda^{\mu}_{\ \ \nu'} &= \text{(same as } \Lambda^{\nu'}_{\ \ \mu} \text{ with } \beta \to -\beta)
\end{aligned}$$

**Physical interpretation:**
- Primed frame moves with velocity $\beta \mathbf{n}$ relative to unprimed frame
- Unprimed frame moves with velocity $-\beta \mathbf{n}$ relative to primed frame

### 4.3 Standard z-Boost

For $\mathbf{n} = (0, 0, 1)$:

$$\|\Lambda^{\nu'}_{\ \ \mu}\| = \begin{pmatrix} \gamma & 0 & 0 & -\beta\gamma \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ -\beta\gamma & 0 & 0 & \gamma \end{pmatrix}$$

$$\|\Lambda^{\mu}_{\ \ \nu'}\| = \begin{pmatrix} \gamma & 0 & 0 & \beta\gamma \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \beta\gamma & 0 & 0 & \gamma \end{pmatrix}$$

---

## 5. Reference: Key Formulas

| Concept | Formula | Section |
|---------|---------|---------|
| Vector ↔ 1-form | $\mathbf{p} \cdot \mathbf{v} = \langle \tilde{p}, \mathbf{v} \rangle$ | §2.5, Eq. 2.14 |
| Lower index | $u_\alpha = \eta_{\alpha\beta} u^\beta$ | §2.4 |
| Raise index | $u^\alpha = \eta^{\alpha\beta} u_\beta$ | §2.4 |
| Scalar product | $\mathbf{u} \cdot \mathbf{v} = u^\alpha v_\alpha$ | Ex. 2.4 |
| Gradient | $\langle df, \mathbf{v} \rangle = \partial_{\mathbf{v}} f$ | §2.6 |
| Directional derivative | $\frac{dT}{d\tau} = \langle dT, \mathbf{u} \rangle$ | Ex. 2.6 |
| Energy (observer) | $E = -\mathbf{p} \cdot \mathbf{u}$ | Ex. 2.5 |
| Rest mass | $m^2 = -\mathbf{p}^2$ | Ex. 2.5 |
| Momentum magnitude | $|\mathbf{p}| = \sqrt{(\mathbf{p} \cdot \mathbf{u})^2 + (\mathbf{p} \cdot \mathbf{p})}$ | Ex. 2.5 |
| Velocity magnitude | $|\mathbf{v}| = \frac{|\mathbf{p}|}{E}$ | Ex. 2.5 |
| Lorentz condition | $\Lambda^T \eta \Lambda = \eta$ | Ex. 2.7 |
| Lorentz factor | $\gamma = \frac{1}{\sqrt{1-\beta^2}}$ | Ex. 2.7 |

---

## 6. Reference: Minkowski Metric

**Components:**
$$\eta_{\alpha\beta} = \eta^{\alpha\beta} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

**Properties:**
- $\eta_{\alpha\beta} = \eta^{\alpha\beta}$ (self-inverse)
- $\eta^{\alpha\beta}\eta_{\beta\gamma} = \delta^\alpha_\gamma$
- Signature: $(-+++)$

**Index lowering/raising examples:**
$$u_0 = -u^0, \quad u_k = u^k$$
$$u^0 = -u_0, \quad u^k = u_k$$

---

## 7. Exercise Solutions Quick Reference

### Exercise 2.1: de Broglie Wave
- Phase: $\phi = k_\mu x^\mu = \mathbf{k} \cdot \mathbf{x} - \omega t$
- 4-momentum: $p^\mu = \hbar(\omega, \mathbf{k})$
- Momentum 1-form: $p_\mu = \hbar(-\omega, \mathbf{k})$
- Verify: $p \cdot v = \langle \tilde{p}, v \rangle$

### Exercise 2.2: Lowering Index
- $u_\alpha = \eta_{\alpha\beta} u^\beta$
- Result: $u_0 = -u^0$, $u_k = u^k$

### Exercise 2.3: Raising Index
- $\eta^{\alpha\beta} = \eta_{\alpha\beta}$ (diagonal matrix, self-inverse)
- $u^\alpha = \eta^{\alpha\beta} u_\beta$

### Exercise 2.4: Scalar Product
- All forms equivalent: $u \cdot v = u^\alpha v^\beta \eta_{\alpha\beta} = u^\alpha v_\alpha = u_\alpha v_\beta \eta^{\alpha\beta}$

### Exercise 2.5: 4-Momentum
- $E = -p \cdot u$
- $m^2 = -p^2$
- $|\mathbf{p}| = \sqrt{(p \cdot u)^2 + (p \cdot p)}$
- $|\mathbf{v}| = \frac{|\mathbf{p}|}{E}$
- $\mathbf{v} = \frac{\mathbf{p} + (\mathbf{p} \cdot \mathbf{u})\mathbf{u}}{-\mathbf{p} \cdot \mathbf{u}}$

### Exercise 2.6: Temperature Gradient
- $\frac{dT}{d\tau} = \langle dT, \mathbf{u} \rangle = u^\alpha \frac{\partial T}{\partial x^\alpha}$

### Exercise 2.7: Lorentz Boost
- Verify $\Lambda^T \eta \Lambda = \eta$
- Primed frame velocity: $\beta \mathbf{n}$
- Unprimed frame velocity: $-\beta \mathbf{n}$
- z-boost reduces to standard form

---

## 8. How This Relates to Chapter 2 Themes

### 8.1 "Geometric Objects"

- **Vectors** and **1-forms** exist independently of coordinates
- Physical quantities are geometric objects
- Laws of physics are geometric relationships between objects

### 8.2 "Coordinate-Free Formulation"

- $\mathbf{p} \cdot \mathbf{v} = \langle \tilde{p}, \mathbf{v} \rangle$ is coordinate-independent
- $\frac{dT}{d\tau} = \langle dT, \mathbf{u} \rangle$ is coordinate-independent
- Components depend on frame; geometric objects do not

### 8.3 "Special Relativity Foundations"

- Minkowski metric $\eta_{\alpha\beta}$ defines spacetime geometry
- Lorentz transformations preserve the metric
- Energy-momentum relations are frame-independent

### 8.4 "Preparation for General Relativity"

- Vectors → tangent vectors in curved spacetime
- 1-forms → differential forms on manifolds
- Metric → $g_{\mu\nu}$ (curved spacetime metric)
- Lorentz → general coordinate transformations
