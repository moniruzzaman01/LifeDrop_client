import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

export default function RoleGuard({ allowedRoles = [] }) {
  const { user, globalLoading } = useAuth();
  if (globalLoading) return null;

  const { role, roleLoading } = useRole(user.email);
  if (roleLoading) return null;

  if (!allowedRoles.includes(role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
