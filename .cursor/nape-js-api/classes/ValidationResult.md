Source: https://napejs.org/api/classes/ValidationResult.html

* ValidationResult

# Class ValidationResult

Result of polygon shape validation.

* `VALID` — shape is valid
* `DEGENERATE` — shape is degenerate (e.g., zero area)
* `CONCAVE` — shape is concave (must be convex)
* `SELF_INTERSECTING` — shape edges self-intersect

* Defined in [packages/nape-js/src/shape/ValidationResult.ts:11](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L11)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[CONCAVE](#concave)
[DEGENERATE](#degenerate)
[SELF\_INTERSECTING](#self_intersecting)
[VALID](#valid)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new ValidationResult(): ValidationResult

  #### Returns ValidationResult

  + Defined in [packages/nape-js/src/shape/ValidationResult.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L12)

## Accessors

### `Static`CONCAVE

* get CONCAVE(): ValidationResult

  #### Returns ValidationResult

  + Defined in [packages/nape-js/src/shape/ValidationResult.ts:36](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L36)

### `Static`DEGENERATE

* get DEGENERATE(): ValidationResult

  #### Returns ValidationResult

  + Defined in [packages/nape-js/src/shape/ValidationResult.ts:27](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L27)

### `Static`SELF\_INTERSECTING

* get SELF\_INTERSECTING(): ValidationResult

  #### Returns ValidationResult

  + Defined in [packages/nape-js/src/shape/ValidationResult.ts:45](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L45)

### `Static`VALID

* get VALID(): ValidationResult

  #### Returns ValidationResult

  + Defined in [packages/nape-js/src/shape/ValidationResult.ts:18](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L18)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/shape/ValidationResult.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/ValidationResult.ts#L54)
