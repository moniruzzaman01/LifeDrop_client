import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/auth/context";
import axiosInstance from "../hooks/useAxios";
import DonationRequests from "../components/DonationRequests";
import DonationRequestsSkeleton from "../components/skeletons/DonationRequestsSkeleton";

export default function MyDRPage() {
  const { user } = use(AuthContext);
  const [myDonationRequest, setMyDonationRequest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance("/dr/requester/" + user._id)
      .then(({ data }) => {
        setLoading(false);
        setMyDonationRequest(data.data);
      })
      .catch((error) => {
        setLoading(false);
        throw new Error(error.message);
      });
  }, []);

  if (loading) {
    return <DonationRequestsSkeleton />;
  }

  return (
    <section id="donation-requests" className="max-w-7xl mx-auto px-4 py-6">
      <div className=" flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          My Donation Requests
        </h2>
        <Button className=" cursor-pointer">
          <PlusCircle className="size-4" />
          Create DR
        </Button>
      </div>
      <DonationRequests donationRequests={myDonationRequest} />
    </section>
  );
}
