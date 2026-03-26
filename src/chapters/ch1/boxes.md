# Chapter 1 Boxes: Detailed Summaries

## Box 1.1 - Mathematical Notation for Events, Coordinates, and Vectors

This box establishes the notation used throughout the book.

### Main Points

- **Events** are denoted by capital script, one-letter Latin names such as $\mathcal{P}$, $\mathcal{Q}$, $\mathcal{A}$, $\mathcal{B}$.

- **Coordinates of an event** $\mathcal{P}$ are denoted by:
  - $t(\mathcal{P})$, $x(\mathcal{P})$, $y(\mathcal{P})$, $z(\mathcal{P})$, or
  - more abstractly by $x^\mu(\mathcal{P})$ or $x^\alpha(\mathcal{P})$.

- **Greek indices** ($\alpha, \beta, \ldots$) take on values 0, 1, 2, or 3.

- **The time coordinate** is $x^0(\mathcal{P})$.

- **Space coordinates** are $x^1(\mathcal{P})$, $x^2(\mathcal{P})$, $x^3(\mathcal{P})$, sometimes denoted $x^j(\mathcal{P})$ or $x^k(\mathcal{P})$ where **Latin indices** take values 1, 2, or 3.

- **Shorthand notation**: One adopts $x^\beta$ for the coordinates of event $\mathcal{P}$, and $x^j$ for space coordinates.

- **Other coordinates** for the same event may be denoted $x^{\bar\alpha}(\mathcal{P})$ or just $x^{\bar\alpha}$, $x^{\alpha'}(\mathcal{P})$ or just $x^{\alpha'}$.

- **Transformation** from one coordinate system to another is achieved by four functions $x^{\bar\alpha}(x^0, x^1, x^2, x^3)$, denoted more succinctly $x^{\bar\alpha}(x^\beta)$.

- A **separation vector** reaching from one event $\mathcal{Q}$ to neighboring event $\mathcal{P}$ can be denoted abstractly by $\mathbf{u}$, $\mathbf{v}$, $\boldsymbol{\xi}$, or $\mathcal{P} - \mathcal{Q}$.

- **Components of the vector**: $\xi^\alpha \equiv x^\alpha(\mathcal{P}) - x^\alpha(\mathcal{Q})$.

- **Transformation of components**: $\xi^{\bar\alpha} = \frac{\partial x^{\bar\alpha}}{\partial x^\beta}\xi^\beta$.

- **Einstein summation convention**: any index that is repeated in a product is automatically summed on.

### Why It Matters

This box gives the language needed for the rest of the chapter. It makes clear that coordinates are labels attached to events, while vectors are geometric objects whose component values depend on coordinate choice.

---

## Box 1.2 - Materials of the Most Diverse Composition Fall with the Same Acceleration ("Standard World Line")

This box is a historical and experimental survey of universal free fall.

### Main Points

- **Aristotle**: "the downward movement of a mass of gold or lead, or of any other body endowed with weight, is quicker in proportion to its size."

- **Pre-Galilean literature**: metal and wood weights fall at the same rate.

- **Galileo**: 
  1. "the variation of speed in air between balls of gold, lead, copper, porphyry, and other heavy materials is so slight that in a fall of 100 cubits [about 46 meters] a ball of gold would surely not outstrip one of copper by as much as four fingers."
  2. Later experiments of greater precision "diluting gravity" and finding same time of descent for different objects along an inclined plane.

- **Newton**: inclined plane replaced by arc of pendulum bob; "time of fall" for bodies of different composition determined by comparing time of oscillation of pendulum bobs of the two materials.

- **Lorand von Eötvös, Budapest, 1889 and 1922**: compared on the rotating earth the vertical defined by a plumb bob of one material with the vertical defined by a plumb bob of other material. The direction of the supporting thread reveals the direction in which the mass is being dragged away from its normal world line of "free fall" or "weightlessness."

- **Roll, Krotkov, and Dicke, Princeton, 1964**: employed as fiducial acceleration the daily alternating 0.59 cm/sec² produced by the sun's attraction. Reported $|g(\text{Au}) - g(\text{Al})|/g$ less than $1 \times 10^{-11}$.

