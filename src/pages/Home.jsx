import { ArrowRight } from "lucide-react";
import DonationRequests from "../components/DonationRequests";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";

export default function Home() {
  const [donationRequests, setDonationRequests] = useState([]);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    try {
      axiosInstance("/dr/all?status=pending")
        .then(({ data }) => {
          if (data?.data?.length) {
            setDonationRequests(data.data);
          }
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return (
    <div>
      {/* donation requests section */}
      <section id="donation-requests" className="max-w-7xl mx-auto px-4 py-6">
        <div className=" flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Urgent Blood Requests
          </h2>
          <p className=" capitalize flex items-center gap-2 cursor-pointer">
            view more <ArrowRight className=" h-5 w-5" />
          </p>
        </div>
        <DonationRequests donationRequests={donationRequests.slice(0, 6)} />
      </section>
    </div>
  );
}
