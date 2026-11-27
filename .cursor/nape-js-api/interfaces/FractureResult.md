Source: https://napejs.org/api/interfaces/FractureResult.html

* FractureResult

# Interface FractureResult

Result of a fracture operation.

interface FractureResult {  
    [fragments](#fragments): [Body](../classes/Body.md)[];  
    [originalBody](#originalbody): [Body](../classes/Body.md);  
}

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:48](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L48)

##### Index

### Properties

[fragments](#fragments)
[originalBody](#originalbody)

## Properties

### fragments

fragments: [Body](../classes/Body.md)[]

The generated fragment bodies.

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:50](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L50)

### originalBody

originalBody: [Body](../classes/Body.md)

The original body that was fractured (removed from space if `addToSpace` is true).

* Defined in [packages/nape-js/src/helpers/fractureBody.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L52)
