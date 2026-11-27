Source: https://napejs.org/api/classes/FluidProperties.html

* FluidProperties

# Class FluidProperties

Fluid properties for shapes that act as fluid regions.

Controls density, viscosity, and per-fluid gravity override.
Internally wraps a ZPP\_FluidProperties and is registered as
the public `nape.phys.FluidProperties` class in the nape namespace.

* Defined in [packages/nape-js/src/phys/FluidProperties.ts:13](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L13)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[density](#density)
[gravity](#gravity)
[shapes](#shapes)
[userData](#userdata)
[viscosity](#viscosity)

### Methods

[copy](#copy)
[toString](#tostring)

## Constructors

### constructor

* new FluidProperties(density?: number, viscosity?: number): FluidProperties

  #### Parameters

  + density: number = 1
  + viscosity: number = 1

  #### Returns FluidProperties

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L17)

## Accessors

### density

* get density(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:74](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L74)
* set density(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:77](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L77)

### gravity

* get gravity(): any

  #### Returns any

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:103](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L103)
* set gravity(gravity: any): void

  #### Parameters

  + gravity: any

  #### Returns void

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:106](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L106)

### shapes

* get shapes(): any

  #### Returns any

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:133](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L133)

### userData

* get userData(): Record<string, unknown>

  #### Returns Record<string, unknown>

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:126](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L126)

### viscosity

* get viscosity(): number

  #### Returns number

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:87](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L87)
* set viscosity(value: number): void

  #### Parameters

  + value: number

  #### Returns void

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L90)

## Methods

### copy

* copy(): FluidProperties

  #### Returns FluidProperties

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:144](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L144)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/phys/FluidProperties.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/phys/FluidProperties.ts#L153)
