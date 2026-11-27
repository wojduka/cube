Source: https://napejs.org/api/types/GravityFalloff.html

* GravityFalloff

# Type Alias GravityFalloff

GravityFalloff:  
    | "inverse-square"  
    | "inverse"  
    | "constant"  
    | ((distance: number) => number)

Falloff law for [RadialGravityField](../classes/RadialGravityField.md).

* `"inverse-square"` — `F = strength / d²` (Newtonian gravity, default)
* `"inverse"` — `F = strength / d` (line-source gravity)
* `"constant"` — `F = strength` (constant pull regardless of distance)
* `(distance) => number` — custom multiplier, applied as `F = strength * fn(d)`

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L17)
