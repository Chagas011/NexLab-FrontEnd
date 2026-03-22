import { useEffect, useRef } from "react"

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    async function startCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          facingMode: "user",
        },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    }

    startCamera()
  }, [])

  const capture = async () => {
    const video = videoRef.current
    if (!video) return null

    const canvas = document.createElement("canvas")

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    ctx.drawImage(video, 0, 0)

    return canvas.toDataURL("image/jpeg", 0.9)
  }

  return {
    videoRef,
    capture,
  }
}
