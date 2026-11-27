Source: https://napejs.org/api/classes/DebugDraw.html

* DebugDraw

# Class DebugDraw`Abstract`

Abstract interface for debug rendering of a physics space.

Implement this class and pass an instance to `Space.debugDraw()` to visualise
the physics world — shapes, joints, contacts, AABBs, velocities, and
centre-of-mass markers — using any 2D rendering backend (Canvas 2D, PixiJS,
p5.js, Three.js, etc.).

None of the methods are abstract by language enforcement — they all default
to no-ops so you can override only the primitives your renderer needs.

#### Example

```
class CanvasDebugDraw extends DebugDraw {  
  constructor(private ctx: CanvasRenderingContext2D) { super(); }  
  
  drawSegment(p1: DebugVec2, p2: DebugVec2): void {  
    this.ctx.beginPath();  
    this.ctx.moveTo(p1.x, p1.y);  
    this.ctx.lineTo(p2.x, p2.y);  
    this.ctx.stroke();  
  }  
  // ... other methods ...  
}  
  
space.debugDraw(new CanvasDebugDraw(ctx), DebugDrawFlags.ALL);
Copy
```

* Defined in [packages/nape-js/src/util/DebugDraw.ts:39](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L39)

##### Index

### Constructors

[constructor](#constructor)

### Methods

[drawCapsule](#drawcapsule)
[drawCircle](#drawcircle)
[drawPoint](#drawpoint)
[drawPolygon](#drawpolygon)
[drawSegment](#drawsegment)
[drawSolidCapsule](#drawsolidcapsule)
[drawSolidCircle](#drawsolidcircle)
[drawSolidPolygon](#drawsolidpolygon)

## Constructors

### constructor

* new DebugDraw(): DebugDraw

  #### Returns DebugDraw

## Methods

### drawCapsule

* drawCapsule(  
      spine1: [DebugVec2](../interfaces/DebugVec2.md),  
      spine2: [DebugVec2](../interfaces/DebugVec2.md),  
      radius: number,  
      colour?: number,  
  ): void

  Draw a capsule outline (two semicircles connected by straight segments).
  Used for: static/kinematic capsule shapes.

  #### Parameters

  + spine1: [DebugVec2](../interfaces/DebugVec2.md)

    World-space first spine endpoint.
  + spine2: [DebugVec2](../interfaces/DebugVec2.md)

    World-space second spine endpoint.
  + radius: number

    End-cap radius.
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:98](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L98)

### drawCircle

* drawCircle(centre: [DebugVec2](../interfaces/DebugVec2.md), radius: number, colour?: number): void

  Draw a circle outline.
  Used for: static/kinematic circle shapes.

  #### Parameters

  + centre: [DebugVec2](../interfaces/DebugVec2.md)

    World-space centre.
  + radius: number

    Circle radius.
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L58)

### drawPoint

* drawPoint(position: [DebugVec2](../interfaces/DebugVec2.md), colour?: number): void

  Draw a point marker.
  Used for: contact points, centre-of-mass markers.

  #### Parameters

  + position: [DebugVec2](../interfaces/DebugVec2.md)

    World-space position.
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:118](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L118)

### drawPolygon

* drawPolygon(vertices: [DebugVec2](../interfaces/DebugVec2.md)[], colour?: number): void

  Draw a polygon outline.
  Used for: static/kinematic polygon shapes.

  #### Parameters

  + vertices: [DebugVec2](../interfaces/DebugVec2.md)[]

    World-space vertices in order. Do NOT store this array.
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L78)

### drawSegment

* drawSegment(p1: [DebugVec2](../interfaces/DebugVec2.md), p2: [DebugVec2](../interfaces/DebugVec2.md), colour?: number): void

  Draw a line segment between two world-space points.
  Used for: polygon edges, velocity vectors, joint lines, AABB edges.

  #### Parameters

  + p1: [DebugVec2](../interfaces/DebugVec2.md)

    Start point (world space).
  + p2: [DebugVec2](../interfaces/DebugVec2.md)

    End point (world space).
  + `Optional`colour: number

    Optional ARGB colour hint (0xAARRGGBB). Renderers may ignore this.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:48](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L48)

### drawSolidCapsule

* drawSolidCapsule(  
      spine1: [DebugVec2](../interfaces/DebugVec2.md),  
      spine2: [DebugVec2](../interfaces/DebugVec2.md),  
      radius: number,  
      colour?: number,  
  ): void

  Draw a filled capsule.
  Used for: dynamic capsule shapes.

  #### Parameters

  + spine1: [DebugVec2](../interfaces/DebugVec2.md)

    World-space first spine endpoint.
  + spine2: [DebugVec2](../interfaces/DebugVec2.md)

    World-space second spine endpoint.
  + radius: number

    End-cap radius.
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L109)

### drawSolidCircle

* drawSolidCircle(  
      centre: [DebugVec2](../interfaces/DebugVec2.md),  
      radius: number,  
      axis: [DebugVec2](../interfaces/DebugVec2.md),  
      colour?: number,  
  ): void

  Draw a filled circle with an orientation indicator segment.
  Used for: dynamic circle shapes. The `axis` segment shows body rotation.

  #### Parameters

  + centre: [DebugVec2](../interfaces/DebugVec2.md)

    World-space centre.
  + radius: number

    Circle radius.
  + axis: [DebugVec2](../interfaces/DebugVec2.md)

    World-space end-point of the orientation indicator (from centre).
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:69](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L69)

### drawSolidPolygon

* drawSolidPolygon(vertices: [DebugVec2](../interfaces/DebugVec2.md)[], colour?: number): void

  Draw a filled polygon.
  Used for: dynamic polygon shapes.

  #### Parameters

  + vertices: [DebugVec2](../interfaces/DebugVec2.md)[]

    World-space vertices in order. Do NOT store this array.
  + `Optional`colour: number

    Optional ARGB colour hint.

  #### Returns void

  + Defined in [packages/nape-js/src/util/DebugDraw.ts:87](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L87)
