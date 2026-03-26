# Detailed Summary of Chapter 6: *Accelerated Observers*

## Source and scope
This summary covers the attached chapter titled **"Accelerated Observers."** The chapter asks a central question of relativistic physics:

**How should physics be described by an observer who is accelerating rather than moving inertially?**

The answer is that accelerated observers can still be analyzed within **special relativity**, provided one works **locally**. This local analysis becomes the conceptual bridge to **general relativity**, because gravity can be locally mimicked by acceleration through the **equivalence principle**.

The chapter develops that idea in stages:

- it explains why accelerated motion can be treated by special relativity;
- it studies the simplest example, **uniform proper acceleration**;
- it shows why a global coordinate system for an accelerated observer fails beyond a certain scale;
- it introduces a carried **orthonormal tetrad**;
- it generalizes the notion of a **nonrotating frame** via **Fermi-Walker transport**;
- it constructs the observer's **local coordinates**, which in the uniformly accelerated case become the familiar **Rindler-type coordinates**.

The chapter also contains two important boxes:

- **Box 6.1**: why general relativity is built on special relativity;
- **Box 6.2**: a compact summary of accelerated observers, clocks, rods, local frames, inertial forces, and Fermi-Walker transport.

---

## Executive summary
The chapter's core message is that an accelerated observer can always set up a meaningful frame **in a sufficiently small neighborhood of his world line**, but not over arbitrarily large distances.

That local frame has three essential ingredients:

1. **Proper time** measured along the observer's world line.
2. A carried **orthonormal tetrad** whose timelike vector is the observer's 4-velocity.
3. A rule for keeping the spatial axes **nonrotating**, namely **Fermi-Walker transport**.

For an observer with constant proper acceleration $g$, the world line in Minkowski spacetime is a hyperbola,

$t = g^{-1}\sinh(g\tau), \qquad x = g^{-1}\cosh(g\tau),$

so that

$x^2 - t^2 = g^{-2}.$

This is the standard picture of **hyperbolic motion**. It shows immediately that the accelerated observer has a limited natural coordinate patch: the local simultaneity hypersurfaces eventually intersect, and beyond distances of order $g^{-1}$ the notion of "coordinates relative to the accelerated observer" becomes ambiguous.

The chapter resolves this by abandoning any attempt at a global accelerated coordinate system and instead constructing a **local** one from the observer's world line and tetrad. For uniform acceleration, the resulting coordinates satisfy

$x^0 = (g^{-1} + \xi^1)\sinh(g\xi^0),$
$x^1 = (g^{-1} + \xi^1)\cosh(g\xi^0),$
$x^2 = \xi^2,$
$x^3 = \xi^3,$

with metric

$ds^2 = -(1 + g\xi^1)^2(d\xi^0)^2 + (d\xi^1)^2 + (d\xi^2)^2 + (d\xi^3)^2.$

This metric reduces to the Minkowski form at the observer's position $\xi^1 = 0$, which is exactly the local flatness expected from the equivalence principle.

---

## High-level roadmap of the chapter
The chapter develops its argument in the following order:

1. It explains why accelerated observers can be analyzed using special relativity.
2. It studies the simplest accelerated motion: **constant proper acceleration**, which produces a hyperbolic world line.
3. It argues that any natural coordinate system for an accelerated observer must be only **local**, because global constructions fail at distances of order $g^{-1}$.
4. It introduces the observer's carried **orthonormal tetrad**.
5. It generalizes the idea of a nonrotating tetrad to arbitrary acceleration via **Fermi-Walker transport**.
6. It constructs the observer's local coordinates and derives the line element for the uniformly accelerated case.
7. Through the exercises, it connects these ideas to radar measurements, clock-rate differences across an accelerated lattice, rotating tetrads, and Thomas precession.

---

## 1. Why accelerated observers can be treated with special relativity

