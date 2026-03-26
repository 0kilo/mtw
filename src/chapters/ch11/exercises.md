# Chapter 11 Exercises: Geodesic Deviation and Curvature

## Exercise 11.1: $[\nabla_A,\nabla_B]C$ Depends on Derivatives of $C$

Let $C_{\text{new}}=fC_{\text{old}}$ with $f(\mathcal P_0)=1$. Using

$$\nabla_A(fC)=A[f]\,C+f\nabla_A C,$$

we get

$$
[\nabla_A,\nabla_B](fC)
=A[B[f]]\,C-B[A[f]]\,C+f[\nabla_A,\nabla_B]C.
$$

Since $A[B[f]]-B[A[f]]=[A,B]f=\nabla_{[A,B]}f$ for a scalar,

$$
\left.[\nabla_A,\nabla_B]C_{\text{new}}\right|_{\mathcal P_0}
\;-\;\left.[\nabla_A,\nabla_B]C_{\text{old}}\right|_{\mathcal P_0}
= C_{\text{old}}\,\nabla_{[A,B]}f,
$$

as required.

## Exercise 11.2: Proof That Riemann Is a Tensor

Write

$$\mathcal R(A,B)C=[\nabla_A,\nabla_B]C-\nabla_{[A,B]}C.$$

To prove tensoriality, check linearity in each slot.

For the first slot,

$$
\mathcal R(fA,B)C
=[f\nabla_A,\nabla_B]C-\nabla_{[fA,B]}C.
$$

Using $[fA,B]=f[A,B]-B[f]A$ and

$$
[f\nabla_A,\nabla_B]C=f[\nabla_A,\nabla_B]C-B[f]\nabla_A C,
$$

the extra terms cancel, so $\mathcal R(fA,B)C=f\mathcal R(A,B)C$. The same argument works for the second slot.

For the third slot,

$$
\mathcal R(A,B)(fC)=f\mathcal R(A,B)C,
$$

because both the commutator and the correction term obey the Leibniz rule.

Therefore $\mathcal R$ is multilinear, and its components in any basis transform tensorially. Hence Riemann is a tensor.

## Exercise 11.3: Components of Riemann in a Coordinate Basis

In a coordinate basis $[e_\gamma,e_\delta]=0$ and

$$\nabla_{e_\gamma}e_\beta=\Gamma^\mu{}_{\beta\gamma}e_\mu.$$

Then

$$
\begin{aligned}
\mathcal R(e_\gamma,e_\delta)e_\beta
&=\nabla_{e_\gamma}\bigl(\Gamma^\mu{}_{\beta\delta}e_\mu\bigr)
 -\nabla_{e_\delta}\bigl(\Gamma^\mu{}_{\beta\gamma}e_\mu\bigr) \\
&=\left(\Gamma^\alpha{}_{\beta\delta,\gamma}
-\Gamma^\alpha{}_{\beta\gamma,\delta}
+\Gamma^\alpha{}_{\mu\gamma}\Gamma^\mu{}_{\beta\delta}
-\Gamma^\alpha{}_{\mu\delta}\Gamma^\mu{}_{\beta\gamma}\right)e_\alpha.
\end{aligned}
$$

Contracting with $\omega^\alpha$ gives

$$
R^\alpha{}_{\beta\gamma\delta}
=\Gamma^\alpha{}_{\beta\delta,\gamma}
-\Gamma^\alpha{}_{\beta\gamma,\delta}
+\Gamma^\alpha{}_{\mu\gamma}\Gamma^\mu{}_{\beta\delta}
-\Gamma^\alpha{}_{\mu\delta}\Gamma^\mu{}_{\beta\gamma}.
$$

## Exercise 11.4: Components of Riemann in a Noncoordinate Basis

Now let

$$[e_\gamma,e_\delta]=c^\mu{}_{\gamma\delta}e_\mu.$$

The same calculation as in Exercise 11.3 gives one extra term from $-\nabla_{[e_\gamma,e_\delta]}e_\beta$:

$$
\mathcal R(e_\gamma,e_\delta)e_\beta
=\cdots-\Gamma^\alpha{}_{\beta\mu}c^\mu{}_{\gamma\delta}e_\alpha.
$$

So the noncoordinate-basis formula is

$$
R^\alpha{}_{\beta\gamma\delta}
=\Gamma^\alpha{}_{\beta\delta,\gamma}
-\Gamma^\alpha{}_{\beta\gamma,\delta}
+\Gamma^\alpha{}_{\mu\gamma}\Gamma^\mu{}_{\beta\delta}
-\Gamma^\alpha{}_{\mu\delta}\Gamma^\mu{}_{\beta\gamma}
-\Gamma^\alpha{}_{\beta\mu}c^\mu{}_{\gamma\delta}.
$$

## Exercise 11.5: Coplanarity of Closed Curves

