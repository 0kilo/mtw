# Chapter 14 Exercises: Calculation of Curvature

## Exercise 14.1: Curvature of a Two-Dimensional Hyperboloid

Parameterize the hyperboloid by

$$
t=T\cosh\alpha,\qquad x=T\sinh\alpha\cos\phi,\qquad y=T\sinh\alpha\sin\phi.
$$

Then the induced metric is

$$
ds^2=T^2(d\alpha^2+\sinh^2\alpha\,d\phi^2).
$$

This is the standard metric of a 2-space of constant negative curvature. For

$$
ds^2=a^2(d\chi^2+\sinh^2\chi\,d\phi^2),
$$

the Gaussian curvature is

$$
K=-\frac{1}{a^2}.
$$

So the hyperboloid has constant negative curvature.

## Exercise 14.2: Riemannian Curvature Expressible in Terms of Ricci Curvature in Two and Three Dimensions

In two dimensions there is only one independent component of Riemann, and the symmetries force

$$
R_{\mu\nu\alpha\beta}
=\frac12\left(g_{\mu\alpha}R_{\nu\beta}-g_{\mu\beta}R_{\nu\alpha}-g_{\nu\alpha}R_{\mu\beta}+g_{\nu\beta}R_{\mu\alpha}\right)
-\frac12R\left(g_{\mu\alpha}g_{\nu\beta}-g_{\mu\beta}g_{\nu\alpha}\right).
$$

In three dimensions the Weyl tensor vanishes identically, so Riemann is determined entirely by Ricci:

$$
R_{ijkl}
=g_{ik}R_{jl}-g_{il}R_{jk}-g_{jk}R_{il}+g_{jl}R_{ik}
-\frac12R\,(g_{ik}g_{jl}-g_{il}g_{jk}).
$$

These formulas express all curvature information in terms of the Ricci tensor and metric.

## Exercise 14.3: Curvature of 3-Sphere in Orthonormal Frame

For

$$
ds^2=a^2\bigl[d\chi^2+\sin^2\chi(d\theta^2+\sin^2\theta\,d\phi^2)\bigr]
$$

or

$$
ds^2=a^2\bigl[d\chi^2+\sinh^2\chi(d\theta^2+\sin^2\theta\,d\phi^2)\bigr],
$$

the orthonormal frame is the one given in the problem statement. In either case, the spatial curvature is constant, so in an orthonormal basis

$$
R^{\hat i}{}_{\hat j\hat k\hat l}
=\pm \frac{1}{a^2}\,\delta^{\hat i\hat p}{}_{\hat k\hat l},
$$

with the plus sign for the 3-sphere and the minus sign for the 3-hyperboloid.

Thus the curvature matrix is

$$
R^{\hat i\hat j}{}_{\hat k\hat l}
=\frac{1}{a^2}
\begin{pmatrix}
0 & 1 & 1\\
1 & 0 & 1\\
1 & 1 & 0
\end{pmatrix}
$$

up to the standard antisymmetry labels of the bivector basis.

## Exercise 14.4: Einstein Equations for the Closed Friedmann Universe Calculated by Using the Geodesic Lagrangian Method

### (a)

For

$$
ds^2=-dt^2+a^2(t)\left[d\chi^2+\sin^2\chi(d\theta^2+\sin^2\theta\,d\phi^2)\right],
$$

the geodesic Lagrangian is

$$
L=\frac12\left[-\dot t^2+a^2(t)\left(\dot\chi^2+\sin^2\chi\,\dot\theta^2+\sin^2\chi\sin^2\theta\,\dot\phi^2\right)\right].
$$

Applying the Euler-Lagrange equations gives the geodesic equations in the form stated in the chapter, and from them one reads off the nonzero $\Gamma^\mu{}_{\alpha\beta}$.

### (b)

Using the general Riemann formula, the only independent nonzero components are

$$
R^t{}_{\chi t\chi},\qquad R^\chi{}_{\theta\chi\theta},
$$

with the remaining components fixed by symmetry.

### (c)

In the orthonormal frame