### The main conceptual move
The chapter begins by considering a region of spacetime so far from gravitating matter, and so weakly disturbed, that spacetime can be treated as flat. Into that flat spacetime it inserts an observer who *feels* gravity because he is accelerating, for example in a rocket.

The central claim is that this is not a pathological situation for special relativity. On the contrary, special relativity was designed precisely to analyze accelerated particles and accelerated objects. The observer may interpret his experience as "gravity," but as long as spacetime itself is flat, the physics of his local observations can still be analyzed within special relativity.

This is already a major step toward general relativity:

- **acceleration can imitate gravity locally**;
- therefore one can learn about gravitation by studying accelerated observers in flat spacetime.

### Extremely large accelerations are still compatible with special relativity
The chapter emphasizes that huge accelerations occur routinely in microphysics. For example, the effective acceleration of a neutron bound in a nucleus can be fantastically large, yet special relativity still handles the physics correctly. The lesson is that **acceleration itself does not invalidate special relativity**. What matters is whether spacetime curvature is negligible in the region under study.

### Locality is the key restriction
The analysis only works cleanly when the observer confines attention to a sufficiently small neighborhood around his world line. This locality requirement becomes more precise later in the chapter, where the natural size limit is shown to be of order

$l \ll g^{-1},$

with $g$ the magnitude of the observer's proper acceleration.

### What makes accelerated frames different from inertial frames?
According to the chapter, local experiments performed by an accelerated observer differ from the same experiments in an inertial Lorentz frame in only three ways:

1. There are fractional corrections of order $gl$, which become negligible if the frame is kept small enough.
2. There can be **Coriolis-type effects** if the observer's carried lattice rotates.
3. There are **inertial forces** due to the acceleration itself.

Thus the theory of accelerated observers is not a replacement for special relativity; it is special relativity plus the careful bookkeeping needed for noninertial motion.

---

## 2. Hyperbolic motion: the model of uniform proper acceleration

Section 6.2 studies the simplest and most important example: an observer who always feels the same acceleration magnitude $g$.

### 4-velocity and 4-acceleration
The observer's 4-velocity $u$ is normalized by

$u^2 = -1.$

The 4-acceleration is defined by

$a = \dfrac{du}{d\tau},$

where $\tau$ is proper time. Since the norm of $u$ is fixed, differentiating $u \cdot u = -1$ gives

$a \cdot u = 0.$

So the 4-acceleration is always orthogonal to the 4-velocity in Lorentz geometry. This is one of the chapter's key geometric facts.

### Proper acceleration as an invariant
In the passenger's instantaneous rest frame, the temporal component of $a^\mu$ vanishes and the spatial components reduce to the ordinary acceleration. Therefore the magnitude of the proper acceleration can be written invariantly as

$a^2 = a^\mu a_\mu = g^2.$

That quantity is what the passenger physically *feels* and what an accelerometer would measure.

### Solving the equations of motion
For constant proper acceleration in the $x^1$ direction, the chapter obtains

$\dfrac{dt}{d\tau} = u^0, \qquad \dfrac{dx}{d\tau} = u^1,$

and

$\dfrac{du^0}{d\tau} = gu^1, \qquad \dfrac{du^1}{d\tau} = gu^0.$

These equations integrate immediately to

$t = g^{-1}\sinh(g\tau), \qquad x = g^{-1}\cosh(g\tau).$

Hence the world line satisfies

$x^2 - t^2 = g^{-2}.$

This is the standard hyperbola of constant proper acceleration.

### Why the motion is called hyperbolic
In a spacetime diagram, the uniformly accelerated observer does **not** trace a straight line, as an inertial observer would. Instead, the world line is a hyperbola asymptotic to null lines. This is why the motion is called **hyperbolic motion**.

### Physical interpretation of the scale $g^{-1}$
The chapter evaluates the scale corresponding to one earth gravity and notes that

$g \sim (1\ \text{light-year})^{-1}$

