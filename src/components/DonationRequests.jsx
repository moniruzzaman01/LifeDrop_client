import DonationRequest from "./DonationRequest";

export default function DonationRequests({ donationRequests }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {donationRequests.map((request, idx) => (
        <DonationRequest key={idx} request={request} />
      ))}
    </div>
  );
}
