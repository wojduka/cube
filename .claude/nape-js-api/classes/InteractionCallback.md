Source: https://napejs.org/api/classes/InteractionCallback.html

* InteractionCallback

# Class InteractionCallback

Callback object passed to [InteractionListener](InteractionListener.md) handlers.

Provides both interactors and the list of active arbiters between them.
Do not store this object beyond the handler scope — it is pooled and reused.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#InteractionCallback))

* [Callback](Callback.md)
  + InteractionCallback

* Defined in [packages/nape-js/src/callbacks/InteractionCallback.ts:10](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionCallback.ts#L10)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[arbiters](#arbiters)
[event](#event)
[int1](#int1)
[int2](#int2)
[listener](#listener)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new InteractionCallback(): InteractionCallback

  #### Returns InteractionCallback

  Inherited from [Callback](Callback.md).[constructor](Callback.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L23)

## Accessors

### arbiters

* get arbiters(): object

  The list of arbiters currently active between `int1` and `int2`.

  For `ONGOING` callbacks, arbiters are valid for the entire step.
  For `BEGIN`/`END` callbacks, the list reflects the state at the moment
  the event fired.

  #### Returns object

  + Defined in [packages/nape-js/src/callbacks/InteractionCallback.ts:29](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionCallback.ts#L29)

### event

* get event(): [CbEvent](CbEvent.md)

  The event type that caused this callback to fire (e.g., `CbEvent.BEGIN`).

  #### Returns [CbEvent](CbEvent.md)

  Inherited from Callback.event

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L30)

### int1

* get int1(): [Interactor](Interactor.md)

  The first interactor involved in the interaction.

  #### Returns [Interactor](Interactor.md)

  + Defined in [packages/nape-js/src/callbacks/InteractionCallback.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionCallback.ts#L12)

### int2

* get int2(): [Interactor](Interactor.md)

  The second interactor involved in the interaction.

  #### Returns [Interactor](Interactor.md)

  + Defined in [packages/nape-js/src/callbacks/InteractionCallback.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionCallback.ts#L17)

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

  + Defined in [packages/nape-js/src/callbacks/InteractionCallback.ts:33](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/InteractionCallback.ts#L33)
