Source: https://napejs.org/api/classes/PulleyJoint.html

* PulleyJoint

# Class PulleyJoint

Pulley joint — constrains the weighted sum of two distances to remain within
`[jointMin, jointMax]`:

`jointMin ≤ distance(anchor1, anchor2) + ratio * distance(anchor3, anchor4) ≤ jointMax`

This models a rope-and-pulley system where lifting one side lowers the other.
All four anchors are in the local space of their respective bodies.

#### Example

```
// Classic pulley: as body2 moves away from anchor1, body4 moves toward anchor3  
const joint = new PulleyJoint(  
  body1, body2, body3, body4,  
  Vec2.weak(0,0), Vec2.weak(0,0),  
  Vec2.weak(0,0), Vec2.weak(0,0),  
  0, 200, // total rope length  
);  
joint.space = space;
Copy
```

Fully modernized — uses ZPP\_PulleyJoint directly (extracted to TypeScript).

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#PulleyJoint))

* [Constraint](Constraint.md)
  + PulleyJoint

* Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:53](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L53)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[debugDraw](#debugdraw)

### Accessors

[active](#active)
[anchor1](#anchor1)
[anchor2](#anchor2)
[anchor3](#anchor3)
[anchor4](#anchor4)
[body1](#body1)
[body2](#body2)
[body3](#body3)
[body4](#body4)
[breakUnderError](#breakundererror)
[breakUnderForce](#breakunderforce)
[cbTypes](#cbtypes)
[compound](#compound)
[damping](#damping)
[frequency](#frequency)
[ignore](#ignore)
[isSleeping](#issleeping)
[jointMax](#jointmax)
[jointMin](#jointmin)
[maxError](#maxerror)
[maxForce](#maxforce)
[ratio](#ratio)
[removeOnBreak](#removeonbreak)
[space](#space)
[stiff](#stiff)
[userData](#userdata)

### Methods

[bodyImpulse](#bodyimpulse)
[copy](#copy)
[impulse](#impulse)
[isSlack](#isslack)
[toString](#tostring)
[visitBodies](#visitbodies)

## Constructors

### constructor

* new PulleyJoint(  
      body1: [Body](Body.md) | null,  
      body2: [Body](Body.md) | null,  
      body3: [Body](Body.md) | null,  
      body4: [Body](Body.md) | null,  
      anchor1: [Vec2](Vec2.md),  
      anchor2: [Vec2](Vec2.md),  
      anchor3: [Vec2](Vec2.md),  
      anchor4: [Vec2](Vec2.md),  
      jointMin: number,  
      jointMax: number,  
      ratio?: number,  
  ): PulleyJoint

  #### Parameters

  + body1: [Body](Body.md) | null

    First body (pulley side 1), or `null` for a static anchor.
  + body2: [Body](Body.md) | null

    Second body (pulley side 1), or `null` for a static anchor.
  + body3: [Body](Body.md) | null

    Third body (pulley side 2), or `null` for a static anchor.
  + body4: [Body](Body.md) | null

    Fourth body (pulley side 2), or `null` for a static anchor.
  + anchor1: [Vec2](Vec2.md)

    Anchor on `body1` in local space (disposed if weak).
  + anchor2: [Vec2](Vec2.md)

    Anchor on `body2` in local space (disposed if weak).
  + anchor3: [Vec2](Vec2.md)

    Anchor on `body3` in local space (disposed if weak).
  + anchor4: [Vec2](Vec2.md)

    Anchor on `body4` in local space (disposed if weak).
  + jointMin: number

    Minimum allowed total rope length (must be `>= 0`).
  + jointMax: number

    Maximum allowed total rope length (must be `>= jointMin`).
  + ratio: number = 1.0

    Weight of the second distance segment. Default `1.0`.

  #### Returns PulleyJoint

  Overrides Constraint.constructor

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:70](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L70)

## Properties

### debugDraw

debugDraw: boolean = true

Inherited from [Constraint](Constraint.md).[debugDraw](Constraint.md#debugdraw)

* Defined in [packages/nape-js/src/constraint/Constraint.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L38)

## Accessors

### active

* get active(): boolean

  Whether the constraint is currently active (enforced by the solver).

  Deactivating a constraint suspends it without removing it from the space.

  #### Returns boolean

  #### Default Value

  `true`

  Inherited from Constraint.active

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:150](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L150)
* set active(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Constraint.active

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L153)

### anchor1

* get anchor1(): [Vec2](Vec2.md)

  Anchor on `body1` in local coordinates.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:375](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L375)
* set anchor1(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:379](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L379)

### anchor2

* get anchor2(): [Vec2](Vec2.md)

  Anchor on `body2` in local coordinates.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:394](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L394)
* set anchor2(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:398](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L398)

### anchor3

* get anchor3(): [Vec2](Vec2.md)

  Anchor on `body3` in local coordinates.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:413](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L413)
* set anchor3(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:417](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L417)

### anchor4

* get anchor4(): [Vec2](Vec2.md)

  Anchor on `body4` in local coordinates.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:432](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L432)
* set anchor4(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:436](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L436)

### body1

* get body1(): [Body](Body.md)

  First body of the first rope segment. `null` = static world point.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:195](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L195)
* set body1(value: [Body](Body.md) | null): void

  #### Parameters

  + value: [Body](Body.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:199](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L199)

### body2

* get body2(): [Body](Body.md)

  Second body of the first rope segment. `null` = static world point.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:204](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L204)
* set body2(value: [Body](Body.md) | null): void

  #### Parameters

  + value: [Body](Body.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:208](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L208)

### body3

* get body3(): [Body](Body.md)

  First body of the second rope segment. `null` = static world point.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:213](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L213)
* set body3(value: [Body](Body.md) | null): void

  #### Parameters

  + value: [Body](Body.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:217](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L217)

### body4

* get body4(): [Body](Body.md)

  Second body of the second rope segment. `null` = static world point.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:222](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L222)
* set body4(value: [Body](Body.md) | null): void

  #### Parameters

  + value: [Body](Body.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:226](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L226)

### breakUnderError

* get breakUnderError(): boolean

  When `true`, the constraint breaks if the positional error exceeds `maxError`.

  #### Returns boolean

  #### Default Value

  `false`

  Inherited from Constraint.breakUnderError

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:330](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L330)
* set breakUnderError(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Constraint.breakUnderError

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:333](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L333)

### breakUnderForce

* get breakUnderForce(): boolean

  When `true`, the constraint breaks (fires a `BREAK` event) if the applied
  force exceeds `maxForce` in a single step.

  #### Returns boolean

  #### Default Value

  `false`

  Inherited from Constraint.breakUnderForce

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:316](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L316)
* set breakUnderForce(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Constraint.breakUnderForce

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:319](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L319)

### cbTypes

* get cbTypes(): object

  The set of [CbType](CbType.md)s assigned to this constraint.
  Used to filter which listeners respond to this constraint's events.

  #### Returns object

  Inherited from Constraint.cbTypes

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:381](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L381)

### compound

* get compound(): [Compound](Compound.md) | null

  The compound this constraint belongs to, or `null`.
  When set, the constraint's `space` is managed by the compound.

  #### Returns [Compound](Compound.md) | null

  Inherited from Constraint.compound

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:122](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L122)
* set compound(value: [Compound](Compound.md) | null): void

  #### Parameters

  + value: [Compound](Compound.md) | null

  #### Returns void

  Inherited from Constraint.compound

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L126)

### damping

* get damping(): number

  Damping ratio for soft constraints (`stiff = false`).

  `0` = undamped (oscillates freely), `1` = critically damped.
  Values `> 1` are overdamped. Must be `>= 0`. Ignored when `stiff` is `true`.

  #### Returns number

  #### Default Value

  `1`

  Inherited from Constraint.damping

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:242](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L242)
* set damping(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  Inherited from Constraint.damping

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:245](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L245)

### frequency

* get frequency(): number

  Spring frequency in Hz for soft constraints (`stiff = false`).

  Higher values make the spring stiffer; lower values make it bouncier.
  Must be `> 0`. Ignored when `stiff` is `true`.

  #### Returns number

  #### Default Value

  `10`

  Inherited from Constraint.frequency

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:217](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L217)
* set frequency(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  Inherited from Constraint.frequency

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:220](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L220)

### ignore

* get ignore(): boolean

  When `true` the constraint is completely ignored by the engine — bodies are
  not woken, no impulse is applied, and no callbacks fire.

  #### Returns boolean

  #### Default Value

  `false`

  Inherited from Constraint.ignore

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:184](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L184)
* set ignore(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Constraint.ignore

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:187](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L187)

### isSleeping

* get isSleeping(): boolean

  Whether the constraint's simulation component is currently sleeping.

  Only valid when the constraint is active and in a space — throws otherwise.

  #### Returns boolean

  Inherited from Constraint.isSleeping

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:357](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L357)

### jointMax

* get jointMax(): number

  Maximum allowed total rope length (must be `>= jointMin`).

  #### Returns number

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:473](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L473)
* set jointMax(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:476](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L476)

### jointMin

* get jointMin(): number

  Minimum allowed total rope length (must be `>= 0`).

  #### Returns number

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:455](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L455)
* set jointMin(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:458](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L458)

### maxError

* get maxError(): number

  Maximum positional error (in pixels) allowed before breaking.

  Only meaningful when `breakUnderError` is `true`.
  Must be `>= 0`. `Infinity` disables the limit.

  #### Returns number

  #### Default Value

  `Infinity`

  Inherited from Constraint.maxError

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:295](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L295)
* set maxError(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  Inherited from Constraint.maxError

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:298](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L298)

### maxForce

* get maxForce(): number

  Maximum force (in Newtons) the constraint may apply per step.

  When the required force exceeds this value the constraint becomes slack.
  If `breakUnderForce` is `true` the constraint breaks instead.

  The clamp only applies to soft constraints (`stiff = false`): a stiff
  constraint ignores `maxForce` unless `breakUnderForce` is set.
  `MotorJoint` and `SpringJoint` are the exception and always clamp.
  Must be `>= 0`. `Infinity` disables the limit.

  #### Returns number

  #### Default Value

  `Infinity`

  Inherited from Constraint.maxForce

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:272](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L272)
* set maxForce(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  Inherited from Constraint.maxForce

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:275](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L275)

### ratio

* get ratio(): number

  Weight of the second rope segment in the total length sum.

  The constraint enforces: `distance(a1,a2) + ratio * distance(a3,a4)` within bounds.

  #### Returns number

  #### Default Value

  `1.0`

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:496](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L496)
* set ratio(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:499](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L499)

### removeOnBreak

* get removeOnBreak(): boolean

  When `true` (default), the constraint is automatically removed from its space
  when it breaks. Set to `false` to keep it in the space after breaking.

  #### Returns boolean

  #### Default Value

  `true`

  Inherited from Constraint.removeOnBreak

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:345](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L345)
* set removeOnBreak(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Constraint.removeOnBreak

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:348](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L348)

### space

* get space(): [Space](Space.md) | null

  The space this constraint belongs to, or `null` if not in a space.

  Assign to add/remove the constraint from a space:

  ```
  joint.space = mySpace;  // adds to space  
  joint.space = null;     // removes from space
  Copy
  ```

  Cannot be set if the constraint belongs to a [Compound](Compound.md).

  #### Returns [Space](Space.md) | null

  Inherited from Constraint.space

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:85](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L85)
* set space(value: [Space](Space.md) | null): void

  #### Parameters

  + value: [Space](Space.md) | null

  #### Returns void

  Inherited from Constraint.space

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:89](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L89)

### stiff

* get stiff(): boolean

  When `true` (default) the constraint is stiff/rigid.
  When `false` the constraint uses a soft spring model driven by
  `frequency` and `damping`.

  #### Returns boolean

  #### Default Value

  `true`

  Inherited from Constraint.stiff

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:200](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L200)
* set stiff(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Constraint.stiff

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:203](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L203)

### userData

* get userData(): Record<string, unknown>

  Arbitrary user data attached to this constraint.
  Lazily initialized to `{}` on first access.

  #### Returns Record<string, unknown>

  Inherited from Constraint.userData

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:370](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L370)

## Methods

### bodyImpulse

* bodyImpulse(body: [Body](Body.md)): [Vec3](Vec3.md)

  The impulse applied to `body` by this constraint in the last simulation step,
  expressed as a [Vec3](Vec3.md) `(fx, fy, torque)`.

  #### Parameters

  + body: [Body](Body.md)

  #### Returns [Vec3](Vec3.md)

  Overrides [Constraint](Constraint.md).[bodyImpulse](Constraint.md#bodyimpulse)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:541](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L541)

### copy

* copy(): [Constraint](Constraint.md)

  Creates and returns a copy of this constraint with the same parameters.
  The copy is not automatically added to a space.

  #### Returns [Constraint](Constraint.md)

  Inherited from [Constraint](Constraint.md).[copy](Constraint.md#copy)

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:424](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L424)

### impulse

* impulse(): [MatMN](MatMN.md)

  The impulse applied by this constraint in the last simulation step.

  The shape of the returned [MatMN](MatMN.md) depends on the constraint's degrees of
  freedom (e.g., 1×1 for AngleJoint/MotorJoint, 2×1 for PivotJoint/LineJoint,
  3×1 for WeldJoint).

  #### Returns [MatMN](MatMN.md)

  Overrides [Constraint](Constraint.md).[impulse](Constraint.md#impulse)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:532](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L532)

### isSlack

* isSlack(): boolean

  Returns `true` when the total rope length is within bounds and no corrective
  impulse was applied last step.

  #### Returns boolean

  #### Throws

  if any of the four bodies is `null`.

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:520](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L520)

### toString

* toString(): string

  #### Returns string

  Inherited from [Constraint](Constraint.md).[toString](Constraint.md#tostring)

  + Defined in [packages/nape-js/src/constraint/Constraint.ts:428](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/Constraint.ts#L428)

### visitBodies

* visitBodies(lambda: (body: [Body](Body.md)) => void): void

  Invokes `fn` once for each distinct body linked to this constraint.

  #### Parameters

  + lambda: (body: [Body](Body.md)) => void

  #### Returns void

  Overrides [Constraint](Constraint.md).[visitBodies](Constraint.md#visitbodies)

  + Defined in [packages/nape-js/src/constraint/PulleyJoint.ts:559](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/PulleyJoint.ts#L559)
