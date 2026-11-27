Source: https://napejs.org/api/functions/ldtkLayerToGrid.html

* ldtkLayerToGrid

# Function ldtkLayerToGrid

* ldtkLayerToGrid(layer: [LDtkIntGridLayer](../interfaces/LDtkIntGridLayer.md)): number[][]

  Convert an LDtk IntGrid layer instance into a 2D row-major grid.

  Reads `intGridCsv` plus the cell-dimension fields (`__cWid` / `__cHei`,
  with `cWid` / `cHei` accepted as fallbacks). LDtk uses `0` for empty
  IntGrid cells, which the default `solid` predicate already treats as
  non-solid.

  #### Parameters

  + layer: [LDtkIntGridLayer](../interfaces/LDtkIntGridLayer.md)

    An LDtk IntGrid layer instance.

  #### Returns number[][]

  A 2D number array, with `0` representing empty cells.

  + Defined in [packages/nape-js/src/helpers/tilemap.ts:366](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L366)
