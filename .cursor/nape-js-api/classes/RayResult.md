Source: https://napejs.org/api/classes/RayResult.html

* RayResult

# Class RayResult

Result from a raycast query.

Provides the contact normal, distance, inside-flag, and shape hit.
Instances are pooled — call `dispose()` when done to return to pool.

* Defined in [packages/nape-js/src/geom/RayResult.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[distance](#distance)
[inner](#inner)
[normal](#normal)
[shape](#shape)

### Methods

[dispose](#dispose)
[toString](#tostring)

## Constructors

### constructor

* new RayResult(): RayResult

  #### Returns RayResult

  + Defined in [packages/nape-js/src/geom/RayResult.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L16)

## Accessors

### distance

* get distance(): number

  #### Returns number

  + Defined in [packages/nape-js/src/geom/RayResult.ts:44](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L44)

### inner

* get inner(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/RayResult.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L49)

### normal

* get normal(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/RayResult.ts:39](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L39)

### shape

* get shape(): [Shape](Shape.md)

  #### Returns [Shape](Shape.md)

  + Defined in [packages/nape-js/src/geom/RayResult.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L54)

## Methods

### dispose

* dispose(): void

  #### Returns void

  + Defined in [packages/nape-js/src/geom/RayResult.ts:63](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L63)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/geom/RayResult.ts:68](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/RayResult.ts#L68)
