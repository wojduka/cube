Source: https://napejs.org/api/classes/MarchingSquares.html

* MarchingSquares

# Class MarchingSquares

Isosurface extraction using the marching squares algorithm.

Static utility class — all functionality is in the `run()` method.

* Defined in [packages/nape-js/src/geom/MarchingSquares.ts:15](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MarchingSquares.ts#L15)

##### Index

### Constructors

[constructor](#constructor)

### Methods

[run](#run)

## Constructors

### constructor

* new MarchingSquares(): MarchingSquares

  #### Returns MarchingSquares

## Methods

### `Static`run

* run(  
      iso: (x: number, y: number) => number,  
      bounds: [AABB](AABB.md),  
      cellsize: [Vec2](Vec2.md),  
      quality?: number,  
      subgrid?: [Vec2](Vec2.md) | null,  
      combine?: boolean,  
      output?: any,  
  ): any

  Run the marching squares algorithm to extract polygons from an iso function.

  #### Parameters

  + iso: (x: number, y: number) => number

    Iso function `(x: number, y: number) => number`.
    Negative values are "inside", positive are "outside".
  + bounds: [AABB](AABB.md)

    AABB defining the region to extract surfaces from.
  + cellsize: [Vec2](Vec2.md)

    Vec2 defining cell dimensions. Auto-disposed if weak.
  + quality: number = 2

    Interpolation quality (default 2). Must be >= 0.
  + subgrid: [Vec2](Vec2.md) | null = null

    Optional Vec2 for sub-grid partitioning. Auto-disposed if weak.
  + combine: boolean = true

    Whether to combine adjacent polygons (default true). A combined
    region that encloses holes is emitted as one *weakly* simple
    polygon: each hole is bridged to the outer boundary through
    repeated vertices, so `isSimple()` reports `false` for it.
  + output: any = null

    Optional GeomPolyList to populate. If null, a new one is created.

  #### Returns any

  The populated GeomPolyList.

  + Defined in [packages/nape-js/src/geom/MarchingSquares.ts:32](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/MarchingSquares.ts#L32)
