**Quaternions and the Exponential Map: A Rigorous Introduction**

**Generated March 20, 2026**

**Abstract**  
A concise yet precise reference for graduate-level mathematics. Prepared with attention to algebraic structure, analytic properties, and geometric interpretation.

**1. The Quaternion Algebra ℍ**  

The quaternions ℍ, discovered by William Rowan Hamilton in 1843, form a four-dimensional normed division algebra over the reals that properly extends the complex numbers ℂ. Every quaternion admits a unique decomposition  

$$ q = a + bi + cj + dk, $$  
$$ a, b, c, d \in \mathbb{R}, $$  

where the basis elements satisfy the fundamental relations  

$$ i^2 = j^2 = k^2 = -1, $$  
$$ ij = k, $$  
$$ jk = i, $$  
$$ ki = j, $$  

and the anticommutation rules for reverse order:  

$$ ji = -k, $$  
$$ kj = -i, $$  
$$ ik = -j, $$  
$$ ijk = -1. $$  

These rules are most compactly expressed by the multiplication table  

$ \begin{matrix} 
 · & 1   & i   & j   & k  \\
  1 & 1   & i   & j   & k \\
  i & i   & -1  & k   & -j \\
  j & j   & -k  & -1  & i  \\
  k & k   & j   & -i  & -1
\end{matrix}. $ 




It is convenient to write $ q = a + \mathbf{v} $ where $ \mathbf{v} = bi + cj + dk $ is the pure vector part (identifiable with $ \mathbb{R}^3 $) and $ a = \mathrm{Re}(q) $ is the scalar part. Quaternion multiplication is bilinear and distributive but non-commutative. Nevertheless, ℍ is a division ring: every nonzero quaternion possesses a unique multiplicative inverse.  

The conjugate of $ q = a + \mathbf{v} $ is $ \bar{q} = a - \mathbf{v} $. The norm (Euclidean modulus) is  

$$ |q| = \sqrt{\bar{q}q} = \sqrt{a^2 + b^2 + c^2 + d^2} = \sqrt{a^2 + |\mathbf{v}|^2}. $$  

Key algebraic identities follow immediately:  
• $ \bar{q}q = |q|^2 $ (real and positive),  
• $ |pq| = |p||q| $ (multiplicative norm),  
• $ \overline{pq} = \bar{q}\bar{p} $.  

The unit quaternions $ \mathbb{S}^3 = \{q \in \mathbb{H} : |q| = 1\} $ form a Lie group under multiplication, diffeomorphic to the 3-sphere, and double-cover the rotation group SO(3) via the map $ q \mapsto (\mathbf{v} \mapsto q\mathbf{v}\bar{q}) $ for pure vectors $ \mathbf{v} $.

**2. The Exponential Function on ℝ and ℂ**  

The real exponential function exp : ℝ → ℝ⁺ is defined by any of the following equivalent characterizations (all of which extend naturally to normed algebras):  

1. Power series (convergent everywhere):  
$$ e^x = \sum_{n=0}^\infty \frac{x^n}{n!}. $$  

2. Differential equation:  
$$ f'(x) = f(x), \quad f(0) = 1. $$  

3. Limit definition:  
$$ e^x = \lim_{n\to\infty} \left(1 + \frac{x}{n}\right)^n. $$  

Its fundamental property is the addition theorem:  
$$ e^{x+y} = e^x e^y \quad \forall x, y \in \mathbb{R}. $$  

The complex exponential inherits the same power series and satisfies Euler’s formula:  
$$ e^{i\theta} = \cos\theta + i\sin\theta, $$  
which yields the polar representation $ e^{a+bi} = e^a(\cos b + i\sin b) $. The modulus identity $ |e^z| = e^{\mathrm{Re}(z)} $ holds for $ z \in \mathbb{C} $.

**3. The Quaternion Exponential $ e^q $**  

Because ℍ is a complete normed algebra (Banach algebra), the power series  

