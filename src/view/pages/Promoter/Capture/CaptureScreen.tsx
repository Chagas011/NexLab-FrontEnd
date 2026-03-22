import { useCaptureStore } from "@/store/captureStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CameraView } from "../Components/Camera/CameraView"
import { CaptureButton } from "../Components/Camera/CaptureButton"
import { Countdown } from "../Components/Camera/CountDown"
import { useCamera } from "../hooks/useCamera"

export function CaptureScreen() {
  const { videoRef, capture } = useCamera()
  const setPhoto = useCaptureStore((state) => state.setPhoto)

  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(false)
  function startCountdown() {
    setCountdown(true)
  }
  async function handleCapture() {
    try {
      const image = await capture()

      if (!image) return

      setPhoto(image)

      navigate("/review")
    } catch (error) {
      console.error("Erro ao capturar foto", error)
    }
  }

  return (
    <div className="relative h-screen w-full">
      <CameraView videoRef={videoRef} />

      {!countdown && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <CaptureButton onCapture={startCountdown} />
        </div>
      )}

      {countdown && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Countdown seconds={3} onFinish={handleCapture} />
        </div>
      )}
    </div>
  )
}
