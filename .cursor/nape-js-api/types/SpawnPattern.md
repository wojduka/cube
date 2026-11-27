Source: https://napejs.org/api/types/SpawnPattern.html

* SpawnPattern

# Type Alias SpawnPattern

SpawnPattern:  
    | { kind: "point" }  
    | { height: number; kind: "rect"; width: number }  
    | { hollow?: boolean; kind: "circle"; radius: number }  
    | { angleEnd: number; angleStart: number; kind: "arc"; radius: number }  
    | { kind: "custom"; sample: (rng: () => number) => [Vec2](../classes/Vec2.md) }

Spawn-position pattern. Position is sampled once per particle, in
emitter-local space (relative to [ParticleEmitter.origin](../classes/ParticleEmitter.md#origin)), then
translated into world space.

* `point` — always at the origin.
* `rect` — uniform inside an axis-aligned rectangle centred on the origin.
* `circle` — uniform inside a disk; `hollow: true` samples the rim only.
* `arc` — on the rim of a circular arc, `angle*` in radians.
* `custom` — user-provided sampler. Receives the emitter's RNG.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:49](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L49)
