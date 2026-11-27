Source: https://napejs.org/api/classes/RadialGravityField.html

* RadialGravityField

# Class RadialGravityField

A point-source gravity field — pulls bodies toward an anchor with a chosen
falloff law.

Replaces the manual `for (body of space.bodies) body.force = ...` loops
commonly written for orbital / planet / multi-body gravity scenarios.
Multiple fields compose naturally via [RadialGravityFieldGroup](RadialGravityFieldGroup.md) or
by calling `apply()` on each one in sequence — each call **adds** to the
existing accumulated force, so userland `body.force` writes are preserved.

#### Example

```
// Mario-Galaxy-style planet pulling everything toward its center  
const planet = new Body(BodyType.STATIC, new Vec2(400, 300));  
planet.shapes.add(new Circle(40));  
planet.space = space;  
  
const field = new RadialGravityField({  
  source: planet,  
  strength: 800000,  
  maxRadius: 250,  
  softening: 100,  
});  
  
// Each frame, BEFORE space.step():  
field.apply(space);  
space.step(1 / 60);
Copy
```

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L108)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[bodyFilter](#bodyfilter)
[enabled](#enabled)
[falloff](#falloff)
[maxRadius](#maxradius)
[minRadius](#minradius)
[scaleByMass](#scalebymass)
[softening](#softening)
[source](#source)
[strength](#strength)

### Methods

[apply](#apply)
[forceOn](#forceon)
[getPosition](#getposition)

## Constructors

### constructor

* new RadialGravityField(options: [RadialGravityFieldOptions](../interfaces/RadialGravityFieldOptions.md)): RadialGravityField

  #### Parameters

  + options: [RadialGravityFieldOptions](../interfaces/RadialGravityFieldOptions.md)

  #### Returns RadialGravityField

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:119](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L119)

## Properties

### bodyFilter

bodyFilter: [BodyFilter](../types/BodyFilter.md) | null

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:116](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L116)

### enabled

enabled: boolean

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L117)

### falloff

falloff: [GravityFalloff](../types/GravityFalloff.md)

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:111](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L111)

### maxRadius

maxRadius: number

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:113](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L113)

### minRadius

minRadius: number

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:114](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L114)

### scaleByMass

scaleByMass: boolean

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:112](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L112)

### softening

softening: number

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:115](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L115)

### source

source: [Vec2](Vec2.md) | [Body](Body.md)

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L109)

### strength

strength: number

* Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:110](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L110)

## Methods

### apply

* apply(space: [Space](Space.md)): void

  Add this field's force contribution to every eligible body in `space`.

  Adds to (does not replace) each body's existing accumulated force, so
  multiple fields and userland force writes all stack naturally. Call
  once per frame, before `space.step()`.

  #### Parameters

  + space: [Space](Space.md)

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:229](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L229)

### forceOn

* forceOn(body: [Body](Body.md)): [Vec2](Vec2.md)

  Compute (but do not apply) the force this field would exert on `body`
  given its current position. Returns `(0, 0)` when the field is disabled,
  the body is static, the body is filtered out, or the body is outside
  `maxRadius`.

  The returned `Vec2` is fresh and owned by the caller.

  #### Parameters

  + body: [Body](Body.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:174](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L174)

### getPosition

* getPosition(): { x: number; y: number }

  Current world-space center of the field.

  Returns the anchor's `(x, y)` — for a `Body` source this reflects the
  body's current position each call, so the field automatically tracks
  a moving anchor.

  #### Returns { x: number; y: number }

  + Defined in [packages/nape-js/src/helpers/RadialGravityField.ts:158](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/RadialGravityField.ts#L158)
