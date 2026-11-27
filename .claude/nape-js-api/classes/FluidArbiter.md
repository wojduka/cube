Source: https://napejs.org/api/classes/FluidArbiter.html

* FluidArbiter

# Class FluidArbiter

An arbiter representing a fluid interaction between a fluid shape and a body.

Provides access to buoyancy and drag impulses, the overlap area, and the
centre of overlap. Properties marked *mutable in pre-handler* can only be
set within a [PreListener](PreListener.md) handler.

Obtain via [Arbiter.fluidArbiter](Arbiter.md#fluidarbiter) or by casting from a callback arbiter.

Fully modernized — uses extracted ZPP\_FluidArbiter directly.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#FluidArbiter))

* [Arbiter](Arbiter.md)
  + FluidArbiter

* Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L17)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[body1](#body1)
[body2](#body2)
[collisionArbiter](#collisionarbiter)
[fluidArbiter](#fluidarbiter)
[isSleeping](#issleeping)
[overlap](#overlap)
[position](#position)
[shape1](#shape1)
[shape2](#shape2)
[state](#state)
[type](#type)

### Methods

[buoyancyImpulse](#buoyancyimpulse)
[dragImpulse](#dragimpulse)
[isCollisionArbiter](#iscollisionarbiter)
[isFluidArbiter](#isfluidarbiter)
[isSensorArbiter](#issensorarbiter)
[toString](#tostring)
[totalImpulse](#totalimpulse)

## Constructors

### constructor

* new FluidArbiter(): FluidArbiter

  #### Returns FluidArbiter

  Overrides [Arbiter](Arbiter.md).[constructor](Arbiter.md#constructor)

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:18](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L18)

## Accessors

### body1

* get body1(): [Body](Body.md)

  Body of shape1.

  #### Returns [Body](Body.md)

  Inherited from Arbiter.body1

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:102](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L102)

### body2

* get body2(): [Body](Body.md)

  Body of shape2.

  #### Returns [Body](Body.md)

  Inherited from Arbiter.body2

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:110](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L110)

### collisionArbiter

* get collisionArbiter(): [CollisionArbiter](CollisionArbiter.md) | null

  Cast to CollisionArbiter if this is a collision, else null.

  #### Returns [CollisionArbiter](CollisionArbiter.md) | null

  Inherited from Arbiter.collisionArbiter

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:70](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L70)

### fluidArbiter

* get fluidArbiter(): FluidArbiter | null

  Cast to FluidArbiter if this is a fluid interaction, else null.

  #### Returns FluidArbiter | null

  Inherited from Arbiter.fluidArbiter

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L78)

### isSleeping

* get isSleeping(): boolean

  Whether both interacting bodies are currently sleeping.
  Throws if the arbiter is not active.

  #### Returns boolean

  Inherited from Arbiter.isSleeping

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L49)

### overlap

* get overlap(): number

  Area of the overlap region in pixels². Used to compute buoyancy force.
  Must be strictly positive and finite.
  *Mutable in pre-handler only.*

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:57](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L57)
* set overlap(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:61](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L61)

### position

* get position(): [Vec2](Vec2.md)

  Centre of the overlap region between the fluid and the body shape.
  *Mutable in pre-handler only.*

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L30)
* set position(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:37](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L37)

### shape1

* get shape1(): [Shape](Shape.md)

  First shape (lower id).

  #### Returns [Shape](Shape.md)

  Inherited from Arbiter.shape1

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:86](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L86)

### shape2

* get shape2(): [Shape](Shape.md)

  Second shape (higher id).

  #### Returns [Shape](Shape.md)

  Inherited from Arbiter.shape2

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L94)

### state

* get state(): [PreFlag](PreFlag.md)

  The pre-handler state of this arbiter.

  #### Returns [PreFlag](PreFlag.md)

  Inherited from Arbiter.state

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:118](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L118)

### type

* get type(): [ArbiterType](ArbiterType.md)

  The interaction type of this arbiter.

  #### Returns [ArbiterType](ArbiterType.md)

  #### See

  [ArbiterType](ArbiterType.md)

  Inherited from Arbiter.type

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L58)

## Methods

### buoyancyImpulse

* buoyancyImpulse(body?: [Body](Body.md) | null): [Vec3](Vec3.md)

  Buoyancy impulse applied in the last step as `(fx, fy, torque)`.

  #### Parameters

  + body: [Body](Body.md) | null = null

    One of the two bodies, or `null` for the combined value.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L82)

### dragImpulse

* dragImpulse(body?: [Body](Body.md) | null): [Vec3](Vec3.md)

  Linear and angular drag impulse applied in the last step as `(fx, fy, torque)`.

  #### Parameters

  + body: [Body](Body.md) | null = null

    One of the two bodies, or `null` for the combined value.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:99](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L99)

### isCollisionArbiter

* isCollisionArbiter(): boolean

  Whether this is a collision arbiter.

  #### Returns boolean

  Inherited from [Arbiter](Arbiter.md).[isCollisionArbiter](Arbiter.md#iscollisionarbiter)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:158](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L158)

### isFluidArbiter

* isFluidArbiter(): boolean

  Whether this is a fluid arbiter.

  #### Returns boolean

  Inherited from [Arbiter](Arbiter.md).[isFluidArbiter](Arbiter.md#isfluidarbiter)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L163)

### isSensorArbiter

* isSensorArbiter(): boolean

  Whether this is a sensor arbiter.

  #### Returns boolean

  Inherited from [Arbiter](Arbiter.md).[isSensorArbiter](Arbiter.md#issensorarbiter)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:168](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L168)

### toString

* toString(): string

  #### Returns string

  Inherited from [Arbiter](Arbiter.md).[toString](Arbiter.md#tostring)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:195](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L195)

### totalImpulse

* totalImpulse(body?: [Body](Body.md) | null, \_freshOnly?: boolean): [Vec3](Vec3.md)

  Total impulse (buoyancy + drag).

  #### Parameters

  + body: [Body](Body.md) | null = null
  + \_freshOnly: boolean = false

  #### Returns [Vec3](Vec3.md)

  Overrides [Arbiter](Arbiter.md).[totalImpulse](Arbiter.md#totalimpulse)

  + Defined in [packages/nape-js/src/dynamics/FluidArbiter.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/FluidArbiter.ts#L108)
