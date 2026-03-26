# Chapter 7 Detailed Summary  
## *Incompatibility of Gravity and Special Relativity*

## Overview

Chapter 7 explains why gravity cannot be consistently incorporated into **special relativity** while keeping spacetime globally flat. The chapter begins by showing that Newtonian gravity is incompatible with Lorentz invariance, then surveys several increasingly sophisticated flat-spacetime attempts to build a relativistic theory of gravity. Each attempt fails in an important way.

The chapter then turns to **gravitational redshift**, first deriving it from energy conservation and then using it as evidence that spacetime itself must be curved. The chapter concludes by connecting redshift to Einstein’s **equivalence principle** and to the idea that spacetime can be **locally flat** while still being **globally curved**.

The central message is:

- Newtonian gravity is not relativistically acceptable.
- Simple scalar and vector relativistic gravities do not match observation.
- The best flat-spacetime tensor theory comes very close, but is internally inconsistent.
- Gravitational redshift shows that a global Minkowski spacetime cannot describe a world with gravity.
- Therefore gravity must be understood geometrically, through curved spacetime.

---

## 7.1 Attempts to Incorporate Gravity into Special Relativity

The chapter opens by recalling Newton’s laws for gravity:

- particle motion:
  $$
  \frac{d^2 x^i}{dt^2} = -\frac{\partial \Phi}{\partial x^i}
  $$
- field equation:
  $$
  \nabla^2 \Phi = 4\pi G \rho
  $$

These equations are incompatible with special relativity for two main reasons.

First, the equation of motion is written in a **three-dimensional** form rather than a fully spacetime-covariant four-dimensional form.

Second, the Poisson equation uses the three-dimensional Laplacian $\nabla^2$ rather than the Lorentz-invariant wave operator $\Box$. As a result, the Newtonian potential responds instantaneously to changes in the source, which means gravity propagates with **infinite speed**. That violates relativity.

The chapter then considers several relativistic generalizations of Newtonian gravity.

### Scalar theory of gravity

The first possibility is to keep gravity as a **scalar field** $\Phi$ and let it couple to matter relativistically.

This scalar theory can reproduce a static Newtonian-like potential, and it can be used to derive equations of motion for particles. However, it fails badly as a physical theory of gravity. In particular:

- it gives the wrong relativistic corrections for planetary motion,
- and it predicts **no bending of light** by the sun.

That last failure is decisive, because observed light deflection is a key empirical signature of gravitation.

### Vector theory of gravity

The second possibility is to imitate electromagnetism and represent gravity by a **vector field** $\phi_\mu$.

This theory is more sophisticated and naturally relativistic in form. But it also fails:

- it gives incorrect orbital effects,
- it predicts the wrong behavior for light,
- and, most seriously, its gravitational waves carry **negative energy**.

Negative-energy wave modes signal deep instability and are physically unacceptable.

### Symmetric tensor theory in flat spacetime

The third and best attempt is to describe gravity by a **symmetric tensor field** $h_{\mu\nu}$ in flat spacetime. This is much closer in spirit to general relativity, because gravity now has the right index structure to affect the geometry experienced by matter.

This tensor theory does much better than the scalar and vector theories:

- it produces a sensible field of a point mass,
- it predicts light bending,
- it predicts positive-energy gravitational waves,
- and its linearized equations resemble Einstein’s weak-field theory.

But it ultimately fails because it is **self-inconsistent** when fully coupled to its matter sources. Once one tries to repair that inconsistency, the theory is driven toward full general relativity.

### Main conclusion of Section 7.1

All straightforward flat-spacetime relativistic modifications of Newtonian gravity are unsatisfactory. The scalar and vector theories fail phenomenologically; the tensor theory is the best of the three, but still breaks down internally. This motivates abandoning globally flat spacetime and moving toward Einstein’s curved-spacetime viewpoint.

---

## Exercises 7.1–7.3: What the Chapter Is Testing

The chapter’s exercises are not just drills. They systematically test three candidate relativistic gravities:

