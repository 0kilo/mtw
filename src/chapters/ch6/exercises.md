# Chapter 6 Exercises: Accelerated Observers

## Exercise 6.1: A Trip to the Galactic Nucleus

For constant proper acceleration, the half-trip distance is

$$L = g^{-1}(\cosh(g\tau_{1/2}) - 1).$$

So for a one-way distance of $15{,}000$ ly and $g \simeq 1\ \text{ly/yr}^2$,

$$\tau_{1/2} = g^{-1}\operatorname{arcosh}(1 + gL) = \operatorname{arcosh}(15001) \approx 10.31\ \text{yr}.$$

The total proper time is therefore

$$\Delta \tau \approx 20.6\ \text{yr}.$$

## Exercise 6.2: Rocket Payload

For an ideal photon rocket, each maximum-acceleration leg changes the mass by a factor $e^{-\eta}$, where

$$\eta = \operatorname{arcosh}(1 + gL).$$

The full trip has two such legs, so the payload fraction is

$$\frac{m_{\text{payload}}}{m_0} = e^{-2\eta}.$$

For the galactic-nucleus trip, this is

$$e^{-2\,\operatorname{arcosh}(15001)} \approx 1.1 \times 10^{-9}.$$

## Exercise 6.3: Twin Paradox

### (a)
In the inertial frame of the unaccelerated twin,

$$d\tau = \sqrt{1-v^2}\,dt \le dt.$$

Integrating gives $\Delta\tau \le \Delta t$, with equality only for $v=0$ everywhere. So the unaccelerated world line has the longest proper time.

### (b)
Take a path with two long segments at speed arbitrarily close to $c$, joined by a very short turnaround. Then the accumulated proper time can be made arbitrarily small.

### (c)
The minimizing path is two equal segments of constant proper acceleration $g$. If the inertial twin ages by $\Delta T$, then

$$\Delta T = \frac{2}{g}\sinh\!\left(\frac{g\Delta\tau_{\min}}{2}\right),$$

so

$$\Delta\tau_{\min} = \frac{2}{g}\operatorname{arsinh}\!\left(\frac{g\Delta T}{2}\right).$$

### (d)
Use the formula above for any chosen trip. For large $\Delta T$, the accelerated twin's proper time grows only logarithmically:

$$\Delta\tau_{\min} \sim \frac{2}{g}\ln(g\Delta T).$$

## Exercise 6.4: Radar Speed Indicator

At the reflection event, use the momentary inertial frame of the observer. By symmetry, the acceleration contributes equally to the outbound and inbound legs of the pulse, so it cancels in the round trip.

### (a)
If the object and radar are at rest with respect to each other at the reflection event, the returned signal has the same frequency as the emitted signal:

$$1+z = \frac{\omega_e}{\omega_o} = 1.$$

So the radar infers zero velocity.

### (b)
For a nonzero instantaneous relative velocity at reflection, the radar still reads the special-relativistic value associated with that momentary inertial frame. In other words, with the symmetry assumed in the exercise,

$$v_{\text{read}} = v_{\text{actual}},$$

so the ratio is $1$.

## Exercise 6.5: Radar Distance Indicator

Let the object be at rest in the momentary inertial frame at the reflection event, and let $L$ be the proper distance measured there, opposite the direction of acceleration. If the total round-trip proper time is $\Delta\tau$, so that the emission and reception occur at $\pm \Delta\tau/2$, then

$$L = g^{-1}\left(1 - e^{-gL_0}\right), \qquad L_0 = \frac{\Delta\tau}{2}.$$

Equivalently,

$$L_0 = -\frac{1}{g}\ln(1-gL).$$

Hence $L_0 \to \infty$ as $L \to g^{-1}$.

## Exercise 6.6: Clock Rates Versus Coordinate Time

For a clock held at fixed $(\xi^1,\xi^2,\xi^3)$, the metric gives

$$d\tau^2 = -(ds^2) = (1+g\xi^1)^2(d\xi^0)^2.$$

Therefore

$$\frac{d\tau}{d\xi^0} = 1 + g\xi^1.$$

## Exercise 6.7: Acceleration of Lattice Points

A grid point at fixed $\xi^i$ follows a hyperbola with radius $g^{-1}+\xi^1$. Its proper acceleration is the inverse radius:

$$a(\xi^1) = \frac{g}{1+g\xi^1}.$$

This reduces to $g$ on the observer's world line at $\xi^1=0$ and diverges at the horizon $\xi^1=-g^{-1}$.

## Exercise 6.8: Observer With Rotating Tetrad

Write the transport tensor as

$$\Omega^{\mu\nu} = \left(a^\mu u^\nu - a^\nu u^\mu\right) + \epsilon^{\mu\nu}{}_{\rho\sigma}u^\rho\omega^\sigma.$$

### (a)
Since $e_0=u$ and the rotation term is orthogonal to $u$, the choice $e_0=u$ is preserved by the transport law.

### (b)
The spatial-rotation term vanishes when contracted with $u$ or $\omega$, so it acts only in the 2-plane orthogonal to both. In the observer's rest frame it is just the usual 3D rotation with angular velocity $\boldsymbol{\omega}$.

### (c)
Subtracting the Fermi-Walker transport law from the rotating one gives

$$\frac{d\mathbf e_j}{d\tau} - \frac{d\mathbf e'_j}{d\tau} = \boldsymbol{\omega}\times \mathbf e_j,$$

so the first tetrad rotates relative to the second with angular velocity $\boldsymbol{\omega}$. 

### (d)
At the chosen event $Q$, set $\tau=0$ and align the inertial frame with the rotating tetrad. Then

$$z^\mu(Q)=0, \qquad e^\mu_{\alpha'}(0)=e^\mu_\alpha.$$

### (e)
Near $Q$, the coordinate map becomes

$$x^0 = \xi^{0'} + a_k \xi^{k'}\xi^{0'} + O((\xi^{\alpha'})^3),$$

$$x^j = \xi^{j'} + \frac{1}{2}a^j(\xi^{0'})^2 + \epsilon^{jkl}\omega_k\xi^{l'}\xi^{0'} + O((\xi^{\alpha'})^3).$$

### (f)
For a free particle, the coordinate motion near $Q$ has the standard inertial, Coriolis, and relativistic-correction terms:

$$\frac{d^2\boldsymbol{\xi}}{d(\xi^{0'})^2} = -\mathbf a - 2\,\boldsymbol{\omega}\times \mathbf v + 2(\mathbf a\cdot \mathbf v)\mathbf v.$$

## Exercise 6.9: Thomas Precession

For circular motion, Fermi-Walker transport keeps the spin orthogonal to the 4-velocity and produces the secular precession

$$\boldsymbol{\omega}_{\text{Thomas}} = (\gamma - 1)\boldsymbol{\omega} \simeq \frac{1}{2}v^2\boldsymbol{\omega} \qquad (v \ll 1).$$

Equivalently, the spin has the time dependence quoted in the text: a steady retrograde Thomas precession plus a small oscillatory term needed to preserve $S\cdot u=0$.