in relativistic units. That means an observer maintaining an acceleration of roughly one earth gravity for about a year of proper time can reach highly relativistic speeds. This also makes the length scale $g^{-1}$ physically intuitive: it is enormous for ordinary accelerations, which is why local accelerated coordinates are usually perfectly adequate in everyday contexts.

### Why this example matters
Hyperbolic motion becomes the chapter's prototype because:

- it is mathematically simple;
- it captures the core geometry of uniform acceleration;
- it foreshadows horizons and coordinate breakdown;
- it leads directly to the local coordinate system later derived in Section 6.6.

---

## 3. Constraints on the size of an accelerated frame

Section 6.3 makes a foundational point: the phrase **"the coordinate system of an accelerated observer"** is misleading if interpreted globally.

### Why a global accelerated coordinate system is problematic
If one takes the phrase literally, it suggests a single coordinate system naturally attached to a particular accelerated observer and valid everywhere. The chapter argues that this is not possible in any natural way.

The reason is partly **causal** and partly **geometric**.

### Causal breakdown
Using the hyperbolic world line of Figure 6.1, the chapter points out that large regions of spacetime do not maintain ordinary two-way causal contact with the observer:

- one region can neither send signals to the observer nor receive signals from him;
- another can send but not receive;
- another can receive but not send.

This already shows that a coordinate system "centered on the observer" cannot naturally extend to all of spacetime, because some remote events have no direct operational relation to the observer.

### Inconsistency after a brief acceleration
The chapter then considers a second example: an observer who is first inertial, then briefly accelerated, then inertial again at a different velocity. It is tempting to say that his natural coordinates should coincide with the first inertial frame before acceleration and with the second inertial frame after acceleration.

But this leads to a contradiction: in a region of overlap, the two coordinate prescriptions are incompatible. So even in this very simple situation, a global natural coordinate system fails.

### The characteristic breakdown scale
In both the hyperbolic-motion example and the briefly accelerated example, the serious difficulty begins at distances of order

$g^{-1}$

from the observer's world line.

This is the chapter's central limitation result:

**an accelerated observer has no natural global coordinate system, only a natural local one.**

That local solution is built from a transported tetrad.

---

## 4. The tetrad carried by a uniformly accelerated observer

Section 6.4 introduces the mathematical object that replaces the impossible global accelerated frame: an **orthonormal tetrad** carried along the observer's world line.

### What a tetrad is
A tetrad is a set of four orthonormal basis vectors

$e_0, e_1, e_2, e_3$

attached to the observer at each instant of proper time.

Its purpose is to provide an **infinitesimal reference frame**:

- the timelike vector gives the observer's local time direction;
- the three spacelike vectors give the observer's local spatial axes.

### The timelike basis vector
The chapter chooses

$e_0 = u,$

so the time axis of the tetrad is the observer's 4-velocity. This means the observer is always instantaneously at rest in his own tetrad frame.

### The spatial basis vectors for hyperbolic motion
For uniform acceleration in the $x^1$ direction, the chapter constructs the tetrad explicitly:

$(e_0)^\mu = (\cosh g\tau,\ \sinh g\tau,\ 0,\ 0),$

$(e_1)^\mu = (\sinh g\tau,\ \cosh g\tau,\ 0,\ 0),$

$(e_2)^\mu = (0,\ 0,\ 1,\ 0),$

$(e_3)^\mu = (0,\ 0,\ 0,\ 1).$

Here:

- $e_0$ is tangent to the world line;
- $e_1$ points in the direction of acceleration;
- $e_2$ and $e_3$ are the unaffected transverse axes.

### Orthonormality
The tetrad satisfies

$e_{\mu'} \cdot e_{\nu'} = \eta_{\mu'\nu'},$

so it is orthonormal in the Minkowski metric.

### Geometric meaning
The chapter emphasizes that this tetrad can be obtained by taking the original inertial frame and applying, at each instant, the Lorentz boost that makes the observer momentarily at rest. Thus the tetrad is the natural continuously updated rest frame of the accelerated observer.