- **Braginsky and Panov, Moscow, 1971**: like Roll, Krotkov, and Dicke, employed Sun's attraction as fiducial acceleration. Reported $|g(\text{Pt}) - g(\text{Al})|/g$ less than $1 \times 10^{-12}$.

- **Beall, 1970**: particles that are deflected less by the Earth's or the sun's gravitational field than a photon would be, effectively travel faster than light. Observations of $10^{13}$ eV muons show that muons are not "too light" by as much as $5 \times 10^{-5}$.

### Why It Matters

The box supplies the empirical foundation for the equivalence principle. The common "standard world line" of freely falling bodies is not a philosophical guess; it is an experimental fact verified to extraordinary precision.

---

## Box 1.3 - Local Lorentz Geometry and Local Euclidean Geometry: With and Without Coordinates

This is the chapter's most important technical box.

### I. Local Euclidean Geometry

**What does it mean to say that the geometry of a tiny thumbprint on the apple is Euclidean?**

#### A. Coordinate-free Language (Euclid)

Given a line $\mathcal{A}\mathcal{C}$. Extend it by an equal distance $\mathcal{C}\mathcal{X}$. Let $\mathcal{B}$ be a point not on $\mathcal{A}\mathcal{X}$ but equidistant from $\mathcal{A}$ and $\mathcal{X}$. Then:

$$s_{\mathcal{A}\mathcal{B}}^2 = s_{\mathcal{A}\mathcal{C}}^2 + s_{\mathcal{B}\mathcal{C}}^2.$$

(Theorem of Pythagoras; also other theorems of Euclidean geometry.)

#### B. Language of Coordinates (Descartes)

From any point $\mathcal{A}$ to any other point $\mathcal{B}$ there is a distance $s$ given in suitable (Euclidean) coordinates by:

$$s_{\mathcal{A}\mathcal{B}}^2 = [x^1(\mathcal{B}) - x^1(\mathcal{A})]^2 + [x^2(\mathcal{B}) - x^2(\mathcal{A})]^2.$$

If one succeeds in finding any coordinate system where this is true for all points $\mathcal{A}$ and $\mathcal{B}$ in the thumbprint, then one is guaranteed that:
- (i) this coordinate system is locally Euclidean, and
- (ii) the geometry of the apple's surface is locally Euclidean.

### II. Local Lorentz Geometry

**What does it mean to say that the geometry of a sufficiently limited region of spacetime in the real physical world is Lorentzian?**

#### A. Coordinate-free Language (Robb 1936)

Let $\mathcal{A}\mathcal{X}$ be the world line of a free particle. Let $\mathcal{B}$ be an event not on this world line. Let a light ray from $\mathcal{B}$ strike $\mathcal{A}\mathcal{X}$ at the event $\mathcal{Q}$. Let a light ray take off from such an earlier event $\mathcal{P}$ along $\mathcal{A}\mathcal{X}$ that it reaches $\mathcal{B}$. Then the proper distance $s_{\mathcal{A}\mathcal{B}}$ (spacelike separation) or proper time $\tau_{\mathcal{A}\mathcal{B}}$ (timelike separation) is given by:

$$s_{\mathcal{A}\mathcal{B}}^2 \equiv -\tau_{\mathcal{A}\mathcal{B}}^2 = -\tau_{\mathcal{A}\mathcal{Q}}\tau_{\mathcal{Q}\mathcal{P}}.$$

#### B. Language of Coordinates (Lorentz, Poincaré, Minkowski, Einstein)

From any event $\mathcal{A}$ to any other nearby event $\mathcal{B}$, there is a proper distance $s_{\mathcal{A}\mathcal{B}}$ or proper time $\tau_{\mathcal{A}\mathcal{B}}$ given in suitable (local Lorentz) coordinates by:

$$s_{\mathcal{A}\mathcal{B}}^2 = -\tau_{\mathcal{A}\mathcal{B}}^2 = -[x^0(\mathcal{B}) - x^0(\mathcal{A})]^2 + [x^1(\mathcal{B}) - x^1(\mathcal{A})]^2 + [x^2(\mathcal{B}) - x^2(\mathcal{A})]^2 + [x^3(\mathcal{B}) - x^3(\mathcal{A})]^2.$$

