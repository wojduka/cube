Source: https://napejs.org/api/types/VelocityPattern.html

* VelocityPattern

# Type Alias VelocityPattern

VelocityPattern:  
    | { kind: "fixed"; value: [Vec2](../classes/Vec2.md) }  
    | {  
        direction: number;  
        kind: "cone";  
        speedMax: number;  
        speedMin: number;  
        spread: number;  
    }  
    | { kind: "radial"; speedMax: number; speedMin: number }  
    | { kind: "custom"; sample: (rng: () => number, localPos: [Vec2](../classes/Vec2.md)) => [Vec2](../classes/Vec2.md) }

Initial-velocity pattern. The local spawn position is passed to the
`radial` and `custom` samplers so the velocity can depend on where the
particle was spawned (radial = "outward from origin").

* `fixed` — every particle gets the same velocity vector.
* `cone` — uniformly random direction inside a cone of half-width
  `spread` rad, centred on `direction` rad. Speed uniform in
  `[speedMin, speedMax]`.
* `radial` — outward from the spawn point relative to the origin.
  Speed uniform in `[speedMin, speedMax]`. If the spawn point is exactly
  at the origin, falls back to a random direction.
* `custom` — user-provided sampler. Receives RNG and the local spawn
  position.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:71](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L71)
