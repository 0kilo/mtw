# Chapter 1 Technical Summary - For Exercises

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Purpose:** Mathematical tools and concepts needed to solve Chapter 1 exercises

**Generated:** March 20, 2026

---

## 1. Geodesics and Curvature (For Exercise 1.1)

### 1.1 What is a Geodesic?

**From the Apple Parable (§1.1):**
- An ant crawls on apple skin following the **straightest possible path**
- When the skin is unrolled flat, the path is a **straight line**
- This is a **geodesic**: the shortest path between two points on a curved surface

**Mathematical Definition:**
A geodesic satisfies the geodesic equation:
$$\frac{d^2x^\mu}{d\lambda^2} + \Gamma^\mu_{\alpha\beta}\frac{dx^\alpha}{d\lambda}\frac{dx^\beta}{d\lambda} = 0$$

where $\Gamma^\mu_{\alpha\beta}$ are the Christoffel symbols (connection coefficients).

### 1.2 Geodesic Deviation

**From §1.1:**
Two ants start near each other on the apple, passing on opposite sides of the dimple:
- Each follows a geodesic (locally straight)
- Their paths **converge** due to curvature
- This is **geodesic deviation**—the hallmark of curvature

**Geodesic Deviation Equation:**
$$\frac{D^2\xi^\alpha}{Ds^2} = -R^\alpha_{\ \beta\gamma\delta}u^\beta\xi^\gamma u^\delta$$

where:
- $\xi^\alpha$ = separation vector between geodesics
- $u^\beta$ = tangent vector to the geodesics
- $R^\alpha_{\ \beta\gamma\delta}$ = Riemann curvature tensor

**Key Insight:**
- **Flat space**: Parallel geodesics stay parallel ($\frac{D^2\xi}{Ds^2} = 0$)
- **Curved space**: Geodesics converge or diverge ($\frac{D^2\xi}{Ds^2} \neq 0$)

### 1.3 Gaussian Curvature

**For 2D Surfaces:**

The Gaussian curvature $R$ (also denoted $K$) at a point is:
$$R = \frac{1}{\rho_1\rho_2}$$

where $\rho_1$ and $\rho_2$ are the **principal radii of curvature**:
- $\rho_1$: radius of curvature in one principal direction
- $\rho_2$: radius of curvature in the perpendicular principal direction

**Sign Convention:**
- $R > 0$: Sphere-like (both centers of curvature on same side)
- $R = 0$: Flat or cylinder-like (one radius is infinite)
- $R < 0$: Saddle-like (centers on opposite sides)

### 1.4 Developable Surfaces

**From §1.1:**
A cylinder can be **unrolled** onto a plane without stretching or tearing.

**Properties:**
- Geodesics on cylinder → straight lines on plane
- Gaussian curvature $R = 0$ everywhere
- Called a **developable surface**

**Why $R = 0$ for a cylinder:**
- Axial direction: flat, $\rho_1 = \infty$
- Circumferential direction: curved, $\rho_2 = a$ (cylinder radius)
- Therefore: $R = \frac{1}{\infty \cdot a} = 0$

---

## 2. Tidal Acceleration (For Exercise 1.2)

### 2.1 Newtonian Tidal Forces

**From §1.3 and Figure 1.6:**

The **tide-producing acceleration** is the differential gravitational pull across an extended body.

**Formula:**
$$R^m_{\ 0n0} = \frac{\partial^2\Phi}{\partial x^m \partial x^n} \sim \frac{GM}{r^3}$$

where:
- $G$ = gravitational constant
- $M$ = mass of tide-producing body (Moon, Sun)
- $r$ = distance to the body
- $\Phi = -GM/r$ = Newtonian gravitational potential

**Physical Meaning:**
- Near side of Earth feels stronger pull than far side
- This **stretching** creates tides
- The tensor component $R^m_{\ 0n0}$ measures this tidal effect

### 2.2 Numerical Values (From Fig 1.6)

**For the Moon:**
- Mass: $M_{\text{moon}} = 7.35 \times 10^{25}$ g
- Distance: $r_{\text{moon}} = 3.84 \times 10^{10}$ cm

**For the Sun:**
- Mass: $M_{\text{sun}} = 1.989 \times 10^{33}$ g
- Distance: $r_{\text{sun}} = 1.496 \times 10^{13}$ cm

**Gravitational Constant:**
$$G = 6.674 \times 10^{-8} \text{ cm}^3/(\text{g}\cdot\text{s}^2)$$

### 2.3 Geometrized Units

**From §1.4 and Box 1.3:**

In geometrized units, we set fundamental constants to 1:
$$G = c = 1$$

**Mass becomes length:**
$$m = \frac{GM}{c^2}$$

**Conversion factor:**
$$\frac{G}{c^2} = 7.425 \times 10^{-29} \text{ cm/g}$$

**Tidal acceleration in geometrized units:**
$$R^m_{\ 0n0} = \frac{m}{r^3} \quad \text{(units: cm}^{-2}\text{)}$$

### 2.4 Spring Tides vs. Neap Tides

**Configuration:**
- **Spring tide**: Sun and Moon aligned (new moon or full moon)
  - Tidal forces add: $R_{\text{spring}} = R_{\text{moon}} + R_{\text{sun}}$
  
- **Neap tide**: Sun and Moon at 90° (first or third quarter)
  - Tidal forces partially cancel: $R_{\text{neap}} = R_{\text{moon}} - R_{\text{sun}}$

**Ratio:**
$$\frac{\text{Spring}}{\text{Neap}} = \frac{R_{\text{moon}} + R_{\text{sun}}}{R_{\text{moon}} - R_{\text{sun}}}$$

