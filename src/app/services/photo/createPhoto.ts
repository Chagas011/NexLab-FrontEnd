import { httpClient } from "../httpClient"

interface PhotoParams {
  file: {
    type: string
    size: number
  }
}

interface PhotoResponse {
  filekey: string
  uploadSignature: string
  photoId: string
}
export const createPhoto = async (dataParams: PhotoParams) => {
  const { data } = await httpClient.post<PhotoResponse>("/photos", dataParams)

  return data
}
