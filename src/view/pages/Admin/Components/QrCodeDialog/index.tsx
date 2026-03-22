import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { handleDownload } from "@/utils/handleDownload"
import { Download, QrCode } from "lucide-react"

interface IQrCodeDialog {
  urlQrCode: string
  onClose: () => void
  open: boolean
}
export function QrCodeDialog({ onClose, open, urlQrCode }: IQrCodeDialog) {
  console.log(urlQrCode)
  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-5 py-4">
          <div className="bg-white">
            <img
              src={urlQrCode}
              className="aspect-square w-full max-w-50 rounded-lg border border-border object-cover"
            />
          </div>

          <Button
            onClick={() => handleDownload(urlQrCode)}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Baixar QR Code
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
