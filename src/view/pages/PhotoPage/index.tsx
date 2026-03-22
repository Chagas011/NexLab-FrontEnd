import { useNavigate, useParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { useGetPhotoById } from "@/hooks/photos/useGetPhotoById"

import { handleDownload } from "@/utils/handleDownload"
import { Download } from "lucide-react"

export function PhotoPage() {
  const { photoId } = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = useGetPhotoById({
    photoId: photoId!,
  })

  const qrCodeUrl = data?.photo.urlQrcode

  return (
    <div className="flex h-screen w-full flex-col items-center bg-white">
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        {(isLoading || !qrCodeUrl) && (
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
            <p className="text-sm text-gray-500">Gerando QRCode...</p>
          </div>
        )}

        {qrCodeUrl && (
          <>
            <img src={qrCodeUrl} alt="QRCode" className="w-72 max-w-full" />

            <Button
              onClick={() => handleDownload(qrCodeUrl)}
              className="flex items-center gap-2 rounded-lg bg-black px-6 py-5 text-white hover:bg-gray-800"
            >
              <Download size={18} />
              Baixar QRCode
            </Button>
          </>
        )}
      </div>

      <div className="flex w-full items-center justify-center bg-black p-4">
        <Button
          onClick={() => navigate("/promoter")}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-6 text-sm text-white hover:bg-gray-800"
        >
          Finalizar
        </Button>
      </div>
    </div>
  )
}
