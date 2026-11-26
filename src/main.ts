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

const space = new Space(new Vec2(0, 600))

const floor = new Body(BodyType.STATIC, new Vec2(0, canvas.height - 50))
floor.shapes.add(new Polygon(Polygon.box(canvas.width, 50)))
floor.space = space

const squares: Body[] = []

const addSquare = () => {
  const square = new Body(
    BodyType.DYNAMIC,
    new Vec2(canvas.width / 2, canvas.height / 2),
  )
  square.shapes.add(new Polygon(Polygon.box(20, 20)))
  square.space = space
  squares.push(square)
}

canvas.addEventListener("click", addSquare)

draw()

function draw(): void {
  space.step(1 / 60)

  ctx.fillStyle = "#000000"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (const square of squares) {
    const shape = square.shapes.at(0) as Polygon
    const verts = shape.worldVerts as VertexList

    ctx.strokeStyle = "#ffff00"
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
  ctx.strokeStyle = "#555555"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(floor.position.x, floor.position.y)
  ctx.lineTo(floor.position.x + floor.shapes.at(0)?.bounds.width, floor.position.y)
  ctx.stroke()
  requestAnimationFrame(draw)
}
