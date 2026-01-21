import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function AuthGuard() {
  const { user, globalLoading } = useAuth();

  if (globalLoading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