If one succeeds in finding any coordinate system where this is locally true for all neighboring events $\mathcal{A}$ and $\mathcal{B}$, then one is guaranteed that:
- (i) this coordinate system is locally Lorentzian, and
- (ii) the geometry of spacetime is locally Lorentzian.

### III. Statements of Fact

- The geometry of an apple's surface is locally Euclidean everywhere.
- The geometry of spacetime is locally Lorentzian everywhere.

### IV. Local Geometry in the Language of Modern Mathematics

#### A. The Metric for Any Manifold

At each point on the apple, at each event of spacetime, indeed, at each point of any "Riemannian manifold," there exists a geometrical object called the **metric tensor** $\mathbf{g}$. It is a machine with two input slots for the insertion of two vectors:

$$\mathbf{g}(\text{slot 1}, \text{slot 2}).$$

If one inserts the same vector $\mathbf{u}$ into both slots, one gets out the square of the length of $\mathbf{u}$:

$$\mathbf{g}(\mathbf{u}, \mathbf{u}) = \mathbf{u}^2.$$

If one inserts two different vectors, $\mathbf{u}$ and $\mathbf{v}$, one gets out a number called the "scalar product of $\mathbf{u}$ on $\mathbf{v}$" and denoted $\mathbf{u} \cdot \mathbf{v}$:

$$\mathbf{g}(\mathbf{u}, \mathbf{v}) = \mathbf{g}(\mathbf{v}, \mathbf{u}) = \mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}.$$

The metric is a linear machine:

$$\mathbf{g}(2\mathbf{u} + 3\mathbf{w}, \mathbf{v}) = 2\mathbf{g}(\mathbf{u}, \mathbf{v}) + 3\mathbf{g}(\mathbf{w}, \mathbf{v}),$$

$$\mathbf{g}(\mathbf{u}, a\mathbf{v} + b\mathbf{w}) = a\mathbf{g}(\mathbf{u}, \mathbf{v}) + b\mathbf{g}(\mathbf{u}, \mathbf{w}).$$

Consequently, in a given (arbitrary) coordinate system, its operation on two vectors can be written in terms of their components as a bilinear expression:

$$\mathbf{g}(\mathbf{u}, \mathbf{v}) = g_{\alpha\beta}u^\alpha v^\beta$$

(implied summation on $\alpha$, $\beta$).

#### B. Components of the Metric in Local Lorentz and Local Euclidean Frames

The components of the metric are:

$$g_{11} = g_{22} = 1, \quad g_{12} = g_{21} = 0; \quad \text{i.e., } g_{\alpha\beta} = \delta_{\alpha\beta} \quad \text{on apple, in local Euclidean coordinates;}$$

$$g_{00} = -1, \quad g_{0k} = 0, \quad g_{jk} = \delta_{jk} \quad \text{in spacetime, in local Lorentz coordinates.}$$

In matrix notation:

$$\|g_{\hat\alpha\hat\beta}\| = \|\eta_{\alpha\beta}\| = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

### Why It Matters

This box is the bridge from visual geometry to modern tensor language. It shows how local Euclidean and local Lorentz structure can be described either geometrically or with coordinates, and proves that the two descriptions are equivalent.

---

## Box 1.4 - Time Today

This box surveys the evolution of time standards.

### Main Points

- **Prior to 1956**: the second was defined as the fraction 1/86,400 of the mean solar day.

- **From 1956 to 1967**: the "second" meant the ephemeris second, defined as the fraction 1/(31,556,925.9747) of the tropical year 00h00m00s December 31, 1899.

- **Since 1967**: the standard second has been the SI (Système International) second, defined as 9,192,631,770 periods of the unperturbed microwave transition between the two hyperfine levels of the ground state of Cs¹³³.

- **Universal time, UT0**: based on the count of days as they actually occurred historically; on the actual spin of the earth on its axis.

- **UT1**: the "navigator's time scale," is the same time as corrected for the wobble of the earth on its axis ($\Delta t \sim 0.05$ sec).

- **UT2**: is UT1 as corrected for the periodic fluctuations of unknown origin with periods of one-half year and one year ($\Delta t \sim 0.05$ sec; measured to 3 ms in one day).

- **Ephemeris Time, ET**: as defined by the theory of gravitation and by astronomical observations and calculations, is essentially determined by the orbital motion of the earth around the sun.

