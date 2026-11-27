Source: https://napejs.org/api/interfaces/FractureOptions.html

* FractureOptions

# Interface FractureOptions

Options for body fracture.

interface FractureOptions {  
    [addToSpace](#addtospace)?: boolean;  
    [explosionImpulse](#explosionimpulse)?: number;  
    [filter](#filter)?: [InteractionFilter](../classes/InteractionFilter.md);  
    [fragmentCount](#fragmentcount)?: number;  
    [material](#material)?: [Material](../classes/Material.md);  
    [random](#random)?: () => number;  
    [sites](#sites)?: [VoronoiPoint](VoronoiPoint.md)[];  
}

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:13](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L13)

##### Index

### Properties

[addToSpace?](#addtospace)
[explosionImpulse?](#explosionimpulse)
[filter?](#filter)
[fragmentCount?](#fragmentcount)
[material?](#material)
[random?](#random)
[sites?](#sites)

## Properties

### `Optional`addToSpace

addToSpace?: boolean

If true, automatically add fragments to the same space as the original body
and remove the original body. Default `true`.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:37](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L37)

### `Optional`explosionImpulse

explosionImpulse?: number

Explosion impulse magnitude applied radially from the impact point.
Default `0` (no explosion impulse — fragments inherit body velocity).

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:27](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L27)

### `Optional`filter

filter?: [InteractionFilter](../classes/InteractionFilter.md)

Interaction filter for all fragment shapes.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L22)

### `Optional`fragmentCount

fragmentCount?: number

Number of fracture fragments to generate. Default `8`.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:15](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L15)

### `Optional`material

material?: [Material](../classes/Material.md)

Material to apply to all fragment shapes.
If not specified, the first shape's material is copied from the original body.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:20](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L20)

### `Optional`random

random?: () => number

Custom RNG function for reproducible fracture patterns.
Default `Math.random`.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:32](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L32)

### `Optional`sites

sites?: [VoronoiPoint](VoronoiPoint.md)[]

Custom Voronoi site positions (in body-local space).
If provided, `fragmentCount` is ignored and these exact sites are used.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:42](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L42)
