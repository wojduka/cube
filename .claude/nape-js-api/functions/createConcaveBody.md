Source: https://napejs.org/api/functions/createConcaveBody.html

* createConcaveBody

# Function createConcaveBody

* createConcaveBody(  
      vertices: [GeomPoly](../classes/GeomPoly.md) | [Vec2](../classes/Vec2.md)[],  
      options?: [ConcaveBodyOptions](../interfaces/ConcaveBodyOptions.md),  
  ): [Body](../classes/Body.md)

  Create a `Body` from concave (non-convex) polygon vertices.

  Accepts arbitrary simple polygon vertices (concave or convex), performs
  validation, optional simplification, and convex decomposition via
  `GeomPoly.convexDecomposition()`. Each convex partition becomes a
  `Polygon` shape on the returned body.

  If the input is already convex, a single `Polygon` shape is created
  (no decomposition overhead).

  #### Parameters

  + vertices: [GeomPoly](../classes/GeomPoly.md) | [Vec2](../classes/Vec2.md)[]

    Polygon vertices as `Vec2[]` or `GeomPoly`. Must form a
    simple (non-self-intersecting) polygon with at least 3 vertices.
  + `Optional`options: [ConcaveBodyOptions](../interfaces/ConcaveBodyOptions.md)

    Optional configuration (body type, material, filter, etc.)

  #### Returns [Body](../classes/Body.md)

  A `Body` containing one or more convex `Polygon` shapes.

  #### Throws

  If vertices are null/undefined, fewer than 3, degenerate (zero area),
  or self-intersecting.

  #### Example

  ```
  // L-shaped concave polygon  
  const body = createConcaveBody([  
    Vec2.get(0, 0), Vec2.get(100, 0), Vec2.get(100, 50),  
    Vec2.get(50, 50), Vec2.get(50, 100), Vec2.get(0, 100),  
  ]);  
  body.space = space;
  Copy
  ```

  + Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:60](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L60)
