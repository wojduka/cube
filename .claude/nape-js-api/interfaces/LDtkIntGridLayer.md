Source: https://napejs.org/api/interfaces/LDtkIntGridLayer.html

* LDtkIntGridLayer

# Interface LDtkIntGridLayer

Subset of an LDtk IntGrid layer instance needed for grid extraction.

interface LDtkIntGridLayer {  
    [\_\_cHei](#__chei)?: number;  
    [\_\_cWid](#__cwid)?: number;  
    [cHei](#chei)?: number;  
    [cWid](#cwid)?: number;  
    [intGridCsv](#intgridcsv): ArrayLike<number>;  
}

* Defined in [packages/nape-js/src/helpers/tilemap.ts:97](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L97)

##### Index

### Properties

[\_\_cHei?](#__chei)
[\_\_cWid?](#__cwid)
[cHei?](#chei)
[cWid?](#cwid)
[intGridCsv](#intgridcsv)

## Properties

### `Optional`\_\_cHei

\_\_cHei?: number

Cell-grid height (LDtk's `__cHei`, falls back to `cHei`).

* Defined in [packages/nape-js/src/helpers/tilemap.ts:103](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L103)

### `Optional`\_\_cWid

\_\_cWid?: number

Cell-grid width (LDtk's `__cWid`, falls back to `cWid`).

* Defined in [packages/nape-js/src/helpers/tilemap.ts:101](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L101)

### `Optional`cHei

cHei?: number

Alternate height key.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:107](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L107)

### `Optional`cWid

cWid?: number

Alternate width key.

* Defined in [packages/nape-js/src/helpers/tilemap.ts:105](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L105)

### intGridCsv

intGridCsv: ArrayLike<number>

Row-major flat array of int values (0 = empty).

* Defined in [packages/nape-js/src/helpers/tilemap.ts:99](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/tilemap.ts#L99)
