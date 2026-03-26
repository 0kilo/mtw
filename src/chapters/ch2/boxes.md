# Chapter 2 Boxes: Detailed Summaries

## Box 2.1 - Farewell to "ict"

This box argues strongly against the notation $x^4 = ict$.

### Main Message

The imaginary time coordinate was historically introduced to make Lorentz transformations resemble Euclidean rotations and to make spacetime geometry look superficially like Euclidean geometry. The box argues that this convenience is misleading.

### Reasons the Chapter Rejects $x^4 = ict$

1. **Hides the vector/1-form distinction**: It obscures the distinction between quantities with upper indices (such as the components $p^\mu$ of the energy-momentum vector) and quantities with lower indices (such as the components $p_\mu$ of the energy-momentum 1-form). Without it, one cannot know whether a vector (§2.3) is meant or the very different geometric object that is a 1-form (§2.5).

2. **Blurs Euclidean and Minkowski geometry**: Moreover, there is a significant difference between an angle on which everything depends periodically (a rotation) and a parameter the increase of which gives rise to ever-growing momentum differences (the "velocity parameter" of a Lorentz transformation; Box 2.4).

3. **Hides causal structure**: If the imaginary time-coordinate hides from view the character of the geometric object being dealt with and the nature of the parameter in a transformation, it also does something even more serious: it hides the completely different metric structure (§2.4) of $+++$ geometry and $-+++$ geometry.

4. **Suggests false periodicity**: In Euclidean geometry, when the distance between two points is zero, the two points must be the same point. In Lorentz-Minkowski geometry, when the interval between two events is zero, one event may be on Earth and the other on a supernova in the galaxy M31, but their separation must be a null ray (piece of a light cone).

5. **Does not generalize to curved spacetime**: The backward-pointing light cone at a given event contains all the events by which that event can be influenced. The forward-pointing light cone contains all events that it can influence. The multitude of double light cones taking off from all the events of spacetime forms an interlocking causal structure. This structure makes the machinery of the physical world function as it does. If in a region where spacetime is flat, one can hide this structure from view by writing:

$$(\Delta s)^2 = (\Delta x^1)^2 + (\Delta x^2)^2 + (\Delta x^3)^2 + (\Delta x^4)^2,$$

with $x^4 = ict$, no one has discovered a way to make the imaginary coordinate work in the general curved spacetime manifold. If "$x^4 = ict$" cannot be used there, it will not be used here.

### Practical Conclusion

In this chapter and hereafter, as throughout the literature of general relativity, a **real time coordinate** is used:

$$x^0 = t = ct_{\text{conv}}$$

(superscript 0 rather than 4 to avoid any possibility of confusion with the imaginary time coordinate).

### Why It Matters

The box establishes the notational convention for the entire book and prevents conceptual confusion between Euclidean and Lorentzian geometry. The causal structure of spacetime—with its light cones and null rays—is fundamental to relativity and should not be hidden by misleading notation.

---

## Box 2.2 - Worked Exercises Using the Metric

This box illustrates how the metric is used in concrete calculations.

### Exercise 1: 4-Velocity Has Squared Length $-1$

**Exercise:** Show that the squared length of a test particle's 4-velocity $\mathbf{u}$ is $-1$.

**Solution:** In any Lorentz frame, using the components (2.2), one calculates as follows:

$$\mathbf{u}^2 = \mathbf{g}(\mathbf{u}, \mathbf{u}) = u^\alpha u^\beta \eta_{\alpha\beta} = -(u^0)^2 + (u^1)^2 + (u^2)^2 + (u^3)^2$$

$$= -\frac{1}{1 - v^2} + \frac{v^2}{1 - v^2} = -1.$$

This establishes that the 4-velocity of a massive particle is a unit timelike vector in the chosen signature.

### Exercise 2: Energy-Momentum Relation

**Exercise:** Show that the rest mass of a particle is related to its energy and momentum by the famous equation:

$$(mc^2)^2 = E^2 - (pc)^2$$

or, equivalently (geometrized units!),

$$m^2 = E^2 - p^2.$$

#### First Solution

The 4-momentum is defined by $\mathbf{p} = m\mathbf{u}$, where $\mathbf{u}$ is the 4-velocity and $m$ is the rest mass. Consequently, its squared length is:

$$\mathbf{p}^2 = m^2 \mathbf{u}^2 = -m^2$$

$$= -(mu^0)^2 + m^2\mathbf{u}^2 = -\frac{m^2}{1 - v^2} + \frac{m^2v^2}{1 - v^2}.$$

$$\uparrow \qquad \qquad \qquad \uparrow$$

$$E^2 \qquad \qquad \qquad p^2$$

#### Second Solution

In the frame of the observer, where $E$ and $\mathbf{p}$ are measured, the 4-momentum splits into time and space parts as:

$$p^0 = E, \qquad p^1\mathbf{e}_1 + p^2\mathbf{e}_2 + p^3\mathbf{e}_3 = \mathbf{p}.$$

Hence, its squared length is:

$$\mathbf{p}^2 = -E^2 + p^2.$$

But in the particle's rest frame, $\mathbf{p}$ splits as:

