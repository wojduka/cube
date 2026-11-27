Source: https://napejs.org/api/classes/OptionType.html

* OptionType

# Class OptionType

Composite callback option type — combines include and exclude [CbType](CbType.md) lists
to express complex listener filter conditions.

An interaction satisfies an `OptionType` when the interactor has **at least one**
of the included types and **none** of the excluded types.

#### Example

```
// Listen only for bodies that are "enemy" but not "boss"  
const filter = new OptionType(enemyType).excluding(bossType);  
const listener = new BodyListener(CbEvent.WAKE, filter, (cb) => { ... });
Copy
```

* Defined in [packages/nape-js/src/callbacks/OptionType.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L19)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[excludes](#excludes)
[includes](#includes)

### Methods

[excluding](#excluding)
[including](#including)
[toString](#tostring)

## Constructors

### constructor

* new OptionType(  
      includes?: [CbType](CbType.md) | OptionType,  
      excludes?: [CbType](CbType.md) | OptionType,  
  ): OptionType

  Creates an `OptionType` optionally seeded with initial include/exclude entries.

  #### Parameters

  + `Optional`includes: [CbType](CbType.md) | OptionType

    Initial type(s) to include.
  + `Optional`excludes: [CbType](CbType.md) | OptionType

    Initial type(s) to exclude.

  #### Returns OptionType

  + Defined in [packages/nape-js/src/callbacks/OptionType.ts:29](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L29)

## Accessors

### excludes

* get excludes(): object

  Live list of `CbType`s that an interactor must have none of.

  #### Returns object

  + Defined in [packages/nape-js/src/callbacks/OptionType.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L54)

### includes

* get includes(): object

  Live list of `CbType`s that an interactor must have at least one of.

  #### Returns object

  + Defined in [packages/nape-js/src/callbacks/OptionType.ts:46](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L46)

## Methods

### excluding

* excluding(excludes: [CbType](CbType.md) | OptionType): this

  Adds `excludes` to the exclude list and returns `this` for chaining.

  #### Parameters

  + excludes: [CbType](CbType.md) | OptionType

    `CbType` or `OptionType` whose types should be added to excludes.

  #### Returns this

  + Defined in [packages/nape-js/src/callbacks/OptionType.ts:80](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L80)

### including

* including(includes: [CbType](CbType.md) | OptionType): this

  Adds `includes` to the include list and returns `this` for chaining.

  #### Parameters

  + includes: [CbType](CbType.md) | OptionType

    `CbType` or `OptionType` whose types should be added to includes.

  #### Returns this

  + Defined in [packages/nape-js/src/callbacks/OptionType.ts:70](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L70)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/OptionType.ts:85](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/OptionType.ts#L85)
