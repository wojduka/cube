Source: https://napejs.org/api/classes/Shape.html

* Shape

# Class Shape

Base class for physics shapes (Circle, Polygon). Never instantiated directly — use
`new Circle(...)` or `Polygon.box(...)` etc.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Shape))

* [Interactor](Interactor.md)
  + Shape
    - [Circle](Circle.md)
    - [Polygon](Polygon.md)
    - [Capsule](Capsule.md)

* Defined in [packages/nape-js/src/shape/Shape.ts:47](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L47)

##### Index

### Accessors

[angDrag](#angdrag)
[area](#area)
[body](#body)
[bounds](#bounds)
[castBody](#castbody)
[castCapsule](#castcapsule)
[castCircle](#castcircle)
[castCompound](#castcompound)
[castPolygon](#castpolygon)
[castShape](#castshape)
[cbTypes](#cbtypes)
[filter](#filter)
[fluidEnabled](#fluidenabled)
[fluidProperties](#fluidproperties)
[group](#group)
[id](#id)
[inertia](#inertia)
[localCOM](#localcom)
[material](#material)
[sensorEnabled](#sensorenabled)
[type](#type)
[userData](#userdata)
[worldCOM](#worldcom)

### Methods

[contains](#contains)
[copy](#copy)
[isBody](#isbody)
[isCapsule](#iscapsule)
[isCircle](#iscircle)
[isCompound](#iscompound)
[isPolygon](#ispolygon)
[isShape](#isshape)
[rotate](#rotate)
[scale](#scale)
[toString](#tostring)
[transform](#transform)
[translate](#translate)

## Accessors

### angDrag

* get angDrag(): number

  Angular drag coefficient for this shape.

  #### Returns number

  + Defined in [packages/nape-js/src/shape/Shape.ts:241](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L241)

### area

* get area(): number

  Cross-sectional area of this shape.

  #### Returns number

  + Defined in [packages/nape-js/src/shape/Shape.ts:227](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L227)

### body

* get body(): [Body](Body.md)

  The Body this shape belongs to. Setting moves the shape between bodies.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:115](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L115)
* set body(value: [Body](Body.md) | null): void

  #### Parameters

  + value: [Body](Body.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:123](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L123)

### bounds

* get bounds(): [AABB](AABB.md)

  World-space AABB of this shape (updated each step).

  #### Returns [AABB](AABB.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:365](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L365)

### castBody

* get castBody(): any

  Cast to Body — returns the Body wrapper if this is a Body, else null.

  #### Returns any

  Inherited from Interactor.castBody

  + Defined in [packages/nape-js/src/phys/Interactor.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L108)

### castCapsule

* get castCapsule(): Shape | null

  Cast to Capsule, or null if this is not a capsule.

  #### Returns Shape | null

  + Defined in [packages/nape-js/src/shape/Shape.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L163)

### castCircle

* get castCircle(): Shape | null

  Cast to Circle, or null if this is not a circle.

  #### Returns Shape | null

  + Defined in [packages/nape-js/src/shape/Shape.ts:143](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L143)

### castCompound

* get castCompound(): any

  Cast to Compound — returns the Compound wrapper if this is a Compound, else null.

  #### Returns any

  Inherited from Interactor.castCompound

  + Defined in [packages/nape-js/src/phys/Interactor.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L126)

### castPolygon

* get castPolygon(): Shape | null

  Cast to Polygon, or null if this is not a polygon.

  #### Returns Shape | null

  + Defined in [packages/nape-js/src/shape/Shape.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L153)

### castShape

* get castShape(): any

  Cast to Shape — returns the Shape wrapper if this is a Shape, else null.

  #### Returns any

  Inherited from Interactor.castShape

  + Defined in [packages/nape-js/src/phys/Interactor.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L117)

### cbTypes

* get cbTypes(): [CbTypeSet](../interfaces/CbTypeSet.md)

  Set of callback types registered on this shape for event dispatch.

  #### Returns [CbTypeSet](../interfaces/CbTypeSet.md)

  Overrides Interactor.cbTypes

  + Defined in [packages/nape-js/src/shape/Shape.ts:300](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L300)

### filter

* get filter(): [InteractionFilter](InteractionFilter.md)

  The InteractionFilter controlling which shapes interact with this one.

  #### Returns [InteractionFilter](InteractionFilter.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:262](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L262)
* set filter(value: [InteractionFilter](InteractionFilter.md)): void

  #### Parameters

  + value: [InteractionFilter](InteractionFilter.md)

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:266](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L266)

### fluidEnabled

* get fluidEnabled(): boolean

  If true, this shape participates in fluid interaction.

  #### Returns boolean

  + Defined in [packages/nape-js/src/shape/Shape.ts:325](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L325)
* set fluidEnabled(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:329](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L329)

### fluidProperties

* get fluidProperties(): [FluidProperties](FluidProperties.md)

  Fluid simulation properties for this shape. Auto-created on first access.

  #### Returns [FluidProperties](FluidProperties.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:276](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L276)
* set fluidProperties(value: [FluidProperties](FluidProperties.md)): void

  #### Parameters

  + value: [FluidProperties](FluidProperties.md)

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:285](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L285)

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

  Contribution to moment of inertia (about local centroid, unit density).

  #### Returns number

  + Defined in [packages/nape-js/src/shape/Shape.ts:234](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L234)

### localCOM

* get localCOM(): [Vec2](Vec2.md)

  Local-space centre of mass. Can be set to override the default shape centroid.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:184](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L184)
* set localCOM(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:196](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L196)

### material

* get material(): [Material](Material.md)

  The Material assigned to this shape (controls friction, elasticity, density).

  #### Returns [Material](Material.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:248](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L248)
* set material(value: [Material](Material.md)): void

  #### Parameters

  + value: [Material](Material.md)

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:252](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L252)

### sensorEnabled

* get sensorEnabled(): boolean

  If true, this shape acts as a sensor (no physical response, only callbacks).

  Cannot be changed during `space.step()`, which includes `PreListener`
  handlers (they run mid-step). Record the desired state in the handler and
  apply it after `step()` returns. Body / interaction / constraint listener
  callbacks are delivered after the step and may change it directly.

  #### Returns boolean

  + Defined in [packages/nape-js/src/shape/Shape.ts:353](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L353)
* set sensorEnabled(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/shape/Shape.ts:357](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L357)

### type

* get type(): [ShapeType](ShapeType.md)

  The shape type: CIRCLE or POLYGON.

  #### Returns [ShapeType](ShapeType.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:92](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L92)

### userData

* get userData(): Record<string, unknown>

  User-defined data storage object.

  #### Returns Record<string, unknown>

  Inherited from Interactor.userData

  + Defined in [packages/nape-js/src/phys/Interactor.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L82)

### worldCOM

* get worldCOM(): [Vec2](Vec2.md)

  World-space centre of mass of this shape (read-only, lazy-computed).

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/shape/Shape.ts:173](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L173)

## Methods

### contains

* contains(point: [Vec2](Vec2.md)): boolean

  Return true if the given world-space point lies inside this shape.
  Requires the shape to be attached to a Body.

  #### Parameters

  + point: [Vec2](Vec2.md)

    The world-space point to test.

  #### Returns boolean

  True if the point is inside this shape.

  + Defined in [packages/nape-js/src/shape/Shape.ts:513](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L513)

### copy

* copy(): Shape

  Create a deep copy of this shape with the same type, geometry, material, and filter.

  #### Returns Shape

  A new Shape instance independent of this one.

  + Defined in [packages/nape-js/src/shape/Shape.ts:538](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L538)

### isBody

* isBody(): boolean

  Returns true if this interactor is a Body.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isBody](Interactor.md#isbody)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L144)

### isCapsule

* isCapsule(): boolean

  Returns true if this is a Capsule shape (polygon-backed stadium).

  #### Returns boolean

  + Defined in [packages/nape-js/src/shape/Shape.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L108)

### isCircle

* isCircle(): boolean

  Returns true if this is a Circle shape.

  #### Returns boolean

  + Defined in [packages/nape-js/src/shape/Shape.ts:98](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L98)

### isCompound

* isCompound(): boolean

  Returns true if this interactor is a Compound.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isCompound](Interactor.md#iscompound)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:149](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L149)

### isPolygon

* isPolygon(): boolean

  Returns true if this is a Polygon shape.

  #### Returns boolean

  + Defined in [packages/nape-js/src/shape/Shape.ts:103](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L103)

### isShape

* isShape(): boolean

  Returns true if this interactor is a Shape.

  #### Returns boolean

  Inherited from [Interactor](Interactor.md).[isShape](Interactor.md#isshape)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L139)

### rotate

* rotate(angle: number): Shape

  Rotate the shape's local vertices by `angle` radians.

  #### Parameters

  + angle: number

    Rotation in radians.

  #### Returns Shape

  `this` for chaining.

  + Defined in [packages/nape-js/src/shape/Shape.ts:447](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L447)

### scale

* scale(scaleX: number, scaleY: number): Shape

  Scale the shape's local geometry. Circles require uniform scaling.

  #### Parameters

  + scaleX: number

    Horizontal scale factor (must be non-zero).
  + scaleY: number

    Vertical scale factor (must be non-zero).

  #### Returns Shape

  `this` for chaining.

  + Defined in [packages/nape-js/src/shape/Shape.ts:413](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L413)

### toString

* toString(): string

  #### Returns string

  Overrides [Interactor](Interactor.md).[toString](Interactor.md#tostring)

  + Defined in [packages/nape-js/src/shape/Shape.ts:544](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L544)

### transform

* transform(matrix: [Mat23](Mat23.md)): Shape

  Apply a Mat23 affine transform to the shape's local geometry.

  #### Parameters

  + matrix: [Mat23](Mat23.md)

    The transformation matrix (must be non-singular; Circles require equiorthogonal).

  #### Returns Shape

  `this` for chaining.

  + Defined in [packages/nape-js/src/shape/Shape.ts:478](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L478)

### translate

* translate(translation: [Vec2](Vec2.md)): Shape

  Translate the shape's local vertices by the given vector (in-place).

  #### Parameters

  + translation: [Vec2](Vec2.md)

    The displacement vector to apply.

  #### Returns Shape

  `this` for chaining.

  + Defined in [packages/nape-js/src/shape/Shape.ts:378](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L378)
