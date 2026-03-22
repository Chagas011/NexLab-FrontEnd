import { login } from "@/app/services/loginAuth"
import { useAuthStore } from "@/store/auth"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export const useLogin = () => {
  const { setAuth } = useAuthStore()

  return useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      if (data) {
        setAuth(data.accessToken)
      }

      toast.success("Login realizado com sucesso")
    },

    onError: () => {
      toast.error("Credenciais Incorretas")
    },
  })
}
