Source: https://napejs.org/api/classes/Interactor.html

* Interactor

# Class Interactor

Base class for all interactable physics objects (Body, Shape, Compound).

Cannot be instantiated directly — only via Body, Shape, or Compound.
Provides shared properties: id, userData, group, cbTypes, and type
casting methods (castBody, castShape, castCompound).

Fully modernized — all methods use ZPP\_Interactor fields directly
via `zpp_inner_i` (no compiled prototype delegation).

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Interactor))

* Interactor
  + [Body](Body.md)
  + [Compound](Compound.md)
  + [Shape](Shape.md)

* Defined in [packages/nape-js/src/phys/Interactor.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L38)

##### Index

### Accessors

[castBody](#castbody)
[castCompound](#castcompound)
[castShape](#castshape)
[cbTypes](#cbtypes)
[group](#group)
[id](#id)
[userData](#userdata)

### Methods

[isBody](#isbody)
[isCompound](#iscompound)
[isShape](#isshape)
[toString](#tostring)

## Accessors

### castBody

* get castBody(): any

  Cast to Body — returns the Body wrapper if this is a Body, else null.

  #### Returns any

  + Defined in [packages/nape-js/src/phys/Interactor.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L108)

### castCompound

* get castCompound(): any

  Cast to Compound — returns the Compound wrapper if this is a Compound, else null.

  #### Returns any

  + Defined in [packages/nape-js/src/phys/Interactor.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L126)

### castShape

* get castShape(): any

  Cast to Shape — returns the Shape wrapper if this is a Shape, else null.

  #### Returns any

  + Defined in [packages/nape-js/src/phys/Interactor.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L117)

### cbTypes

* get cbTypes(): any

  Callback types assigned to this interactor.

  #### Returns any

  + Defined in [packages/nape-js/src/phys/Interactor.ts:100](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L100)

### group

* get group(): [InteractionGroup](InteractionGroup.md) | null

  The interaction group this interactor belongs to.

  #### Returns [InteractionGroup](InteractionGroup.md) | null

  + Defined in [packages/nape-js/src/phys/Interactor.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L90)
* set group(value: [InteractionGroup](InteractionGroup.md) | null): void

  #### Parameters

  + value: [InteractionGroup](InteractionGroup.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Interactor.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L94)

### id

* get id(): number

  Unique numeric identifier for this interactor.

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Interactor.ts:77](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L77)

### userData

* get userData(): Record<string, unknown>

  User-defined data storage object.

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/phys/Interactor.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L82)

## Methods

### isBody

* isBody(): boolean

  Returns true if this interactor is a Body.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Interactor.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L144)

### isCompound

* isCompound(): boolean

  Returns true if this interactor is a Compound.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Interactor.ts:149](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L149)

### isShape

* isShape(): boolean

  Returns true if this interactor is a Shape.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Interactor.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L139)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/phys/Interactor.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L153)
