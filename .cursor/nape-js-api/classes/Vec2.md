Source: https://napejs.org/api/classes/Vec2.html

* Vec2

# Class Vec2

2D vector used for positions, velocities, forces, and other 2D quantities.

Supports object pooling via `Vec2.get()` / `dispose()`, weak references
that auto-dispose after a single use, and immutability guards.

* Defined in [packages/nape-js/src/geom/Vec2.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[angle](#angle)
[length](#length)
[x](#x)
[y](#y)

### Methods

[add](#add)
[addeq](#addeq)
[addMul](#addmul)
[clone](#clone)
[copy](#copy)
[cross](#cross)
[dispose](#dispose)
[dot](#dot)
[equals](#equals)
[lsq](#lsq)
[mul](#mul)
[muleq](#muleq)
[normalise](#normalise)
[perp](#perp)
[reflect](#reflect)
[rotate](#rotate)
[set](#set)
[setxy](#setxy)
[sub](#sub)
[subeq](#subeq)
[toString](#tostring)
[unit](#unit)
[distance](#distance)
[dsq](#dsq)
[eq](#eq)
[fromAngle](#fromangle)
[fromPolar](#frompolar)
[get](#get)
[lerp](#lerp)
[weak](#weak)

## Constructors

### constructor

* new Vec2(x?: number, y?: number): Vec2

  Creates a Vec2 with the given components. Defaults to (0, 0).

  #### Parameters

  + x: number = 0

    The x component (default 0).
  + y: number = 0

    The y component (default 0).

  #### Returns Vec2

  + Defined in [packages/nape-js/src/geom/Vec2.ts:28](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L28)

## Accessors

### angle

* get angle(): number

  Angle of the vector in radians, measured counter-clockwise from the +x
  axis. Returns 0 for the zero vector.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec2.ts:435](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L435)
* set angle(value: number): void

  Setting angle preserves the vector's magnitude and rotates it to the given
  angle.

  #### Parameters

  + value: number

    The desired angle in radians. Must not be NaN.

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec2.ts:452](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L452)

### length

* get length(): number

  Magnitude (Euclidean length) of the vector.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec2.ts:399](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L399)
* set length(value: number): void

  Setting length scales the vector to the given magnitude. Throws if the
  vector is zero-length.

  #### Parameters

  + value: number

    The desired magnitude. Must not be NaN.

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec2.ts:413](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L413)

### x

* get x(): number

  The x component.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec2.ts:357](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L357)
* set x(value: number): void

  The x component.

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec2.ts:364](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L364)

### y

* get y(): number

  The y component.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec2.ts:378](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L378)
* set y(value: number): void

  The y component.

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec2.ts:385](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L385)

## Methods

### add

* add(vector: Vec2, weak?: boolean): Vec2

  Return a new Vec2 equal to `this + other`.

  #### Parameters

  + vector: Vec2

    The Vec2 to add.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 with components `(this.x + other.x, this.y + other.y)`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:665](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L665)

### addeq

* addeq(vector: Vec2): this

  Add another Vec2 to this in-place (`this += other`).

  #### Parameters

  + vector: Vec2

    The Vec2 to add.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:755](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L755)

### addMul

* addMul(vector: Vec2, scalar: number, weak?: boolean): Vec2

  Return a new Vec2 equal to `this + other × scalar`.

  #### Parameters

  + vector: Vec2

    The Vec2 to scale and add.
  + scalar: number

    The multiplier applied to `vector` before addition.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 with components `(this.x + vector.x * scalar, this.y + vector.y * scalar)`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:690](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L690)

### clone

* clone(): Vec2

  Return a new Vec2 with the same components. Alias for `copy()`.

  #### Returns Vec2

  A new Vec2 with the same x and y values.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:527](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L527)

### copy

* copy(weak?: boolean): Vec2

  Return a new Vec2 with the same components.

  #### Parameters

  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A copy of this vector.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:559](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L559)

### cross

* cross(vector: Vec2): number

  2D cross product (`this.x × other.y − this.y × other.x`). Returns a
  scalar.

  #### Parameters

  + vector: Vec2

    The other Vec2.

  #### Returns number

  The scalar cross product.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:844](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L844)

### dispose

* dispose(): void

  Return this Vec2 to the object pool. Throws if already disposed or
  immutable.

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec2.ts:877](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L877)

### dot

* dot(vector: Vec2): number

  Dot product of this and another Vec2.

  #### Parameters

  + vector: Vec2

    The other Vec2.

  #### Returns number

  `this.x * other.x + this.y * other.y`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:822](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L822)

### equals

* equals(other: Vec2, epsilon?: number): boolean

  Check whether this Vec2 is component-wise equal to another, within an optional epsilon tolerance.

  #### Parameters

  + other: Vec2

    The Vec2 to compare against.
  + epsilon: number = 0

    Maximum allowed difference per component (default 0).

  #### Returns boolean

  `true` if both components differ by at most `epsilon`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:538](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L538)

### lsq

* lsq(): number

  Returns the squared magnitude. Faster than `length` as it avoids a square
  root.

  #### Returns number

  `x² + y²`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:477](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L477)

### mul

* mul(scalar: number, weak?: boolean): Vec2

  Return a new Vec2 equal to `this × scalar`.

  #### Parameters

  + scalar: number

    The multiplier.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 with components `(this.x * scalar, this.y * scalar)`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:738](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L738)

### muleq

* muleq(scalar: number): this

  Multiply this Vec2 by a scalar in-place (`this ×= scalar`).

  #### Parameters

  + scalar: number

    The multiplier.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:803](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L803)

### normalise

* normalise(): this

  Normalise this vector to unit length in-place. Throws for zero-length
  vectors.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:622](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L622)

### perp

* perp(weak?: boolean): Vec2

  Return the perpendicular vector, rotated 90° counter-clockwise.

  #### Parameters

  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 with components `(-this.y, this.x)`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:865](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L865)

### reflect

* reflect(vec: Vec2, weak?: boolean): Vec2

  Reflect `vec` about this vector as a normal axis.

  #### Parameters

  + vec: Vec2

    The Vec2 to reflect.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 that is the reflection of `vec` about this vector.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:597](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L597)

### rotate

* rotate(angle: number): this

  Rotate this vector by `angle` radians in-place.

  #### Parameters

  + angle: number

    The rotation angle in radians.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:573](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L573)

### set

* set(vector: Vec2): this

  Copy another Vec2's components into this vector in-place.

  #### Parameters

  + vector: Vec2

    The source Vec2 to copy from.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:491](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L491)

### setxy

* setxy(x: number, y: number): this

  Set both components at once in-place.

  #### Parameters

  + x: number

    The new x component.
  + y: number

    The new y component.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:515](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L515)

### sub

* sub(vector: Vec2, weak?: boolean): Vec2

  Return a new Vec2 equal to `this − other`.

  #### Parameters

  + vector: Vec2

    The Vec2 to subtract.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 with components `(this.x - other.x, this.y - other.y)`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:714](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L714)

### subeq

* subeq(vector: Vec2): this

  Subtract another Vec2 from this in-place (`this -= other`).

  #### Parameters

  + vector: Vec2

    The Vec2 to subtract.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:779](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L779)

### toString

* toString(): string

  String representation in the form `{ x: … y: … }`.

  #### Returns string

  A human-readable string of this vector's components.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:912](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L912)

### unit

* unit(weak?: boolean): Vec2

  Return a new unit-length vector with the same direction. Throws for
  zero-length vectors.

  #### Parameters

  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A normalised copy of this vector.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:645](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L645)

### `Static`distance

* distance(a: Vec2, b: Vec2): number

  Euclidean distance between two Vec2s.

  #### Parameters

  + a: Vec2

    The first Vec2.
  + b: Vec2

    The second Vec2.

  #### Returns number

  The distance `sqrt((a.x - b.x)² + (a.y - b.y)²)`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:328](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L328)

### `Static`dsq

* dsq(a: Vec2, b: Vec2): number

  Squared Euclidean distance between two Vec2s. Avoids a square root when
  only comparison is needed.

  #### Parameters

  + a: Vec2

    The first Vec2.
  + b: Vec2

    The second Vec2.

  #### Returns number

  The squared distance `(a.x - b.x)² + (a.y - b.y)²`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:297](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L297)

### `Static`eq

* eq(a: Vec2, b: Vec2, epsilon?: number): boolean

  Check whether two Vec2s are component-wise equal, within an optional epsilon tolerance.
  Disposes weak arguments after comparison.

  #### Parameters

  + a: Vec2

    The first Vec2.
  + b: Vec2

    The second Vec2.
  + epsilon: number = 0

    Maximum allowed difference per component (default 0).

  #### Returns boolean

  `true` if both components differ by at most `epsilon`.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:266](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L266)

### `Static`fromAngle

* fromAngle(radians: number, weak?: boolean): Vec2

  Create a unit Vec2 pointing in the given direction (angle in radians).
  Equivalent to `Vec2.fromPolar(1, radians)`.

  #### Parameters

  + radians: number

    The angle in radians, measured counter-clockwise from the +x axis.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A unit Vec2 at the given angle.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:220](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L220)

### `Static`fromPolar

* fromPolar(length: number, angle: number, weak?: boolean): Vec2

  Create a Vec2 from polar coordinates (length and angle in radians).

  #### Parameters

  + length: number

    The magnitude of the resulting vector.
  + angle: number

    The angle in radians, measured counter-clockwise from the +x axis.
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 with components `(length * cos(angle), length * sin(angle))`.

  #### Example

  ```
  const v = Vec2.fromPolar(1, Math.PI / 4); // 45-degree unit vector
  Copy
  ```

  + Defined in [packages/nape-js/src/geom/Vec2.ts:200](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L200)

### `Static`get

* get(x?: number, y?: number, weak?: boolean): Vec2

  Allocate a Vec2 from the public object pool. If `weak` is true, the vector
  auto-disposes after a single API call.

  #### Parameters

  + x: number = 0

    The x component (default 0).
  + y: number = 0

    The y component (default 0).
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A pooled or newly created Vec2.

  #### Example

  ```
  const v = Vec2.get(3, 4);  
  // use v ...  
  v.dispose();
  Copy
  ```

  + Defined in [packages/nape-js/src/geom/Vec2.ts:169](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L169)

### `Static`lerp

* lerp(a: Vec2, b: Vec2, t: number, weak?: boolean): Vec2

  Linearly interpolate between two Vec2s. Returns `a + t * (b - a)`.
  Disposes weak arguments after use.

  #### Parameters

  + a: Vec2

    The start Vec2 (t = 0).
  + b: Vec2

    The end Vec2 (t = 1).
  + t: number

    The interpolation factor (typically 0–1, but not clamped).
  + weak: boolean = false

    If true, the returned Vec2 is auto-disposed after one use (default false).

  #### Returns Vec2

  A new Vec2 at the interpolated position.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:234](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L234)

### `Static`weak

* weak(x?: number, y?: number): Vec2

  Allocate a weak Vec2 (auto-disposes after a single use).

  #### Parameters

  + x: number = 0

    The x component (default 0).
  + y: number = 0

    The y component (default 0).

  #### Returns Vec2

  A weak, pooled Vec2 that is automatically disposed after one API call.

  + Defined in [packages/nape-js/src/geom/Vec2.ts:183](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec2.ts#L183)