$$ \exp(q) := \sum_{n=0}^\infty \frac{q^n}{n!} $$  

converges absolutely for every $ q \in \mathbb{H} $ in the quaternion norm. We denote the result by $ e^q $.

**3.1 Closed-Form Expression**  

Decompose $ q = a + \mathbf{v} $ with $ a \in \mathbb{R} $ and pure vector $ \mathbf{v} $. The scalar and vector parts commute, so  

$$ e^q = e^{a+\mathbf{v}} = e^a e^\mathbf{v}. $$  

For the pure-vector exponential, note that $ \mathbf{v}^2 = -|\mathbf{v}|^2 $ (a real scalar). Let $ \theta = |\mathbf{v}| $. If $ \theta = 0 $, then $ e^\mathbf{v} = 1 $. Otherwise the power series reduces exactly as in the complex case:  

$$ e^\mathbf{v} = \sum_{k=0}^\infty \frac{\mathbf{v}^{2k}}{(2k)!} + \sum_{k=0}^\infty \frac{\mathbf{v}^{2k+1}}{(2k+1)!}. $$  

The even powers are scalar multiples of 1, the odd powers are multiples of the unit vector $ \mathbf{u} = \mathbf{v}/\theta $. Substituting the Taylor series for cosine and sine yields the Euler–Rodrigues formula:  

$$ e^\mathbf{v} = \cos\theta + \frac{\mathbf{v}}{\theta}\sin\theta = \cos\theta + \mathbf{u}\sin\theta. $$  

Therefore the full quaternion exponential is  

$$ e^q = e^a \left( \cos\theta + \frac{\mathbf{v}}{\theta}\sin\theta \right), \quad \theta = |\mathbf{v}| = \sqrt{b^2 + c^2 + d^2}. $$  

When $ a = 0 $ and $ \theta \neq 0 $, $ e^q $ is a unit quaternion representing a rotation by angle $ \theta $ about the axis $ \mathbf{u} $.

**3.2 Analytic Properties**  
• Modulus identity: $ |e^q| = e^a = e^{\mathrm{Re}(q)} $ (inherited from the power series and the multiplicative norm).  
• Inverse: $ (e^q)^{-1} = e^{-q} $.  
• Differentiation: The map $ q \mapsto e^q $ is smooth (in fact real-analytic) on $ \mathbb{H} \cong \mathbb{R}^4 $; its differential at the origin is the identity.  
• Lie-group exponential: The exponential map exp : Im(ℍ) → 𝕊³ (where Im(ℍ) is the 3-dimensional space of pure quaternions) is the exponential map of the Lie group 𝕊³ with respect to its bi-invariant metric.

**3.3 Comparison with the Complex Case**  

When $ c = d = 0 $, the formula collapses precisely to the complex exponential $ e^{a+bi} $. The non-commutativity of ℍ does not obstruct the derivation because the scalar $ a $ commutes with $ \mathbf{v} $ and all powers of $ \mathbf{v} $ remain in the real span\{1, $\mathbf{v}$\}, which is isomorphic to ℂ.  

This exposition establishes the quaternion exponential as a natural, rigorously justified extension of the classical exponential function, preserving all essential analytic and geometric features while opening the door to applications in 3-D rotations, rigid-body dynamics, computer graphics, and the representation theory of SO(3).

**4. Setup and Closed-Form Expression**  

Let $ q = a + \mathbf{v} $ where $ \mathbf{v} = bi + cj + dk \in \mathrm{Im}(\mathbb{H}) $ and $ \theta = |\mathbf{v}| = \sqrt{b^2 + c^2 + d^2} $. The quaternion exponential is  

$$ e^q = e^a \left( \cos\theta + \frac{\mathbf{v}}{\theta}\sin\theta \right). $$  

Denote $ A = e^a $ and the unit vector $ \hat{\mathbf{u}} = \mathbf{v}/\theta $ (with $ \hat{u}_b = b/\theta $, etc.). The four real components of $ p = e^q $ are  