1. **Exercise 7.1:** scalar gravity  
2. **Exercise 7.2:** vector gravity  
3. **Exercise 7.3:** symmetric tensor gravity in flat spacetime  

The reader is meant to compare these theories on the basis of:

- field equations,
- particle motion,
- perihelion precession,
- bending of light,
- gravitational waves,
- and internal consistency.

The detailed solution to the best candidate, the tensor theory, is presented in **Box 7.1**.

---

## Box 7.1 Detailed Summary  
## An Attempt to Describe Gravity by a Symmetric Tensor Field in Flat Spacetime

Box 7.1 is the mathematical centerpiece of the chapter. It develops the strongest possible flat-spacetime theory of gravity before showing why it still cannot be the final theory.

### 1. Motivation for the tensor theory

The box begins by explaining the logic of escalation:

- A scalar field is the natural first guess because Newtonian gravity uses a scalar potential.
- A vector field is the next guess by analogy with electromagnetism.
- After both fail, one is led to a **symmetric tensor potential** $h_{\mu\nu} = h_{\nu\mu}$.

This choice is not arbitrary. A massless spin-2 field is exactly the sort of object that can represent a relativistic gravitational interaction in flat spacetime.

### 2. Equation of motion for a test particle

Using the particle action and the interaction term, the box derives a relativistic equation of motion of the schematic form
$$
(\eta_{\mu\nu} + h_{\mu\nu}) \ddot z^\nu + \Gamma_{\mu\alpha\beta}\dot z^\alpha \dot z^\beta = 0,
$$
where the “gravitational force field”
$$
\Gamma_{\mu\alpha\beta}
= \frac12 \left(
h_{\mu\alpha,\beta}
+ h_{\mu\beta,\alpha}
- h_{\alpha\beta,\mu}
\right)
$$
is built from the tensor potential.

This already resembles Christoffel-symbol structure, which is a major hint that gravity wants to be geometric rather than just a field in a fixed background.

### 3. Field equations

By varying the field variables, the box obtains field equations expressible in terms of a derived tensor $H^{\mu\alpha\nu\beta}$ and ultimately, after imposing a gauge condition, in a wave-equation form for the trace-reversed field $\bar h_{\mu\nu}$:
$$
\Box \bar h^{\mu\nu} = -16\pi T^{\mu\nu},
$$
with gauge condition
$$
\bar h^{\mu\alpha}{}_{,\alpha} = 0.
$$

This is the familiar linearized-gravity structure. It is formally similar to electromagnetism in Lorenz gauge, but now with a symmetric rank-2 field instead of a four-potential.

### 4. Gauge invariance

A major theme of the box is **gauge freedom**. The theory is invariant under transformations of the form
$$
h_{\mu\nu} \rightarrow h_{\mu\nu} + \xi_{\mu,\nu} + \xi_{\nu,\mu},
$$
and corresponding transformations for $\bar h_{\mu\nu}$.

This gauge freedom means that not all components of $h_{\mu\nu}$ are physically independent. It also makes the theory look much more like a geometry theory in disguise: different fields can represent the same physical situation.

### 5. Field of a point mass

For a static point mass, the wave equation reduces to a Laplace equation, and the solution becomes
$$
h_{00} = \frac{2M}{r}, \qquad
h_{0k}=0, \qquad
h_{ik} = \delta_{ik}\frac{2M}{r}.
$$

This is significant because it already resembles the weak-field limit of the Schwarzschild geometry. So the theory is reproducing part of the correct weak-field structure.

### 6. Perihelion precession

Using the effective Lagrangian for a particle orbiting in the static central field, the box derives an orbital equation and ultimately a perihelion advance per orbit:
$$
\Delta \phi = \frac{8\pi M}{r_0} + O\!\left(\left(\frac{M}{r_0}\right)^3\right).
$$

This is only **two-thirds** of the general relativistic prediction. Therefore the tensor flat-spacetime theory still disagrees with Mercury’s observed perihelion advance.

