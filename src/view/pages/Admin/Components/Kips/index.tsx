import { Card, CardContent } from "@/components/ui/card"
import { Image } from "lucide-react"

interface IKips {
  total: number
}

export function Kips({ total }: IKips) {
  return (
    <Card className="w-sm">
      <CardContent>
        <div className="flex gap-5">
          <Image />

          <div>
            <p>Total de fotos</p>
            <h2 className="text-xl font-semibold">{total}</h2>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
