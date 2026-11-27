Source: https://napejs.org/api/interfaces/MoveResult.html

* MoveResult

# Interface MoveResult

Result returned by [CharacterController.update](../classes/CharacterController.md#update).

interface MoveResult {  
    [groundBody](#groundbody): [Body](../classes/Body.md) | null;  
    [grounded](#grounded): boolean;  
    [groundNormal](#groundnormal): [Vec2](../classes/Vec2.md) | null;  
    [onMovingPlatform](#onmovingplatform): boolean;  
    [slopeAngle](#slopeangle): number;  
    [timeSinceGrounded](#timesincegrounded): number;  
    [wallLeft](#wallleft): boolean;  
    [wallRight](#wallright): boolean;  
}

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:18](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L18)

##### Index

### Properties

[groundBody](#groundbody)
[grounded](#grounded)
[groundNormal](#groundnormal)
[onMovingPlatform](#onmovingplatform)
[slopeAngle](#slopeangle)
[timeSinceGrounded](#timesincegrounded)
[wallLeft](#wallleft)
[wallRight](#wallright)

## Properties

### groundBody

groundBody: [Body](../classes/Body.md) | null

The body the character is standing on, or null.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:24](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L24)

### grounded

grounded: boolean

True if the character is standing on a surface within slope limits.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:20](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L20)

### groundNormal

groundNormal: [Vec2](../classes/Vec2.md) | null

Ground surface normal, or null if not grounded.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L22)

### onMovingPlatform

onMovingPlatform: boolean

True if standing on a kinematic (moving) platform.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:26](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L26)

### slopeAngle

slopeAngle: number

Angle of the ground slope in radians (0 = flat).

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:28](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L28)

### timeSinceGrounded

timeSinceGrounded: number

Seconds since the character was last grounded (for coyote-time).

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L34)

### wallLeft

wallLeft: boolean

True if touching a wall on the left side.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:30](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L30)

### wallRight

wallRight: boolean

True if touching a wall on the right side.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:32](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L32)
