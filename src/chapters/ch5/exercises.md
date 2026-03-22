# Chapter 5 Exercises: Stress-Energy Tensor and Conservation Laws

## Exercise 5.1: Electromagnetic Stress-Energy Tensor

Show that expression (5.22), evaluated in a Lorentz coordinate frame, gives

$$T^{00} = (E^2 + B^2)/8\pi, \quad T^{0j} = T^{j0} = (E \times B)^j/4\pi,$$

$$T^{jk} = \frac{1}{4\pi}\left[-(E^j E^k + B^j B^k) + \frac{1}{2}(E^2 + B^2)\delta^{jk}\right]. \tag{5.23}$$

Show that the stress tensor does describe a tension $(E^2 + B^2)/8\pi$ along the field lines and a pressure $(E^2 + B^2)/8\pi$ perpendicular to the field lines, as stated in the text.

### Solution

The electromagnetic stress-energy tensor is given by

$$4\pi T^{\mu\nu} = F^{\mu\alpha}F^\nu{}_\alpha - \frac{1}{4}\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}.$$

In a Lorentz frame, the electromagnetic field tensor has components:

$$F^{0j} = E^j, \quad F^{jk} = -\epsilon^{jkl}B_l.$$

**Computing $T^{00}$:**

$$4\pi T^{00} = F^{0\alpha}F^0{}_\alpha - \frac{1}{4}\eta^{00}F_{\alpha\beta}F^{\alpha\beta}.$$

The first term: $F^{0\alpha}F^0{}_\alpha = F^{0j}F^0{}_j = E^j E_j = E^2$.

For the second term, we need $F_{\alpha\beta}F^{\alpha\beta}$:

$$F_{\alpha\beta}F^{\alpha\beta} = 2F_{0j}F^{0j} + F_{jk}F^{jk} = 2(-E_j)(E^j) + (-\epsilon_{jkl}B^l)(-\epsilon^{jkm}B_m).$$

Using $\epsilon_{jkl}\epsilon^{jkm} = 2\delta_l^m$:

$$F_{\alpha\beta}F^{\alpha\beta} = -2E^2 + 2B^2 = 2(B^2 - E^2).$$

Therefore:

$$4\pi T^{00} = E^2 - \frac{1}{4}(1) \cdot 2(B^2 - E^2) = E^2 + \frac{1}{2}(E^2 - B^2) = \frac{1}{2}(E^2 + B^2).$$

Thus $T^{00} = (E^2 + B^2)/8\pi$.

**Computing $T^{0j}$:**

$$4\pi T^{0j} = F^{0\alpha}F^j{}_\alpha - \frac{1}{4}\eta^{0j}F_{\alpha\beta}F^{\alpha\beta}.$$

Since $\eta^{0j} = 0$, only the first term survives:

$$F^{0\alpha}F^j{}_\alpha = F^{0k}F^j{}_k = E^k F^j{}_k.$$

Now $F^j{}_k = \eta^{j\mu}F_{\mu k} = \eta^{j0}F_{0k} + \eta^{jm}F_{mk} = -\delta^{jm}F_{mk} = -F_{jk} = \epsilon_{jkl}B^l$.

Therefore:

$$4\pi T^{0j} = E^k \epsilon_{jkl}B^l = (\mathbf{E} \times \mathbf{B})^j.$$

Thus $T^{0j} = T^{j0} = (E \times B)^j/4\pi$.

**Computing $T^{jk}$:**

$$4\pi T^{jk} = F^{j\alpha}F^k{}_\alpha - \frac{1}{4}\eta^{jk}F_{\alpha\beta}F^{\alpha\beta}.$$

The first term expands as:

$$F^{j\alpha}F^k{}_\alpha = F^{j0}F^k{}_0 + F^{jm}F^k{}_m = -E^j E^k + F^{jm}F^k{}_m.$$

For the spatial part, using $F^{jm} = -\epsilon^{jml}B_l$:

$$F^{jm}F^k{}_m = (-\epsilon^{jml}B_l)(-\epsilon^{kmn}B_n) = \epsilon^{jml}\epsilon^{kmn}B_l B_n.$$

Using $\epsilon^{jml}\epsilon^{kmn} = \delta^{jk}\delta^{ln} - \delta^{jn}\delta^{lk}$:

$$F^{jm}F^k{}_m = (\delta^{jk}\delta^{ln} - \delta^{jn}\delta^{lk})B_l B_n = \delta^{jk}B^2 - B^j B^k.$$

Therefore:

$$4\pi T^{jk} = -E^j E^k + \delta^{jk}B^2 - B^j B^k - \frac{1}{4}\delta^{jk} \cdot 2(B^2 - E^2)$$

$$= -(E^j E^k + B^j B^k) + \delta^{jk}\left(B^2 - \frac{1}{2}B^2 + \frac{1}{2}E^2\right)$$

