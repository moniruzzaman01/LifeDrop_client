import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/useAxios";
import { toast } from "sonner";
import { TableSkeleton } from "../components/TableSkeleton";
import UsersTable from "../components/tables/UsersTable";
import { Users } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

export default function UsersPage() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/users/all")
      .then(({ data }) => {
        setusers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong with error:" + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div>
      <SectionTitle title="all users" icon={Users} />
      <UsersTable data={users} />
    </div>
  );
}
