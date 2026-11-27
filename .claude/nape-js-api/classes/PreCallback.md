Source: https://napejs.org/api/classes/PreCallback.html

* PreCallback

# Class PreCallback

Callback object passed to [PreListener](PreListener.md) handlers.

Provides both interactors, the arbiter, and a `swapped` flag indicating
whether the pair order was swapped relative to the listener's `options1`/`options2`.

The handler should return a [PreFlag](PreFlag.md) to control the interaction.
Do not store this object beyond the handler scope — it is pooled and reused.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#PreCallback))

* [Callback](Callback.md)
  + PreCallback

* Defined in [packages/nape-js/src/callbacks/PreCallback.ts:14](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreCallback.ts#L14)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[arbiter](#arbiter)
[event](#event)
[int1](#int1)
[int2](#int2)
[listener](#listener)
[swapped](#swapped)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new PreCallback(): PreCallback

  #### Returns PreCallback

  Inherited from [Callback](Callback.md).[constructor](Callback.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L23)

## Accessors

### arbiter

* get arbiter(): [Arbiter](Arbiter.md)

  The arbiter representing the potential interaction. Use to inspect collision normal, etc.

  #### Returns [Arbiter](Arbiter.md)

  + Defined in [packages/nape-js/src/callbacks/PreCallback.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreCallback.ts#L16)

### event

* get event(): [CbEvent](CbEvent.md)

  The event type that caused this callback to fire (e.g., `CbEvent.BEGIN`).

  #### Returns [CbEvent](CbEvent.md)

  Inherited from Callback.event

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L30)

### int1

* get int1(): [Interactor](Interactor.md)

  The first interactor in the pair (matches `options1` unless `swapped` is `true`).

  #### Returns [Interactor](Interactor.md)

  + Defined in [packages/nape-js/src/callbacks/PreCallback.ts:21](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreCallback.ts#L21)

### int2

* get int2(): [Interactor](Interactor.md)

  The second interactor in the pair (matches `options2` unless `swapped` is `true`).

  #### Returns [Interactor](Interactor.md)

  + Defined in [packages/nape-js/src/callbacks/PreCallback.ts:26](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreCallback.ts#L26)

### listener

* get listener(): [Listener](Listener.md)

  The listener that this callback was fired from.

  #### Returns [Listener](Listener.md)

  Inherited from Callback.listener

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:35](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L35)

### swapped

* get swapped(): boolean

  `true` when the pair order is swapped relative to the listener's `options1`/`options2`.
  Check this if you need to know which interactor matched which filter.

  #### Returns boolean

  + Defined in [packages/nape-js/src/callbacks/PreCallback.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreCallback.ts#L34)

## Methods

### toString

* toString(): string

  #### Returns string

  Overrides [Callback](Callback.md).[toString](Callback.md#tostring)

  + Defined in [packages/nape-js/src/callbacks/PreCallback.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreCallback.ts#L38)
