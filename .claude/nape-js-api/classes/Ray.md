Source: https://napejs.org/api/classes/Ray.html

* Ray

# Class Ray

A ray for raycasting queries.

Fully modernized — uses ZPP\_Ray directly (extracted to TypeScript).

* Defined in [packages/nape-js/src/geom/Ray.ts:31](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L31)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[direction](#direction)
[maxDistance](#maxdistance)
[origin](#origin)
[userData](#userdata)

### Methods

[aabb](#aabb)
[at](#at)
[clone](#clone)
[copy](#copy)
[fromSegment](#fromsegment)

## Constructors

### constructor

* new Ray(origin: [Vec2](Vec2.md), direction: [Vec2](Vec2.md)): Ray

  Create a Ray from an origin point and a direction vector.
  Both must be non-null, non-disposed Vec2s.

  #### Parameters

  + origin: [Vec2](Vec2.md)

    The start point of the ray in world coordinates.
  + direction: [Vec2](Vec2.md)

    The direction vector (need not be unit length).

  #### Returns Ray

  + Defined in [packages/nape-js/src/geom/Ray.ts:41](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L41)

## Accessors

### direction

* get direction(): [Vec2](Vec2.md)

  The ray's direction vector (need not be unit length; the engine normalises internally).

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/Ray.ts:168](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L168)
* set direction(value: [Vec2](Vec2.md)): void

  The ray's direction vector (need not be unit length; the engine normalises internally).

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Ray.ts:173](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L173)

### maxDistance

* get maxDistance(): number

  Maximum travel distance for raycasting queries. Defaults to `Infinity`.

  #### Returns number

  + Defined in [packages/nape-js/src/geom/Ray.ts:186](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L186)
* set maxDistance(value: number): void

  Maximum travel distance for raycasting queries. Defaults to `Infinity`.

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Ray.ts:191](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L191)

### origin

* get origin(): [Vec2](Vec2.md)

  The ray's start point in world coordinates.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/geom/Ray.ts:151](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L151)
* set origin(value: [Vec2](Vec2.md)): void

  The ray's start point in world coordinates.

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/geom/Ray.ts:156](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L156)

### userData

* get userData(): Record<string, unknown>

  Arbitrary user data attached to this Ray.

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/geom/Ray.ts:199](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L199)

## Methods

### aabb

* aabb(): [AABB](AABB.md)

  Compute the axis-aligned bounding box that encloses the ray from origin to `maxDistance`.

  #### Returns [AABB](AABB.md)

  A new AABB wrapping the ray's extent.

  + Defined in [packages/nape-js/src/geom/Ray.ts:214](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L214)

### at

* at(distance: number, weak?: boolean): [Vec2](Vec2.md)

  Return the world-space point at `distance` along the ray.

  #### Parameters

  + distance: number

    Distance from the ray origin along the ray direction.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  The point `origin + distance * normalised_direction`.

  + Defined in [packages/nape-js/src/geom/Ray.ts:224](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L224)

### clone

* clone(): Ray

  Return a new Ray with the same origin, direction, and maxDistance. Alias for `copy()`.

  #### Returns Ray

  A new Ray with the same properties.

  + Defined in [packages/nape-js/src/geom/Ray.ts:243](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L243)

### copy

* copy(): Ray

  Return a new Ray with the same origin, direction, and maxDistance.

  #### Returns Ray

  A deep copy of this Ray.

  + Defined in [packages/nape-js/src/geom/Ray.ts:251](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L251)

### `Static`fromSegment

* fromSegment(start: [Vec2](Vec2.md), end: [Vec2](Vec2.md)): Ray

  Create a Ray from a line segment.
  The ray origin is `start`, direction is `end − start`, and `maxDistance` is the segment length.

  #### Parameters

  + start: [Vec2](Vec2.md)

    The start point of the segment.
  + end: [Vec2](Vec2.md)

    The end point of the segment.

  #### Returns Ray

  A new Ray spanning the segment.

  + Defined in [packages/nape-js/src/geom/Ray.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Ray.ts#L108)
