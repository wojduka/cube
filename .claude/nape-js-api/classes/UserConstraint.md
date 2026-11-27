Source: https://napejs.org/api/classes/UserConstraint.html

* UserConstraint

# Class UserConstraint`Abstract`

Base class for user-defined N-DOF constraints.

Fully modernized — uses ZPP\_UserConstraint directly (extracted to TypeScript).
Subclass and override the abstract callback methods to define custom constraints.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#UserConstraint))

* [Constraint](Constraint.md)
  + UserConstraint

* Defined in [packages/nape-js/src/constraint/UserConstraint.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L16)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[debugDraw](#debugdraw)

### Accessors

[active](#active)
[breakUnderError](#breakundererror)
[breakUnderForce](#breakunderforce)
[cbTypes](#cbtypes)
[compound](#compound)
[damping](#damping)
[frequency](#frequency)
[ignore](#ignore)
[isSleeping](#issleeping)
[maxError](#maxerror)
[maxForce](#maxforce)
[removeOnBreak](#removeonbreak)
[space](#space)
[stiff](#stiff)
[userData](#userdata)

### Methods

[\_\_bindVec2](#__bindvec2)
[\_\_broken](#__broken)
[\_\_clamp](#__clamp)
[\_\_copy](#__copy)
[\_\_draw](#__draw)
[\_\_eff\_mass](#__eff_mass)
[\_\_impulse](#__impulse)
[\_\_invalidate](#__invalidate)
[\_\_position](#__position)
[\_\_prepare](#__prepare)
[\_\_registerBody](#__registerbody)
[\_\_validate](#__validate)
[\_\_velocity](#__velocity)
[bodyImpulse](#bodyimpulse)
[copy](#copy)
[impulse](#impulse)
[toString](#tostring)
[visitBodies](#visitbodies)

## Constructors

### constructor

* new UserConstraint(dimensions: number, velocityOnly?: boolean): UserConstraint

  #### Parameters

  + dimensions: number
  + velocityOnly: boolean = false

  #### Returns UserConstraint

  Overrides Constraint.constructor

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L19)

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

### \_\_bindVec2

* \_\_bindVec2(): [Vec2](Vec2.md)

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L52)

### \_\_broken

* \_\_broken(): void

  Called when the constraint breaks. Optional override.

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:69](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L69)

### \_\_clamp

* \_\_clamp(\_jAcc: number[]): void

  Clamp accumulated impulse. Optional override.

  #### Parameters

  + \_jAcc: number[]

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:96](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L96)

### \_\_copy

* \_\_copy(): UserConstraint

  Create a copy of this constraint. Must be overridden.

  #### Returns UserConstraint

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:64](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L64)

### \_\_draw

* \_\_draw(\_debug: any): void

  Draw debug visualization. Optional override.

  #### Parameters

  + \_debug: any

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:75](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L75)

### \_\_eff\_mass

* \_\_eff\_mass(\_eff: number[]): void

  Compute effective mass matrix (upper triangle). Must be overridden.

  #### Parameters

  + \_eff: number[]

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:91](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L91)

### \_\_impulse

* \_\_impulse(\_imp: number[], \_body: [Body](Body.md), \_out: any): void

  Apply impulse to a body. Must be overridden.

  #### Parameters

  + \_imp: number[]
  + \_body: [Body](Body.md)
  + \_out: any

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:99](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L99)

### \_\_invalidate

* \_\_invalidate(): void

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:167](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L167)

### \_\_position

* \_\_position(\_err: number[]): void

  Compute positional error. Must be overridden for non-velocity-only constraints.

  #### Parameters

  + \_err: number[]

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:81](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L81)

### \_\_prepare

* \_\_prepare(): void

  Prepare the constraint for solving. Optional override.

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L78)

### \_\_registerBody

* \_\_registerBody(oldBody: [Body](Body.md) | null, newBody: [Body](Body.md) | null): [Body](Body.md) | null

  #### Parameters

  + oldBody: [Body](Body.md) | null
  + newBody: [Body](Body.md) | null

  #### Returns [Body](Body.md) | null

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:177](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L177)

### \_\_validate

* \_\_validate(): void

  Called to validate the constraint. Optional override.

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:72](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L72)

### \_\_velocity

* \_\_velocity(\_err: number[]): void

  Compute velocity error. Must be overridden.

  #### Parameters

  + \_err: number[]

  #### Returns void

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:86](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L86)

### bodyImpulse

* bodyImpulse(body: [Body](Body.md)): [Vec3](Vec3.md)

  The impulse applied to `body` by this constraint in the last simulation step,
  expressed as a [Vec3](Vec3.md) `(fx, fy, torque)`.

  #### Parameters

  + body: [Body](Body.md)

  #### Returns [Vec3](Vec3.md)

  Overrides [Constraint](Constraint.md).[bodyImpulse](Constraint.md#bodyimpulse)

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:119](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L119)

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

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:107](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L107)

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

  + Defined in [packages/nape-js/src/constraint/UserConstraint.ts:140](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/constraint/UserConstraint.ts#L140)
