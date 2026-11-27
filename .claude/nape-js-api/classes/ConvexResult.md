Source: https://napejs.org/api/classes/ConvexResult.html

* ConvexResult

# Class ConvexResult

Result from a convex-cast query.

Provides the contact normal, position, time-of-impact, and shape hit.
Instances are pooled — call `dispose()` when done to return to pool.

* Defined in [packages/nape-js/src/geom/ConvexResult.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[normal](#normal)
[position](#position)
[shape](#shape)
[toi](#toi)

### Methods

[dispose](#dispose)
[toString](#tostring)

## Constructors

### constructor

* new ConvexResult(): ConvexResult

  #### Returns ConvexResult

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L16)

## Accessors

### normal

* get normal(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:39](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L39)

### position

* get position(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:44](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L44)

### shape

* get shape(): [Shape](Shape.md)

  #### Returns [Shape](Shape.md)

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L54)

### toi

* get toi(): number

  #### Returns number

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L49)

## Methods

### dispose

* dispose(): void

  #### Returns void

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:63](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L63)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/geom/ConvexResult.ts:68](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/ConvexResult.ts#L68)
