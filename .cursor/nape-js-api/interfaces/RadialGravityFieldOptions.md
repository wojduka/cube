Source: https://napejs.org/api/interfaces/RadialGravityFieldOptions.html

* RadialGravityFieldOptions

# Interface RadialGravityFieldOptions

Configuration options for [RadialGravityField](../classes/RadialGravityField.md).

interface RadialGravityFieldOptions {  
    [bodyFilter](#bodyfilter)?: [BodyFilter](../types/BodyFilter.md) | null;  
    [enabled](#enabled)?: boolean;  
    [falloff](#falloff)?: [GravityFalloff](../types/GravityFalloff.md);  
    [maxRadius](#maxradius)?: number;  
    [minRadius](#minradius)?: number;  
    [scaleByMass](#scalebymass)?: boolean;  
    [softening](#softening)?: number;  
    [source](#source): [Vec2](../classes/Vec2.md) | [Body](../classes/Body.md);  
    [strength](#strength): number;  
}

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:24](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L24)

##### Index

### Properties

[bodyFilter?](#bodyfilter)
[enabled?](#enabled)
[falloff?](#falloff)
[maxRadius?](#maxradius)
[minRadius?](#minradius)
[scaleByMass?](#scalebymass)
[softening?](#softening)
[source](#source)
[strength](#strength)

## Properties

### `Optional`bodyFilter

bodyFilter?: [BodyFilter](../types/BodyFilter.md) | null

Predicate deciding which bodies the field affects. `null` (default)
means "all dynamic bodies". Static and kinematic bodies are always
skipped (forces have no effect on them anyway).

#### Default

`null`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:69](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L69)

### `Optional`enabled

enabled?: boolean

When `false`, calls to [RadialGravityField.apply](../classes/RadialGravityField.md#apply) are no-ops.

#### Default

`true`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:72](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L72)

### `Optional`falloff

falloff?: [GravityFalloff](../types/GravityFalloff.md)

Falloff law.

#### Default

`"inverse-square"`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:36](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L36)

### `Optional`maxRadius

maxRadius?: number

Bodies farther than this from the source receive zero force — useful for
bounded gravity wells with hard edges.

#### Default

`Infinity`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:46](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L46)

### `Optional`minRadius

minRadius?: number

Distance values used in the falloff calculation are clamped to be at
least this — prevents singularities at the source center.

#### Default

`1`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:53](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L53)

### `Optional`scaleByMass

scaleByMass?: boolean

Multiply the resulting force by `body.mass` (Newtonian gravity).

#### Default

`true`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:39](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L39)

### `Optional`softening

softening?: number

Softening epsilon added to `d²` for the inverse-square falloff (smooths
out near-source spikes without disabling the pull). Has no effect on
other falloff laws.

#### Default

`0`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:61](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L61)

### source

source: [Vec2](../classes/Vec2.md) | [Body](../classes/Body.md)

The field's anchor point. May be a `Vec2` (fixed world position — captured
by reference, so mutating it after construction moves the field), or a
`Body` (the field tracks `body.position` automatically each step).

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L30)

### strength

strength: number

Field strength scaling — units depend on `falloff` (see [GravityFalloff](../types/GravityFalloff.md)).

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:33](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L33)
