Source: https://napejs.org/api/classes/CbType.html

* CbType

# Class CbType

Callback type tag — used to label bodies, shapes, and constraints so that
listeners can selectively respond to interactions involving specific objects.

Objects can carry multiple `CbType`s (via their `cbTypes` list). Listeners
match against those types using [OptionType](OptionType.md) include/exclude filters,
or using the built-in singletons (`ANY_BODY`, `ANY_SHAPE`, etc.).

#### Example

```
const playerType = new CbType();  
body.cbTypes.add(playerType);  
  
const listener = new InteractionListener(  
  CbEvent.BEGIN,  
  InteractionType.COLLISION,  
  playerType,  
  null,  
  (cb) => { console.log('player hit something'); },  
);  
space.listeners.add(listener);
Copy
```

* Defined in [packages/nape-js/src/callbacks/CbType.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L30)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[constraints](#constraints)
[id](#id)
[interactors](#interactors)
[userData](#userdata)
[ANY\_BODY](#any_body)
[ANY\_COMPOUND](#any_compound)
[ANY\_CONSTRAINT](#any_constraint)
[ANY\_SHAPE](#any_shape)

### Methods

[excluding](#excluding)
[including](#including)
[toString](#tostring)

## Constructors

### constructor

* new CbType(): CbType

  #### Returns CbType

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L34)

## Accessors

### constraints

* get constraints(): object

  Live list of all constraints currently tagged with this `CbType`. Read-only.

  #### Returns object

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:118](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L118)

### id

* get id(): number

  Unique numeric identifier for this `CbType` instance.

  #### Returns number

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:85](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L85)

### interactors

* get interactors(): object

  Live list of all interactors (bodies/shapes/compounds) currently tagged
  with this `CbType`. Read-only.

  #### Returns object

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:107](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L107)

### userData

* get userData(): Record<string, unknown>

  Arbitrary user data attached to this `CbType`.

  Lazily initialized to `{}` on first access. Use to store application-level
  metadata associated with the type.

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:95](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L95)

### `Static`ANY\_BODY

* get ANY\_BODY(): CbType

  Built-in type automatically assigned to every [Body](Body.md).
  Use in listeners to respond to all bodies without a custom `CbType`.

  #### Returns CbType

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:47](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L47)

### `Static`ANY\_COMPOUND

* get ANY\_COMPOUND(): CbType

  Built-in type automatically assigned to every [Compound](Compound.md).
  Use in listeners to respond to all compounds without a custom `CbType`.

  #### Returns CbType

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:75](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L75)

### `Static`ANY\_CONSTRAINT

* get ANY\_CONSTRAINT(): CbType

  Built-in type automatically assigned to every [Constraint](Constraint.md), so a
  `ConstraintListener` on it matches every constraint. (nape-js ≤ 3.42.3
  never attached it.)

  #### Returns CbType

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:57](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L57)

### `Static`ANY\_SHAPE

* get ANY\_SHAPE(): CbType

  Built-in type automatically assigned to every [Shape](Shape.md).
  Use in listeners to respond to all shapes without a custom `CbType`.

  #### Returns CbType

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:66](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L66)

## Methods

### excluding

* excluding(excludes: CbType | [OptionType](OptionType.md)): [OptionType](OptionType.md)

  Creates a new [OptionType](OptionType.md) that includes this type but excludes `excludes`.

  Shorthand for `new OptionType(this).excluding(excludes)`.

  #### Parameters

  + excludes: CbType | [OptionType](OptionType.md)

    `CbType` or `OptionType` to reject.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:147](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L147)

### including

* including(includes: CbType | [OptionType](OptionType.md)): [OptionType](OptionType.md)

  Creates a new [OptionType](OptionType.md) that includes this type and also `includes`.

  Shorthand for `new OptionType(this).including(includes)`.

  #### Parameters

  + includes: CbType | [OptionType](OptionType.md)

    Additional `CbType` or `OptionType` to require.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:136](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L136)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/CbType.ts:151](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbType.ts#L151)
