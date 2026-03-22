export async function handleDownload(qrCodeUrl: string) {
  const response = await fetch(qrCodeUrl)
  const blob = await response.blob()

  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = "qrcode.png"
  a.click()
}
