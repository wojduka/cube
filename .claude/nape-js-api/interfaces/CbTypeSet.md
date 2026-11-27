Source: https://napejs.org/api/interfaces/CbTypeSet.html

* CbTypeSet

# Interface CbTypeSet

Lightweight typed interface for the callback type set on a shape.

interface CbTypeSet {  
    [length](#length): number;  
    [add](#add-1)(cbType: [CbType](../classes/CbType.md)): void;  
    [clear](#clear-1)(): void;  
    [has](#has-1)(cbType: [CbType](../classes/CbType.md)): boolean;  
    [remove](#remove-1)(cbType: [CbType](../classes/CbType.md)): void;  
}

* Defined in [packages/nape-js/src/shape/Shape.ts:573](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L573)

##### Index

### Properties

[length](#length)

### Methods

[add](#add)
[clear](#clear)
[has](#has)
[remove](#remove)

## Properties

### `Readonly`length

length: number

* Defined in [packages/nape-js/src/shape/Shape.ts:578](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L578)

## Methods

### add

* add(cbType: [CbType](../classes/CbType.md)): void

  #### Parameters

  + cbType: [CbType](../classes/CbType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:574](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L574)

### clear

* clear(): void

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:577](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L577)

### has

* has(cbType: [CbType](../classes/CbType.md)): boolean

  #### Parameters

  + cbType: [CbType](../classes/CbType.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/shape/Shape.ts:576](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L576)

### remove

* remove(cbType: [CbType](../classes/CbType.md)): void

  #### Parameters

  + cbType: [CbType](../classes/CbType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:575](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L575)