$$ p_0 = A \cos\theta, $$  
$$ p_b = A \sin\theta \cdot \hat{u}_b, $$  
$$ p_c = A \sin\theta \cdot \hat{u}_c, $$  
$$ p_d = A \sin\theta \cdot \hat{u}_d. $$  

We work in the open set $ \theta > 0 $; the case $ \theta = 0 $ reduces to the real exponential $ e^a $ with trivial Jacobian.

**5. The Jacobian Matrix**  

The map $ f : \mathbb{R}^4 \to \mathbb{R}^4 $, $ q \mapsto e^q $, is real-analytic. Its Jacobian $ J $ is  

$ J = \begin{pmatrix} 
\frac{\partial p_0}{\partial a} & \frac{\partial p_0}{\partial b} & \frac{\partial p_0}{\partial c} & \frac{\partial p_0}{\partial d} \\ 
\frac{\partial p_b}{\partial a} & \frac{\partial p_b}{\partial b} & \frac{\partial p_b}{\partial c} & \frac{\partial p_b}{\partial d} \\ 
\frac{\partial p_c}{\partial a} & \frac{\partial p_c}{\partial b} & \frac{\partial p_c}{\partial c} & \frac{\partial p_c}{\partial d} \\ 
\frac{\partial p_d}{\partial a} & \frac{\partial p_d}{\partial b} & \frac{\partial p_d}{\partial c} & \frac{\partial p_d}{\partial d} 
\end{pmatrix}. $

**5.1 Building-Block Derivatives**  

1. Scalar exponential:  
$$ \frac{\partial A}{\partial a} = A, \quad \frac{\partial A}{\partial b} = \frac{\partial A}{\partial c} = \frac{\partial A}{\partial d} = 0. $$  

2. Angle $ \theta $:  
$$ \frac{\partial \theta}{\partial a} = 0, \quad \frac{\partial \theta}{\partial b} = \frac{b}{\theta}, \quad \frac{\partial \theta}{\partial c} = \frac{c}{\theta}, \quad \frac{\partial \theta}{\partial d} = \frac{d}{\theta}. $$  

3. Unit-vector derivatives (zero w.r.t. a):  
$$ \frac{\partial \hat{u}_b}{\partial b} = \frac{\theta^2 - b^2}{\theta^3} = \frac{c^2 + d^2}{\theta^3}, $$  
$$ \frac{\partial \hat{u}_b}{\partial c} = -\frac{bc}{\theta^3}, \quad \frac{\partial \hat{u}_b}{\partial d} = -\frac{bd}{\theta^3}, $$  
and cyclically for $ \hat{u}_c $ and $ \hat{u}_d $ (the orthogonal projection onto the tangent space of the unit sphere).

**5.2 General Entries of the Jacobian**  

For the real-part row ($ p_0 $):  
$$ \frac{\partial p_0}{\partial a} = A \cos\theta, $$  
$$ \frac{\partial p_0}{\partial \alpha} = -A \sin\theta \cdot \frac{\partial \theta}{\partial \alpha} \quad (\alpha \in \{b, c, d\}). $$  

For a vector component, e.g., $ p_b $:  
$$ \frac{\partial p_b}{\partial a} = A \sin\theta \cdot \hat{u}_b, $$  
$$ \frac{\partial p_b}{\partial \alpha} = A \cos\theta \cdot \frac{\partial \theta}{\partial \alpha} \cdot \hat{u}_b + A \sin\theta \cdot \frac{\partial \hat{u}_b}{\partial \alpha} \quad (\alpha \in \{b, c, d\}). $$  

The rows for $ p_c $ and $ p_d $ follow by cyclic permutation of the indices b, c, d. Every entry of $ J $ is obtained by substituting the building blocks above. The matrix is block-structured: the first column is simple (only the $ A \cos\theta $ and $ A \sin\theta \cdot \hat{\mathbf{u}} $ terms), while the 3 × 3 lower-right block combines a scaled projection with the spherical Jacobian of $ \hat{\mathbf{u}} $.

