# Chapter 13 Exercises: Riemannian Geometry

## Exercise 13.1: Test Whether Spacetime Is Local Lorentz

The test is exactly the existence of an orthonormal basis at the event. If the procedure succeeds, then one has a basis $\{e_{\hat\alpha}\}$ with

$$
g(e_{\hat\alpha},e_{\hat\beta})=\eta_{\hat\alpha\hat\beta},
$$

so spacetime is locally Lorentz there. If the procedure fails, then no such basis exists, so the metric is not locally Lorentz at that event.

## Exercise 13.2: Practice with Metric

For

$$
ds^2=-(1-2M/r)\,dv^2+2\,dv\,dr+r^2(d\theta^2+\sin^2\theta\,d\phi^2),
$$

the covariant and contravariant components are

$$
g_{vv}=-(1-2M/r),\quad g_{vr}=g_{rv}=1,\quad g_{\theta\theta}=r^2,\quad g_{\phi\phi}=r^2\sin^2\theta,
$$

with

$$
g^{vr}=g^{rv}=1,\quad g^{rr}=1-2M/r,\quad g^{\theta\theta}=r^{-2},\quad g^{\phi\phi}=r^{-2}\sin^{-2}\theta.
$$

For

$$
t=v-r-2M\ln(r/2M-1),
$$

one has

$$
u_\alpha=\partial_\alpha t=\left(1,-\frac{1}{1-2M/r},0,0\right),
$$

and therefore

$$
u^\alpha=\left(-\frac{1}{1-2M/r},0,0,0\right),\qquad
u^2=g_{\alpha\beta}u^\alpha u^\beta=-\frac{1}{1-2M/r}.
$$

Any vector orthogonal to $u$ satisfies

$$
w^v=\frac{w^r}{1-2M/r},
$$

and then

$$
w^2=\frac{(w^r)^2}{1-2M/r}+r^2\bigl((w^\theta)^2+\sin^2\theta\,(w^\phi)^2\bigr)>0
$$

for $r>2M$. So the orthogonal complement is spacelike and the geometry is locally Lorentz outside the horizon.

In $(t,r,\theta,\phi)$ coordinates the line element becomes

$$
ds^2=-(1-2M/r)\,dt^2+\frac{dr^2}{1-2M/r}+r^2d\theta^2+r^2\sin^2\theta\,d\phi^2.
$$

A corresponding orthonormal basis is

$$
e_0=(1-2M/r)^{-1/2}\partial_t,\quad
e_r=(1-2M/r)^{1/2}\partial_r,\quad
e_\theta=r^{-1}\partial_\theta,\quad
e_\phi=(r\sin\theta)^{-1}\partial_\phi.
$$

## Exercise 13.3: Mathematical Representation of Local Lorentz Frame

Write the transformation as