This is a major result: even the best flat-spacetime theory gets one of the classic relativistic tests wrong.

### 7. Bending of light

The box then studies light bending by taking the zero-rest-mass limit. In this theory, the deflection for light grazing the sun is
$$
\Delta \phi = \frac{4M_\odot}{R_\odot},
$$
which corresponds to about
$$
1''.75.
$$

This agrees with the prediction of general relativity and with observation. So unlike the scalar theory, this tensor theory **does** bend light correctly.

### 8. Gravitational waves

Because the field equations coincide with those of linearized gravity, the treatment of gravitational waves also carries over. The box considers plane-wave solutions and shows that the physically relevant wave modes can be reduced by gauge choice.

### 9. Positive energy of the waves

Unlike the vector theory, the tensor theory gives **positive energy density** for the gravitational waves considered. This is a major improvement and removes one of the biggest problems of the vector theory.

### 10. Self-inconsistency of the theory

The box culminates in the decisive objection. The field equations require stress-energy conservation:
$$
T^{\mu\nu}{}_{,\nu}=0.
$$

But in the presence of gravity, the motion equation implies that matter should not in general move with conserved flat-spacetime four-momentum. Put differently:

- the field equations require source conservation in the flat-spacetime sense,
- but the particle motion induced by gravity does not preserve that same conservation law.

Therefore the theory is internally inconsistent as an exact theory of gravitating matter.

The box makes the physical implication stark: if the conservation law held in the required flat-spacetime form, gravitating bodies could not truly accelerate under gravity. The Earth could not orbit the sun correctly. So the theory cannot be the real theory of gravitation.

### Bottom line of Box 7.1

Box 7.1 shows that the most promising flat-spacetime tensor theory:

- has the right field type,
- has gauge structure,
- yields positive-energy waves,
- gets light bending right,
- comes close to Einstein’s weak-field theory,

but still fails because its coupling to matter is fundamentally inconsistent. That failure points directly toward full general relativity.

---

## 7.2 Gravitational Red Shift Derived from Energy Conservation

Section 7.2 presents Einstein’s 1911 argument that light must suffer a gravitational redshift.

The setup is simple:

1. A particle of rest mass $m$ falls through height $h$ in a gravitational field $g$.
2. It gains kinetic energy $mgh$.
3. At the lower point, it annihilates into a photon.
4. That photon then climbs back upward.

If the photon did **not** lose energy while climbing out of the gravitational field, one could recover the original rest mass at the top and still keep the extra energy $mgh$, violating energy conservation.

Therefore the photon must lose energy while rising.

The section writes the energy relation as
$$
E_{\text{bottom}} = E_{\text{top}}(1+gh)
= E_{\text{top}}\!\left(1+\frac{g_{\rm conv}h}{c^2}\right).
$$

Since photon energy is proportional to frequency, the frequency must drop and the wavelength must increase. The redshift formula becomes
$$
1+z
=
\frac{\lambda_{\text{top}}}{\lambda_{\text{bottom}}}
=
\frac{h\nu_{\text{bottom}}}{h\nu_{\text{top}}}
=
\frac{E_{\text{bottom}}}{E_{\text{top}}}
=
1+gh.
$$

So the chapter’s weak-field redshift prediction is
$$
z \approx gh.
$$

### Physical meaning

This section is important because it does not yet use spacetime curvature explicitly. Instead, it shows that once energy conservation is taken seriously, gravity must affect light. That alone already pushes beyond Newtonian intuition and prepares the reader for the geometric argument that follows.

---

## 7.3 Gravitational Redshift Implies Spacetime Is Curved

Section 7.3 gives a deeper argument, due to Schild, that gravitational redshift is not just a curious effect: it proves that special relativity cannot remain globally valid in the presence of gravity.

### Core idea

Consider two observers at rest relative to the Earth at different heights, with light pulses traveling from the lower observer to the upper one. The lower observer emits a pulse containing a fixed number $N$ of cycles. Because of gravitational redshift, the upper observer receives the same $N$ cycles over a **different time interval**.

