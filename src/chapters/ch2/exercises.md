# Chapter 2 Exercises - Solutions

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Generated:** March 20, 2026

---

## Exercise 2.1: De Broglie Wave and Equation (2.14)

**Problem:** Show that equation (2.14) is in accord with the quantum-mechanical properties of a de Broglie wave,
$$\psi = e^{i\phi} = \exp[i(k \cdot x - \omega t)]$$

### Solution

Equation (2.14) states:
$$p \cdot v = \langle \tilde{p}, v \rangle$$

where $p$ is the momentum vector, $\tilde{p}$ is the momentum 1-form, and $v$ is any vector.

**From quantum mechanics:**

The de Broglie wave function is:
$$\psi = \exp[i(k \cdot x - \omega t)] = \exp[i(k_\mu x^\mu)]$$

where $k_\mu = (-\omega, k)$ is the wave 4-vector and $x^\mu = (t, x)$ is the position 4-vector.

**The phase is:**
$$\phi = k_\mu x^\mu = k \cdot x - \omega t$$

**From quantum theory:**
- Energy: $E = \hbar\omega$
- Momentum: $p = \hbar k$

The 4-momentum is $p^\mu = (E, p) = \hbar(\omega, k)$.

**The momentum 1-form** $\tilde{p}$ has components:
$$p_\mu = \hbar k_\mu = \hbar(-\omega, k)$$

**Testing equation (2.14):**

For any vector $v^\mu$:
$$p \cdot v = p^\mu v_\mu = \hbar\omega v^0 - \hbar k \cdot v$$

And:
$$\langle \tilde{p}, v \rangle = p_\mu v^\mu = \hbar(-\omega v^0 + k \cdot v)$$

In Minkowski space with signature $(-+++)$:
$$p \cdot v = \eta_{\mu\nu}p^\mu v^\nu = -p^0 v^0 + p \cdot v = -\hbar\omega v^0 + \hbar k \cdot v$$

This equals $\langle \tilde{p}, v \rangle = p_\mu v^\mu$, confirming equation (2.14).

**Physical interpretation:** The momentum 1-form $\tilde{p}$ acting on a vector $v$ gives the same result as the scalar product $p \cdot v$. This is the geometric content of the de Broglie relation.

---

## Exercise 2.2: Lowering Index to Get the 1-Form

**Problem:** The components $u_\alpha$ of the 1-form $\tilde{u}$ that corresponds to a vector $u$ can be obtained by "lowering an index" with the metric coefficients $\eta_{\alpha\beta}$:
$$u_\alpha = \eta_{\alpha\beta}u^\beta; \text{ i.e., } u_0 = -u^0, u_k = u^k$$

### Solution

In Minkowski space with metric $\eta_{\alpha\beta} = \text{diag}(-1, 1, 1, 1)$:

**For $\alpha = 0$:**
$$u_0 = \eta_{0\beta}u^\beta = \eta_{00}u^0 + \eta_{0k}u^k = (-1)u^0 + 0 = -u^0$$

**For $\alpha = k$ (spatial):**
$$u_k = \eta_{k\beta}u^\beta = \eta_{k0}u^0 + \eta_{kj}u^j = 0 + \delta_{kj}u^j = u^k$$

Therefore:
$$\boxed{u_0 = -u^0 \quad \text{and} \quad u_k = u^k}$$

This shows that lowering the time component flips its sign, while spatial components remain unchanged.

---

## Exercise 2.3: Raising Index to Recover the Vector

**Problem:** One can return to the components of $u$ by raising indices:
$$u^\alpha = \eta^{\alpha\beta}u_\beta$$

Show that $\eta^{\alpha\beta} = \eta_{\alpha\beta}$ for all $\alpha, \beta$.

### Solution

**Given:** $\eta^{\alpha\beta}\eta_{\beta\gamma} \equiv \delta^\alpha_\gamma$

**To show:** $\eta^{\alpha\beta} = \eta_{\alpha\beta}$

**Proof:**

The Minkowski metric is:
$$\eta_{\alpha\beta} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