This is the infinitesimal precursor to the observer's local coordinate system.

---

## 5. Arbitrary acceleration and Fermi-Walker transport

Section 6.5 generalizes the carried tetrad from uniform acceleration to **arbitrary finite acceleration varying with time**.

This section is one of the most important mathematically.

### The problem: what does "nonrotating" mean?
For an arbitrarily accelerated observer, the tetrad must satisfy three conditions:

1. it remains orthonormal;
2. it remains a rest frame for the observer, so $e_0 = u$;
3. it is "nonrotating."

The subtlety lies in the third condition. Since the 4-velocity changes direction when the observer accelerates, some Lorentz "rotation" in the timelike plane spanned by $u$ and $a$ is unavoidable. So "nonrotating" cannot mean *no change at all*.

Instead it means:

- allow the change required by the evolving 4-velocity and 4-acceleration;
- forbid any **extra spatial rotation** of the three spatial basis vectors.

### From ordinary rotation to spacetime rotation
The chapter first recalls that an ordinary spatial rotation can be represented by an antisymmetric matrix. It then generalizes this to spacetime by introducing an antisymmetric tensor $\Omega^{\mu\nu}$, the infinitesimal Lorentz generator.

A generalized infinitesimal rotation acts on a vector $v^\mu$ by

$\dfrac{dv^\mu}{d\tau} = -\Omega^\mu{}_\nu v^\nu,$

with

$\Omega^{\mu\nu} = -\Omega^{\nu\mu}.$

### The unique choice for a nonrotating accelerated frame
To generate exactly the boost in the $u \wedge a$ plane and no spatial rotation, the chapter finds the unique choice

$\Omega^{\mu\nu} = a^\mu u^\nu - a^\nu u^\mu.$

Equivalently, in wedge notation,

$\Omega = a \wedge u.$

### Fermi-Walker transport
Substituting this into the transport law yields the defining equation for **Fermi-Walker transport**:

$\dfrac{dv^\mu}{d\tau} = (u^\mu a^\nu - u^\nu a^\mu)v_\nu.$

A vector transported in this way changes only as much as the observer's acceleration forces it to change. It experiences no extraneous spatial rotation.

### Why Fermi-Walker transport is the right notion
This transport law has exactly the needed properties:

- it preserves orthonormality;
- it preserves the norm of transported vectors;
- it keeps vectors orthogonal to the observer's 4-velocity if they start that way;
- it encodes the idea of a **nonrotating carried frame**.

This is the correct relativistic generalization of "keep the gyroscope axes fixed."

### Physical interpretation
The chapter notes that in practice the spatial basis vectors of such a tetrad can be realized by **gyroscopes** carried by the observer. That gives Fermi-Walker transport a direct operational meaning.

---

## 6. Local coordinates for an accelerated observer

Section 6.6 uses the tetrad to build an actual coordinate system in a finite neighborhood of the observer.

### Constructing the local coordinates
At proper time $\tau$, the observer is at an event $P(\tau)$ on his world line. Let the displacement from the origin of the original inertial frame to $P(\tau)$ be $z(\tau)$.

At that event, the spatial tetrad vectors $e_1(\tau), e_2(\tau), e_3(\tau)$ span a spacelike hyperplane orthogonal to the world line. A typical point of that hyperplane is written as

$x = \xi^1 e_1(\tau) + \xi^2 e_2(\tau) + \xi^3 e_3(\tau) + z(\tau).$

The local coordinates assigned to the event are then

$\xi^0 = \tau, \qquad \xi^1,\xi^2,\xi^3,$

or in components,

$x^\mu = \xi^k [e_k(\tau)]^\mu + z^\mu(\tau).$

This is the general prescription for coordinates relative to the accelerated observer.

### Why the construction is only local
As proper time changes, successive simultaneity hyperplanes sweep through spacetime. But at sufficiently large distances from the world line, they begin to intersect each other. At that point, a single event would lie on more than one such hyperplane, so its "time coordinate relative to the accelerated observer" becomes ambiguous.