**6. Remarks and Special Cases**  

When $ \theta = 0 $, $ e^q = e^a $ (real) and $ J $ reduces to diag($ e^a $, 0, 0, 0). The full Jacobian is smooth everywhere (including the origin) because the power series converges uniformly. This Jacobian is the differential of the exponential map exp : Im(ℍ) → 𝕊³ when $ a = 0 $, and it appears naturally in:  
- gradient-based optimization on the 3-sphere,  
- attitude estimation (e.g., IMU fusion),  
- Lie-group methods for rigid-body dynamics.  

In contrast to the Jacobian of $ e^{q^2} $, there is no quadratic coupling between the scalar and vector parts, making symbolic or numerical evaluation significantly cheaper.  

The construction is complete and ready for implementation in any computer-algebra system. Substituting the explicit building blocks yields the full 4 × 4 matrix in closed form.

**7. Component Definitions**  

Define the multiplier  
$$ A = \cosh\omega + \sinh\omega = e^\omega. $$  

The four trigonometric components (collected after quaternion multiplication) are  

$$ a = \cos\theta \cos\phi \cos\rho - \sin\theta \sin\phi \sin\rho, $$  
$$ b = \sin\theta \cos\phi \cos\rho + \cos\theta \sin\phi \sin\rho, $$  
$$ c = \cos\theta \sin\phi \cos\rho - \sin\theta \cos\phi \sin\rho, $$  
$$ d = \cos\theta \cos\phi \sin\rho + \sin\theta \sin\phi \cos\rho. $$  

The map $ (\omega, \theta, \phi, \rho) \mapsto (x^0, x^1, x^2, x^3) $ is then  

$$ x^0 = Aa, \quad x^1 = Ab, \quad x^2 = Ac, \quad x^3 = Ad. $$

**8. The Jacobian Matrix**  

The Jacobian $ K $ is the 4 × 4 matrix  

$ K = \begin{pmatrix} 
\frac{\partial x^0}{\partial \omega} & \frac{\partial x^0}{\partial \theta} & \frac{\partial x^0}{\partial \phi} & \frac{\partial x^0}{\partial \rho} \\ 
\frac{\partial x^1}{\partial \omega} & \frac{\partial x^1}{\partial \theta} & \frac{\partial x^1}{\partial \phi} & \frac{\partial x^1}{\partial \rho} \\ 
\frac{\partial x^2}{\partial \omega} & \frac{\partial x^2}{\partial \theta} & \frac{\partial x^2}{\partial \phi} & \frac{\partial x^2}{\partial \rho} \\ 
\frac{\partial x^3}{\partial \omega} & \frac{\partial x^3}{\partial \theta} & \frac{\partial x^3}{\partial \phi} & \frac{\partial x^3}{\partial \rho} 
\end{pmatrix}. $

**8.1 Column ∂/∂ω (multiplier A)**  

Since $ \partial A/\partial \omega = A $ and the trigonometric components are independent of $ \omega $,  

$$ \frac{\partial x^0}{\partial \omega} = Aa, \quad \frac{\partial x^1}{\partial \omega} = Ab, \quad \frac{\partial x^2}{\partial \omega} = Ac, \quad \frac{\partial x^3}{\partial \omega} = Ad. $$

**8.2 Column ∂/∂θ**  

The multiplier A is independent of θ, so each entry is A times the derivative of the corresponding trigonometric component:  

$$ \frac{\partial x^0}{\partial \theta} = A (-\sin\phi \sin\rho \cos\theta - \sin\theta \cos\phi \cos\rho), $$  
$$ \frac{\partial x^1}{\partial \theta} = A (-\sin\phi \sin\rho \sin\theta + \cos\phi \cos\rho \cos\theta), $$  
$$ \frac{\partial x^2}{\partial \theta} = A (-\sin\phi \sin\theta \cos\rho - \sin\rho \cos\phi \cos\theta), $$  
$$ \frac{\partial x^3}{\partial \theta} = A (\sin\phi \cos\rho \cos\theta - \sin\rho \sin\theta \cos\phi). $$

