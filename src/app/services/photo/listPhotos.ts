import { httpClient } from "../httpClient"

interface ListPhotosParams {
  cursor?: string | null
  limit: number
  from?: string
  to?: string
}

export interface ListPhotosResponse {
  photos: {
    id: string
    urlImage: string
    urlQrcode: string
    createdAt: Date
  }[]
  nextCursor?: string | null
}

export const listPhotos = async ({
  cursor,
  limit,
  from,
  to,
}: ListPhotosParams) => {
  const { data } = await httpClient.get<ListPhotosResponse>("/photos", {
    params: { cursor, limit, from, to },
  })

  return data
}
