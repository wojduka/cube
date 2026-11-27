Source: https://napejs.org/api/functions/buildTilemapBody.html

* buildTilemapBody

# Function buildTilemapBody

* buildTilemapBody(grid: [TilemapGrid](../types/TilemapGrid.md), options: [TilemapOptions](../interfaces/TilemapOptions.md)): [Body](../classes/Body.md)

  Build a single physics `Body` from a 2D tile grid.

  Each merged rectangle becomes a `Polygon` shape on the body. Tiles are laid
  out with `(0, 0)` at the top-left of tile `(0, 0)`, so the body's
  `position` (defaults to origin) is the world-space location of that
  top-left corner.

  Defaults to `BodyType.STATIC` and `merge: "greedy"`, matching the most
  common gamedev use case (level collision geometry from a Tiled / LDtk map).

  #### Parameters

  + grid: [TilemapGrid](../types/TilemapGrid.md)

    2D row-major tile grid.
  + options: [TilemapOptions](../interfaces/TilemapOptions.md)

    Tile size + body / shape options.

  #### Returns [Body](../classes/Body.md)

  A `Body` containing one `Polygon` shape per merged rectangle.
  The returned body is not yet attached to a `Space` — set `body.space`
  to insert it.

  #### Example

  ```
  const grid = [  
    [1, 1, 1, 0, 1, 1, 1],  
    [0, 0, 0, 0, 0, 0, 0],  
    [1, 1, 1, 1, 1, 1, 1],  
  ];  
  const body = buildTilemapBody(grid, { tileSize: 32, position: Vec2.get(0, 100) });  
  body.space = space;
  Copy
  ```

  + Defined in [packages/nape-js/src/helpers/tilemap.ts:284](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L284)