**8.3 Column ∂/∂ϕ**  

Again, A is constant with respect to ϕ:  

$$ \frac{\partial x^0}{\partial \phi} = A (-\sin\phi \cos\rho \cos\theta - \sin\rho \sin\theta \cos\phi), $$  
$$ \frac{\partial x^1}{\partial \phi} = A (-\sin\phi \sin\theta \cos\rho + \sin\rho \cos\phi \cos\theta), $$  
$$ \frac{\partial x^2}{\partial \phi} = A (\sin\phi \sin\rho \sin\theta + \cos\phi \cos\rho \cos\theta), $$  
$$ \frac{\partial x^3}{\partial \phi} = A (-\sin\phi \sin\rho \cos\theta + \sin\theta \cos\phi \cos\rho). $$

**8.4 Column ∂/∂ρ**  

Finally,  

$$ \frac{\partial x^0}{\partial \rho} = A (-\sin\phi \sin\theta \cos\rho - \sin\rho \cos\phi \cos\theta), $$  
$$ \frac{\partial x^1}{\partial \rho} = A (\sin\phi \cos\rho \cos\theta - \sin\rho \sin\theta \cos\phi), $$  
$$ \frac{\partial x^2}{\partial \rho} = A (-\sin\phi \sin\rho \cos\theta - \sin\theta \cos\phi \cos\rho), $$  
$$ \frac{\partial x^3}{\partial \rho} = A (-\sin\phi \sin\rho \sin\theta + \cos\phi \cos\rho \cos\theta). $$

**9. Remarks**  

Every entry is now in closed form. The ω-column is proportional to the components themselves (as expected from the scalar multiplier). The angular columns consist of A times the natural trigonometric derivatives of the composite rotation product. This Jacobian is smooth everywhere and can be used directly for:  
- gradient-based optimization in these coordinates,  
- volume-form computations on the associated chart of 𝕊³,  
- linearization of flows under the product parametrization.  

In contrast to the classical $ e^q $ Jacobian (which collapses the three imaginary directions to a single axis), this version retains full coupling among θ, ϕ, ρ. The expressions above were obtained by direct differentiation of the trigonometric components and algebraic simplification; they match the skeleton shown on pages 2–5 of the attached draft once the partials are evaluated.  

This completes the full Jacobian exactly as requested, ready for symbolic or numerical implementation.

**10. Setup and Computation of $ q^2 $**  

Let $ q = a + bi + cj + dk \in \mathbb{H} $ with $ a, b, c, d \in \mathbb{R} $. Write $ q = a + \mathbf{v} $ where $ \mathbf{v} = bi + cj + dk $ is the pure vector part and $ \rho = |\mathbf{v}| = \sqrt{b^2 + c^2 + d^2} $. Quaternion multiplication yields  

$$ q^2 = (a + \mathbf{v})^2 = a^2 + 2a\mathbf{v} + \mathbf{v}^2 = (a^2 - \rho^2) + 2a\mathbf{v}, $$  
since $ \mathbf{v}^2 = -|\mathbf{v}|^2 $. Define the scalar and vector parts of $ q^2 $:  

$$ r = a^2 - \rho^2, \quad \mathbf{w} = 2a\mathbf{v}. $$  

We work in the open set where $ a > 0 $ and $ \rho > 0 $ (the case $ a < 0 $ follows by sign adjustment on the unit vector; the loci $ a = 0 $ or $ \rho = 0 $ are handled by the power series directly). Then  

$$ \theta = |\mathbf{w}| = 2a\rho. $$

**11. Closed-Form Expression for $ e^{q^2} $**  

The quaternion exponential is  

$$ e^{q^2} = e^r e^\mathbf{w} = e^r \left( \cos\theta + \frac{\mathbf{w}}{\theta}\sin\theta \right). $$  

