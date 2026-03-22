import { useCaptureStore } from "@/store/captureStore"

import { Button } from "@/components/ui/button"

import { useCreatePhoto } from "@/hooks/photos/useCreatePhoto"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { generateFramedPhoto } from "../Components/Camera/generateFramedPhoto"

export function ReviewScreen() {
  const photo = useCaptureStore((s) => s.photo)
  const navigate = useNavigate()
  const [finalBlob, setFinalBlob] = useState<Blob | null>(null)
  const { mutateAsync, isPending } = useCreatePhoto()

  useEffect(() => {
    async function process() {
      if (!photo) return

      const blob = await generateFramedPhoto(photo)

      setFinalBlob(blob)
    }

    process()
  }, [photo])

  if (!finalBlob) return null
  const previewUrl = URL.createObjectURL(finalBlob)
  async function handleContinue() {
    const file = new File([finalBlob!], "photo.png", {
      type: "image/png",
    })

    const photoId = await mutateAsync(file)

    navigate(`/photo/${photoId}`)
  }
  return (
    <div className="flex h-screen w-screen flex-col bg-black">
      {/* FOTO */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <img
          src={previewUrl}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* BOTÕES */}
      <div className="flex w-full gap-4 p-6">
        <Button className="h-14 flex-1" onClick={() => navigate("/")}>
          Refazer
        </Button>

        <Button
          className="h-14 flex-1"
          onClick={handleContinue}
          disabled={isPending}
        >
          {isPending ? "Carregando..." : "Continuar"}
        </Button>
      </div>
    </div>
  )
}
