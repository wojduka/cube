const canvas = document.getElementById("stage")

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("Canvas element #stage was not found")
}

const context = canvas.getContext("2d")

if (!context) {
  throw new Error("Canvas 2D context is unavailable")
}

draw(context, canvas)

function draw(ctx: CanvasRenderingContext2D, surface: HTMLCanvasElement): void {
  ctx.clearRect(0, 0, surface.width, surface.height)

  ctx.fillStyle = "#1b2838"
  ctx.fillRect(0, 0, surface.width, surface.height)

  ctx.fillStyle = "#3d8bfd"
  ctx.fillRect(220, 140, 200, 200)
}
