import { useAuthStore } from "@/store/auth"
import { Navigate, Outlet } from "react-router-dom"

interface AuthGuardProps {
  isPrivate: boolean
  roles?: ("ADMIN" | "PROMOTER")[]
}

export function AuthGuard({ isPrivate, roles }: AuthGuardProps) {
  const { signedIn, role } = useAuthStore()
  console.log("ROLE do Usuario:", role)

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  if (roles && !roles.includes(role as "ADMIN" | "PROMOTER")) {
    return <Navigate to="/unauthorized" replace />
  }
  return <Outlet />
}
