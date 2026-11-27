Source: https://napejs.org/api/classes/Mat23.html

* Mat23

# Class Mat23

2x3 affine transformation matrix [a b tx; c d ty].

* Defined in [packages/nape-js/src/geom/Mat23.ts:9](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L9)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[a](#a)
[b](#b)
[c](#c)
[d](#d)
[determinant](#determinant)
[tx](#tx)
[ty](#ty)

### Methods

[clone](#clone)
[concat](#concat)
[copy](#copy)
[equals](#equals)
[equiorthogonal](#equiorthogonal)
[equiorthogonalise](#equiorthogonalise)
[inverse](#inverse)
[inverseTransform](#inversetransform)
[orthogonal](#orthogonal)
[orthogonalise](#orthogonalise)
[reset](#reset)
[set](#set)
[setAs](#setas)
[singular](#singular)
[toString](#tostring)
[transform](#transform)
[transpose](#transpose)
[\_wrap](#_wrap)
[rotation](#rotation)
[scale](#scale)
[translation](#translation)

## Constructors

### constructor

* new Mat23(  
      a?: number,  
      b?: number,  
      c?: number,  
      d?: number,  
      tx?: number,  
      ty?: number,  
  ): Mat23

  Create a Mat23 with the given components. Defaults to the identity matrix `[1 0 0; 0 1 0]`.

  #### Parameters

  + a: number = 1.0

    Component at row 0, col 0.
  + b: number = 0.0

    Component at row 0, col 1.
  + c: number = 0.0

    Component at row 1, col 0.
  + d: number = 1.0

    Component at row 1, col 1.
  + tx: number = 0.0

    Translation component along x.
  + ty: number = 0.0

    Translation component along y.

  #### Returns Mat23

  + Defined in [packages/nape-js/src/geom/Mat23.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L22)

## Accessors

### a

* get a(): number

  Matrix component at row 0, col 0. The matrix layout is `[a b tx; c d ty]`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:110](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L110)
* set a(v: number): void

  Matrix component at row 0, col 0. The matrix layout is `[a b tx; c d ty]`.

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Mat23.ts:114](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L114)

### b

* get b(): number

  Matrix component at row 0, col 1. The matrix layout is `[a b tx; c d ty]`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:119](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L119)
* set b(v: number): void

  Matrix component at row 0, col 1. The matrix layout is `[a b tx; c d ty]`.

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Mat23.ts:123](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L123)

### c

* get c(): number

  Matrix component at row 1, col 0. The matrix layout is `[a b tx; c d ty]`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:128](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L128)
* set c(v: number): void

  Matrix component at row 1, col 0. The matrix layout is `[a b tx; c d ty]`.

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Mat23.ts:132](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L132)

### d

* get d(): number

  Matrix component at row 1, col 1. The matrix layout is `[a b tx; c d ty]`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L137)
* set d(v: number): void

  Matrix component at row 1, col 1. The matrix layout is `[a b tx; c d ty]`.

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Mat23.ts:141](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L141)

### determinant

* get determinant(): number

  The determinant of the linear 2×2 part (ad − bc).

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:164](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L164)

### tx

* get tx(): number

  Translation component along x. The matrix layout is `[a b tx; c d ty]`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:146](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L146)
* set tx(v: number): void

  Translation component along x. The matrix layout is `[a b tx; c d ty]`.

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Mat23.ts:150](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L150)

### ty

* get ty(): number

  Translation component along y. The matrix layout is `[a b tx; c d ty]`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Mat23.ts:155](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L155)
* set ty(v: number): void

  Translation component along y. The matrix layout is `[a b tx; c d ty]`.

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Mat23.ts:159](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L159)

## Methods

### clone

* clone(): Mat23

  Return a new Mat23 with the same components. Alias for `copy()`.

  #### Returns Mat23

  A new Mat23 with the same components.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:176](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L176)

### concat

* concat(matrix: Mat23): Mat23

  Return `matrix × this` (apply this matrix first, then `matrix`).

  #### Parameters

  + matrix: Mat23

    The matrix to concatenate on the left.

  #### Returns Mat23

  A new Mat23 representing the combined transformation.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:317](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L317)

### copy

* copy(): Mat23

  Return a new Mat23 with the same components.

  #### Returns Mat23

  A deep copy of this matrix.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:213](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L213)

### equals

* equals(other: Mat23, epsilon?: number): boolean

  Check whether this Mat23 is component-wise equal to another, within an optional epsilon tolerance.

  #### Parameters

  + other: Mat23

    The Mat23 to compare against.
  + epsilon: number = 0

    Maximum allowed difference per component (default 0).

  #### Returns boolean

  `true` if all six components differ by at most `epsilon`.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:187](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L187)

### equiorthogonal

* equiorthogonal(): boolean

  Return `true` if the matrix is equiorthogonal (uniform scale, no shear).

  #### Returns boolean

  `true` when the matrix has equal scale on both axes and no shear.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:416](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L416)

### equiorthogonalise

* equiorthogonalise(): this

  Adjust the matrix in-place to be equiorthogonal (uniform scale, no shear).

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:485](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L485)

### inverse

* inverse(): Mat23

  Return the inverse of this matrix.

  #### Returns Mat23

  A new Mat23 that is the inverse of this one.

  #### Throws

  If the matrix is singular.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:287](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L287)

### inverseTransform

* inverseTransform(point: [Vec2](Vec2.md), noTranslation?: boolean, weak?: boolean): [Vec2](Vec2.md)

  Apply the inverse transformation to a Vec2. Throws if the matrix is singular.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The Vec2 to transform.
  + noTranslation: boolean = false

    When true, the translation components (tx, ty) are ignored.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  A new Vec2 with the inverse-transformed coordinates.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:376](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L376)

### orthogonal

* orthogonal(): boolean

  Return `true` if the matrix is orthogonal (unit-scale rotation, no shear).

  #### Returns boolean

  `true` when the column vectors are orthonormal.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:429](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L429)

### orthogonalise

* orthogonalise(): this

  Adjust the matrix in-place to be orthogonal (normalise column vectors).

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:496](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L496)

### reset

* reset(): this

  Reset to the identity matrix in-place.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:266](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L266)

### set

* set(matrix: Mat23): this

  Copy all components from another Mat23 into this one in-place.

  #### Parameters

  + matrix: Mat23

    The source matrix to copy from.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:229](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L229)

### setAs

* setAs(  
      a?: number,  
      b?: number,  
      c?: number,  
      d?: number,  
      tx?: number,  
      ty?: number,  
  ): this

  Set all six components at once in-place.

  #### Parameters

  + a: number = 1.0

    Component at row 0, col 0.
  + b: number = 0.0

    Component at row 0, col 1.
  + c: number = 0.0

    Component at row 1, col 0.
  + d: number = 1.0

    Component at row 1, col 1.
  + tx: number = 0.0

    Translation along x.
  + ty: number = 0.0

    Translation along y.

  #### Returns this

  `this` for chaining.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:249](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L249)

### singular

* singular(): boolean

  Return `true` if the matrix is singular (non-invertible) within the engine's epsilon threshold.

  #### Returns boolean

  `true` when the matrix cannot be safely inverted.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:274](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L274)

### toString

* toString(): string

  String representation `{ a: … b: … c: … d: … tx: … ty: … }`.

  #### Returns string

  A human-readable string of the matrix components.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:507](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L507)