$$
\omega^{\hat 0}=dt,\qquad \omega^{\hat \chi}=a\,d\chi,\qquad \omega^{\hat \theta}=a\sin\chi\,d\theta,\qquad \omega^{\hat \phi}=a\sin\chi\sin\theta\,d\phi,
$$

the independent curvature components are those listed in the box:
the time-time curvature and the spatial-sphere curvature. All others follow by symmetry.

### (d)

The Einstein tensor components are the standard Friedmann ones:

$$
G^{\hat 0}{}_{\hat 0}=-3a^{-2}(1+\dot a^2),
$$

$$
G^{\hat i}{}_{\hat i}=-(2a^{-1}\ddot a+a^{-2}(1+\dot a^2)),
$$

with off-diagonal components zero.

## Exercise 14.5: Exterior Derivative of a Product of Forms

For a $p$-form

$$
\alpha=\alpha_{i_1\cdots i_p}\,dx^{i_1}\wedge\cdots\wedge dx^{i_p},
$$

the exterior derivative is

$$
d\alpha=\frac{\partial\alpha_{i_1\cdots i_p}}{\partial x^0}dx^0\wedge dx^{i_1}\wedge\cdots\wedge dx^{i_p}.
$$

Applying this recursively to $\alpha\wedge\beta$ and using the graded product rule for the wedge product gives

$$
d(\alpha\wedge\beta)=d\alpha\wedge\beta-\alpha\wedge d\beta.
$$

## Exercise 14.6: Relationship Between Exterior Derivative and Commutator

For coordinate basis vectors $u=\partial/\partial x^\alpha$ and $v=\partial/\partial x^\beta$, the commutator vanishes:

$$
[u,v]=0.
$$

Therefore the right-hand side of the formula in the chapter reduces to the ordinary antisymmetrized derivative of the form coefficients. Since both sides are bilinear and satisfy the same identity on basis vectors, the general formula follows:

$$
d(\alpha\wedge\beta)=d\alpha\wedge\beta-\alpha\wedge d\beta.
$$

## Exercise 14.7: Christoffel Formula Derived from Connection Forms

In a coordinate frame $ \omega^\mu = dx^\mu $, the structure equation reads

$$
d\omega^\mu=0=\omega^\mu{}_\alpha\wedge\omega^\alpha.
$$

Rewriting the connection 1-forms as

$$
\omega_{\mu\beta}=\Gamma_{\mu\beta\alpha}\,dx^\alpha
$$

and using torsion-freeness and symmetry in the lower indices gives

$$
\Gamma_{\mu\alpha\beta}
=\frac12 g_{\mu\nu}
\left(
\frac{\partial g_{\nu\alpha}}{\partial x^\beta}
+\frac{\partial g_{\nu\beta}}{\partial x^\alpha}
-\frac{\partial g_{\alpha\beta}}{\partial x^\nu}
\right),
$$

which is the Christoffel formula.

## Exercise 14.8: Riemann-Christoffel Curvature Formula Related to Curvature Forms

Substitute

$$
\omega^\mu{}_\nu=\Gamma^\mu{}_{\nu\alpha}\,dx^\alpha
$$

into

$$
\mathcal R^\mu{}_\nu=d\omega^\mu{}_\nu+\omega^\mu{}_\alpha\wedge\omega^\alpha{}_\nu.
$$

The coefficient of $dx^\alpha\wedge dx^\beta$ is then exactly

$$
R^\mu{}_{\nu\alpha\beta}
=\partial_\alpha\Gamma^\mu{}_{\nu\beta}
-\partial_\beta\Gamma^\mu{}_{\nu\alpha}
+\Gamma^\mu{}_{\rho\alpha}\Gamma^\rho{}_{\nu\beta}
-\Gamma^\mu{}_{\rho\beta}\Gamma^\rho{}_{\nu\alpha}.
$$

## Exercise 14.9: Matrix Notation for Review of Cartan Structure Equations

The matrix forms

$$
de=e\Omega,\qquad d\omega=\Omega\wedge\omega
$$

imply

