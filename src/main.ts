import { Body, BodyType, Polygon, Space, Vec2 } from "@newkrok/nape-js"

type VertexList = {
  readonly length: number
  at(index: number): { x: number; y: number }
}

type Color = {
  name: string
  hex: string
}

type Square = {
  body: Body
  color: Color
}

const palette: Color[] = [
  { name: "yellow", hex: "#ffff00" },
  { name: "cyan", hex: "#00e5ff" },
  { name: "magenta", hex: "#ff4dff" },
  { name: "orange", hex: "#ff8800" },
  { name: "lime", hex: "#b6ff00" },
  { name: "red", hex: "#ff3355" },
]

const stage = document.getElementById("stage")

if (!(stage instanceof HTMLCanvasElement)) {
  throw new Error("Canvas element #stage was not found")
}

const canvas: HTMLCanvasElement = stage
const context = canvas.getContext("2d")

if (!context) {
  throw new Error("Canvas 2D context is unavailable")
}

const ctx: CanvasRenderingContext2D = context

const space = new Space(new Vec2(0, 600))

const floorWidth = canvas.width
const floorHeight = 50
const floor = new Body(
  BodyType.STATIC,
  new Vec2(floorWidth / 2, canvas.height - floorHeight / 2),
)
floor.shapes.add(new Polygon(Polygon.box(floorWidth, floorHeight)))
floor.space = space

const squares: Square[] = []
let colorIndex = 0

const addSquare = (x: number, y: number) => {
  const color = palette[colorIndex % palette.length]
  colorIndex += 1

  const body = new Body(BodyType.DYNAMIC, new Vec2(x, y))
  body.shapes.add(new Polygon(Polygon.box(20, 20)))
  body.space = space
  squares.push({ body, color })
}

function getCursorPosition(canvas: HTMLCanvasElement, event: MouseEvent): [number, number] {
  const rect = canvas.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * canvas.width
  const y = ((event.clientY - rect.top) / rect.height) * canvas.height
  return [x, y]
}

canvas.addEventListener("click", (event) => addSquare(...getCursorPosition(canvas, event)))

draw()

function draw(): void {
  space.step(1 / 60)

  ctx.fillStyle = "#000000"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (const square of squares) {
    drawSquare(square)
  }

  const floorBounds = floor.shapes.at(0)?.bounds
  if (floorBounds) {
    ctx.strokeStyle = "#555555"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(floorBounds.x, floorBounds.y + 2)
    ctx.lineTo(floorBounds.x + floorBounds.width, floorBounds.y + 2)
    ctx.stroke()
  }

  drawDebug()
  requestAnimationFrame(draw)
}

function drawSquare(square: Square): void {
  const shape = square.body.shapes.at(0) as Polygon
  const verts = shape.worldVerts as VertexList

  ctx.strokeStyle = square.color.hex
  ctx.lineWidth = 2
  ctx.beginPath()
  for (let index = 0; index < verts.length; index += 1) {
    const vertex = verts.at(index)
    if (index === 0) {
      ctx.moveTo(vertex.x, vertex.y)
    } else {
      ctx.lineTo(vertex.x, vertex.y)
    }
  }
  ctx.closePath()
  ctx.stroke()
}

function drawDebug(): void {
  const square = squares.at(-1)
  const lines = debugLines(square)
  const pad = 10
  const lineHeight = 18
  const swatch = 12
  const originX = 12
  const originY = 12

  ctx.font = "14px ui-monospace, monospace"
  ctx.textBaseline = "top"

  let textWidth = 0
  for (const line of lines) {
    textWidth = Math.max(textWidth, ctx.measureText(line).width)
  }
  const extra = square ? swatch + 8 : 0
  const panelWidth = textWidth + extra + pad * 2
  const panelHeight = lines.length * lineHeight + pad * 2

  ctx.fillStyle = "rgba(16, 16, 16, 0.88)"
  ctx.fillRect(originX, originY, panelWidth, panelHeight)
  ctx.strokeStyle = "#9a9a9a"
  ctx.lineWidth = 1
  ctx.strokeRect(originX, originY, panelWidth, panelHeight)

  ctx.fillStyle = "#f4f4f4"
  for (let index = 0; index < lines.length; index += 1) {
    ctx.fillText(lines[index], originX + pad, originY + pad + index * lineHeight)
  }

  if (square) {
    const colorLine = lines[lines.length - 1]
    ctx.fillStyle = square.color.hex
    ctx.fillRect(
      originX + pad + ctx.measureText(colorLine).width + 8,
      originY + pad + (lines.length - 1) * lineHeight + 1,
      swatch,
      swatch,
    )
  }
}

function debugLines(square: Square | undefined): string[] {
  if (!square) {
    return ["no box"]
  }

  const { x, y } = square.body.position
  const velocity = square.body.velocity
  return [
    `x ${x.toFixed(1)}   y ${y.toFixed(1)}`,
    `vx ${velocity.x.toFixed(1)}   vy ${velocity.y.toFixed(1)}   |v| ${velocity.length.toFixed(1)}`,
    `${square.color.name}  ${square.color.hex}`,
  ]
}