- **Coordinated Universal Time (UTC)**: is broadcast on stations such as WWV. It was adopted internationally in February 1971 to become effective January 1, 1972. The clock rate is controlled by atomic clocks to be as uniform as possible for one year, but is changed by the infrequent addition or deletion of a second—called a "leap second"—so that UTC never differs more than 0.7 sec from the navigator's time scale, UT1.

### Timekeeping Capabilities of Some Familiar Clocks

| Clock | Precision |
|-------|-----------|
| Tuning fork wrist watch (1960) | 1 min/mo |
| Quartz crystal clock (1921-1930) | 1 μsec/day, 1 sec/yr |
| Quartz crystal wrist watch (1971) | 0.2 sec/2 mos., 1 sec/yr |
| Cesium beam (atomic resonance, Cs¹³³), (1952-1955) | 0.1 μsec/day, 0.5 μsec/mo |
| Rubidium gas cell (Rb⁸⁷ resonance), (1957) | 0.1 μsec/day, 1-5 μsec/mo |
| Hydrogen maser (1960) | 0.01 μsec/2 hr, 0.1 μsec/day |
| Methane stabilized laser (1969) | 0.01 μsec/100 sec |

### Why It Matters

The box shows that timekeeping is not metaphysical but operational. Better clocks better approximate the time coordinate that makes motion look simple.

---

## Box 1.5 - Test for Flatness

This box gives a practical criterion for when spacetime may be treated as flat.

### Main Points

1. Specify the extension in space $L$ (cm or m) and extension in time $T$ (cm or m of light travel time) of the region under study.

2. Specify the precision $\delta\xi$ with which one can measure the separation of test particles in this region.

3. Follow the motion of test particles moving along initially parallel world lines through this region of spacetime.

4. When the world lines remain parallel to the precision $\delta\xi$ for all directions of travel, then one says that "in a region so limited and to a precision so specified, spacetime is flat."

### Example

Region just above the surface of the earth, 100 m × 100 m × 100 m (space extension), followed for $10^9$ m of light-travel time ($T_{\text{conv}} \sim 3$ sec).

- Mass of Earth, $m_{\text{conv}} = 5.98 \times 10^{27}$ g
- $m = (0.742 \times 10^{-28} \text{ cm/g}) \times (5.98 \times 10^{27} \text{ g}) = 0.444$ cm

Tide-producing acceleration $R^z{}_{0z0}$ (relative acceleration in z-direction of two test particles initially at rest and separated from each other by 1 cm of vertical elevation) is:

$$(d/dr)(m/r^2) = -2m/r^3 = -0.888 \text{ cm}/(6.37 \times 10^8 \text{ cm})^3 = -3.44 \times 10^{-27} \text{ cm}^{-2}.$$

Two test particles with a vertical separation $\xi^z = 10^4$ cm acquire in the time $t = 10^{11}$ cm a relative displacement:

$$\delta\xi^z = -\frac{1}{2}R^z{}_{0z0}t^2\xi^z = 1.72 \times 10^{-27} \text{ cm}^{-2}(10^{11} \text{ cm})^2 10^4 \text{ cm} = 1.72 \text{ mm}.$$

### Why It Matters

Flatness is not absolute. It is always a matter of scale and experimental precision. When the minimum uncertainty attainable in a measurement exceeds 1.72 mm, then to this level of precision the region of spacetime under consideration can be treated as flat.

---

## Box 1.6 - Curvature of What?

This box addresses a common misunderstanding.

### Main Points

- Nothing seems more attractive at first glance than the idea that gravitation is a manifestation of the curvature of space (A), and nothing more ridiculous at a second glance (B).

- How can the tracks of a ball and of a bullet be curved so differently if that curvature arises from the geometry of space?

- Riemann gave the world the mathematical machinery to define and calculate curvature (metric and Riemannian geometry) at the age of 28 (June 10, 1854).

- To make the forward step took forty years to special relativity (1905: time on the same footing as space) and then another ten years (1915: general relativity).

- Depicted in spacetime (C), the tracks of ball and bullet appear to have comparable curvature. In fact, however, neither track has any curvature at all. They both look curved in (C) only because one has forgotten that the spacetime they reside in is itself curved—curved precisely enough to make these tracks the straightest lines in existence ("geodesics").

