Source: https://napejs.org/api/classes/InteractionFilter.html

* InteractionFilter

# Class InteractionFilter

Bit-mask based interaction filter for controlling which shapes
collide, sense, or interact as fluids.

Internally wraps a ZPP\_InteractionFilter and is registered as
the public `nape.dynamics.InteractionFilter` class in the nape namespace.

* Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[collisionGroup](#collisiongroup)
[collisionMask](#collisionmask)
[fluidGroup](#fluidgroup)
[fluidMask](#fluidmask)
[sensorGroup](#sensorgroup)
[sensorMask](#sensormask)
[shapes](#shapes)
[userData](#userdata)

### Methods

[copy](#copy)
[shouldCollide](#shouldcollide)
[shouldFlow](#shouldflow)
[shouldSense](#shouldsense)
[toString](#tostring)

## Constructors

### constructor

* new InteractionFilter(  
      collisionGroup?: number,  
      collisionMask?: number,  
      sensorGroup?: number,  
      sensorMask?: number,  
      fluidGroup?: number,  
      fluidMask?: number,  
  ): InteractionFilter

  #### Parameters

  + collisionGroup: number = 1

    Collision group bits (default 1).
  + collisionMask: number = -1

    Collision mask bits (default -1, all bits set).
  + sensorGroup: number = 1

    Sensor group bits (default 1).
  + sensorMask: number = -1

    Sensor mask bits (default -1, all bits set).
  + fluidGroup: number = 1

    Fluid group bits (default 1).
  + fluidMask: number = -1

    Fluid mask bits (default -1, all bits set).

  #### Returns InteractionFilter

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:24](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L24)

## Accessors

### collisionGroup

* get collisionGroup(): number

  Bit-mask identifying which collision group(s) this shape belongs to.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:95](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L95)
* set collisionGroup(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:98](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L98)

### collisionMask

* get collisionMask(): number

  Bit-mask of collision groups this shape will collide with.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:106](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L106)
* set collisionMask(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L109)

### fluidGroup

* get fluidGroup(): number

  Bit-mask identifying which fluid group(s) this shape belongs to.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:139](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L139)
* set fluidGroup(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:142](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L142)

### fluidMask

* get fluidMask(): number

  Bit-mask of fluid groups this shape will interact with as a fluid.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:150](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L150)
* set fluidMask(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L153)

### sensorGroup

* get sensorGroup(): number

  Bit-mask identifying which sensor group(s) this shape belongs to.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:117](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L117)
* set sensorGroup(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:120](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L120)

### sensorMask

* get sensorMask(): number

  Bit-mask of sensor groups this shape will sense.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:128](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L128)
* set sensorMask(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:131](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L131)

### shapes

* get shapes(): any

  Read-only list of shapes currently using this filter.

  #### Returns any

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:169](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L169)

### userData

* get userData(): Record<string, unknown>

  Arbitrary user data attached to this filter.

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:161](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L161)

## Methods

### copy

* copy(): InteractionFilter

  Create a copy of this filter with the same group/mask values.

  #### Returns InteractionFilter

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:217](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L217)

### shouldCollide

* shouldCollide(filter: InteractionFilter): boolean

  Test whether two filters allow collision interaction.

  #### Parameters

  + filter: InteractionFilter

    The other filter to test against.

  #### Returns boolean

  `true` if the two filters' group/mask bits permit collision.

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:185](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L185)

### shouldFlow

* shouldFlow(filter: InteractionFilter): boolean

  Test whether two filters allow fluid interaction.

  #### Parameters

  + filter: InteractionFilter

    The other filter to test against.

  #### Returns boolean

  `true` if the two filters' group/mask bits permit fluid interaction.

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:209](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L209)

### shouldSense

* shouldSense(filter: InteractionFilter): boolean

  Test whether two filters allow sensor interaction.

  #### Parameters

  + filter: InteractionFilter

    The other filter to test against.

  #### Returns boolean

  `true` if the two filters' group/mask bits permit sensing.

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:197](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L197)

### toString

* toString(): string

  Return a hex-formatted string representation of all group/mask pairs.

  #### Returns string

  + Defined in [packages/nape-js/src/dynamics/InteractionFilter.ts:229](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/InteractionFilter.ts#L229)
