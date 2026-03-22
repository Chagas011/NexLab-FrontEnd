import { Camera } from "lucide-react"

export function Header() {
  return (
    <header className="h-14 w-full">
      <div className="flex items-center gap-5 border-b-2 p-5">
        <Camera />

        <div>
          <h1 className="text-3xl">Painel de Fotos</h1>
          <p className="text-gray-500">Gerenciamento Administrativo</p>
        </div>
      </div>
    </header>
  )
}