Because $ \mathbf{w}/\theta = \mathbf{v}/\rho $, the unit vector $ \hat{\mathbf{u}} = \mathbf{v}/\rho $ depends only on the direction of $ \mathbf{v} $. Let $ A = e^r $. The four real components of $ p = e^{q^2} $ are  

$$ p_0 = A \cos\theta, $$  
$$ p_b = A \sin\theta \cdot \frac{b}{\rho}, $$  
$$ p_c = A \sin\theta \cdot \frac{c}{\rho}, $$  
$$ p_d = A \sin\theta \cdot \frac{d}{\rho}. $$  

Equivalently,  

$$ e^{q^2} = A \bigl( \cos\theta + \hat{u}_b \sin\theta \, i + \hat{u}_c \sin\theta \, j + \hat{u}_d \sin\theta \, k \bigr), $$  
where $ \hat{u}_b = b/\rho $, etc. When $ a = 0 $ or $ \rho = 0 $, $ \theta = 0 $ and $ e^{q^2} = e^{a^2} $ (real).

**12. The Jacobian Matrix**  

The map $ f : \mathbb{R}^4 \to \mathbb{R}^4 $, $ q \mapsto e^{q^2} $, is real-analytic on the domain $ a > 0 $, $ \rho > 0 $. Its Jacobian $ J $ is the 4 × 4 matrix  

$ J = \begin{pmatrix} 
\frac{\partial p_0}{\partial a} & \frac{\partial p_0}{\partial b} & \frac{\partial p_0}{\partial c} & \frac{\partial p_0}{\partial d} \\ 
\frac{\partial p_b}{\partial a} & \frac{\partial p_b}{\partial b} & \frac{\partial p_b}{\partial c} & \frac{\partial p_b}{\partial d} \\ 
\frac{\partial p_c}{\partial a} & \frac{\partial p_c}{\partial b} & \frac{\partial p_c}{\partial c} & \frac{\partial p_c}{\partial d} \\ 
\frac{\partial p_d}{\partial a} & \frac{\partial p_d}{\partial b} & \frac{\partial p_d}{\partial c} & \frac{\partial p_d}{\partial d} 
\end{pmatrix}. $

**12.1 Building-Block Derivatives**  

1. Scalar exponential:  
$$ \frac{\partial A}{\partial \alpha} = A \cdot \frac{\partial r}{\partial \alpha}, \quad \text{where} \quad \frac{\partial r}{\partial a} = 2a, \quad \frac{\partial r}{\partial b} = -2b, \quad \frac{\partial r}{\partial c} = -2c, \quad \frac{\partial r}{\partial d} = -2d. $$  

2. Angle:  
$$ \frac{\partial \theta}{\partial a} = 2\rho, \quad \text{and for the vector variables} \quad \frac{\partial \theta}{\partial b} = \frac{2ab}{\rho}, \quad \frac{\partial \theta}{\partial c} = \frac{2ac}{\rho}, \quad \frac{\partial \theta}{\partial d} = \frac{2ad}{\rho}. $$  

3. Unit-vector derivatives (zero w.r.t. a):  
$$ \frac{\partial \hat{u}_b}{\partial b} = \frac{\rho^2 - b^2}{\rho^3} = \frac{c^2 + d^2}{\rho^3}, $$  
$$ \frac{\partial \hat{u}_b}{\partial c} = -\frac{bc}{\rho^3}, \quad \frac{\partial \hat{u}_b}{\partial d} = -\frac{bd}{\rho^3}, $$  
and cyclically for $ \hat{u}_c $ and $ \hat{u}_d $ (the standard tangent-space projection on the sphere).

**12.2 General Entries of the Jacobian**  

For the real-part row ($ p_0 $):  
$$ \frac{\partial p_0}{\partial \alpha} = \frac{\partial A}{\partial \alpha} \cos\theta - A \sin\theta \cdot \frac{\partial \theta}{\partial \alpha}. $$  

