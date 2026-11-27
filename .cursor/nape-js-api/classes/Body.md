Source: https://napejs.org/api/classes/Body.html

* Body

# Class Body

A rigid body in the physics simulation. Add shapes to give it geometry, then add it to a `Space` to participate in simulation.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Body))

* [Interactor](Interactor.md)
  + Body

* Defined in [packages/nape-js/src/phys/Body.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L82)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[debugDraw](#debugdraw)

### Accessors

[allowMovement](#allowmovement)
[allowRotation](#allowrotation)
[angularVel](#angularvel)
[arbiters](#arbiters)
[bounds](#bounds)
[castBody](#castbody)
[castCompound](#castcompound)
[castShape](#castshape)
[cbTypes](#cbtypes)
[compound](#compound)
[constraintInertia](#constraintinertia)
[constraintMass](#constraintmass)
[constraints](#constraints)
[constraintVelocity](#constraintvelocity)
[disableCCD](#disableccd)
[force](#force)
[gravMass](#gravmass)
[gravMassMode](#gravmassmode)
[gravMassScale](#gravmassscale)
[group](#group)
[id](#id)
[inertia](#inertia)
[inertiaMode](#inertiamode)
[isBullet](#isbullet)
[isSleeping](#issleeping)
[kinAngVel](#kinangvel)
[kinematicVel](#kinematicvel)
[localCOM](#localcom)
[mass](#mass)
[massMode](#massmode)
[position](#position)
[rotation](#rotation)
[shapes](#shapes)
[space](#space)
[surfaceVel](#surfacevel)
[torque](#torque)
[type](#type)
[userData](#userdata)
[velocity](#velocity)
[worldCOM](#worldcom)

### Methods

[align](#align)
[applyAngularImpulse](#applyangularimpulse)
[applyImpulse](#applyimpulse)
[buoyancyImpulse](#buoyancyimpulse)
[connectedBodies](#connectedbodies)
[constraintsImpulse](#constraintsimpulse)
[contains](#contains)
[copy](#copy)
[crushFactor](#crushfactor)
[dragImpulse](#dragimpulse)
[integrate](#integrate)
[interactingBodies](#interactingbodies)
[isBody](#isbody)
[isCompound](#iscompound)
[isDynamic](#isdynamic)
[isKinematic](#iskinematic)
[isShape](#isshape)
[isStatic](#isstatic)
[localPointToWorld](#localpointtoworld)
[localVectorToWorld](#localvectortoworld)
[normalImpulse](#normalimpulse)
[rollingImpulse](#rollingimpulse)
[rotate](#rotate)
[rotateShapes](#rotateshapes)
[scaleShapes](#scaleshapes)
[setShapeFilters](#setshapefilters)
[setShapeFluidProperties](#setshapefluidproperties)
[setShapeMaterials](#setshapematerials)
[setVelocityFromTarget](#setvelocityfromtarget)
[tangentImpulse](#tangentimpulse)
[toString](#tostring)
[totalContactsImpulse](#totalcontactsimpulse)
[totalFluidImpulse](#totalfluidimpulse)
[totalImpulse](#totalimpulse)
[transformShapes](#transformshapes)
[translateShapes](#translateshapes)
[worldPointToLocal](#worldpointtolocal)
[worldVectorToLocal](#worldvectortolocal)

## Constructors

### constructor

* new Body(type?: [BodyType](BodyType.md), position?: [Vec2](Vec2.md)): Body

  #### Parameters

  + `Optional`type: [BodyType](BodyType.md)

    Body type (DYNAMIC by default).
  + `Optional`position: [Vec2](Vec2.md)

    Initial world-space position (defaults to origin).

  #### Returns Body

  Overrides Interactor.constructor

  + Defined in [packages/nape-js/src/phys/Body.ts:92](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L92)

## Properties

### debugDraw

debugDraw: boolean = true

If true, this body is included in debug rendering.

* Defined in [packages/nape-js/src/phys/Body.ts:86](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L86)

## Accessors

### allowMovement

* get allowMovement(): boolean

  If false, translational motion is frozen (infinite effective mass).

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:573](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L573)
* set allowMovement(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:576](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L576)

### allowRotation

* get allowRotation(): boolean

  If false, rotational motion is frozen (infinite effective inertia).

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:585](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L585)
* set allowRotation(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:588](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L588)

### angularVel

* get angularVel(): number

  Angular velocity in radians per second.

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:292](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L292)
* set angularVel(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:295](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L295)

### arbiters

* get arbiters(): [ArbiterList](../types/ArbiterList.md)

  Read-only list of the arbiters (contact, sensor and fluid interactions)
  this body is currently involved in.

  #### Returns [ArbiterList](../types/ArbiterList.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:630](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L630)

### bounds

* get bounds(): [AABB](AABB.md)

  World-space AABB enclosing all shapes.

  #### Returns [AABB](AABB.md)

  #### Throws

  If this is the world body.

  + Defined in [packages/nape-js/src/phys/Body.ts:693](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L693)

### castBody

* get castBody(): any

  Cast to Body — returns the Body wrapper if this is a Body, else null.

  #### Returns any

  Inherited from Interactor.castBody

  + Defined in [packages/nape-js/src/phys/Interactor.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L108)

### castCompound

* get castCompound(): any

  Cast to Compound — returns the Compound wrapper if this is a Compound, else null.

  #### Returns any

  Inherited from Interactor.castCompound

  + Defined in [packages/nape-js/src/phys/Interactor.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L126)

### castShape

* get castShape(): any

  Cast to Shape — returns the Shape wrapper if this is a Shape, else null.

  #### Returns any

  Inherited from Interactor.castShape

  + Defined in [packages/nape-js/src/phys/Interactor.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L117)

### cbTypes

* get cbTypes(): any

  Callback types assigned to this interactor.

  #### Returns any

  Inherited from Interactor.cbTypes

  + Defined in [packages/nape-js/src/phys/Interactor.ts:100](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L100)

### compound

* get compound(): [Compound](Compound.md) | null

  The Compound this body belongs to, or null.

  #### Returns [Compound](Compound.md) | null

  + Defined in [packages/nape-js/src/phys/Body.ts:668](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L668)
* set compound(value: [Compound](Compound.md) | null): void

  #### Parameters

  + value: [Compound](Compound.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:672](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L672)

### constraintInertia

* get constraintInertia(): number

  Effective inertia used by the constraint solver (accounts for allowRotation).

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:492](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L492)

### constraintMass

* get constraintMass(): number

  Effective mass used by the constraint solver (accounts for allowMovement).

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:484](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L484)

### constraints

* get constraints(): [ConstraintList](../types/ConstraintList.md)

  Read-only list of the constraints currently attached to this body.
  Populated while the body and constraint share a Space.

  #### Returns [ConstraintList](../types/ConstraintList.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:622](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L622)

### constraintVelocity

* get constraintVelocity(): [Vec2](Vec2.md)

  Constraint-solved velocity (read-only view used by the solver).

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:701](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L701)

### disableCCD

* get disableCCD(): boolean

  If true, CCD is disabled even if `isBullet` is set.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:565](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L565)
* set disableCCD(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:568](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L568)

### force

* get force(): [Vec2](Vec2.md)

  Accumulated force applied to this body for the current step (cleared after each step).

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:371](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L371)
* set force(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:377](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L377)

### gravMass

* get gravMass(): number

  Gravitational mass. Defaults to the same as `mass`.

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:500](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L500)
* set gravMass(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:514](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L514)

### gravMassMode

* get gravMassMode(): [GravMassMode](GravMassMode.md)

  Controls gravitational mass: DEFAULT, FIXED, or SCALED.

  #### Returns [GravMassMode](GravMassMode.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:791](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L791)
* set gravMassMode(value: [GravMassMode](GravMassMode.md)): void

  #### Parameters

  + value: [GravMassMode](GravMassMode.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:798](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L798)

### gravMassScale

* get gravMassScale(): number

  Scale factor applied to gravMass relative to the dynamic mass.

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:528](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L528)
* set gravMassScale(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:539](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L539)

### group

* get group(): [InteractionGroup](InteractionGroup.md) | null

  The interaction group this interactor belongs to.

  #### Returns [InteractionGroup](InteractionGroup.md) | null

  Inherited from Interactor.group

  + Defined in [packages/nape-js/src/phys/Interactor.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L90)
* set group(value: [InteractionGroup](InteractionGroup.md) | null): void

  #### Parameters

  + value: [InteractionGroup](InteractionGroup.md) | null

  #### Returns void

  Inherited from Interactor.group

  + Defined in [packages/nape-js/src/phys/Interactor.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L94)

### id

* get id(): number

  Unique numeric identifier for this interactor.

  #### Returns number

  Inherited from Interactor.id

  + Defined in [packages/nape-js/src/phys/Interactor.ts:77](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L77)

### inertia

* get inertia(): number

  Moment of inertia. Must be finite and > 0. Setting switches inertiaMode to FIXED.

  #### Returns number

  #### Throws

  If the body is the world body, or if no shapes are present in DEFAULT inertia mode.

  + Defined in [packages/nape-js/src/phys/Body.ts:452](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L452)
* set inertia(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:464](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L464)

### inertiaMode

* get inertiaMode(): [InertiaMode](InertiaMode.md)

  Controls how inertia is computed: DEFAULT or FIXED.

  #### Returns [InertiaMode](InertiaMode.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:770](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L770)
* set inertiaMode(value: [InertiaMode](InertiaMode.md)): void

  #### Parameters

  + value: [InertiaMode](InertiaMode.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:776](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L776)

### isBullet

* get isBullet(): boolean

  If true, continuous collision detection (CCD) is enabled for this body.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:557](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L557)
* set isBullet(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:560](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L560)

### isSleeping

* get isSleeping(): boolean

  True if the body is currently sleeping.

  #### Returns boolean

  #### Throws

  If the body is not in a Space.

  + Defined in [packages/nape-js/src/phys/Body.ts:600](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L600)

### kinAngVel

* get kinAngVel(): number

  Desired angular velocity for kinematic bodies.

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:331](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L331)
* set kinAngVel(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:334](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L334)

### kinematicVel

* get kinematicVel(): [Vec2](Vec2.md)

  Desired velocity for kinematic bodies; the engine tries to match this each step.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:313](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L313)
* set kinematicVel(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:319](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L319)

### localCOM

* get localCOM(): [Vec2](Vec2.md)

  Local-space centre of mass (read-only, lazy-computed from shapes).

  #### Returns [Vec2](Vec2.md)

  #### Throws

  If this is the world body.

  + Defined in [packages/nape-js/src/phys/Body.ts:712](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L712)

### mass

* get mass(): number

  Mass in kg. Must be finite and > 0. Setting switches massMode to FIXED.

  #### Returns number

  #### Throws

  If the body is the world body, or if no shapes are present in DEFAULT mass mode.

  + Defined in [packages/nape-js/src/phys/Body.ts:417](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L417)
* set mass(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:429](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L429)

### massMode

* get massMode(): [MassMode](MassMode.md)

  Controls how mass is computed: DEFAULT (from shapes) or FIXED (manually set).

  #### Returns [MassMode](MassMode.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:749](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L749)
* set massMode(value: [MassMode](MassMode.md)): void

  #### Parameters

  + value: [MassMode](MassMode.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:755](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L755)

### position

* get position(): [Vec2](Vec2.md)

  World-space position of the body's origin. Live Vec2 — mutating it moves the body.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:226](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L226)
* set position(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:232](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L232)

### rotation

* get rotation(): number

  Rotation of the body in radians.

  #### Returns number

  #### Throws

  If set on a static body that is already in a space.

  + Defined in [packages/nape-js/src/phys/Body.ts:247](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L247)
* set rotation(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:250](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L250)

### shapes

* get shapes(): [ShapeList](../types/ShapeList.md)

  List of shapes attached to this body.

  #### Returns [ShapeList](../types/ShapeList.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:614](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L614)

### space

* get space(): [Space](Space.md)

  The Space this body belongs to. Setting adds/removes it from the space.

  #### Returns [Space](Space.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:635](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L635)
* set space(value: [Space](Space.md) | null): void

  #### Parameters

  + value: [Space](Space.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:639](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L639)

### surfaceVel

* get surfaceVel(): [Vec2](Vec2.md)

  Surface velocity used in friction calculations.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:349](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L349)
* set surfaceVel(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:355](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L355)

### torque

* get torque(): number

  Accumulated torque applied to this body for the current step (only for DYNAMIC bodies).

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Body.ts:389](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L389)
* set torque(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:392](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L392)

### type

* get type(): [BodyType](BodyType.md)

  The body type: DYNAMIC, STATIC, or KINEMATIC. Cannot be changed mid-step.

  #### Returns [BodyType](BodyType.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:179](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L179)
* set type(value: [BodyType](BodyType.md)): void

  #### Parameters

  + value: [BodyType](BodyType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:182](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L182)

### userData

* get userData(): Record<string, unknown>

  User-defined data storage object.

  #### Returns Record<string, unknown>

  Inherited from Interactor.userData

  + Defined in [packages/nape-js/src/phys/Interactor.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L82)

### velocity

* get velocity(): [Vec2](Vec2.md)

  Linear velocity in world space (units/s). Live Vec2. Static bodies cannot have velocity.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/phys/Body.ts:274](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L274)
* set velocity(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Body.ts:280](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L280)

### worldCOM

* get worldCOM(): [Vec2](Vec2.md)

  World-space centre of mass (read-only, lazy-computed).

  #### Returns [Vec2](Vec2.md)

  #### Throws

  If this is the world body.

  + Defined in [packages/nape-js/src/phys/Body.ts:730](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L730)

## Methods

### align

* align(): Body

  Translate all shapes and adjust the body position so the local centre of mass coincides with the body origin.

  #### Returns Body

  `this` for chaining.

  #### Throws

  If the body has no shapes.

  + Defined in [packages/nape-js/src/phys/Body.ts:1196](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1196)

### applyAngularImpulse

* applyAngularImpulse(impulse: number, sleepable?: boolean): Body

  Apply a direct angular impulse (change in angular velocity × inertia).

  #### Parameters

  + impulse: number

    The angular impulse magnitude.
  + sleepable: boolean = false

    If true, the body will not be woken if sleeping.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1043](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1043)

### applyImpulse

* applyImpulse(impulse: [Vec2](Vec2.md), pos?: [Vec2](Vec2.md), sleepable?: boolean): Body

  Apply a linear (and optionally angular) impulse to the body.
  If `pos` is given, it creates a torque about the body's centre.
  If `sleepable` is true, sleeping bodies are not woken.

  #### Parameters

  + impulse: [Vec2](Vec2.md)

    The linear impulse vector (world space).
  + `Optional`pos: [Vec2](Vec2.md)

    Optional world-space point of application.
  + sleepable: boolean = false

    If true, the body will not be woken if sleeping.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1000](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1000)

### buoyancyImpulse

* buoyancyImpulse(body?: Body | null): [Vec3](Vec3.md)

  Sum of buoyancy impulses received from fluid arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1518](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1518)

### connectedBodies

* connectedBodies(depth?: number, output?: [BodyList](../types/BodyList.md) | null): [BodyList](../types/BodyList.md)

  Return the set of bodies connected to this body via constraints.

  #### Parameters

  + depth: number = -1

    Maximum traversal depth (-1 means unlimited).
  + output: [BodyList](../types/BodyList.md) | null = null

    Optional existing list to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of connected bodies.

  + Defined in [packages/nape-js/src/phys/Body.ts:1398](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1398)

### constraintsImpulse

* constraintsImpulse(): [Vec3](Vec3.md)

  Sum of impulses applied to this body by all attached constraints this step.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1556](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1556)

### contains

* contains(point: [Vec2](Vec2.md)): boolean

  Test whether a world-space point lies inside any shape attached to this body.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The point to test in world space.

  #### Returns boolean

  True if the point is inside at least one shape.

  + Defined in [packages/nape-js/src/phys/Body.ts:1367](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1367)

### copy

* copy(): Body

  Create a deep copy of this body (shapes, mass properties, etc.).

  #### Returns Body

  A new Body with identical configuration.

  #### Throws

  If this is the world body.

  + Defined in [packages/nape-js/src/phys/Body.ts:826](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L826)

### crushFactor

* crushFactor(): number

  Compute a heuristic crush factor indicating how strongly this body is being compressed from multiple directions.
  A value near zero means balanced forces; larger values indicate compression.

  #### Returns number

  The crush factor (dimensionless).

  #### Throws

  If the body is not in a Space.

  + Defined in [packages/nape-js/src/phys/Body.ts:1641](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1641)

### dragImpulse

* dragImpulse(body?: Body | null): [Vec3](Vec3.md)

  Sum of fluid drag impulses received from fluid arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1531](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1531)

### integrate

* integrate(deltaTime: number): Body

  Manually integrate the body's position and rotation by `deltaTime` seconds (outside of `Space.step`).

  #### Parameters

  + deltaTime: number

    Time in seconds to integrate over.

  #### Returns Body

  `this` for chaining.

  #### Throws

  If `deltaTime` is NaN.

  + Defined in [packages/nape-js/src/phys/Body.ts:859](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L859)

### interactingBodies

* interactingBodies(  
      type?: [InteractionType](InteractionType.md) | null,  
      depth?: number,  
      output?: [BodyList](../types/BodyList.md) | null,  
  ): [BodyList](../types/BodyList.md)

  Return the bodies interacting with this body through arbiters, following
  chains of interactions (A touches B touches C) up to `depth` hops.

  #### Parameters

  + type: [InteractionType](InteractionType.md) | null = null

    Filter by interaction type (COLLISION, FLUID, SENSOR), or null for all.
  + depth: number = -1

    Maximum number of arbiter hops to follow (`-1` = unlimited, `1` = direct partners only).
  + output: [BodyList](../types/BodyList.md) | null = null

    Optional existing list to accumulate results into.

  #### Returns [BodyList](../types/BodyList.md)

  A BodyList of interacting bodies.

  + Defined in [packages/nape-js/src/phys/Body.ts:1410](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1410)

### isBody

* isBody(): boolean

  Returns true if this interactor is a Body.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isBody](Interactor.md#isbody)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L144)

### isCompound

* isCompound(): boolean

  Returns true if this interactor is a Compound.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isCompound](Interactor.md#iscompound)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:149](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L149)

### isDynamic

* isDynamic(): boolean

  Return true if this body is dynamic.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:213](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L213)

### isKinematic

* isKinematic(): boolean

  Return true if this body is kinematic.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:217](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L217)

### isShape

* isShape(): boolean

  Returns true if this interactor is a Shape.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isShape](Interactor.md#isshape)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L139)

### isStatic

* isStatic(): boolean

  Return true if this body is static.

  #### Returns boolean

  + Defined in [packages/nape-js/src/phys/Body.ts:209](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L209)

### localPointToWorld

* localPointToWorld(point: [Vec2](Vec2.md), weak?: boolean): [Vec2](Vec2.md)

  Transform a point from local body space to world space.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The point in local space.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  The transformed point in world space.

  + Defined in [packages/nape-js/src/phys/Body.ts:913](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L913)

### localVectorToWorld

* localVectorToWorld(vector: [Vec2](Vec2.md), weak?: boolean): [Vec2](Vec2.md)

  Rotate a vector from local body space to world space (no translation).

  #### Parameters

  + vector: [Vec2](Vec2.md)

    The vector in local space.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  The rotated vector in world space.

  + Defined in [packages/nape-js/src/phys/Body.ts:953](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L953)

### normalImpulse

* normalImpulse(body?: Body | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Sum of normal (penetration-resolving) impulses received from collision arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.
  + freshOnly: boolean = false

    If true, only newly created arbiters are considered.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1447](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1447)

### rollingImpulse

* rollingImpulse(body?: Body | null, freshOnly?: boolean): number

  Sum of rolling (angular friction) impulses from collision arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.
  + freshOnly: boolean = false

    If true, only newly created arbiters are considered.

  #### Returns number

  The total rolling impulse scalar.

  + Defined in [packages/nape-js/src/phys/Body.ts:1489](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1489)

### rotate

* rotate(centre: [Vec2](Vec2.md), angle: number): Body

  Rotate the body about a world-space pivot point by `angle` radians.
  Moves the body's position and increments its rotation.

  #### Parameters

  + centre: [Vec2](Vec2.md)

    World-space pivot point.
  + angle: number

    Rotation in radians.

  #### Returns Body

  `this` for chaining.

  #### Throws

  If `centre` is null or `angle` is NaN.

  + Defined in [packages/nape-js/src/phys/Body.ts:1229](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1229)

### rotateShapes

* rotateShapes(angle: number): Body

  Rotate all shapes attached to this body in local space by `angle` radians.

  #### Parameters

  + angle: number

    Rotation in radians.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1141](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1141)

### scaleShapes

* scaleShapes(scaleX: number, scaleY: number): Body

  Scale all shapes attached to this body in local space.

  #### Parameters

  + scaleX: number

    Horizontal scale factor.
  + scaleY: number

    Vertical scale factor.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1160](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1160)

### setShapeFilters

* setShapeFilters(filter: [InteractionFilter](InteractionFilter.md)): Body

  Set the same `InteractionFilter` on every shape attached to this body.

  #### Parameters

  + filter: [InteractionFilter](InteractionFilter.md)

    The interaction filter to apply.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1309](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1309)

### setShapeFluidProperties

* setShapeFluidProperties(fluidProperties: [FluidProperties](FluidProperties.md)): Body

  Set the same `FluidProperties` on every shape attached to this body.

  #### Parameters

  + fluidProperties: [FluidProperties](FluidProperties.md)

    The fluid properties to apply.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1333](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1333)

### setShapeMaterials

* setShapeMaterials(material: [Material](Material.md)): Body

  Set the same `Material` on every shape attached to this body.

  #### Parameters

  + material: [Material](Material.md)

    The material to apply.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1285](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1285)

### setVelocityFromTarget

* setVelocityFromTarget(  
      targetPosition: [Vec2](Vec2.md),  
      targetRotation: number,  
      deltaTime: number,  
  ): Body

  Set linear and angular velocity so the body reaches the given target pose in `deltaTime` seconds.
  Useful for kinematic or manually driven bodies.

  #### Parameters

  + targetPosition: [Vec2](Vec2.md)

    Desired world-space position.
  + targetRotation: number

    Desired rotation in radians.
  + deltaTime: number

    Time in seconds over which to reach the target.

  #### Returns Body

  `this` for chaining.

  #### Throws

  If `targetPosition` is null or `deltaTime` is zero.

  + Defined in [packages/nape-js/src/phys/Body.ts:1069](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1069)

### tangentImpulse

* tangentImpulse(body?: Body | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Sum of tangent (friction) impulses received from collision arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.
  + freshOnly: boolean = false

    If true, only newly created arbiters are considered.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1461](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1461)

### toString

* toString(): string

  String identifier like `(dynamic)#42`.

  #### Returns string

  A human-readable description of this body.

  Overrides [Interactor](Interactor.md).[toString](Interactor.md#tostring)

  + Defined in [packages/nape-js/src/phys/Body.ts:841](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L841)

### totalContactsImpulse

* totalContactsImpulse(body?: Body | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Sum of total contact impulses (normal + tangent) from collision arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.
  + freshOnly: boolean = false

    If true, only newly created arbiters are considered.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1475](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1475)

### totalFluidImpulse

* totalFluidImpulse(body?: Body | null): [Vec3](Vec3.md)

  Sum of total fluid impulses (buoyancy + drag) from fluid arbiters this step.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1544](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1544)

### totalImpulse

* totalImpulse(body?: Body | null, freshOnly?: boolean): [Vec3](Vec3.md)

  Sum of all impulses (contacts + constraints) applied to this body this step, excluding sensor arbiters.

  #### Parameters

  + body: Body | null = null

    If provided, only arbiters shared with `body` are summed.
  + freshOnly: boolean = false

    If true, only newly created contact arbiters are considered.

  #### Returns [Vec3](Vec3.md)

  A Vec3 where x/y are the linear component and z is the angular component.

  + Defined in [packages/nape-js/src/phys/Body.ts:1583](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1583)

### transformShapes

* transformShapes(matrix: [Mat23](Mat23.md)): Body

  Apply an affine transform matrix to all shapes in local space.

  #### Parameters

  + matrix: [Mat23](Mat23.md)

    The 2D affine transformation matrix.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1178](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1178)

### translateShapes

* translateShapes(translation: [Vec2](Vec2.md)): Body

  Translate all shapes attached to this body in local space by `translation`.

  #### Parameters

  + translation: [Vec2](Vec2.md)

    Offset vector in local space.

  #### Returns Body

  `this` for chaining.

  + Defined in [packages/nape-js/src/phys/Body.ts:1115](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L1115)

### worldPointToLocal

* worldPointToLocal(point: [Vec2](Vec2.md), weak?: boolean): [Vec2](Vec2.md)

  Transform a point from world space to local body space.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The point in world space.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  The transformed point in local space.

  + Defined in [packages/nape-js/src/phys/Body.ts:933](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L933)

### worldVectorToLocal

* worldVectorToLocal(vector: [Vec2](Vec2.md), weak?: boolean): [Vec2](Vec2.md)

  Rotate a vector from world space to local body space (no translation).

  #### Parameters

  + vector: [Vec2](Vec2.md)

    The vector in world space.
  + weak: boolean = false

    If true, the returned Vec2 is a weak (pooled) reference.

  #### Returns [Vec2](Vec2.md)

  The rotated vector in local space.

  + Defined in [packages/nape-js/src/phys/Body.ts:973](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Body.ts#L973)