$$
x^{\alpha'}=M^\alpha{}_\mu x^\mu+\frac12 N^\alpha{}_{\mu\nu}x^\mu x^\nu+\frac16 P^\alpha{}_{\mu\nu\rho}x^\mu x^\nu x^\rho+\cdots.
$$

At the origin,

$$
g_{\mu\nu}(\mathcal P_0)=g_{\alpha'\beta'}(\mathcal P_0)M^{\alpha'}{}_\mu M^{\beta'}{}_\nu.
$$

Because $g_{\alpha'\beta'}$ is nonsingular, choose the 16 constants $M^\alpha{}_\mu$ to make this equal to $\eta_{\mu\nu}$, i.e. to orthonormalize the basis.

Differentiating once shows that $g_{\mu\nu,\rho}(\mathcal P_0)$ depends linearly on the 40 constants $N^\alpha{}_{\mu\nu}$. Since there are exactly 40 first-derivative components to kill, one can choose $N$ so that

$$
g_{\mu\nu,\rho}(\mathcal P_0)=0.
$$

But second derivatives contain 100 independent conditions, while $P^\alpha{}_{\mu\nu\rho}$ supplies only $4\times 20=80$ constants. So one cannot in general also force all $g_{\mu\nu,\rho\sigma}(\mathcal P_0)$ to vanish.

This is the local-Lorentz/local-inertial statement: metric and first derivatives can always be normalized away at one event, but curvature survives in second derivatives.

## Exercise 13.4: Consequences of Compatibility Between $g$ and $\nabla$

### (a) Chain rule

Metric compatibility means

$$
(\nabla_A g)(B,C)=0.
$$

Therefore

$$
A[g(B,C)]=g(\nabla_A B,C)+g(B,\nabla_A C),
$$

which is the chain rule (13.20).

### (b) Connection coefficients

Lower the first index with the metric:

$$
\Gamma_{\mu\beta\gamma}=g_{\mu\alpha}\Gamma^\alpha{}_{\beta\gamma}.
$$

Metric compatibility gives three equations obtained by cyclic permutation of $(\mu,\beta,\gamma)$; combining them with torsion-freeness

$$
\Gamma^\alpha{}_{\beta\gamma}-\Gamma^\alpha{}_{\gamma\beta}=c^\alpha{}_{\beta\gamma}
$$

and solving yields

$$
\Gamma_{\mu\beta\gamma}
=\frac12\left(
g_{\mu\beta,\gamma}
+g_{\mu\gamma,\beta}
-g_{\beta\gamma,\mu}
+c_{\mu\beta\gamma}
+c_{\mu\gamma\beta}
-c_{\beta\gamma\mu}
\right),
$$

which is equation (13.23).

## Exercise 13.5: Once Timelike, Always Timelike

Along a geodesic with tangent $u$,

$$
\frac{d}{d\lambda}\bigl(g(u,u)\bigr)=2\,g(\nabla_u u,u)=0,
$$

because $\nabla_u u=0$. So $g(u,u)$ is constant along the geodesic. If it is negative at one event, it is negative everywhere: timelike stays timelike. The same argument shows spacelike and null geodesics keep their type.

## Exercise 13.6: Spacelike Geodesics Have Extremal Length

For a spacelike curve the proper length is

$$
s=\int \bigl(g_{\mu\nu}dx^\mu dx^\nu\bigr)^{1/2}.
$$

The Euler-Lagrange variation is the same as for proper time, up to the sign convention inside the square root, so the extremal curves are exactly the spacelike geodesics. Thus a spacelike curve linking two events is a geodesic if and only if it extremizes proper length.

## Exercise 13.7: Metric Tensor Measured by Light Signals and Free Particles

### (a)

If $\tau=F(\mu)$, then

$$
\frac{d^2 x^\alpha}{d\mu^2}
\Gamma^\alpha{}_{\mu\nu}\frac{dx^\mu}{d\mu}\frac{dx^\nu}{d\mu}
=f(\mu)\frac{dx^\alpha}{d\mu},
$$

where

$$
f(\mu)=\frac{d^2\tau/d\mu^2}{d\tau/d\mu}.
$$

### (b)

Using coordinate time $t$ as the parameter, the observed coordinate acceleration at an event is

$$
a^i
=-\Gamma^i{}_{00}
-2\Gamma^i{}_{0k}v^k
-\Gamma^i{}_{kl}v^kv^l
+\bigl(\Gamma^0{}_{00}+2\Gamma^0{}_{0k}v^k+\Gamma^0{}_{kl}v^kv^l\bigr)v^i.
$$

So free-fall data with different initial velocities measure the combinations of connection coefficients appearing in this polynomial in $v^k$.

### (c)

Null geodesics satisfy

$$
g_{\mu\nu}dx^\mu dx^\nu=0.
$$

Therefore light only determines the conformal class of the metric, not its overall scale. One can reconstruct $\bar g_{\mu\nu}=\Lambda g_{\mu\nu}$, with $\Lambda=(-g_{00})^{-1}$, from the null-cone structure.

### (d)

Combining free-fall accelerations with null-cone data determines the full metric up to a single scale choice. Prescribing $\Lambda$ at one event fixes the unit of time, and then the conformal metric plus the connection reconstruct $g_{\mu\nu}$ everywhere.

## Exercise 13.8: Riemann Antisymmetric in First Two Indices

Metric compatibility implies

$$
0=\mathcal R(u,v)\bigl(s\cdot w\bigr)
=g(\mathcal R(u,v)s,w)+g(s,\mathcal R(u,v)w).
$$

Lowering the first index therefore gives

$$
R_{\alpha\beta\gamma\delta}=-R_{\beta\alpha\gamma\delta}.
$$

Geometrically, curvature acts as a skew-adjoint operator with respect to the metric.

## Exercise 13.9: Number of Independent Components of Riemann

### (a)

Without metric, $R^\alpha{}_{\beta\gamma\delta}$ is antisymmetric in $\gamma,\delta$, so there are

$$
n^2\binom{n}{2}=\frac{n^3(n-1)}{2}
$$

components before the cyclic identity. The cyclic identity removes $n\binom{n}{3}$ components, leaving

$$
\frac{n^3(n-1)}{2}-\frac{n^2(n-1)(n-2)}{6}
=\frac{n^2(n^2-1)}{3}.
$$

In four dimensions this is $80$.

### (b)

That same counting gives the general formula

$$
\frac{n^2(n^2-1)}{3}.
$$

### (c)

With metric, the pair-exchange symmetry means Riemann is a symmetric bilinear form on the space of bivectors of dimension

$$
m=\frac{n(n-1)}{2}.
$$

So the pair-symmetric count is $m(m+1)/2$, and the Bianchi identity removes $\binom{n}{4}$ components. In four dimensions this gives

$$
6\cdot 7/2-1=20.
$$

### (d)

In $n$ dimensions with metric, the number of independent components is

$$
\frac{n^2(n^2-1)}{12}.
$$

## Exercise 13.10: Riemann Symmetric in Exchange of Pairs; Completely Antisymmetric Part Vanishes

With a metric, Riemann is a symmetric bilinear form on bivectors, so exchanging the pairs $(\alpha\beta)$ and $(\gamma\delta)$ leaves it unchanged:

$$
R_{\alpha\beta\gamma\delta}=R_{\gamma\delta\alpha\beta}.
$$

The first Bianchi identity gives the vanishing of the completely antisymmetric part:

$$
R_{[\alpha\beta\gamma]\delta}=0.
$$

Thus the complete metric symmetries are

$$
R_{\alpha\beta\gamma\delta}=R_{[\alpha\beta][\gamma\delta]}=R_{\gamma\delta\alpha\beta},
\qquad
R_{[\alpha\beta\gamma]\delta}=0.
$$

## Exercise 13.11: Double Dual of Riemann; Einstein

The double dual $\mathcal G=*\,\mathrm{Riemann}\,* $ has the same symmetry content as Riemann and therefore the same information. Because it inherits the pair-exchange symmetry, the contracted tensor

$$
G_{\alpha\beta}
$$

is symmetric. The Bianchi identity becomes the vanishing-divergence relation

$$
G^\alpha{}_{\beta;\alpha}=0.
$$

So the double-dual picture packages the same curvature data in a form that makes the Einstein tensor and its conservation law immediate.

## Exercise 13.12: Ricci and Einstein Related

The Ricci tensor is the trace of Riemann:

$$
R_{\beta\delta}=R^\mu{}_{\beta\mu\delta}.
$$

Metric symmetries imply

$$
R_{\beta\delta}=R_{\delta\beta},
$$

so Ricci is symmetric.

By definition of the Einstein tensor,

$$
G_{\beta\delta}=R_{\beta\delta}-\frac12 R\,g_{\beta\delta},
$$

which is equivalent to

$$
R^\beta{}_\delta=G^\beta{}_\delta+\frac12 R\,\delta^\beta{}_\delta.
$$

## Exercise 13.13: The Weyl Conformal Tensor

The Weyl tensor

$$
C^\alpha{}_{\beta\gamma\delta}
=R^\alpha{}_{\beta\gamma\delta}
-2\delta^\alpha{}_{[\gamma}R^\beta{}_{\delta]}
+\frac13\delta^\alpha{}_{[\gamma}\delta^\beta{}_{\delta]}R
$$

inherits the same index symmetries as Riemann and is trace-free on any pair of slots.

In four dimensions it has

$$
20-10-10=10
$$

independent components. In $n$ dimensions the count is

$$
\frac{n^2(n^2-1)}{12}-\frac{n(n+1)}{2}
$$

for $n\ge 4$, and it vanishes identically for $n\le 3$.

## Exercise 13.14: Inertial and Coriolis Forces

At the origin of the observer’s proper frame, the relevant connection coefficients are determined by the observer’s 4-acceleration $a$ and angular velocity $\omega$. Using the geodesic equation with $x^0$ as the parameter and writing

$$
v\equiv \frac{dx^i}{dx^0}e_i,
$$

one gets

$$
\frac{d^2x^i}{d(x^0)^2}e_i
=-a-2\,\omega\times v+2(a\cdot v)\,v.
$$

The three terms are, respectively, the inertial acceleration, the Coriolis term, and the relativistic correction to inertial acceleration.

## Exercise 13.15: Rotation Group: Metric

On $SO(3)$, choose the generator basis $\{e_\alpha\}$ and define

$$
g_{\alpha\beta}=\delta_{\alpha\beta}.
$$

With the standard commutators

$$
[e_\alpha,e_\beta]=-\epsilon_{\alpha\beta}{}^\gamma e_\gamma,
$$

the structure coefficients are totally antisymmetric, so the Levi-Civita formula from Exercise 13.4 produces a connection compatible with this metric. Hence

$$
\nabla g=0
$$

on the group manifold.

Therefore the geodesics of $SO(3)$ are the same as those obtained in Exercise 10.17, and the metric is exactly the orthonormal one stated in equation (13.76).