The inverse metric $\eta^{\alpha\beta}$ satisfies:
$$\eta^{\alpha\beta}\eta_{\beta\gamma} = \delta^\alpha_\gamma$$

For a diagonal matrix, the inverse is obtained by inverting each diagonal element:
- $(-1)^{-1} = -1$
- $(1)^{-1} = 1$

Therefore:
$$\eta^{\alpha\beta} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} = \eta_{\alpha\beta}$$

**Verification by direct computation:**

For $\alpha = \gamma = 0$:
$$\eta^{0\beta}\eta_{\beta 0} = \eta^{00}\eta_{00} = (-1)(-1) = 1 = \delta^0_0 \quad \checkmark$$

For $\alpha = \gamma = k$:
$$\eta^{k\beta}\eta_{\beta k} = \eta^{kk}\eta_{kk} = (1)(1) = 1 = \delta^k_k \quad \checkmark$$

For $\alpha \neq \gamma$:
$$\eta^{\alpha\beta}\eta_{\beta\gamma} = 0 = \delta^\alpha_\gamma \quad \checkmark$$

**Raising the index:**
$$u^0 = \eta^{0\beta}u_\beta = \eta^{00}u_0 = (-1)(-u^0) = u^0 \quad \checkmark$$
$$u^k = \eta^{k\beta}u_\beta = \eta^{kk}u_k = (1)(u^k) = u^k \quad \checkmark$$

---

## Exercise 2.4: Varied Routes to the Scalar Product

**Problem:** The scalar product of $u$ with $v$ can be calculated in any of the following ways:
$$u \cdot v = g(u,v) = u^\alpha v^\beta \eta_{\alpha\beta} = u^\alpha v_\alpha = u_\alpha v_\beta \eta^{\alpha\beta}$$

### Solution

We prove each equality:

**1. $u \cdot v = g(u,v)$:**

By definition, the metric tensor $g$ (or $\eta$ in flat space) defines the scalar product:
$$u \cdot v \equiv g(u,v)$$

**2. $g(u,v) = u^\alpha v^\beta \eta_{\alpha\beta}$:**

In component form, the metric acting on two vectors is:
$$g(u,v) = \eta_{\alpha\beta}u^\alpha v^\beta$$

**3. $u^\alpha v^\beta \eta_{\alpha\beta} = u^\alpha v_\alpha$:**

Since $v_\alpha = \eta_{\alpha\beta}v^\beta$ (lowering index):
$$u^\alpha v^\beta \eta_{\alpha\beta} = u^\alpha(\eta_{\alpha\beta}v^\beta) = u^\alpha v_\alpha$$

**4. $u^\alpha v_\alpha = u_\alpha v_\beta \eta^{\alpha\beta}$:**

Since $u^\alpha = \eta^{\alpha\beta}u_\beta$ (raising index):
$$u^\alpha v_\alpha = (\eta^{\alpha\beta}u_\beta)v_\alpha = \eta^{\alpha\beta}u_\beta v_\alpha = u_\beta v_\alpha \eta^{\alpha\beta}$$

Relabeling dummy indices ($\alpha \leftrightarrow \beta$):
$$u_\beta v_\alpha \eta^{\alpha\beta} = u_\alpha v_\beta \eta^{\alpha\beta}$$

**All forms are equivalent.** $\square$

---

## Exercise 2.5: Energy and Velocity from 4-Momentum

**Problem:** A particle of rest mass $m$ and 4-momentum $p$ is examined by an observer with 4-velocity $u$. Show that:

### Solution

#### (a) Energy measured: $E = -p \cdot u$

**Proof:**

