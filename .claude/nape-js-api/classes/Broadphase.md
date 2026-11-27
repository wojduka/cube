Source: https://napejs.org/api/classes/Broadphase.html

* Broadphase

# Class Broadphase

Broadphase algorithm type for Space collision detection.

* `DYNAMIC_AABB_TREE` — dynamic AABB tree broadphase (default, general purpose)
* `SWEEP_AND_PRUNE` — sweep-and-prune broadphase
* `SPATIAL_HASH` — spatial hash grid broadphase (best for dense, uniform-size scenes)

* Defined in [packages/nape-js/src/space/Broadphase.ts:10](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Broadphase.ts#L10)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[DYNAMIC\_AABB\_TREE](#dynamic_aabb_tree)
[SPATIAL\_HASH](#spatial_hash)
[SWEEP\_AND\_PRUNE](#sweep_and_prune)

### Methods

[toString](#tostring)

## Constructors

### constructor

* new Broadphase(): Broadphase

  #### Returns Broadphase

  + Defined in [packages/nape-js/src/space/Broadphase.ts:11](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Broadphase.ts#L11)

## Accessors

### `Static`DYNAMIC\_AABB\_TREE

* get DYNAMIC\_AABB\_TREE(): Broadphase

  #### Returns Broadphase

  + Defined in [packages/nape-js/src/space/Broadphase.ts:17](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Broadphase.ts#L17)

### `Static`SPATIAL\_HASH

* get SPATIAL\_HASH(): Broadphase

  #### Returns Broadphase

  + Defined in [packages/nape-js/src/space/Broadphase.ts:35](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Broadphase.ts#L35)

### `Static`SWEEP\_AND\_PRUNE

* get SWEEP\_AND\_PRUNE(): Broadphase

  #### Returns Broadphase

  + Defined in [packages/nape-js/src/space/Broadphase.ts:26](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Broadphase.ts#L26)

## Methods

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/space/Broadphase.ts:44](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/space/Broadphase.ts#L44)
