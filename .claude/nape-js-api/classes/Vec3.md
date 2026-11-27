Source: https://napejs.org/api/classes/Vec3.html

* Vec3

# Class Vec3

3D vector used for constraint impulses and other 3-component values.

Supports object pooling via `Vec3.get()` / `dispose()`.

* Defined in [packages/nape-js/src/geom/Vec3.ts:11](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L11)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[length](#length)
[x](#x)
[y](#y)
[z](#z)

### Methods

[clone](#clone)
[dispose](#dispose)
[equals](#equals)
[lsq](#lsq)
[set](#set)
[setxyz](#setxyz)
[toString](#tostring)
[xy](#xy)
[get](#get)

## Constructors

### constructor

* new Vec3(x?: number, y?: number, z?: number): Vec3

  Create a Vec3 with the given components. Defaults to (0, 0, 0).

  #### Parameters

  + x: number = 0

    The x component.
  + y: number = 0

    The y component.
  + z: number = 0

    The z component.

  #### Returns Vec3

  + Defined in [packages/nape-js/src/geom/Vec3.ts:27](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L27)

## Accessors

### length

* get length(): number

  Magnitude of the 3D vector.

  #### Returns number

  The Euclidean length `sqrt(x² + y² + z²)`.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:154](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L154)
* set length(value: number): void

  Scale the vector to the given magnitude.

  #### Parameters

  + value: number

  #### Returns void

  #### Throws

  If the vector has zero length.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:165](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L165)

### x

* get x(): number

  The x component.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec3.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L109)
* set x(value: number): void

  The x component.

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec3.ts:116](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L116)

### y

* get y(): number

  The y component.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec3.ts:123](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L123)
* set y(value: number): void

  The y component.

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec3.ts:130](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L130)

### z

* get z(): number

  The z component.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Vec3.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L137)
* set z(value: number): void

  The z component.

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Vec3.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L144)

## Methods

### clone

* clone(): Vec3

  Return a new Vec3 with the same components.

  #### Returns Vec3

  A copy of this vector.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:264](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L264)

### dispose

* dispose(): void

  Return this Vec3 to the object pool.

  #### Returns void

  #### Throws

  If this Vec3 has already been disposed.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:285](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L285)

### equals

* equals(other: Vec3, epsilon?: number): boolean

  Check whether this Vec3 is component-wise equal to another, within an optional epsilon tolerance.

  #### Parameters

  + other: Vec3

    The Vec3 to compare against.
  + epsilon: number = 0

    Maximum allowed difference per component (default 0).

  #### Returns boolean

  `true` if all three components differ by at most `epsilon`.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:240](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L240)

### lsq

* lsq(): number

  Squared magnitude. Faster than `length` as it avoids a square root.

  #### Returns number

  `x² + y² + z²`.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:191](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L191)

### set

* set(vector: Vec3): this

  Copy another Vec3's components into this one in-place.

  #### Parameters

  + vector: Vec3

    The source Vec3 to copy from.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:203](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L203)

### setxyz

* setxyz(x: number, y: number, z: number): this

  Set all three components at once in-place.

  #### Parameters

  + x: number

    The new x component.
  + y: number

    The new y component.
  + z: number

    The new z component.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:222](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L222)

### toString

* toString(): string

  String representation `{ x: … y: … z: … }`.

  #### Returns string

  A human-readable string of the three components.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:306](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L306)

### xy

* xy(weak?: boolean): [Vec2](Vec2.md)

  Return the x and y components as a new Vec2.

  #### Parameters

  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  A new Vec2 containing this vector's x and y components.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:275](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L275)

### `Static`get

* get(x?: number, y?: number, z?: number): Vec3

  Allocate a Vec3 from the public object pool, or create a new one if the pool is empty.

  #### Parameters

  + x: number = 0

    Initial x component (default 0).
  + y: number = 0

    Initial y component (default 0).
  + z: number = 0

    Initial z component (default 0).

  #### Returns Vec3

  A Vec3 initialised with the given components.

  + Defined in [packages/nape-js/src/geom/Vec3.ts:85](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Vec3.ts#L85)
