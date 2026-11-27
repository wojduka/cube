Source: https://napejs.org/api/types/TilemapMergeMode.html

* TilemapMergeMode

# Type Alias TilemapMergeMode

TilemapMergeMode: "none" | "rows" | "greedy"

Strategy for combining adjacent solid tiles into fewer rectangles.

* `"none"` — every solid tile becomes its own 1x1 rectangle
* `"rows"` — horizontally-adjacent solid tiles within a row are merged
* `"greedy"` — runs are extended both horizontally and vertically using a
  greedy meshing pass (default — produces the fewest rectangles)

* Defined in [packages/nape-js/src/helpers/tilemap.ts:27](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L27)
