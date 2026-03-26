# Chapter 8 Exercises: Differential Geometry

## Exercise 8.1: Practice with Tensor Algebra

Take inertial coordinates $(t,x,y,z)$ and spherical coordinates

$$x=r\sin\theta\cos\phi,\quad y=r\sin\theta\sin\phi,\quad z=r\cos\theta.$$

The coordinate basis is $\{e_t,e_r,e_\theta,e_\phi\}$, while the orthonormal noncoordinate basis is

$$e_{\hat 0}=e_t,\quad e_{\hat r}=e_r,\quad e_{\hat\theta}=r^{-1}e_\theta,\quad e_{\hat\phi}=(r\sin\theta)^{-1}e_\phi.$$

### (a)
At fixed $t,r$, the vectors $e_\theta$ and $e_\phi$ are tangent to increasing $\theta$ and $\phi$ directions on the sphere. The hatted vectors are the same directions but rescaled to unit length.

### (b)
The dual one-forms are

$$\omega^t=dt,\ \omega^r=dr,\ \omega^\theta=d\theta,\ \omega^\phi=d\phi,$$

and

$$\omega^{\hat 0}=dt,\quad \omega^{\hat r}=dr,\quad \omega^{\hat\theta}=r\,d\theta,\quad \omega^{\hat\phi}=r\sin\theta\,d\phi.$$

### (c)
The basis transformation from $(t,x,y,z)$ to $(t,r,\theta,\phi)$ is

$$
\begin{pmatrix}
e_t\\ e_r\\ e_\theta\\ e_\phi
\end{pmatrix}
=
\begin{pmatrix}
1&0&0&0\\
0&\sin\theta\cos\phi&\sin\theta\sin\phi&\cos\theta\\
0&r\cos\theta\cos\phi&r\cos\theta\sin\phi&-r\sin\theta\\
0&-r\sin\theta\sin\phi&r\sin\theta\cos\phi&0
\end{pmatrix}
\begin{pmatrix}
e_t\\ e_x\\ e_y\\ e_z
\end{pmatrix}.
$$

### (d)
This gives

$$g_{\alpha\beta}=\mathrm{diag}\!\left(-1,\,1,\,r^2,\,r^2\sin^2\theta\right),$$

with inverse

$$g^{\alpha\beta}=\mathrm{diag}\!\left(-1,\,1,\,r^{-2},\,(r^2\sin^2\theta)^{-1}\right).$$

### (e)
The hatted basis is orthonormal everywhere:

$$g_{\hat\alpha\hat\beta}=\eta_{\alpha\beta}.$$

Equivalently,

$$g=-\omega^{\hat0}\otimes\omega^{\hat0}+\omega^{\hat r}\otimes\omega^{\hat r}+\omega^{\hat\theta}\otimes\omega^{\hat\theta}+\omega^{\hat\phi}\otimes\omega^{\hat\phi}.$$

### (f)
For a scalar $f$,

$$\nabla f=-f_{,t}e_{\hat0}+f_{,r}e_{\hat r}+\frac1r f_{,\theta}e_{\hat\theta}+\frac1{r\sin\theta}f_{,\phi}e_{\hat\phi}.$$

### (g)
With the standard orientation,

$$\epsilon_{tr\theta\phi}=r^2\sin\theta,\qquad \epsilon_{\hat0\hat r\hat\theta\hat\phi}=+1,$$

and all other components follow by antisymmetry.

## Exercise 8.5: A Sheet of Paper in Polar Coordinates

For

$$ds^2=dr^2+r^2d\phi^2,$$

the only nonzero Christoffel symbols are

$$\Gamma^r_{\phi\phi}=-r,\qquad \Gamma^\phi_{r\phi}=\Gamma^\phi_{\phi r}=\frac1r.$$

The geodesic equations are

$$r''-r\phi'^2=0,\qquad \phi''+\frac{2}{r}r'\phi'=0,$$

so $r^2\phi'=\text{const}$ and the Cartesian combinations

$$x=r\cos\phi,\qquad y=r\sin\phi$$

obey $x''=y''=0$. Hence the geodesic is a uniformly parameterized straight line.

For the orthonormal basis

$$e_{\hat r}=e_r,\qquad e_{\hat\phi}=r^{-1}e_\phi,$$

the dual forms are

$$\omega^{\hat r}=dr,\qquad \omega^{\hat\phi}=r\,d\phi,$$

and the connection coefficients satisfy

$$\Gamma^{\hat\phi}{}_{\hat r\hat\phi}=0,\qquad \Gamma^{\hat\phi}{}_{\hat\phi\hat r}=\frac1r,\qquad \Gamma^{\hat r}{}_{\hat\phi\hat\phi}=-\frac1r.$$