For a vector component, e.g., $ p_b $:  
$$ \frac{\partial p_b}{\partial \alpha} = \frac{\partial A}{\partial \alpha} (\sin\theta \cdot \hat{u}_b) + A \cos\theta \cdot \frac{\partial \theta}{\partial \alpha} \cdot \hat{u}_b + A \sin\theta \cdot \frac{\partial \hat{u}_b}{\partial \alpha}. $$  

The rows for $ p_c $ and $ p_d $ follow by cyclic permutation of the indices b, c, d. Every entry of $ J $ is obtained by substituting the building blocks above. The resulting matrix is considerably more intricate than the Jacobian of the plain map $ q \mapsto e^q $ because of (i) the quadratic dependence of $ r $ on all four variables, (ii) the multiplicative coupling between $ a $ and $ \rho $ inside $ \theta $, and (iii) the non-trivial spherical derivatives of $ \hat{\mathbf{u}} $ with respect to b, c, d.

**13. Remarks and Special Cases**  

When $ \rho = 0 $ or $ a = 0 $, $ \theta = 0 $ and the map collapses to a real scalar exponential; the Jacobian reduces to a diagonal form obtainable from the power series. At these loci the function remains $ C^\infty $. This Jacobian appears naturally in gradient-based optimization over ℍ (e.g., minimizing loss functions of the form Re($ e^{q^2} $)) and in the linearization of flows on the Lie group 𝕊³. The construction extends immediately to the general case $ a < 0 $ by replacing $ \theta = 2|a|\rho $ and $ \hat{\mathbf{u}} = \mathrm{sign}(a) \cdot \mathbf{v}/\rho $, with the corresponding sign adjustment in the partial derivatives of $ \theta $ and $ \hat{\mathbf{u}} $.  

This exposition provides a complete, ready-to-implement recipe for the Jacobian of $ e^{q^2} $. Symbolic computation (SymPy, Mathematica, etc.) can expand any specific entry in seconds using the building blocks given above.

**14. Component Definitions**  

Let $ \rho = \sqrt{b^2 + c^2 + d^2} $ (assume $ \rho > 0 $) and work in the region $ a > 0 $. Then  

$$ r = a^2 - \rho^2, \quad \theta = 2a\rho, \quad A = e^r. $$  

Let $ \mathbf{u} = (b/\rho, c/\rho, d/\rho) $ be the unit vector in the direction of the vector part. The four real components of $ p = e^{q^2} $ are  

$$ p_0 = A \cos\theta, $$  
$$ p_b = A \sin\theta \cdot \frac{b}{\rho}, $$  
$$ p_c = A \sin\theta \cdot \frac{c}{\rho}, $$  
$$ p_d = A \sin\theta \cdot \frac{d}{\rho}. $$

**15. The Jacobian Matrix**  

The Jacobian $ J $ (with respect to variables a, b, c, d) is  

$ J = \begin{pmatrix} 
\frac{\partial p_0}{\partial a} & \frac{\partial p_0}{\partial b} & \frac{\partial p_0}{\partial c} & \frac{\partial p_0}{\partial d} \\ 
\frac{\partial p_b}{\partial a} & \frac{\partial p_b}{\partial b} & \frac{\partial p_b}{\partial c} & \frac{\partial p_b}{\partial d} \\ 
\frac{\partial p_c}{\partial a} & \frac{\partial p_c}{\partial b} & \frac{\partial p_c}{\partial c} & \frac{\partial p_c}{\partial d} \\ 
\frac{\partial p_d}{\partial a} & \frac{\partial p_d}{\partial b} & \frac{\partial p_d}{\partial c} & \frac{\partial p_d}{\partial d} 
\end{pmatrix}. $

**15.1 Column ∂/∂a**  

$$ \frac{\partial p_0}{\partial a} = 2A (a \cos\theta - \rho \sin\theta), $$  
$$ \frac{\partial p_b}{\partial a} = 2A \cdot \frac{b}{\rho} (a \sin\theta + \rho \cos\theta), $$  
$$ \frac{\partial p_c}{\partial a} = 2A \cdot \frac{c}{\rho} (a \sin\theta + \rho \cos\theta), $$  
$$ \frac{\partial p_d}{\partial a} = 2A \cdot \frac{d}{\rho} (a \sin\theta + \rho \cos\theta). $$

