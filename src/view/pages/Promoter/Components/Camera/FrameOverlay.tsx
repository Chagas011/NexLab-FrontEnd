export function FrameOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
      {/* HEADER */}
      <div className="flex items-center justify-between bg-white px-6 py-4">
        <div className="font-bold">NEX.lab</div>
        <div className="text-sm">we make tech simple_</div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-center bg-white py-4 text-sm">
        we make tech simple_
      </div>
    </div>
  )
}
