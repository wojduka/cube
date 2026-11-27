Source: https://napejs.org/api/variables/Config.html

* Config

# Variable Config`Const`

Config: {  
    angularCCDSlipScale: number;  
    angularSleepThreshold: number;  
    arbiterExpirationDelay: number;  
    bulletCCDAngularThreshold: number;  
    bulletCCDLinearThreshold: number;  
    collisionSlop: number;  
    collisionSlopCCD: number;  
    constraintAngularSlop: number;  
    constraintLinearSlop: number;  
    contactBiasCoef: number;  
    contactContinuousBiasCoef: number;  
    contactContinuousStaticBiasCoef: number;  
    contactStaticBiasCoef: number;  
    distanceThresholdCCD: number;  
    dynamicSweepAngularThreshold: number;  
    dynamicSweepLinearThreshold: number;  
    elasticThreshold: number;  
    epsilon: number;  
    fluidAngularDrag: number;  
    fluidAngularDragFriction: number;  
    fluidLinearDrag: number;  
    fluidVacuumDrag: number;  
    illConditionedThreshold: number;  
    linearSleepThreshold: number;  
    sleepDelay: number;  
    staticCCDAngularThreshold: number;  
    staticCCDLinearThreshold: number;  
    staticFrictionThreshold: number;  
} = ...

Global tuning constants of the physics engine — the same fields and
defaults as Haxe nape's `nape.Config`.

The engine reads these on every use, so assigning a field takes effect
immediately for **every** `Space` in the process. Change them once at
startup, before creating spaces, and only when you know which behaviour you
are tuning: the defaults are balanced against each other.

Config is not part of `spaceToJSON` / `spaceToBinary` snapshots, and it is
an input to the simulation: two runs only reproduce each other (replay,
rollback, determinism tests) with the same values.

#### Type Declaration

* ##### angularCCDSlipScale: number

  Scale applied to angular velocity during CCD sweeps, so a spinning body slips instead of locking.
* ##### angularSleepThreshold: number

  Angular speed below which a body counts as resting for sleeping.
* ##### arbiterExpirationDelay: number

  Steps a contact is kept after its shapes stop touching (warm starting).
* ##### bulletCCDAngularThreshold: number

  As `staticCCDAngularThreshold`, for bullet bodies against dynamic bodies.
* ##### bulletCCDLinearThreshold: number

  As `staticCCDLinearThreshold`, for bullet bodies against dynamic bodies.
* ##### collisionSlop: number

  Penetration (px) tolerated before contacts push shapes apart.
* ##### collisionSlopCCD: number

  Penetration (px) a continuous (CCD) sweep stops at.
* ##### constraintAngularSlop: number

  Angular error (rad) a constraint tolerates before correcting it.
* ##### constraintLinearSlop: number

  Positional error (px) a constraint tolerates before correcting it.
* ##### contactBiasCoef: number

  Position-correction strength of contacts.
* ##### contactContinuousBiasCoef: number

  Position-correction strength of continuous (CCD) contacts.
* ##### contactContinuousStaticBiasCoef: number

  Position-correction strength of continuous (CCD) contacts against static bodies.
* ##### contactStaticBiasCoef: number

  Position-correction strength of contacts against static bodies.
* ##### distanceThresholdCCD: number

  Separation (px) at which a CCD sweep counts as a time of impact.
* ##### dynamicSweepAngularThreshold: number

  Relative rotation below which a dynamic pair is resolved without a sweep.
* ##### dynamicSweepLinearThreshold: number

  Relative displacement (px) below which a dynamic pair is resolved without a sweep.
* ##### elasticThreshold: number

  Normal impact speed below which elasticity is ignored, so resting contacts don't jitter.
* ##### epsilon: number

  General numerical tolerance (degenerate geometry, near-zero lengths).
* ##### fluidAngularDrag: number

  Fluid drag coefficient on angular velocity.
* ##### fluidAngularDragFriction: number

  Friction scale of fluid drag on angular velocity.
* ##### fluidLinearDrag: number

  Fluid drag coefficient on linear velocity.
* ##### fluidVacuumDrag: number

  Drag factor on the trailing edges of a submerged shape (edges facing away from the flow).
* ##### illConditionedThreshold: number

  Condition number above which a constraint or contact matrix is treated as ill-conditioned.
* ##### linearSleepThreshold: number

  Linear speed below which a body counts as resting for sleeping.
* ##### sleepDelay: number

  Steps a body must stay below the sleep thresholds before it falls asleep.
* ##### staticCCDAngularThreshold: number

  Per-step rotation (rad) above which CCD against static bodies kicks in.
* ##### staticCCDLinearThreshold: number

  Per-step motion, as a fraction of the body's sweep radius, above which CCD against static bodies kicks in.
* ##### staticFrictionThreshold: number

  Relative tangent speed below which static friction applies instead of dynamic friction.

#### Example

```
import { Config } from "@newkrok/nape-js";  
  
Config.sleepDelay = 30;            // fall asleep after 30 quiet steps, not 60  
Config.linearSleepThreshold = 0.5; // ...and count slower motion as quiet
Copy
```

* Defined in [packages/nape-js/src/Config.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/Config.ts#L22)
