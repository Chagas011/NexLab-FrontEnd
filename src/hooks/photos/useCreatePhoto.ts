import { uploadPhoto } from "@/utils/uploadPhoto"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useCreatePhoto = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: uploadPhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["photo"],
      })
      toast.success("Imagem criada com sucesso")
    },

    onError: (error) => {
      toast.error("error ao criar imagem")
      console.log("deu esse errp", error)
    },
  })
}
