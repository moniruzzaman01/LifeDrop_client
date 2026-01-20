import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/useAxios";
import { toast } from "sonner";
import { TableSkeleton } from "../components/TableSkeleton";
import UsersTable from "../components/tables/UsersTable";
import { Droplets } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import DRsTable from "../components/tables/DRsTable";

export default function DRs() {
  const [donationRequests, setDonationRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/dr/all")
      .then(({ data }) => {
        setDonationRequests(data.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong with error:" + error.message);
        setLoading(false);
      });
  }, []);
  console.log(donationRequests);

  if (loading) {
    return <TableSkeleton />;
  }
  return (
    <div>
      <SectionTitle title="Donation Requests" icon={Droplets} />
      <DRsTable data={donationRequests} />
    </div>
  );
}
