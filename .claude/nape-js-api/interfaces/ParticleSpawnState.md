Source: https://napejs.org/api/interfaces/ParticleSpawnState.html

* ParticleSpawnState

# Interface ParticleSpawnState

State snapshot passed to the `onSpawn` hook.

interface ParticleSpawnState {  
    [angle](#angle): number;  
    [angularVelocity](#angularvelocity): number;  
    [lifetime](#lifetime): number;  
    [position](#position): [Vec2](../classes/Vec2.md);  
    [userData](#userdata): unknown;  
    [velocity](#velocity): [Vec2](../classes/Vec2.md);  
}

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L23)

##### Index

### Properties

[angle](#angle)
[angularVelocity](#angularvelocity)
[lifetime](#lifetime)
[position](#position)
[userData](#userdata)
[velocity](#velocity)

## Properties

### angle

angle: number

Initial rotation (rad).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:29](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L29)

### angularVelocity

angularVelocity: number

Initial angular velocity (rad/s).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:31](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L31)

### lifetime

lifetime: number

Lifetime in seconds. `<= 0` disables auto-death.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:33](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L33)

### position

position: [Vec2](../classes/Vec2.md)

World-space spawn position.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:25](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L25)

### userData

userData: unknown

Free-form per-particle payload (color, frame index, damage, etc.).

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:35](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L35)

### velocity

velocity: [Vec2](../classes/Vec2.md)

Initial linear velocity.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:27](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L27)
