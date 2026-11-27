Source: https://napejs.org/api/types/ParticleOverflowPolicy.html

* ParticleOverflowPolicy

# Type Alias ParticleOverflowPolicy

ParticleOverflowPolicy: "drop-oldest" | "drop-new"

What to do when [ParticleEmitterOptions.maxParticles](../interfaces/ParticleEmitterOptions.md#maxparticles) is full and a
new spawn is requested.

* `drop-oldest` (default) — kill the oldest live particle to make room for
  the new one. Keeps emitter responsive (e.g. bullets always come out).
* `drop-new` — silently drop the new spawn. Protects already-visible
  particles from churn.

* Defined in [packages/nape-js/src/helpers/ParticleEmitter.ts:86](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/ParticleEmitter.ts#L86)
