# nape-js

API reference copied from https://napejs.org/api/ lives in `.claude/nape-js-api/README.md` (same tree in `.cursor/nape-js-api/`).

Before calling `@newkrok/nape-js`, read the matching page under `.claude/nape-js-api/` (classes, interfaces, functions, types). Do not guess signatures.

- `Polygon.box(width, height?)` is centred on the body origin. `Polygon.rect(x, y, width, height)` takes a left and top edge.
- Add or remove a body with `body.space = space` or `body.space = null`.
- `Space.step(deltaTime)` takes seconds.
