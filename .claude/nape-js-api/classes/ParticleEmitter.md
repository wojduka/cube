Source: https://napejs.org/api/classes/ParticleEmitter.html

* ParticleEmitter

# Class ParticleEmitter

Physics-aware particle emitter — a pooled, lifecycle-managed swarm of
dynamic bodies. Each particle is a real [Body](Body.md) with a [Circle](Circle.md)
or [Polygon](Polygon.md) shape, so it collides with the world, reacts to
gravity / fluids / forces, and triggers callbacks like any other body.

#### Example

```
// Volcano: emit lava drops upward in a 40-deg cone.  
const volcano = new ParticleEmitter({  
  space,  
  origin: new Vec2(400, 100),  
  velocity: {  
    kind: "cone",  
    direction: -Math.PI / 2,  
    spread: Math.PI / 9,  
    speedMin: 350,  
    speedMax: 600,  
  },  
  rate: 80,  
  lifetimeMin: 4,  
  lifetimeMax: 8,  
  particleRadius: 3,  
  maxParticles: 600,  
});  
  
// Each frame, before space.step():  
volcano.update(1 / 60);  
space.step(1 / 60);
Copy
```

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:282](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L282)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[allowRotation](#allowrotation)
[bounds](#bounds)
[burstCount](#burstcount)
[burstInterval](#burstinterval)
[enabled](#enabled)
[lifetimeMax](#lifetimemax)
[lifetimeMin](#lifetimemin)
[maxParticles](#maxparticles)
[onCollide](#oncollide)
[onDeath](#ondeath)
[onSpawn](#onspawn)
[onUpdate](#onupdate)
[origin](#origin)
[overflowPolicy](#overflowpolicy)
[particleCbType](#particlecbtype)
[particleFilter](#particlefilter)
[particleMaterial](#particlematerial)
[particlePolygon](#particlepolygon)
[particleRadius](#particleradius)
[particleShape](#particleshape)
[random](#random)
[rate](#rate)
[space](#space)
[spawn](#spawn)
[velocity](#velocity)

### Accessors

[active](#active)
[ages](#ages)
[lifetimes](#lifetimes)
[poolSize](#poolsize)
[totalSpawned](#totalspawned)

### Methods

[destroy](#destroy)
[emit](#emit)
[killAll](#killall)
[requestKill](#requestkill)
[update](#update)

## Constructors

### constructor

* new ParticleEmitter(options: [ParticleEmitterOptions](../interfaces/ParticleEmitterOptions.md)): ParticleEmitter

  #### Parameters

  + options: [ParticleEmitterOptions](../interfaces/ParticleEmitterOptions.md)

  #### Returns ParticleEmitter

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:330](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L330)

## Properties

### allowRotation

allowRotation: boolean

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:294](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L294)

### bounds

bounds: [ParticleBounds](../interfaces/ParticleBounds.md) | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:296](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L296)

### burstCount

burstCount: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:289](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L289)

### burstInterval

burstInterval: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:290](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L290)

### enabled

enabled: boolean

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:284](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L284)

### lifetimeMax

lifetimeMax: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:293](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L293)

### lifetimeMin

lifetimeMin: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:292](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L292)

### maxParticles

maxParticles: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:291](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L291)

### onCollide

onCollide: ((body: [Body](Body.md), other: [Body](Body.md)) => void) | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:300](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L300)

### onDeath

onDeath: ((body: [Body](Body.md), reason: [ParticleDeathReason](../types/ParticleDeathReason.md)) => void) | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:299](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L299)

### onSpawn

onSpawn: ((state: [ParticleSpawnState](../interfaces/ParticleSpawnState.md), body: [Body](Body.md)) => void) | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:297](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L297)

### onUpdate

onUpdate: ((body: [Body](Body.md), age: number, dt: number) => void) | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:298](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L298)

### origin

origin: [Vec2](Vec2.md) | [Body](Body.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:285](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L285)

### overflowPolicy

overflowPolicy: [ParticleOverflowPolicy](../types/ParticleOverflowPolicy.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:295](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L295)

### `Readonly`particleCbType

particleCbType: [CbType](CbType.md) | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:309](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L309)

### `Readonly`particleFilter

particleFilter: [InteractionFilter](InteractionFilter.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:308](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L308)

### `Readonly`particleMaterial

particleMaterial: [Material](Material.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:307](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L307)

### `Readonly`particlePolygon

particlePolygon: [Vec2](Vec2.md)[] | null

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:306](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L306)

### `Readonly`particleRadius

particleRadius: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:305](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L305)

### `Readonly`particleShape

particleShape: [ParticleShape](../types/ParticleShape.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:304](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L304)

### `Readonly`random

random: () => number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:310](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L310)

### rate

rate: number

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:288](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L288)

### `Readonly`space

space: [Space](Space.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:303](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L303)

### spawn

spawn: [SpawnPattern](../types/SpawnPattern.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:286](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L286)

### velocity

velocity: [VelocityPattern](../types/VelocityPattern.md)

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:287](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L287)

## Accessors

### active

* get active(): readonly [Body](Body.md)[]

  Live particle bodies. Read-only — do not mutate.

  #### Returns readonly [Body](Body.md)[]

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:410](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L410)

### ages

* get ages(): readonly number[]

  Per-particle age in seconds, indexed parallel to [active](#active).
  Read-only — do not mutate. Useful for renderers that fade particles
  by `age / lifetime`.

  #### Returns readonly number[]

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:419](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L419)

### lifetimes

* get lifetimes(): readonly number[]

  Per-particle lifetime in seconds, indexed parallel to [active](#active).
  Read-only — do not mutate.

  #### Returns readonly number[]

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:427](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L427)

### poolSize

* get poolSize(): number

  Number of bodies currently in the recycle pool.

  #### Returns number

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:432](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L432)

### totalSpawned

* get totalSpawned(): number

  Total spawn count over the lifetime of this emitter.

  #### Returns number

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:437](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L437)

## Methods

### destroy

* destroy(): void

  Remove every body (live + pooled) from the space, drop the listener,
  and mark the emitter unusable. Subsequent `update` / `emit` calls
  throw.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:776](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L776)

### emit

* emit(count: number): [Body](Body.md)[]

  Spawn `count` particles immediately. Returns the live bodies that were
  spawned (length may be < `count` when the emitter is full and
  `overflowPolicy` is `"drop-new"`).

  #### Parameters

  + count: number

  #### Returns [Body](Body.md)[]

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:581](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L581)

### killAll

* killAll(): void

  Kill every live particle. Bodies return to the pool.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:686](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L686)

### requestKill

* requestKill(body: [Body](Body.md)): void

  Mark a body for death at the start of the next `update()` call. Safe to
  call from inside collision callbacks. No-op if the body is not a live
  particle of this emitter.

  #### Parameters

  + body: [Body](Body.md)

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:669](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L669)

### update

* update(dt: number): void

  Advance lifetimes, fire `onUpdate`, kill expired / out-of-bounds
  particles, and run continuous / periodic spawning.

  Call once per frame, **before** `space.step()`. `dt` should match the
  step size you'll pass to `space.step()`.

  #### Parameters

  + dt: number

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:703](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L703)