That means the proper time intervals measured at top and bottom differ:
$$
\delta\tau_{\text{top}} > \delta\tau_{\text{bottom}}.
$$

### Why this contradicts global Minkowski spacetime

If one insists that the entire situation can be represented in a single global Minkowski spacetime with special-relativistic geometry, then the pulse worldlines and observer worldlines form a parallelogram-type construction. In flat Minkowski spacetime, opposite sides of that construction must match appropriately. But the observed redshift requires unequal corresponding time intervals.

Thus the geometry implied by the experiment is incompatible with a globally flat spacetime.

### Improved version of the argument

The section notes that light paths themselves may be influenced by gravity and therefore need not be straight in the spacetime diagram. Even after allowing for curved light paths, the contradiction remains because:

- the gravitational field is static,
- the apparatus is static,
- successive pulse paths are congruent,
- and the observers remain in fixed relative configuration.

So the failure is not merely due to a bad drawing of light rays. It is a genuine geometric failure of flat spacetime.

### Conclusion of Section 7.3

Gravitational redshift implies that **flat Minkowski spacetime is inadequate globally**. The presence of gravity requires spacetime curvature.

This section is one of the conceptual turning points of the book: it shifts the reader from “gravity as a force in flat spacetime” to “gravity as a manifestation of spacetime geometry.”

---

## Figure 7.1 Summary

**Figure 7.1** supports Schild’s argument. It shows successive light pulses traveling upward from one height to another in the Earth’s gravitational field.

- In panel **A**, the light rays are drawn as $45^\circ$ null lines, as in simple special-relativistic diagrams.
- In panel **B**, the paths are allowed to curve under the influence of gravity.

The important point is that in either case, the two pulse paths must be congruent because the field is static and the setup does not change with time. Yet the measured top and bottom time intervals differ because of redshift. Therefore the geometry cannot be globally Minkowskian.

The figure visually reinforces the claim that gravitational redshift is evidence for spacetime curvature, not merely for a force acting on photons.

---

## 7.4 Gravitational Redshift as Evidence for the Principle of Equivalence

Section 7.4 connects gravitational redshift to Einstein’s **principle of equivalence**.

The principle is stated as:

> the effects of a uniform gravitational field are locally identical to the effects of a uniformly accelerating frame.

The section emphasizes that this principle generalizes Newtonian ideas and extends them to all laws of physics, not just particle mechanics.

### Rocket-ship argument

Imagine a rocket accelerating uniformly with acceleration $g$. Two observers are separated by a height $h$ along the direction of acceleration.

If the lower observer emits a photon upward, the photon takes time $t=h$ to reach the upper observer. During that time, the upper observer acquires speed
$$
v = gt = gh.
$$

Therefore the upper observer sees a Doppler redshift
$$
z = v = gh.
$$

This reproduces the same result obtained from the gravitational argument:
$$
z \approx gh.
$$

By the principle of equivalence, if uniform acceleration produces this redshift, then a uniform gravitational field must produce the same effect.

### Why this matters

This argument makes redshift an observational consequence of the equivalence principle. It therefore serves as evidence not only for gravity affecting light, but also for Einstein’s deeper claim that gravitation and acceleration are locally indistinguishable.

---

## 7.5 Local Flatness, Global Curvature

Section 7.5 explains how gravity can be compatible with the local validity of special relativity while still requiring global curvature.

### Local Lorentz frames

The equivalence principle implies that around any event in a gravitational field, one can choose a small freely falling frame in which physics looks locally special relativistic. So spacetime is **locally flat**.

But these local inertial frames cannot, in general, be patched together into a single global Lorentz frame.

### Earth example

The chapter considers local Lorentz frames near the Earth. Relative to an Earth-bound laboratory, nearby freely falling frames accelerate downward. But the downward radial direction differs from place to place around the Earth.