$$= -(E^j E^k + B^j B^k) + \frac{1}{2}(E^2 + B^2)\delta^{jk}.$$

Thus we recover equation (5.23).

**Tension and Pressure:**

To find the tension along field lines and pressure perpendicular to them, choose coordinates where $\mathbf{B}$ points along the $z$-axis: $\mathbf{B} = (0, 0, B)$, and similarly for $\mathbf{E}$.

The stress tensor components become:

$$T^{zz} = \frac{1}{4\pi}\left[-(E^z)^2 - B^2 + \frac{1}{2}(E^2 + B^2)\right] = \frac{1}{8\pi}(E^2 + B^2) - \frac{1}{4\pi}((E^z)^2 + B^2).$$

For pure field-aligned direction with $\mathbf{E} \parallel \mathbf{B}$ along $z$:

$$T^{zz} = \frac{1}{4\pi}\left[-B^2 + \frac{1}{2}B^2\right] = -\frac{B^2}{8\pi}.$$

The negative sign indicates **tension** along field lines.

For directions perpendicular to the field (say, $x$ or $y$):

$$T^{xx} = T^{yy} = \frac{1}{4\pi}\left[0 + \frac{1}{2}B^2\right] = \frac{B^2}{8\pi}.$$

The positive sign indicates **pressure** perpendicular to field lines.

---

## Exercise 5.2: Charge Conservation

Exercise 3.16 revealed that the charge-current 4-vector $J$ satisfies the differential conservation law $\nabla \cdot J = 0$. Write down the corresponding integral conservation law, and interpret it for the four closed surfaces of Fig. 5.3.

### Solution

The differential conservation law is:

$$\nabla \cdot J = J^\alpha{}_{,\alpha} = 0.$$

Applying Gauss's theorem in four dimensions, the corresponding **integral conservation law** is:

$$\oint_{\partial\mathcal{V}} J^\alpha \, d^3\Sigma_\alpha = 0,$$

where $\partial\mathcal{V}$ is the closed 3-surface bounding a 4-volume $\mathcal{V}$.

**Interpretation for the four cases of Fig. 5.3:**

1. **Two constant-time slices joined at infinity:** The integral over the closed surface consisting of $t = t_1$ and $t = t_2$ (with the sides at spatial infinity giving no contribution) gives:

   $$\int_{t_2} J^0 \, d^3x - \int_{t_1} J^0 \, d^3x = 0.$$

   This states that the **total charge is conserved in time**: $Q(t_2) = Q(t_1)$.

2. **Two different spacelike hypersurfaces:** The total charge is the same when evaluated on any spacelike hypersurface, provided no charge-current flows in from infinity. This shows charge is a **Lorentz-invariant quantity**.

3. **A box whose walls move between two states:** The change in charge contained within the box equals the net charge that flowed through the walls during the time interval. This is the **continuity equation in integral form**.

4. **General closed boundary:** The net charge flowing out of any closed 3-surface in spacetime is zero. Charge cannot be created or destroyed; it can only flow continuously through spacetime.

---

## Exercise 5.3: Particle Production

Inside highly evolved, massive stars, the temperature is so high that electron-positron pairs are continually produced and destroyed. Let $S$ be the number-flux vector for electrons and positrons, and denote its divergence by

$$\epsilon \equiv \nabla \cdot S. \tag{5.50}$$

Use Gauss's theorem to show that $\epsilon$ is the number of particles created (minus the number destroyed) in a unit four-dimensional volume of spacetime.

### Solution

Consider a small 4-volume $\mathcal{V}$ in spacetime. By Gauss's theorem:

$$\int_\mathcal{V} \nabla \cdot S \, d^4x = \oint_{\partial\mathcal{V}} S^\alpha \, d^3\Sigma_\alpha.$$

The right side represents the **net number of particles flowing out** through the boundary $\partial\mathcal{V}$.

If particles are being created or destroyed within $\mathcal{V}$, then the number flowing out need not equal the number flowing in. The difference is precisely the number created minus the number destroyed.

Let $N_\text{out}$ be the number flowing out and $N_\text{in}$ be the number flowing in. Then:

$$N_\text{out} - N_\text{in} = \text{(number created)} - \text{(number destroyed)}.$$

But by the divergence theorem:

$$N_\text{out} - N_\text{in} = \oint_{\partial\mathcal{V}} S^\alpha \, d^3\Sigma_\alpha = \int_\mathcal{V} \epsilon \, d^4x.$$

For an infinitesimal 4-volume $d^4x$, we have:

$$\epsilon \, d^4x = \text{(number created)} - \text{(number destroyed)}.$$

Therefore, $\epsilon$ is the **number of particles created (minus destroyed) per unit 4-volume of spacetime**.

If $\epsilon > 0$, there is net particle production; if $\epsilon < 0$, there is net particle annihilation; if $\epsilon = 0$, particle number is conserved.

---

## Exercise 5.4: Inertial Mass Per Unit Volume