**15.2 Column ∂/∂b**  

$$ \frac{\partial p_0}{\partial b} = -2Ab \cos\theta - 2Aa \frac{b}{\rho} \sin\theta, $$  
$$ \frac{\partial p_b}{\partial b} = A \Bigl[ -2\frac{b}{\rho} \sin\theta + 2a \frac{b}{\rho} \cdot \frac{b}{\rho} \cos\theta + \sin\theta \cdot \frac{c^2 + d^2}{\rho^3} \Bigr], $$  
$$ \frac{\partial p_c}{\partial b} = A \Bigl[ -2\frac{b}{\rho} \cdot \frac{c}{\rho} \sin\theta + 2a \frac{b}{\rho} \cdot \frac{c}{\rho} \cos\theta - \sin\theta \cdot \frac{bc}{\rho^3} \Bigr], $$  
$$ \frac{\partial p_d}{\partial b} = A \Bigl[ -2\frac{b}{\rho} \cdot \frac{d}{\rho} \sin\theta + 2a \frac{b}{\rho} \cdot \frac{d}{\rho} \cos\theta - \sin\theta \cdot \frac{bd}{\rho^3} \Bigr]. $$

**15.3 Column ∂/∂c (cyclic from b)**  

$$ \frac{\partial p_0}{\partial c} = -2Ac \cos\theta - 2Aa \frac{c}{\rho} \sin\theta, $$  
$$ \frac{\partial p_b}{\partial c} = A \Bigl[ -2\frac{c}{\rho} \cdot \frac{b}{\rho} \sin\theta + 2a \frac{c}{\rho} \cdot \frac{b}{\rho} \cos\theta - \sin\theta \cdot \frac{bc}{\rho^3} \Bigr], $$  
$$ \frac{\partial p_c}{\partial c} = A \Bigl[ -2\frac{c}{\rho} \cdot \frac{c}{\rho} \sin\theta + 2a \frac{c}{\rho} \cdot \frac{c}{\rho} \cos\theta + \sin\theta \cdot \frac{b^2 + d^2}{\rho^3} \Bigr], $$  
$$ \frac{\partial p_d}{\partial c} = A \Bigl[ -2\frac{c}{\rho} \cdot \frac{d}{\rho} \sin\theta + 2a \frac{c}{\rho} \cdot \frac{d}{\rho} \cos\theta - \sin\theta \cdot \frac{cd}{\rho^3} \Bigr]. $$

**15.4 Column ∂/∂d (cyclic from b)**  

$$ \frac{\partial p_0}{\partial d} = -2Ad \cos\theta - 2Aa \frac{d}{\rho} \sin\theta, $$  
$$ \frac{\partial p_b}{\partial d} = A \Bigl[ -2\frac{d}{\rho} \cdot \frac{b}{\rho} \sin\theta + 2a \frac{d}{\rho} \cdot \frac{b}{\rho} \cos\theta - \sin\theta \cdot \frac{bd}{\rho^3} \Bigr], $$  
$$ \frac{\partial p_c}{\partial d} = A \Bigl[ -2\frac{d}{\rho} \cdot \frac{c}{\rho} \sin\theta + 2a \frac{d}{\rho} \cdot \frac{c}{\rho} \cos\theta - \sin\theta \cdot \frac{cd}{\rho^3} \Bigr], $$  
$$ \frac{\partial p_d}{\partial d} = A \Bigl[ -2\frac{d}{\rho} \cdot \frac{d}{\rho} \sin\theta + 2a \frac{d}{\rho} \cdot \frac{d}{\rho} \cos\theta + \sin\theta \cdot \frac{b^2 + c^2}{\rho^3} \Bigr]. $$

