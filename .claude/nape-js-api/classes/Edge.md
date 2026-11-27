Source: https://napejs.org/api/classes/Edge.html

* Edge

# Class Edge

An edge of a polygon shape.

Edges are read-only and managed by the polygon they belong to.
Cannot be instantiated directly — only obtained from Polygon.edges.

Fully modernized — all getters access ZPP\_Edge directly.

* Defined in [packages/nape-js/src/shape/Edge.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L17)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[length](#length)
[localNormal](#localnormal)
[localProjection](#localprojection)
[localVertex1](#localvertex1)
[localVertex2](#localvertex2)
[polygon](#polygon)
[worldNormal](#worldnormal)
[worldProjection](#worldprojection)
[worldVertex1](#worldvertex1)
[worldVertex2](#worldvertex2)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new Edge(): Edge

  #### Returns Edge

  + Defined in [packages/nape-js/src/shape/Edge.ts:21](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L21)

## Accessors

### length

* get length(): number

  Edge length.

  #### Returns number

  + Defined in [packages/nape-js/src/shape/Edge.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L82)

### localNormal

* get localNormal(): [Vec2](Vec2.md)

  Local-space normal vector (immutable Vec2).

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L58)

### localProjection

* get localProjection(): number

  Local-space projection along the edge normal.

  #### Returns number

  + Defined in [packages/nape-js/src/shape/Edge.ts:92](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L92)

### localVertex1

* get localVertex1(): [Vec2](Vec2.md)

  First local vertex of this edge.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L117)

### localVertex2

* get localVertex2(): [Vec2](Vec2.md)

  Second local vertex of this edge.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:127](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L127)

### polygon

* get polygon(): [Polygon](Polygon.md)

  Parent polygon.

  #### Returns [Polygon](Polygon.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L49)

### worldNormal

* get worldNormal(): [Vec2](Vec2.md)

  World-space normal vector (immutable Vec2). Requires polygon in a body.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:70](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L70)

### worldProjection

* get worldProjection(): number

  World-space projection. Requires polygon in a body.

  #### Returns number

  + Defined in [packages/nape-js/src/shape/Edge.ts:102](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L102)

### worldVertex1

* get worldVertex1(): [Vec2](Vec2.md)

  First world vertex. Requires polygon in a body.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L137)

### worldVertex2

* get worldVertex2(): [Vec2](Vec2.md)

  Second world vertex. Requires polygon in a body.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Edge.ts:147](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L147)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/shape/Edge.ts:160](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Edge.ts#L160)