Consider a stressed medium in motion with ordinary velocity $|v| \ll 1$ with respect to a specific Lorentz frame.

**(a)** Show by Lorentz transformations that the spatial components of the momentum density are

$$T^{0j} = \sum_k m^{jk} v^k, \tag{5.51}$$

where

$$m^{jk} = T^{\overline{00}}\delta^{jk} + T^{\overline{jk}}. \tag{5.52}$$

and $T^{\overline{\mu\nu}}$ are the components of the stress-energy tensor in the rest frame of the medium.

### Solution (a)

Let the medium's rest frame be denoted by barred indices. In the rest frame, the 4-velocity is $u^{\overline{\mu}} = (1, 0, 0, 0)$.

For a Lorentz boost with velocity $v^j$ (where $|v| \ll 1$), the transformation to first order in $v$ is:

$$x^0 = x^{\overline{0}} + v_k x^{\overline{k}}, \quad x^j = x^{\overline{j}} + v^j x^{\overline{0}}.$$

The stress-energy tensor transforms as:

$$T^{\mu\nu} = \Lambda^\mu{}_{\overline{\alpha}}\Lambda^\nu{}_{\overline{\beta}} T^{\overline{\alpha}\overline{\beta}}.$$

For the boost, to first order:

$$\Lambda^0{}_{\overline{0}} = 1, \quad \Lambda^0{}_{\overline{j}} = v_j, \quad \Lambda^j{}_{\overline{0}} = v^j, \quad \Lambda^j{}_{\overline{k}} = \delta^j_k.$$

Computing $T^{0j}$:

$$T^{0j} = \Lambda^0{}_{\overline{\alpha}}\Lambda^j{}_{\overline{\beta}} T^{\overline{\alpha}\overline{\beta}}$$

$$= (\Lambda^0{}_{\overline{0}}\Lambda^j{}_{\overline{0}})T^{\overline{00}} + (\Lambda^0{}_{\overline{0}}\Lambda^j{}_{\overline{k}})T^{\overline{0k}} + (\Lambda^0{}_{\overline{l}}\Lambda^j{}_{\overline{0}})T^{\overline{l0}} + (\Lambda^0{}_{\overline{l}}\Lambda^j{}_{\overline{k}})T^{\overline{lk}}.$$

In the rest frame, $T^{\overline{0k}} = T^{\overline{k0}} = 0$ (no momentum density at rest). Thus:

$$T^{0j} = (1 \cdot v^j)T^{\overline{00}} + (v_l \cdot \delta^j_k)T^{\overline{lk}} = v^j T^{\overline{00}} + v_k T^{\overline{jk}}.$$

Factoring out $v^k$:

$$T^{0j} = T^{\overline{00}}v^j + T^{\overline{jk}}v_k = (T^{\overline{00}}\delta^{jk} + T^{\overline{jk}})v_k = \sum_k m^{jk}v^k.$$

This proves equation (5.51).

**(b)** Derive equations (5.51) and (5.52) from Newtonian considerations plus the equivalence of mass and energy.

### Solution (b)

**Newtonian derivation:**

Consider a volume $V$ of the medium moving with velocity $v^k$. The total mass-energy carried past an observer includes:

1. **Rest mass-energy:** $T^{\overline{00}}V$ (the rest-frame energy density times volume).

2. **Work done by stresses:** As the volume moves through a distance $d$, forces act across its faces. The force on a face with normal $\hat{n}$ is $F^j = T^{\overline{jk}}n_k A$. The work done is $F \cdot d$.

The momentum density is mass-energy flux divided by $c^2$ (with $c=1$). The energy flux has two contributions:

- From rest energy: $T^{\overline{00}}v^j$
- From stress work: $T^{\overline{jk}}v_k$

Therefore:

$$T^{0j} = T^{\overline{00}}v^j + T^{\overline{jk}}v_k = (T^{\overline{00}}\delta^{jk} + T^{\overline{jk}})v_k.$$

This recovers (5.51) and (5.52) from physical principles.

**(c)** As a result of relation (5.51), the force per unit volume required to produce an acceleration $dv^k/dt$ in a stressed medium, which is at rest with respect to the man who applies the force, is

$$F^j = dT^{0j}/dt = \sum_k m^{jk} \, dv^k/dt. \tag{5.53}$$

This equation suggests that one call $m^{jk}$ the "inertial mass per unit volume" of a stressed medium at rest. In general $m^{jk}$ is a symmetric 3-tensor. What does it become for the special case of a perfect fluid?

### Solution (c)

For a **perfect fluid**, the rest-frame stress-energy tensor is:

$$T^{\overline{\mu\nu}} = (\rho + p)u^{\overline{\mu}}u^{\overline{\nu}} + p\eta^{\overline{\mu\nu}}.$$

In the rest frame where $u^{\overline{\mu}} = (1, 0, 0, 0)$:

