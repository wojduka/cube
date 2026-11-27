Source: https://napejs.org/api/classes/CollisionArbiter.html

* CollisionArbiter

# Class CollisionArbiter

An arbiter representing a physical collision between two solid shapes.

Provides access to contact points, collision normal, friction coefficients,
elasticity, and impulse data. Properties marked *mutable in pre-handler* can
only be set within a [PreListener](PreListener.md) handler.

Obtain via [Arbiter.collisionArbiter](Arbiter.md#collisionarbiter) or by casting from a callback's
arbiter list.

Fully modernized — uses extracted ZPP\_ColArbiter directly.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#CollisionArbiter))

* [Arbiter](Arbiter.md)
  + CollisionArbiter

* Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L19)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[body1](#body1)
[body2](#body2)
[collisionArbiter](#collisionarbiter)
[contacts](#contacts)
[dynamicFriction](#dynamicfriction)
[elasticity](#elasticity)
[fluidArbiter](#fluidarbiter)
[isSleeping](#issleeping)
[normal](#normal)
[radius](#radius)
[referenceEdge1](#referenceedge1)
[referenceEdge2](#referenceedge2)
[rollingFriction](#rollingfriction)
[shape1](#shape1)
[shape2](#shape2)
[state](#state)
[staticFriction](#staticfriction)
[type](#type)

### Methods

[firstVertex](#firstvertex)
[isCollisionArbiter](#iscollisionarbiter)
[isFluidArbiter](#isfluidarbiter)
[isSensorArbiter](#issensorarbiter)
[normalImpulse](#normalimpulse)
[rollingImpulse](#rollingimpulse)
[secondVertex](#secondvertex)
[tangentImpulse](#tangentimpulse)
[toString](#tostring)
[totalImpulse](#totalimpulse)

## Constructors

### constructor

* new CollisionArbiter(): CollisionArbiter

  #### Returns CollisionArbiter

  Overrides [Arbiter](Arbiter.md).[constructor](Arbiter.md#constructor)

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:20](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L20)

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

* get collisionArbiter(): CollisionArbiter | null

  Cast to CollisionArbiter if this is a collision, else null.

  #### Returns CollisionArbiter | null

  Inherited from Arbiter.collisionArbiter

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:70](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L70)

### contacts

* get contacts(): object

  The list of active contact points between the two shapes.
  Contains 1 or 2 [Contact](Contact.md) objects depending on the collision geometry.

  #### Returns object

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:33](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L33)

### dynamicFriction

* get dynamicFriction(): number

  Dynamic (kinetic) friction coefficient — applied when the contact is sliding.
  Combined from the two shapes' material values. *Mutable in pre-handler only.*

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:134](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L134)
* set dynamicFriction(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L139)

### elasticity

* get elasticity(): number

  Coefficient of restitution (bounciness).

  Combined from the two shapes' `elasticity` values. Can be overridden
  inside a pre-handler. Must be `>= 0`.

  *Mutable in pre-handler only.*

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:111](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L111)
* set elasticity(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:116](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L116)

### fluidArbiter

* get fluidArbiter(): [FluidArbiter](FluidArbiter.md) | null

  Cast to FluidArbiter if this is a fluid interaction, else null.

  #### Returns [FluidArbiter](FluidArbiter.md) | null

  Inherited from Arbiter.fluidArbiter

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L78)

### isSleeping

* get isSleeping(): boolean

  Whether both interacting bodies are currently sleeping.
  Throws if the arbiter is not active.

  #### Returns boolean

  Inherited from Arbiter.isSleeping

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L49)

### normal

* get normal(): [Vec2](Vec2.md)

  Collision normal vector pointing from `shape1` toward `shape2`.
  Read-only; available after the arbiter is active.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:45](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L45)

### radius

* get radius(): number

  Sum of the radii of the two shapes at the collision point.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L54)

### referenceEdge1

* get referenceEdge1(): [Edge](Edge.md) | null

  Reference edge of shape1 (if polygon), or null.

  #### Returns [Edge](Edge.md) | null

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:60](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L60)

### referenceEdge2

* get referenceEdge2(): [Edge](Edge.md) | null

  Reference edge of shape2 (if polygon), or null.

  #### Returns [Edge](Edge.md) | null

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:80](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L80)

### rollingFriction

* get rollingFriction(): number

  Rolling friction coefficient — resists rolling motion.
  Combined from the two shapes' material values. *Mutable in pre-handler only.*

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:180](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L180)
* set rollingFriction(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:185](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L185)

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

### staticFriction

* get staticFriction(): number

  Static friction coefficient — applied when the contact is at rest.
  Combined from the two shapes' material values. *Mutable in pre-handler only.*

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:157](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L157)
* set staticFriction(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:162](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L162)

### type

* get type(): [ArbiterType](ArbiterType.md)

  The interaction type of this arbiter.

  #### Returns [ArbiterType](ArbiterType.md)

  #### See

  [ArbiterType](ArbiterType.md)

  Inherited from Arbiter.type

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L58)

## Methods

### firstVertex

* firstVertex(): boolean

  Whether the first contact point lies on a polygon vertex (poly-circle only).

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:204](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L204)

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

### normalImpulse

* normalImpulse(body?: [Body](Body.md) | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Impulse applied in the normal (collision) direction, summed over all contacts.

  #### Parameters

  + body: [Body](Body.md) | null = null

    One of the two bodies, or `null` for the combined value.
  + freshOnly: boolean = false

    Only include new contact points. Default `false`.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:228](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L228)

### rollingImpulse

* rollingImpulse(body?: [Body](Body.md) | null, freshOnly?: boolean): number

  Rolling impulse applied by this collision.

  #### Parameters

  + body: [Body](Body.md) | null = null

    One of the two bodies, or `null` for the combined value.
  + freshOnly: boolean = false

    Only include new contact points. Default `false`.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:257](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L257)

### secondVertex

* secondVertex(): boolean

  Whether the second contact point lies on a polygon vertex (poly-circle only).

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:212](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L212)

### tangentImpulse

* tangentImpulse(body?: [Body](Body.md) | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Friction impulse applied in the tangent direction, summed over all contacts.

  #### Parameters

  + body: [Body](Body.md) | null = null

    One of the two bodies, or `null` for the combined value.
  + freshOnly: boolean = false

    Only include new contact points. Default `false`.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:239](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L239)

### toString

* toString(): string

  #### Returns string

  Inherited from [Arbiter](Arbiter.md).[toString](Arbiter.md#tostring)

  + Defined in [packages/nape-js/src/dynamics/Arbiter.ts:195](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Arbiter.ts#L195)

### totalImpulse

* totalImpulse(body?: [Body](Body.md) | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Total impulse (normal + tangent + rolling) accumulated across all contacts.

  #### Parameters

  + body: [Body](Body.md) | null = null
  + freshOnly: boolean = false

  #### Returns [Vec3](Vec3.md)

  Overrides [Arbiter](Arbiter.md).[totalImpulse](Arbiter.md#totalimpulse)

  + Defined in [packages/nape-js/src/dynamics/CollisionArbiter.ts:246](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/CollisionArbiter.ts#L246)
