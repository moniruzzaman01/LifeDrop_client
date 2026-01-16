import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/useAxios";
import { toast } from "sonner";
import { TableSkeleton } from "../components/TableSkeleton";
import UsersTable from "../components/tables/UsersTable";
import { CircleCheckBig, CircleX, HandFist, Users } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSearchParams } from "react-router";

export default function UsersPage() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const status = searchParams.get("status");
  const title = role ? role + "s" : status + " users";
  const icon =
    role == "admin"
      ? Users
      : role == "volunteer"
      ? HandFist
      : status == "active"
      ? CircleCheckBig
      : CircleX;

  useEffect(() => {
    let url = "/users/all";
    if (role) {
      url = `/users/all?role=${role}`;
    }
    if (status) {
      url = `/users/all?status=${status}`;
    }

    axiosInstance
      .get(url)
      .then(({ data }) => {
        setusers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong with error:" + error.message);
        setLoading(false);
      });
  }, [role, status]);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div>
      <SectionTitle title={title} icon={icon} />
      <UsersTable data={users} />
    </div>
  );
}
