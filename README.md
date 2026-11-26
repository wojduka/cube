# cube

A small TypeScript canvas app using [@newkrok/nape-js](https://github.com/NewKrok/nape-js) (the published `nape-js` package). `npm start` compiles `src/main.ts` to `dist/main.js`, copies the engine's ESM build next to it, and serves that folder. The page loads the compiled script, which imports `@newkrok/nape-js` through an import map. The package ships its own types; this project resolves them with `moduleResolution: bundler`.

## Run

```bash
git clone https://github.com/wojduka/cube.git ~/pjs/cube
cd ~/pjs/cube
npm install
npm start
```

Then open http://localhost:3000

`npm run build` only compiles. `npm run dev` watches TypeScript and recompiles into `dist/`.
