Source: https://napejs.org/api/classes/ConstraintCallback.html

* ConstraintCallback

# Class ConstraintCallback

Callback object passed to [ConstraintListener](ConstraintListener.md) handlers.

Provides the constraint that triggered the event. Do not store this object
beyond the handler scope — it is pooled and reused.

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#ConstraintCallback))

* [Callback](Callback.md)
  + ConstraintCallback

* Defined in [packages/nape-js/src/callbacks/ConstraintCallback.ts:10](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/ConstraintCallback.ts#L10)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[constraint](#constraint)
[event](#event)
[listener](#listener)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new ConstraintCallback(): ConstraintCallback

  #### Returns ConstraintCallback

  Inherited from [Callback](Callback.md).[constructor](Callback.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/Callback.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/Callback.ts#L23)

## Accessors

### constraint

* get constraint(): [Constraint](Constraint.md)

  The constraint that woke, fell asleep, or broke.

  #### Returns [Constraint](Constraint.md)

  + Defined in [packages/nape-js/src/callbacks/ConstraintCallback.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/ConstraintCallback.ts#L12)

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

  + Defined in [packages/nape-js/src/callbacks/ConstraintCallback.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/ConstraintCallback.ts#L16)
