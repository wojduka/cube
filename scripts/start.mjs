import { spawn } from "node:child_process"
import { watch } from "node:fs"
import { readFile, stat } from "node:fs/promises"
import { createServer } from "node:http"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const port = 3000
const clients = new Set()

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
}

const reloadClient = `<script>
const source = new EventSource("/__reload")
source.addEventListener("reload", () => location.reload())
</script>`

function build() {
  return new Promise((resolve, reject) => {
    const child = spawn("npm", ["run", "build"], {
      cwd: root,
      stdio: "inherit",
    })
    child.on("exit", (code) => {
      if (code === 0) {
        resolve()
        return
      }
      reject(new Error(`build exited with ${code}`))
    })
  })
}

function notify() {
  for (const response of clients) {
    response.write("event: reload\ndata: reload\n\n")
  }
}

let timer = null
let building = false
let queued = false

function scheduleRebuild() {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    timer = null
    void rebuild()
  }, 80)
}

async function rebuild() {
  if (building) {
    queued = true
    return
  }
  building = true
  try {
    await build()
    notify()
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
  } finally {
    building = false
    if (queued) {
      queued = false
      scheduleRebuild()
    }
  }
}

function watchSources() {
  for (const directory of ["src", "public"]) {
    watch(path.join(root, directory), { recursive: true }, scheduleRebuild)
  }
}

async function serveFile(requestPath, response) {
  const relative = requestPath === "/" ? "/index.html" : requestPath
  const filePath = path.join(dist, path.normalize(relative))
  if (!filePath.startsWith(dist)) {
    response.writeHead(403)
    response.end()
    return
  }
  let fileStat
  try {
    fileStat = await stat(filePath)
  } catch {
    response.writeHead(404)
    response.end("Not found")
    return
  }
  if (!fileStat.isFile()) {
    response.writeHead(404)
    response.end("Not found")
    return
  }
  const body = await readFile(filePath)
  const ext = path.extname(filePath)
  if (ext === ".html") {
    const html = body
      .toString("utf8")
      .replace("</body>", `${reloadClient}</body>`)
    response.writeHead(200, { "content-type": types[".html"] })
    response.end(html)
    return
  }
  response.writeHead(200, {
    "content-type": types[ext] ?? "application/octet-stream",
  })
  response.end(body)
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://127.0.0.1:${port}`)
  if (url.pathname === "/__reload") {
    response.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive",
    })
    response.write(": connected\n\n")
    clients.add(response)
    request.on("close", () => {
      clients.delete(response)
    })
    return
  }
  void serveFile(decodeURIComponent(url.pathname), response)
})

await build()
watchSources()
server.listen(port, () => {
  console.log(`http://localhost:${port}`)
  console.log("Saving src/ or public/ rebuilds and reloads the browser")
})
