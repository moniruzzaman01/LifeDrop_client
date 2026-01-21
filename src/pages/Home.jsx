import { ArrowRight } from "lucide-react";
import DonationRequests from "../components/DonationRequests";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import Awareness from "../components/Awareness";
import WhyDonateBlood from "../components/WhyDonateBlood";
import Statistics from "../components/Statistics";
import FAQ from "../components/FAQ";

export default function Home() {
  const [donationRequests, setDonationRequests] = useState([]);
  const [loading, setLoading] = useState(true);
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
      axiosInstance("/dr/all?status=pending&sort=date") //date->donationDate
        .then(({ data }) => {
          if (data?.data?.length) {
            setDonationRequests(data.data);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          throw new Error(error.message);
        });
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <Awareness />
      </section>
      {/* donation requests section */}
      <section id="donation-requests" className="max-w-7xl mx-auto px-4 py-6">
        <div className=" flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Urgent Blood Requests
          </h2>
          <Link
            to="/all-donation-requests"
            className=" capitalize flex items-center gap-2 cursor-pointer"
          >
            view more <ArrowRight className=" h-5 w-5" />
          </Link>
        </div>
        <DonationRequests donationRequests={donationRequests.slice(0, 6)} />
      </section>
      <section className="max-w-7xl mx-auto">
        <WhyDonateBlood />
      </section>
      <section className="max-w-7xl mx-auto">
        <Statistics />
      </section>
      <section className="max-w-7xl mx-auto">
        <FAQ />
      </section>
    </div>
  );
}
