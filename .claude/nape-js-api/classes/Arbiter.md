Source: https://napejs.org/api/classes/Arbiter.html

* Arbiter

# Class Arbiter

Represents an active interaction between two shapes.

Arbiters are created and pooled internally by the engine — they cannot be
instantiated directly. Access them via:

* `space.arbiters` — all active arbiters in the simulation
* `body.arbiters` — arbiters involving a specific body
* `InteractionCallback.arbiters` — arbiters in an interaction callback
* `PreCallback.arbiter` — the arbiter in a pre-handler

Use [Arbiter.collisionArbiter](#collisionarbiter) or [Arbiter.fluidArbiter](#fluidarbiter) to cast
to a subtype for type-specific properties.

**Warning:** do not hold references to `Arbiter` objects after the current
simulation step — they are pooled and may be reused.

Fully modernized — uses extracted ZPP\_Arbiter directly.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Arbiter))

* Arbiter
  + [CollisionArbiter](CollisionArbiter.md)
  + [FluidArbiter](FluidArbiter.md)

* Defined in [packages/nape-js/src/dynamics/Arbiter.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L30)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[body1](#body1)
[body2](#body2)
[collisionArbiter](#collisionarbiter)
[fluidArbiter](#fluidarbiter)
[isSleeping](#issleeping)
[shape1](#shape1)
[shape2](#shape2)
[state](#state)
[type](#type)

### Methods

[isCollisionArbiter](#iscollisionarbiter)
[isFluidArbiter](#isfluidarbiter)
[isSensorArbiter](#issensorarbiter)
[toString](#tostring)
[totalImpulse](#totalimpulse)

## Constructors

### constructor

* new Arbiter(): Arbiter

  #### Returns Arbiter

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L34)

## Accessors

### body1

* get body1(): [Body](Body.md)

  Body of shape1.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:102](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L102)

### body2

* get body2(): [Body](Body.md)

  Body of shape2.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:110](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L110)

### collisionArbiter

* get collisionArbiter(): [CollisionArbiter](CollisionArbiter.md) | null

  Cast to CollisionArbiter if this is a collision, else null.

  #### Returns [CollisionArbiter](CollisionArbiter.md) | null

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:70](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L70)

### fluidArbiter

* get fluidArbiter(): [FluidArbiter](FluidArbiter.md) | null

  Cast to FluidArbiter if this is a fluid interaction, else null.

  #### Returns [FluidArbiter](FluidArbiter.md) | null

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L78)

### isSleeping

* get isSleeping(): boolean

  Whether both interacting bodies are currently sleeping.
  Throws if the arbiter is not active.

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L49)

### shape1

* get shape1(): [Shape](Shape.md)

  First shape (lower id).

  #### Returns [Shape](Shape.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:86](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L86)

### shape2

* get shape2(): [Shape](Shape.md)

  Second shape (higher id).

  #### Returns [Shape](Shape.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L94)

### state

* get state(): [PreFlag](PreFlag.md)

  The pre-handler state of this arbiter.

  #### Returns [PreFlag](PreFlag.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:118](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L118)

### type

* get type(): [ArbiterType](ArbiterType.md)

  The interaction type of this arbiter.

  #### Returns [ArbiterType](ArbiterType.md)

  #### See

  [ArbiterType](ArbiterType.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L58)

## Methods

### isCollisionArbiter

* isCollisionArbiter(): boolean

  Whether this is a collision arbiter.

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:158](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L158)

### isFluidArbiter

* isFluidArbiter(): boolean

  Whether this is a fluid arbiter.

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L163)

### isSensorArbiter

* isSensorArbiter(): boolean

  Whether this is a sensor arbiter.

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:168](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L168)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:195](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L195)

### totalImpulse

* totalImpulse(body?: [Body](Body.md) | null, \_freshOnly?: boolean): [Vec3](Vec3.md)

  Total impulse applied by this arbiter in the last step as `(fx, fy, torque)`.

  Pass a `body` to get the impulse applied specifically to that body.
  Pass `freshOnly = true` to include only new contact points (not persistent ones).

  Overridden by [CollisionArbiter](CollisionArbiter.md) and [FluidArbiter](FluidArbiter.md).

  #### Parameters

  + body: [Body](Body.md) | null = null

    One of the two interacting bodies, or `null` for the combined impulse.
  + \_freshOnly: boolean = false

    When `true`, only count fresh (new) contacts. Default `false`.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:187](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L187)
