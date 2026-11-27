Source: https://napejs.org/api/interfaces/TypedListLike.html

* TypedListLike

# Interface TypedListLike<T>

Structural interface for all dynamically-generated Nape list classes
(BodyList, ShapeList, CompoundList, etc.).

These classes are created at runtime by createListClasses and placed
in the `nape` namespace, so they cannot be imported directly. Use this
interface as the return type for Space / Body query methods.

interface TypedListLike<[T](#t)> {  
    [length](#length): number;  
    ["[iterator]"](#iterator-1)(): Iterator<[T](#t), any, any>;  
    [add](#add-1)(obj: [T](#t)): boolean;  
    [at](#at-1)(index: number): [T](#t);  
    [clear](#clear-1)(): void;  
    [copy](#copy-1)(deep?: boolean): TypedListLike<[T](#t)>;  
    [empty](#empty-1)(): boolean;  
    [filter](#filter-1)(lambda: (obj: [T](#t)) => boolean): TypedListLike<[T](#t)>;  
    [foreach](#foreach-1)(lambda: (obj: [T](#t)) => void): void;  
    [has](#has-1)(obj: [T](#t)): boolean;  
    [iterator](#iterator-3)(): Iterable<[T](#t)>;  
    [merge](#merge-1)(xs: TypedListLike<[T](#t)>): void;  
    [pop](#pop-1)(): [T](#t);  
    [push](#push-1)(obj: [T](#t)): boolean;  
    [remove](#remove-1)(obj: [T](#t)): boolean;  
    [shift](#shift-1)(): [T](#t);  
    [toArray](#toarray-1)(): [T](#t)[];  
    [unshift](#unshift-1)(obj: [T](#t)): boolean;  
}

#### Type Parameters

* T

#### Hierarchy

* Iterable<[T](#t)>
  + TypedListLike

* Defined in [packages/nape-js/src/util/NapeListFactory.ts:24](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L24)

##### Index

### Properties

[length](#length)

### Methods

[[iterator]](#iterator)
[add](#add)
[at](#at)
[clear](#clear)
[copy](#copy)
[empty](#empty)
[filter](#filter)
[foreach](#foreach)
[has](#has)
[iterator](#iterator-2)
[merge](#merge)
[pop](#pop)
[push](#push)
[remove](#remove)
[shift](#shift)
[toArray](#toarray)
[unshift](#unshift)

## Properties

### `Readonly`length

length: number

Number of elements in the list.

* Defined in [packages/nape-js/src/util/NapeListFactory.ts:26](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L26)

## Methods

### [iterator]

* "[iterator]"(): Iterator<[T](#t), any, any>

  #### Returns Iterator<[T](#t), any, any>

  Inherited from Iterable.[iterator]

  + Defined in node\_modules/typescript/lib/lib.es2015.iterable.d.ts:47

### add

* add(obj: [T](#t)): boolean

  Adds `obj` (anywhere). Returns true if successful.

  #### Parameters

  + obj: [T](#t)

  #### Returns boolean

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:40](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L40)

### at

* at(index: number): [T](#t)

  Returns element at the given index.

  #### Parameters

  + index: number

  #### Returns [T](#t)

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:28](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L28)

### clear

* clear(): void

  Removes all elements.

  #### Returns void

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:44](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L44)

### copy

* copy(deep?: boolean): TypedListLike<[T](#t)>

  Returns a shallow or deep copy of the list.

  #### Parameters

  + `Optional`deep: boolean

  #### Returns TypedListLike<[T](#t)>

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:50](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L50)

### empty

* empty(): boolean

  Returns true if the list has no elements.

  #### Returns boolean

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:46](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L46)

### filter

* filter(lambda: (obj: [T](#t)) => boolean): TypedListLike<[T](#t)>

  Returns a filtered copy.

  #### Parameters

  + lambda: (obj: [T](#t)) => boolean

  #### Returns TypedListLike<[T](#t)>

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:56](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L56)

### foreach

* foreach(lambda: (obj: [T](#t)) => void): void

  Apply `lambda` to every element.

  #### Parameters

  + lambda: (obj: [T](#t)) => void

  #### Returns void

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L54)

### has

* has(obj: [T](#t)): boolean

  Returns true if the list contains `obj`.

  #### Parameters

  + obj: [T](#t)

  #### Returns boolean

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L30)

### iterator

* iterator(): Iterable<[T](#t)>

  Returns an iterator over the elements.

  #### Returns Iterable<[T](#t)>

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:48](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L48)

### merge

* merge(xs: TypedListLike<[T](#t)>): void

  Merge elements of `xs` into this list.

  #### Parameters

  + xs: TypedListLike<[T](#t)>

  #### Returns void

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L52)

### pop

* pop(): [T](#t)

  Removes and returns the last element.

  #### Returns [T](#t)

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:36](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L36)

### push

* push(obj: [T](#t)): boolean

  Adds `obj` to the end of the list. Returns true if successful.

  #### Parameters

  + obj: [T](#t)

  #### Returns boolean

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:32](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L32)

### remove

* remove(obj: [T](#t)): boolean

  Removes `obj`. Returns true if it was present.

  #### Parameters

  + obj: [T](#t)

  #### Returns boolean

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:42](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L42)

### shift

* shift(): [T](#t)

  Removes and returns the first element.

  #### Returns [T](#t)

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L38)

### toArray

* toArray(): [T](#t)[]

  Converts to a plain array.

  #### Returns [T](#t)[]

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L58)

### unshift

* unshift(obj: [T](#t)): boolean

  Adds `obj` to the front of the list. Returns true if successful.

  #### Parameters

  + obj: [T](#t)

  #### Returns boolean

  + Defined in [packages/nape-js/src/util/NapeListFactory.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/NapeListFactory.ts#L34)
