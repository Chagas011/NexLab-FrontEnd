import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { QrCodeDialog } from "../QrCodeDialog"

interface Photo {
  id: string
  urlImage: string
  urlQrcode: string
  createdAt: Date
}

interface PhotosProps {
  photos: Photo[]
  page: number
  limit: number
  isLoading?: boolean
  hasNextPage: boolean
  hasPrevPage: boolean

  onLimitChange: (limit: number) => void
  onNextPage: () => void
  onPrevPage: () => void
}
export function Photos({
  hasNextPage,
  hasPrevPage,
  limit,
  onLimitChange,
  onNextPage,
  onPrevPage,
  page,
  photos,
  isLoading,
}: PhotosProps) {
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false)
  const [selectedQrCode, setSelectedQrCode] = useState<string | null>(null)

  function handleOpenQrCode(qrCodeUrl: string) {
    setSelectedQrCode(qrCodeUrl)
    setIsQrCodeOpen(true)
  }
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h1>Fotos</h1>

        <div className="flex items-center gap-2">
          <p>Por pagina: </p>
          <Select
            defaultValue={String(limit)}
            onValueChange={(value) => onLimitChange(Number(value))}
          >
            <SelectTrigger className="h-8 w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="mt-9">
              {[4, 6, 12, 24, 48].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        {isLoading && <p>Carregando...</p>}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {photos.map((photo) => (
            <>
              <button
                onClick={() => handleOpenQrCode(photo.urlQrcode)}
                key={photo.id}
                className="group relative aspect-square w-full max-w-50 overflow-hidden rounded-lg border border-border bg-muted transition-all hover:ring-2 hover:ring-primary/60 focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <img
                  src={photo.urlImage}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            </>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button
            onClick={onPrevPage}
            disabled={!hasPrevPage}
            className="rounded border px-3 py-1 disabled:opacity-40"
          >
            Anterior
          </Button>

          <span className="text-sm font-medium">Página {page}</span>

          <Button
            onClick={onNextPage}
            disabled={!hasNextPage}
            className="rounded border px-3 py-1 disabled:opacity-40"
          >
            Próxima
          </Button>
        </div>

        <QrCodeDialog
          open={isQrCodeOpen}
          urlQrCode={selectedQrCode ?? ""}
          onClose={() => setIsQrCodeOpen(false)}
        />
      </CardContent>
    </Card>
  )
}
