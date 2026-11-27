Source: https://napejs.org/api/classes/Contact.html

* Contact

# Class Contact

Represents a contact point between two colliding shapes.

Contacts are pooled internally by the engine — they cannot be created directly.
Access contacts via `CollisionArbiter.contacts`.

Fully modernized — wraps extracted ZPP\_Contact directly.

* Defined in [packages/nape-js/src/dynamics/Contact.ts:18](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L18)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[arbiter](#arbiter)
[fresh](#fresh)
[friction](#friction)
[penetration](#penetration)
[position](#position)

### Methods

[normalImpulse](#normalimpulse)
[rollingImpulse](#rollingimpulse)
[tangentImpulse](#tangentimpulse)
[toString](#tostring)
[totalImpulse](#totalimpulse)

## Constructors

### constructor

* new Contact(): Contact

  #### Returns Contact

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:22](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L22)

## Accessors

### arbiter

* get arbiter(): [CollisionArbiter](CollisionArbiter.md) | null

  The collision arbiter this contact belongs to, or null.

  #### Returns [CollisionArbiter](CollisionArbiter.md) | null

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:34](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L34)

### fresh

* get fresh(): boolean

  Whether this contact was newly created in the current step.

  #### Returns boolean

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:61](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L61)

### friction

* get friction(): number

  Friction value for this contact.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:67](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L67)

### penetration

* get penetration(): number

  Penetration depth of this contact (positive = overlapping).

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:46](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L46)

### position

* get position(): [Vec2](Vec2.md)

  World-space position of this contact point.

  #### Returns [Vec2](Vec2.md)

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:52](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L52)

## Methods

### normalImpulse

* normalImpulse(body?: [Body](Body.md) | null): [Vec3](Vec3.md)

  Normal impulse at this contact point.

  #### Parameters

  + body: [Body](Body.md) | null = null

    If null, returns world-frame impulse. Otherwise returns
    impulse on the given body (must be one of the two in contact).

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:81](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L81)

### rollingImpulse

* rollingImpulse(body?: [Body](Body.md) | null): number

  Rolling impulse at this contact point.

  #### Parameters

  + body: [Body](Body.md) | null = null

    If null, returns total rolling impulse. Otherwise returns
    rolling impulse on the given body.

  #### Returns number

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:137](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L137)

### tangentImpulse

* tangentImpulse(body?: [Body](Body.md) | null): [Vec3](Vec3.md)

  Tangent impulse at this contact point.

  #### Parameters

  + body: [Body](Body.md) | null = null

    If null, returns world-frame impulse. Otherwise returns
    impulse on the given body.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:109](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L109)

### toString

* toString(): string

  #### Returns string

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:180](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L180)

### totalImpulse

* totalImpulse(body?: [Body](Body.md) | null): [Vec3](Vec3.md)

  Total impulse (normal + tangent + rolling) at this contact point.

  #### Parameters

  + body: [Body](Body.md) | null = null

    If null, returns world-frame impulse. Otherwise returns
    impulse on the given body.

  #### Returns [Vec3](Vec3.md)

  + Defined in [packages/nape-js/src/dynamics/Contact.ts:153](https://github.com/NewKrok/nape-js/blob/76ab342568c24fbd37f12086775ed4bb2025337d/packages/nape-js/src/dynamics/Contact.ts#L153)
