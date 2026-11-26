import { Body, BodyType, Polygon, Space, Vec2 } from "@newkrok/nape-js"

type VertexList = {
  readonly length: number
  at(index: number): { x: number; y: number }
}

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

const space = new Space(new Vec2(0, 0))
const square = new Body(
  BodyType.STATIC,
  new Vec2(canvas.width / 2, canvas.height / 2),
)
square.shapes.add(new Polygon(Polygon.box(120, 120)))
square.space = space

draw()

function draw(): void {
  space.step(1 / 60)

  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const shape = square.shapes.at(0) as Polygon
  const verts = shape.worldVerts as VertexList

  ctx.fillStyle = "#000000"
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
  ctx.fill()

  requestAnimationFrame(draw)
}
