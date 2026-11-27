Source: https://napejs.org/api/classes/MatMN.html

* MatMN

# Class MatMN

Variable-sized M×N matrix.

* Defined in [packages/nape-js/src/geom/MatMN.ts:7](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L7)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[cols](#cols)
[rows](#rows)

### Methods

[clone](#clone)
[equals](#equals)
[mul](#mul)
[setx](#setx)
[toString](#tostring)
[transpose](#transpose)
[x](#x)

## Constructors

### constructor

* new MatMN(rows: number, cols: number): MatMN

  Create a zero-filled M×N matrix. Both dimensions must be ≥ 1.

  #### Parameters

  + rows: number

    Number of rows (must be ≥ 1).
  + cols: number

    Number of columns (must be ≥ 1).

  #### Returns MatMN

  + Defined in [packages/nape-js/src/geom/MatMN.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L16)

## Accessors

### cols

* get cols(): number

  Number of columns.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/MatMN.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L54)

### rows

* get rows(): number

  Number of rows.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/MatMN.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L49)

## Methods

### clone

* clone(): MatMN

  Return a new MatMN with the same dimensions and element values.

  #### Returns MatMN

  A deep copy of this matrix.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:121](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L121)

### equals

* equals(other: MatMN, epsilon?: number): boolean

  Check whether this MatMN is element-wise equal to another, within an optional epsilon tolerance.
  Matrices must have the same dimensions.

  #### Parameters

  + other: MatMN

    The MatMN to compare against.
  + epsilon: number = 0

    Maximum allowed difference per element (default 0).

  #### Returns boolean

  `true` if dimensions match and all elements differ by at most `epsilon`.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:101](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L101)

### mul

* mul(matrix: MatMN): MatMN

  Return the matrix product `this × matrix`. Column count of this must equal row count of `matrix`.

  #### Parameters

  + matrix: MatMN

    The right-hand matrix to multiply by.

  #### Returns MatMN

  A new MatMN representing the product.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:171](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L171)

### setx

* setx(row: number, col: number, value: number): number

  Write `value` to the element at (row, col). Returns the written value.

  #### Parameters

  + row: number

    Zero-based row index.
  + col: number

    Zero-based column index.
  + value: number

    The value to write.

  #### Returns number

  The written value.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L82)

### toString

* toString(): string

  String representation with rows separated by semicolons.

  #### Returns string

  A human-readable string of the matrix elements.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:133](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L133)

### transpose

* transpose(): MatMN

  Return a new transposed matrix (N×M).

  #### Returns MatMN

  A new MatMN that is the transpose of this one.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:156](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L156)

### x

* x(row: number, col: number): number

  Read the element at (row, col). Zero-based indices.

  #### Parameters

  + row: number

    Zero-based row index.
  + col: number

    Zero-based column index.

  #### Returns number

  The element value at the given position.

  + Defined in [packages/nape-js/src/geom/MatMN.ts:68](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MatMN.ts#L68)
