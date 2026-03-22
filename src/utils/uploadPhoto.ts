import { createPhoto } from "@/app/services/photo/createPhoto"
import { uploadFileToS3 } from "./uploadFileToS3"

export async function uploadPhoto(file: File) {
  const { uploadSignature, photoId } = await createPhoto({
    file: {
      type: file.type,
      size: file.size,
    },
  })

  await uploadFileToS3(uploadSignature, file)

  return photoId
}