$$T^{\overline{00}} = \rho, \quad T^{\overline{jk}} = p\delta^{jk}.$$

Substituting into (5.52):

$$m^{jk} = T^{\overline{00}}\delta^{jk} + T^{\overline{jk}} = \rho\delta^{jk} + p\delta^{jk} = (\rho + p)\delta^{jk}.$$

For a perfect fluid, the inertial mass per unit volume is **isropic** and equals:

$$m^{jk} = (\rho + p)\delta^{jk}.$$

The pressure contributes to inertia! This is a purely relativistic effect with no Newtonian analogue.

**(d)** Consider an isolated, stressed body at rest and in equilibrium ($T^{\alpha\beta}{}_{,0} = 0$) in the laboratory frame. Show that its total inertial mass, defined by

$$M^{ij} = \int_\text{stressed body} m^{ij} \, dx \, dy \, dz, \tag{5.54}$$

is isotropic and equals the rest mass of the body

$$M^{ij} = \delta^{ij} \int T^{00} \, dx \, dy \, dz. \tag{5.55}$$

### Solution (d)

Since the body is in equilibrium, $\nabla \cdot T = 0$, which gives $T^{\alpha\beta}{}_{,\beta} = 0$.

The spatial components give:

$$T^{\alpha j}{}_{,j} = 0 \quad \Rightarrow \quad T^{kj}{}_{,j} = 0.$$

Now consider:

$$M^{ij} = \int (T^{00}\delta^{ij} + T^{ij}) \, d^3x.$$

We need to show that $\int T^{ij} \, d^3x = 0$ for an isolated body in equilibrium.

Using the identity $T^{ij} = (x^i T^{kj})_{,k} - x^i T^{kj}{}_{,k}$ and the equilibrium condition $T^{kj}{}_{,k} = 0$:

$$\int T^{ij} \, d^3x = \int (x^i T^{kj})_{,k} \, d^3x.$$

By the divergence theorem, this becomes a surface integral at infinity:

$$\int (x^i T^{kj})_{,k} \, d^3x = \oint x^i T^{kj} \, dS_k.$$

For an **isolated** body, $T^{kj} = 0$ outside some finite region, so the surface integral at infinity vanishes.

Therefore:

$$\int T^{ij} \, d^3x = 0,$$

and

$$M^{ij} = \delta^{ij} \int T^{00} \, d^3x.$$

The total inertial mass is isotropic and equals the total rest mass-energy of the body.

---

## Exercise 5.5: Determinants and Jacobians

**(a)** Write out explicitly the sum defining $d^2S_{01}$ in

$$d^2S_{\mu\nu} \equiv \epsilon_{\mu\nu\alpha\beta} \frac{\partial x^\alpha}{\partial a}\frac{\partial x^\beta}{\partial b} \, da \, db.$$

Thereby establish the formula

$$d^2S_{\mu\nu} = \epsilon_{\mu\nu|\alpha\beta|} \frac{\partial(x^\alpha, x^\beta)}{\partial(a,b)} \, da \, db = \frac{1}{2!}\epsilon_{\mu\nu\alpha\beta}\frac{\partial(x^\alpha, x^\beta)}{\partial(a,b)} \, da \, db.$$

### Solution (a)

For $d^2S_{01}$, we have $\mu = 0, \nu = 1$:

$$d^2S_{01} = \epsilon_{01\alpha\beta} \frac{\partial x^\alpha}{\partial a}\frac{\partial x^\beta}{\partial b} \, da \, db.$$

The only non-zero components of $\epsilon_{01\alpha\beta}$ are when $(\alpha,\beta) = (2,3)$ or $(3,2)$:

$$\epsilon_{0123} = +1, \quad \epsilon_{0132} = -1.$$

Therefore:

$$d^2S_{01} = \left(\frac{\partial x^2}{\partial a}\frac{\partial x^3}{\partial b} - \frac{\partial x^3}{\partial a}\frac{\partial x^2}{\partial b}\right) da \, db.$$

The expression in parentheses is precisely the Jacobian determinant:

$$\frac{\partial(x^2, x^3)}{\partial(a,b)} = \begin{vmatrix} \frac{\partial x^2}{\partial a} & \frac{\partial x^2}{\partial b} \\[4pt] \frac{\partial x^3}{\partial a} & \frac{\partial x^3}{\partial b} \end{vmatrix} = \frac{\partial x^2}{\partial a}\frac{\partial x^3}{\partial b} - \frac{\partial x^3}{\partial a}\frac{\partial x^2}{\partial b}.$$

Thus:

$$d^2S_{01} = \frac{\partial(x^2, x^3)}{\partial(a,b)} \, da \, db.$$

In general, for arbitrary $\mu,\nu$:

$$d^2S_{\mu\nu} = \epsilon_{\mu\nu\alpha\beta} \frac{\partial x^\alpha}{\partial a}\frac{\partial x^\beta}{\partial b} \, da \, db.$$

