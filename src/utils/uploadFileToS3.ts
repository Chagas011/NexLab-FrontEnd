export async function uploadFileToS3(uploadSignature: string, file: File) {
  console.log("uploadSignature", uploadSignature)
  console.log("file", file)

  const decoded = atob(uploadSignature)
  console.log("decoded", decoded)

  const { url, fields } = JSON.parse(decoded)

  console.log("url", url)
  console.log("fields", fields)

  const formData = new FormData()

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value as string)
  })

  formData.append("file", file)

  console.log("ENVIANDO PARA S3")

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    const text = await response.text()
    console.error("S3 ERROR:", text)
    throw new Error("Upload failed")
  }
}
