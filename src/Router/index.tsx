import { Login } from "@/view/pages/Login"

import { AdminDashboard } from "@/view/pages/Admin"
import { HomeRedirect } from "@/view/pages/HomeRedirect"
import { Promoter } from "@/view/pages/Promoter"

import { PhotoPage } from "@/view/pages/PhotoPage"
import { CaptureScreen } from "@/view/pages/Promoter/Capture/CaptureScreen"
import { ReviewScreen } from "@/view/pages/Promoter/Capture/ReviewScreen"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthGuard } from "./AuthGuard"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<HomeRedirect />} />

          {/* ADMIN */}
          <Route element={<AuthGuard isPrivate roles={["ADMIN"]} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          {/* PROMOTER */}
          <Route element={<AuthGuard isPrivate roles={["PROMOTER"]} />}>
            <Route path="/promoter" element={<Promoter />} />
            <Route path="/camera" element={<CaptureScreen />} />
            <Route path="/review" element={<ReviewScreen />} />
            <Route path="/photo/:photoId" element={<PhotoPage />} />
          </Route>
        </Route>

        {/* ROTAS PUBLICAS */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
