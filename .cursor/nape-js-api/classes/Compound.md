Source: https://napejs.org/api/classes/Compound.html

* Compound

# Class Compound

A compound physics object — a hierarchical grouping of Bodies, Constraints,
and other Compounds.

Fully modernized — uses ZPP\_Compound directly (extracted to TypeScript).

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Compound))

* [Interactor](Interactor.md)
  + Compound

* Defined in [packages/nape-js/src/phys/Compound.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L16)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[bodies](#bodies)
[castBody](#castbody)
[castCompound](#castcompound)
[castShape](#castshape)
[cbTypes](#cbtypes)
[compound](#compound)
[compounds](#compounds)
[constraints](#constraints)
[group](#group)
[id](#id)
[space](#space)
[userData](#userdata)

### Methods

[breakApart](#breakapart)
[COM](#com)
[copy](#copy)
[isBody](#isbody)
[isCompound](#iscompound)
[isShape](#isshape)
[rotate](#rotate)
[toString](#tostring)
[translate](#translate)
[visitBodies](#visitbodies)
[visitCompounds](#visitcompounds)
[visitConstraints](#visitconstraints)

## Constructors

### constructor

* new Compound(): Compound

  #### Returns Compound

  Overrides Interactor.constructor

  + Defined in [packages/nape-js/src/phys/Compound.ts:20](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L20)

## Accessors

### bodies

* get bodies(): object

  Bodies in this compound.

  #### Returns object

  + Defined in [packages/nape-js/src/phys/Compound.ts:61](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L61)

### castBody

* get castBody(): any

  Cast to Body — returns the Body wrapper if this is a Body, else null.

  #### Returns any

  Inherited from Interactor.castBody

  + Defined in [packages/nape-js/src/phys/Interactor.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L108)

### castCompound

* get castCompound(): any

  Cast to Compound — returns the Compound wrapper if this is a Compound, else null.

  #### Returns any

  Inherited from Interactor.castCompound

  + Defined in [packages/nape-js/src/phys/Interactor.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L126)

### castShape

* get castShape(): any

  Cast to Shape — returns the Shape wrapper if this is a Shape, else null.

  #### Returns any

  Inherited from Interactor.castShape

  + Defined in [packages/nape-js/src/phys/Interactor.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L117)

### cbTypes

* get cbTypes(): any

  Callback types assigned to this interactor.

  #### Returns any

  Inherited from Interactor.cbTypes

  + Defined in [packages/nape-js/src/phys/Interactor.ts:100](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L100)

### compound

* get compound(): Compound | null

  Parent compound, or null if this is a root compound.

  #### Returns Compound | null

  + Defined in [packages/nape-js/src/phys/Compound.ts:80](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L80)
* set compound(value: Compound | null): void

  #### Parameters

  + value: Compound | null

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Compound.ts:84](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L84)

### compounds

* get compounds(): object

  Child compounds in this compound.

  #### Returns object

  + Defined in [packages/nape-js/src/phys/Compound.ts:71](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L71)

### constraints

* get constraints(): object

  Constraints in this compound.

  #### Returns object

  + Defined in [packages/nape-js/src/phys/Compound.ts:66](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L66)

### group

* get group(): [InteractionGroup](InteractionGroup.md) | null

  The interaction group this interactor belongs to.

  #### Returns [InteractionGroup](InteractionGroup.md) | null

  Inherited from Interactor.group

  + Defined in [packages/nape-js/src/phys/Interactor.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L90)
* set group(value: [InteractionGroup](InteractionGroup.md) | null): void

  #### Parameters

  + value: [InteractionGroup](InteractionGroup.md) | null

  #### Returns void

  Inherited from Interactor.group

  + Defined in [packages/nape-js/src/phys/Interactor.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L94)

### id

* get id(): number

  Unique numeric identifier for this interactor.

  #### Returns number

  Inherited from Interactor.id

  + Defined in [packages/nape-js/src/phys/Interactor.ts:77](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L77)

### space

* get space(): [Space](Space.md) | null

  Space this compound belongs to (only settable on root compounds).

  #### Returns [Space](Space.md) | null

  + Defined in [packages/nape-js/src/phys/Compound.ts:103](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L103)
* set space(value: [Space](Space.md) | null): void

  #### Parameters

  + value: [Space](Space.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Compound.ts:107](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L107)

### userData

* get userData(): Record<string, unknown>

  User-defined data storage object.

  #### Returns Record<string, unknown>

  Inherited from Interactor.userData

  + Defined in [packages/nape-js/src/phys/Interactor.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L82)

## Methods

### breakApart

* breakApart(): void

  Distribute all children to the parent compound or space, then remove.

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Compound.ts:140](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L140)

### COM

* COM(weak?: boolean): [Vec2](Vec2.md)

  Calculate the center of mass of all bodies in this compound.

  #### Parameters

  + weak: boolean = false

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Compound.ts:193](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L193)

### copy

* copy(): Compound

  Deep copy of this compound and all its children.

  #### Returns Compound

  + Defined in [packages/nape-js/src/phys/Compound.ts:135](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L135)

### isBody

* isBody(): boolean

  Returns true if this interactor is a Body.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isBody](Interactor.md#isbody)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L144)

### isCompound

* isCompound(): boolean

  Returns true if this interactor is a Compound.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isCompound](Interactor.md#iscompound)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:149](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L149)

### isShape

* isShape(): boolean

  Returns true if this interactor is a Shape.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isShape](Interactor.md#isshape)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L139)

### rotate

* rotate(centre: [Vec2](Vec2.md), angle: number): Compound

  Rotate all bodies in this compound around the given centre point.

  #### Parameters

  + centre: [Vec2](Vec2.md)
  + angle: number

  #### Returns Compound

  + Defined in [packages/nape-js/src/phys/Compound.ts:239](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L239)

### toString

* toString(): string

  #### Returns string

  Overrides [Interactor](Interactor.md).[toString](Interactor.md#tostring)

  + Defined in [packages/nape-js/src/phys/Compound.ts:261](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L261)

### translate

* translate(translation: [Vec2](Vec2.md)): Compound

  Translate all bodies in this compound by the given vector.

  #### Parameters

  + translation: [Vec2](Vec2.md)

  #### Returns Compound

  + Defined in [packages/nape-js/src/phys/Compound.ts:216](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L216)

### visitBodies

* visitBodies(lambda: (body: [Body](Body.md)) => void): void

  Recursively visit all bodies in this compound and its sub-compounds.

  #### Parameters

  + lambda: (body: [Body](Body.md)) => void

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Compound.ts:145](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L145)

### visitCompounds

* visitCompounds(lambda: (compound: Compound) => void): void

  Recursively visit all sub-compounds in this compound.

  #### Parameters

  + lambda: (compound: Compound) => void

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Compound.ts:179](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L179)

### visitConstraints

* visitConstraints(lambda: (constraint: [Constraint](Constraint.md)) => void): void

  Recursively visit all constraints in this compound and its sub-compounds.

  #### Parameters

  + lambda: (constraint: [Constraint](Constraint.md)) => void

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Compound.ts:162](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Compound.ts#L162)
