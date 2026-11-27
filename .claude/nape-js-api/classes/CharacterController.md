Source: https://napejs.org/api/classes/CharacterController.html

* CharacterController

# Class CharacterController

Velocity-based character controller for 2D platformers.

The character uses a **dynamic body** whose velocity is set each frame.
Collision response (including one-way platforms) is handled entirely by
the physics engine via `space.step()` and `PreListener` callbacks —
matching the original nape Haxe engine pattern.

The controller provides:

* Velocity application (`setVelocity`)
* Ground/slope detection (raycast queries)
* Wall detection (raycast queries)
* One-way platform support (auto-configured PreListener)
* Moving platform tracking
* Coyote time helper (`timeSinceGrounded`)
* Frictionless walls by default (`wallFriction`), so pushing into a wall
  never cancels gravity

#### Example

```
const body = new Body(BodyType.DYNAMIC, new Vec2(100, 100));  
body.shapes.add(new Circle(14));  
body.allowRotation = false;  
body.isBullet = true;  
body.space = space;  
  
const cc = new CharacterController(space, body, {  
  maxSlopeAngle: Math.PI / 4,  
  oneWayPlatformTag: platformCbType,  
  characterTag: playerCbType,  
});  
  
// Each frame (before space.step):  
cc.setVelocity(moveX, velY);  
space.step(1/60);  
const result = cc.update();  
if (result.grounded) velY = 0;
Copy
```

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:146](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L146)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[body](#body)
[space](#space)

### Accessors

[down](#down)
[groundBody](#groundbody)
[grounded](#grounded)
[groundNormal](#groundnormal)
[maxSlopeAngle](#maxslopeangle)
[timeSinceGrounded](#timesincegrounded)
[wallFriction](#wallfriction)

### Methods

[destroy](#destroy)
[setDown](#setdown)
[setVelocity](#setvelocity)
[update](#update)

## Constructors

### constructor

* new CharacterController(  
      space: [Space](Space.md),  
      body: [Body](Body.md),  
      options?: [CharacterControllerOptions](../interfaces/CharacterControllerOptions.md),  
  ): CharacterController

  #### Parameters

  + space: [Space](Space.md)
  + body: [Body](Body.md)
  + options: [CharacterControllerOptions](../interfaces/CharacterControllerOptions.md) = {}

  #### Returns CharacterController

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:178](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L178)

## Properties

### `Readonly`body

body: [Body](Body.md)

The character body being controlled.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:151](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L151)

### `Readonly`space

space: [Space](Space.md)

The physics space.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:148](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L148)

## Accessors

### down

* get down(): [Vec2](Vec2.md)

  Current world-space "down" direction used for ground / wall raycasts.
  Returns a fresh `Vec2` each call; mutate via [setDown](#setdown) or by
  assigning a new `Vec2` to this property.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:255](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L255)
* set down(value: [Vec2](Vec2.md)): void

  #### Parameters

  + value: [Vec2](Vec2.md)

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:259](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L259)

### groundBody

* get groundBody(): [Body](Body.md) | null

  #### Returns [Body](Body.md) | null

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:225](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L225)

### grounded

* get grounded(): boolean

  #### Returns boolean

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:217](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L217)

### groundNormal

* get groundNormal(): [Vec2](Vec2.md) | null

  #### Returns [Vec2](Vec2.md) | null

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:221](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L221)

### maxSlopeAngle

* get maxSlopeAngle(): number

  #### Returns number

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:233](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L233)
* set maxSlopeAngle(v: number): void

  #### Parameters

  + v: number

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:237](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L237)

### timeSinceGrounded

* get timeSinceGrounded(): number

  #### Returns number

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:229](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L229)

### wallFriction

* get wallFriction(): number | null

  Friction coefficient applied to wall / ceiling contacts, or `null` when
  the override is disabled. See [CharacterControllerOptions.wallFriction](../interfaces/CharacterControllerOptions.md#wallfriction).

  #### Returns number | null

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:246](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L246)

## Methods

### destroy

* destroy(): void

  Remove the one-way platform PreListener and detach from space.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:339](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L339)

### setDown

* setDown(x: number, y: number): void

  Update the down direction from raw components (normalized internally).

  #### Parameters

  + x: number
  + y: number

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:264](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L264)

### setVelocity

* setVelocity(vx: number, vy: number): void

  Set the character body's velocity. Call this each frame **before**
  `space.step()`.

  #### Parameters

  + vx: number

    Horizontal velocity (px/s). Set to 0 for no horizontal input.
  + vy: number

    Vertical velocity (px/s). Typically includes gravity accumulation.

  #### Returns void

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:287](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L287)

### update

* update(): [MoveResult](../interfaces/MoveResult.md)

  Query the character's state after `space.step()` has run.
  Detects ground, walls, slope angle, moving platforms, etc.

  Call this each frame **after** `space.step()`.

  #### Returns [MoveResult](../interfaces/MoveResult.md)

  + Defined in [packages/nape-js/src/helpers/CharacterController.ts:297](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L297)
