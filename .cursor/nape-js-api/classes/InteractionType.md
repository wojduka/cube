Source: https://napejs.org/api/classes/InteractionType.html

* InteractionType

# Class InteractionType

Enumeration of interaction categories used to filter [InteractionListener](InteractionListener.md)
and [PreListener](PreListener.md) callbacks.

* `COLLISION` — physical collisions between solid shapes
* `SENSOR` — sensor (trigger) interactions where shapes overlap but don't resolve
* `FLUID` — fluid buoyancy/drag interactions
* `ANY` — all of the above

* Defined in [packages/nape-js/src/callbacks/InteractionType.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L12)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[ANY](#any)
[COLLISION](#collision)
[FLUID](#fluid)
[SENSOR](#sensor)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new InteractionType(): InteractionType

  #### Returns InteractionType

  + Defined in [packages/nape-js/src/callbacks/InteractionType.ts:13](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L13)

## Accessors

### `Static`ANY

* get ANY(): InteractionType

  Matches all interaction types (COLLISION, SENSOR, and FLUID).

  #### Returns InteractionType

  + Defined in [packages/nape-js/src/callbacks/InteractionType.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L49)

### `Static`COLLISION

* get COLLISION(): InteractionType

  Physical collision between solid shapes (default for most shapes).

  #### Returns InteractionType

  + Defined in [packages/nape-js/src/callbacks/InteractionType.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L22)

### `Static`FLUID

* get FLUID(): InteractionType

  Fluid buoyancy/drag interaction between a fluid shape and a body.

  #### Returns InteractionType

  + Defined in [packages/nape-js/src/callbacks/InteractionType.ts:40](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L40)

### `Static`SENSOR

* get SENSOR(): InteractionType

  Sensor/trigger overlap — shapes overlap but collision is not resolved.

  #### Returns InteractionType

  + Defined in [packages/nape-js/src/callbacks/InteractionType.ts:31](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L31)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/InteractionType.ts:58](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionType.ts#L58)
