Source: https://napejs.org/api/classes/GeomPoly.html

* GeomPoly

# Class GeomPoly

A polygon represented as a circular doubly-linked list of vertices.

Supports construction from Array, Vec2List, or another GeomPoly.
Provides geometric queries (area, winding, containment, convexity)
and decomposition algorithms (simple, monotone, convex, triangular).

* Defined in [packages/nape-js/src/geom/GeomPoly.ts:27](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L27)

##### Index

### Constructors

[constructor](#constructor)

### Methods

[area](#area)
[backwardsIterator](#backwardsiterator)
[bottom](#bottom)
[bounds](#bounds)
[clear](#clear)
[contains](#contains)
[convexDecomposition](#convexdecomposition)
[copy](#copy)
[current](#current)
[cut](#cut)
[dispose](#dispose)
[empty](#empty)
[erase](#erase)
[forwardIterator](#forwarditerator)
[inflate](#inflate)
[isClockwise](#isclockwise)
[isConvex](#isconvex)
[isDegenerate](#isdegenerate)
[isMonotone](#ismonotone)
[isSimple](#issimple)
[iterator](#iterator)
[left](#left)
[monotoneDecomposition](#monotonedecomposition)
[pop](#pop)
[push](#push)
[right](#right)
[shift](#shift)
[simpleDecomposition](#simpledecomposition)
[simplify](#simplify)
[size](#size)
[skipBackwards](#skipbackwards)
[skipForward](#skipforward)
[top](#top)
[toString](#tostring)
[transform](#transform)
[triangularDecomposition](#triangulardecomposition)
[unshift](#unshift)
[winding](#winding)
[get](#get)

## Constructors

### constructor

* new GeomPoly(vertices?: any): GeomPoly

  #### Parameters

  + `Optional`vertices: any

  #### Returns GeomPoly

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:35](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L35)

## Methods

### area

* area(): number

  #### Returns number

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:473](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L473)

### backwardsIterator

* backwardsIterator(): any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:325](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L325)

### bottom

* bottom(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:906](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L906)

### bounds

* bounds(): any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:884](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L884)

### clear

* clear(): this

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:435](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L435)

### contains

* contains(point: [Vec2](Vec2.md)): boolean

  #### Parameters

  + point: [Vec2](Vec2.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:523](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L523)

### convexDecomposition

* convexDecomposition(delaunay?: boolean, output?: any): any

  #### Parameters

  + delaunay: boolean = false
  + `Optional`output: any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:692](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L692)

### copy

* copy(): GeomPoly

  #### Returns GeomPoly

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:444](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L444)

### current

* current(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:330](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L330)

### cut

* cut(  
      start: [Vec2](Vec2.md),  
      end: [Vec2](Vec2.md),  
      boundedStart?: boolean,  
      boundedEnd?: boolean,  
      output?: any,  
  ): any

  #### Parameters

  + start: [Vec2](Vec2.md)
  + end: [Vec2](Vec2.md)
  + boundedStart: boolean = false
  + boundedEnd: boolean = false
  + `Optional`output: any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:826](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L826)

### dispose

* dispose(): void

  #### Returns void

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:454](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L454)

### empty

* empty(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:303](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L303)

### erase

* erase(count: number): this

  #### Parameters

  + count: number

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:419](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L419)

### forwardIterator

* forwardIterator(): any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:320](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L320)

### inflate

* inflate(inflation: number): GeomPoly

  #### Parameters

  + inflation: number

  #### Returns GeomPoly

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:783](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L783)

### isClockwise

* isClockwise(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:552](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L552)

### isConvex

* isConvex(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:562](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L562)

### isDegenerate

* isDegenerate(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:603](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L603)

### isMonotone

* isMonotone(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:597](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L597)

### isSimple

* isSimple(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:591](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L591)

### iterator

* iterator(): any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:315](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L315)

### left

* left(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:910](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L910)

### monotoneDecomposition

* monotoneDecomposition(output?: any): any

  #### Parameters

  + `Optional`output: any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:663](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L663)

### pop

* pop(): this

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:362](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L362)

### push

* push(vertex: [Vec2](Vec2.md)): this

  #### Parameters

  + vertex: [Vec2](Vec2.md)

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:342](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L342)

### right

* right(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:914](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L914)

### shift

* shift(): this

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:392](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L392)

### simpleDecomposition

* simpleDecomposition(output?: any): any

  Decompose a (possibly self-intersecting) polygon into simple pieces.

  The pieces are disjoint and together cover the polygon's even-odd
  region: a point is inside when a ray from it crosses the outline an odd
  number of times. Where that region touches itself at a single vertex, or
  where the outline runs back over one of its own edges, a piece may be
  only *weakly* simple (it revisits a vertex, so `isSimple()` is `false`).
  Zero-area slivers are dropped.

  #### Parameters

  + `Optional`output: any

    Optional GeomPolyList to append to. If omitted, a new one is created.

  #### Returns any

  The list of pieces.

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:638](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L638)

### simplify

* simplify(epsilon: number): GeomPoly

  #### Parameters

  + epsilon: number

  #### Returns GeomPoly

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:613](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L613)

### size

* size(): number

  #### Returns number

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:308](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L308)

### skipBackwards

* skipBackwards(times: number): this

  #### Parameters

  + times: number

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:414](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L414)

### skipForward

* skipForward(times: number): this

  #### Parameters

  + times: number

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:402](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L402)

### top

* top(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:902](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L902)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:922](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L922)

### transform

* transform(matrix: any): this

  #### Parameters

  + matrix: any

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:871](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L871)

### triangularDecomposition

* triangularDecomposition(delaunay?: boolean, output?: any): any

  #### Parameters

  + delaunay: boolean = false
  + `Optional`output: any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:736](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L736)

### unshift

* unshift(vertex: [Vec2](Vec2.md)): this

  #### Parameters

  + vertex: [Vec2](Vec2.md)

  #### Returns this

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:372](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L372)

### winding

* winding(): any

  #### Returns any

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:484](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L484)

### `Static`get

* get(vertices?: any): GeomPoly

  #### Parameters

  + `Optional`vertices: any

  #### Returns GeomPoly

  + Defined in [packages/nape-js/src/geom/GeomPoly.ts:278](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/GeomPoly.ts#L278)
