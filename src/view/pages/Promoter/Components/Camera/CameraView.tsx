import { FrameOverlay } from "./FrameOverlay"

interface ICameraViewProps {
  videoRef: React.RefObject<HTMLVideoElement | null>
}

export function CameraView({ videoRef }: ICameraViewProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      />

      {/* MOLDURA */}
      <FrameOverlay />
    </div>
  )
}