- The earth-bound laboratory has no simple status whatsoever in a proper discussion. First, it is no Lorentz frame. Second, even to mention the earth makes one think of an action-at-a-distance version of gravity.

- To look at local physics, however, means to compare one geodesic of one test particle with geodesics of other test particles traveling:
  1. nearby with
  2. nearly the same directions and
  3. nearly the same speeds.

- Then one can "look at the separations between these nearby test particles and from the second time-rate of change of these separations and the 'equation of geodesic deviation' (equation 1.8') read out the curvature of spacetime."

### Why It Matters

This box prevents one of the most common conceptual mistakes in popular accounts of general relativity: replacing spacetime curvature with a purely spatial rubber-sheet picture. The correct observable is the relative behavior of nearby geodesics in spacetime, not the embedding of trajectories in an external laboratory picture.

---

## Box 1.7 - Equation of Motion Under the Influence of a Gravitational Field and an Electromagnetic Field, Compared and Contrasted

This box compares electromagnetism with gravitation.

| Feature | Electromagnetism [Lorentz force, equation (1.11)] | Gravitation [Equation of geodesic deviation (1.8')] |
|---------|--------------------------------------------------|-----------------------------------------------------|
| Acceleration is defined for one particle? | Yes | No |
| Acceleration defined how? | Actual world line compared to world line of uncharged "fiducial" test particle passing through same point with same 4-velocity | Already an uncharged test particle, which can't accelerate relative to itself! Acceleration measured relative to a nearby test particle as fiduciary standard |
| Acceleration depends on all four components of the 4-velocity of the particle? | Yes | Yes |
| Universal acceleration for all test particles in same locations with same 4-velocity? | No: is proportional to $e/m$ | Yes |
| Driving field | Electromagnetic field | Riemann curvature tensor |
| Ostensible number of distinct components of driving field | $4 \times 4 = 16$ | $4^4 = 256$ |
| Actual number when allowance is made for symmetries of tensor | 6 | 20 |
| Names for more familiar of these components | 3 electric, 3 magnetic | 6 components of local Newtonian tide-producing acceleration |

### Why It Matters

This box clarifies why gravitation in general relativity is not just another force field. Its observable content is geometric and tidal. In electromagnetism, acceleration can be defined for a single charged particle relative to an uncharged fiducial one. In gravitation, absolute acceleration of a single free particle is not meaningful in the same way; only relative acceleration between neighboring geodesics is physically significant.

---

## Box 1.8 - Geometrized Units

This box explains the unit system used in the book.

### Main Points

Throughout this book, we use "geometrized units," in which the speed of light $c$, Newton's gravitational constant $G$, and Boltzmann's constant $k$ are all equal to unity. The following alternative ways to express the number 1.0 are of great value:

$$1.0 = c = 2.997930 \cdots \times 10^{10} \text{ cm/sec}$$

$$1.0 = G/c^2 = 0.7425 \times 10^{-28} \text{ cm/g}$$

$$1.0 = G/c^4 = 0.826 \times 10^{-49} \text{ cm/erg}$$

$$1.0 = Gk/c^4 = 1.140 \times 10^{-65} \text{ cm/K}$$

$$1.0 = c^2/G^{1/2} = 3.48 \times 10^{24} \text{ cm/gauss}^{-1}$$

One can multiply a factor of unity, expressed in any one of these ways, into any term in any equation without affecting the validity of the equation. Thereby one can convert one's units of measure from grams to centimeters to seconds to ergs to...

### For Example

$$\text{Mass of sun} = M_\odot = 1.989 \times 10^{33} \text{ g}$$

$$= (1.989 \times 10^{33} \text{ g}) \times (G/c^2) = 1.477 \times 10^5 \text{ cm}$$

$$= (1.989 \times 10^{33} \text{ g}) \times (c^2) = 1.788 \times 10^{54} \text{ ergs}$$

The standard unit, in terms of which everything is measured in this book, is centimeters. However, occasionally conventional units are used; in such cases a subscript "conv" is sometimes, but not always, appended to the quantity measured:

$$M_{\odot\text{conv}} = 1.989 \times 10^{33} \text{ g}.$$

### Why It Matters

Geometrized units make spacetime geometry more transparent by expressing time, mass, and energy in the same underlying unit system. The mass of the sun becomes about 1.477 km in geometrized units.

---

## Box 1.9 - Galileo Galilei

**Pisa, February 15, 1564—Arcetri, Florence, January 8, 1642**

### Main Points

- It gives Galileo's dates and portrait (from Uffizi Gallery, Florence).
- It quotes Galileo on free fall, astronomical observation, and the value of reason over authority.

### Key Quotes from Galileo

> "In questions of science the authority of a thousand is not worth the humble reasoning of a single individual." (1632)

> "The spaces described by a body falling from rest with a uniformly accelerated motion are to each other as the squares of the time intervals employed in traversing these distances." (1638)

> "Everything that has been said before and imagined by other people [about the tides] is in my opinion completely invalid. But among the great men who have philosophised about this marvellous effect of nature the one who surprised me the most is Kepler."

> "It is a most beautiful and delightful sight to behold [with the new telescope] the body of the Moon... the Moon certainly does not possess a smooth and polished surface, but one rough and uneven... full of vast protuberances, deep chasms and sinuosities... stars in myriads, which have never been seen before and which surpass the old, previously known, stars in number more than ten times." (*Sidereus Nuncius*, 1610)

> "So the principles which are set forth in this treatise will, when taken up by thoughtful minds, lead to many another more remarkable result; and it is to be believed that it will be so on account of the nobility of the subject, which is superior to any other in nature." (1638)

### Why It Matters

Galileo is presented as the early architect of the empirical and conceptual shift away from inherited authority and toward quantitative laws of motion. His telescopic discoveries and kinematic insights opened the path toward modern science.

---

## Box 1.10 - Isaac Newton

**Woolsthorpe, Lincolnshire, England, December 25, 1642—Kensington, London, March 20, 1726**

### Main Points

- It gives Newton's dates and image.
- It quotes Newton on geometry, absolute space, absolute time, and his refusal to speculate beyond phenomena with the famous attitude later paraphrased as *hypotheses non fingo*.

### Key Quotes from Newton

> "The description of right lines and circles, upon which geometry is founded, belongs to mechanics. Geometry does not teach us to draw these lines, but requires them to be drawn."

*[From p. 1 of Newton's preface to the first (1687) edition of the Principia]*

> "Absolute space, in its own nature, without relation to anything external, remains always similar and immovable."

> "Absolute, true, and mathematical time, of itself, and from its own nature, flows equably without relation to anything external."

*[From the Scholium in the Principia]*

> "I have not been able to discover the cause of those properties of gravity from phenomena, and I frame no hypotheses; for whatever is not reduced from the phenomena is to be called an hypothesis; and hypotheses... have no place in experimental philosophy... And to us it is enough that gravity does really exist, and act according to the laws which we have explained, and abundantly serves to account for all the motions of the celestial bodies, and of our sea."

*[From the General Scholium added at the end of the third book of the Principia in the second edition of 1713; especially famous for the phrase often quoted from Newton's original Latin, "HYPOTHESES NON FINGO."]*

> "And the same year [1665 or 1666] I began to think of gravity extending to the orb of the Moon, and having found out... All this was in the two plague years of 1665 and 1666, for in those days I was in the prime of my age for invention, and minded Mathematicks and Philosophy more than at any time since."

*[From memorandum in Newton's handwriting about his discoveries on fluxions, the binomial theorem, optics, dynamics, and gravity]*

### Why It Matters

Newton is presented both as the creator of the classical framework and as the thinker whose concepts of absolute space and time Einstein eventually had to surpass. His refusal to speculate beyond phenomena ("hypotheses non fingo") marks a methodological commitment to empirical grounding.

---

## Box 1.11 - Albert Einstein

This closing historical box gives Einstein's dates and several photographs.

### Main Points

- It serves primarily as a visual and biographical marker at the culmination of the chapter.
- Placed beside the introduction of the Einstein field equation, it signals the historical transition from Newtonian gravitation to spacetime geometry.

### Why It Matters

The box frames the chapter's end as the arrival at Einstein's synthesis: gravitation as geometry, governed by $G = 8\pi T$.