### transform

* transform(point: [Vec2](Vec2.md), noTranslation?: boolean, weak?: boolean): [Vec2](Vec2.md)

  Transform a Vec2 by this matrix. If `noTranslation` is true, only the linear 2×2 part is applied.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The Vec2 to transform.
  + noTranslation: boolean = false

    When true, the translation components (tx, ty) are ignored.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  A new Vec2 with the transformed coordinates.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:340](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L340)

### transpose

* transpose(): Mat23

  Return the transpose of this matrix.

  #### Returns Mat23

  A new Mat23 that is the transpose of this one.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:307](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L307)

### `Static`\_wrap

* \_wrap(inner: any): Mat23

  #### Parameters

  + inner: any

  #### Returns Mat23

  + Defined in [packages/nape-js/src/geom/Mat23.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L82)

### `Static`rotation

* rotation(angle: number): Mat23

  Create a pure rotation matrix for the given angle in radians.

  #### Parameters

  + angle: number

    Rotation angle in radians.

  #### Returns Mat23

  A new Mat23 representing the rotation.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:53](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L53)

### `Static`scale

* scale(sx: number, sy: number): Mat23

  Create a pure scale matrix.

  #### Parameters

  + sx: number

    Scale factor along x.
  + sy: number

    Scale factor along y.

  #### Returns Mat23

  A new Mat23 representing the scale.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L78)

### `Static`translation

* translation(tx: number, ty: number): Mat23

  Create a pure translation matrix.

  #### Parameters

  + tx: number

    Translation along x.
  + ty: number

    Translation along y.

  #### Returns Mat23

  A new Mat23 representing the translation.

  + Defined in [packages/nape-js/src/geom/Mat23.ts:68](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Mat23.ts#L68)
