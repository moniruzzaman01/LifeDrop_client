import { useEffect, useState } from "react";
import DonationRequests from "../components/DonationRequests";
import axiosInstance from "../hooks/useAxios";
import DonationRequestsSkeleton from "../components/skeletons/DonationRequestsSkeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

export default function AllDRsPage() {
  const dataPerPage = 6;
  const [donationRequests, setDonationRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axiosInstance("/dr/all")
      .then(({ data }) => {
        if (data?.data?.length) {
          setDonationRequests(data.data || []);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw new Error(error.message);
      });
  }, []);

  if (loading) {
    return <DonationRequestsSkeleton />;
  }

  const lastPage = Math.ceil(donationRequests.length / dataPerPage);
  const currentPage = startIndex / dataPerPage + 1;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const handlePrev = () => {
    if (isFirstPage) return;
    setStartIndex((prev) => prev - dataPerPage);
  };
  const handleNext = () => {
    if (isLastPage) return;
    setStartIndex((prev) => prev + dataPerPage);
  };

  return (
    <section id="donation-requests" className="max-w-7xl mx-auto px-4 py-6">
      <div className=" flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-foreground capitalize">
          All Donation Requests
        </h2>
        <div className=" min-h-[68vh]">
          <DonationRequests
            donationRequests={donationRequests.slice(
              startIndex,
              startIndex + dataPerPage
            )}
          />
        </div>

        <Pagination>
          <PaginationContent className="gap-3">
            <PaginationItem>
              <button
                onClick={handlePrev}
                disabled={isFirstPage}
                className={`rounded-md font-medium px-4 py-1.5 text-sm border transition ${isFirstPage ? "cursor-not-allowed opacity-50 text-muted-foreground" : "cursor-pointer text-foreground hover:bg-primary hover:text-primary-foreground"}`}
                aria-disabled={isFirstPage}
              >
                Prev
              </button>
            </PaginationItem>
            <PaginationItem>
              <button
                onClick={handleNext}
                disabled={isLastPage}
                className={`rounded-md font-medium px-4 py-1.5 text-sm border transition ${isLastPage ? "cursor-not-allowed opacity-50 text-muted-foreground" : "cursor-pointer text-foreground hover:bg-primary hover:text-primary-foreground"}`}
                aria-disabled={isLastPage}
              >
                Next
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
