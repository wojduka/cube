Source: https://napejs.org/api/classes/TriggerZone.html

* TriggerZone

# Class TriggerZone

High-level trigger zone — Unity-style `onEnter`/`onStay`/`onExit` wrapper
over the nape callback system.

Automatically creates sensor-based [InteractionListener](InteractionListener.md)s and manages
their lifecycle. Assign handlers directly or via the constructor options.

#### Example

```
const zone = new TriggerZone(space, sensorBody, {  
  onEnter: (other) => console.log("entered!", other),  
  onStay:  (other) => console.log("inside",  other),  
  onExit:  (other) => console.log("left!",   other),  
});  
  
// Later: clean up all listeners  
zone.dispose();
Copy
```

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:66](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L66)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[cbType](#cbtype)

### Accessors

[body](#body)
[enabled](#enabled)
[onEnter](#onenter)
[onExit](#onexit)
[onStay](#onstay)
[space](#space)

### Methods

[dispose](#dispose)

## Constructors

### constructor

* new TriggerZone(  
      space: [Space](Space.md),  
      body: [Body](Body.md),  
      options?: [TriggerZoneOptions](../interfaces/TriggerZoneOptions.md),  
  ): TriggerZone

  #### Parameters

  + space: [Space](Space.md)

    The physics space to register listeners on.
  + body: [Body](Body.md)

    The body acting as the trigger zone. Its shapes should have
    `sensorEnabled = true` (the constructor enables it automatically
    for all shapes that don't already have it set).
  + `Optional`options: [TriggerZoneOptions](../interfaces/TriggerZoneOptions.md)

    Optional configuration and initial handlers.

  #### Returns TriggerZone

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:92](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L92)

## Properties

### `Readonly`cbType

cbType: [CbType](CbType.md)

The CbType automatically created for this zone.

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:68](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L68)

## Accessors

### body

* get body(): [Body](Body.md)

  The body acting as the trigger zone.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:157](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L157)

### enabled

* get enabled(): boolean

  Whether the zone is active. When disabled, no callbacks fire.

  #### Returns boolean

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:147](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L147)
* set enabled(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:150](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L150)

### onEnter

* get onEnter(): [TriggerHandler](../types/TriggerHandler.md) | null

  Called once when an interactor enters the zone.

  #### Returns [TriggerHandler](../types/TriggerHandler.md) | null

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:120](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L120)
* set onEnter(handler: [TriggerHandler](../types/TriggerHandler.md) | null): void

  #### Parameters

  + handler: [TriggerHandler](../types/TriggerHandler.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:123](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L123)

### onExit

* get onExit(): [TriggerHandler](../types/TriggerHandler.md) | null

  Called once when an interactor exits the zone.

  #### Returns [TriggerHandler](../types/TriggerHandler.md) | null

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:138](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L138)
* set onExit(handler: [TriggerHandler](../types/TriggerHandler.md) | null): void

  #### Parameters

  + handler: [TriggerHandler](../types/TriggerHandler.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:141](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L141)

### onStay

* get onStay(): [TriggerHandler](../types/TriggerHandler.md) | null

  Called every simulation step while an interactor remains in the zone.

  #### Returns [TriggerHandler](../types/TriggerHandler.md) | null

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:129](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L129)
* set onStay(handler: [TriggerHandler](../types/TriggerHandler.md) | null): void

  #### Parameters

  + handler: [TriggerHandler](../types/TriggerHandler.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:132](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L132)

### space

* get space(): [Space](Space.md)

  The space the zone is registered on.

  #### Returns [Space](Space.md)

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:162](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L162)

## Methods

### dispose

* dispose(): void

  Remove all listeners from the space and untag the body.
  After disposal, the TriggerZone should not be reused.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/TriggerZone.ts:170](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L170)
