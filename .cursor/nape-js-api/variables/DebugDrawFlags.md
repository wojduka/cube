Source: https://napejs.org/api/variables/DebugDrawFlags.html

* DebugDrawFlags

# Variable DebugDrawFlags`Const`

DebugDrawFlags: {  
    AABB: number;  
    ALL: number;  
    CENTER\_OF\_MASS: number;  
    CONTACTS: number;  
    JOINTS: number;  
    SHAPES: number;  
    VELOCITIES: number;  
} = ...

Bitmask flags for controlling which elements are drawn by [DebugDraw](../classes/DebugDraw.md).

Pass a combination of these flags (bitwise OR) to `Space.debugDraw()` to
select which layers are rendered.

#### Type Declaration

* ##### `Readonly`AABB: number

  Draw broadphase axis-aligned bounding boxes.
* ##### `Readonly`ALL: number

  All flags combined.
* ##### `Readonly`CENTER\_OF\_MASS: number

  Draw body centre-of-mass markers.
* ##### `Readonly`CONTACTS: number

  Draw contact points and normals.
* ##### `Readonly`JOINTS: number

  Draw joint/constraint anchor points and connecting lines.
* ##### `Readonly`SHAPES: number

  Draw shape outlines (circles and polygons).
* ##### `Readonly`VELOCITIES: number

  Draw body linear velocity vectors.

#### Example

```
space.debugDraw(myDrawer, DebugDrawFlags.SHAPES | DebugDrawFlags.JOINTS);
Copy
```

* Defined in [packages/nape-js/src/util/DebugDrawFlags.ts:12](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDrawFlags.ts#L12)
* Defined in [packages/nape-js/src/util/DebugDrawFlags.ts:29](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/util/DebugDrawFlags.ts#L29)
