import { getPhotoById } from "@/app/services/photo/getPhotoById"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

interface IUseGetPhotoByIdParams {
  photoId: string
}
export const useGetPhotoById = ({ photoId }: IUseGetPhotoByIdParams) => {
  return useQuery({
    queryKey: ["photo", photoId],
    queryFn: async () => {
      try {
        const data = await getPhotoById({ photoId })
        return data
      } catch (error) {
        toast.error("Erro ao acessar Imagem")

        throw error
      }
    },
    retry: false,
    refetchOnWindowFocus: false,

    refetchInterval: (query) => {
      if (!query.state.data?.photo.urlQrcode) {
        return 1000
      }

      return false
    },
  })
}