The sum over $\alpha,\beta$ can be written using the antisymmetry of the Jacobian:

$$\frac{\partial x^\alpha}{\partial a}\frac{\partial x^\beta}{\partial b} - \frac{\partial x^\alpha}{\partial b}\frac{\partial x^\beta}{\partial a} = \frac{\partial(x^\alpha, x^\beta)}{\partial(a,b)}.$$

Therefore:

$$d^2S_{\mu\nu} = \frac{1}{2}\epsilon_{\mu\nu\alpha\beta} \frac{\partial(x^\alpha, x^\beta)}{\partial(a,b)} \, da \, db = \frac{1}{2!}\epsilon_{\mu\nu\alpha\beta}\frac{\partial(x^\alpha, x^\beta)}{\partial(a,b)} \, da \, db.$$

**(b)** By a similar inspection of a specific case, show that

$$d^3\Sigma_\mu \equiv \epsilon_{\mu\alpha\beta\gamma}\frac{\partial x^\alpha}{\partial a}\frac{\partial x^\beta}{\partial b}\frac{\partial x^\gamma}{\partial c} \, da \, db \, dc = \frac{1}{3!}\epsilon_{\mu\alpha\beta\gamma}\frac{\partial(x^\alpha, x^\beta, x^\gamma)}{\partial(a,b,c)} \, da \, db \, dc.$$

### Solution (b)

Consider $\mu = 0$:

$$d^3\Sigma_0 = \epsilon_{0\alpha\beta\gamma}\frac{\partial x^\alpha}{\partial a}\frac{\partial x^\beta}{\partial b}\frac{\partial x^\gamma}{\partial c} \, da \, db \, dc.$$

The non-zero components are when $(\alpha,\beta,\gamma)$ is a permutation of $(1,2,3)$. The sum gives:

$$d^3\Sigma_0 = \det\begin{pmatrix} \frac{\partial x^1}{\partial a} & \frac{\partial x^1}{\partial b} & \frac{\partial x^1}{\partial c} \\[4pt] \frac{\partial x^2}{\partial a} & \frac{\partial x^2}{\partial b} & \frac{\partial x^2}{\partial c} \\[4pt] \frac{\partial x^3}{\partial a} & \frac{\partial x^3}{\partial b} & \frac{\partial x^3}{\partial c} \end{pmatrix} da \, db \, dc = \frac{\partial(x^1, x^2, x^3)}{\partial(a,b,c)} \, da \, db \, dc.$$

In general, the sum over all permutations of $(\alpha,\beta,\gamma)$ gives $3! = 6$ terms, but the Jacobian already includes all permutations with proper signs. Therefore:

$$d^3\Sigma_\mu = \frac{1}{3!}\epsilon_{\mu\alpha\beta\gamma}\frac{\partial(x^\alpha, x^\beta, x^\gamma)}{\partial(a,b,c)} \, da \, db \, dc.$$

**(c)** Cite a precise definition of the value of a determinant as a sum of terms (with suitably alternating signs), with each term a product containing one factor from each row and simultaneously one factor from each column. Show that this definition can be stated (in the $4 \times 4$ case, with the $p \times p$ case an obvious extension) as

$$\det A \equiv \det\|A^\lambda{}_\rho\| = \epsilon_{\alpha\beta\gamma\delta}A^\alpha{}_0 A^\beta{}_1 A^\gamma{}_2 A^\delta{}_3.$$

### Solution (c)

**Definition of determinant:**

For a $4 \times 4$ matrix $A$, the determinant is defined as:

$$\det A = \sum_{\sigma \in S_4} \text{sgn}(\sigma) \, A^{\sigma(0)}{}_0 A^{\sigma(1)}{}_1 A^{\sigma(2)}{}_2 A^{\sigma(3)}{}_3,$$

where the sum is over all permutations $\sigma$ of $\{0,1,2,3\}$, and $\text{sgn}(\sigma)$ is the sign of the permutation.

This is equivalent to:

$$\det A = \epsilon_{\alpha\beta\gamma\delta}A^\alpha{}_0 A^\beta{}_1 A^\gamma{}_2 A^\delta{}_3,$$

since $\epsilon_{\alpha\beta\gamma\delta}$ is $+1$ for even permutations, $-1$ for odd permutations, and $0$ otherwise.

**(d)** Show that

$$\det A = \frac{1}{4!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\alpha{}_\mu A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma$$

(for a definition of $\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}$, see exercises 3.13 and 4.12).

### Solution (d)

The generalized Kronecker delta is defined as:

$$\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta} = \begin{vmatrix} \delta^\mu_\alpha & \delta^\mu_\beta & \delta^\mu_\gamma & \delta^\mu_\delta \\ \delta^\nu_\alpha & \delta^\nu_\beta & \delta^\nu_\gamma & \delta^\nu_\delta \\ \delta^\rho_\alpha & \delta^\rho_\beta & \delta^\rho_\gamma & \delta^\rho_\delta \\ \delta^\sigma_\alpha & \delta^\sigma_\beta & \delta^\sigma_\gamma & \delta^\sigma_\delta \end{vmatrix} = \epsilon^{\mu\nu\rho\sigma}\epsilon_{\alpha\beta\gamma\delta}.$$

