import Button from "../../../shared/components/Button";
import Footer from "../../../shared/components/Footer";
import FuneralQuote from "../../../shared/components/FuneralQuote";
import DonationFormModal from "../components/DonationFormModal";
import DonationListModale from "../components/DonationListModale";
import DonationSummary from "../components/DonationSummary";
import { useDonationModal } from "../store/donation.store";

export default function HomePage() {
  const open = useDonationModal((state) => state.open);

  return (
    <div className="flex flex-col min-h-screen bg-primary-50 padd-x padd-t gap-6">
      <div className="flex flex-col">
        <h4 className="text-secondary-500">IN MEMORY OF</h4>
        <h2>Papa Jean</h2>
        <h4>Younde, Cameroun . Avril 17 1943 - Octobre 20 2025</h4>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <img src="/images/papa.png" alt="" className="rounded-md" />
        <DonationSummary />
      </div>
      <div>
        <h4>Merci pour votre soutien en ces moments difficiles.</h4>
        <p>
          Ce site a été créé pour honorer la mémoire de papa Jean et permettre
          aux proches et amis de contribuer aux frais funéraires.
        </p>
      </div>

      <div className="flex justify-center">
        <Button onClick={() => open("form")}>Faire un don</Button>
      </div>

      <FuneralQuote />

      <Footer />
      {/* Modale connectée */}
      <DonationFormModal />
    </div>
  );
}
