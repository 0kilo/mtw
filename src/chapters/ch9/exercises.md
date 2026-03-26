# Chapter 9 Exercises: Differential Topology

## Exercise 9.1: Component Manipulations

The needed identities are the usual vector-space rules for components in a basis:

$$u=u^\alpha e_\alpha,\qquad v=v^\alpha e_\alpha,$$

so

$$u+v=(u^\alpha+v^\alpha)e_\alpha,\qquad au=(au^\alpha)e_\alpha.$$

If the basis changes by

$$e_{\alpha'}=e_\beta L^\beta{}_{\alpha'},$$

then the components must transform oppositely:

$$u^{\alpha'}=L^{\alpha'}{}_\beta u^\beta.$$

The tensor-product and basis-tensor relations follow by inserting the expansions of the vectors and 1-forms into the machine definition of a tensor. This yields equations (9.11c) through (9.11g).

## Exercise 9.2: Components of Gradient, and Duality of Coordinate Bases

From the expansion of a scalar differential in an arbitrary basis,

$$df=f_{,\alpha}\,\omega^\alpha,$$

one gets

$$f_{,\alpha}=e_\alpha[f].$$

For a coordinate basis, the coordinate 1-forms and coordinate vectors are dual:

$$dx^\alpha\!\left(\frac{\partial}{\partial x^\beta}\right)=\delta^\alpha{}_\beta.$$

So the bases $\{dx^\alpha\}$ and $\{\partial/\partial x^\alpha\}$ are dual to each other.

## Exercise 9.3: Practice Manipulating Tangent Vectors

Let

$$P_0=(0,1,0),\quad
P(\lambda)=(\lambda,1,\lambda),\quad
P(\xi)=(\sin\xi,\cos\xi,\xi),\quad
P(\rho)=(\sinh\rho,\cosh\rho,\rho+\rho^3).$$

For $f=x^2-y^2+z^2$,

$$\nabla f=(2x,-2y,2z),$$

so at $P_0$,

$$\nabla f(P_0)=(0,-2,0).$$

Therefore

$$\left.\frac{d}{d\lambda}f\right|_{P_0}=0,\qquad
\left.\frac{d}{d\xi}f\right|_{P_0}=0,\qquad
\left.\frac{d}{d\rho}f\right|_{P_0}=0.$$

The tangent vectors at $P_0$ are the curve derivatives:

$$\left.\frac{d}{d\lambda}\right|_{P_0}=\partial_x+\partial_z,$$

$$\left.\frac{d}{d\xi}\right|_{P_0}=\partial_x+\partial_z,$$

$$\left.\frac{d}{d\rho}\right|_{P_0}=\partial_x+\partial_z,$$

where the last uses $\cosh 0=1$, $\sinh 0=0$, and $(d/d\rho)(\rho+\rho^3)|_{\rho=0}=1$.

## Exercise 9.4: More Practice with Tangent Vectors

With

$$v=y^2\frac{\partial}{\partial x}-x\frac{\partial}{\partial z},\qquad f=xy,\qquad g=z^3,$$

one finds

$$v[f]=y^3,\qquad v[g]=-3xz^2,\qquad v[fg]=y^3z^3-3x^2yz^2,$$

and, more systematically,

$$v[fg]=f\,v[g]+g\,v[f],$$

$$v[f^2+g^2]=2f\,v[f]+2g\,v[g],$$

$$v\{v[f]\}=v[y^3]=2y^4.$$

This exercise is just the Leibniz rule and repeated application of the directional derivative.

## Exercise 9.5: Picture of Basis 1-Forms Induced by Coordinates

In the tangent space of Figure 9.1, the basis 1-forms $dt$ and $dx$ are the covectors dual to the coordinate basis vectors $\partial/\partial t$ and $\partial/\partial x$. They should be drawn as families of equally spaced parallel hyperplanes, orthogonal to the corresponding basis vectors.

## Exercise 9.6: Practice with Dual Bases

For

$$e_r=\frac{\partial}{\partial r},\qquad
e_\theta=\frac1r\frac{\partial}{\partial\theta},\qquad
e_\phi=\frac{1}{r\sin\theta}\frac{\partial}{\partial\phi},$$

the dual 1-forms are

$$\omega^r=dr,\qquad \omega^\theta=r\,d\theta,\qquad \omega^\phi=r\sin\theta\,d\phi.$$