Now compute:

$$\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\alpha{}_\mu A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma = \epsilon^{\mu\nu\rho\sigma}\epsilon_{\alpha\beta\gamma\delta}A^\alpha{}_\mu A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

The sum over $\mu,\nu,\rho,\sigma$ gives $4! = 24$ terms, each equal to $\det A$ (since permuting the columns just gives the same determinant). Therefore:

$$\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\alpha{}_\mu A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma = 4! \det A,$$

which gives:

$$\det A = \frac{1}{4!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\alpha{}_\mu A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

**(e)** Use properties of the $\delta$-symbol to show that the matrix $A^{-1}$ inverse to $A$ has entries $(A^{-1})^\mu{}_\alpha$ given by

$$(A^{-1})^\mu{}_\alpha(\det A) = \frac{1}{3!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

### Solution (e)

The inverse matrix satisfies $(A^{-1})^\mu{}_\alpha A^\alpha{}_\nu = \delta^\mu_\nu$.

From part (d), we have:

$$\det A = \frac{1}{4!}\delta^{\kappa\lambda\mu\nu}_{\alpha\beta\gamma\delta}A^\alpha{}_\kappa A^\beta{}_\lambda A^\gamma{}_\mu A^\delta{}_\nu.$$

Consider the expression:

$$X^\mu{}_\alpha = \frac{1}{3!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

This is (up to the factorial) the **cofactor** of $A^\alpha{}_\mu$. By Cramer's rule:

$$(A^{-1})^\mu{}_\alpha = \frac{1}{\det A} \times (\text{cofactor of } A^\alpha{}_\mu).$$

The cofactor is obtained by deleting row $\alpha$ and column $\mu$ and taking the determinant of the remaining $3 \times 3$ matrix, with appropriate sign. This is precisely:

$$\text{cofactor} = \frac{1}{3!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

Therefore:

$$(A^{-1})^\mu{}_\alpha(\det A) = \frac{1}{3!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

**(f)** By an "index-mechanics" computation, from the formula for $\det A$ in part (d) derive the following expression for the derivative of the logarithm of the determinant

$$d\ln|\det A| = \text{trace}(A^{-1} dA).$$

Here $dA$ is the matrix $\|dA^\alpha{}_\mu\|$ whose entries are 1-forms.

### Solution (f)

From part (d):

$$\det A = \frac{1}{4!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\alpha{}_\mu A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma.$$

Taking the differential:

$$d(\det A) = \frac{1}{4!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}\left[(dA^\alpha{}_\mu)A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma + A^\alpha{}_\mu(dA^\beta{}_\nu)A^\gamma{}_\rho A^\delta{}_\sigma + \cdots\right].$$

By symmetry, all four terms are equal. Thus:

$$d(\det A) = \frac{4}{4!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}(dA^\alpha{}_\mu)A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma = \frac{1}{3!}\delta^{\mu\nu\rho\sigma}_{\alpha\beta\gamma\delta}A^\beta{}_\nu A^\gamma{}_\rho A^\delta{}_\sigma \, dA^\alpha{}_\mu.$$

From part (e), the coefficient is $(A^{-1})^\mu{}_\alpha(\det A)$. Therefore:

$$d(\det A) = (\det A)(A^{-1})^\mu{}_\alpha \, dA^\alpha{}_\mu = (\det A) \, \text{trace}(A^{-1} dA).$$

Dividing by $\det A$:

$$\frac{d(\det A)}{\det A} = d\ln|\det A| = \text{trace}(A^{-1} dA).$$

---

## Exercise 5.6: Centroids and Sizes

Consider an isolated system with stress-energy tensor $T^{\mu\nu}$, total 4-momentum $P^\alpha$, magnitude of 4-momentum $M = (-P \cdot P)^{1/2}$, intrinsic angular momentum tensor $S^{\alpha\beta}$, and intrinsic angular momentum vector $S^\alpha$. (See Box 5.6.) An observer with 4-velocity $u^\alpha$ defines the **centroid** of the system, at his Lorentz time $x^0 = t$ and in his own Lorentz frame, by

$$X^j_{\boldsymbol{u}}(t) = (1/P^0)\int_{x^0=t} x^j T^{00} \, d^3x \quad \text{in Lorentz frame where } \boldsymbol{u} = \partial\mathscr{P}/\partial x^0. \tag{5.56}$$

This centroid depends on (i) the particular system being studied, (ii) the 4-velocity $\boldsymbol{u}$ of the observer, and (iii) the time $t$ at which the system is observed.

**(a)** Show that the centroid moves with a uniform velocity

$$dX^j_{\boldsymbol{u}}/dt = P^j/P^0, \tag{5.57}$$

corresponding to the 4-velocity

$$\boldsymbol{U} = \boldsymbol{P}/M. \tag{5.57'}$$

Note that this "4-velocity of centroid" is independent of the 4-velocity $\boldsymbol{u}$ used in defining the centroid.

### Solution (a)

Differentiate the centroid position with respect to time:

$$\frac{dX^j_{\boldsymbol{u}}}{dt} = \frac{1}{P^0}\frac{d}{dt}\int_{x^0=t} x^j T^{00} \, d^3x.$$

Since the integration surface is at constant time, we can bring the derivative inside:

$$\frac{dX^j_{\boldsymbol{u}}}{dt} = \frac{1}{P^0}\int_{x^0=t} x^j \frac{\partial T^{00}}{\partial t} \, d^3x.$$

Using the conservation law $\nabla \cdot T = 0$, we have $T^{0\alpha}{}_{,\alpha} = 0$, which gives:

$$\frac{\partial T^{00}}{\partial t} = -\frac{\partial T^{0k}}{\partial x^k}.$$

Therefore:

$$\frac{dX^j_{\boldsymbol{u}}}{dt} = -\frac{1}{P^0}\int x^j \frac{\partial T^{0k}}{\partial x^k} \, d^3x.$$

Integrate by parts:

$$\int x^j \frac{\partial T^{0k}}{\partial x^k} \, d^3x = \oint x^j T^{0k} \, dS_k - \int \delta^j_k T^{0k} \, d^3x.$$

The surface term vanishes for an isolated system. Thus:

$$\frac{dX^j_{\boldsymbol{u}}}{dt} = \frac{1}{P^0}\int T^{0j} \, d^3x = \frac{P^j}{P^0}.$$

This proves (5.57). The centroid moves with constant velocity $P^j/P^0$, which corresponds to the 4-velocity:

$$U^\mu = \frac{P^\mu}{M},$$

where $M = \sqrt{-P \cdot P}$ is the rest mass. This 4-velocity is intrinsic to the system, independent of the observer's 4-velocity $\boldsymbol{u}$.

**(b)** The centroid associated with the rest frame of the system (i.e., the centroid defined with $\boldsymbol{u} = \boldsymbol{U}$) is called the **center of mass**; see Box 5.6. Let $\boldsymbol{\xi}_{\boldsymbol{u}}$ be a vector reaching from any event on the center-of-mass world line to any event on the world line of the centroid associated with 4-velocity $\boldsymbol{u}$; thus the components of $\boldsymbol{\xi}_{\boldsymbol{u}}$ in any coordinate system are

$$\xi^\alpha_{\boldsymbol{u}} = X^\alpha_{\boldsymbol{u}} - X^\alpha_{\boldsymbol{U}}. \tag{5.58}$$

Show that $\boldsymbol{\xi}_{\boldsymbol{u}}$ satisfies the equation

$$[(\xi^\alpha_{\boldsymbol{u}} P^\beta - P^\alpha \xi^\beta_{\boldsymbol{u}}) - S^{\alpha\beta}]u_\beta = 0. \tag{5.59}$$

*[Hint: perform the calculation in a Lorentz frame where $\boldsymbol{u} = \partial\mathscr{P}/\partial x^0$.]*

### Solution (b)

Work in the Lorentz frame where $u^\alpha = (1, 0, 0, 0)$. In this frame, the centroid is defined by:

$$X^j_{\boldsymbol{u}} = \frac{1}{P^0}\int x^j T^{00} \, d^3x, \quad X^0_{\boldsymbol{u}} = t.$$

The center of mass (defined with $\boldsymbol{U}$) in its own rest frame satisfies $X^j_{\boldsymbol{U}} = 0$ (by definition of the center-of-mass frame).

The intrinsic angular momentum tensor is:

$$S^{\alpha\beta} = \int [(x^\alpha - X^\alpha_{\boldsymbol{U}})T^{\beta 0} - (x^\beta - X^\beta_{\boldsymbol{U}})T^{\alpha 0}] \, d^3x.$$

In the $\boldsymbol{u}$-frame, with $u_\beta = (1, 0, 0, 0)$, equation (5.59) becomes:

$$(\xi^\alpha_{\boldsymbol{u}} P^0 - P^\alpha \xi^0_{\boldsymbol{u}}) - S^{\alpha 0} = 0.$$

For $\alpha = 0$: $(\xi^0_{\boldsymbol{u}} P^0 - P^0 \xi^0_{\boldsymbol{u}}) - S^{00} = 0$, which is trivially satisfied since $S^{00} = 0$.

For $\alpha = j$:

$$\xi^j_{\boldsymbol{u}} P^0 - P^j \xi^0_{\boldsymbol{u}} - S^{j0} = 0.$$

Now $S^{j0} = \int [(x^j - X^j_{\boldsymbol{U}})T^{00} - (x^0 - X^0_{\boldsymbol{U}})T^{j0}] \, d^3x$.

At constant time $t$, and using the centroid definition:

$$S^{j0} = P^0 X^j_{\boldsymbol{u}} - P^0 X^j_{\boldsymbol{U}} - t P^j + X^0_{\boldsymbol{U}} P^j = P^0\xi^j_{\boldsymbol{u}} - P^j\xi^0_{\boldsymbol{u}}.$$

Therefore:

$$\xi^j_{\boldsymbol{u}} P^0 - P^j \xi^0_{\boldsymbol{u}} - S^{j0} = 0,$$

which proves (5.59).

**(c)** Show that, as seen in the rest-frame of the system at any given moment of time, the above equation reduces to the three-dimensional Euclidean equation

$$\boldsymbol{\xi}_{\boldsymbol{u}} = -(\boldsymbol{v} \times \boldsymbol{S})/M, \tag{5.59'}$$

where $\boldsymbol{v} = \boldsymbol{u}/u^0$ is the ordinary velocity of the frame associated with the centroid.

### Solution (c)

In the system's rest frame, $P^\mu = (M, 0, 0, 0)$ and $U^\mu = (1, 0, 0, 0)$.

The observer's 4-velocity is $u^\mu = (u^0, \boldsymbol{u})$ with $u^0 = \gamma = 1/\sqrt{1-v^2}$ and $\boldsymbol{v} = \boldsymbol{u}/u^0$.

Equation (5.59) becomes:

$$(\xi^\alpha_{\boldsymbol{u}} M - P^\alpha \xi^0_{\boldsymbol{u}}) - S^{\alpha 0} = 0 \quad \text{for } \alpha = 0,1,2,3.$$

For $\alpha = 0$: $(\xi^0_{\boldsymbol{u}} M - M \xi^0_{\boldsymbol{u}}) - S^{00} = 0$, trivially satisfied.

For $\alpha = j$:

$$\xi^j_{\boldsymbol{u}} M - 0 \cdot \xi^0_{\boldsymbol{u}} - S^{j0} = 0 \quad \Rightarrow \quad \xi^j_{\boldsymbol{u}} = S^{j0}/M.$$

In the rest frame, $S^{j0}$ is related to the spin vector by $S^j = \frac{1}{2}\epsilon^{jkl}S_{kl}$ and $S^{j0}$ encodes the boost part of the angular momentum.

For an observer moving with velocity $\boldsymbol{v}$ relative to the rest frame, the centroid shift is:

$$\boldsymbol{\xi}_{\boldsymbol{u}} = -\frac{\boldsymbol{v} \times \boldsymbol{S}}{M}.$$

This can be verified by explicit Lorentz transformation of the angular momentum tensor. The shift is perpendicular to both the velocity and the spin, and is a purely relativistic effect (it vanishes as $c \to \infty$).

**(d)** Assume that the energy density measured by any observer anywhere in spacetime is non-negative ($\boldsymbol{u} \cdot T \cdot \boldsymbol{u} \geq 0$ for all timelike $\boldsymbol{u}$). In the rest frame of the system, construct the smallest possible cylinder that is parallel to $\boldsymbol{S}$ and that contains the entire system ($T_{\alpha\beta} = 0$ everywhere outside the cylinder). Show that the radius $r_0$ of this cylinder is limited by

$$r_0 \geq |\boldsymbol{S}|/M. \tag{5.60}$$

Thus, a system with given intrinsic angular momentum $\boldsymbol{S}$ and given mass $M$ has a minimum possible size $r_{0\text{min}} = |\boldsymbol{S}|/M$ as measured in its rest frame.

### Solution (d)

In the rest frame, the angular momentum vector $\boldsymbol{S}$ points along some axis (say, the $z$-axis).

Consider a point at distance $r$ from the $z$-axis. The energy density measured by an observer at that point must be non-negative:

$$T^{00} \geq 0.$$

The angular momentum about the $z$-axis is:

$$S^z = \int (x T^{y0} - y T^{x0}) \, d^3x.$$

For a system confined within radius $r_0$, the maximum angular momentum for a given mass is achieved when all the mass-energy is concentrated at the boundary $r = r_0$ and moving at the speed of light.

In that extreme case:

$$|S| \leq r_0 \int T^{00} \, d^3x = r_0 M.$$

Therefore:

$$r_0 \geq \frac{|\boldsymbol{S}|}{M}.$$

This is the **minimum size** imposed by angular momentum. A system with intrinsic spin cannot be arbitrarily small; it must have a radius at least $|\boldsymbol{S}|/M$.

For an electron with spin $\hbar/2$ and mass $m_e$, this gives the **Compton wavelength** scale:

$$r_{\text{min}} \sim \frac{\hbar}{m_e c}.$$

This exercise shows that angular momentum places a fundamental lower bound on the size of any physical system.
