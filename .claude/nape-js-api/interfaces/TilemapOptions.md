Source: https://napejs.org/api/interfaces/TilemapOptions.html

* TilemapOptions

# Interface TilemapOptions

Configuration options for [buildTilemapBody](../functions/buildTilemapBody.md) / [meshTilemap](../functions/meshTilemap.md).

interface TilemapOptions {  
    [body](#body)?: [Body](../classes/Body.md);  
    [bodyType](#bodytype)?: [BodyType](../classes/BodyType.md);  
    [cbTypes](#cbtypes)?: [CbType](../classes/CbType.md)[];  
    [filter](#filter)?: [InteractionFilter](../classes/InteractionFilter.md);  
    [material](#material)?: [Material](../classes/Material.md);  
    [merge](#merge)?: [TilemapMergeMode](../types/TilemapMergeMode.md);  
    [position](#position)?: [Vec2](../classes/Vec2.md);  
    [solid](#solid)?: [TilemapSolidPredicate](../types/TilemapSolidPredicate.md);  
    [tileSize](#tilesize): number | [TilemapTileSize](TilemapTileSize.md);  
}

* Defined in [packages/nape-js/src/helpers/tilemap.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L38)

##### Index

### Properties

[body?](#body)
[bodyType?](#bodytype)
[cbTypes?](#cbtypes)
[filter?](#filter)
[material?](#material)
[merge?](#merge)
[position?](#position)
[solid?](#solid)
[tileSize](#tilesize)

## Properties

### `Optional`body

body?: [Body](../classes/Body.md)

Append shapes to this existing body instead of creating a new one. Useful
for chunked maps where many tilemap layers share one body, or when adding
a collision mesh to a body that already exists.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:71](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L71)

### `Optional`bodyType

bodyType?: [BodyType](../classes/BodyType.md)

Body type — defaults to `BodyType.STATIC`. Ignored when `body` is provided.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:64](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L64)

### `Optional`cbTypes

cbTypes?: [CbType](../classes/CbType.md)[]

CbTypes added to every generated shape.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:61](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L61)

### `Optional`filter

filter?: [InteractionFilter](../classes/InteractionFilter.md)

InteractionFilter applied to every generated shape.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L58)

### `Optional`material

material?: [Material](../classes/Material.md)

Material applied to every generated shape.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:55](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L55)

### `Optional`merge

merge?: [TilemapMergeMode](../types/TilemapMergeMode.md)

Merge strategy — defaults to `"greedy"`.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L52)

### `Optional`position

position?: [Vec2](../classes/Vec2.md)

Body position (top-left corner of the map in world space). Default `(0, 0)`.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:43](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L43)

### `Optional`solid

solid?: [TilemapSolidPredicate](../types/TilemapSolidPredicate.md)

Predicate deciding which cells are solid. Default treats any non-zero
value as solid.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L49)

### tileSize

tileSize: number | [TilemapTileSize](TilemapTileSize.md)

Tile size in pixels — either a square size or `{ w, h }` for non-square tiles.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:40](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L40)
