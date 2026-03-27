# Khantraction Research Note: Spacetime Knots

## Source and scope
This summary distills the Khantraction corpus—physics notes, numerical experiments, and the MTW-style paper draft—so the MTW site can present the full story: quaternion glue, photon/electron knots, the rope-and-knot intuition, and the numerical evidence for a localized spacetime contraction.


### What is the Khantraction model
Khantraction hypothesizes that particles are spacetime knots sustained by a quaternion glue field. The field combines a scalar binding energy and a vector orientation; its exponential shapes the contracted geometry and the norm measures how tightly spacetime is pinched. Null alignments yield photons, timelike alignments yield electrons, and the glue’s couplings to curvature and electromagnetism keep the knot stable. For the rest of the page we build on this knot + quaternion intuition.
## Executive summary
1. **Glue field as geometry:** Particles are knots of spacetime carved by a quaternion glue $q=s+\vec v\cdot\vec\tau$ whose norm $|q|^2=s^2+\vec v\cdot\vec v$ measures the contraction strength. The potential $U(|q|)=\tfrac{m_{\text{glue}}^2}{2}|q|^2+\tfrac{\lambda_q}{4}|q|^4$ plus couplings $\xi R|q|^2$ and $\lambda|q|^2F^2$ supply the binding energy and connect geometry with electromagnetism.
2. **Rope-and-knot picture:** Imagine a rope carrying spacetime and a knot you can hold while pulling the rope through—it stays put while spacetime flows through. Loosening the knot ($s\to0$) removes the proper-time delay and recovers the photon limit; tightening it gives timelike electrons with charge/spin encoded in $\vec v$ winding. The quaternion exponential $e^q$ shapes the knot and its Jacobian matches the fluctuation sensitivity computed in the notes.
3. **Numerical evidence:** The CPU solver with $m_{\text{glue}}=0.1$, $\lambda_q=0.01$, $\xi=0.002$ and initial data $s(10^{-3})=0.02$, $v'(10^{-3})=0.001$ reaches $r=20$ with a localized contraction. The profile (Figure 1) shows $s,v,|q|,m,R$ versus radius, confirming the outer region asymptotes to flat space while the interior stays bound.

## Field-theoretic setup
The glue Lagrangian is

$
\mathcal L=\sqrt{-g}\left[\tfrac{1}{2}g^{\mu\nu}(\partial_\mu s\partial_\nu s+\partial_\mu\vec v\cdot\partial_\nu\vec v)-U(|q|)+\xi R|q|^2\right]-\sqrt{-g}\left[\tfrac{1}{4}F_{\mu\nu}F^{\mu\nu}+\lambda|q|^2F_{\mu\nu}F^{\mu\nu}\right].
$

For static, spherically symmetric solutions we use $ds^2=-e^{2\Phi}dt^2+e^{2\Lambda}dr^2+r^2d\Omega^2$ with $e^{-2\Lambda}=1-2m(r)/r$ and $\vec v=v(r)\hat r$. The Einstein equations tie $m'$ and $\Phi'$ to the glue energy density and pressure, while the glue equations become

$
s''+\left(\frac{2}{r}+\Phi'-\Lambda'\right)s'-\frac{dU}{ds}+2\xi R s=0,
\quad v''+\left(\frac{2}{r}+\Phi'-\Lambda'\right)v'-\frac{dU}{dv}+2\xi R v=0.
$

Linearization leads to the Jacobian-style fluctuation equations discussed below.

## Photon versus electron knots
- **Photon knot:** Null-aligned glue ($s\to0$, $\vec v\propto k$ with $k^2=0$) forms a contraction that travels along a null geodesic. The knot has no internal time, letting spacetime slip through while the local curvature pulse keeps its shape. Accelerating charges, pair annihilation, or quantum fluctuations can pump energy into the glue to trigger this null soliton, and photon creation/absorption is the transient reconfiguration of the knot.
- **Electron knot:** A nonzero scalar part $s$ and winding vector $\vec v$ hold a timelike contraction that carries electric charge and half-integer spin. The knot resists splitting (mass gap) and satisfies charge conservation via paired creation/annihilation. Electromagnetism enters through $\lambda|q|^2F^2$: strong EM fields can either align the glue with null directions (photon branch) or reinforce the timelike knot so it remains localized.

## Quaternion exponential and fluctuation spectrum
Appendix A shows $q=a+\mathbf v$, $e^q=e^a(\cos\theta+\hat v\sin\theta)$, and how the Jacobian maps $\{a,\mathbf v\}$ to the output. In Khantraction the scalar part $s$ (equivalently $a$) sets the knot tightness and the vector part $\vec v$ encodes orientation. The fluctuation equations

$
\delta s''+P_s(r)\delta s+Q_s(r)\delta v=0,
\quad
\delta v''+P_v(r)\delta v+Q_v(r)\delta s=0
$

have coefficients matching the quaternion Jacobian, so photon modes live near the null direction and electron modes sit in the timelike sector. Quantizing $\delta s,\delta v$ yields discrete excitation spectra, and the mass gap collapses as the knot loosens ($s\to0$).

## Numerical profile
![Figure 1: Khantraction glue profile](khantraction_profile.png)
The RK4 solver with $m_{\text{glue}}=0.1$, $\lambda_q=0.01$, $\xi=0.002$ and initial data $s(10^{-3})=0.02$, $v'(10^{-3})=0.001$ reaches $r=20$ with $|q|\approx0.0363$, $m(r)\approx0.178$, and $R\approx-7.6\times10^{-4}$. Figure 1 plots $s$, $v$, $|q|$, the Misner–Sharp mass, and the Ricci scalar, showing the contraction fades smoothly into flat space while the inner knot stays bound.

## Status and future directions
- **CPU solver:** The code lives in `projects/physics/solve_khantraction.py`, and the finalized profile is stored in `projects/physics/solutions/profile.txt`. The flat-space variant `solve_khantraction_flat.py` remains available for analytic checks.
- **Future work:** Quantize the fluctuation system to extract spectra, compute curvature invariants (Kretschmann, tidal) from the numeric profile, and extend the quaternion glue to include non-Abelian families while keeping the rope-and-knot intuition intact.
