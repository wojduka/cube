Source: https://napejs.org/api/classes/BodyCallback.html

* BodyCallback

# Class BodyCallback

Callback object passed to [BodyListener](BodyListener.md) handlers.

Provides the body that triggered the event. Do not store this object beyond
the handler scope — it is pooled and reused.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#BodyCallback))

* [Callback](Callback.md)
  + BodyCallback

* Defined in [packages/nape-js/src/callbacks/BodyCallback.ts:10](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyCallback.ts#L10)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[body](#body)
[event](#event)
[listener](#listener)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new BodyCallback(): BodyCallback

  #### Returns BodyCallback

  Inherited from [Callback](Callback.md).[constructor](Callback.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L23)

## Accessors

### body

* get body(): [Body](Body.md)

  The body that woke or fell asleep.

  #### Returns [Body](Body.md)

  + Defined in [packages/nape-js/src/callbacks/BodyCallback.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyCallback.ts#L12)

### event

* get event(): [CbEvent](CbEvent.md)

  The event type that caused this callback to fire (e.g., `CbEvent.BEGIN`).

  #### Returns [CbEvent](CbEvent.md)

  Inherited from Callback.event

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L30)

### listener

* get listener(): [Listener](Listener.md)

  The listener that this callback was fired from.

  #### Returns [Listener](Listener.md)

  Inherited from Callback.listener

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:35](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L35)

## Methods

### toString

* toString(): string

  #### Returns string

  Overrides [Callback](Callback.md).[toString](Callback.md#tostring)

  + Defined in [packages/nape-js/src/callbacks/BodyCallback.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/BodyCallback.ts#L16)