Thus the coordinate system fails beyond some distance from the observer. The chapter shows that the breakdown distance is again of order

$g^{-1},$

or more generally of order determined by the instantaneous proper acceleration magnitude.

### The uniformly accelerated case
Applying the general construction to hyperbolic motion yields

$x^0 = (g^{-1} + \xi^1)\sinh(g\xi^0),$

$x^1 = (g^{-1} + \xi^1)\cosh(g\xi^0),$

$x^2 = \xi^2,$

$x^3 = \xi^3.$

These are exactly the local coordinates naturally adapted to a uniformly accelerated observer.

### The induced metric
Substituting these expressions into the Minkowski line element gives

$ds^2 = -(1 + g\xi^1)^2(d\xi^0)^2 + (d\xi^1)^2 + (d\xi^2)^2 + (d\xi^3)^2.$

This is one of the chapter's most important formulas.

It shows:

- the coordinates are noninertial;
- the coefficient of $(d\xi^0)^2$ depends on spatial position;
- at the observer's own location $\xi^1 = 0$, the metric reduces locally to the standard Minkowski form.

So these coordinates reproduce exactly the local flatness principle: the observer sees ordinary Lorentz geometry in his immediate neighborhood, but not over an extended region.

### Breakdown of the coordinates
The chapter and Figure 6.4 show that these coordinates fail when

$\xi^1 < -g^{-1}.$

Geometrically, the simultaneity hyperplanes intersect there. Operationally, the observer can no longer assign coordinates uniquely. This is the clearest concrete demonstration of why accelerated coordinates are fundamentally local.

---

## 7. What the exercises add to the chapter

Although the chapter's main body already develops the theory, the exercises deepen its physical content.

### Radar measurements are distorted by acceleration
Exercises 6.4 and 6.5 show that if an accelerated observer naively uses radar formulas derived from inertial motion, the inferred speed and distance of remote objects are generally incorrect. This reinforces the chapter's central lesson that only **local** measurements resemble those of inertial frames without correction.

### Clock rates vary across the accelerated lattice
Exercise 6.6 uses the metric

$ds^2 = -(1 + g\xi^1)^2(d\xi^0)^2 + \cdots$

to show that a clock fixed at lattice point $(\xi^1,\xi^2,\xi^3)$ ticks according to

$\dfrac{d\tau}{d\xi^0} = 1 + g\xi^1.$

Thus clocks at different spatial positions in the accelerated frame do **not** remain synchronized. This is a major physical effect: the accelerated observer's notion of time varies across the frame.

### Different lattice points feel different accelerations
Exercise 6.7 asks for the acceleration measured by an accelerometer attached to a lattice point away from the world line. This quantifies the earlier statement that the accelerated frame can only be treated as rigid and natural when its size is much smaller than $g^{-1}$.

### Rotating tetrads introduce Coriolis terms
Exercise 6.8 studies what happens when the observer deliberately lets the tetrad rotate instead of Fermi-Walker transporting it. The resulting transport tensor splits into:

- a Fermi-Walker part, driven by $u$ and $a$;
- a spatial-rotation part, driven by an angular velocity vector $\omega$.

Near the observer, the coordinate acceleration of a free particle picks up:

- an inertial-acceleration term,
- a Coriolis term,
- a relativistic correction.

This exercise shows exactly where the familiar Newtonian noninertial forces come from inside the relativistic framework.

### Thomas precession
Exercise 6.9 applies Fermi-Walker transport to a spinning body and derives **Thomas precession**. The precession frequency is

$\omega_{\text{Thomas}} = (\gamma - 1)\omega \simeq \dfrac{1}{2}v^2\omega \qquad (v \ll 1).$

This is a major physical payoff of the chapter. It connects the geometry of accelerated motion and noncommuting Lorentz boosts to a real observable effect in atomic physics.

---

## 8. Key figures and what they show

