Source: https://napejs.org/api/classes/AABB.html

* AABB

# Class AABB

Axis-aligned bounding box defined by min/max corners or x/y/width/height.

Internally wraps a ZPP\_AABB and is registered as the public
`nape.geom.AABB` class in the nape namespace.

* Defined in [packages/nape-js/src/geom/AABB.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[height](#height)
[max](#max)
[min](#min)
[width](#width)
[x](#x)
[y](#y)

### Methods

[clone](#clone)
[copy](#copy)
[equals](#equals)
[toString](#tostring)
[fromPoints](#frompoints)

## Constructors

### constructor

* new AABB(x?: number, y?: number, width?: number, height?: number): AABB

  Create an AABB at position (x, y) with the given width and height. All
  values default to 0.

  #### Parameters

  + x: number = 0

    The x position of the left edge (default 0).
  + y: number = 0

    The y position of the top edge (default 0).
  + width: number = 0

    The width of the box (default 0). Must be ≥ 0.
  + height: number = 0

    The height of the box (default 0). Must be ≥ 0.

  #### Returns AABB

  + Defined in [packages/nape-js/src/geom/AABB.ts:25](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L25)

## Accessors

### height

* get height(): number

  Height of the box (maxy − miny). Must be ≥ 0.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/AABB.ts:182](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L182)
* set height(height: number): void

  Height of the box (maxy − miny). Must be ≥ 0.

  #### Parameters

  + height: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/AABB.ts:187](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L187)

### max

* get max(): any

  The bottom-right corner as a Vec2 (maxx, maxy). The returned Vec2 is a
  live view; mutating it updates the AABB.

  #### Returns any

  + Defined in [packages/nape-js/src/geom/AABB.ts:303](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L303)
* set max(max: any): void

  Set the bottom-right corner. The new max must not be below the current
  min.

  #### Parameters

  + max: any

    A Vec2 whose components become the new (maxx, maxy).

  #### Returns void

  + Defined in [packages/nape-js/src/geom/AABB.ts:313](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L313)

### min

* get min(): any

  The top-left corner as a Vec2 (minx, miny). The returned Vec2 is a live
  view; mutating it updates the AABB.

  #### Returns any

  + Defined in [packages/nape-js/src/geom/AABB.ts:213](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L213)
* set min(min: any): void

  Set the top-left corner. The new min must not exceed the current max.

  #### Parameters

  + min: any

    A Vec2 whose components become the new (minx, miny).

  #### Returns void

  + Defined in [packages/nape-js/src/geom/AABB.ts:222](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L222)

### width

* get width(): number

  Width of the box (maxx − minx). Must be ≥ 0.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/AABB.ts:158](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L158)
* set width(width: number): void

  Width of the box (maxx − minx). Must be ≥ 0.

  #### Parameters

  + width: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/AABB.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L163)

### x

* get x(): number

  The x position of the left edge (minx). Setting shifts the box horizontally.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/AABB.ts:116](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L116)
* set x(x: number): void

  The x position of the left edge (minx). Setting shifts the box horizontally.

  #### Parameters

  + x: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/AABB.ts:121](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L121)

### y

* get y(): number

  The y position of the top edge (miny). Setting shifts the box vertically.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/AABB.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L137)
* set y(y: number): void

  The y position of the top edge (miny). Setting shifts the box vertically.

  #### Parameters

  + y: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/AABB.ts:142](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L142)

## Methods

### clone

* clone(): AABB

  Return a new AABB with the same bounds. Alias for `copy()`.

  #### Returns AABB

  A new AABB with the same position and dimensions.

  + Defined in [packages/nape-js/src/geom/AABB.ts:514](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L514)

### copy

* copy(): AABB

  Return a new AABB with the same bounds.

  #### Returns AABB

  A copy of this AABB.

  + Defined in [packages/nape-js/src/geom/AABB.ts:548](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L548)

### equals

* equals(other: AABB, epsilon?: number): boolean

  Check whether this AABB is equal to another, within an optional epsilon tolerance.

  #### Parameters

  + other: AABB

    The AABB to compare against.
  + epsilon: number = 0

    Maximum allowed difference per component (default 0).

  #### Returns boolean

  `true` if all four bounds (minx, miny, maxx, maxy) differ by at most `epsilon`.

  + Defined in [packages/nape-js/src/geom/AABB.ts:525](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L525)

### toString

* toString(): string

  String representation in the form `{ x: … y: … w: … h: … }`.

  #### Returns string

  A human-readable string of this AABB's position and dimensions.

  + Defined in [packages/nape-js/src/geom/AABB.ts:560](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L560)

### `Static`fromPoints

* fromPoints(points: [Vec2](Vec2.md)[]): AABB

  Create the smallest AABB that contains all the given points.
  Disposes weak Vec2 arguments after use.

  #### Parameters

  + points: [Vec2](Vec2.md)[]

    An array of Vec2 points to enclose. Must contain at least one point.

  #### Returns AABB

  A new AABB enclosing all the points.

  + Defined in [packages/nape-js/src/geom/AABB.ts:59](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/AABB.ts#L59)
