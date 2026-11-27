Source: https://napejs.org/api/classes/ParticleEmitterGroup.html

* ParticleEmitterGroup

# Class ParticleEmitterGroup

Composable collection of [ParticleEmitter](ParticleEmitter.md)s — analogous to
[RadialGravityFieldGroup](RadialGravityFieldGroup.md). One `update(dt)` runs every member emitter.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:827](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L827)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[emitters](#emitters)

### Accessors

[length](#length)

### Methods

[add](#add)
[clear](#clear)
[destroyAll](#destroyall)
[remove](#remove)
[update](#update)

## Constructors

### constructor

* new ParticleEmitterGroup(): ParticleEmitterGroup

  #### Returns ParticleEmitterGroup

## Properties

### `Readonly`emitters

emitters: [ParticleEmitter](ParticleEmitter.md)[] = []

Ordered list of emitters. Mutate via [add](#add) / [remove](#remove).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:829](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L829)

## Accessors

### length

* get length(): number

  Number of emitters currently in the group.

  #### Returns number

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:851](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L851)

## Methods

### add

* add(emitter: [ParticleEmitter](ParticleEmitter.md)): [ParticleEmitter](ParticleEmitter.md)

  Add an emitter to the group and return it.

  #### Parameters

  + emitter: [ParticleEmitter](ParticleEmitter.md)

  #### Returns [ParticleEmitter](ParticleEmitter.md)

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:832](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L832)

### clear

* clear(): void

  Remove all emitters (does NOT call `destroy` on them).

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:846](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L846)

### destroyAll

* destroyAll(): void

  Call `destroy()` on every emitter and clear the group.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:861](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L861)

### remove

* remove(emitter: [ParticleEmitter](ParticleEmitter.md)): boolean

  Remove an emitter from the group. Returns `true` if it was present.

  #### Parameters

  + emitter: [ParticleEmitter](ParticleEmitter.md)

  #### Returns boolean

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:838](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L838)

### update

* update(dt: number): void

  Advance every emitter.

  #### Parameters

  + dt: number

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:856](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L856)
