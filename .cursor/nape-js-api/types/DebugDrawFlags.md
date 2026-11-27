Source: https://napejs.org/api/types/DebugDrawFlags.html

* DebugDrawFlags

# Type Alias DebugDrawFlags

DebugDrawFlags: typeof [DebugDrawFlags](../variables/DebugDrawFlags.md)[keyof typeof [DebugDrawFlags](../variables/DebugDrawFlags.md)]

Bitmask flags for controlling which elements are drawn by [DebugDraw](../classes/DebugDraw.md).

Pass a combination of these flags (bitwise OR) to `Space.debugDraw()` to
select which layers are rendered.

#### Example

```
space.debugDraw(myDrawer, DebugDrawFlags.SHAPES | DebugDrawFlags.JOINTS);
Copy
```

* Defined in [packages/nape-js/src/util/DebugDrawFlags.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDrawFlags.ts#L12)
* Defined in [packages/nape-js/src/util/DebugDrawFlags.ts:29](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDrawFlags.ts#L29)
