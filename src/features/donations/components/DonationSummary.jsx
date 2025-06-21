import toast from "react-hot-toast";
import Button from "../../../shared/components/Button";
import useDonation from "../hooks/useDonations";
import { useDonationModal } from "../store/donation.store";
import DonationListModale from "./DonationListModale";
import Donor from "./Donor";

export default function DonationSummary() {
  const open = useDonationModal((state) => state.open);

  const { donationStats, recentDonors, donations } = useDonation();

  if (!donationStats) return null;

  const { totalAmount, goalAmount, progress, totalCount } = donationStats;

  return (
    <div className="bg-primary-50 px-8 py-4 rounded-lg shadow-md w-full max-w-md">
      <div className="border-primary-200  border-b py-4">
        <h5 className="font-bold">
          ${totalAmount.toLocaleString()} CAD collectés
        </h5>
        <p className="text-sm text-primary-500">
          Objectif : ${goalAmount.toLocaleString()} CAD •{" "}
          {totalCount.toLocaleString()} dons
        </p>
      </div>

      <div className="flex flex-col gap-2 border-primary-200  border-b py-4">
        <div className="w-full bg-primary-200 rounded-full h-2">
          <div
            className="bg-primary-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p>
          Progression : <span className="text-primary-500">{progress}%</span>{" "}
        </p>
      </div>

      <div className="flex flex-col gap-2 border-primary-200  border-b py-4">
        <Button
          variant="outline"
          onClick={() => {
            const shareData = {
              title: "Hommage à Papa Jean",
              text: "Contribuez à l’hommage en mémoire de Papa Jean",
              url: window.location.href,
            };

            if (navigator.share) {
              navigator
                .share(shareData)
                .catch((err) => console.error("Erreur de partage :", err));
            } else {
              navigator.clipboard
                .writeText(shareData.url)
                .then(() => {
                  toast.success("Lien copié dans le presse-papiers !");
                })
                .catch(() => {
                  toast.error("Impossible de copier le lien");
                });
            }
          }}
        >
          Share
        </Button>
        <Button onClick={() => open("form")}>Faire un don</Button>
      </div>

      <div className="border-primary-200  border-b py-4 flex flex-col gap-2">
        <p className="font-medium">Derniers donateurs</p>
        <div className="flex flex-col gap-4">
          {recentDonors?.slice(0, 3).map((donor) => (
            <Donor key={donor._id} donor={donor} />
          ))}
        </div>
      </div>

      <Button onClick={() => open("list")} className="mt-4 w-full">
        Voir tous les dons
      </Button>

      <DonationListModale donations={donations} />
    </div>
  );
}
