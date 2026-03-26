# Chapter 10 Exercises: Affine Geometry

## Exercise 10.1: Additivity of Covariant Differentiation

The commutator is bilinear, so

$$[u,v+w]=[u,v]+[u,w],\qquad [u+v,w]=[u,w]+[v,w].$$

Using symmetry,

$$\nabla_u v-\nabla_v u=[u,v],$$

and the corresponding relations for $v+w$, one gets

$$\nabla_u(v+w)=\nabla_u v+\nabla_u w.$$

## Exercise 10.2: Chain Rule for Covariant Differentiation

For a scalar $f$ and vector field $w$,

$$\nabla_v(fw)=v[f]\,w+f\,\nabla_v w.$$

This is exactly the transport-definition version of the ordinary product rule.

## Exercise 10.3: Another Chain Rule

For a 1-form $\sigma$ and vector $v$,

$$v\!\left[\langle \sigma,w\rangle\right]
=\langle \nabla_v \sigma,w\rangle+\langle \sigma,\nabla_v w\rangle.$$

This is equation (10.7); it follows by parallel transporting both factors back to one event and then taking the difference quotient.

## Exercise 10.4: Still Another Chain Rule

The covariant derivative obeys the tensor-product Leibniz rule:

$$\nabla_v(\omega\otimes w)=(\nabla_v\omega)\otimes w+\omega\otimes(\nabla_v w).$$

In flat-space components this is just the familiar product rule for partial derivatives applied to tensor components.

## Exercise 10.5: One More Chain Rule

Likewise for a triple tensor product,

$$\nabla_v(\sigma\otimes\omega\otimes w)
=(\nabla_v\sigma)\otimes\omega\otimes w
+\sigma\otimes(\nabla_v\omega)\otimes w
+\sigma\otimes\omega\otimes(\nabla_v w).$$

## Exercise 10.6: Geodesic Equation

Schild’s ladder shows that if a curve parallel-transports its own tangent, then

$$\nabla_u u=0,$$

so geodesics are exactly the curves whose tangent vectors are parallel transported along themselves.

## Exercise 10.7: Computation of Connection Coefficients

The connection coefficients are defined by expanding the covariant derivative of a basis vector:

$$\nabla_{e_\gamma}e_\beta=\Gamma^\alpha{}_{\beta\gamma}e_\alpha.$$

Equivalently,

$$\Gamma^\alpha{}_{\beta\gamma}=e^\alpha\!\left(\nabla_{e_\gamma}e_\beta\right).$$

## Exercise 10.8: Connection for 1-Form Basis

For the dual basis $\omega^\alpha$,

$$\nabla_{e_\gamma}\omega^\alpha=-\Gamma^\alpha{}_{\beta\gamma}\,\omega^\beta.$$

This is the 1-form version of the connection law and is the content of equations (10.15) and (10.16).

## Exercise 10.9: Symmetry of Connection Coefficients

The torsion-free condition

$$\nabla_u v-\nabla_v u=[u,v]$$

is equivalent to

$$\Gamma^\alpha{}_{\beta\gamma}-\Gamma^\alpha{}_{\gamma\beta}=c^\alpha{}_{\beta\gamma},$$

where

$$[e_\beta,e_\gamma]=c^\alpha{}_{\beta\gamma}e_\alpha.$$

In a coordinate basis, $c^\alpha{}_{\beta\gamma}=0$, so the connection is symmetric in its lower indices. The number of independent coefficients drops from $64$ to $40$.

## Exercise 10.10: Components of Gradient

For a scalar field $s$,

$$\nabla s=ds=s_{,\alpha}\,\omega^\alpha,$$

so the gradient components are simply

$$s_{,\alpha}=e_\alpha[s].$$

## Exercise 10.11: Divergence

For a rank-2 tensor $T^{\alpha\beta}$, the divergence on the second slot is

$$T^{\alpha\beta}{}_{;\beta}
=T^{\alpha\beta}{}_{,\beta}
+\Gamma^\alpha{}_{\mu\beta}T^{\mu\beta}
+\Gamma^\beta{}_{\mu\beta}T^{\alpha\mu}.$$

This is the flat-space divergence plus the correction terms for each free index.

## Exercise 10.12: Verification of Chain Rule

For a contracted tensor product, the covariant derivative obeys the same Leibniz cancellation pattern as in flat space: the correction terms from the two factors cancel pairwise, leaving only the divergence of the contracted tensor. The result is the chain rule stated in the exercise.

## Exercise 10.13: Transformation Law for Connection Coefficients

If

$$e'_\mu=L^\alpha{}_\mu e_\alpha,$$

then

$$\Gamma'^\sigma{}_{\mu\nu}
=L^\sigma{}_\alpha\,L^\beta{}_\mu\,L^\gamma{}_\nu\,\Gamma^\alpha{}_{\beta\gamma}
+L^\sigma{}_\alpha\,\partial_\nu L^\alpha{}_\mu.$$

This is the affine-connection transformation law.

## Exercise 10.14: Polar Coordinates in Flat 2-Dimensional Space

For a sheet of paper with

$$e_r=\frac{\partial}{\partial r},\qquad e_\phi=\frac1r\frac{\partial}{\partial\phi},$$

Euclid’s parallel transport gives

$$\nabla_{e_r}e_r=0,\qquad \nabla_{e_r}e_\phi=0,\qquad
\nabla_{e_\phi}e_r=\frac1r e_\phi,\qquad
\nabla_{e_\phi}e_\phi=-\frac1r e_r.$$

So the only nonzero coefficients are

$$\Gamma^r{}_{\phi\phi}=-r,\qquad \Gamma^\phi{}_{r\phi}=\Gamma^\phi{}_{\phi r}=\frac1r.$$

The divergence formula becomes

$$\nabla\cdot A=\frac1r\frac{\partial}{\partial r}(rA^r)+\frac1r\frac{\partial A^\phi}{\partial\phi}.$$

## Exercise 10.15: Components of Parallel-Transport Law

The vector law

$$\nabla_u v=0$$

becomes, in components,

$$\frac{dv^\alpha}{d\lambda}+\Gamma^\alpha{}_{\beta\gamma}u^\beta v^\gamma=0.$$

That is equation (10.28).

## Exercise 10.16: Geodesics in Polar Coordinates

Starting from $x=r\cos\phi$, $y=r\sin\phi$ and the straight-line equations $x''=y''=0$, one gets

$$r''-r\phi'^2=0,\qquad \phi''+\frac{2r'}{r}\phi'=0.$$

These identify the same polar-coordinate connection coefficients as in Exercise 10.14, both for the coordinate basis and for the orthonormal basis.

## Exercise 10.17: Rotation Group: Geodesics and Connection Coefficients

Let

$$R_{\mathbf n}(\lambda)=\exp\!\left(\lambda\,n^i H_i\right),$$

so $R_{\mathbf n}$ is a rotation by angle $\lambda|\mathbf n|$ about axis $\mathbf n$.

For the SO(3) manifold, the geodesic through a point $P$ with tangent $u=u^i e_i$ is

$$\zeta(\lambda)=\exp(\lambda u^i e_i)\,P.$$

Using the geodesic equation and the commutators of the generator basis gives

$$\Gamma^i{}_{jk}=\frac12\,\epsilon^i{}_{jk},$$

with $\epsilon_{123}=+1$, independent of position on $SO(3)$.
