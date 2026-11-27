Source: https://napejs.org/api/classes/Callback.html

* Callback

# Class Callback

Base class for all physics engine callback objects.

Callback instances are created internally by the engine and passed to listener
handler functions. They must not be stored beyond the scope of the handler —
they are pooled and reused after the handler returns.

Concrete subclasses:

* [BodyCallback](BodyCallback.md) — passed to [BodyListener](BodyListener.md) handlers
* [ConstraintCallback](ConstraintCallback.md) — passed to [ConstraintListener](ConstraintListener.md) handlers
* [InteractionCallback](InteractionCallback.md) — passed to [InteractionListener](InteractionListener.md) handlers
* [PreCallback](PreCallback.md) — passed to [PreListener](PreListener.md) handlers

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#Callback))

* Callback
  + [BodyCallback](BodyCallback.md)
  + [ConstraintCallback](ConstraintCallback.md)
  + [InteractionCallback](InteractionCallback.md)
  + [PreCallback](PreCallback.md)

* Defined in [packages/nape-js/src/callbacks/Callback.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L19)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[event](#event)
[listener](#listener)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new Callback(): Callback

  #### Returns Callback

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L23)

## Accessors

### event

* get event(): [CbEvent](CbEvent.md)

  The event type that caused this callback to fire (e.g., `CbEvent.BEGIN`).

  #### Returns [CbEvent](CbEvent.md)

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L30)

### listener

* get listener(): [Listener](Listener.md)

  The listener that this callback was fired from.

  #### Returns [Listener](Listener.md)

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:35](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L35)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:39](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L39)
