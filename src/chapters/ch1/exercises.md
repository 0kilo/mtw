# Chapter 1 Exercises - Solutions

**Source:** *Gravitation* by Misner, Thorne, and Wheeler

**Generated:** March 20, 2026

---

## Exercise 1.1: Curvature of a Cylinder

**Problem:** Show that the Gaussian curvature $R$ of the surface of a cylinder is zero by showing that geodesics on that surface (unroll!) suffer no geodesic deviation. Give an independent argument for the same conclusion by employing the formula $R = 1/\rho_1\rho_2$, where $\rho_1$ and $\rho_2$ are the principal radii of curvature at the point in question with respect to the enveloping Euclidean three-dimensional space.

### Solution

#### Method 1: Geodesic Deviation (Unrolling Argument)

A cylinder can be "unrolled" or developed onto a plane without stretching or tearing. This is because a cylinder is a **developable surface**.

When we unroll a cylinder of radius $a$ onto a plane:
- The axial coordinate $z$ maps directly to a Cartesian coordinate
- The angular coordinate $\theta$ maps to a linear coordinate $x = a\theta$

**Key insight:** Geodesics on the cylinder correspond to straight lines on the unrolled plane.

Consider two nearby geodesics on the cylinder. When unrolled:
1. They become straight lines in the plane
2. In Euclidean plane geometry, parallel straight lines maintain constant separation
3. The geodesic deviation equation is:
   $$\frac{D^2\xi^\alpha}{Ds^2} = -R^\alpha_{\ \beta\gamma\delta}u^\beta\xi^\gamma u^\delta$$
   where $\xi^\alpha$ is the separation vector and $u^\beta$ is the tangent vector.

4. For straight lines in a plane, $\frac{D^2\xi^\alpha}{Ds^2} = 0$ (no acceleration of separation)

5. Therefore, $R^\alpha_{\ \beta\gamma\delta} = 0$, which implies **$R = 0$**.

#### Method 2: Principal Radii of Curvature

For a cylinder of radius $a$ aligned along the $z$-axis:

**Principal direction 1** (axial): Along the cylinder's length
- The surface is flat in this direction
- **$\rho_1 = \infty$** (infinite radius of curvature)

**Principal direction 2** (circumferential): Around the cylinder
- The surface curves with the cylinder's radius
- **$\rho_2 = a$** (the cylinder radius)

Using the formula for Gaussian curvature:
$$R = \frac{1}{\rho_1\rho_2} = \frac{1}{\infty \cdot a} = 0$$

**Conclusion:** Both methods confirm that the Gaussian curvature of a cylinder is **zero**.

---

## Exercise 1.2: Spring Tide vs. Neap Tide

**Problem:** Evaluate (1) in conventional units and (2) in geometrized units the magnitude of the Newtonian tide-producing acceleration $R^m_{\ 0n0}(m,n = 1,2,3)$ generated at the Earth by (1) the moon ($m_{\text{conv}} = 7.35 \times 10^{25}$ g, $r = 3.84 \times 10^{10}$ cm) and (2) the sun ($m_{\text{conv}} = 1.989 \times 10^{33}$ g, $r = 1.496 \times 10^{13}$ cm). By what factor do you expect spring tides to exceed neap tides?

### Solution

#### Part 1: Conventional Units

The Newtonian tidal acceleration tensor component is:
$$R^m_{\ 0n0} \sim \frac{GM}{r^3}$$

**For the Moon:**
- $G = 6.674 \times 10^{-8}$ cm³/(g·s²)
- $M_{\text{moon}} = 7.35 \times 10^{25}$ g
- $r_{\text{moon}} = 3.84 \times 10^{10}$ cm

$$R_{\text{moon}} = \frac{GM_{\text{moon}}}{r_{\text{moon}}^3} = \frac{(6.674 \times 10^{-8})(7.35 \times 10^{25})}{(3.84 \times 10^{10})^3}$$

$$R_{\text{moon}} = \frac{4.905 \times 10^{18}}{5.662 \times 10^{31}} = 8.66 \times 10^{-14} \text{ s}^{-2}$$

**For the Sun:**
- $M_{\text{sun}} = 1.989 \times 10^{33}$ g
- $r_{\text{sun}} = 1.496 \times 10^{13}$ cm

$$R_{\text{sun}} = \frac{GM_{\text{sun}}}{r_{\text{sun}}^3} = \frac{(6.674 \times 10^{-8})(1.989 \times 10^{33})}{(1.496 \times 10^{13})^3}$$

$$R_{\text{sun}} = \frac{1.327 \times 10^{26}}{3.348 \times 10^{39}} = 3.96 \times 10^{-14} \text{ s}^{-2}$$

#### Part 2: Geometrized Units

