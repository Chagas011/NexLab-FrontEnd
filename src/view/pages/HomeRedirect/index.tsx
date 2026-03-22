import { useAuthStore } from "@/store/auth"
import { Navigate } from "react-router-dom"

export function HomeRedirect() {
  const { role } = useAuthStore()

  if (role === "ADMIN") {
    return <Navigate to="/admin" replace />
  }

  if (role === "PROMOTER") {
    return <Navigate to="/promoter" replace />
  }

  return null
}
