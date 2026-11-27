Source: https://napejs.org/api/classes/Geom.html

* Geom

# Class Geom

Static utility class for geometric queries between shapes and bodies.

Fully modernized — calls ZPP\_Geom, ZPP\_SweepDistance, and ZPP\_Collide directly.

* Defined in [packages/nape-js/src/geom/Geom.ts:46](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Geom.ts#L46)

##### Index

### Constructors

[constructor](#constructor)

### Methods

[contains](#contains)
[distance](#distance)
[distanceBody](#distancebody)
[intersects](#intersects)
[intersectsBody](#intersectsbody)

## Constructors

### constructor

* new Geom(): Geom

  #### Returns Geom

## Methods

### `Static`contains

* contains(shape1: [Shape](Shape.md), shape2: [Shape](Shape.md)): boolean

  Test if shape1 fully contains shape2.

  #### Parameters

  + shape1: [Shape](Shape.md)
  + shape2: [Shape](Shape.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/Geom.ts:195](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Geom.ts#L195)

### `Static`distance

* distance(shape1: [Shape](Shape.md), shape2: [Shape](Shape.md), out1: [Vec2](Vec2.md), out2: [Vec2](Vec2.md)): number

  Calculate minimum distance between two shapes and return closest points.

  #### Parameters

  + shape1: [Shape](Shape.md)
  + shape2: [Shape](Shape.md)
  + out1: [Vec2](Vec2.md)
  + out2: [Vec2](Vec2.md)

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Geom.ts:84](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Geom.ts#L84)

### `Static`distanceBody

* distanceBody(body1: [Body](Body.md), body2: [Body](Body.md), out1: [Vec2](Vec2.md), out2: [Vec2](Vec2.md)): number

  Calculate minimum distance between two bodies and return closest points.

  #### Parameters

  + body1: [Body](Body.md)
  + body2: [Body](Body.md)
  + out1: [Vec2](Vec2.md)
  + out2: [Vec2](Vec2.md)

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Geom.ts:50](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Geom.ts#L50)

### `Static`intersects

* intersects(shape1: [Shape](Shape.md), shape2: [Shape](Shape.md)): boolean

  Test if two shapes intersect.

  #### Parameters

  + shape1: [Shape](Shape.md)
  + shape2: [Shape](Shape.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/Geom.ts:172](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Geom.ts#L172)

### `Static`intersectsBody

* intersectsBody(body1: [Body](Body.md), body2: [Body](Body.md)): boolean

  Test if two bodies intersect (any of their shapes overlap).

  #### Parameters

  + body1: [Body](Body.md)
  + body2: [Body](Body.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/geom/Geom.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Geom.ts#L126)
