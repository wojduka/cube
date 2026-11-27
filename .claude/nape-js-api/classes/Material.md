Source: https://napejs.org/api/classes/Material.html

* Material

# Class Material

Physical material properties applied to shapes.

Controls elasticity (bounciness), friction coefficients, density, and
rolling friction. Internally wraps a ZPP\_Material and is registered as
the public `nape.phys.Material` class in the nape namespace.

* Defined in [packages/nape-js/src/phys/Material.ts:11](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L11)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[density](#density)
[dynamicFriction](#dynamicfriction)
[elasticity](#elasticity)
[rollingFriction](#rollingfriction)
[staticFriction](#staticfriction)
[userData](#userdata)

### Methods

[copy](#copy)
[toString](#tostring)
[glass](#glass)
[ice](#ice)
[rubber](#rubber)
[sand](#sand)
[steel](#steel)
[wood](#wood)

## Constructors

### constructor

* new Material(  
      elasticity?: number,  
      dynamicFriction?: number,  
      staticFriction?: number,  
      density?: number,  
      rollingFriction?: number,  
  ): Material

  #### Parameters

  + elasticity: number = 0.0
  + dynamicFriction: number = 1.0
  + staticFriction: number = 2.0
  + density: number = 1.0
  + rollingFriction: number = 0.001

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:15](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L15)

## Accessors

### density

* get density(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Material.ts:156](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L156)
* set density(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Material.ts:159](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L159)

### dynamicFriction

* get dynamicFriction(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Material.ts:124](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L124)
* set dynamicFriction(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Material.ts:127](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L127)

### elasticity

* get elasticity(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Material.ts:111](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L111)
* set elasticity(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Material.ts:114](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L114)

### rollingFriction

* get rollingFriction(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Material.ts:172](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L172)
* set rollingFriction(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Material.ts:175](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L175)

### staticFriction

* get staticFriction(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/Material.ts:140](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L140)
* set staticFriction(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/Material.ts:143](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L143)

### userData

* get userData(): Record<string, unknown>

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/phys/Material.ts:188](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L188)

## Methods

### copy

* copy(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:199](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L199)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/phys/Material.ts:213](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L213)

### `Static`glass

* glass(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:249](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L249)

### `Static`ice

* ice(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:241](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L241)

### `Static`rubber

* rubber(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:245](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L245)

### `Static`sand

* sand(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:253](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L253)

### `Static`steel

* steel(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:237](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L237)

### `Static`wood

* wood(): Material

  #### Returns Material

  + Defined in [packages/nape-js/src/phys/Material.ts:233](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/Material.ts#L233)
