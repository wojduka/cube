Source: https://napejs.org/api/classes/Space.html

* Space

# Class Space

The physics world. Add bodies, shapes, and constraints, then call `step()` each frame to advance the simulation.

* Defined in [packages/nape-js/src/space/Space.ts:44](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L44)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[arbiters](#arbiters)
[bodies](#bodies)
[broadphase](#broadphase)
[compounds](#compounds)
[constraints](#constraints)
[deterministic](#deterministic)
[elapsedTime](#elapsedtime)
[gravity](#gravity)
[listeners](#listeners)
[liveBodies](#livebodies)
[liveConstraints](#liveconstraints)
[metrics](#metrics)
[profilerEnabled](#profilerenabled)
[sortContacts](#sortcontacts)
[subSteps](#substeps)
[timeStamp](#timestamp)
[userData](#userdata)
[world](#world)
[worldAngularDrag](#worldangulardrag)
[worldLinearDrag](#worldlineardrag)

### Methods

[bodiesInAABB](#bodiesinaabb)
[bodiesInBody](#bodiesinbody)
[bodiesInCircle](#bodiesincircle)
[bodiesInShape](#bodiesinshape)
[bodiesUnderPoint](#bodiesunderpoint)
[clear](#clear)
[convexCast](#convexcast)
[convexMultiCast](#convexmulticast)
[debugDraw](#debugdraw)
[interactionType](#interactiontype)
[rayCast](#raycast)
[rayMultiCast](#raymulticast)
[shapesInAABB](#shapesinaabb)
[shapesInBody](#shapesinbody)
[shapesInCircle](#shapesincircle)
[shapesInShape](#shapesinshape)
[shapesUnderPoint](#shapesunderpoint)
[step](#step)
[toString](#tostring)
[visitBodies](#visitbodies)
[visitCompounds](#visitcompounds)
[visitConstraints](#visitconstraints)

## Constructors

### constructor

* new Space(gravity?: [Vec2](Vec2.md), broadphase?: [Broadphase](Broadphase.md)): Space

  #### Parameters

  + `Optional`gravity: [Vec2](Vec2.md)

    Initial gravity vector (default (0, 0)).
  + `Optional`broadphase: [Broadphase](Broadphase.md)

    Broadphase algorithm to use.

  #### Returns Space

  + Defined in [packages/nape-js/src/space/Space.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L52)

## Accessors

### arbiters

* get arbiters(): [ArbiterList](../types/ArbiterList.md)

  Read-only list of all active collision/fluid arbiters.

  #### Returns [ArbiterList](../types/ArbiterList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:298](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L298)

### bodies

* get bodies(): [BodyList](../types/BodyList.md)

  Read-only list of all Body objects directly in this space.

  #### Returns [BodyList](../types/BodyList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:273](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L273)

### broadphase

* get broadphase(): [Broadphase](Broadphase.md)

  The broadphase algorithm currently in use.

  #### Returns [Broadphase](Broadphase.md)

  + Defined in [packages/nape-js/src/space/Space.ts:129](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L129)

### compounds

* get compounds(): [CompoundList](../types/CompoundList.md)

  Read-only list of all Compound objects in this space.

  #### Returns [CompoundList](../types/CompoundList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:268](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L268)

### constraints

* get constraints(): [ConstraintList](../types/ConstraintList.md)

  Read-only list of all Constraint objects in this space.

  #### Returns [ConstraintList](../types/ConstraintList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:283](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L283)

### deterministic

* get deterministic(): boolean

  If true, the simulation produces identical results across runs on the same
  platform given the same inputs (same-platform "soft" determinism).

  When enabled, all internal iteration orders (bodies, constraints, arbiters,
  islands) are sorted by stable IDs before processing. `sortContacts` is also
  forced to `true`.

  **Performance:** adds ~1-5% overhead to `step()` due to sorting. Default: `false`.

  #### Returns boolean

  + Defined in [packages/nape-js/src/space/Space.ts:172](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L172)
* set deterministic(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:175](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L175)

### elapsedTime

* get elapsedTime(): number

  Cumulative time simulated (sum of all `deltaTime` values passed to `step()`).

  #### Returns number

  + Defined in [packages/nape-js/src/space/Space.ts:318](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L318)

### gravity

* get gravity(): [Vec2](Vec2.md)

  World gravity applied to all dynamic bodies each step. Live Vec2.

  #### Returns [Vec2](Vec2.md)

  #### Throws

  If set to null or a disposed Vec2.

  + Defined in [packages/nape-js/src/space/Space.ts:105](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L105)
* set gravity(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:112](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L112)

### listeners

* get listeners(): [ListenerList](../types/ListenerList.md)

  Read-only list of all event listeners registered to this space.

  #### Returns [ListenerList](../types/ListenerList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:308](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L308)

### liveBodies

* get liveBodies(): [BodyList](../types/BodyList.md)

  Read-only list of bodies that are awake and actively simulated.

  #### Returns [BodyList](../types/BodyList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:278](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L278)

### liveConstraints

* get liveConstraints(): [ConstraintList](../types/ConstraintList.md)

  Read-only list of active (awake) constraints.

  #### Returns [ConstraintList](../types/ConstraintList.md)

  + Defined in [packages/nape-js/src/space/Space.ts:288](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L288)

### metrics

* get metrics(): [PhysicsMetricsData](../interfaces/PhysicsMetricsData.md)

  Read-only snapshot of the last `step()` metrics.
  Returns a reused object (no allocation per call). Only populated when
  [profilerEnabled](#profilerenabled) is `true`; all values are zero otherwise.

  Call `metrics.toJSON()` for a plain-object copy suitable for logging.

  #### Returns [PhysicsMetricsData](../interfaces/PhysicsMetricsData.md)

  + Defined in [packages/nape-js/src/space/Space.ts:205](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L205)

### profilerEnabled

* get profilerEnabled(): boolean

  Enable the built-in performance profiler. When `true`, each `step()` call
  measures per-phase timings (broadphase, narrowphase, velocity solver,
  position solver, CCD, sleep) and collects entity counters (body, contact,
  constraint counts). Read results via [metrics](#metrics).

  **Performance:** adds ~14 `performance.now()` calls per step (~1 microsecond
  total). Default: `false`.

  #### Returns boolean

  + Defined in [packages/nape-js/src/space/Space.ts:191](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L191)
* set profilerEnabled(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:194](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L194)

### sortContacts

* get sortContacts(): boolean

  If true, contact points are sorted for determinism. Default: true.

  #### Returns boolean

  + Defined in [packages/nape-js/src/space/Space.ts:155](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L155)
* set sortContacts(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:158](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L158)

### subSteps

* get subSteps(): number

  Number of sub-steps performed per `step()` call. Each sub-step uses
  `deltaTime / subSteps` and the same velocity/position iteration counts.

  Higher values improve simulation stability (stacking, fast objects, joint
  stiffness) at the cost of proportionally more CPU time.

  + `1` (default) — standard single-step behaviour, zero overhead.
  + `4` — good balance between quality and performance for most games.
  + `8+` — high-precision, useful for stiff constraints or very fast objects.

  **Performance:** cost scales linearly — `subSteps = 4` ≈ 4× solver work.
  Tip: you can lower `velocityIterations` to compensate (e.g. 10 iter × 1 step
  → 3 iter × 4 sub-steps ≈ similar quality at ~1.2× cost).

  #### Returns number

  #### Throws

  If set to a value less than 1 or NaN.

  + Defined in [packages/nape-js/src/space/Space.ts:226](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L226)
* set subSteps(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:229](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L229)

### timeStamp

* get timeStamp(): number

  Number of `step()` calls made so far.

  #### Returns number

  + Defined in [packages/nape-js/src/space/Space.ts:313](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L313)

### userData

* get userData(): Record<string, unknown>

  Arbitrary user data attached to this Space.

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/space/Space.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L94)

### world

* get world(): [Body](Body.md)

  The static world body that acts as an immovable anchor for constraints.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/space/Space.ts:293](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L293)

### worldAngularDrag

* get worldAngularDrag(): number

  Global angular drag coefficient applied to all bodies.

  #### Returns number

  #### Throws

  If set to NaN.

  + Defined in [packages/nape-js/src/space/Space.ts:243](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L243)
* set worldAngularDrag(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:246](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L246)

### worldLinearDrag

* get worldLinearDrag(): number

  Global linear drag coefficient applied to all bodies.

  #### Returns number

  #### Throws

  If set to NaN.

  + Defined in [packages/nape-js/src/space/Space.ts:257](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L257)
* set worldLinearDrag(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/space/Space.ts:260](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L260)

## Methods

### bodiesInAABB

* bodiesInAABB(  
      aabb: [AABB](AABB.md),  
      containment?: boolean,  
      strict?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [BodyList](../types/BodyList.md) | null,  
  ): [BodyList](../types/BodyList.md)

  Return all bodies that have at least one shape overlapping the given AABB.

  #### Parameters

  + aabb: [AABB](AABB.md)

    The axis-aligned bounding box to test against.
  + containment: boolean = false

    If true, only shapes fully contained within the AABB count.
  + strict: boolean = true

    If true, exact shape geometry is tested; otherwise only AABBs are compared.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [BodyList](../types/BodyList.md) | null

    Optional existing BodyList to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of matching bodies.

  #### Throws

  If `aabb` is null or degenerate (zero width or height).

  + Defined in [packages/nape-js/src/space/Space.ts:752](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L752)

### bodiesInBody

* bodiesInBody(  
      body: [Body](Body.md),  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [BodyList](../types/BodyList.md) | null,  
  ): [BodyList](../types/BodyList.md)

  Return all bodies in the space that overlap with any shape attached to `body`.
  Equivalent to calling `bodiesInShape` for each of `body`'s shapes and merging results.

  #### Parameters

  + body: [Body](Body.md)

    The body whose shapes are used as the query region.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [BodyList](../types/BodyList.md) | null

    Optional existing BodyList to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of overlapping bodies.

  #### Throws

  If `body` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:968](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L968)

### bodiesInCircle

* bodiesInCircle(  
      position: [Vec2](Vec2.md),  
      radius: number,  
      containment?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [BodyList](../types/BodyList.md) | null,  
  ): [BodyList](../types/BodyList.md)

  Return all bodies that have at least one shape overlapping a query circle.

  #### Parameters

  + position: [Vec2](Vec2.md)

    World-space centre of the query circle.
  + radius: number

    Radius of the query circle; must be strictly positive and not NaN.
  + containment: boolean = false

    If true, only shapes fully contained within the circle count.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [BodyList](../types/BodyList.md) | null

    Optional existing BodyList to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of matching bodies.

  #### Throws

  If `position` is null/disposed, or `radius` is NaN or non-positive.

  + Defined in [packages/nape-js/src/space/Space.ts:816](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L816)

### bodiesInShape

* bodiesInShape(  
      shape: [Shape](Shape.md),  
      containment?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [BodyList](../types/BodyList.md) | null,  
  ): [BodyList](../types/BodyList.md)

  Return all bodies in the space that have at least one shape overlapping `shape`.

  #### Parameters

  + shape: [Shape](Shape.md)

    The query shape; must be attached to a Body.
  + containment: boolean = false

    If true, only shapes fully contained within `shape` count.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [BodyList](../types/BodyList.md) | null

    Optional existing BodyList to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of overlapping bodies.

  #### Throws

  If `shape` is null, not attached to a Body, or is an invalid polygon.

  + Defined in [packages/nape-js/src/space/Space.ts:887](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L887)

### bodiesUnderPoint

* bodiesUnderPoint(  
      point: [Vec2](Vec2.md),  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [BodyList](../types/BodyList.md) | null,  
  ): [BodyList](../types/BodyList.md)

  Return all bodies that have at least one shape containing the given world-space point.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The world-space point to test.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [BodyList](../types/BodyList.md) | null

    Optional existing BodyList to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of matching bodies.

  #### Throws

  If `point` is null or disposed.

  + Defined in [packages/nape-js/src/space/Space.ts:691](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L691)

### clear

* clear(): void

  Remove all bodies, constraints, and compounds from this space.

  #### Returns void

  #### Throws

  If called during a `step()`.

  + Defined in [packages/nape-js/src/space/Space.ts:354](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L354)

### convexCast

* convexCast(  
      shape: [Shape](Shape.md),  
      deltaTime: number,  
      liveSweep?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
  ): [ConvexResult](ConvexResult.md) | null

  Sweep `shape` along its current velocity for `deltaTime` seconds and return the first hit.

  #### Parameters

  + shape: [Shape](Shape.md)

    The shape to sweep; must belong to a Body.
  + deltaTime: number

    Duration of the sweep; must be non-negative.
  + liveSweep: boolean = false

    If true, other body velocities are considered during the sweep.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.

  #### Returns [ConvexResult](ConvexResult.md) | null

  The first RayResult hit, or null if nothing was struck.

  #### Throws

  If `shape` is null, not attached to a Body, or `deltaTime` is negative/NaN.

  + Defined in [packages/nape-js/src/space/Space.ts:1008](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L1008)

### convexMultiCast

* convexMultiCast(  
      shape: [Shape](Shape.md),  
      deltaTime: number,  
      liveSweep?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [ConvexResultList](../types/ConvexResultList.md) | null,  
  ): [ConvexResultList](../types/ConvexResultList.md)

  Sweep `shape` along its current velocity for `deltaTime` seconds and return all hits.

  #### Parameters

  + shape: [Shape](Shape.md)

    The shape to sweep; must belong to a Body.
  + deltaTime: number

    Duration of the sweep; must be non-negative.
  + liveSweep: boolean = false

    If true, other body velocities are considered during the sweep.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [ConvexResultList](../types/ConvexResultList.md) | null

    Optional existing RayResultList to accumulate results into.

  #### Returns [ConvexResultList](../types/ConvexResultList.md)

  A RayResultList of all hits encountered during the sweep.

  #### Throws

  If `shape` is null, not attached to a Body, or `deltaTime` is negative/NaN.

  + Defined in [packages/nape-js/src/space/Space.ts:1037](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L1037)

### debugDraw

* debugDraw(drawer: [DebugDraw](DebugDraw.md), flags?: number): void

  Draw the current state of the physics world using a user-supplied renderer.

  Walks all bodies, shapes, constraints, contacts, AABBs, and velocity
  vectors and calls the appropriate draw primitives on `drawer`. Only the
  layers selected by `flags` are rendered.

  **Performance note:** this method allocates temporary vertex arrays for
  polygon shapes on every call. It is intended for development/debug use
  only — do not call it in a performance-critical production loop.

  #### Parameters

  + drawer: [DebugDraw](DebugDraw.md)

    The renderer to use. Must not be null.
  + flags: number = DebugDrawFlags.ALL

    Bitmask of [DebugDrawFlags](../variables/DebugDrawFlags.md) layers to render.
    Defaults to `DebugDrawFlags.ALL`.

  #### Returns void

  #### Example

  ```
  space.debugDraw(myDrawer, DebugDrawFlags.SHAPES | DebugDrawFlags.JOINTS);
  Copy
  ```

  + Defined in [packages/nape-js/src/space/Space.ts:1113](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L1113)

### interactionType

* interactionType(shape1: [Shape](Shape.md), shape2: [Shape](Shape.md)): [InteractionType](InteractionType.md) | null

  Determine the type of interaction between two shapes (COLLISION, FLUID, SENSOR, or null if they don't interact).

  #### Parameters

  + shape1: [Shape](Shape.md)

    The first shape; must belong to a Body.
  + shape2: [Shape](Shape.md)

    The second shape; must belong to a Body.

  #### Returns [InteractionType](InteractionType.md) | null

  The InteractionType, or null if the shapes would not interact.

  #### Throws

  If either shape is null or not attached to a Body.

  + Defined in [packages/nape-js/src/space/Space.ts:527](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L527)

### rayCast

* rayCast(  
      ray: [Ray](Ray.md),  
      inner?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
  ): [RayResult](RayResult.md) | null

  Cast a ray into the space and return the closest hit.

  #### Parameters

  + ray: [Ray](Ray.md)

    The ray to cast.
  + inner: boolean = false

    If true, shapes are tested from the inside as well (useful for concave queries).
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.

  #### Returns [RayResult](RayResult.md) | null

  The closest RayResult, or null if nothing was hit.

  #### Throws

  If `ray` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:1065](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L1065)

### rayMultiCast

* rayMultiCast(  
      ray: [Ray](Ray.md),  
      inner?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [RayResultList](../types/RayResultList.md) | null,  
  ): [RayResultList](../types/RayResultList.md)

  Cast a ray into the space and return all hits.

  #### Parameters

  + ray: [Ray](Ray.md)

    The ray to cast.
  + inner: boolean = false

    If true, shapes are tested from the inside as well.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [RayResultList](../types/RayResultList.md) | null

    Optional existing RayResultList to accumulate results into.

  #### Returns [RayResultList](../types/RayResultList.md)

  A RayResultList of all shapes the ray intersected.

  #### Throws

  If `ray` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:1081](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L1081)

### shapesInAABB

* shapesInAABB(  
      aabb: [AABB](AABB.md),  
      containment?: boolean,  
      strict?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [ShapeList](../types/ShapeList.md) | null,  
  ): [ShapeList](../types/ShapeList.md)

  Return all shapes that overlap with the given AABB.

  #### Parameters

  + aabb: [AABB](AABB.md)

    The axis-aligned bounding box to test against.
  + containment: boolean = false

    If true, only shapes fully contained within the AABB are returned.
  + strict: boolean = true

    If true, exact shape geometry is tested; otherwise only AABBs are compared.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [ShapeList](../types/ShapeList.md) | null

    Optional existing ShapeList to accumulate results into.

  #### Returns [ShapeList](../types/ShapeList.md)

  A ShapeList of matching shapes.

  #### Throws

  If `aabb` is null or degenerate (zero width or height).

  + Defined in [packages/nape-js/src/space/Space.ts:723](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L723)

### shapesInBody

* shapesInBody(  
      body: [Body](Body.md),  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [ShapeList](../types/ShapeList.md) | null,  
  ): [ShapeList](../types/ShapeList.md)

  Return all shapes in the space that overlap with any shape attached to `body`.
  Equivalent to calling `shapesInShape` for each of `body`'s shapes and merging results.

  #### Parameters

  + body: [Body](Body.md)

    The body whose shapes are used as the query region.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [ShapeList](../types/ShapeList.md) | null

    Optional existing ShapeList to accumulate results into.

  #### Returns [ShapeList](../types/ShapeList.md)

  A ShapeList of overlapping shapes.

  #### Throws

  If `body` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:924](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L924)

### shapesInCircle

* shapesInCircle(  
      position: [Vec2](Vec2.md),  
      radius: number,  
      containment?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [ShapeList](../types/ShapeList.md) | null,  
  ): [ShapeList](../types/ShapeList.md)

  Return all shapes that overlap with a circle defined by `position` and `radius`.

  #### Parameters

  + position: [Vec2](Vec2.md)

    World-space centre of the query circle.
  + radius: number

    Radius of the query circle; must be strictly positive and not NaN.
  + containment: boolean = false

    If true, only shapes fully contained within the circle are returned.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [ShapeList](../types/ShapeList.md) | null

    Optional existing ShapeList to accumulate results into.

  #### Returns [ShapeList](../types/ShapeList.md)

  A ShapeList of matching shapes.

  #### Throws

  If `position` is null/disposed, or `radius` is NaN or non-positive.

  + Defined in [packages/nape-js/src/space/Space.ts:781](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L781)

### shapesInShape

* shapesInShape(  
      shape: [Shape](Shape.md),  
      containment?: boolean,  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [ShapeList](../types/ShapeList.md) | null,  
  ): [ShapeList](../types/ShapeList.md)

  Return all shapes in the space that overlap with `shape`.

  #### Parameters

  + shape: [Shape](Shape.md)

    The query shape; must be attached to a Body.
  + containment: boolean = false

    If true, only shapes fully contained within `shape` are returned.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [ShapeList](../types/ShapeList.md) | null

    Optional existing ShapeList to accumulate results into.

  #### Returns [ShapeList](../types/ShapeList.md)

  A ShapeList of overlapping shapes.

  #### Throws

  If `shape` is null, not attached to a Body, or is an invalid polygon.

  + Defined in [packages/nape-js/src/space/Space.ts:850](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L850)

### shapesUnderPoint

* shapesUnderPoint(  
      point: [Vec2](Vec2.md),  
      filter?: [InteractionFilter](InteractionFilter.md) | null,  
      output?: [ShapeList](../types/ShapeList.md) | null,  
  ): [ShapeList](../types/ShapeList.md)

  Return all shapes whose geometry contains the given world-space point.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The world-space point to test.
  + `Optional`filter: [InteractionFilter](InteractionFilter.md) | null

    Optional interaction filter to restrict results.
  + `Optional`output: [ShapeList](../types/ShapeList.md) | null

    Optional existing ShapeList to accumulate results into.

  #### Returns [ShapeList](../types/ShapeList.md)

  A ShapeList of matching shapes.

  #### Throws

  If `point` is null or disposed.

  + Defined in [packages/nape-js/src/space/Space.ts:661](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L661)

### step

* step(  
      deltaTime: number,  
      velocityIterations?: number,  
      positionIterations?: number,  
  ): void

  Advance the simulation by `deltaTime` seconds.
  `velocityIterations` and `positionIterations` control solver accuracy (default 10 each).

  #### Parameters

  + deltaTime: number

    Time step in seconds; must be strictly positive and not NaN.
  + velocityIterations: number = 10

    Number of velocity solver iterations (minimum 1).
  + positionIterations: number = 10

    Number of position solver iterations (minimum 1).

  #### Returns void

  #### Throws

  If `deltaTime` is NaN, non-positive, or any iteration count is less than 1.

  + Defined in [packages/nape-js/src/space/Space.ts:334](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L334)

### toString

* toString(): string

  Returns a brief string summary of this space.

  #### Returns string

  A string in the form `Space(bodies=N)`.

  + Defined in [packages/nape-js/src/space/Space.ts:1274](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L1274)

### visitBodies

* visitBodies(lambda: (body: [Body](Body.md)) => void): void

  Call `lambda` for every body in the space, including those inside compounds.

  #### Parameters

  + lambda: (body: [Body](Body.md)) => void

    Callback invoked with each Body.

  #### Returns void

  #### Throws

  If `lambda` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:370](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L370)

### visitCompounds

* visitCompounds(lambda: (compound: [Compound](Compound.md)) => void): void

  Call `lambda` for every compound in the space (recursively).

  #### Parameters

  + lambda: (compound: [Compound](Compound.md)) => void

    Callback invoked with each Compound.

  #### Returns void

  #### Throws

  If `lambda` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:486](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L486)

### visitConstraints

* visitConstraints(lambda: (constraint: [Constraint](Constraint.md)) => void): void

  Call `lambda` for every constraint in the space, including those inside compounds.

  #### Parameters

  + lambda: (constraint: [Constraint](Constraint.md)) => void

    Callback invoked with each Constraint.

  #### Returns void

  #### Throws

  If `lambda` is null.

  + Defined in [packages/nape-js/src/space/Space.ts:428](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Space.ts#L428)
