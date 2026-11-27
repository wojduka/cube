Source: https://napejs.org/api/classes/BodyListener.html

* BodyListener

# Class BodyListener

Listener for body lifecycle events.

Fires when a body matching the `options` filter wakes or sleeps.

Valid events: [CbEvent.WAKE](CbEvent.md#wake), [CbEvent.SLEEP](CbEvent.md#sleep).

#### Example

```
const listener = new BodyListener(  
  CbEvent.WAKE,  
  CbType.ANY_BODY,  
  (cb) => { console.log(cb.body, 'woke up'); },  
);  
space.listeners.add(listener);
Copy
```

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#BodyListener))

* [Listener](Listener.md)
  + BodyListener

* Defined in [packages/nape-js/src/callbacks/BodyListener.ts:31](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyListener.ts#L31)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[event](#event)
[handler](#handler)
[options](#options)
[precedence](#precedence)
[space](#space)
[type](#type)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new BodyListener(  
      event: [CbEvent](CbEvent.md),  
      options: [CbType](CbType.md) | [OptionType](OptionType.md) | null,  
      handler: (cb: [BodyCallback](BodyCallback.md)) => void,  
      precedence?: number,  
  ): BodyListener

  #### Parameters

  + event: [CbEvent](CbEvent.md)

    Must be `CbEvent.WAKE` or `CbEvent.SLEEP`.
  + options: [CbType](CbType.md) | [OptionType](OptionType.md) | null

    `CbType` or `OptionType` filter, or `null` to match all bodies.
  + handler: (cb: [BodyCallback](BodyCallback.md)) => void

    Called with a [BodyCallback](BodyCallback.md) each time the event fires.
  + precedence: number = 0

    Execution order relative to other listeners (higher = first). Default `0`.

  #### Returns BodyListener

  Overrides [Listener](Listener.md).[constructor](Listener.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/BodyListener.ts:41](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyListener.ts#L41)

## Accessors

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

* get handler(): (cb: [BodyCallback](BodyCallback.md)) => void

  The callback function invoked when the event fires. Cannot be set to null.

  #### Returns (cb: [BodyCallback](BodyCallback.md)) => void

  + Defined in [packages/nape-js/src/callbacks/BodyListener.ts:86](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyListener.ts#L86)
* set handler(handler: (cb: [BodyCallback](BodyCallback.md)) => void): void

  #### Parameters

  + handler: (cb: [BodyCallback](BodyCallback.md)) => void

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/BodyListener.ts:90](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyListener.ts#L90)

### options

* get options(): [OptionType](OptionType.md)

  The filter used to match bodies. Returns an [OptionType](OptionType.md) representing
  the current include/exclude configuration.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/BodyListener.ts:77](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyListener.ts#L77)
* set options(options: [CbType](CbType.md) | [OptionType](OptionType.md)): void

  #### Parameters

  + options: [CbType](CbType.md) | [OptionType](OptionType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/BodyListener.ts:81](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyListener.ts#L81)

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
