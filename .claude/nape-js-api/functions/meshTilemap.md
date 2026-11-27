Source: https://napejs.org/api/functions/meshTilemap.html

* meshTilemap

# Function meshTilemap

* meshTilemap(  
      grid: [TilemapGrid](../types/TilemapGrid.md),  
      options?: { merge?: [TilemapMergeMode](../types/TilemapMergeMode.md); solid?: [TilemapSolidPredicate](../types/TilemapSolidPredicate.md) },  
  ): [TilemapRect](../interfaces/TilemapRect.md)[]

  Convert a 2D grid of tile values into the minimal set of axis-aligned
  rectangles that cover the solid cells, using the requested merge strategy.

  The result is geometry-only — no `Body` or `Shape` is created — which makes
  this function reusable for debug overlays, rendering, or custom body
  construction. [buildTilemapBody](buildTilemapBody.md) is a thin wrapper that converts the
  rectangles to `Polygon` shapes.

  Greedy meshing reduces shape count dramatically for typical platformer
  maps. A 50-tile floor strip becomes one rectangle; a solid 10x10 block
  becomes one rectangle instead of 100. Fewer shapes = smaller broadphase
  footprint, faster narrowphase, less debug-draw work.

  #### Parameters

  + grid: [TilemapGrid](../types/TilemapGrid.md)

    2D row-major tile grid (`grid[y][x]`).
  + options: { merge?: [TilemapMergeMode](../types/TilemapMergeMode.md); solid?: [TilemapSolidPredicate](../types/TilemapSolidPredicate.md) } = {}

    Optional `solid` predicate and `merge` strategy.

  #### Returns [TilemapRect](../interfaces/TilemapRect.md)[]

  The list of merged rectangles in tile coordinates.

  #### Example

  ```
  const rects = meshTilemap([  
    [1, 1, 1, 0, 1],  
    [1, 1, 1, 0, 1],  
    [0, 0, 0, 0, 1],  
  ]);  
  // -> [{x:0,y:0,w:3,h:2}, {x:4,y:0,w:1,h:3}]
  Copy
  ```

  + Defined in [packages/nape-js/src/helpers/tilemap.ts:184](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L184)
