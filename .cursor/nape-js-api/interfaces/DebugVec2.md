Source: https://napejs.org/api/interfaces/DebugVec2.html

* DebugVec2

# Interface DebugVec2

A minimal 2D point used by [DebugDraw](../classes/DebugDraw.md) draw callbacks.
Renderer implementations receive read-only snapshots — do NOT store these
references; they may be reused by the engine after the call returns.

interface DebugVec2 {  
    [x](#x): number;  
    [y](#y): number;  
}

* Defined in [packages/nape-js/src/util/DebugDraw.ts:6](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L6)

##### Index

### Properties

[x](#x)
[y](#y)

## Properties

### `Readonly`x

x: number

* Defined in [packages/nape-js/src/util/DebugDraw.ts:7](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L7)

### `Readonly`y

y: number

* Defined in [packages/nape-js/src/util/DebugDraw.ts:8](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDraw.ts#L8)
