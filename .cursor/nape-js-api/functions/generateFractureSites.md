Source: https://napejs.org/api/functions/generateFractureSites.html

* generateFractureSites

# Function generateFractureSites

* generateFractureSites(  
      vertices: readonly Readonly<[VoronoiPoint](../interfaces/VoronoiPoint.md)>[],  
      count: number,  
      random?: () => number,  
  ): [VoronoiPoint](../interfaces/VoronoiPoint.md)[]

  Generate random Voronoi fracture sites within a polygon.

  Places `count` random points inside the given polygon using rejection
  sampling. Useful for generating fracture patterns.

  #### Parameters

  + vertices: readonly Readonly<[VoronoiPoint](../interfaces/VoronoiPoint.md)>[]

    Polygon vertices (as VoronoiPoint[]).
  + count: number

    Number of sites to generate.
  + random: () => number = Math.random

    Optional RNG function (default `Math.random`).

  #### Returns [VoronoiPoint](../interfaces/VoronoiPoint.md)[]

  Array of points guaranteed to be inside the polygon.

  + Defined in [packages/nape-js/src/geom/Voronoi.ts:215](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L215)