In geometrized units, $G = c = 1$, so mass has units of length:
$$m = \frac{GM}{c^2}$$

**Conversion factor:** $G/c^2 = 7.425 \times 10^{-29}$ cm/g

**For the Moon:**
$$m_{\text{moon}} = (7.425 \times 10^{-29})(7.35 \times 10^{25}) = 5.46 \times 10^{-3} \text{ cm}$$

$$R_{\text{moon}} = \frac{m_{\text{moon}}}{r_{\text{moon}}^3} = \frac{5.46 \times 10^{-3}}{(3.84 \times 10^{10})^3} = 9.64 \times 10^{-35} \text{ cm}^{-2}$$

**For the Sun:**
$$m_{\text{sun}} = (7.425 \times 10^{-29})(1.989 \times 10^{33}) = 1.477 \times 10^5 \text{ cm}$$

$$R_{\text{sun}} = \frac{m_{\text{sun}}}{r_{\text{sun}}^3} = \frac{1.477 \times 10^5}{(1.496 \times 10^{13})^3} = 4.41 \times 10^{-35} \text{ cm}^{-2}$$

#### Spring Tides vs. Neap Tides

**Spring tides:** Sun and Moon align (new moon or full moon)
- Tidal forces add: $R_{\text{spring}} = R_{\text{moon}} + R_{\text{sun}}$

**Neap tides:** Sun and Moon at right angles (first or third quarter)
- Tidal forces partially cancel: $R_{\text{neap}} = R_{\text{moon}} - R_{\text{sun}}$

**Ratio:**
$$\frac{\text{Spring}}{\text{Neap}} = \frac{R_{\text{moon}} + R_{\text{sun}}}{R_{\text{moon}} - R_{\text{sun}}} = \frac{8.66 + 3.96}{8.66 - 3.96} = \frac{12.62}{4.70} = 2.68$$

**Answer:** Spring tides exceed neap tides by a factor of approximately **2.7**.

---

## Exercise 1.3: Kepler Encapsulated

**Problem:** A small satellite has a circular frequency $\omega$(cm⁻¹) in an orbit of radius $r$ about a central object of mass $m$(cm). From the known value of $\omega$, show that it is possible to determine neither $r$ nor $m$ individually, but only the effective "Kepler density" of the object as averaged over a sphere of the same radius as the orbit. Give the formula for $\omega^2$ in terms of this Kepler density.

### Solution

#### Step 1: Kepler's Third Law in Geometrized Units

For a circular orbit in Newtonian gravity:
$$\omega^2 = \frac{GM}{r^3}$$

In geometrized units ($G = c = 1$), mass $m$ has units of length:
$$\omega^2 = \frac{m}{r^3}$$

#### Step 2: The Indeterminacy

From $\omega$ alone, we have one equation with two unknowns ($m$ and $r$):
$$\omega^2 = \frac{m}{r^3}$$

This can be rearranged as:
$$m = \omega^2 r^3$$

For any observed $\omega$, there are infinitely many $(m, r)$ pairs that satisfy this equation. We cannot determine $m$ or $r$ individually.

#### Step 3: Kepler Density

Define the **Kepler density** $\rho_K$ as the average density within a sphere of radius $r$:
$$\rho_K = \frac{M}{\frac{4}{3}\pi r^3}$$

In geometrized units:
$$\rho_K = \frac{m}{\frac{4}{3}\pi r^3}$$

From Kepler's law, $m/r^3 = \omega^2$, so:
$$\rho_K = \frac{\omega^2}{\frac{4}{3}\pi} = \frac{3\omega^2}{4\pi}$$

#### Step 4: Final Formula

Solving for $\omega^2$:
$$\boxed{\omega^2 = \frac{4\pi}{3}\rho_K}$$

**Physical Interpretation:**

This elegant result shows that the orbital frequency depends **only** on the average density enclosed within the orbit, not on the individual values of mass or radius. This is why:

1. A satellite orbiting just above Earth's surface has the same $\omega$ regardless of Earth's actual radius (as long as average density is fixed)
2. We can measure $\omega$ and determine $\rho_K$, but cannot separately find $m$ and $r$
3. This is the relativistic/general relativistic analogue of the Newtonian result that orbital period depends on the mass enclosed

**Historical Note:** As mentioned in the exercise, Kepler and Galileo corresponded, and Newton's synthesis came after both. This exercise encapsulates Kepler's third law in a form that bridges Newtonian and Einsteinian gravity.

---

## Summary

| Exercise | Key Result |
|----------|------------|
| 1.1 | Cylinder has $R = 0$ (developable surface) |
| 1.2 | Moon's tidal effect ≈ 2.2× Sun's; Spring/Neap ratio ≈ 2.7 |
| 1.3 | $\omega^2 = \frac{4\pi}{3}\rho_K$ (depends only on average density) |