Each small closed curve defines an oriented bivector $f$ representing its infinitesimal area. If two curves lie in the same plane, then both bivectors are multiples of the same simple bivector $u\wedge v$, so

$$f_1=a\,f_2.$$

Conversely, if $f_1$ and $f_2$ are proportional, then they have the same 2-plane support, because a simple bivector determines its span up to scale. Thus the curves are coplanar if and only if their bivectors are proportional.

## Exercise 11.6: Symmetries of Riemann

From the definition $\mathcal R(A,B)=-\mathcal R(B,A)$, we immediately get antisymmetry in the last two slots:

$$
R^\alpha{}_{\beta\gamma\delta}
=-R^\alpha{}_{\beta\delta\gamma}.
$$

The cyclic identity follows from the Jacobi identity for commutators together with vanishing torsion:

$$
\mathcal R(u,v)w+\mathcal R(v,w)u+\mathcal R(w,u)v=0.
$$

In components this is

$$
R^\alpha{}_{[\beta\gamma\delta]}=0.
$$

## Exercise 11.7: Geodesic Deviation Measures All Curvature Components

The Jacobi operator is

$$
\mathfrak J(u,v)n=\frac12\bigl(\mathcal R(n,u)v+\mathcal R(n,v)u\bigr),
$$

with components

$$
J^\mu{}_{\nu\alpha\beta}
=J^\mu{}_{\nu\beta\alpha}
=\frac12\left(R^\mu{}_{\alpha\nu\beta}+R^\mu{}_{\beta\nu\alpha}\right).
$$

### (a)
The symmetry built into the definition implies the antisymmetric part in the paired indices vanishes. Equivalently, the part forbidden by the Riemann antisymmetry is zero.

### (b)
Because $u$ and $n$ can be chosen freely in

$$
\nabla_u\nabla_u n+\mathfrak J(u,u)n=0,
$$

all components $J^\mu{}_{\nu\alpha\beta}$ can be probed by choosing suitable initial data.

### (c)
The two tensors contain the same information. The given identity

$$
R^\mu{}_{\alpha\beta\gamma}
=\frac23\left(J^\mu{}_{\alpha\beta\gamma}-J^\mu{}_{\beta\alpha\gamma}\right)
$$

recovers $R$ from $J$, while the definition of $J$ recovers $J$ from $R$.

### (d)
The cyclic symmetry of Riemann is essential. If one keeps only antisymmetry in the last two slots and drops

$$
R^\mu{}_{[\nu\alpha\beta]}=0,
$$

one can build nonzero tensors whose Jacobi combination vanishes. For example, a tensor with only

$$
R^1{}_{212}=1,\qquad R^1{}_{221}=-1
$$

and all other components zero satisfies the antisymmetry in the last two indices, but its Jacobi tensor is zero while the curvature tensor is not. So the Bianchi-type symmetry is what makes Jacobi and Riemann equivalent.

## Exercise 11.8: Geodesic Deviation in Gory Detail

The coordinate form of geodesic deviation is

$$
\frac{D^2 n^\alpha}{d\lambda^2}
+ R^\alpha{}_{\beta\gamma\delta}u^\beta n^\gamma u^\delta=0.
$$

Expanding the covariant derivatives gives

$$
\frac{D n^\alpha}{d\lambda}
=\dot n^\alpha+\Gamma^\alpha{}_{\beta\gamma}u^\beta n^\gamma,
$$

and therefore

$$
\begin{aligned}
\frac{D^2 n^\alpha}{d\lambda^2}
&=\ddot n^\alpha
+2\Gamma^\alpha{}_{\beta\gamma}u^\beta \dot n^\gamma \\
&\quad+\Gamma^\alpha{}_{\beta\gamma,\delta}u^\beta u^\delta n^\gamma
-\Gamma^\alpha{}_{\mu\gamma}\Gamma^\mu{}_{\beta\delta}u^\beta u^\delta n^\gamma
+\Gamma^\alpha{}_{\mu\delta}\Gamma^\mu{}_{\beta\gamma}u^\beta u^\delta n^\gamma.
\end{aligned}
$$

Thus the fully expanded deviation equation is

$$
\ddot n^\alpha
+2\Gamma^\alpha{}_{\beta\gamma}u^\beta \dot n^\gamma
+R^\alpha{}_{\beta\gamma\delta}u^\beta n^\gamma u^\delta
=0,
$$

with the curvature term itself given by the explicit $\Gamma$-and-derivative expression from Exercise 11.3.

## Exercise 11.9: Riemann Normal Coordinates in General

Let $\mathcal P_0$ be the chosen origin and $x^\alpha$ the RNC built from geodesics through $\mathcal P_0$.

### (a)
By definition, the coordinate basis at the origin is the chosen basis:

$$
\left(\frac{\partial}{\partial x^\alpha}\right)_{\mathcal P_0}=e_\alpha(\mathcal P_0).
$$

