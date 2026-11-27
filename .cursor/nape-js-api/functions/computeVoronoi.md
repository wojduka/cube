Source: https://napejs.org/api/functions/computeVoronoi.html

* computeVoronoi

# Function computeVoronoi

* computeVoronoi(  
      points: readonly Readonly<[VoronoiPoint](../interfaces/VoronoiPoint.md)>[],  
      bounds: { maxX: number; maxY: number; minX: number; minY: number },  
  ): [VoronoiResult](../interfaces/VoronoiResult.md)

  Compute the Voronoi diagram for a set of 2D points, clipped to a bounding box.

  Uses half-plane intersection: for each site, clips the bounding rectangle by
  the perpendicular bisector with every other site. Produces one convex cell per
  site, all cells together tile the bounding box exactly.

  #### Parameters

  + points: readonly Readonly<[VoronoiPoint](../interfaces/VoronoiPoint.md)>[]

    Array of site points. Must contain at least 1 point.
  + bounds: { maxX: number; maxY: number; minX: number; minY: number }

    Clipping rectangle `{ minX, minY, maxX, maxY }`.

  #### Returns [VoronoiResult](../interfaces/VoronoiResult.md)

  A `VoronoiResult` containing one cell per input point.

  #### Example

  ```
  const result = computeVoronoi(  
    [{ x: 10, y: 10 }, { x: 90, y: 50 }, { x: 50, y: 90 }],  
    { minX: 0, minY: 0, maxX: 100, maxY: 100 },  
  );  
  for (const cell of result.cells) {  
    console.log(`Site ${cell.siteIndex}:`, cell.vertices);  
  }
  Copy
  ```

  + Defined in [packages/nape-js/src/geom/Voronoi.ts:62](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L62)
