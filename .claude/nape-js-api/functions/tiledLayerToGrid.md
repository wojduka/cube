Source: https://napejs.org/api/functions/tiledLayerToGrid.html

* tiledLayerToGrid

# Function tiledLayerToGrid

* tiledLayerToGrid(layer: [TiledTileLayer](../interfaces/TiledTileLayer.md)): number[][]

  Convert a Tiled JSON tile layer into a 2D row-major grid suitable for
  [meshTilemap](meshTilemap.md) / [buildTilemapBody](buildTilemapBody.md).

  Only the `data`, `width`, and `height` fields of the layer are read — the
  helper has no runtime dependency on a Tiled SDK and accepts any object with
  that shape.

  #### Parameters

  + layer: [TiledTileLayer](../interfaces/TiledTileLayer.md)

    A Tiled tile layer (e.g. `map.layers[i]` from a Tiled JSON export).

  #### Returns number[][]

  A 2D number array, with `0` representing empty tiles.

  + Defined in [packages/nape-js/src/helpers/tilemap.ts:328](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L328)