## Figure 6.1: Hyperbolic motion
This figure is the chapter's first major visual anchor. It shows the world line of a uniformly accelerated observer as a hyperbola in a Minkowski diagram. The 4-velocity $u$ is tangent to the curve, and the 4-acceleration $a$ is everywhere orthogonal to $u$.

The figure visually encodes several key facts:

- constant proper acceleration does not mean a straight world line;
- the trajectory approaches null asymptotes;
- the geometry naturally introduces an observer-dependent horizon structure;
- the characteristic scale is set by $g^{-1}$.

## Figure 6.2: Brief acceleration and coordinate inconsistency
This figure shows an observer inertial before and after a short burst of acceleration. Each constant-velocity phase admits its own inertial coordinates, but in the region where the two coordinate prescriptions overlap there is no natural way to reconcile them. The figure is the geometric proof that a global accelerated coordinate system is generally impossible.

## Figure 6.3: Orthogonal hyperplanes along the world line
This figure illustrates how the observer's tetrad defines, at each instant, a spacelike hyperplane orthogonal to the world line. The important visual lesson is that these hyperplanes eventually intersect one another at a distance of order $g^{-1}(\tau)$. That intersection is exactly what makes the local coordinates break down.

## Figure 6.4: Local coordinates for uniform acceleration
This figure specializes the local-coordinate construction to hyperbolic motion. The surfaces of constant $\xi^0$ are straight spacelike lines through the origin in the $(x^0,x^1)$ plane, while the curves of constant $\xi^1$ are hyperbolas. The figure also makes the domain of validity explicit: the coordinates fail for $\xi^1 < -g^{-1}$.

---

## 9. Detailed summaries of the boxes

## Box 6.1: *General Relativity Is Built on Special Relativity*
This box states the philosophical and methodological backbone of the chapter.

A passenger in a rocket may feel "gravity," even though no genuine gravitational field is present. Einstein's local equivalence principle says that, by local experiments alone, one cannot distinguish a uniform gravitational field from uniform acceleration. Therefore a physicist who analyzes the rocket passenger's local world using special relativity is not making a mistake; he is rehearsing the exact procedure that will later be generalized into gravitation theory.

The box stresses that **general relativity does not discard special relativity**. Instead, it is built from three ingredients:

1. **special-relativistic physics**,
2. **the equivalence principle**,
3. **the local nature of physical law**.

The real challenge of general relativity is then twofold:

- dissect spacetime into small locally flat pieces where special relativity applies;
- reassemble those pieces into a global picture of curved, dynamical spacetime.

So the box presents general relativity as a theory constructed from local special-relativistic patches stitched together by geometry.

## Box 6.2: *Accelerated Observers in Brief*
This box is a condensed summary of the whole chapter.

It says that an accelerated observer can carry:

- **clocks**, which measure proper time along his world line,
- **rods**, which define spatial distances in his neighborhood.

The proper time measured by the observer's clock over a displacement $\xi$ along the world line is

$\Delta\tau = [-g(\xi,\xi)]^{1/2}.$

The box emphasizes that if the clocks are chosen so that acceleration negligibly affects their internal structure, they tick at the same rate as momentarily comoving inertial clocks. Similarly, sufficiently rigid rods measure the same lengths as momentarily comoving inertial rods.

However, the observer's lattice of rods and clocks must be kept **small**:

$l \ll g^{-1}.$

If this condition is violated, different parts of the lattice develop significant discrepancies:

- accelerometers at different locations measure slightly different accelerations;
- clocks initially synchronized drift out of step;
- the whole frame ceases to behave as a single natural system.

The box then summarizes the three differences between local physics in an accelerated frame and local physics in an inertial Lorentz frame:

1. corrections of fractional size $gl$;
2. Coriolis-type effects if the frame rotates;
3. inertial forces caused by acceleration.

To eliminate the Coriolis-type effects, the spatial axes should be carried without extra rotation. The box identifies this nonrotating transport law as **Fermi-Walker transport**, summarized by the transport equation for the basis vectors.