---

## 3. Kepler's Law and Density (For Exercise 1.3)

### 3.1 Kepler's Third Law

**Newtonian Form:**
$$\omega^2 = \frac{GM}{r^3}$$

where:
- $\omega$ = orbital angular frequency
- $M$ = central mass
- $r$ = orbital radius

**In Geometrized Units ($G=c=1$):**
$$\omega^2 = \frac{m}{r^3}$$

where $m = GM/c^2$ is the geometrized mass.

### 3.2 The Indeterminacy Problem

**From one measurement ($\omega$), two unknowns ($m$, $r$):**

Given only $\omega$:
$$m = \omega^2 r^3$$

For any observed $\omega$, there are **infinitely many** $(m, r)$ pairs that satisfy this. We **cannot** determine $m$ or $r$ individually.

### 3.3 Kepler Density

**Definition:**
The **Kepler density** $\rho_K$ is the average density within a sphere of radius $r$:

$$\rho_K = \frac{M}{\frac{4}{3}\pi r^3}$$

**In geometrized units:**
$$\rho_K = \frac{m}{\frac{4}{3}\pi r^3}$$

**Using Kepler's law ($m/r^3 = \omega^2$):**
$$\rho_K = \frac{\omega^2}{\frac{4}{3}\pi} = \frac{3\omega^2}{4\pi}$$

**Solving for $\omega^2$:**
$$\boxed{\omega^2 = \frac{4\pi}{3}\rho_K}$$

### 3.4 Physical Interpretation

**Key Result:** Orbital frequency depends **only on average density**, not on individual $m$ or $r$.

**Examples:**
- Satellite just above Earth's surface: same $\omega$ regardless of Earth's actual radius (if average density fixed)
- Measuring $\omega$ gives $\rho_K$, but not $m$ or $r$ separately

**Connection to General Relativity:**
This Newtonian result generalizes to Einstein's theory—orbital dynamics depend on the **enclosed mass-energy**, not on the detailed distribution.

---

## 4. Reference: Key Formulas

| Concept | Formula | Units |
|---------|---------|-------|
| Gaussian curvature | $R = \frac{1}{\rho_1\rho_2}$ | cm⁻² |
| Geodesic deviation | $\frac{D^2\xi^\alpha}{Ds^2} = -R^\alpha_{\ \beta\gamma\delta}u^\beta\xi^\gamma u^\delta$ | — |
| Tidal acceleration | $R^m_{\ 0n0} = \frac{GM}{r^3}$ | s⁻² (conventional) |
| Tidal acceleration | $R^m_{\ 0n0} = \frac{m}{r^3}$ | cm⁻² (geometrized) |
| Kepler's law | $\omega^2 = \frac{m}{r^3}$ | cm⁻² |
| Kepler density | $\rho_K = \frac{3\omega^2}{4\pi}$ | cm⁻² |
| Mass conversion | $m = \frac{GM}{c^2}$ | cm |
| Conversion factor | $\frac{G}{c^2} = 7.425 \times 10^{-29}$ | cm/g |

---

## 5. Reference: Constants

| Constant | Value | Units |
|----------|-------|-------|
| $G$ | $6.674 \times 10^{-8}$ | cm³/(g·s²) |
| $c$ | $2.998 \times 10^{10}$ | cm/s |
| $G/c^2$ | $7.425 \times 10^{-29}$ | cm/g |
| Moon mass | $7.35 \times 10^{25}$ | g |
| Moon distance | $3.84 \times 10^{10}$ | cm |
| Sun mass | $1.989 \times 10^{33}$ | g |
| Sun distance | $1.496 \times 10^{13}$ | cm |

---

## 6. How This Relates to Chapter 1 Themes

### 6.1 "Space Tells Matter How to Move"

- **Geodesics** (§1.1): Free-falling objects follow straightest paths in curved spacetime
- **Geodesic deviation** (§1.1): Curvature causes nearby geodesics to converge/diverge
- **Tidal forces** (§1.3): Manifestation of spacetime curvature

### 6.2 "Matter Tells Space How to Curve"

- **Gaussian curvature** (§1.1): Quantifies how much space is curved
- **Principal radii** (§1.1): Describe curvature in different directions
- **Mass-energy** (§1.4): Source of spacetime curvature

### 6.3 Local Lorentz Geometry

- **Locally flat** (§1.4): In small enough region, spacetime looks flat (special relativity)
- **Curvature appears** over extended regions (geodesic deviation, tides)
- **Kepler's law**: Relates orbital dynamics to enclosed mass/energy

---

## 7. Exercise Solutions Quick Reference

### Exercise 1.1: Cylinder Curvature
- **Method 1**: Unroll cylinder → geodesics become straight lines → no deviation → $R=0$
- **Method 2**: $\rho_1 = \infty$, $\rho_2 = a$ → $R = \frac{1}{\infty \cdot a} = 0$

### Exercise 1.2: Tides
- $R_{\text{moon}} = 8.66 \times 10^{-14}$ s⁻² (conventional) or $9.64 \times 10^{-35}$ cm⁻² (geometrized)
- $R_{\text{sun}} = 3.96 \times 10^{-14}$ s⁻² (conventional) or $4.41 \times 10^{-35}$ cm⁻² (geometrized)
- Spring/Neap ratio ≈ **2.7**

### Exercise 1.3: Kepler
- $\omega^2 = \frac{m}{r^3}$ (one equation, two unknowns)
- $\rho_K = \frac{m}{\frac{4}{3}\pi r^3}$ (Kepler density)
- **Result**: $\omega^2 = \frac{4\pi}{3}\rho_K$
