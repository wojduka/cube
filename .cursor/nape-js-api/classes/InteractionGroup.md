Source: https://napejs.org/api/classes/InteractionGroup.html

* InteractionGroup

# Class InteractionGroup

Hierarchical interaction group for controlling interactions
between sets of interactors.

Internally wraps a ZPP\_InteractionGroup and is registered as
the public `nape.dynamics.InteractionGroup` class in the nape namespace.

* Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[group](#group)
[groups](#groups)
[ignore](#ignore)
[interactors](#interactors)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new InteractionGroup(ignore?: boolean): InteractionGroup

  #### Parameters

  + ignore: boolean = false

  #### Returns InteractionGroup

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L16)

## Accessors

### group

* get group(): InteractionGroup | null

  #### Returns InteractionGroup | null

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L49)
* set group(value: InteractionGroup | null): void

  #### Parameters

  + value: InteractionGroup | null

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:55](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L55)

### groups

* get groups(): any

  #### Returns any

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:79](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L79)

### ignore

* get ignore(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:62](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L62)
* set ignore(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:65](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L65)

### interactors

* get interactors(): any

  #### Returns any

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:72](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L72)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/dynamics/InteractionGroup.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionGroup.ts#L90)
