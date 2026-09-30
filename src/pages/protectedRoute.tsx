import { Navigate, Outlet } from "react-router-dom"

type ProtectedRouteProps = { role: "member" | "owner" }

function ProtectedRoute({ role }: ProtectedRouteProps) {
  const authenticated = localStorage.getItem("isAuthenticated") === "true"
  const currentRole = localStorage.getItem("currentRole")

  if (!authenticated) return <Navigate to="/login" replace />
  if (currentRole !== role) return <Navigate to={currentRole === "member" ? "/member" : "/owner"} replace />

  return <Outlet />
}

export default ProtectedRoute