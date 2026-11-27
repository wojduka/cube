Source: https://napejs.org/api/interfaces/PhysicsMetricsData.html

* PhysicsMetricsData

# Interface PhysicsMetricsData

Snapshot of per-step physics metrics collected when `Space.profilerEnabled` is true.

All timing values are in **milliseconds**. Counter values are plain integers.
The object is reused across steps (no allocation per frame).

interface PhysicsMetricsData {  
    [bodyCount](#bodycount): number;  
    [broadphasePairCount](#broadphasepaircount): number;  
    [broadphaseTime](#broadphasetime): number;  
    [ccdTime](#ccdtime): number;  
    [constraintCount](#constraintcount): number;  
    [contactCount](#contactcount): number;  
    [dynamicBodyCount](#dynamicbodycount): number;  
    [kinematicBodyCount](#kinematicbodycount): number;  
    [narrowphaseTime](#narrowphasetime): number;  
    [positionSolverTime](#positionsolvertime): number;  
    [sleepingBodyCount](#sleepingbodycount): number;  
    [sleepTime](#sleeptime): number;  
    [staticBodyCount](#staticbodycount): number;  
    [totalStepTime](#totalsteptime): number;  
    [velocitySolverTime](#velocitysolvertime): number;  
}

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:7](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L7)

##### Index

### Properties

[bodyCount](#bodycount)
[broadphasePairCount](#broadphasepaircount)
[broadphaseTime](#broadphasetime)
[ccdTime](#ccdtime)
[constraintCount](#constraintcount)
[contactCount](#contactcount)
[dynamicBodyCount](#dynamicbodycount)
[kinematicBodyCount](#kinematicbodycount)
[narrowphaseTime](#narrowphasetime)
[positionSolverTime](#positionsolvertime)
[sleepingBodyCount](#sleepingbodycount)
[sleepTime](#sleeptime)
[staticBodyCount](#staticbodycount)
[totalStepTime](#totalsteptime)
[velocitySolverTime](#velocitysolvertime)

## Properties

### bodyCount

bodyCount: number

Total number of bodies in the space.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:28](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L28)

### broadphasePairCount

broadphasePairCount: number

Number of broadphase pairs tested.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:42](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L42)

### broadphaseTime

broadphaseTime: number

Time spent in broadphase collision pair detection.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:13](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L13)

### ccdTime

ccdTime: number

Time spent in continuous collision detection (CCD).

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:21](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L21)

### constraintCount

constraintCount: number

Number of active constraints.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:40](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L40)

### contactCount

contactCount: number

Number of active collision arbiters.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L38)

### dynamicBodyCount

dynamicBodyCount: number

Number of dynamic (awake) bodies.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L30)

### kinematicBodyCount

kinematicBodyCount: number

Number of kinematic bodies.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L34)

### narrowphaseTime

narrowphaseTime: number

Time spent in narrowphase (prestep: contact generation, arbiter setup).

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:15](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L15)

### positionSolverTime

positionSolverTime: number

Time spent in position integration + position solver iterations.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:19](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L19)

### sleepingBodyCount

sleepingBodyCount: number

Number of sleeping bodies.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:36](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L36)

### sleepTime

sleepTime: number

Time spent in sleep management and island/forest processing.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:23](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L23)

### staticBodyCount

staticBodyCount: number

Number of static bodies.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:32](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L32)

### totalStepTime

totalStepTime: number

Total wall-clock time of the last `step()` call.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:11](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L11)

### velocitySolverTime

velocitySolverTime: number

Time spent in velocity integration + warm-start + velocity solver iterations.

* Defined in [packages/nape-js/src/profiler/PhysicsMetrics.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/profiler/PhysicsMetrics.ts#L17)
