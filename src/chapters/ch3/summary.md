# Chapter 3 Summary - The Electromagnetic Field

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Summary Generated:** March 20, 2026

---

## Overview

Chapter 3 introduces the electromagnetic field from the geometric viewpoint of Einstein, showing how electric and magnetic fields merge into a single geometric object—the electromagnetic field tensor **F** (Faraday). This provides a powerful example of the geometric approach to physics that will be essential for understanding gravitation.

---

## Key Sections

### §3.1 The Lorentz Force and the Electromagnetic Field Tensor

**The Lorentz Force Law (3+1 form):**

In familiar three-dimensional notation:
$\frac{d\mathbf{p}}{dt} = e(\mathbf{E} + \mathbf{v} \times \mathbf{B})$

**Problems with 3+1 formulation:**
- Depends on a specific Lorentz frame
- Uses coordinate time *t* instead of proper time τ
- Treats **E** and **B** as separate entities

**Geometric Formulation:**

The fully geometric Lorentz force law involves:
- Energy-momentum 4-vector **p** (not just spatial part **p**)
- Proper time derivative *d/dτ* (measured by particle's own clock)
- 4-velocity **u** (not ordinary velocity **v**)

**The Electromagnetic Field Tensor (Faraday):**

There exists a linear machine **F** (the electromagnetic field tensor) such that:
$\frac{d\mathbf{p}}{d\tau} = e\mathbf{F}(\mathbf{u})$

**Components in a Lorentz Frame:**

By comparing the geometric law with the 3+1 law, the components are:

$\|F^\alpha_\beta\| = \begin{pmatrix}
0 & E_x & E_y & E_z \\
E_x & 0 & B_z & -B_y \\
E_y & -B_z & 0 & B_x \\
E_z & B_y & -B_x & 0
\end{pmatrix}$

**Covariant Components (lowered index):**

$\|F_{\alpha\beta}\| = \begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & -B_z & B_y \\
E_y & B_z & 0 & -B_x \\
E_z & -B_y & B_x & 0
\end{pmatrix}$

**Key Insight:**

> "Neither one by itself, **E** or **B**, is a frame-independent, geometric entity. But merged together into a single entity, **F** = Faraday, they acquire a meaning and significance that transcends coordinates and reference frames."

**Box 3.1: Lorentz Force as Both Definer of Fields and Predicter of Motions**

- The Lorentz force law serves dual purpose:
  1. **Defines** the electromagnetic field components from measured accelerations
  2. **Predicts** motion of charged particles in known fields

- To determine all 6 components of **F** (3 for **E**, 3 for **B**):
  - Need at least 3 test particles (not 2, due to redundancy)
  - Use method of least squares for optimal determination

---

### §3.2 Tensors in All Generality

**Examples of Tensors:**
- Metric tensor **g** (§2.4)
- Riemann curvature tensor (§1.6)
- Electromagnetic field tensor **F** (§3.1)

**Definition of a Tensor:**

A tensor **H** of rank $\binom{n}{m}$ is a linear machine with:
- *n* input slots for *n* 1-forms
- *m* input slots for *m* vectors
- Output: a real number

$\mathbf{H}(\sigma, \ldots, \rho, \mathbf{u}, \mathbf{v}, \ldots, \mathbf{w})$

**Components:**

In a specific Lorentz frame:
$S^{\alpha\beta\gamma} = \mathbf{S}(\omega^\alpha, \omega^\beta, \mathbf{e}_\gamma)$

**Tensor Operations:**

1. **Lorentz Transformation:**
   $S^{\mu'\nu'\ldots}_{\lambda'\ldots} = S^{\alpha\beta\gamma} \Lambda^{\mu'}_\alpha \Lambda^{\nu'}_\beta \Lambda^\gamma_{\lambda'}$

2. **Raising/Lowering Indices:**
   $S^\alpha_{\ \mu\gamma} = \eta_{\mu\beta} S^{\alpha\beta}_{\ \ \gamma}$

3. **Addition and Scalar Multiplication:**
   $(a\mathbf{S} + b\mathbf{T})(\mathbf{u}, \mathbf{v}, \mathbf{w}) = a\mathbf{S}(\mathbf{u}, \mathbf{v}, \mathbf{w}) + b\mathbf{T}(\mathbf{u}, \mathbf{v}, \mathbf{w})$

**Terminology:**
- **Contravariant index**: "upstairs" (e.g., $S^\alpha_{\ \beta\gamma}$)
- **Covariant index**: "downstairs" (e.g., $S_{\alpha\beta\gamma}$)

**Box 3.2: The Metric in Different Languages**

| Language | Expression |
|----------|------------|
| Geometric | $\mathbf{g}(\mathbf{u}, \mathbf{v}) = \mathbf{u} \cdot \mathbf{v}$ |
| Component | $\eta_{\alpha\beta} u^\alpha v^\beta$ |
| Coordinate-based | $\eta_{\alpha\beta} dx^\alpha \otimes dx^\beta$ |
| Line element | $ds^2 = \eta_{\alpha\beta} dx^\alpha dx^\beta$ |

---

### §3.3 Three-Plus-One View Versus Geometric View

**Geometric View (Simple):**

The electromagnetic field is described by a single antisymmetric tensor **F**:
$\frac{d\mathbf{p}}{d\tau} = e\mathbf{F}(\mathbf{u})$

**3+1 View (Complex):**

In each Lorentz frame:
- Separate fields **E** and **B**
- Transformation laws between frames are complicated:
  $\bar{E}_\parallel = E_\parallel, \quad \bar{E}_\perp = \gamma(E_\perp + \beta \times B_\perp)$
  $\bar{B}_\parallel = B_\parallel, \quad \bar{B}_\perp = \gamma(B_\perp - \beta \times E_\perp)$

**Example: Deriving Field Transformations**

**Geometric derivation** (2 lines):
$\bar{F}^{\bar{\alpha}\bar{\beta}} = \Lambda^{\bar{\alpha}}_\alpha \Lambda^{\bar{\beta}}_\beta F^{\alpha\beta}$

**3+1 derivation** (many pages):
1. Transform accelerations
2. Substitute Lorentz force law
3. Transform 4-velocities
4. Demand equality for all test particles
5. Extract **Ē** and **B̄** in terms of **E** and **B**

> "The contrast in difficulty is obvious!"

---

### §3.4 Maxwell's Equations

**Magnetostatics + Magnetodynamics → Single Geometric Law**

**3+1 Form:**
- Magnetostatics: $\nabla \cdot \mathbf{B} = 0$
- Magnetodynamics: $\frac{\partial \mathbf{B}}{\partial t} + \nabla \times \mathbf{E} = 0$

**Geometric Form:**
$F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0$

Or in coordinate-free language:
$d\mathbf{F} = 0 \quad \text{or} \quad \nabla \cdot {}^*\mathbf{F} = 0$

**Derivation from Covariance:**
1. Assume $\nabla \cdot \mathbf{B} = 0$ in all frames
2. Apply infinitesimal Lorentz transformation
3. The coefficient of β must vanish
4. This yields $\frac{\partial \mathbf{B}}{\partial t} + \nabla \times \mathbf{E} = 0$

> "How beautiful that (1) the principle of covariance plus (2) the principle that magnetic tubes of force never end, gives (3) Maxwell's dynamic law!"

**Electrostatics + Electrodynamics → Single Geometric Law**

**3+1 Form:**
- Electrostatics: $\nabla \cdot \mathbf{E} = 4\pi\rho$
- Electrodynamics: $\frac{\partial \mathbf{E}}{\partial t} - \nabla \times \mathbf{B} = -4\pi\mathbf{J}$

**Geometric Form:**
$F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$

Or in coordinate-free language:
$\nabla \cdot \mathbf{F} = 4\pi\mathbf{J}$

**4-Current Components:**
$J^0 = \rho \text{ (charge density)}, \quad (J^1, J^2, J^3) = \text{current density}$

---

### §3.5 Working with Tensors

**Operations on Tensors:**

1. **Gradient (∇):**
   - Raises rank by 1
   - Components: partial derivatives
   - $(\nabla S)_{\alpha\beta\gamma\delta} = S_{\alpha\beta\gamma,\delta}$

2. **Contraction:**
   - Reduces rank by 2
   - Seals off two slots
   - Frame-independent operation
   - $M(\mathbf{u}, \mathbf{v}) = \sum_\alpha R(\mathbf{e}_\alpha, \mathbf{u}, \omega^\alpha, \mathbf{v})$

3. **Divergence (∇·):**
   - Contraction of gradient
   - Reduces rank by 1
   - $\nabla \cdot \mathbf{T} = \text{contraction of } \nabla\mathbf{T}$

4. **Symmetrization and Antisymmetrization:**
   - Symmetrize (round brackets): $V_{(\mu\nu)} = \frac{1}{2}(V_{\mu\nu} + V_{\nu\mu})$
   - Antisymmetrize (square brackets): $V_{[\mu\nu]} = \frac{1}{2}(V_{\mu\nu} - V_{\nu\mu})$

5. **Tensor Product (⊗):**
   - Combines tensors
   - $(\mathbf{u} \otimes \mathbf{v})(\sigma, \lambda) = \langle\sigma, \mathbf{u}\rangle\langle\lambda, \mathbf{v}\rangle$
   - Components multiply: $T^{\alpha\beta} = u^\alpha v^\beta$

6. **Levi-Civita Tensor (ε):**
   - Fourth-rank, completely antisymmetric
   - $\varepsilon_{0123} = +1$ (in standard frame)
   - Used for duals and cross products

7. **Duals (*):**
   - Maps antisymmetric tensor of rank *p* to rank *(4-p)*
   - ${}^*F_{\alpha\beta} = \frac{1}{2} F^{\mu\nu} \varepsilon_{\mu\nu\alpha\beta}$
   - ${}^{**}\mathbf{F} = -\mathbf{F}$ (for 2-forms)

---

## Key Formulas

| Concept | Formula |
|---------|---------|
| Lorentz force (geometric) | $d\mathbf{p}/d\tau = e\mathbf{F}(\mathbf{u})$ |
| Field tensor components | $F^{0i} = E_i$, $F^{ij} = \varepsilon^{ijk}B_k$ |
| Maxwell (magnetic) | $F_{\alpha\beta,\gamma} + F_{\beta\gamma,\alpha} + F_{\gamma\alpha,\beta} = 0$ |
| Maxwell (electric) | $F^{\alpha\beta}_{\ \ ,\beta} = 4\pi J^\alpha$ |
| Field transformations | $\bar{E}_\parallel = E_\parallel$, $\bar{E}_\perp = \gamma(E_\perp + \beta \times B_\perp)$ |
| Tensor transformation | $S^{\mu'\nu'} = S^{\alpha\beta} \Lambda^{\mu'}_\alpha \Lambda^{\nu'}_\beta$ |
| Raising/lowering | $u_\alpha = \eta_{\alpha\beta} u^\beta$ |
| Dual of F | ${}^*F_{\alpha\beta} = \frac{1}{2} F^{\mu\nu} \varepsilon_{\mu\nu\alpha\beta}$ |

---

## Key Figures and Boxes

| Figure/Box | Description |
|------------|-------------|
| Box 3.1 | Lorentz force as definer of fields and predictor of motions |
| Box 3.2 | The metric in different languages (geometric, component, coordinate, line element) |
| Eq. 3.5 | Components of electromagnetic field tensor |
| Eq. 3.23 | Transformation laws for **E** and **B** fields |
| Eq. 3.32 | Geometric Maxwell equations (magnetic) |
| Eq. 3.36 | Geometric Maxwell equations (electric) |

---

## Key Quotes

> "All the laws and theories of physics, including the Lorentz force law, have this deep and subtle character, that they both define the concepts they use (here **B** and **E**) and make statements about these concepts."

> "Neither one by itself, **E** or **B**, is a frame-independent, geometric entity. But merged together into a single entity, **F** = Faraday, they acquire a meaning and significance that transcends coordinates and reference frames."

> "How beautiful that (1) the principle of covariance plus (2) the principle that magnetic tubes of force never end, gives (3) Maxwell's dynamic law!"

---

## Connections to Other Chapters

- **Chapter 2:** Vectors, 1-forms, metric tensor (foundations)
- **Chapter 4:** Differential forms, exterior derivative (Track 2)
- **Chapter 5:** Stress-energy tensor, conservation laws
- **Chapter 13:** Riemann curvature tensor (analogous structure to **F**)

---

## Summary in One Sentence

**The electromagnetic field is best understood geometrically as a single antisymmetric tensor **F** that unifies electric and magnetic fields, with Maxwell's equations and the Lorentz force law taking simple, frame-independent forms that reveal the deep geometric structure of electromagnetism.**
