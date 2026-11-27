Source: https://napejs.org/api/classes/InteractionListener.html

* InteractionListener

# Class InteractionListener

Listener for interaction events between two interactors.

Fires when two objects matching `options1` and `options2` start, continue, or
stop interacting with each other according to `interactionType`.

Valid events: [CbEvent.BEGIN](CbEvent.md#begin), [CbEvent.ONGOING](CbEvent.md#ongoing), [CbEvent.END](CbEvent.md#end).

* `BEGIN` fires once when the interaction starts.
* `ONGOING` fires every simulation step while the interaction persists.
* `END` fires once when the interaction ends.

#### Example

```
const listener = new InteractionListener(  
  CbEvent.BEGIN,  
  InteractionType.COLLISION,  
  playerType,  
  groundType,  
  (cb) => { console.log('player landed'); },  
);  
space.listeners.add(listener);
Copy
```

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#InteractionListener))

* [Listener](Listener.md)
  + InteractionListener

* Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:60](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L60)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[allowSleepingCallbacks](#allowsleepingcallbacks)
[event](#event)
[handler](#handler)
[interactionType](#interactiontype)
[options1](#options1)
[options2](#options2)
[precedence](#precedence)
[space](#space)
[type](#type)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new InteractionListener(  
      event: [CbEvent](CbEvent.md),  
      interactionType: [InteractionType](InteractionType.md),  
      options1: [CbType](CbType.md) | [OptionType](OptionType.md) | null,  
      options2: [CbType](CbType.md) | [OptionType](OptionType.md) | null,  
      handler: (cb: [InteractionCallback](InteractionCallback.md)) => void,  
      precedence?: number,  
  ): InteractionListener

  #### Parameters

  + event: [CbEvent](CbEvent.md)

    Must be `CbEvent.BEGIN`, `CbEvent.ONGOING`, or `CbEvent.END`.
  + interactionType: [InteractionType](InteractionType.md)

    The kind of interaction to listen for (COLLISION, SENSOR, FLUID, or ANY).
  + options1: [CbType](CbType.md) | [OptionType](OptionType.md) | null

    Filter for the first interactor, or `null` to match any.
  + options2: [CbType](CbType.md) | [OptionType](OptionType.md) | null

    Filter for the second interactor, or `null` to match any.
  + handler: (cb: [InteractionCallback](InteractionCallback.md)) => void

    Called with an [InteractionCallback](InteractionCallback.md) each time the event fires.
  + precedence: number = 0

    Execution order relative to other listeners (higher = first). Default `0`.

  #### Returns InteractionListener

  Overrides [Listener](Listener.md).[constructor](Listener.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:72](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L72)

## Accessors

### allowSleepingCallbacks

* get allowSleepingCallbacks(): boolean

  When `true`, `ONGOING` callbacks are also fired while both interactors are sleeping.
  Default is `false` (callbacks are suppressed when both are asleep).

  #### Returns boolean

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:177](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L177)
* set allowSleepingCallbacks(value: boolean): void

  #### Parameters

  + value: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:181](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L181)

### event

* get event(): [CbEvent](CbEvent.md)

  The event this listener responds to.

  Valid values depend on the concrete listener type — see [CbEvent](CbEvent.md).
  Changing this while the listener is assigned to a space re-registers it.

  #### Returns [CbEvent](CbEvent.md)

  Inherited from Listener.event

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:105](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L105)
* set event(event: [CbEvent](CbEvent.md)): void

  #### Parameters

  + event: [CbEvent](CbEvent.md)

  #### Returns void

  Inherited from Listener.event

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L109)

### handler

* get handler(): (cb: [InteractionCallback](InteractionCallback.md)) => void

  The callback function invoked when the event fires. Cannot be set to null.

  #### Returns (cb: [InteractionCallback](InteractionCallback.md)) => void

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:147](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L147)
* set handler(handler: (cb: [InteractionCallback](InteractionCallback.md)) => void): void

  #### Parameters

  + handler: (cb: [InteractionCallback](InteractionCallback.md)) => void

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:151](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L151)

### interactionType

* get interactionType(): [InteractionType](InteractionType.md) | null

  The type of interaction this listener responds to (COLLISION, SENSOR, FLUID, or ANY).

  #### Returns [InteractionType](InteractionType.md) | null

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:159](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L159)
* set interactionType(interactionType: [InteractionType](InteractionType.md) | null): void

  #### Parameters

  + interactionType: [InteractionType](InteractionType.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L163)

### options1

* get options1(): [OptionType](OptionType.md)

  Filter for the first interactor. Order between `options1`/`options2` does not matter.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:129](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L129)
* set options1(options1: [CbType](CbType.md) | [OptionType](OptionType.md)): void

  #### Parameters

  + options1: [CbType](CbType.md) | [OptionType](OptionType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:133](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L133)

### options2

* get options2(): [OptionType](OptionType.md)

  Filter for the second interactor. Order between `options1`/`options2` does not matter.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:138](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L138)
* set options2(options2: [CbType](CbType.md) | [OptionType](OptionType.md)): void

  #### Parameters

  + options2: [CbType](CbType.md) | [OptionType](OptionType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/InteractionListener.ts:142](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionListener.ts#L142)

### precedence

* get precedence(): number

  Execution priority of this listener relative to other listeners for the
  same event and objects. The direction depends on the listener type
  (inherited from Haxe nape):

  + `BodyListener` / `ConstraintListener`: **higher** values run first;
    on a tie the listener added last runs first.
  + `InteractionListener` / `PreListener`: **lower** values run first; on a
    tie the listener added first runs first. When several PreListeners
    return a flag for the same pair the last one called wins — so the
    **highest** precedence has the final say.

  #### Returns number

  #### Default Value

  `0`

  Inherited from Listener.precedence

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:133](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L133)
* set precedence(precedence: number): void

  #### Parameters

  + precedence: number

  #### Returns void

  Inherited from Listener.precedence

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L137)

### space

* get space(): [Space](Space.md) | null

  The space this listener is currently registered in, or `null` if not registered.

  Assign to register/unregister the listener in a space:

  ```
  listener.space = mySpace;  // register  
  listener.space = null;     // unregister
  Copy
  ```

  #### Returns [Space](Space.md) | null

  Inherited from Listener.space

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L153)
* set space(space: [Space](Space.md) | null): void

  #### Parameters

  + space: [Space](Space.md) | null

  #### Returns void

  Inherited from Listener.space

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:161](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L161)

### type

* get type(): [ListenerType](ListenerType.md)

  The type of this listener (BODY, CONSTRAINT, INTERACTION, or PRE).

  #### Returns [ListenerType](ListenerType.md)

  Inherited from Listener.type

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:95](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L95)

## Methods

### toString

* toString(): string

  #### Returns string

  Inherited from [Listener](Listener.md).[toString](Listener.md#tostring)

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:181](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L181)
