# Chapter 7 Exercises: Incompatibility of Gravity and Special Relativity

## Exercise 7.1: Scalar Gravitational Field

### A
With proper time $\tau$ as parameter, the particle action is

$$I_p = -m\int e^\Phi\,d\tau.$$

Varying the world line gives

$$\frac{du^\mu}{d\tau} = -(\eta^{\mu\nu}+u^\mu u^\nu)\Phi_{,\nu},$$

so the force is orthogonal to $u^\mu$.

### B
Varying the field action gives the scalar wave equation with source,

$$\Box \Phi = -4\pi T,$$

with $T$ the trace-like matter source used in this theory. In the weak, static limit this reduces to Poisson’s equation.

### C
For a single static source, the solution is the Coulomb/Newton form

$$\Phi = -\frac{M}{r}$$

up to the convention used for the sign of $\Phi$. This is consistent near the Earth only in the weak-field regime.

### D
Using the static central field in the particle action yields a central-force orbit equation, but the relativistic correction is too small. The perihelion advance is not the observed one.

### E
For $m\to 0$, the quantity

$$q^\mu = k^\mu e^\Phi$$

is conserved along null trajectories, so the direction of $k^\mu$ is unchanged by the field. Hence this scalar theory predicts no light bending by the Sun.

## Exercise 7.2: Vector Gravitational Field

### A
The action is Maxwell-like. Variation with respect to $\Phi_\mu$ gives

$$\partial_\nu F^{\mu\nu} = 4\pi J^\mu,$$

and variation of the particle path gives the Lorentz-force law.

### B
For a static source, the field has the Coulomb form

$$\Phi_0 = \frac{M}{r}, \qquad \Phi_i = 0,$$

again up to sign convention. The coefficient choices are fixed so the Newtonian limit is recovered.

### C
The resulting perihelion shift does not match the observed value; it is not the general-relativistic correction.

### D
The light deflection is also wrong in this vector theory.

### E
The Hamiltonian density for the vector field is negative for radiative modes, so vector gravitational waves carry negative energy. That makes the theory unstable.

## Exercise 7.3: Symmetric Tensor Gravitational Field

### A
The test-particle equation of motion can be written as

$$\left(\eta^{\mu\nu}+h^{\mu\nu}\right)\ddot z_\nu + \Gamma^\mu{}_{\alpha\beta}\dot z^\alpha \dot z^\beta = 0,$$

with

$$\Gamma^\mu{}_{\alpha\beta}=\frac12\left(h^\mu{}_{\alpha,\beta}+h^\mu{}_{\beta,\alpha}-h_{\alpha\beta}{}^{,\mu}\right).$$

### B
The field equations are the linearized Einstein equations in flat background form:

$$\Box \bar h^{\mu\nu}=-16\pi T^{\mu\nu}, \qquad \bar h^{\mu\nu}{}_{,\nu}=0,$$

with gauge freedom

$$h_{\mu\nu}\to h_{\mu\nu}+\xi_{\mu,\nu}+\xi_{\nu,\mu}.$$

### C
For a static point mass,

$$h_{00}=\frac{2M}{r}, \qquad h_{0i}=0, \qquad h_{ij}=\delta_{ij}\frac{2M}{r}.$$

### D
The perihelion advance is

$$\Delta\phi = \frac{8\pi M}{r_0} + O\!\left((M/r_0)^3\right),$$

which is the standard general-relativistic value in the weak-field limit.

### E
The light deflection for a grazing ray is

$$\Delta\phi = \frac{4M_\odot}{R_\odot} \approx 1''.75.$$

### F
For a plane wave

$$h_{\mu\nu}=A_{\mu\nu}e^{ik_\alpha x^\alpha},$$

the field equations require

$$k^\alpha k_\alpha = 0, \qquad A_{\mu\nu}k^\nu=0.$$

Residual gauge freedom allows the further conditions

$$u^\mu A_{\mu\nu}=0, \qquad A^\mu{}_\mu=0,$$

so the physical wave has only transverse-traceless components.

### G
The Hamiltonian density is nonnegative for the radiative modes:

$$\mathcal H \propto \dot h^{TT}_{ij}\dot h^{TT}_{ij}\ge 0.$$

So the tensor theory avoids the negative-energy problem of the vector theory.

### H
The particle stress-energy tensor is not conserved in flat-space form once the gravitational force acts on matter, so the coupled system demands a source with

$$T^{\mu\nu}{}_{,\nu}=0$$

that ordinary gravitating matter does not satisfy. The field equations and particle equations are therefore internally inconsistent as an exact flat-spacetime theory.

## Bottom Line
The scalar theory gives no light bending, the vector theory gives negative-energy waves, and the symmetric tensor theory comes closest to the truth but still fails as an exact flat-spacetime theory. That failure is what forces the geometric move to curved spacetime.