So two local inertial frames on opposite sides of the Earth cannot remain globally aligned. If extended sufficiently, they “nonmesh.” This nonmeshing is a direct sign of curvature.

### Cartographic analogy

The section gives a geographic analogy:

- small regions of the Earth can be mapped with ordinary flat rectangular coordinates,
- but larger regions cannot be fitted together consistently without angular mismatch,
- because the Earth’s surface is curved.

Likewise, small neighborhoods of spacetime can be described by local Lorentz frames, but the large-scale structure cannot be globally Minkowskian if gravity is present.

### Two geometries that enter general relativity

The section distinguishes two kinds of geometry relevant to spacetime:

1. **Metric geometry** — geometry of lengths and angles, leading to **Riemannian geometry**.  
2. **Affine geometry** — geometry of locally straight worldlines and free fall, leading to concepts such as covariant derivative and curvature.

This distinction previews later chapters, where both metric structure and free-fall structure will be unified in the full geometry of general relativity.

### Final message of Section 7.5

Special relativity survives only **locally** in a gravitational field. Globally, gravity forces spacetime to be curved. This is the conceptual bridge into the geometry chapters that follow.

---

## Key Equations and Results

### Newtonian gravity
$$
\frac{d^2 x^i}{dt^2} = -\frac{\partial \Phi}{\partial x^i},
\qquad
\nabla^2 \Phi = 4\pi G\rho
$$

### Tensor-theory gauge condition
$$
\bar h^{\mu\alpha}{}_{,\alpha}=0
$$

### Tensor-theory wave equation
$$
\Box \bar h^{\mu\nu} = -16\pi T^{\mu\nu}
$$

### Point-mass field in the flat-spacetime tensor theory
$$
h_{00} = \frac{2M}{r},
\qquad
h_{0k}=0,
\qquad
h_{ik}=\delta_{ik}\frac{2M}{r}
$$

### Perihelion advance in the tensor flat-spacetime theory
$$
\Delta\phi = \frac{8\pi M}{r_0} + O\!\left(\left(\frac{M}{r_0}\right)^3\right)
$$

### Light deflection in the same theory
$$
\Delta\phi = \frac{4M_\odot}{R_\odot}
$$

### Gravitational redshift from energy conservation
$$
E_{\text{bottom}} = E_{\text{top}}(1+gh)
$$

### Weak-field redshift formula
$$
1+z = \frac{\lambda_{\text{top}}}{\lambda_{\text{bottom}}} = 1+gh
$$

### Equivalence-principle derivation
$$
v = gt = gh,
\qquad
z = gh
$$

---

## Main Takeaways

1. **Newtonian gravity is not Lorentz invariant.**  
   Its equations are three-dimensional and imply instantaneous propagation.

2. **Simple relativistic field theories of gravity fail.**  
   Scalar gravity predicts no light bending; vector gravity gives negative-energy waves.

3. **The symmetric tensor theory is the best flat-spacetime attempt.**  
   It captures many correct weak-field features, including light bending and positive-energy waves.

4. **Even the tensor theory fails as an exact theory.**  
   Its coupling to matter is internally inconsistent.

5. **Gravitational redshift is a decisive clue.**  
   It shows that gravity acts on light and cannot be described consistently in globally flat spacetime.

6. **The equivalence principle deepens the argument.**  
   Uniform acceleration and uniform gravity produce the same redshift effect.

7. **Spacetime must be locally Minkowskian but globally curved.**  
   This is the transition from special relativity to general relativity.

---

## Conceptual Bridge to Later Chapters

Chapter 7 serves as the last major warning that one cannot keep gravity inside the conceptual framework of special relativity. It demonstrates, by both failed field-theory attempts and redshift arguments, that gravity demands geometry.

The next conceptual move is therefore inevitable:

- abandon the idea of a single global inertial frame,
- keep local inertial frames,
- and study the geometry required to fit those local frames together.

That is the road to curved spacetime, covariant derivatives, and general relativity.
