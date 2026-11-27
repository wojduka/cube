Source: https://napejs.org/api/classes/Polygon.html

* Polygon

# Class Polygon

A convex polygon physics shape.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Polygon))

* [Shape](Shape.md)
  + Polygon

* Defined in [packages/nape-js/src/shape/Polygon.ts:15](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L15)

##### Index

### Constructors

[constructor](#constructor)

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
[edges](#edges)
[filter](#filter)
[fluidEnabled](#fluidenabled)
[fluidProperties](#fluidproperties)
[group](#group)
[id](#id)
[inertia](#inertia)
[localCOM](#localcom)
[localVerts](#localverts)
[material](#material)
[sensorEnabled](#sensorenabled)
[type](#type)
[userData](#userdata)
[worldCOM](#worldcom)
[worldVerts](#worldverts)

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
[validity](#validity)
[box](#box)
[rect](#rect)
[regular](#regular)

## Constructors

### constructor

* new Polygon(  
      localVerts?: any,  
      localCOMOrMaterial?: [Vec2](Vec2.md) | [Material](Material.md),  
      material?: [Material](Material.md) | [InteractionFilter](InteractionFilter.md),  
      filter?: [InteractionFilter](InteractionFilter.md),  
  ): Polygon

  Create a Polygon from a list of Vec2 vertices. Vertices must form a convex polygon
  in counter-clockwise order.

  The second parameter can be either a `Vec2` local-COM offset or a `Material`.
  This allows both the legacy 2-arg form `(verts, material)` and the new 3-arg
  form `(verts, localCOM, material, filter)` — consistent with Circle and Capsule.

  #### Parameters

  + `Optional`localVerts: any

    Vertices as `Array<Vec2>`, `Vec2List`, or `GeomPoly`.
  + `Optional`localCOMOrMaterial: [Vec2](Vec2.md) | [Material](Material.md)

    Local centre offset (`Vec2`) **or** `Material` for backward compat.
  + `Optional`material: [Material](Material.md) | [InteractionFilter](InteractionFilter.md)

    Material to assign (uses default if omitted).
  + `Optional`filter: [InteractionFilter](InteractionFilter.md)

    InteractionFilter to assign (uses default if omitted).

  #### Returns Polygon

  Overrides Shape.constructor

  + Defined in [packages/nape-js/src/shape/Polygon.ts:32](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L32)

## Accessors

### angDrag

* get angDrag(): number

  Angular drag coefficient for this shape.

  #### Returns number

  Inherited from Shape.angDrag

  + Defined in [packages/nape-js/src/shape/Shape.ts:241](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L241)

### area

* get area(): number

  Cross-sectional area of this shape.

  #### Returns number

  Inherited from Shape.area

  + Defined in [packages/nape-js/src/shape/Shape.ts:227](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L227)

### body

* get body(): [Body](Body.md)

  The Body this shape belongs to. Setting moves the shape between bodies.

  #### Returns [Body](Body.md)

  Inherited from Shape.body

  + Defined in [packages/nape-js/src/shape/Shape.ts:115](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L115)
* set body(value: [Body](Body.md) | null): void

  #### Parameters

  + value: [Body](Body.md) | null

  #### Returns void

  Inherited from Shape.body

  + Defined in [packages/nape-js/src/shape/Shape.ts:123](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L123)

### bounds

* get bounds(): [AABB](AABB.md)

  World-space AABB of this shape (updated each step).

  #### Returns [AABB](AABB.md)

  Inherited from Shape.bounds

  + Defined in [packages/nape-js/src/shape/Shape.ts:365](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L365)

### castBody

* get castBody(): any

  Cast to Body — returns the Body wrapper if this is a Body, else null.

  #### Returns any

  Inherited from Shape.castBody

  + Defined in [packages/nape-js/src/phys/Interactor.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L108)

### castCapsule

* get castCapsule(): [Shape](Shape.md) | null

  Cast to Capsule, or null if this is not a capsule.

  #### Returns [Shape](Shape.md) | null

  Inherited from Shape.castCapsule

  + Defined in [packages/nape-js/src/shape/Shape.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L163)

### castCircle

* get castCircle(): [Shape](Shape.md) | null

  Cast to Circle, or null if this is not a circle.

  #### Returns [Shape](Shape.md) | null

  Inherited from Shape.castCircle

  + Defined in [packages/nape-js/src/shape/Shape.ts:143](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L143)

### castCompound

* get castCompound(): any

  Cast to Compound — returns the Compound wrapper if this is a Compound, else null.

  #### Returns any

  Inherited from Shape.castCompound

  + Defined in [packages/nape-js/src/phys/Interactor.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L126)

### castPolygon

* get castPolygon(): [Shape](Shape.md) | null

  Cast to Polygon, or null if this is not a polygon.

  #### Returns [Shape](Shape.md) | null

  Inherited from Shape.castPolygon

  + Defined in [packages/nape-js/src/shape/Shape.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L153)

### castShape

* get castShape(): any

  Cast to Shape — returns the Shape wrapper if this is a Shape, else null.

  #### Returns any

  Inherited from Shape.castShape

  + Defined in [packages/nape-js/src/phys/Interactor.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L117)

### cbTypes

* get cbTypes(): [CbTypeSet](../interfaces/CbTypeSet.md)

  Set of callback types registered on this shape for event dispatch.

  #### Returns [CbTypeSet](../interfaces/CbTypeSet.md)

  Inherited from Shape.cbTypes

  + Defined in [packages/nape-js/src/shape/Shape.ts:300](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L300)

### edges

* get edges(): any

  The list of edges derived from this polygon's vertices.

  #### Returns any

  + Defined in [packages/nape-js/src/shape/Polygon.ts:338](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L338)

### filter

* get filter(): [InteractionFilter](InteractionFilter.md)

  The InteractionFilter controlling which shapes interact with this one.

  #### Returns [InteractionFilter](InteractionFilter.md)

  Inherited from Shape.filter

  + Defined in [packages/nape-js/src/shape/Shape.ts:262](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L262)
* set filter(value: [InteractionFilter](InteractionFilter.md)): void

  #### Parameters

  + value: [InteractionFilter](InteractionFilter.md)

  #### Returns void

  Inherited from Shape.filter

  + Defined in [packages/nape-js/src/shape/Shape.ts:266](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L266)

### fluidEnabled

* get fluidEnabled(): boolean

  If true, this shape participates in fluid interaction.

  #### Returns boolean

  Inherited from Shape.fluidEnabled

  + Defined in [packages/nape-js/src/shape/Shape.ts:325](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L325)
* set fluidEnabled(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Shape.fluidEnabled

  + Defined in [packages/nape-js/src/shape/Shape.ts:329](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L329)

### fluidProperties

* get fluidProperties(): [FluidProperties](FluidProperties.md)

  Fluid simulation properties for this shape. Auto-created on first access.

  #### Returns [FluidProperties](FluidProperties.md)

  Inherited from Shape.fluidProperties

  + Defined in [packages/nape-js/src/shape/Shape.ts:276](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L276)
* set fluidProperties(value: [FluidProperties](FluidProperties.md)): void

  #### Parameters

  + value: [FluidProperties](FluidProperties.md)

  #### Returns void

  Inherited from Shape.fluidProperties

  + Defined in [packages/nape-js/src/shape/Shape.ts:285](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L285)

### group

* get group(): [InteractionGroup](InteractionGroup.md) | null

  The interaction group this interactor belongs to.

  #### Returns [InteractionGroup](InteractionGroup.md) | null

  Inherited from Shape.group

  + Defined in [packages/nape-js/src/phys/Interactor.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L90)
* set group(value: [InteractionGroup](InteractionGroup.md) | null): void

  #### Parameters

  + value: [InteractionGroup](InteractionGroup.md) | null

  #### Returns void

  Inherited from Shape.group

  + Defined in [packages/nape-js/src/phys/Interactor.ts:94](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L94)

### id

* get id(): number

  Unique numeric identifier for this interactor.

  #### Returns number

  Inherited from Shape.id

  + Defined in [packages/nape-js/src/phys/Interactor.ts:77](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L77)

### inertia

* get inertia(): number

  Contribution to moment of inertia (about local centroid, unit density).

  #### Returns number

  Inherited from Shape.inertia

  + Defined in [packages/nape-js/src/shape/Shape.ts:234](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L234)

### localCOM

* get localCOM(): [Vec2](Vec2.md)

  Local-space centre of mass. Can be set to override the default shape centroid.

  #### Returns [Vec2](Vec2.md)

  Inherited from Shape.localCOM

  + Defined in [packages/nape-js/src/shape/Shape.ts:184](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L184)
* set localCOM(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  Inherited from Shape.localCOM

  + Defined in [packages/nape-js/src/shape/Shape.ts:196](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L196)

### localVerts

* get localVerts(): any

  The list of local-space vertices defining this polygon's shape.

  #### Returns any

  + Defined in [packages/nape-js/src/shape/Polygon.ts:322](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L322)

### material

* get material(): [Material](Material.md)

  The Material assigned to this shape (controls friction, elasticity, density).

  #### Returns [Material](Material.md)

  Inherited from Shape.material

  + Defined in [packages/nape-js/src/shape/Shape.ts:248](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L248)
* set material(value: [Material](Material.md)): void

  #### Parameters

  + value: [Material](Material.md)

  #### Returns void

  Inherited from Shape.material

  + Defined in [packages/nape-js/src/shape/Shape.ts:252](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L252)

### sensorEnabled

* get sensorEnabled(): boolean

  If true, this shape acts as a sensor (no physical response, only callbacks).

  Cannot be changed during `space.step()`, which includes `PreListener`
  handlers (they run mid-step). Record the desired state in the handler and
  apply it after `step()` returns. Body / interaction / constraint listener
  callbacks are delivered after the step and may change it directly.

  #### Returns boolean

  Inherited from Shape.sensorEnabled

  + Defined in [packages/nape-js/src/shape/Shape.ts:353](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L353)
* set sensorEnabled(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from Shape.sensorEnabled

  + Defined in [packages/nape-js/src/shape/Shape.ts:357](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L357)

### type

* get type(): [ShapeType](ShapeType.md)

  The shape type: CIRCLE or POLYGON.

  #### Returns [ShapeType](ShapeType.md)

  Inherited from Shape.type

  + Defined in [packages/nape-js/src/shape/Shape.ts:92](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L92)

### userData

* get userData(): Record<string, unknown>

  User-defined data storage object.

  #### Returns Record<string, unknown>

  Inherited from Shape.userData

  + Defined in [packages/nape-js/src/phys/Interactor.ts:82](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L82)

### worldCOM

* get worldCOM(): [Vec2](Vec2.md)

  World-space centre of mass of this shape (read-only, lazy-computed).

  #### Returns [Vec2](Vec2.md)

  Inherited from Shape.worldCOM

  + Defined in [packages/nape-js/src/shape/Shape.ts:173](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L173)

### worldVerts

* get worldVerts(): any

  World-space vertices of this polygon, updated each simulation step.

  #### Returns any

  + Defined in [packages/nape-js/src/shape/Polygon.ts:330](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L330)

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

  Inherited from [Shape](Shape.md).[contains](Shape.md#contains)

  + Defined in [packages/nape-js/src/shape/Shape.ts:513](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L513)

### copy

* copy(): [Shape](Shape.md)

  Create a deep copy of this shape with the same type, geometry, material, and filter.

  #### Returns [Shape](Shape.md)

  A new Shape instance independent of this one.

  Inherited from [Shape](Shape.md).[copy](Shape.md#copy)

  + Defined in [packages/nape-js/src/shape/Shape.ts:538](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L538)

### isBody

* isBody(): boolean

  Returns true if this interactor is a Body.

  #### Returns boolean

  Inherited from [Shape](Shape.md).[isBody](Shape.md#isbody)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L144)

### isCapsule

* isCapsule(): boolean

  Returns true if this is a Capsule shape (polygon-backed stadium).

  #### Returns boolean

  Inherited from [Shape](Shape.md).[isCapsule](Shape.md#iscapsule)

  + Defined in [packages/nape-js/src/shape/Shape.ts:108](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L108)

### isCircle

* isCircle(): boolean

  Returns true if this is a Circle shape.

  #### Returns boolean

  Inherited from [Shape](Shape.md).[isCircle](Shape.md#iscircle)

  + Defined in [packages/nape-js/src/shape/Shape.ts:98](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L98)

### isCompound

* isCompound(): boolean

  Returns true if this interactor is a Compound.

  #### Returns boolean

  Inherited from [Shape](Shape.md).[isCompound](Shape.md#iscompound)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:149](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L149)

### isPolygon

* isPolygon(): boolean

  Returns true if this is a Polygon shape.

  #### Returns boolean

  Inherited from [Shape](Shape.md).[isPolygon](Shape.md#ispolygon)

  + Defined in [packages/nape-js/src/shape/Shape.ts:103](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L103)

### isShape

* isShape(): boolean

  Returns true if this interactor is a Shape.

  #### Returns boolean

  Inherited from [Shape](Shape.md).[isShape](Shape.md#isshape)

  + Defined in [packages/nape-js/src/phys/Interactor.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Interactor.ts#L139)

### rotate

* rotate(angle: number): [Shape](Shape.md)

  Rotate the shape's local vertices by `angle` radians.

  #### Parameters

  + angle: number

    Rotation in radians.

  #### Returns [Shape](Shape.md)

  `this` for chaining.

  Inherited from [Shape](Shape.md).[rotate](Shape.md#rotate)

  + Defined in [packages/nape-js/src/shape/Shape.ts:447](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L447)

### scale

* scale(scaleX: number, scaleY: number): [Shape](Shape.md)

  Scale the shape's local geometry. Circles require uniform scaling.

  #### Parameters

  + scaleX: number

    Horizontal scale factor (must be non-zero).
  + scaleY: number

    Vertical scale factor (must be non-zero).

  #### Returns [Shape](Shape.md)

  `this` for chaining.

  Inherited from [Shape](Shape.md).[scale](Shape.md#scale)

  + Defined in [packages/nape-js/src/shape/Shape.ts:413](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L413)

### toString

* toString(): string

  #### Returns string

  Inherited from [Shape](Shape.md).[toString](Shape.md#tostring)

  + Defined in [packages/nape-js/src/shape/Shape.ts:544](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L544)

### transform

* transform(matrix: [Mat23](Mat23.md)): [Shape](Shape.md)

  Apply a Mat23 affine transform to the shape's local geometry.

  #### Parameters

  + matrix: [Mat23](Mat23.md)

    The transformation matrix (must be non-singular; Circles require equiorthogonal).

  #### Returns [Shape](Shape.md)

  `this` for chaining.

  Inherited from [Shape](Shape.md).[transform](Shape.md#transform)

  + Defined in [packages/nape-js/src/shape/Shape.ts:478](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L478)

### translate

* translate(translation: [Vec2](Vec2.md)): [Shape](Shape.md)

  Translate the shape's local vertices by the given vector (in-place).

  #### Parameters

  + translation: [Vec2](Vec2.md)

    The displacement vector to apply.

  #### Returns [Shape](Shape.md)

  `this` for chaining.

  Inherited from [Shape](Shape.md).[translate](Shape.md#translate)

  + Defined in [packages/nape-js/src/shape/Shape.ts:378](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Shape.ts#L378)

### validity

* validity(): any

  Validate the polygon geometry and return a string describing any issues, or
  `"valid"` if the polygon is well-formed.

  #### Returns any

  A validation result string from the underlying ZPP\_Polygon.

  + Defined in [packages/nape-js/src/shape/Polygon.ts:350](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L350)

### `Static`box

* box(width: number, height?: number, weak?: boolean): [Vec2](Vec2.md)[]

  Create an axis-aligned rectangular polygon centred at the origin.

  #### Parameters

  + width: number

    Rectangle width.
  + height: number = width

    Rectangle height (defaults to `width` for a square).
  + weak: boolean = false

    If true, returned Vec2s are marked weak and will be auto-disposed.

  #### Returns [Vec2](Vec2.md)[]

  Array of four Vec2 corner vertices.

  + Defined in [packages/nape-js/src/shape/Polygon.ts:278](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L278)

### `Static`rect

* rect(  
      x: number,  
      y: number,  
      width: number,  
      height: number,  
      weak?: boolean,  
  ): [Vec2](Vec2.md)[]

  Create an axis-aligned rectangle at the given position.

  #### Parameters

  + x: number

    Left edge x coordinate.
  + y: number

    Top edge y coordinate.
  + width: number

    Rectangle width.
  + height: number

    Rectangle height.
  + weak: boolean = false

    If true, returned Vec2s are marked weak and will be auto-disposed.

  #### Returns [Vec2](Vec2.md)[]

  Array of four Vec2 corner vertices.

  + Defined in [packages/nape-js/src/shape/Polygon.ts:256](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L256)

### `Static`regular

* regular(  
      xRadius: number,  
      yRadius: number,  
      edgeCount: number,  
      angleOffset?: number,  
      weak?: boolean,  
  ): [Vec2](Vec2.md)[]

  Create a regular polygon (or ellipse approximation) centred at the origin.

  #### Parameters

  + xRadius: number

    Horizontal radius of the circumscribed ellipse.
  + yRadius: number

    Vertical radius of the circumscribed ellipse.
  + edgeCount: number

    Number of sides (must be >= 3).
  + angleOffset: number = 0.0

    Rotation offset in radians applied to all vertices (default 0).
  + weak: boolean = false

    If true, returned Vec2s are marked weak and will be auto-disposed.

  #### Returns [Vec2](Vec2.md)[]

  Array of `edgeCount` Vec2 vertices.

  + Defined in [packages/nape-js/src/shape/Polygon.ts:294](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/shape/Polygon.ts#L294)