$$
d^2e=d(e\Omega)=de\wedge\Omega+e\,d\Omega.
$$

Using $de=e\Omega$ again,

$$
0=d^2e=e(\Omega\wedge\Omega+d\Omega),
$$

so

$$
0=d\omega+\Omega\wedge\omega.
$$

Similarly,

$$
d^2e=d(e\Omega)=e(d\Omega+\Omega\wedge\Omega),
$$

which motivates

$$
\mathcal R=d\Omega+\Omega\wedge\Omega.
$$

The Bianchi identity follows from $d\mathcal R+\Omega\wedge\mathcal R-\mathcal R\wedge\Omega=0$, and the vector-field version gives the curvature action on $v=e\,v^\mu$.

## Exercise 14.10: Transformation Rules for Connection Forms in Compact Notation

Under a change of frame $e' = eA$ and $\omega' = A^{-1}\omega$, the structure equation gives

$$
\Omega' = A^{-1}\Omega A + A^{-1}dA.
$$

In a coordinate frame $A^\mu{}_{\mu'}=\partial x^\mu/\partial x^{\mu'}$, this becomes

$$
\Gamma'^\alpha{}_{\beta\gamma}
=\frac{\partial x'^\alpha}{\partial x^\mu}
\frac{\partial x^\nu}{\partial x'^\beta}
\frac{\partial x^\rho}{\partial x'^\gamma}
\Gamma^\mu{}_{\nu\rho}
+\frac{\partial x'^\alpha}{\partial x^\mu}\frac{\partial^2 x^\mu}{\partial x'^\beta\partial x'^\gamma},
$$

the usual affine-connection transformation law.

## Exercise 14.11: Space Is Flat if the Curvature Vanishes

If $\mathcal R=0$, then the connection 1-forms satisfy

$$
d\Omega+\Omega\wedge\Omega=0.
$$

This integrability condition implies locally $\Omega=A^{-1}dA$, so a frame exists in which $\Omega'=0$. In that frame,

$$
de'=0,
$$

and therefore the basis one-forms are exact:

$$
\omega'^i=dx^i.
$$

So the space is flat and the coordinates are integrable precisely when curvature vanishes.

## Exercise 14.12: Systematic Computation of Connection Forms in Orthonormal Frames

For an orthonormal frame, $g_{\mu\nu}=\text{const}$, so the metric-compatibility equation gives

$$
\omega_{\mu\nu}=-\omega_{\nu\mu}.
$$

The torsion-free equation

$$
d\omega^\mu+\omega^\mu{}_\nu\wedge\omega^\nu=0
$$

determines the connection 1-forms. Writing

$$
d\omega^\mu=-c^\mu{}_{\alpha\beta}\,\omega^\alpha\wedge\omega^\beta,
$$

one solves for

$$
\omega_{\mu\nu}
=\frac12(c_{\mu\nu\alpha}+c_{\mu\alpha\nu}-c_{\nu\alpha\mu})\,\omega^\alpha.
$$

## Exercise 14.13: Schwarzschild Curvature Forms

Use the orthonormal basis

$$
\omega^{\hat t}=e^\Phi dt,\qquad
\omega^{\hat r}=e^\Lambda dr,\qquad
\omega^{\hat \theta}=r\,d\theta,\qquad
\omega^{\hat \phi}=r\sin\theta\,d\phi.
$$

The curvature 2-forms are then

$$
\mathcal R^{\hat t}{}_{\hat r}=E\,\omega^{\hat t}\wedge\omega^{\hat r},\qquad
\mathcal R^{\hat t}{}_{\hat\theta}=\bar E\,\omega^{\hat t}\wedge\omega^{\hat\theta},\qquad
\mathcal R^{\hat r}{}_{\hat\theta}=F\,\omega^{\hat r}\wedge\omega^{\hat\theta},
$$

with the remaining components fixed by symmetry, and

$$
E=-e^{-2\Lambda}(\Phi''+\Phi'^2-\Phi'\Lambda'),\qquad
\bar E=-\frac1r e^{-2\Lambda}\Phi',\qquad
F=\frac1{r^2}(1-e^{-2\Lambda}).
$$

The Einstein tensor components follow from the listed combinations of $E,\bar E,F$ in the problem statement.

## Exercise 14.14: Matrix Display of the Riemann-Tensor Components

The symmetries

$$
R_{\alpha\beta\gamma\delta}=R_{[\alpha\beta][\gamma\delta]},\qquad
R_{\alpha\beta\gamma\delta}=R_{\gamma\delta\alpha\beta}
$$

imply that the 6 bivector pairs can be grouped into a $6\times6$ matrix with $3\times3$ blocks:

$$
\begin{pmatrix}
E & H\\
-H^T & F
\end{pmatrix}.
$$

The blocks must satisfy

$$
E=E^T,\qquad F=F^T,\qquad \operatorname{tr}H=0,
$$

because of pair symmetry and the Bianchi identity.

## Exercise 14.15: Riemann Matrix With Vanishing Einstein Tensor

If $G^\mu{}_\nu=0$, then the trace relations force

$$
\operatorname{tr}E=0,\qquad H=H^T.
$$

So the matrix reduces to

$$
\begin{pmatrix}
E & H\\
-H & E
\end{pmatrix},
$$

with both blocks symmetric and traceless in the appropriate sense.

## Exercise 14.16: Computation of Curvature for a Pulsating or Collapsing Star

For

$$
ds^2=-e^{2\Phi}dT^2+e^{2\Lambda}dR^2+r^2(d\theta^2+\sin^2\theta\,d\phi^2),
$$

the obvious orthonormal frame is

$$
\omega^{\hat t}=e^\Phi dT,\qquad
\omega^{\hat R}=e^\Lambda dR,\qquad
\omega^{\hat\theta}=r\,d\theta,\qquad
\omega^{\hat\phi}=r\sin\theta\,d\phi.
$$

The curvature 2-forms are those listed in the answer block:

$$
\mathcal R^{\hat t}{}_{\hat R}=E\,\omega^{\hat t}\wedge\omega^{\hat R},\quad
\mathcal R^{\hat t}{}_{\hat\theta}=\bar E\,\omega^{\hat t}\wedge\omega^{\hat\theta}+H\,\omega^{\hat R}\wedge\omega^{\hat\theta},
$$

with the analogous $\phi$ components, and the Einstein tensor entries are the corresponding combinations of $E,\bar E,F,H$.

## Exercise 14.17: Bianchi Identity in $d\mathcal R=0$ Form

Define the curvature 2-form

$$
\mathcal R=\frac12 e_\mu\wedge e_\nu\,\mathcal R^{\mu\nu}.
$$

Then

$$
\mathcal R^{\mu\nu}=d\omega^{\mu\nu}-\omega^\mu{}_\alpha\wedge\omega^{\alpha\nu}.
$$

Applying $d$ and using $d^2=0$ gives the Bianchi identity in differential-form form:

$$
d\mathcal R+\Omega\wedge\mathcal R-\mathcal R\wedge\Omega=0.
$$

In an orthonormal frame this is exactly the statement $d\mathcal R=0$ in the compact notation of the exercise.

## Exercise 14.18: Local Conservation of Energy and Momentum

Let

$$
T=e_\mu T^\mu{}_\nu\omega^\nu.
$$

Taking the dual gives the 3-form version

$$
*T=e_\mu T^\mu{}_\nu\,d^3\Sigma^\nu,
$$

with

$$
d^3\Sigma_\nu=\epsilon_{\nu\alpha\beta\gamma}\,\omega^\alpha\wedge\omega^\beta\wedge\omega^\gamma.
$$

Then the generalized exterior derivative yields

$$
d(*T)=e_\mu T^\mu{}_{\nu;\alpha}\,\sqrt{|g|}\,\omega^0\wedge\omega^1\wedge\omega^2\wedge\omega^3,
$$

so

$$
d(*T)=0\quad\Longleftrightarrow\quad \nabla_\nu T^\mu{}_\nu=0.
$$

This is the local conservation law of energy and momentum.
