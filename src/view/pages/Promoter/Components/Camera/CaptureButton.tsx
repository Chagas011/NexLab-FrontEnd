import { Button } from "@/components/ui/button"

interface ICaptureButtonProps {
  onCapture: () => void
}
export function CaptureButton({ onCapture }: ICaptureButtonProps) {
  return (
    <div className="flex justify-center rounded-full">
      <Button
        onClick={onCapture}
        className="h-20 w-20 rounded-full border-4 border-[#5c5a5a] bg-white"
      >
        Capturar
      </Button>
    </div>
  )
}
