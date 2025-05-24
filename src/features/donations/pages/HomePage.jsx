import Button from "../../../shared/components/Button";
import Footer from "../../../shared/components/Footer";
import DonationFormModal from "../components/DonationFormModal";
import DonationListDrawer from "../components/DonationListModale";
import { useDonationModal } from "../store/donation.store";

export default function HomePage() {
  const open = useDonationModal((state) => state.open);

  return (
    <div className="flex flex-col min-h-screen bg-primary-50 padd-x padd-y gap-6">
      <div className="flex flex-col">
        <h4 className="text-secondary-500">IN MEMORY OF</h4>
        <h2>Papa Tano</h2>
        <h4>Younde, Cameroun . Avril 17 1943 - Octobre 20 2025</h4>
      </div>
      <div className="flex">
        <img src="/images/papa.png" alt="" className="rounded-md" />
        <DonationListDrawer />
      </div>
      <div>
        <h4>Merci pour votre soutien en ces moments difficiles.</h4>
        <p>
          Ce site a été créé pour honorer la mémoire de papa tano et permettre
          aux proches et amis de contribuer aux frais funéraires."_
        </p>
      </div>

      <div>
        <Button onClick={open}>Faire un don</Button>
      </div>

      <div>
        <p>Partir c'est mourir un peu</p>
        <p>mais s'en aller pour chercher Dieu,</p>
        <p>c'est trouver la vie.</p>
      </div>

      <Footer />
      {/* Modale connectée */}
      <DonationFormModal />
    </div>
  );
}
