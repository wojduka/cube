Source: https://napejs.org/api/interfaces/VoronoiCell.html

* VoronoiCell

# Interface VoronoiCell

A single Voronoi cell: the site that generated it and its polygon vertices (CCW).

interface VoronoiCell {  
    [site](#site): [VoronoiPoint](VoronoiPoint.md);  
    [siteIndex](#siteindex): number;  
    [vertices](#vertices): [VoronoiPoint](VoronoiPoint.md)[];  
}

* Defined in [packages/nape-js/src/geom/Voronoi.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L19)

##### Index

### Properties

[site](#site)
[siteIndex](#siteindex)
[vertices](#vertices)

## Properties

### site

site: [VoronoiPoint](VoronoiPoint.md)

The generating site coordinates.

* Defined in [packages/nape-js/src/geom/Voronoi.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L23)

### siteIndex

siteIndex: number

The generating site index (into the original points array).

* Defined in [packages/nape-js/src/geom/Voronoi.ts:21](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L21)

### vertices

vertices: [VoronoiPoint](VoronoiPoint.md)[]

Cell polygon vertices in counter-clockwise order.

* Defined in [packages/nape-js/src/geom/Voronoi.ts:25](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/geom/Voronoi.ts#L25)
