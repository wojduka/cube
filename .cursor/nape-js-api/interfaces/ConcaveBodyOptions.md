Source: https://napejs.org/api/interfaces/ConcaveBodyOptions.html

* ConcaveBodyOptions

# Interface ConcaveBodyOptions

Options for creating a body from concave polygon vertices.

interface ConcaveBodyOptions {  
    [delaunay](#delaunay)?: boolean;  
    [filter](#filter)?: [InteractionFilter](../classes/InteractionFilter.md);  
    [material](#material)?: [Material](../classes/Material.md);  
    [position](#position)?: [Vec2](../classes/Vec2.md);  
    [simplify](#simplify)?: number;  
    [type](#type)?: [BodyType](../classes/BodyType.md);  
}

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L12)

##### Index

### Properties

[delaunay?](#delaunay)
[filter?](#filter)
[material?](#material)
[position?](#position)
[simplify?](#simplify)
[type?](#type)

## Properties

### `Optional`delaunay

delaunay?: boolean

Use Delaunay refinement for higher-quality triangulation. Default `false`.

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L22)

### `Optional`filter

filter?: [InteractionFilter](../classes/InteractionFilter.md)

Interaction filter applied to all decomposed shapes.

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:20](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L20)

### `Optional`material

material?: [Material](../classes/Material.md)

Material applied to all decomposed shapes.

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:18](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L18)

### `Optional`position

position?: [Vec2](../classes/Vec2.md)

Body position in world space — defaults to origin.

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L16)

### `Optional`simplify

simplify?: number

Simplification tolerance (Ramer–Douglas–Peucker epsilon).
When > 0, vertices are simplified before decomposition.
Default `0` (no simplification).

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:28](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L28)

### `Optional`type

type?: [BodyType](../classes/BodyType.md)

Body type — defaults to `BodyType.DYNAMIC`.

* Defined in [packages/nape-js/src/helpers/createConcaveBody.ts:14](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/createConcaveBody.ts#L14)
