Source: https://napejs.org/api/classes/PreListener.html

* PreListener

# Class PreListener

Pre-interaction listener — called before collision resolution each step.

The handler receives a [PreCallback](PreCallback.md) and returns a [PreFlag](PreFlag.md) that
determines whether and how the interaction should be processed:

* `PreFlag.ACCEPT` — resolve the interaction normally (default).
* `PreFlag.IGNORE` — suppress the interaction permanently (until next `BEGIN`).
* `PreFlag.ACCEPT_ONCE` — accept this step, then revert to default.
* `PreFlag.IGNORE_ONCE` — ignore this step only.

Returning `null` is equivalent to `ACCEPT`.

The event is always [CbEvent.PRE](CbEvent.md#pre) and cannot be changed.

**Caching** comes from the returned flag: `ACCEPT` / `IGNORE` are remembered
and the handler is not called again until the next `BEGIN`; the `_ONCE`
variants re-run it every step.

**Pure mode**: `pure = true` promises the handler's result depends only on the
pair, so the bodies may fall asleep while it returns a `_ONCE` flag. A
non-pure listener (the default) keeps both bodies awake so it keeps running.
Only use `pure` when the handler will always return the same flag for a given pair.

#### Example

```
const preListener = new PreListener(  
  InteractionType.COLLISION,  
  playerType,  
  onewayPlatformType,  
  (cb) => cb.arbiter.collisionArbiter!.normal.y > 0  
    ? PreFlag.ACCEPT  
    : PreFlag.IGNORE,  
);  
space.listeners.add(preListener);
Copy
```

#### Hierarchy ([View Summary](https://napejs.org/api/hierarchy.html#PreListener))

* [Listener](Listener.md)
  + PreListener

* Defined in [packages/nape-js/src/callbacks/PreListener.ts:54](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L54)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[event](#event)
[handler](#handler)
[interactionType](#interactiontype)
[options1](#options1)
[options2](#options2)
[precedence](#precedence)
[pure](#pure)
[space](#space)
[type](#type)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new PreListener(  
      interactionType: [InteractionType](InteractionType.md),  
      options1: [CbType](CbType.md) | [OptionType](OptionType.md) | null,  
      options2: [CbType](CbType.md) | [OptionType](OptionType.md) | null,  
      handler: (cb: [PreCallback](PreCallback.md)) => [PreFlag](PreFlag.md) | null,  
      precedence?: number,  
      pure?: boolean,  
  ): PreListener

  #### Parameters

  + interactionType: [InteractionType](InteractionType.md)

    The kind of interaction to intercept (COLLISION, SENSOR, FLUID, or ANY).
  + options1: [CbType](CbType.md) | [OptionType](OptionType.md) | null

    Filter for the first interactor, or `null` to match any.
  + options2: [CbType](CbType.md) | [OptionType](OptionType.md) | null

    Filter for the second interactor, or `null` to match any.
  + handler: (cb: [PreCallback](PreCallback.md)) => [PreFlag](PreFlag.md) | null

    Called each step; return a [PreFlag](PreFlag.md) to control the interaction.
  + precedence: number = 0

    Execution order relative to other listeners (higher = first). Default `0`.
  + pure: boolean = false

    Result depends only on the pair, so the bodies may sleep. Default `false`.

  #### Returns PreListener

  Overrides [Listener](Listener.md).[constructor](Listener.md#constructor)

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:66](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L66)

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

* get handler(): (cb: [PreCallback](PreCallback.md)) => [PreFlag](PreFlag.md) | null

  The handler called before each collision resolution step.
  Return a [PreFlag](PreFlag.md) to accept/ignore the interaction, or `null` to accept.

  #### Returns (cb: [PreCallback](PreCallback.md)) => [PreFlag](PreFlag.md) | null

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:127](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L127)
* set handler(handler: (cb: [PreCallback](PreCallback.md)) => [PreFlag](PreFlag.md) | null): void

  #### Parameters

  + handler: (cb: [PreCallback](PreCallback.md)) => [PreFlag](PreFlag.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:131](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L131)

### interactionType

* get interactionType(): [InteractionType](InteractionType.md) | null

  The type of interaction this pre-listener intercepts (COLLISION, SENSOR, FLUID, or ANY).

  #### Returns [InteractionType](InteractionType.md) | null

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:159](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L159)
* set interactionType(interactionType: [InteractionType](InteractionType.md) | null): void

  #### Parameters

  + interactionType: [InteractionType](InteractionType.md) | null

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L163)

### options1

* get options1(): [OptionType](OptionType.md)

  Filter for the first interactor. Order does not matter.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:106](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L106)
* set options1(options1: [CbType](CbType.md) | [OptionType](OptionType.md)): void

  #### Parameters

  + options1: [CbType](CbType.md) | [OptionType](OptionType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:110](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L110)

### options2

* get options2(): [OptionType](OptionType.md)

  Filter for the second interactor. Order does not matter.

  #### Returns [OptionType](OptionType.md)

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:115](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L115)
* set options2(options2: [CbType](CbType.md) | [OptionType](OptionType.md)): void

  #### Parameters

  + options2: [CbType](CbType.md) | [OptionType](OptionType.md)

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:119](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L119)

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

### pure

* get pure(): boolean

  When `true`, the engine caches the handler return value and does not
  re-invoke the handler until the cached result is invalidated.

  Only use `pure` mode when the handler always returns the same flag for a
  given pair of interactors. Setting `pure` to `false` immediately invalidates
  any cached result.

  #### Returns boolean

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:147](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L147)
* set pure(pure: boolean): void

  #### Parameters

  + pure: boolean

  #### Returns void

  + Defined in [packages/nape-js/src/callbacks/PreListener.ts:151](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreListener.ts#L151)

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
