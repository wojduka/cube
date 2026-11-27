Source: https://napejs.org/api/classes/Listener.html

* Listener

# Class Listener

Base class for all physics event listeners.

Cannot be instantiated directly — use one of the concrete subclasses:
[BodyListener](BodyListener.md), [ConstraintListener](ConstraintListener.md), [InteractionListener](InteractionListener.md),
or [PreListener](PreListener.md).

Provides common properties (`type`, `event`, `precedence`, `space`) shared
by all listener types.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Listener))

* Listener
  + [BodyListener](BodyListener.md)
  + [InteractionListener](InteractionListener.md)
  + [ConstraintListener](ConstraintListener.md)
  + [PreListener](PreListener.md)

* Defined in [packages/nape-js/src/callbacks/Listener.ts:67](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L67)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[event](#event)
[precedence](#precedence)
[space](#space)
[type](#type)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new Listener(): Listener

  #### Returns Listener

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:71](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L71)

## Accessors

### event

* get event(): [CbEvent](CbEvent.md)

  The event this listener responds to.

  Valid values depend on the concrete listener type — see [CbEvent](CbEvent.md).
  Changing this while the listener is assigned to a space re-registers it.

  #### Returns [CbEvent](CbEvent.md)

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:105](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L105)
* set event(event: [CbEvent](CbEvent.md)): void

  #### Parameters

  + event: [CbEvent](CbEvent.md)

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L109)

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

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:133](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L133)
* set precedence(precedence: number): void

  #### Parameters

  + precedence: number

  #### Returns void

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

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L153)
* set space(space: [Space](Space.md) | null): void

  #### Parameters

  + space: [Space](Space.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:161](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L161)

### type

* get type(): [ListenerType](ListenerType.md)

  The type of this listener (BODY, CONSTRAINT, INTERACTION, or PRE).

  #### Returns [ListenerType](ListenerType.md)

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:95](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L95)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/Listener.ts:181](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Listener.ts#L181)
