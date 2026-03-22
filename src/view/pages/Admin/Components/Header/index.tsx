import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/auth"
import { Camera } from "lucide-react"

export function Header() {
  const { logout } = useAuthStore()
  return (
    <header className="h-14 w-full">
      <div className="flex items-center justify-between gap-5 border-b-2 p-5">
        <div className="flex items-center gap-3">
          <Camera />

          <div>
            <h1 className="text-3xl">Painel de Fotos</h1>
            <p className="text-gray-500">Gerenciamento Administrativo</p>
          </div>
        </div>

        <div>
          <Button className="w-20" onClick={logout}>
            Sair
          </Button>
        </div>
      </div>
    </header>
  )
}