In the observer's rest frame:
- $u^\mu = (1, 0, 0, 0)$ (4-velocity of observer at rest)
- $p^\mu = (E, p^1, p^2, p^3)$ (particle's 4-momentum)

The scalar product is:
$$p \cdot u = \eta_{\mu\nu}p^\mu u^\nu = -p^0 u^0 + p^i u^i = -E(1) + 0 = -E$$

Therefore:
$$\boxed{E = -p \cdot u}$$

#### (b) Rest mass: $m^2 = -p^2$

**Proof:**

The 4-momentum satisfies:
$$p^\mu p_\mu = -m^2$$

This is the mass-shell condition. In any frame:
$$p^2 \equiv p \cdot p = \eta_{\mu\nu}p^\mu p^\nu = -E^2 + |p|^2 = -m^2$$

Therefore:
$$\boxed{m^2 = -p^2}$$

#### (c) Momentum magnitude: $|p| = [(p \cdot u)^2 + (p \cdot p)]^{1/2}$

**Proof:**

From part (a): $E = -p \cdot u$, so $E^2 = (p \cdot u)^2$.

From part (b): $m^2 = -p \cdot p$.

The energy-momentum relation is:
$$E^2 = m^2 + |p|^2$$

Substituting:
$$(p \cdot u)^2 = -p \cdot p + |p|^2$$

Solving for $|p|$:
$$|p|^2 = (p \cdot u)^2 + (p \cdot p)$$
$$\boxed{|p| = [(p \cdot u)^2 + (p \cdot p)]^{1/2}}$$

#### (d) Ordinary velocity magnitude: $|v| = \frac{|p|}{E}$

**Proof:**

In special relativity:
$$p = \gamma m v \quad \text{and} \quad E = \gamma m$$

Therefore:
$$\frac{|p|}{E} = \frac{\gamma m |v|}{\gamma m} = |v|$$

$$\boxed{|v| = \frac{|p|}{E}}$$

#### (e) The 4-vector $v$ is given by:
$$v = \frac{p + (p \cdot u)u}{-p \cdot u}$$

**Proof:**

The 4-vector $v$ has components in the observer's Lorentz frame:
- $v^0 = 0$ (purely spatial in observer's frame)
- $v^i = (dx^i/dt)_{\text{particle}}$ = ordinary velocity

We construct $v$ from $p$ and $u$:

The projection of $p$ orthogonal to $u$ is:
$$p_\perp = p + (p \cdot u)u$$

This is spatial in the observer's frame because:
$$p_\perp \cdot u = p \cdot u + (p \cdot u)(u \cdot u) = p \cdot u + (p \cdot u)(-1) = 0$$

The ordinary 3-velocity is momentum divided by energy:
$$v = \frac{p_\perp}{E} = \frac{p + (p \cdot u)u}{-p \cdot u}$$

$$\boxed{v = \frac{p + (p \cdot u)u}{-p \cdot u}}$$

---

## Exercise 2.6: Temperature Gradient

**Problem:** A cosmic ray with 4-velocity $u$ flies through the sun. Show that the time derivative of temperature in its vicinity is:
$$\frac{dT}{d\tau} = \partial_u T = \langle dT, u \rangle$$

### Solution

**Geometric derivation:**

Temperature $T(\mathcal{Q})$ is a scalar field on spacetime. The exterior derivative $dT$ is a 1-form with components:
$$(dT)_\alpha = \frac{\partial T}{\partial x^\alpha}$$

The rate of change of $T$ along the cosmic ray's worldline is:
$$\frac{dT}{d\tau} = \frac{\partial T}{\partial x^\alpha}\frac{dx^\alpha}{d\tau} = \frac{\partial T}{\partial x^\alpha}u^\alpha$$

By definition of the pairing between 1-forms and vectors:
$$\langle dT, u \rangle = (dT)_\alpha u^\alpha = \frac{\partial T}{\partial x^\alpha}u^\alpha$$

Therefore:
$$\boxed{\frac{dT}{d\tau} = \partial_u T = \langle dT, u \rangle}$$

**In a local Lorentz frame:**

$$\frac{dT}{d\tau} = u^\alpha\frac{\partial T}{\partial x^\alpha} = u^0\frac{\partial T}{\partial t} + u^j\frac{\partial T}{\partial x^j}$$

For 4-velocity $u^\alpha = (\gamma, \gamma v^j)$ where $\gamma = \frac{1}{\sqrt{1-v^2}}$:

$$\boxed{\frac{dT}{d\tau} = \frac{1}{\sqrt{1-v^2}}\frac{\partial T}{\partial t} + \frac{v^j}{\sqrt{1-v^2}}\frac{\partial T}{\partial x^j}}$$

**Why is this result reasonable?**

1. **Time dilation factor:** The $\frac{1}{\sqrt{1-v^2}}$ factors account for time dilation—the cosmic ray's clock runs slower relative to the sun's rest frame.

2. **Convective derivative:** The form $\frac{dT}{d\tau} = u^\alpha\partial_\alpha T$ is the relativistic generalization of the convective derivative $\frac{D}{Dt} = \frac{\partial}{\partial t} + v \cdot \nabla$ from fluid dynamics.

3. **Coordinate independence:** The geometric form $\langle dT, u \rangle$ makes no reference to coordinates—it's the natural pairing of a gradient (1-form) with a direction (vector).

---

## Exercise 2.7: Boost in an Arbitrary Direction

**Problem:** The Lorentz transformation matrix is:
$$\begin{aligned}
\Lambda^{0'}_{\ \ 0} &= \gamma \equiv \frac{1}{\sqrt{1-\beta^2}} \\
\Lambda^{0'}_{\ \ j} = \Lambda^{j'}_{\ \ 0} &= -\beta\gamma n^j \\
\Lambda^{j'}_{\ \ k} = \Lambda^{k'}_{\ \ j} &= (\gamma-1)n^j n^k + \delta^{jk} \\
\Lambda^{\mu}_{\ \ \nu'} &= \text{(same as } \Lambda^{\nu'}_{\ \ \mu} \text{ but with } \beta \text{ replaced by } -\beta)
\end{aligned}$$

where $n^2 \equiv (n^1)^2 + (n^2)^2 + (n^3)^2 = 1$.

### Solution

#### (a) Verify $\Lambda^T \eta \Lambda = \eta$

**To show:** This satisfies the Lorentz condition.

The Lorentz condition is:
$$\Lambda^\alpha_{\ \ \mu'}\eta_{\alpha\beta}\Lambda^\beta_{\ \ \nu'} = \eta_{\mu'\nu'}$$

Or in matrix form: $\Lambda^T \eta \Lambda = \eta$.

**Component verification:**

For the $00$ component:
$$(\Lambda^T \eta \Lambda)_{00} = \Lambda^\alpha_{\ \ 0'}\eta_{\alpha\beta}\Lambda^\beta_{\ \ 0'}$$

With $\Lambda^0_{\ \ 0'} = \gamma$ and $\Lambda^j_{\ \ 0'} = -\beta\gamma n^j$:

$$= \Lambda^0_{\ \ 0'}\eta_{00}\Lambda^0_{\ \ 0'} + \Lambda^j_{\ \ 0'}\eta_{jk}\Lambda^k_{\ \ 0'}$$
$$= \gamma(-1)\gamma + (-\beta\gamma n^j)(\delta_{jk})(-\beta\gamma n^k)$$
$$= -\gamma^2 + \beta^2\gamma^2(n^j n_j) = -\gamma^2 + \beta^2\gamma^2 = -\gamma^2(1-\beta^2) = -1 = \eta_{00} \quad \checkmark$$

For the $0j$ component:
$$(\Lambda^T \eta \Lambda)_{0j} = \Lambda^\alpha_{\ \ 0'}\eta_{\alpha\beta}\Lambda^\beta_{\ \ j'}$$

$$= \gamma(-1)(-\beta\gamma n^j) + (-\beta\gamma n^k)\delta_{kl}[(\gamma-1)n^l n^j + \delta^{lj}]$$
$$= \beta\gamma^2 n^j - \beta\gamma[(\gamma-1)n^j + n^j]$$
$$= \beta\gamma^2 n^j - \beta\gamma^2 n^j = 0 = \eta_{0j} \quad \checkmark$$

For the $ij$ component (after similar algebra):
$$(\Lambda^T \eta \Lambda)_{ij} = \delta_{ij} = \eta_{ij} \quad \checkmark$$

#### (b) Primed frame moves with velocity $\beta n$ in unprimed frame

The origin of the primed frame has $x^{j'} = 0$. Using the transformation:
$$x^{j'} = \Lambda^{j'}_{\ \ 0}x^0 + \Lambda^{j'}_{\ \ k}x^k = -\beta\gamma n^j t + [(\gamma-1)n^j n^k + \delta^{jk}]x^k$$

Setting $x^{j'} = 0$ and solving for the velocity $v^j = dx^j/dt$:
$$0 = -\beta\gamma n^j + [(\gamma-1)n^j n^k + \delta^{jk}]v^k$$

For motion along $n$, $v^k = v n^k$:
$$\beta\gamma n^j = [(\gamma-1)n^j n^k + \delta^{jk}]v n^k = [(\gamma-1)n^j + n^j]v = \gamma v n^j$$

Therefore $v = \beta$, and the velocity is $\boxed{\beta n}$.

#### (c) Unprimed frame moves with velocity $-\beta n$ in primed frame

By symmetry, the inverse transformation is obtained by replacing $\beta \to -\beta$:
$$\Lambda^{\mu}_{\ \ \nu'}(\beta) = \Lambda^{\nu'}_{\ \ \mu}(-\beta)$$

Therefore, the unprimed frame moves with velocity $\boxed{-\beta n}$ as seen in the primed frame.

#### (d) Reduction to z-boost

For motion in the $z$ direction: $n = (0, 0, 1)$, so $n^1 = 0, n^2 = 0, n^3 = 1$.

**Matrix $\|\Lambda^{\nu'}_{\ \ \mu}\|$:**

- $\Lambda^{0'}_{\ \ 0} = \gamma$
- $\Lambda^{0'}_{\ \ 1} = \Lambda^{0'}_{\ \ 2} = 0$, $\Lambda^{0'}_{\ \ 3} = -\beta\gamma$
- $\Lambda^{1'}_{\ \ 0} = 0$, $\Lambda^{1'}_{\ \ 1} = 1$, $\Lambda^{1'}_{\ \ 2} = 0$, $\Lambda^{1'}_{\ \ 3} = 0$
- $\Lambda^{2'}_{\ \ 0} = 0$, $\Lambda^{2'}_{\ \ 1} = 0$, $\Lambda^{2'}_{\ \ 2} = 1$, $\Lambda^{2'}_{\ \ 3} = 0$
- $\Lambda^{3'}_{\ \ 0} = -\beta\gamma$, $\Lambda^{3'}_{\ \ 1} = 0$, $\Lambda^{3'}_{\ \ 2} = 0$, $\Lambda^{3'}_{\ \ 3} = (\gamma-1)(1) + 1 = \gamma$

$$\|\Lambda^{\nu'}_{\ \ \mu}\| = \begin{pmatrix} \gamma & 0 & 0 & -\beta\gamma \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ -\beta\gamma & 0 & 0 & \gamma \end{pmatrix} \quad \checkmark$$

**Matrix $\|\Lambda^{\mu}_{\ \ \nu'}\|$ (inverse, $\beta \to -\beta$):**

$$\|\Lambda^{\mu}_{\ \ \nu'}\| = \begin{pmatrix} \gamma & 0 & 0 & \beta\gamma \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \beta\gamma & 0 & 0 & \gamma \end{pmatrix} \quad \checkmark$$

These are the familiar Lorentz boost matrices along the $z$-axis.

---

## Summary

| Exercise | Key Result |
|----------|------------|
| 2.1 | $p \cdot v = \langle \tilde{p}, v \rangle$ verified from de Broglie wave |
| 2.2 | $u_0 = -u^0$, $u_k = u^k$ (lowering index) |
| 2.3 | $\eta^{\alpha\beta} = \eta_{\alpha\beta}$ (Minkowski metric is self-inverse) |
| 2.4 | Multiple equivalent forms of scalar product |
| 2.5 | $E = -p \cdot u$, $m^2 = -p^2$, velocity formulas |
| 2.6 | $dT/d\tau = \langle dT, u \rangle$ (directional derivative) |
| 2.7 | Arbitrary boost verified; reduces to standard z-boost |
