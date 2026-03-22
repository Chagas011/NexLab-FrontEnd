import { Toaster } from "sonner"
import { Router } from "./Router"

export function App() {
  return (
    <>
      <Router />
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
