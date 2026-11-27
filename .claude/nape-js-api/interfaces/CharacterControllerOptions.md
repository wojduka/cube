Source: https://napejs.org/api/interfaces/CharacterControllerOptions.html

* CharacterControllerOptions

# Interface CharacterControllerOptions

Configuration options for [CharacterController](../classes/CharacterController.md).

interface CharacterControllerOptions {  
    [characterTag](#charactertag)?: [CbType](../classes/CbType.md);  
    [down](#down)?: [Vec2](../classes/Vec2.md);  
    [filter](#filter)?: [InteractionFilter](../classes/InteractionFilter.md) | null;  
    [maxSlopeAngle](#maxslopeangle)?: number;  
    [oneWayPlatformTag](#onewayplatformtag)?: [CbType](../classes/CbType.md);  
    [wallFriction](#wallfriction)?: number | null;  
}

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:38](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L38)

##### Index

### Properties

[characterTag?](#charactertag)
[down?](#down)
[filter?](#filter)
[maxSlopeAngle?](#maxslopeangle)
[oneWayPlatformTag?](#onewayplatformtag)
[wallFriction?](#wallfriction)

## Properties

### `Optional`characterTag

characterTag?: [CbType](../classes/CbType.md)

CbType assigned to the character body (required if oneWayPlatformTag is set).

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:55](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L55)

### `Optional`down

down?: [Vec2](../classes/Vec2.md)

World-space "down" direction used for ground / wall raycasts.

Default `Vec2(0, 1)` matches a standard top-down-Y platformer (gravity
points along +Y). Override for radial-gravity / planet-platformer
scenarios — set `cc.down` each frame to the unit vector pointing from
the character toward whatever you treat as "down" (e.g. the nearest
planet's centre). Walls are detected perpendicular to this direction.

The vector is normalized internally; magnitude is ignored.

#### Default

```
Vec2(0, 1)
Copy
```

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:78](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L78)

### `Optional`filter

filter?: [InteractionFilter](../classes/InteractionFilter.md) | null

InteractionFilter used for ground/wall detection raycasts.
When null, an auto-generated filter excluding the character's own
shapes is used.

#### Default

```
null
Copy
```

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:63](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L63)

### `Optional`maxSlopeAngle

maxSlopeAngle?: number

Maximum climbable slope angle in radians.

#### Default

```
Math.PI / 4 (45 degrees)
Copy
```

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:43](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L43)

### `Optional`oneWayPlatformTag

oneWayPlatformTag?: [CbType](../classes/CbType.md)

CbType for one-way platforms. When set, the controller automatically
creates a PreListener that ignores collisions when the character
approaches from below — matching the original nape Haxe engine pattern.

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:50](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L50)

### `Optional`wallFriction

wallFriction?: number | null

Friction coefficient the controller applies to contacts with surfaces it
does **not** treat as ground — walls, ceilings and slopes steeper than
`maxSlopeAngle`. Ground contacts keep the friction derived from the two
shapes' materials.

A velocity-driven character that is pushed into a wall every frame
generates a large normal impulse there, and material friction turns that
into a tangential impulse big enough to cancel gravity outright: the
character hangs on the wall (or the side of a ledge) for as long as the
key is held, instead of sliding down. Overriding wall friction to `0`
removes the hang while leaving floors and slopes untouched, so wall-slide
/ wall-jump logic layered on top sees the real fall speed.

Set a small positive value for a natural "scrape" against walls, or
`null` to disable the override entirely and use material friction
everywhere (the behaviour before this option existed).

#### Default

```
0
Copy
```

* Defined in [packages/nape-js/src/helpers/CharacterController.ts:100](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/CharacterController.ts#L100)
