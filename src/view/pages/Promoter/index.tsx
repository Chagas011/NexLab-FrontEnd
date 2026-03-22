import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Promoter() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen w-full flex-col justify-around">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="flex flex-col items-center justify-center -space-y-6.25">
        <h1 className="text-[100px] font-semibold">Photo </h1>

        <h1 className="text-[100px] font-semibold">Opp </h1>
      </div>

      <div className="flex justify-center p-5">
        <Button className="h-15 w-full" onClick={() => navigate("/camera")}>
          Iniciar
        </Button>
      </div>
    </div>
  )
}
