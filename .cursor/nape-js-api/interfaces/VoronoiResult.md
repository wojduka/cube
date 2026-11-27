Source: https://napejs.org/api/interfaces/VoronoiResult.html

* VoronoiResult

# Interface VoronoiResult

Result of a Voronoi diagram computation.

interface VoronoiResult {  
    [cells](#cells): [VoronoiCell](VoronoiCell.md)[];  
}

* Defined in [packages/nape-js/src/geom/Voronoi.ts:29](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L29)

##### Index

### Properties

[cells](#cells)

## Properties

### cells

cells: [VoronoiCell](VoronoiCell.md)[]

One cell per input site, in the same order as the input points.

* Defined in [packages/nape-js/src/geom/Voronoi.ts:31](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L31)
