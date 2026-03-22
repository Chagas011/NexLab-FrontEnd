import { httpClient } from "../httpClient"

interface GetPhotoIdParams {
  photoId: string
}

interface GetPhotoByIdResponse {
  photo: {
    id: string
    urlImage: string
    urlQrcode: string
    createdAt: Date
  }
}

export const getPhotoById = async (dataParams: GetPhotoIdParams) => {
  const { data } = await httpClient.get<GetPhotoByIdResponse>(
    `/photos/${dataParams.photoId}`
  )
  console.log(data)
  return data
}