On the unit sphere $r=1$, the coordinate and orthonormal bases differ only by the scale factors $r$ and $r\sin\theta$; the orthonormal basis is unit-length everywhere away from the poles.

## Exercise 9.7: Practice with Commutators

For the spherical orthonormal basis fields

$$e_{\hat\theta}=\frac1r\frac{\partial}{\partial\theta},\qquad
e_{\hat\phi}=\frac{1}{r\sin\theta}\frac{\partial}{\partial\phi},$$

the commutator is

$$[e_{\hat\theta},e_{\hat\phi}]
= e_{\hat\theta}\!\left(\frac{1}{r\sin\theta}\right)\frac{\partial}{\partial\phi}
= -\frac{\cot\theta}{r}\,e_{\hat\phi}.$$

So the only nonzero commutation coefficient here is

$$c_{\hat\theta\hat\phi}{}^{\hat\phi}=-\frac{\cot\theta}{r}.$$

## Exercise 9.8: Angular Momentum Operators

Take the standard Euclidean vector fields

$$L_x=y\frac{\partial}{\partial z}-z\frac{\partial}{\partial y},\quad
L_y=z\frac{\partial}{\partial x}-x\frac{\partial}{\partial z},\quad
L_z=x\frac{\partial}{\partial y}-y\frac{\partial}{\partial x}.$$

Their commutators are the $\mathfrak{so}(3)$ relations:

$$[L_x,L_y]=L_z,\qquad [L_y,L_z]=L_x,\qquad [L_z,L_x]=L_y.$$

These are the infinitesimal generators of rotations.

## Exercise 9.9: Commutators and Coordinate-Induced Bases

If $u=\partial/\partial x^1$ and $v=\partial/\partial x^2$ in some coordinate system, then clearly $[u,v]=0$.

Conversely, if $u$ and $v$ are linearly independent and commute, then their flows commute. By the local flow-box/Frobenius theorem, one can choose coordinates in a neighborhood where the two flows become coordinate lines, so

$$u=\frac{\partial}{\partial x^1},\qquad v=\frac{\partial}{\partial x^2}.$$

The same argument extends to four vector fields: a basis is coordinate-induced iff all pairwise commutators vanish.

## Exercise 9.10: Components of Commutator in Non-Coordinate Basis

Using

$$[e_\beta,e_\gamma]=c_{\beta\gamma}{}^\alpha e_\alpha,$$

and expanding

$$u=u^\beta e_\beta,\qquad v=v^\gamma e_\gamma,$$

one obtains

$$[u,v]=\left(u^\beta v^\alpha{}_{,\beta}-v^\beta u^\alpha{}_{,\beta}-c_{\beta\gamma}{}^\alpha u^\beta v^\gamma\right)e_\alpha.$$

That is equation (9.23).

## Exercise 9.11: Lie Derivative

The Lie derivative is defined by

$$\mathcal L_u v=[u,v].$$

So the “Lie transport” law $\mathcal L_u v=0$ means that $v$ is dragged along the flow of $u$ without changing its commutator with the flow tangent.

## Exercise 9.12: A Chip Off the Old Block

The Jacobi identity is

$$[u,[v,w]]+[v,[w,u]]+[w,[u,v]]=0.$$

This follows from expanding each commutator as a derivative operator and grouping the third-order terms. The same identity holds in index form for the structure coefficients. Geometrically, it is the algebraic consistency condition behind the closure of commutators.

## Exercise 9.13: Rotation Group Generators

For the rotation matrices about the $x$, $y$, and $z$ axes, one writes

$$R_x(\theta)=e^{\theta K_x},\qquad R_y(\phi)=e^{\phi K_y},\qquad R_z(\psi)=e^{\psi K_z},$$

with $K_i$ the infinitesimal generators.

The Euler-angle parametrization

$$R=R_z(\phi)R_x(\theta)R_z(\psi)$$

gives local coordinates on $SO(3)$. The vector fields generated by the one-parameter subgroups are the tangent vectors to those curves in the group manifold.

## Exercise 9.14: Rotation Group Structure Constants

Using the generator basis from the previous exercise, the commutators are

$$[e_1,e_2]=e_3,\qquad [e_2,e_3]=e_1,\qquad [e_3,e_1]=e_2,$$

up to the sign convention chosen for the Euler-angle basis. Thus the structure constants are the $\mathfrak{so}(3)$ constants:

$$c_{12}{}^3=c_{23}{}^1=c_{31}{}^2=1,$$

with antisymmetry supplying the remaining components.
