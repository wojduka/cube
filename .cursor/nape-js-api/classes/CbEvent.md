Source: https://napejs.org/api/classes/CbEvent.html

* CbEvent

# Class CbEvent

Enumeration of physics callback event types.

Use these singletons to specify which phase of an interaction a listener
should respond to:

* `BEGIN` — fired once when two interactors first make contact
* `ONGOING` — fired every simulation step while the interaction persists
* `END` — fired once when two interactors separate
* `WAKE` — fired when a body or constraint wakes from sleep
* `SLEEP` — fired when a body or constraint falls asleep
* `BREAK` — fired when a constraint exceeds its `maxForce`/`maxError` and breaks
* `PRE` — fired before collision resolution; allows per-step accept/ignore decisions

Valid events per listener type:

* [BodyListener](BodyListener.md): `WAKE`, `SLEEP`
* [ConstraintListener](ConstraintListener.md): `WAKE`, `SLEEP`, `BREAK`
* [InteractionListener](InteractionListener.md): `BEGIN`, `ONGOING`, `END`
* [PreListener](PreListener.md): always `PRE` (set internally)

* Defined in [packages/nape-js/src/callbacks/CbEvent.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L23)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[BEGIN](#begin)
[BREAK](#break)
[END](#end)
[ONGOING](#ongoing)
[PRE](#pre)
[SLEEP](#sleep)
[WAKE](#wake)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new CbEvent(): CbEvent

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:24](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L24)

## Accessors

### `Static`BEGIN

* get BEGIN(): CbEvent

  Interaction-start event. Fired once when two interactors first make contact.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:33](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L33)

### `Static`BREAK

* get BREAK(): CbEvent

  Break event. Fired when a constraint exceeds its `maxForce` or `maxError` limit.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L78)

### `Static`END

* get END(): CbEvent

  Interaction-end event. Fired once when two interactors separate.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:51](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L51)

### `Static`ONGOING

* get ONGOING(): CbEvent

  Interaction-continue event. Fired every step while the interaction persists.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:42](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L42)

### `Static`PRE

* get PRE(): CbEvent

  Pre-interaction event. Fired before collision resolution; handler can accept or ignore.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:87](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L87)

### `Static`SLEEP

* get SLEEP(): CbEvent

  Sleep event. Fired when a body or constraint falls asleep.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:69](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L69)

### `Static`WAKE

* get WAKE(): CbEvent

  Wake event. Fired when a body or constraint wakes from sleep.

  #### Returns CbEvent

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:60](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L60)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/CbEvent.ts:96](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/CbEvent.ts#L96)
