§4.1.
EXTERIOR CALCULUS
Stacks of surfaces, individually or intersecting to make "honeycombs," "egg crates,"
and other such structures ("differential forms"), give unique insight into the geometry
of electromagnetism and gravitation. However, such insight comes at some cost in
time. Therefore, most readers should skip this chapter and later material that depends
on it during a first reading of this book.
Analytically speaking, differential forms are completely antisymmetric tensors;
pictorially speaking, they are intersecting stacks of surfaces. The mathematical
formalism for manipulating differential forms with ease, called "exterior calculus,"
is summarized concisely in Box 4.1; its basic features are illustrated in the rest of
this chapter by rewriting electromagnetic theory in its language. An effective way
to tackle this chapter might be to (1) scan Box 4.1 to get the flavor of the formalism;
(2) read the rest of the chapter in detail; (3) restudy Box 4.1 carefully; (4) get practice
in manipulating the formalism by working the exercises. *
(continued on page 99)
• Exterior calculus is. treated in greater detail than here by: E. Cartan (1945); de Rham (1955);
Nickerson, Spencer, and Steenrod (1959); Hauser (1970); Israel (1979); especially Flanders (1963,
relatively easy, with many applications); Spivak (1965, sophomore or junior level, but fully in tune with
modem mathematics); H. Cartan (1970); and Choquet-Bruhat (l968a).

