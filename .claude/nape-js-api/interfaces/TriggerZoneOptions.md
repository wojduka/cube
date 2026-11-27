Source: https://napejs.org/api/interfaces/TriggerZoneOptions.html

* TriggerZoneOptions

# Interface TriggerZoneOptions

Configuration options for [TriggerZone](../classes/TriggerZone.md).

interface TriggerZoneOptions {  
    [filter](#filter)?: [CbType](../classes/CbType.md) | [OptionType](../classes/OptionType.md) | null;  
    [interactionType](#interactiontype)?: [InteractionType](../classes/InteractionType.md);  
    [onEnter](#onenter)?: [TriggerHandler](../types/TriggerHandler.md) | null;  
    [onExit](#onexit)?: [TriggerHandler](../types/TriggerHandler.md) | null;  
    [onStay](#onstay)?: [TriggerHandler](../types/TriggerHandler.md) | null;  
}

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L19)

##### Index

### Properties

[filter?](#filter)
[interactionType?](#interactiontype)
[onEnter?](#onenter)
[onExit?](#onexit)
[onStay?](#onstay)

## Properties

### `Optional`filter

filter?: [CbType](../classes/CbType.md) | [OptionType](../classes/OptionType.md) | null

Filter for which interactors trigger the zone.
When `null`, any interactor triggers the zone.

#### Default

```
null
Copy
```

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:25](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L25)

### `Optional`interactionType

interactionType?: [InteractionType](../classes/InteractionType.md)

The interaction type to listen for.

#### Default

```
InteractionType.SENSOR
Copy
```

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:31](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L31)

### `Optional`onEnter

onEnter?: [TriggerHandler](../types/TriggerHandler.md) | null

Called once when an interactor enters the zone.

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L34)

### `Optional`onExit

onExit?: [TriggerHandler](../types/TriggerHandler.md) | null

Called once when an interactor exits the zone.

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:40](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L40)

### `Optional`onStay

onStay?: [TriggerHandler](../types/TriggerHandler.md) | null

Called every simulation step while an interactor remains in the zone.

* Defined in [packages/nape-js/src/helpers/TriggerZone.ts:37](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/TriggerZone.ts#L37)