### (b)
The straight-line coordinate curves

$$
x^\alpha=v^\alpha\lambda
$$

are geodesics through $\mathcal P_0$ with affine parameter $\lambda$, because the coordinates are built by exponentiating geodesics from the origin.

### (c)
Substituting $x^\alpha=v^\alpha\lambda$ into the geodesic equation gives $\ddot x^\alpha=0$ and therefore

$$
\Gamma^\alpha{}_{\beta\gamma}(\mathcal P_0)=0.
$$

### (d)
The tangent vector is

$$
u=\left(\frac{\partial}{\partial\lambda}\right)_{v^\mu}
=v^\alpha e_\alpha,
$$

and the deviation vectors are

$$
N_{(\mu)}=\left(\frac{\partial}{\partial v^\mu}\right)_\lambda
=\lambda\,e_\mu,
$$

so in components

$$
N_{(\mu)}^\alpha=\lambda\,\delta^\alpha{}_\mu.
$$

### (e)
Expand the connection along the geodesic:

$$
\Gamma^\alpha{}_{\beta\gamma}\big|_{x=v\lambda}
=\lambda\,v^\mu \Gamma^\alpha{}_{\beta\gamma,\mu}(\mathcal P_0)+O(\lambda^2).
$$

Insert this into the geodesic-deviation equation and equate the coefficients of $ \lambda^0 $ and $ \lambda^1 $. This yields

$$
\Gamma^\alpha{}_{\beta\gamma,\mu}(\mathcal P_0)
=-\frac13\left(R^\alpha{}_{\beta\gamma\mu}+R^\alpha{}_{\gamma\beta\mu}\right),
$$

which is equation (11.29).

### (f)
Using the metric-expression for the connection and the result above gives the standard RNC metric identities:

$$
g_{\alpha\beta}(\mathcal P_0)=\eta_{\alpha\beta},\qquad
g_{\alpha\beta,\mu}(\mathcal P_0)=0,
$$

and

$$
g_{\alpha\beta,\mu\nu}(\mathcal P_0)
=-\frac13\left(R_{\alpha\mu\beta\nu}+R_{\alpha\nu\beta\mu}\right).
$$

These are the low-order RNC expansions quoted in the chapter.

## Exercise 11.10: Bianchi Identities

At the origin of Riemann normal coordinates, $\Gamma^\alpha{}_{\beta\gamma}(\mathcal P_0)=0$, so the covariant derivative reduces to an ordinary derivative there. Apply the cyclic sum to the explicit formula

$$
R^\alpha{}_{\beta\gamma\delta}
=\Gamma^\alpha{}_{\beta\delta,\gamma}
-\Gamma^\alpha{}_{\beta\gamma,\delta}
+\Gamma^\alpha{}_{\mu\gamma}\Gamma^\mu{}_{\beta\delta}
-\Gamma^\alpha{}_{\mu\delta}\Gamma^\mu{}_{\beta\gamma}.
$$

At $\mathcal P_0$, the quadratic terms vanish, and the cyclic sum over $\gamma,\delta,\epsilon$ leaves only commuting partial derivatives, so

$$
R^\alpha{}_{\beta[\gamma\delta;\epsilon]}=0.
$$

This is the first Bianchi identity.

## Exercise 11.11: Curvature Operator Acts on 1-Forms

Let $\sigma$ be a 1-form and $w$ a vector. Using metric compatibility and the definition of covariant derivative on pairings,

$$
A\langle \sigma,w\rangle
=\langle \nabla_A\sigma,w\rangle+\langle \sigma,\nabla_A w\rangle.
$$

Compute

$$
\langle \mathcal R(u,v)\sigma,w\rangle
=\langle [\nabla_u,\nabla_v]\sigma-\nabla_{[u,v]}\sigma,w\rangle.
$$

Expanding each term with the pairing rule and canceling the mixed derivatives yields

$$
\langle \mathcal R(u,v)\sigma,w\rangle
=-\langle \sigma,\mathcal R(u,v)w\rangle.
$$

So the curvature operator is skew-adjoint when it acts on dual vectors.

## Exercise 11.12: Rotation Group: Riemann Curvature

For the group manifold $SO(3)$, the left-invariant basis has constant structure coefficients, and the Levi-Civita connection gives a constant curvature tensor. Substituting the $SO(3)$ structure constants into the noncoordinate-basis formula from Exercise 11.4 yields

$$
R^\alpha{}_{\beta\gamma\delta}
=\frac12\,\delta^{\alpha\beta}_{\gamma\delta},
$$

where

$$
\delta^{\alpha\beta}_{\gamma\delta}
\equiv
\delta^\alpha_\gamma\delta^\beta_\delta
-\delta^\alpha_\delta\delta^\beta_\gamma.
$$

This is independent of position on the group manifold.
