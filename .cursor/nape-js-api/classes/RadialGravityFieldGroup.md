Source: https://napejs.org/api/classes/RadialGravityFieldGroup.html

* RadialGravityFieldGroup

# Class RadialGravityFieldGroup

A composable collection of [RadialGravityField](RadialGravityField.md) instances. Calling
`apply()` runs every member field once — convenient for multi-source
scenarios (binary stars, three-body, planet platformers).

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:254](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L254)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[fields](#fields)

### Accessors

[length](#length)

### Methods

[add](#add)
[apply](#apply)
[clear](#clear)
[remove](#remove)

## Constructors

### constructor

* new RadialGravityFieldGroup(): RadialGravityFieldGroup

  #### Returns RadialGravityFieldGroup

## Properties

### `Readonly`fields

fields: [RadialGravityField](RadialGravityField.md)[] = []

Ordered list of fields. Mutate via [add](#add) / [remove](#remove).

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:256](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L256)

## Accessors

### length

* get length(): number

  Number of fields currently in the group.

  #### Returns number

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:278](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L278)

## Methods

### add

* add(field: [RadialGravityField](RadialGravityField.md)): [RadialGravityField](RadialGravityField.md)

  Add a field to the group and return it.

  #### Parameters

  + field: [RadialGravityField](RadialGravityField.md)

  #### Returns [RadialGravityField](RadialGravityField.md)

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:259](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L259)

### apply

* apply(space: [Space](Space.md)): void

  Apply every field's force contribution to all eligible bodies in `space`.
  Forces stack additively, preserving any userland `body.force` writes.

  #### Parameters

  + space: [Space](Space.md)

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:286](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L286)

### clear

* clear(): void

  Remove all fields.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:273](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L273)

### remove

* remove(field: [RadialGravityField](RadialGravityField.md)): boolean

  Remove a field from the group. Returns `true` if it was present.

  #### Parameters

  + field: [RadialGravityField](RadialGravityField.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:265](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L265)