In short, Box 6.2 packages the chapter's complete message into a practical rule:

**an accelerated observer is well described by clocks, rods, and a nonrotating tetrad, but only locally.**

---

## 10. Main equations to remember

### Proper acceleration and orthogonality
$u^2 = -1,$

$a = \dfrac{du}{d\tau},$

$a \cdot u = 0.$

### Constant proper acceleration
$\dfrac{du^0}{d\tau} = gu^1, \qquad \dfrac{du^1}{d\tau} = gu^0.$

### Hyperbolic world line
$t = g^{-1}\sinh(g\tau), \qquad x = g^{-1}\cosh(g\tau),$

$x^2 - t^2 = g^{-2}.$

### Uniformly accelerated tetrad
$(e_0)^\mu = (\cosh g\tau,\ \sinh g\tau,\ 0,\ 0),$

$(e_1)^\mu = (\sinh g\tau,\ \cosh g\tau,\ 0,\ 0),$

$(e_2)^\mu = (0,\ 0,\ 1,\ 0),$

$(e_3)^\mu = (0,\ 0,\ 0,\ 1).$

### Orthonormality
$e_{\mu'} \cdot e_{\nu'} = \eta_{\mu'\nu'}.$

### Fermi-Walker generator
$\Omega^{\mu\nu} = a^\mu u^\nu - a^\nu u^\mu.$

### Fermi-Walker transport law
$\dfrac{dv^\mu}{d\tau} = (u^\mu a^\nu - u^\nu a^\mu)v_\nu.$

### General local-coordinate prescription
$x^\mu = \xi^k [e_k(\tau)]^\mu + z^\mu(\tau).$

### Uniform-acceleration local coordinates
$x^0 = (g^{-1} + \xi^1)\sinh(g\xi^0),$

$x^1 = (g^{-1} + \xi^1)\cosh(g\xi^0),$

$x^2 = \xi^2, \qquad x^3 = \xi^3.$

### Local line element
$ds^2 = -(1 + g\xi^1)^2(d\xi^0)^2 + (d\xi^1)^2 + (d\xi^2)^2 + (d\xi^3)^2.$

### Clock-rate variation across the accelerated lattice
$\dfrac{d\tau}{d\xi^0} = 1 + g\xi^1.$

### Thomas precession
$\omega_{\text{Thomas}} = (\gamma - 1)\omega \simeq \dfrac{1}{2}v^2\omega \qquad (v \ll 1).$

---

## 11. Final takeaway
Chapter 6 establishes the local kinematics of accelerated observers in flat spacetime.

Its deepest lesson is that acceleration does **not** destroy the framework of special relativity. Instead, it forces one to use that framework with greater geometric care:

- replace a global inertial frame by a local tetrad;
- replace naive rigid coordinates by a local coordinate patch;
- replace "fixed axes" by **Fermi-Walker transport**;
- accept that beyond distances of order $g^{-1}$, the observer's natural coordinates become ambiguous.

This is precisely the conceptual template needed for general relativity. In curved spacetime, one cannot have a global Lorentz frame, but one can always have a **local** one. Thus Chapter 6 is more than a study of rockets in flat spacetime: it is a training ground for the geometric logic of gravitation.

## 12. Short conceptual checklist
By the end of the chapter, the reader should understand:

- why accelerated observers can be analyzed locally using special relativity;
- why constant proper acceleration leads to hyperbolic motion;
- why a global accelerated coordinate system generally fails;
- how a tetrad supplies the observer's infinitesimal rest frame;
- why Fermi-Walker transport is the correct relativistic notion of a nonrotating frame;
- how local coordinates are built from the world line and tetrad;
- why the uniformly accelerated metric has the form
  $ds^2 = -(1 + g\xi^1)^2(d\xi^0)^2 + d\vec{\xi}^{\,2}$;
- how Thomas precession arises from accelerated motion without torque.