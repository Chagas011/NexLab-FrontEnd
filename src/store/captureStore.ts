import { create } from "zustand"

interface CaptureState {
  photo: string | null
  setPhoto: (photo: string) => void
  clearPhoto: () => void
}

export const useCaptureStore = create<CaptureState>((set) => ({
  photo: null,

  setPhoto: (photo) => set({ photo }),

  clearPhoto: () => set({ photo: null }),
}))
