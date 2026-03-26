# Chapter 12 Exercises: Newtonian Gravity in Curved Spacetime

## Exercise 12.1: Riemann Curvature of Newtonian Spacetime

In a Galilean coordinate system the only nonzero connection coefficients are

$$\Gamma^j{}_{00}=\Phi_{,j}.$$

Using

$$
R^\alpha{}_{\beta\gamma\delta}
=\Gamma^\alpha{}_{\beta\delta,\gamma}
-\Gamma^\alpha{}_{\beta\gamma,\delta}
+\Gamma^\alpha{}_{\mu\gamma}\Gamma^\mu{}_{\beta\delta}
-\Gamma^\alpha{}_{\mu\delta}\Gamma^\mu{}_{\beta\gamma},
$$

we find

$$
R^j{}_{0k0}
=\Gamma^j{}_{00,k}
=\Phi_{,jk},
$$

with the antisymmetry in the last two slots giving

$$
R^j{}_{00k}=-\Phi_{,jk}.
$$

All other components vanish because there are no other nonzero $\Gamma^\alpha{}_{\beta\gamma}$.

## Exercise 12.2: Newtonian Field Equation

The Ricci tensor is

$$
R_{\alpha\beta}=R^\mu{}_{\alpha\mu\beta}.
$$

From Exercise 12.1, the only nonzero contraction is

$$
R_{00}=R^j{}_{0j0}=\Phi_{,jj}=\nabla^2\Phi.
$$

Therefore Poisson’s equation

$$
\nabla^2\Phi=4\pi\rho
$$

becomes the geometric field equation

$$
R_{00}=4\pi\rho,\qquad R_{\alpha\beta}=0\ \text{otherwise}.
$$

Equivalently,

$$
\mathrm{Ricci}=4\pi\rho\,dt\otimes dt.
$$

## Exercise 12.3: Geodesic Deviation Derived

The Newtonian version of geodesic deviation is just the tidal equation for neighboring freely falling particles:

$$
\nabla_u\nabla_u n+\mathcal R(n,u)u=0.
$$

In Galilean coordinates, with affine parameter $t$ and $n^0=0$, the time component is trivial:

$$
\frac{d^2n^0}{dt^2}=0.
$$

For spatial components, using $R^j{}_{0k0}=\Phi_{,jk}$ and $u^0=1$,

$$
\frac{d^2 n^j}{dt^2}+\Phi_{,jk}n^k=0.
$$

This is exactly the Newtonian tidal-force law, so the geometric and standard analyses are the same statement in different language.

## Exercise 12.4: Connection Coefficients for Rotating, Accelerating Coordinates

For the time-dependent transformation

$$
x^{0'}=t,\qquad x^{j'}=A^{j'}{}_k(t)x^k+a^{j'}(t),
$$

the transformed connection acquires inertial terms:

$$
\Gamma'^{j'}{}_{0k'}=(A^{-1}\dot A)^{j'}{}_{k'},
$$

and

$$
\Gamma'^{j'}{}_{00}
=A^{j'}{}_k\,\Phi_{,k}
-\ddot a^{j'}
-\ddot A^{j'}{}_k\,x^{k'}.
$$

The mixed coefficients vanish if and only if $A$ is time-independent. Then $\Gamma'^{j'}{}_{00}$ is still a gradient, with

$$
\Phi'=\Phi-\ddot a^{k'}x^{k'}+\text{constant}.
$$

So the necessary and sufficient conditions for the primed coordinates to be Galilean are:

$$
\dot A^{j'}{}_k=0,
\qquad
A^T A=I,
$$

with $a^{j'}(t)$ arbitrary.

## Exercise 12.5: Einstein’s Elevator

Uniform gravity and uniform acceleration are locally equivalent because both produce the same family of free-fall worldlines in a small neighborhood. In particular, a uniformly accelerated frame in flat spacetime can reproduce:

- weightlessness in free fall,
- the same local displacement of freely falling bodies,
- and the same first-order redshift across a small height difference.

What is not equivalent is tidal structure. A real gravitational field has curvature, so relative accelerations vary from place to place. An accelerated frame in flat spacetime has no Riemann curvature. So the elevator analogy is local, not global.

## Exercise 12.6: Geodesic Deviation Above the Earth

Let the laboratory move on a circular orbit of radius $r_0$ with angular velocity

$$
\omega=\sqrt{M/r_0^3}.
$$

In the lab’s rotating local coordinates $(x',y',z')$ with $x'$ radial, $y'$ tangential, and $z'$ normal to the orbital plane, the relative motion of the garbage bag satisfies the Hill/Clohessy-Wiltshire equations:

$$
\ddot x'-2\omega\dot y'-3\omega^2 x'=0,
$$

$$
\ddot y'+2\omega\dot x'=0,
$$

$$
\ddot z'+\omega^2 z'=0.
$$

These are the geodesic-deviation equations in the rotating laboratory frame. They describe the expected Keplerian relative motion: the bag follows a nearby free-fall orbit, with Coriolis and tidal terms accounting for the apparent drift in the lab frame.

## Exercise 12.7: From Newton to Cartan

Starting from the standard Newtonian axioms:

1. universal time $t$,
2. Cartesian Galilean coordinates,
3. Newtonian potential $\Phi$,
4. Poisson’s equation,
5. Newton’s law of motion,

one verifies the geometric axioms as follows.

1. Universal time gives a scalar field $t(\mathcal P)$.
2. Cartesian coordinates on each slice give Euclidean spatial geometry.
3. Newton’s law is rewritten as a geodesic equation with $\Gamma^j{}_{00}=\Phi_{,j}$.
4. The resulting curvature has only $R^j{}_{0k0}=\Phi_{,jk}$.
5. Poisson’s equation becomes $R_{00}=4\pi\rho$, i.e. $\mathrm{Ricci}=4\pi\rho\,dt\otimes dt$.
6. Free particles are geodesics of the resulting symmetric connection.
7. The spatial metric is just the Euclidean metric on each $t=\text{const}$ slice.
8. The Jacobi curvature operator is self-adjoint on spatial vectors because the Newtonian curvature has the required symmetries.

Thus the standard axioms imply the geometric Newton-Cartan axioms.

## Exercise 12.8: From Cartan to Newton

Assume the geometric axioms and reconstruct the standard Newtonian picture.

1. Choose three orthonormal spatial basis vectors at one event.
2. Parallel transport them through space using axiom (3); path-independence gives well-defined spatial basis fields.
3. Axiom (2) gives $[e_i,e_j]=0$ and $ \nabla e_i=0 $ for the spatial basis.
4. Choose a time line through each space slice and transport the time basis vector $e_0$ along it.
5. Axiom (4) implies the transport is route-independent, so $ \nabla e_0=0 $ as well.
6. Therefore there exists a coordinate system with $e_a=\partial/\partial x^a$.
7. In that system the only nonzero connection coefficients are $\Gamma^i{}_{00}$.
8. Axiom (7) implies the field strength is potential-like, so $\Gamma^i{}_{00}=\Phi_{,i}$ for some $\Phi$.
9. Axiom (5) then gives $R_{00}=4\pi\rho$, which becomes Poisson’s equation, and axiom (8) becomes Newton’s second law for free fall.

So the geometric axioms imply the standard Newtonian axioms.

## Exercise 12.9: Spatial Metric Allowed by Other Axioms

Pick an orthonormal spatial basis $\{e_i\}$ at some event and extend it through spacetime by the transport procedure used in Exercise 12.8. Define the spatial metric by declaring

$$
e_i\cdot e_j=\delta_{ij}
$$

everywhere.

Because the basis fields are route-independent on each spatial slice and are preserved by the connection, this inner product is well defined and satisfies the spatial compatibility condition

$$
\nabla_u g(v,w)=g(\nabla_u v,w)+g(v,\nabla_u w)
$$

for spatial vectors. Thus axioms (1), (2), and (3) are enough to admit a spatial metric.

## Exercise 12.10: Spacetime Metric Forbidden by Other Axioms

Assume, for contradiction, that there is a nondegenerate spacetime metric $g$ compatible with $\nabla$.

In Galilean coordinates, compatibility forces the spatial components of $g$ to be constant in spacetime. Lower the only nonzero curvature component:

$$
R_{i0k0}=g_{ij}R^j{}_{0k0}=g_{ij}\Phi_{,jk}.
$$

But Newtonian curvature also gives

$$
R_{0ik0}=g_{0\mu}R^\mu{}_{ik0}=0,
$$

since the only nonzero upper-index components are of the form $R^j{}_{0k0}$.

For a metric-compatible spacetime, the Riemann tensor with all indices lowered must satisfy

$$
R_{i0k0}=-R_{0ik0}.
$$

That would force $R_{i0k0}=0$, hence $\Phi_{,jk}=0$, which is false in a nontrivial gravitational field. Therefore no nondegenerate spacetime metric compatible with the Newtonian covariant derivative exists.
