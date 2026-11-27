Source: https://napejs.org/api/interfaces/ParticleEmitterOptions.html

* ParticleEmitterOptions

# Interface ParticleEmitterOptions

Configuration options for [ParticleEmitter](../classes/ParticleEmitter.md).

interface ParticleEmitterOptions {  
    [allowRotation](#allowrotation)?: boolean;  
    [bounds](#bounds)?: [ParticleBounds](ParticleBounds.md);  
    [burstCount](#burstcount)?: number;  
    [burstInterval](#burstinterval)?: number;  
    [enabled](#enabled)?: boolean;  
    [lifetimeMax](#lifetimemax)?: number;  
    [lifetimeMin](#lifetimemin)?: number;  
    [maxParticles](#maxparticles)?: number;  
    [onCollide](#oncollide)?: (body: [Body](../classes/Body.md), other: [Body](../classes/Body.md)) => void;  
    [onDeath](#ondeath)?: (body: [Body](../classes/Body.md), reason: [ParticleDeathReason](../types/ParticleDeathReason.md)) => void;  
    [onSpawn](#onspawn)?: (state: [ParticleSpawnState](ParticleSpawnState.md), body: [Body](../classes/Body.md)) => void;  
    [onUpdate](#onupdate)?: (body: [Body](../classes/Body.md), age: number, dt: number) => void;  
    [origin](#origin): [Vec2](../classes/Vec2.md) | [Body](../classes/Body.md);  
    [overflowPolicy](#overflowpolicy)?: [ParticleOverflowPolicy](../types/ParticleOverflowPolicy.md);  
    [particleCbType](#particlecbtype)?: [CbType](../classes/CbType.md);  
    [particleFilter](#particlefilter)?: [InteractionFilter](../classes/InteractionFilter.md);  
    [particleMaterial](#particlematerial)?: [Material](../classes/Material.md);  
    [particlePolygon](#particlepolygon)?: [Vec2](../classes/Vec2.md)[];  
    [particleRadius](#particleradius)?: number;  
    [particleShape](#particleshape)?: [ParticleShape](../types/ParticleShape.md);  
    [random](#random)?: () => number;  
    [rate](#rate)?: number;  
    [selfCollision](#selfcollision)?: boolean;  
    [space](#space): [Space](../classes/Space.md);  
    [spawn](#spawn)?: [SpawnPattern](../types/SpawnPattern.md);  
    [velocity](#velocity)?: [VelocityPattern](../types/VelocityPattern.md);  
}

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:100](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L100)

##### Index

### Properties

[allowRotation?](#allowrotation)
[bounds?](#bounds)
[burstCount?](#burstcount)
[burstInterval?](#burstinterval)
[enabled?](#enabled)
[lifetimeMax?](#lifetimemax)
[lifetimeMin?](#lifetimemin)
[maxParticles?](#maxparticles)
[onCollide?](#oncollide)
[onDeath?](#ondeath)
[onSpawn?](#onspawn)
[onUpdate?](#onupdate)
[origin](#origin)
[overflowPolicy?](#overflowpolicy)
[particleCbType?](#particlecbtype)
[particleFilter?](#particlefilter)
[particleMaterial?](#particlematerial)
[particlePolygon?](#particlepolygon)
[particleRadius?](#particleradius)
[particleShape?](#particleshape)
[random?](#random)
[rate?](#rate)
[selfCollision?](#selfcollision)
[space](#space)
[spawn?](#spawn)
[velocity?](#velocity)

## Properties

### `Optional`allowRotation

allowRotation?: boolean

Whether particles can rotate.

#### Default

`true`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:180](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L180)

### `Optional`bounds

bounds?: [ParticleBounds](ParticleBounds.md)

Optional world-space bounds — particles outside die instantly.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:194](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L194)

### `Optional`burstCount

burstCount?: number

Periodic-burst count (particles per burst). Combined with
`burstInterval`, fires a burst every `burstInterval` seconds.

#### Default

`0`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:130](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L130)

### `Optional`burstInterval

burstInterval?: number

Period of automatic bursts in seconds. Has no effect when `burstCount`
is `0`.

#### Default

`0`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L137)

### `Optional`enabled

enabled?: boolean

Whether the emitter is active.

#### Default

`true`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:202](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L202)

### `Optional`lifetimeMax

lifetimeMax?: number

Lifetime range maximum (s).

#### Default

`1`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:148](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L148)

### `Optional`lifetimeMin

lifetimeMin?: number

Lifetime range minimum (s).

#### Default

`1`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:146](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L146)

### `Optional`maxParticles

maxParticles?: number

Maximum simultaneously alive particles. The pool size is capped at this
value too.

#### Default

`512`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:143](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L143)

### `Optional`onCollide

onCollide?: (body: [Body](../classes/Body.md), other: [Body](../classes/Body.md)) => void

Fired when a particle's body collides with another body. Requires
`particleCbType` to be set. The handler runs from inside a Space
callback — do not mutate the space synchronously; use
[ParticleEmitter.requestKill](../classes/ParticleEmitter.md#requestkill) for deferred cleanup.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:219](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L219)

### `Optional`onDeath

onDeath?: (body: [Body](../classes/Body.md), reason: [ParticleDeathReason](../types/ParticleDeathReason.md)) => void

Fired when a particle dies (lifetime, bounds, manual, or `killAll`).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:211](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L211)

### `Optional`onSpawn

onSpawn?: (state: [ParticleSpawnState](ParticleSpawnState.md), body: [Body](../classes/Body.md)) => void

Fired once per spawn, after the body is in the space.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:205](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L205)

### `Optional`onUpdate

onUpdate?: (body: [Body](../classes/Body.md), age: number, dt: number) => void

Fired every `update()` for each live particle (ages > 0).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:208](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L208)

### origin

origin: [Vec2](../classes/Vec2.md) | [Body](../classes/Body.md)

Spawn anchor. A `Vec2` is captured by reference (mutating it after
construction moves the emitter); a `Body` is tracked by position each
spawn (the body does not need to be in the same space). Required.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L109)

### `Optional`overflowPolicy

overflowPolicy?: [ParticleOverflowPolicy](../types/ParticleOverflowPolicy.md)

Policy when `maxParticles` is reached.

#### Default

`"drop-oldest"`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:191](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L191)

### `Optional`particleCbType

particleCbType?: [CbType](../classes/CbType.md)

Collision-callback type tagged on every particle body. Required for
`onCollide` to fire. The emitter never auto-creates one — pass your own
if you need it (so multiple emitters can share a type, or a single
emitter can match a user-defined cbType).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:177](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L177)

### `Optional`particleFilter

particleFilter?: [InteractionFilter](../classes/InteractionFilter.md)

Filter applied to every particle shape. If omitted and `selfCollision`
is `false`, the emitter generates a self-excluding filter automatically.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:169](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L169)

### `Optional`particleMaterial

particleMaterial?: [Material](../classes/Material.md)

Material applied to every particle shape.

#### Default

`new Material()`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:163](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L163)

### `Optional`particlePolygon

particlePolygon?: [Vec2](../classes/Vec2.md)[]

Polygon vertices in body-local space (used when
`particleShape: "polygon"`). Defaults to a small square.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:160](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L160)

### `Optional`particleRadius

particleRadius?: number

Radius for circle particles. Ignored for polygon.

#### Default

`2`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:154](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L154)

### `Optional`particleShape

particleShape?: [ParticleShape](../types/ParticleShape.md)

Body shape for each particle.

#### Default

`"circle"`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:151](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L151)

### `Optional`random

random?: () => number

Deterministic RNG. All emitter randomness (spawn jitter, velocity cone,
lifetime sampling) flows through this.

#### Default

`Math.random`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:199](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L199)

### `Optional`rate

rate?: number

Continuous spawn rate in particles/second. Accumulated across `update()`
calls — fractional rates work. `0` disables continuous spawning (use
[ParticleEmitter.emit](../classes/ParticleEmitter.md#emit) for manual bursts).

#### Default

`0`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:123](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L123)

### `Optional`selfCollision

selfCollision?: boolean

When `false` and no explicit `particleFilter` is given, particles
receive a generated filter that skips its own group — particles in the
same emitter never collide with each other. Has no effect when
`particleFilter` is provided.

#### Default

`false`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:188](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L188)

### space

space: [Space](../classes/Space.md)

Space the emitted particle bodies live in. Required.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:102](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L102)

### `Optional`spawn

spawn?: [SpawnPattern](../types/SpawnPattern.md)

Spawn-position pattern.

#### Default

`{ kind: "point" }`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:112](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L112)

### `Optional`velocity

velocity?: [VelocityPattern](../types/VelocityPattern.md)

Initial velocity pattern.

#### Default

`{ kind: "fixed", value: (0, 0) }`

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:115](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L115)