$$p^0 = m, \qquad p^1 = p^2 = p^3 = 0.$$

Hence, its squared length is $\mathbf{p}^2 = -m^2$. But the squared length is a geometric object defined independently of any coordinate system; so it must be the same by whatever means one calculates it:

$$-\mathbf{p}^2 = m^2 = E^2 - p^2.$$

### Why It Matters

The box demonstrates that $\mathbf{p}^2$ is a geometric invariant, so the energy-momentum relation must hold in every Lorentz frame. It shows the power of the geometric approach: the same result can be derived in any frame, and the answer must agree because it represents a frame-independent geometric quantity.

---

## Box 2.3 - Differentials

This box reinterprets the differential $df$ from elementary calculus.

### Main Message

The ordinary classroom phrase "the differential of $f$" is incomplete unless one specifies a direction. The box says that $df$ is not itself a number; it is a **1-form**.

### Explanation

The "exterior derivative" or "gradient" $df$ of a function $f$ is a more rigorous version of the elementary concept of "differential."

In elementary textbooks, one is presented with the differential $df$ as representing "an infinitesimal change in the function $f(\mathcal{P})$" associated with some infinitesimal displacement of the point $\mathcal{P}$; but one will recall that the displacement of $\mathcal{P}$ is left arbitrary, albeit infinitesimal. Thus $df$ represents a change in $f$ in some unspecified direction.

But this is precisely what the exterior derivative $df$ represents. Choose a particular, infinitesimally long displacement $\mathbf{v}$ of the point $\mathcal{P}$. Let the displacement vector $\mathbf{v}$ pierce $df$ to give the number:

$$\langle df, \mathbf{v} \rangle = \partial_{\mathbf{v}}f.$$

That number is the change of $f$ in going from the tail of $\mathbf{v}$ to its tip. Thus $df$, before it has been pierced to give a number, represents the change of $f$ in an unspecified direction.

### The Act of Piercing

The act of piercing $df$ with $\mathbf{v}$ is the act of making explicit the direction in which the change is to be measured. The only failing of the textbook presentation, then, was its suggestion that $df$ was a scalar or a number; the explicit recognition of the need for specifying a direction $\mathbf{v}$ to reduce $df$ to a number $\langle df, \mathbf{v} \rangle$ shows that in fact $df$ is a **1-form**, the gradient of $f$.

### Why It Matters

This box connects modern differential geometry with elementary calculus by clarifying that the differential is fundamentally a covector, or 1-form. It bridges the gap between the informal "infinitesimal change" language of introductory calculus and the rigorous geometric formulation needed for general relativity.

---

## Box 2.4 - Lorentz Transformations

This box is a compact reference sheet for the most important Lorentz transformation formulas.

### Part 1: Spatial Rotations in the $x$-$y$ Plane

**Rotation of Frame of Reference by Angle $\theta$ in $x$-$y$ Plane**

Slope $s = \tan\theta$;

$$\sin\theta = \frac{s}{(1 + s^2)^{1/2}}; \qquad \cos\theta = \frac{1}{(1 + s^2)^{1/2}}$$

**Coordinate transformation:**

$$\bar{t} = t$$

$$\bar{x} = x\cos\theta + y\sin\theta$$

$$\bar{y} = -x\sin\theta + y\cos\theta$$

$$\bar{z} = z$$

$$t = \bar{t}$$

$$x = \bar{x}\cos\theta - \bar{y}\sin\theta$$

$$y = \bar{x}\sin\theta + \bar{y}\cos\theta$$

$$z = \bar{z}$$

All signs follow from sign of this term. Positive by inspection of point $\mathcal{P}$.

### Combination of Two Such Rotations

$$s = \frac{s_1 + s_2}{1 - s_1s_2} \qquad \text{or} \qquad \theta = \theta_1 + \theta_2$$

### Part 2: Boosts in the $z$-$t$ Plane

**Boost of Frame of Reference by Velocity Parameter $\alpha$ in $z$-$t$ Plane**

Velocity $\beta = \tanh\alpha$;

$$\sinh\alpha = \frac{\beta}{(1 - \beta^2)^{1/2}}; \qquad \cosh\alpha = \frac{1}{(1 - \beta^2)^{1/2}} = \text{"}\gamma\text{"}$$

$$\tan\theta = \text{velocity } \beta = \tanh\alpha$$

**Coordinate transformation:**

$$\bar{t} = t\cosh\alpha + z\sinh\alpha$$

$$\bar{x} = x$$

$$\bar{y} = y$$

$$\bar{z} = -t\sinh\alpha + z\cosh\alpha$$

$$t = \bar{t}\cosh\alpha - \bar{z}\sinh\alpha$$

$$\bar{x} = x$$

$$\bar{y} = y$$

$$\bar{z} = t\sinh\alpha + \bar{z}\cosh\alpha$$

All signs follow from sign of this term. Positive because object at rest at $\bar{z} = 0$ in rocket frame moves in direction of increasing $z$ in lab frame.

### Matrix Notation

