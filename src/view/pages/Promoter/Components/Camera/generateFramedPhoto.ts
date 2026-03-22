import { canvasToBlob } from "@/utils/canvasToBlob"

export async function generateFramedPhoto(
  imagem: string
): Promise<Blob | null> {
  const canvas = document.createElement("canvas")

  const width = 1080
  const height = 1920

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    return null
  }
  const image = new Image()

  await new Promise((resolve) => {
    image.onload = resolve
    image.src = imagem
  })
  canvas.width = width
  canvas.height = height
  const headerHeight = 200
  const footerHeight = 200

  const photoHeight = height - headerHeight - footerHeight

  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, width, height)

  ctx.drawImage(image, 0, headerHeight, width, photoHeight)

  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, width, headerHeight)

  ctx.fillStyle = "#000000"
  ctx.font = "bold 60px Titillium Web"
  ctx.fillText("NEX.lab", 60, 120)

  ctx.font = "40px Titillium Web"
  ctx.fillText("we make tech simple_", 600, 120)

  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, height - footerHeight, width, footerHeight)

  ctx.fillStyle = "#000"
  ctx.font = "40px Titillium Web"
  ctx.fillText("we make tech simple_", 300, height - 80)

  return canvasToBlob(canvas)
}
