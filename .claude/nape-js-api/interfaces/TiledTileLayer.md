Source: https://napejs.org/api/interfaces/TiledTileLayer.html

* TiledTileLayer

# Interface TiledTileLayer

Subset of a Tiled JSON tile layer needed for grid extraction.

interface TiledTileLayer {  
    [data](#data): ArrayLike<number>;  
    [height](#height): number;  
    [width](#width): number;  
}

* Defined in [packages/nape-js/src/helpers/tilemap.ts:87](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L87)

##### Index

### Properties

[data](#data)
[height](#height)
[width](#width)

## Properties

### data

data: ArrayLike<number>

Flat row-major array of tile GIDs.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:89](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L89)

### height

height: number

Height of the layer in tiles.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:93](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L93)

### width

width: number

Width of the layer in tiles.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:91](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L91)