$$x^\mu = \Lambda^\mu{}_{\bar{\nu}}x^{\bar{\nu}}, \qquad x^{\bar{\nu}} = \Lambda^{\bar{\nu}}{}_\mu x^\mu$$

$$\|\Lambda^\mu{}_{\bar{\nu}}\| = \begin{vmatrix} \cosh\alpha & 0 & 0 & \sinh\alpha \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \sinh\alpha & 0 & 0 & \cosh\alpha \end{vmatrix}, \quad \|\Lambda^{\bar{\nu}}{}_\mu\| = \begin{vmatrix} \cosh\alpha & 0 & 0 & -\sinh\alpha \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ -\sinh\alpha & 0 & 0 & \cosh\alpha \end{vmatrix}$$

### Part 3: Transformation of Physical Quantities

**Energy-momentum 4-vector:**

$$E = \bar{E}\cosh\alpha + p^{\bar{z}}\sinh\alpha$$

$$p^x = p^{\bar{x}}$$

$$p^y = p^{\bar{y}}$$

$$p^z = \bar{E}\sinh\alpha + p^{\bar{z}}\cosh\alpha$$

**Charge density-current 4-vector:**

$$\rho = \bar{\rho}\cosh\alpha + j^{\bar{z}}\sinh\alpha$$

$$j^x = j^{\bar{x}}$$

$$j^y = j^{\bar{y}}$$

$$j^z = \bar{\rho}\sinh\alpha + j^{\bar{z}}\cosh\alpha$$

### Aberration, Incoming Photon

$$\sin\theta = \frac{-p_\perp}{E} = \frac{(1 - \beta^2)^{1/2}\sin\bar{\theta}}{1 - \beta\cos\bar{\theta}}$$

$$\cos\theta = \frac{-p^z}{E} = \frac{\cos\bar{\theta} - \beta}{1 - \beta\cos\bar{\theta}}$$

$$\tan(\theta/2) = e^\alpha\tan(\bar{\theta}/2)$$

$$\sin\bar{\theta} = \frac{-\bar{p}_\perp}{\bar{E}} = \frac{(1 - \beta^2)^{1/2}\sin\theta}{1 + \beta\cos\theta}$$

$$\cos\bar{\theta} = \frac{-\bar{p}^z}{\bar{E}} = \frac{\cos\theta + \beta}{1 + \beta\cos\theta}$$

$$\tan(\bar{\theta}/2) = e^{-\alpha}\tan(\theta/2)$$

### Combination of Two Boosts in Same Direction

$$\beta = \frac{\beta_1 + \beta_2}{1 + \beta_1\beta_2} \qquad \text{or} \qquad \alpha = \alpha_1 + \alpha_2$$

### General Combinations of Boosts and Rotations

Spinor formalism of Chapter 41.

### Poincaré Transformation

$$x^\mu = \Lambda^\mu{}_{\alpha'}x^{\alpha'} + a^\mu.$$

**Condition on the Lorentz part of this transformation:**

$$ds'^2 = \eta_{\alpha'\beta'}\,dx^{\alpha'}\,dx^{\beta'} = ds^2 = \eta_{\mu\nu}\Lambda^\mu{}_{\alpha'}\Lambda^\nu{}_{\beta'}\,dx^{\alpha'}\,dx^{\beta'}$$

or $\Lambda^T\eta\Lambda = \eta$ (matrix equation, with $T$ indicating "transposed," or rows and columns interchanged).

### Effect of Transformation on Other Quantities

| Quantity | Transformation |
|----------|---------------|
| $u^\mu = \Lambda^\mu{}_{\alpha'}u^{\alpha'}$ | (4-velocity) |
| $p^\mu = \Lambda^\mu{}_{\alpha'}p^{\alpha'}$ | (4-momentum) |
| $F^{\mu\nu} = \Lambda^\mu{}_{\alpha'}\Lambda^\nu{}_{\beta'}F^{\alpha'\beta'}$ | (electromagnetic field) |
| $\mathbf{e}_{\alpha'} = \mathbf{e}_\mu\Lambda^\mu{}_{\alpha'}$ | (basis vectors) |
| $\mathbf{w}^{\alpha'} = \Lambda^{\alpha'}{}_\mu\mathbf{w}^\mu$ | (basis 1-forms) |
| $\mathbf{u} = \mathbf{e}_{\alpha'}u^{\alpha'} = \mathbf{e}_\mu u^\mu = \mathbf{u}$ | (the 4-velocity vector) |

| Quantity | Transformation |
|----------|---------------|
| $u_{\alpha'} = u_\mu\Lambda^\mu{}_{\alpha'}$ |
| $p_{\alpha'} = p_\mu\Lambda^\mu{}_{\alpha'}$ |
| $F_{\alpha'\beta'} = F_{\mu\nu}\Lambda^\mu{}_{\alpha'}\Lambda^\nu{}_{\beta'}$ |

### Why It Matters

This box provides the essential computational toolkit for working with Lorentz transformations. It shows how all physical quantities transform under changes of reference frame, from simple coordinate transformations to the transformation of tensors and basis objects. The matrix condition $\Lambda^T\eta\Lambda = \eta$ is the fundamental statement that Lorentz transformations preserve the Minkowski metric.
