Source: https://napejs.org/api/classes/PreFlag.html

* PreFlag

# Class PreFlag

Return value for [PreListener](PreListener.md) handlers — controls whether the interaction
is resolved this step and in future steps.

* `ACCEPT` — resolve the interaction (default if handler returns `null`)
* `IGNORE` — suppress the interaction permanently until the next `BEGIN`
* `ACCEPT_ONCE` — accept this step only, then revert to the previous flag
* `IGNORE_ONCE` — ignore this step only, then revert to the previous flag

Use `IGNORE`/`ACCEPT` for stateful decisions (e.g., one-way platforms).
Use `*_ONCE` variants for single-step overrides.

* Defined in [packages/nape-js/src/callbacks/PreFlag.ts:15](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L15)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[ACCEPT](#accept)
[ACCEPT\_ONCE](#accept_once)
[IGNORE](#ignore)
[IGNORE\_ONCE](#ignore_once)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new PreFlag(): PreFlag

  #### Returns PreFlag

  + Defined in [packages/nape-js/src/callbacks/PreFlag.ts:16](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L16)

## Accessors

### `Static`ACCEPT

* get ACCEPT(): PreFlag

  Accept and resolve the interaction normally.

  #### Returns PreFlag

  + Defined in [packages/nape-js/src/callbacks/PreFlag.ts:25](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L25)

### `Static`ACCEPT\_ONCE

* get ACCEPT\_ONCE(): PreFlag

  Accept this step only; revert to the previous flag next step.

  #### Returns PreFlag

  + Defined in [packages/nape-js/src/callbacks/PreFlag.ts:43](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L43)

### `Static`IGNORE

* get IGNORE(): PreFlag

  Suppress the interaction permanently until the next `BEGIN` event.

  #### Returns PreFlag

  + Defined in [packages/nape-js/src/callbacks/PreFlag.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L34)

### `Static`IGNORE\_ONCE

* get IGNORE\_ONCE(): PreFlag

  Ignore this step only; revert to the previous flag next step.

  #### Returns PreFlag

  + Defined in [packages/nape-js/src/callbacks/PreFlag.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L52)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/callbacks/PreFlag.ts:61](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/callbacks/PreFlag.ts#L61)