Box 4.1
DIFFERENTIAL FORMS AND
EXTERIOR CALCULUS IN BRIEF
The fundamental definitions and formulas of exterior calculus are summarized here
for ready reference. Each item consists of a general statement (at left of page) plus
a leading application (at right of page). This formalism is applicable not only to
spacetime, but also to more general geometrical systems (see heading of each section).
No attempt is made here to demonstrate the internal consistency of the formalism,
nor to derive it from any set of definitions and axioms. For a systematic treatment
that does so, see, e.g., Spivak (1965), or Misner and Wheeler (1957).
A.
Algebra I (applicable to any vector space)
1. Basis 1jorms.
a. Coordinate basis wi = dx i
(j tells which I-form, not which component).
b. General basis wi = Lik , dx k '.
An application
Simple basis I-forms for analyzing Schwarzschild ge-
ometry around static spherically symmetric center of
attraction:
WO = (1 - 2m/r)I/2 dt;
WI = (1 - 2m/r)-l/2 dr;
w 2 = rdB;
w 3 = rsinO dq,.
2. General pjorm (or p-vector) is a completely anti-
symmetric tensor of rank (~) [or (8)]. It can be
expanded in terms of wedge products (see §3.5 and
exercise 4.12):
.,
.
a = p!
-I a··
"'2...'p. w" /\ W'2 /\ ... /\ w'p
a l1.t1.2
.. ••• 1.p
. I,wit /\ W i2 /\ ••• /\ w iP •
(Note: Vertical bars around the indices mean sum-
mation extends only over i1 < i2 < .,. < ip ')
Two applications
Energy-momentum I-form is of type a = aiw i or
p = -E dt + P;r dx + Py dy + pz d::.
Faraday is a 2-form of type P = f3 1J.L PI WJ.L /\ w P or in
flat spacetime
F=-~~/\~-~~/\~-~~/\~
+ B;r dy /\ d:: + By d:: /\ dx + B z dx /\ dy
3. Wedge product.
All familiar rules of addition and multiplication
hold, such as
= aa /\ y + bP /\ y,
= a /\ (P /\ y) a /\ p /\ y,
(aa + bP) /\ y
(a /\ P) /\ Y
except for a modified commutation law between
a p-form a and a q-form p:
ap /\ Ilq = (-l)pqllq /\ a.
p
Applications to 1 forms a, p:
/\P = -p /\a,
a /\a =0;
j
a /\ p = (ajw ) /\ (f3 kW k ) = a;f3 kw ; /\ w k
a
= "2I (a jf3 k - f3,oO.k)W'. /\ w k .
4. Contraction of pform on p-vector.
(a,A)
p p
= a l · . IAI;1''';'!(w i1 /\ '"
1.1 •••11'
/\ Wi. , e.11 /\
'"
/\ e.Jp )
,
\
[
6~,.,,!, (see exercises 3.13 and 4.12)]
It·..'.
- a lit ...i.1 Ait ...i • .
-
Four applications
a. Contraction of a particle's energy-momentum I-form
p = Pawa with 4-velocity u = uae a of observer (a
I-vector):
-(p, u)
= -Paua = energy of particle.
b. Contraction of Faraday 2-form F with bivector
My /\ Jq> [where 6q> (d&' j dA1),JA l and Jq> =
(d&' jdA 2)JA 2 are two infinitesimal vectors in a 2-sur-
face q>(A l , A2 ), and the bivector represents the surface
element they span] is the magnetic flux <P = (F, 6q>
/\ Jq» through that surface element.
c. More generally, a p-dimensional parallelepiped with
vectors a v a 2 , ••• , a p for legs has an oriented volume
described by the "simple" p-vector a l /\ a 2 /\ . , . a p
(oriented because interchange of two legs changes its
sign). An egg-crate type of structure with walls made
from the hyperplanes of p different I-forms 0'1,
is described by the "simple" p-form q1
/\ qP. The number of cells of q1 /\
q2 /\ '"
/\ qP sliced through by the infinitesimal
p-volume a 1 /\ a 2 /\ •.• /\ a p is
q2, ... ,qP
/\ q2 /\ '"
(q1 /\ q2 /\ ... /\ qP, a
1
/\ a
2
/\ . . . /\ a )'
p
d. The Jacobian determinant of a set of p functions
fk(xl, ... ,xn ) with respect to p of their arguments
is
a'!J1 /\ a'!J2 /\ ... /\ a'!J)
( dp /\ dj2 /\ ... /\ djP, ax
ax
axp
.. ,fP) •
-_ d et II( afk. )11 =
- a(jl,j2,
1
2
ax' .
a(x , x , ... , x P)
5. Simple forms.
a. A simple p-form is one that can be written as
a wedge product of pI-forms:
q
P
= a, /\ p /\ '"
/\ y.,
p factors.
b. A simple p-form a /\ p /\ '" /\ Y is repre-
sented by the intersecting families of surfaces
of a, p, ... ,y (egg-crate structure) plus a sense
of circulation (orientation).
Applications:
a. In four dimensions (e.g., spacetime) all O-forms, 1-
forms, 3-forms, and 4-forms are simple. A 2-form F
is generally a sum of two simple forms, e.g., F =
- e dt /\ dx + h dy /\ dz; it is simple if and only if
F /\ F = O.
b. A set of I-forms a, p, . .. , y is linearly dependent
(one a linear combination of the others) if and
only if
a/\p/\···/\y=O
B.
(egg crate collapsed).
Exterior Derivative (applicable to any "differentiable manifold,"
with or without metric)
1. d produces a (p + 1)-form dq from a p-form q.
2. Effect of d is defined by induction using the
(Chapter 2) definition of df, and f a function (0-
form), plus
d(aP /\ f!)
q
d2
= da /\ p + (-I)Pa /\ dp,
= dd = O.
Two applications
d(a /\ dP)
= da /\ dp.
For the p-form cp, with
cp = <l>li,...i.1 dx it /\ ... /\ dx i .,
one has (alternative and equivalent definition of dcp)
C.
Integration (applicable to any "differentiable manifold," with or
without metric)
I. Pictorial interpretation.
Text and pictures of Chapter 4 interpret fa (inte-
gral of specified I-form a along specified curve
from specified starting point to specified end point)
as "number of a-surfaces pierced on that route";
similarly, they interpret fcp (integral of specified
2-form cp over specified bit of surface on which
there is an assigned sense of circulation or "orien-
tation") as "number of cells of the honeycomb-like
structure cp cut through by that surface"; similarly
for the egg-crate-like structures that represent 3-
forms; etc.
2. Computational rules for integration.
To evaluate fa, the integral of a p-form
a
= (Xlit ...i.l(xl, ... , x n ) dx it /\ ... /\ dx i .,
over a p-dimensional surface, proceed in two steps.
a. Substitute a parameterization of the surface,
X k (Al, . .. , AP)
into a, and collect terms in the form
a = alAi) dA 1 /\ '"
/\
dAP
(this is a viewed as a p-form in the p-dimen-
sional surface);
b. Integrate
f a =f
a(AJ) clA l clA 2 ... clAP
using elementary definition of integration.
Example: See equations (4.12) to (4.14).
3. The differential geometry of integration.
Calculate fa for a p-form a as follows.
a. Choose the p-dimensional surface S over which
to integrate.
b. Represent S by a parametrization giving the
generic point of the surface as a function of the
parameters, &'(;\1, ;\2, ... ;\P). This fixes the ori-
entation. The same function with ;\1 ~ ;\2,
&,(;\2,;\ 1, ... ,;\P), describes a different (i.e., op-
positely oriented) surface, - S.
c. The infinitesimal parallelepiped
is tangent to the surface. The number of cells
of a it slices is
/a o'!P /\ ... /\ 0;\
o&') A~ 1
A~ P
P
411~ •• • "-11\ •
\. '0;\ 1
This number changes sign if two of the vectors
o&'10;\ k are interchanged, as for an oppositely
oriented surface.
d. The above provides an interpretation motivat-
ing the definition
f a=ff ... f (a.2J!.../\ o&' /\ ... /\ o&')
-
, 0;\1
o;\P
0;\2
d;\1 d;\2 ... clAp.
This definition is identified with the computa-
tional rule of the preceding section (C.2) in
exercise 4.9.
An application
Integrate a gradient df along a curve, '!P(;\) from 91(0)
to '!P(1):
f df = fo <df, d:l'I clA) d;\ = f (dfld;\) d;\
1
I
(I
= f[~P(1)] - f['!P(O)].
e. Three different uses for symbol "d": First, light-
face d in explicit derivative expressions such as
dlda, or dflda, or d9 Ida; neither numerator nor
denominator alone has any meaning, but only
the full string of symbols. Second, lightface d
inside an integral sign; e.g., If da. This is an
instruction to perform integration, and has no
meaning whatsoever without an integral sign;
"I ... d . .." lives as an indivisible unit. Third,
sans-serif d; e.g., d alone, or df, or da. This is
an exterior derivative, which converts a p-form
into a (p + I)-form. Sometimes lightface d is
used for the same purpose. Hence, d alone, or
df, or dx, is always an exterior derivative unless
coupled to an I sign (second use), or coupled
to a I sign (first use).
4. The generalized Stokes theorem (see Box 4.6).
a. Let a'Y be the closed p-dimensional boundary
of a (p + I)-dimensional surface 'Y. Let q be
a p-form defined throughout 'Y.
Then
[integral of p-form q over boundary a'Y equals
integral of (p + I)-form dq over interior 'Y].
b. For the sign to come out right, orientations of
'Y and a'Y must agree in this sense: choose
coordinates yO, yl, ... ,yP on a portion of 'Y,
with yO specialized so yO ::; 0 in 'Y, and yO = 0
at the boundary a'Y; then the orientation
a'!J /\ a'!J /\ ... /\ a'!J
ayo
ayl
ayp
for 'Y demands the orientation
for a'Y.
c. Note: For a nonorientable surface, such as a
Mobius strip, where a consistent and continuous
choice of orientation is impossible, more intri-
cate mathematics is required to give a definition
of "a" for which the Stokes theorem holds.
Applications: Includes as special cases all integral theo-
rems for surfaces of arbitrary dimension in spaces of
arbitrary dimension, with or without metric, generaliz-
ing all versions of theorems of Stokes and Gauss. Exam-
ples:
a. 'V a curve, o'V its endpoints, C1 = f a O-form (func-
tion):
f df= f (df/d"A)dA = f f=f(l) -f(O).
1
'V
3'V
0
b. 'Va 2-surface in 3-space, o'V its closed-curve bound-
ary, val-form; translated into Euclidean vector
notation, the two integrals are
f
'V
dv
= f (V X v)· dS; f v = f
cl'V
'V
v· dl.
3'V
c. Other applications in §§5.8, 20.2, 20.3, 20.5, and
exercises 4.10, 4.11, 5.2, and below.
D.
Algebra II (applicable to any vector space with metric)
1. Norm of a pjorm.
lIall 2 -= 0:.['too.'p[
. o:it ...i p•
Two applications: Norm of a I-form equals its squared
length, lIall 2 = a • a. Norm of electromagnetic 2-form
or Faraday: IIFII2 = B2 _ £2.
2. Dual of a pjorm.
a. In an n-dimensional space, the dual of a p-form
a is the (n - p)-form *a, with components
( *0:) kt ...k n _ p --
o:litoo.ipl E
il ...i p kt ...kn-p·
b. Properties of duals:
**a = (-I)P-1a in spacetime;
a /\ *a = lIall 2e in general.
c. Note: the definition of e (exercise 3.13) entails
choosing an orientation of the space, i.e., decid-
ing which orthonormal bases (l) are "right-
handed" and thus (2) have e(e 1, ... ,en) = + 1.
Applications
a. For f a O-form, *f = fe, and ffd(volume) = f*f
b. Dual of charge-current I-form J is charge-current
3-form *J. The total charge Q in a 3-dimensional
hypersurface region S is
Q(S) =
fs
*J.
Conservation of charge is stated locally by d*J = O.
Stokes' Theorem goes from this differential conserva-
tion law to the Integral conservation law,
o =f d*J::=f *J.
'V
aT
This law is of most interest when a'Tf" = 52 - 51 con-
sists of the future 52 and past 51 boundaries of a
spacetime region, in which case it states Q(5 2 ) =
Q(5 1 ); see exercise 5.2.
c. Dual of electromagnetic field tensor F = Faraday is
*F = Maxwell. From the d*F = 417 *J Maxwell
equation, find 417Q = 417fs *J = fs d*F = fas *F.
3. Simple forms revisited.
a. The dual of a simple form is simple.
b. Egg crate of *(1 is perpendicular to egg crate
of (1 = a /\ p /\ ... /\ P in this sense:
(1) pick any vector V lying in intersection of
surfaces of (1
«a, V) = (P, V) = ... = (P, V) = 0);
(2) pick any vector W lying in intersection of
surfaces of *(1;
(3) then V and Ware necessarily perpendicu-
lar: V· W = O.
Example: (1 = 3 dt is a simple I-form in spacetime.
a. *(1 = -3 dx /\ dy /\ dz is a simple 3-form.
b. General vector in surfaces of (1 is
V = VZe z + Vlle ll + VZe z ·
c. General vector in intersection of surfaces of *(1 is
d. W· V=O.

§4.2.
99
ELECTROMAGNETIC 2-FORM AND LORENTZ FORCE
ELECTROMAGNETIC 2-FORM AND LORENTZ FORCE
=
The electromagnetic field tensor, Faraday
F, is an antisymmetric second-rank
tensor (i.e., 2-form). Instead of expanding it in terms of the tensor products of basis
I-forms,
the exterior calculus prefers to expand in terms of antisymmetrized tensor products
("exterior products," exercise 4.1):
F =
dx a /\ dx/3
i
Fa /3 dx a /\ dx/3,
=dx ® dx/3 - dx/3 ® dx
a
(4.1)
a
Electromagnetic 2-form
expressed in terms of exterior
products
(4.2)
•
Any 2-form (antisymmetric, second-rank tensor) can be so expanded. The symbol
" /\" is variously called a "wedge," a "hat," or an "exterior product sign"; and
dx a /\ dx/3 are the "basis 2-forms" of a given Lorentz frame (see §3.5, exercise 3.12,
and Box 4.1).
There is no simpler way to illustrate this 2-form representation of the electromag-
netic field than to consider a magnetic field in the x-direction:
FyZ = -F"y = B x '
(4.3)
F = B x dy /\ dz.
=
=
The I-form dy grad y is the set of surfaces (actually hypersurfaces) y
18 (all
t, x, z),y = 19 (all t, x, z),y= 20 (all t, x, z), etc.; and surfaces uniformly interpolated
between them. Similarly for the I-form dz. The intersection between these two sets
of surfaces produces a honeycomb-like structure. That structure becomes a "2-form"
when it is supplemented by instructions (see arrows in Figure 4.1) that give a "sense
of circulation" to each tube of the honeycomb (order of factors in the "wedge
product" of equation 4.2; dy /\ dz = -dz /\ dy). The 2-form F in the example
differs from this "basis 2-form" dy /\ dz only in this respect, that where dy /\ dz
had one tube, the field 2-form has B x tubes.
When one considers a tubular structure that twists and turns on its way through
spacetime. one must have more components to describe it. The 2-form for the general
electromagnetic field can be written as
A 2-form as a honeycomb of
tubes with a sense of
circulation
F=~~/\~+~~/\~+~~/\~+~~/\~
+ By dz /\ dx + Bz dx /\ dv
(4.4)
(6 components. 6 basis 2-forms).
A I-form is a machine to produce a number out of a vector (bongs of a bell as
the vector pierces successive surfaces). A 2-form is a machine to produce a number
out of an oriented surface (surface with a sense of circulation indicated on it: Figure
4.1, lower right). The meaning is as clear here as it is in elementary magnetism:
A 2-form as a machine to
produce a number out of an
oriented surface100
z
z
y
r--------.L-~~y
x
dy
x
dz
-
z
t~1
ul\v/
~
u
v
y
x
x
dy 1\ dz
Figure 4.1.
Construction of the 2-form for the electromagnetic field F = B z dy 1\ dz out of the I-forms dy and
dz by "wedge multiplication" (formation of honeycomb-like structure with sense of circulation indicated
by arrows). A 2-form is a "machine to construct a number out of an oriented surface" (illustrated by
sample surface enclosed by arrows at lower right; number of tubes intersected by this surface is
f
F= 18;
(this surface)
Faraday's concept of "magnetic flux"). This idea of 2-form machinery can be connected to the "tensor-
as-machine" idea of Chapter 3 as follows. The shape of the oriented surface over which one integrates
F does not matter, for small surfaces. All that affects JF is the area of the surface, and its orientation.
Choose two vectors, u and v, that lie in the surface. They form two legs of a parallelogram, whose
orientation (u followed by v) and area are embodied in the exterior product u 1\ v. Adjust the lengths
of u and v so their parallelogram, u 1\ v, has the same area as the surface of integration. Then
f
. surface
F
=f
u 1\ v
t
machinery idei1
of. this chapter]-----J
F
I
= F(u, v).
'---'
t~
-machinery idea
of Chapter 3
Exercise: derive this result, for an infinitesimal surface u 1\ v and for general F, using the formalism
of Box 4.1.·"
' \ §4.2,
ELECTROMAGNETIC 2·FORM AND LORENTZ FORCE
101
the number of Faraday tubes cu't by that surface. The electromagnetic 2-form F
or Faraday described by such a "tubular structure" (suitably abstracted; Box 4.2)
has a reality and a location in space that is independent of all coordinate systems
and all artificial distinctions between "electric" and "magnetic" fields. Moreover,
those tubes provide the most direct geometric representation that anyone has ever
been able to give for the machinery by which the electromagnetic field acts on a
charged particle. Take a particle of charge e and 4-velocity
(4.5)
Let this particle go through a region where the electromagnetic field is described
by the 2-form
F = B z dy /\ dz
(4.6)
of Figure 4.1. Then the force exerted on the particle (regarded as a I-form) is the
contraction of this 2-form with the 4-velocity (and the charge);
p = dp/dT = eF(u)
= e(F, u),
(4.7)
as one sees by direct evaluation, letting the two factors in the 2-form act in turn
on the tangent vector u:
p := eBz(dy /\ dz, u)
:= eBz{dy(dz,u) -
dZ(dy,u)}
dZ(dy,uVe v)}
:= eBx{dy(dz,uZez ) -
or
(4.8)
Comparing coefficients of the separate basis I-forms on the two sides of this equa-
tion, one sees reproduced all the detail of the Lorentz force exerted by the magnetic
field Bz :
.
dpv
dz
Pv := dT := eBx dT '
(4.9)
By simple extension of this line of reasoning to the general electromagnetic field,
one concludes that the time-rate ofchange ofmomentum (ljorm) is equal to the charge
multiplied by the contraction of the Faraday with the 4.velocity. Figure 4.2 illustrates
pictorially how the 2-form, F, serves as a machine to produce the I-form, p, out
of the tangent vector, eu.

Box 4.2
4. ELECTROMAGNETISM AND DIFFERENTIAL FORMS
ABSTRACTING A 2-FORM FROM THE CONCEPT OF "HONEYCOMB-
LIKE STRUCTURE," IN 3-SPACE AND IN SPACETIME
Open up a cardboard carton containing a dozen
bottles, and observe the honeycomb structure of
intersecting north-south and east-west cardboard
separators between the bottles. That honeycomb
structure of "tubes" ("channels for bottles") is a
fairly apt illustration of a 2-form in the context
of everyday 3-space. It yields a number (number
of tubes cut) for each choice of smooth element
of 2-surface slicing through the three-dimensional
structure. However, the intersecting cardboard
separators are rather too specific. All that a true
2-form can ever give is the number of tubes sliced
through, not the "shape" of the tubes. Slew the
carton around on the floor by 45 Then half the
separators run NW-SE and the other half run
NE-SW, but through a given bit of 2-surface fixed
in 3-space the count of tubes is unchanged. There-
fore, one should be careful to make the concept
of tubes in the mind's eye abstract enough that
one envisages direction of tubes (vertical in the
example) and density of tubes, but not any specific
location or orientation for the tube walls. Thus all
the following representations give one and the
same 2-form, CT:
0
•
CT = B dx /\ dy;
CT = B(2 dx) /\ (~ dY)
(NS cardboards spaced twice as close as before:
EW cardboards spaced twice as wide as before);
CT = Bd(X
0) /\ ;I)
d(X
(cardboards rotated through 45
0
);
a dx + f3 dy /\ Y dx + 0 dy
CT-B----=
-
(ao - f3y)1/2
(ao - f3y)1/2
(both orientation and spacing of "cardboards"
changing from point to point, with all four
functions, 0:, /1, y, and 8, depending on
position).
What has physical reality, and constitutes the real
geometric object, is not anyone of the I-forms just
encountered individually, but only the 2-form CT
itself. This circumstance helps to explain why in
the physical literature one sometimes refers to
"tubes of force" and sometimes to "lines of force."
The two terms for the same structure have this in
common, that each yields a number when sliced
by a bit of surface. The line-of-force picture has
the advantage of not imposing on the mind any
specific structure of "sheets of cardboard"; that is,
any specific decomposition of the 2-form into the
product of I-forms. However, that very feature is
also a disadvantage, for in a calculation one often
finds it useful to have a well-defined representa-
tion of the 2-form as the wedge product of I-forms.
Moreover, the tube picture, abstract though it
must be if it is to be truthful, also has this advan-
tage, that the orientation of the elementary tubes
(sense of circulation as indicated by arrows in
Figures 4.1 and 4.5, for example) lends itself to
ready visualization. Let the "walls" of the tubes
therefore remain in all pictures drawn in this book
as a reminder that 2-forms can be built out of
I-forms; but let it be understood here and here-
after how manyfold are the options for the indi-
vidual I-forms!
Turn now from three dimensions to four, and
find that the concept of "honeycomb-like struc-
ture" must be made still more abstract. In three
dimensions the arbitrariness of the decomposition
of the 2-form into I-forms showed in the slant and
packing of the "cardboards," but had no effect on
the verticality ,of the "channels for the bottles"
("direction of Faraday lines of force or tubes of force"); not so in four dimensions, or at least not
in the generic case in four dimensions.
In special cases, the story is almost as simple
in four dimensions as in three. An example of a
special case is once again the 2-form C1 = B dx
/\ dy, with all the options for decomposition into
I-forms that have already been mentioned, but
with every option giving the same "direction" for
the tubes. If the word "direction" now rises in
status from "tube walls unpierced by motion in
the direction of increasing z" to "tube walls un-
pierced either by motion in the direction of in-
creasing z, or by motion in the direction of in-
creasing t, or by any linear combination of such
motions," that is a natural enough consequence of
adding the new dimension. Moreover, the same
simplicity prevails for an electromagnetic plane
wave. For example, let the wave be advancing in
the z-direction, and let the electric polarization
point in the x-direction; then for a monochromatic
wave, one has
and all components distinct from these equal zero.
Faraday is
F = FOl dt /\ dx + F31 dz /\ dx
Eo cos w(z - t) d(z - t) /\ dx,
=
which is again representable as a single wedge
product of two I-forms.
Not so in general! The general 2-form in four
dimensions consists of six distinct wedge products,
F
= F dt /\ dx + F dt /\ dy + '"
Ol
02
+ F23 dy /\ dz.
It is too much to hope that this expression will
reduce in the generic case to a single wedge prod-
uct of two I-forms ("simple"2-form). It is not even
true that it will. It is only remarkable that it can
be reduced from six exterior products to two (de-
tails in exercise 4.1); thus,
Each product n i /\ (i individually can be visual-
ized as a honeycomb-like structure like those de-
picted in Figures 4.1, 4.2, 4.4, and 4.5. Each such
structure individually can be pictured as built out
of intersecting sheets (I-forms), but with such de-
tails as the tilt and packing of these I-forms ab-
stracted away. Each such structure individually
gives a number when sliced by an element of
surface. What counts for the 2-form F, however,
is neither the number of tubes of n 1 /\ (l cut by
the surface, nor the number of tubes of n 2 /\ (2
cut by the surface, but only the sum of the two.
This sum is what is referred to in the text as the
"number of tubes of F" cut by the surface. The
contribution of either wedge product individua~y
is not well-defined, for a simple reason: the de-
composition of a six-wedge-product object into
two wedge products, miraculous though it seems,
is actually far from unique (details in exercise 4.2).
In keeping with the need to have two products
of I-forms to represent the general 2-form note
that the vanishing of dF ("no magnetic charges")
does not automatically imply that d(n 1 /\ (1) or
d(n 2 /\ (2) separately vanish. Note also that any
spacelike slice through the general 2-form F (re-
duction from four dimensions to three) can always
be represented in terms of a honeycomb-like
structure ("simple" 2-form in three dimensions;
Faraday's picture of magnetic tubes of force).
Despite the abstraction that has gone on in see-
ing in all generality what a 2-form is, there is no
bar to continuing to use the term "honeycomb-like
structure" in a broadened sense to describe this
object; and that is the practice here and hereafter.


§4.3.
105
ELECTROMAGNETISM IN TERMS OF FORMS
FORMS ILLUMINATE ELECTROMAGNETISM, AND
ELECTROMAGNETISM ILLUMINATES FORMS
All electromagnetism allows itself to be summarized in the language of 2-forrns,
honeycomb-like "structures" (again in the abstract sense of "structure" of Box 4.2)
of tubes filling all spacetime, as well when spacetime is curved as when it is flat.
In brief, there are two such structures, one Faraday = F, the other Maxwell = *F,
each dual ("perpendicular," the only place where metric need enter the discussion)
to the other, each satisfying an elementary equation:
dF = 0
(4.10)
("no tubes of Faraday ever end") and
d*F
= 417 *J
(4.11 )
("the number of tubes of Maxwell that end in an elementary volume is equal to
the amount of electric charge in that volume"). To see in more detail how this
machinery shows up in action, look in turn at: (1) the definition of a 2-forrn; (2)
the appearance of a given electromagnetic field as Faraday and as Maxwell; (3)
the Maxwell structure for a point-charge at rest; (4) the same for a point-charge
in motion; (5) the nature of the field of a charge that moves uniformly except during
a brief instant of acceleration; (6) the Faraday structure for the field of an oscillating
dipole; (7) the concept of exterior derivative; (8) Maxwell's equations in the language
offorms; and (9) the solution of Maxwell's equations in flat spacetime, using a I-form
A from which the Lienard-Wiechert 2-forrn F can be calculated via F = dA.
A 2-forrn, as illustrated in Figure 4.1, is a machine to construct a number ("net
number of tubes cut") out of any "oriented 2-surface" (2-surface with "sense of
circulation" marked on it):
nUmber)
of tubes =
( cut
f
F
surface
A 2-form as machine for
number of tubes cut
(4.12)
For example, let the 2-forrn be the one illustrated in Figure 4.1
Number of tubes cut
calculated in one example
and let the surface of integration be the portion of the surface of the 2-sphere
x 2 + y2 + Z2 = a2 , t = constant, bounded between () = 70° and () = 110° and
between cp = 0° and cp = 90° ("Atlantic region of the tropics"). Write
y = a sin () sin cp,
z = a cos (),
dy = a (cos () sin cp cJ() + sin () cos cp dcp),
dz = -a sin () cJ(),
dy /\ dz = a 2 sin 2() cos cp cJ() /\ dcp.
The structure d() /\ d() looks like a "collapsed egg-crate" (Figure 1.4, upper right)
and has zero content, a fact formally evident from the vanishing of a /\ p =
- P /\ a when a and p are identical. The result of the integration, assuming constant
B z ' is
f
surface
F
= a 2 Bz i
110·
70·
sin 2() d()
f
90·
COS cp dcp
(4.14)
O·
It is not so easy to visualize a pure electric field by means of its 2-form F (Figure
4.4, left) as it is to visualize a pure magnetic field by means of its 2-form F (Figures
4.1,4.2,4.3). Is there not some way to treat the two fields on more nearly the same
footing? Yes, construct the 2-form *F (Figure 4.4, right) that is dual ("perpendicular";
Box 4.3; exercise 3.14) to F.

Represent in geometric form the field of a point-charge of strength e at rest at
the origin. Operate in flat space with spherical polar coordinates:
(4.15)
The electric field in the r-direction being E r = ejr Z, it follows that the 2-form F
or Faraday is
F
= IF
dxlJ. /\ dx' = -Erdt /\ dr = - ez dt /\ dr.
2
r
IJ.V
(4.16)
Its dual, according to the prescription in exercise 3.14, is Maxwell:
Maxwell
= *F = e sin B dB /\ dfP,
(4.17)
as illustrated in Figure 4.5.
Take a tour in the positive sense around a region of the surface of the sphere
illustrated in Figure 4.5. The number of tubes of *F encompassed in the route will
be precisely
nUmber)
(SOlid)
( of tubes = e angle .
The whole number of tubes of *F emergent Over the entire sphere will be 47Te, in
conformity with Faraday's picture of tubes of force.
How can one determine the structure of tubes associated with a charged particle
moving at a uniform velocity? First express *F in rectangular coordinates moving
with the particle (barred coordinates in this comoving "rocket" frame of reference;
unbarred coordinates will be used later for a laboratory frame of reference). The
relevant steps can be listed:
(a)
*F
= e sin B dB /\ dip = -e(d cos B) /\ dip;
(b)
_
xdy- Jdx
dfP=
22'
x +Y
fP = arctan ~ ;
x
(c)
-
z
COS() =-;
-d(cosB)
r
= -!!T
+~ (xdx+ Jdy+ TdZ);
r
r
(d) combine to find
*F = (e/r 3 )(xdy /\ dT + Jeff /\ dx + Tdx /\ dy)
(4.18)
(electromagnetic field of point charge in a comoving Cartesian system; spherically
symmetric). Now transform to laboratory coordinates:
velocity parameter a
velocity /3 = tanh a
1
---;::====:::;:
VI - /32
= cosh a,
/3
VI - /32
= sinh a
(a)t = t cosh a - x sinh a,
= - t si~ a + x cosh a,
[Y~ =y
z = z;
(b)r = [(x cosh a - t sinh a)2 + y 2 + z2jl/2;
(c)*F = (e/r 3 )[(x cosh a - t sinh a) dy /\ dz + Y dz /\
(cosh a dx - sinh a dt) + z(cosh a dx - sinh a dt) /\ ~vl;
(4.19)
(d) compare with the general dual 2-form,
~=~~A~+~~A~+~~A~
+ Bz dt A dx + B v dt A dy + Bz dt Adz;
and get the desired individual field components
(e)
E r = (e/r 3 )(x cosh a - t sinh a),
E = (e/r 3 )y cosh cr,
( v
E z = (e/r 3 )z cosh a,
B r = 0,
By = -(e/r 3 )z sinh cr,
B z = (e/r 3 )y sinh 0:.
(420)
One can verify that the invariants
B2 _ E2 = 1 F px/3
2 a/3
'
1
E· B = -F
4 a/3 *Fa/3
.
(4.21 )
(4.22)
have the same value in the laboratory frame as in the rocket frame, as required.
Note that the honeycomb structure of the differential form is not changed when
one goes from the rocket frame to the laboratory frame. What changes is only the
mathematical formula that describes it.
Box 4.3
4. ELECTROMAGNETISM AND DIFFERENTIAL FORMS
DUALITY OF 2-FORMS IN SPACETIME
Given a general 2:.form (containing six exterior or wedge products)
F
= Exdx /\ dt + E"dy /\ dt + ... + Bzdx /\ dy,
one gets to its dual ("perpendicular") by the prescription
*F = -Bxdx /\ dt - ... + E"dz /\ dx + Ezdx /\ dy.
Duality Rotations
Note that the dual of the dual is the negative of the original 2-form; thus
**F
= -Exdx /\ dt - ... -Bzdx /\ dy = -F.
In this sense * has the same property as the imaginary number i: ** = ii = -1.
Thus one can write
e*'" = cos a + *sin a.
This operation, applied to F, carries attention from the generic 2-form in its simplest
representation (see exercise 4.1)
F = Exdx /\ dt + Bxdy /\ dz
to another "duality rotated electromagnetic field"
e*"'F = (Ex cos a - Bx sin a) dx /\ dt + (B x cos a + Ex sin a) dy /\ dz.
If the original field satisfied Maxwell's empty-space field equations, so does the new
field. With suitable choice of the "complexion" a, one can annul one of the two
wedge products at any chosen point in spacetime and have for the other.

§4.4.
How an acceleration causes
radiation
RADIATION FIELDS
The Maxwell structure of tubes associated with a charge in uniform motion is more
remarkable than it may seem at first sight, and not only because of the Lorentz
contraction of the tubes in the direction of motion. The tubes arbitrarily far away
move on in military step with the charge on which they center, despite the fact that
there is no time for information "emitted" from the charge "right now" to get to
the faraway tube "right now." The structure of the faraway tubes "right now" must
therefore derive from the charge at an earlier moment on its uniform-motion,
straight-line trajectory. This circumstance shows up nowhere more clearly than in
what happens to the field in consequence of a sudden change, in a short time ,,'h,
from one uniform velocity to another uniform velocity (Figure 4.6). The tubes have
the standard patterns for the two states of motion, one pattern within a sphere of
radius r, the other outside that sphere, where r is equal to the lapse of time ("cm
of light-travel time") since the acceleration took place. The necessity for the two
patterns to fit together in the intervening zone, of thickness ..dr = ..dr, forces the field
there to be multiplied up by a "stretching factor," proportional to r. This factor is
responsible for the well-known fact that radiative forces fall off inversely only as
the first power of the distance (Figure 4.6).
When the charge continuously changes its state of motion, the structure of the
electromagnetic field, though based on the same simple principles as those illustrated
in Figure 4.6, nevertheless looks more complex. The following is the Faraday 2-form
for the field of an electric dipole of magnitude PI oscillating up and down parallel
to the z-axis:
F = Ex dx /\ dl + ... + B x d)' /\ dz + ... = real part of {PIeiwr-iwt
2
1 -?
iw ) dr /\ dt + SIn
. () ( -3
1 - ?iw - -w ) r cJ() /\ d t
[2 cos () ( -:-1
,
,..
r-
;
'
r-
_~) dr /\ r
gives B¢
r-
r
,
gives E 9
gives E r
+ sin () (-~w
r
r
cJ()]}
and the dual 2-form Maxwell = *F is
*F = -Bx dx /\ dt - ... + Ex dy /\ d= + ... = real part of {Pleiwr-iwt
[sin 0 ( - ~w -
~)
dt /\ rsin 0 de>
r
r-
gives B¢
+ 2 cos 0 C~
- ~~ )
r dO /\ r sin 0 dep
,
I
gives E r
+ sin 0
(-1_
iw - ~)r sin 0 d<j> /\ dr]).
r
r
r
3
(4.24)
2
gives Eo
§4.5.
MAXWELL'S EQUATIONS
The general 2-form F is written as a superposition of wedge products with a
factor ~,
F = 1- F
2
JlP
dx/l /\ dx'
'
(4.25)
because the typical term appears twice, once as Fz" dx /\ dy and the second time
as F"x dy /\ dx, with F"x = - Fz" and dy /\ dx = - dx /\ dy.
If differentiation ("taking the gradient"; the operator d) produced out of a scalar
a I-form, it is also true that differentiation (again the operator d, but now generally
known under Cartan's name of "exterior differentiation") produces a 2-form 'out
of the general I-form; and applied to a 2-form produces a 3-form; and applied to
a 3-form produces a 4-form, the form of the highest order that spacetime will
accommodate. Write the general.fform as
(4.26)
Taking exterior derivative
where the coefficient ep"I"Z"'''f' like the wedge product that follows it, is antisym-
metric under interchange of any two indices. Then the exterior derivative of t/J is
(4.27)
Take the exterior derivative of Faraday according to this rule and find that it
vanishes, not only for the special case of the dipole oscillator, but also for a general
electromagnetic field. Thus, in the coordinates appropriate for a local Lorentz frame,
one has dF = d(Ezdx /\ dt + ... + Bzdy /\ dz + ... )
aEz dt + __
aEz dx + __
aEz dy + __
a zE
= ( __
dz) /\ dx /\ dt
at
ax
ay
az
+ ... (5 more such sets of 4 terms each) ....
(4.28)
Note that such a term as dy /\ dy /\ dz is automatically zero ("collapse of egg-crate
cell when stamped on"). Collect the terms that do not vanish and find
aBz + __
aB" + __
aBz ) dx /\ dy /\ dz
dF = ( __
ax
ay
az
+ ( -aB z + -aEz - -aE,,) dt /\ dy /\ dz
at
ay
az
+ ( -aB" + -aEz - -aEz ) dt /\ dz /\ dx
at
az
ax
aBz + __
aE"
+ ( __
at
aEz ) dt /\ dx /\ dy.
ay
ax
(4.29)
Each term in this expression is familiar from Maxwell's equations
div B
and
= V· B = 0
curlE = V xE=-B.
Each vanishes, and with their vanishing Faraday itself is seen to have zero exterior
derivative:
(4.30)
dF=O.
In other words, "Faraday is a closed 2-form"; "the tubes of F nowhere come to
an end."
Faraday structure: tubes
nowhere end
A similar calculation gives for the exterior derivative of the dual2-form Maxwell
the result
d*F = d(-Bzdx /\ dt - '"
+ Ezdy /\ dz + ... )
aEx + __
aE" + __
aE)
= ( __
z dx /\ dy /\ dz
ax
ay
az
+ ( -aEz - -aBz + -aB,,) dt /\ dy /\ dz
at
ay
az
+ .. ,
= 417(p dx /\ dy /\ dz
- Jx dt /\ dy /\ dz
- J" dt /\ dz /\ dx
- Jz dt /\ dx /\ dy) = 4'ii *J;
d*F = 417 *J.
Maxwell structure: density
(4.31)
of tube endings given by
charge-current 3-form
In empty space this exterior derivative, too, vanishes; there Maxwell is a closed
2-form; the tubes of *F, like the tubes of F, nowhere come to an end.
In a region where charge is present, the situation changes. Tubes of Maxwell
take their origin in such a region. The density of endings is described by the 3-form
* J = charge, a "collection of eggcrate cells" collected along bundles of world lines.
The two equations
dF= 0
and
d*F=4'iT*J
Duality: the only place in
electromagnetism where
metric must enter
summarize the entire content of Maxwell's equations in geometric language. The
forms F = Faraday, and *F = Maxwell, can be described in any coordinates one
pleases-or in a language (honeycomb and egg-crate structures) free of any reference
whatsoever to coordinates. Remarkably, neither equation makes any reference
whatsoever to metric. As Hermann Weyl was one of the most emphatic in stressing
(see also Chapters 8 and 9), the concepts of form and exterior derivative are metric-
free. Metric made an appearance only in one place, in the concept of duality
("perpendicularity") that carried attention from F to the dual structure *F
§4.6.
Closed 2-form contrasted
with general 2-form
EXTERIOR DERIVATIVE AND CLOSED FORMS
The words "honeycomb" and "egg crate" may have given some feeling for the
geometry that goes with electrodynamics. Now to spell out these concepts more
clearly and illustrate in geometric terms, with electrodynamics as subject matter,
what it means to speak of "exterior differentiation." Marching around a boundary,
yes; but how and why and with what consequences? It is helpful to return to functions
and I-forms, and see them and the 2-forms Faraday and Maxwell and the 3-form
charge as part of an ordered progression (see Box 4.4). Two-forms are seen in this
box to be of two kinds: (I) a special 2-form, known as a "closed" 2-form, which
has the property that as many tubes enter a closed 2-surface as emerge from it
(exterior derivative of2-form zero; no 3-form derivable from it other than the trivial
zero 3-form!); and (2) a general 2-form, which sends across a closed 2-surface a
non-zero net number of tubes, and therefore permits one to define a nontrivial3-form
("exterior derivative of the 2-form"), which has precisely as many egg-crate cells
in any closed 2-surface as the net number of tubes of the 2-form emerging from
that same closed 2-surface (generalization of Faraday's concept of tubes of force
to the world of spacetime, curved as well as flat).
(continued on page 120)

Box 4.4
THE PROGRESSION OF FORMS AND EXTERIOR DERIVATIVES
O-Form or Scalar, f
An example in the context of 3-space and Newto-
nian physics is temperature, T(x,y, z), and in the
context of spacetime, a scalar potential, ep(t, x,y, z).
From Scalar to 1-Form
Take the gradient or "exterior derivative" of a
scalar fto obtain a special I-form, y = df Com-
ments: (a) Any additive constant included in f is
erased in the process of differentiation; the quan-
tity n in the diagram at the left is unknown and
irrelevant. (b) The I-form y is special in the sense
that surfaces in one region "mesh" with surfaces
in a neighboring region ("closed I-form"). (c) Line
integral f~ df is independent of path for any class
of paths equivalent to one another under continu-
ous deformation. (d) The I-form is a machine to
produce a number ("bongs of bell" as each succes-
sive integral surface is crossed) out of a displace-
ment (approximation to concept of a tangent
vector).
General 1-Form f3
= f3 dx
a
a
This is a pattern of surfaces, as illustrated in the
diagram at the right; i.e., a machine to produce
a number ("bongs of bell"; <p,
out of a vector.
A I-form has a reality and position in space inde-
pendent of all choice of coordinates. Surfaces do
not ordinarily mesh. Integral fp around indicated
closed loop does not give zero (""more bongs than
antibongs").
u»
From 1-Form to 2-Form ( =
af3
ax'"
df3 = - -a dx'" /\ dx a
( is a pattern of honeycomb-like cells, with a di-
rection of circulation marked on each, so stationed
that the number of cells encompassed in the dotted
closed path is identical to the net contribution
(excess of bongs over antibongs) for the same path
in the diagram of P above. The "exterior deriva-
tive" is defined so this shall be so; the generalized
Stokes theorem codifies it. The word· "exterior"
comes from the fact that the path goes around the
periphery of the region under analysis. Thus the
2-form is a machine to get a number (number of
tubes,
u /\ v» ou t of a bit of surface (u /\ v)
that has a sense of circulation indicated upon
it. The 2-form thus defined is special in this sense:
a rubber sheet "supported around its edges" by
the dotted curve or any other closed curve is
crossed by the same number of tubes when; (a)
it bulges up in the middle; (b) it is pushed down
in the middle; (c) it experiences any other continu-
ous deformation. The Faraday or 2-form F of
electromagnetism, always expressible as F = dA
(A = 4-potential, a I-form), also has always this
special property ("conservation of tubes").
«,
O-Form to 1-Form to 2-Form? No!
Go from scalar f to I-form y = df The next step
to a 2-form a is vacuous. The net contribution of
the line integral fy around the dotted closed path
is automatically zero. To reproduce that zero result
requires a zero 2-form. Thus a = dy = ddf has
to be the zero 2-form. This result is a special in-
stance of the general result dd = O.
Again, this is a honeycomb-like structure, and
again a machine to get a number (number of
tubes, <U, u /\ v» out of a surface (u /\ v) that
has a sense of circulation indicated On it. It is
general in the sense that the honeycomb structures
in one region do not ordinarily mesh with those
in a neighboring region. In consequence, a closed
2-surface, such as the box-like surface indicated
by dotted lines at the right, is ordinarily crossed
by a non-zero net number of tubes. The net num-
ber of tubes emerging from such a closed surface
is, however, exactly zero when the 2-forrn is the
exterior derivative of a I-form.
--/~
//
... t'\:
II
--I
\
'J.• .• ;.
I::.,
I
II II
I. 'I
I
I.I
I
I
:'
I
I /
,/
1,/
.
.
oxY
3! dx[Y ® dx a ® dx,8l
w»
* J = p dx 1\ dy 1\ dz - Jz dt 1\ dy 1\ dz
- Jv dt 1\ dz 1\ dx - Jz dt 1\ dx 1\ dy.
1/
1/
-----J
From 2-Form to 3-Form JJ = dq = oO'la,81 dx Y 1\ dx a 1\ dx,8,
This egg-crate type of structure is a machine to
get a number (number of cells (p, U 1\ v 1\
from a volume (volume U 1\ v 1\ w within which
one counts the cells). A more complete diagram
would provide each cell and the volume of inte-
gration itself with an indicator of orientation
(analogous to the arrow of circulation shown for
cells of the 2-form). The contribution of a given
cell to the count of cells is + I or -I, according
as the orientation indicators have same sense or
opposite sense. The number of egg-crate cells of
p = dq in any given volume (such as the volume
indicated by the dotted lines) is tailored to give
precisely the same number as the net number of
tubes of the 2-form q (diagram above) that emerge
from that volume (generalized Stokes theorem).
For electromagnetism, the exterior derivative of
Faraday or 2-form F gives a null 3-form, but the
exterior derivative of Maxwell or 2-form *F gives
4'1T times the 3-form *J of charge:
From 1-Form to 2-Form to 3-Form? No!
Starting with a I-form (electromagnetic 4-potential), construct its exterior deriva-
tive. the 2-form F = dA (Faraday). The tubes in this honeycomb-like structure never
end. So the number of tube endings in any elementary volume, and with it the 3-form
dF = ddA, is automatically zero. This is another example of the general result that
dd =0.
From 2-Form to 3-Form to 4-Form? No!
Starting with 2-form *F (Maxwell), construct its exterior derivative, the 3-form
4'17 *J. The cells in this egg-crate type of structure extend in a fourth dimension
("hypertube"). The number of these hypertubes that end in any elementary 4-vol-
ume, and with it the 4-form
d(4'17 *J) = dd*F,
is automatically zero, still another example of the general result that dd = O. This
result says that
d *J
aJ )
= ( -ap
+ _aJz + aJ + _
z dt 1\ dx 1\ dy 1\ dz = 0
at
ax
ay
az
_/I
("law of conservation of charge"). Note:
This implies dt 1\ dx 1\ dy 1\ dz
= c.
From 3-Form to 4-Form T = dJJ =
oV 1a,8YI dx~ /\ dx a /\ dx,8 /\ dx Y
OX~
This four-dimensional "super-egg-crate" type structure is a machine to get a number
(number of cells, (7, n 1\ u 1\ v 1\ w» from a 4-volume n 1\ u 1\ v 1\ w.
From 4-Form to 5-Form? No!
Spacetime, being four-dimensional, cannot accommodate five-dimensional egg-crate
structures. At least two of the dxll's in
dx" 1\ dx/3 1\ dx Y 1\ dx 8 1\ dx'
must be the same; so, by antisymmetry of" 1\," this "basis 5-form" must vanish.
Results of Exterior Differentiation, Summarized
O-form
I-form
2-form
3-form
4-form
5-form?
f
df
ddf=O
A
F= dA
*F
dF = ddA =0
4'17 *J = d*F
d(4'17 *J) = dd*F
=0
T
"= dtI
dT=O
No!
P
dp =0
New Forms from Old by Taking Dual (see exercise 3.14)
Dual of scalar f is 4-form: *f = f dxo 1\ dx 1 1\ dx 2 1\ dx 3 = fe.
Dual of I-form J is 3-form: *J = JO dx 1 1\ dx 2 1\ dx 3 - j l dx 2 1\ dx 3 1\ dxo
+ j2 dx 3 1\ dxo 1\ dx 1 - J3 dx o 1\ dx 1 1\ dx 2 .
Dual of 2-form F is 2-form: *F = FI"/3l f "/3lll v l dx ll 1\ dx V ' where
F"/3 = l)"Al)/3 8FA8 •
Dual of 3-form K is I-form: *K = K012 dx 3 - K123 dx o + K230 dx 1 -
where K,,/3Y l)"~/3vl)YAKIlVA'
K301 dx 2 ,
=
Dual of 4-form L is a scalar: L = L 0123 dxo 1\ dx 1 1\ dx 2 1\ dx 3 ;
*L
L0123
- L0123 '
=
=
Note I: This concept of duality between one form and another is to be distinguished
from the concept of duality between the vector basis e" and the Ijorm basis w"
of a given frame. The two types of duality have nothing whatsoever to do with each
other!
Box 4.4 (continued)
Note 2: In spacetime, the operation of taking the dual, applied twice, leads back
to the original form for forms of odd order, and to the negative thereof for forms
of even order. In Euclidean 3-space the operation reproduces the original form,
regardless of its order.
Duality Plus Exterior Differentiation
Start with scalar cf;. Its gradient dcf; is a I-form. Take its dual, to get the 3-forrn *dcf;.
Take its exterior derivative, to get the 4-form d *dcf;. Take its dual, to get the scalar
Dcf;
-*d *dcf;. Verify by index manipulations that D as defined here is the
wave operator; i.e., in any Lorentz frame, Dcf; = cf;,<>'<> = -(a 2cf;/at 2) + V 2cf;.
Start with 110rm A. Get 2-form F = dA. Take its dual *F = *dA, also a 2-form.
Take its exterior derivative, obtaining the 3-form d*F (has value 4'17 *J in electro-
magnetism). Take its dual, obtaining the I-form *d*F = *d*dA = 4'17J ("Wave
equation for electromagnetic 4-potential"). Reduce in index notation to
=
F
JI."
,v
= A ",JI. ,v - A JI.," ,v = 4'17J .
JI.
[More in Flanders (1963) or Misner and Wheeler (1957); see also exercise 3.17.]
§4.7.
DISTANT ACTION FROM LOCAL LAW
Differential forms are a powerful tool in electromagnetic theory, but full power
requires mastery of other tools as well. Action-at-a-distance techniques ("Green's
functions," "propagators") are of special importance. Moreover, the passage from
Maxwell field equations to electromagnetic action at a distance provides a preview
of how Einstein's local equations will reproduce (approximately) Newton's l/r 2 law.
In flat spacetime and in a Lorentz coordinate system, express the coordinates of
particle A as a function of its proper time a, thus:
d 2a ll _ "Il( )
da 2 - a a.
(4.32)
Dirac found it helpful to express the distribution of charge and current for a particle
of charge e following such a motion as a superposition of charges that momentarily§4.7.
121
DISTANT ACTION FROM LOCAL LAW
flash into existence and then flash out of existence. Any such flash has a localization
in space and time that can be written as the product of four Dirac delta functions
[see, for example, Schwartz (1950-1951), Lighthill (1958)]:
84(X Il - all) = 8[xO - dl(a)] 8[x 1 - a1(a)] 8[x 2 - a2(a)] 8[x3 - a3(a)].
World line of charge
regarded as succession of
flash-on, flash-off charges
(4.33)
Here any single Dirac function 8(x) ("symbolic function"; "distribution"; "limit of
a Gauss error function" as width is made indefinitely narrow and peak indefinitely
high, with integrated value always unity) both (1) vanishes for x f:. 0, and (2) has
8(x) dx = 1. Described in these terms, the density-current vector
the integral
for the particle has the value ("superposition of flashes")
J::
Jil
= e f 84 [x" - a"(a)]all(a) da.
(4.34)
The density-current (4.34) drives the electromagnetic field, F. Write F = dA to
satisfy automatically half of Maxwell's equations (dF = ddA
0):
=
(4.35)
In flat space, the remainder of Maxwell's equations (d*F = 4'1T *J) become
or
(4.36)
Make use of the freedom that exists in the choice of 4-potentials A" to demand
aA"
-
=0
ax"
(4.37)
(Lorentz gauge condition; see exercise 3.17). Thus get
(4.38)
The electromagnetic wave
equation
The density-current being the superposition of "flashes," the effect (A) of this
density-current can be expressed as the superposition of the effects E of elementary
flashes; thus
AIl(X)
= f E[x - a(a)]all(a) da,
(4.39)
where the "elementary effect" E ("kernel"; "Green's function") satisfies the equation
DE(x) = -4'1T 84 (x).
(4.40)
One solution is the "half-advanced-plus-half-retarded potential,"
(4.41)

It vanishes everywhere except on the backward and forward light cones, where it
has equal strength. Normally more useful is the retarded solution,
R(x)
= {~E(X)
if XO > 0,
if XO < 0,
(4.42)
which is obtained by doubling (4.41) in the region of the forward light cone and
nullifying it in the region of the backward light cone. All electrodynamics (Coulomb
forces, Ampere's law, electromagnetic induction, radiation) follows from the simple
expression (4.39) for the vector potential [see, e.g., Wheeler and Feynman (1945)
and (1949), also Rohrlich (1965)].