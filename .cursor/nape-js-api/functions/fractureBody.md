Source: https://napejs.org/api/functions/fractureBody.html

* fractureBody

# Function fractureBody

* fractureBody(  
      body: [Body](../classes/Body.md),  
      impactPoint: [Vec2](../classes/Vec2.md),  
      options?: [FractureOptions](../interfaces/FractureOptions.md),  
  ): [FractureResult](../interfaces/FractureResult.md)

  Fracture a body into multiple pieces using Voronoi decomposition.

  Takes the first polygon shape on the body, generates Voronoi cells within it,
  clips each cell to the original polygon, and creates a new dynamic body for
  each fragment. Fragments inherit the original body's linear and angular
  velocity, plus an optional radial explosion impulse.

  #### Parameters

  + body: [Body](../classes/Body.md)

    The body to fracture. Must have at least one polygon shape.
  + impactPoint: [Vec2](../classes/Vec2.md)

    World-space point where the fracture originates.
    Used as the center bias for site generation and explosion impulse direction.
  + `Optional`options: [FractureOptions](../interfaces/FractureOptions.md)

    Fracture configuration.

  #### Returns [FractureResult](../interfaces/FractureResult.md)

  A `FractureResult` with the array of fragment bodies.

  #### Throws

  If the body has no polygon shapes.

  #### Example

  ```
  const result = fractureBody(box, Vec2.get(100, 50), {  
    fragmentCount: 12,  
    explosionImpulse: 200,  
  });  
  // result.fragments are already in the space
  Copy
  ```

  + Defined in [packages/nape-js/src/helpers/fractureBody.ts:80](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/helpers/fractureBody.ts#L80)
