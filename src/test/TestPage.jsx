import Footer from "../shared/components/Footer";
import Button from "../shared/components/Button";
import DonationSummary from "../features/donations/components/DonationSummary";
import DonationFormModal from "../features/donations/components/DonationFormModal";
import DonationListModale from "../features/donations/components/DonationListModale";
import useDonation from "../features/donations/hooks/useDonations";
export default function TestPage() {
  // const { open } = useDonationModal();
  const {donations} = useDonation();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <DonationListModale isOpen={true} donations={donations} />
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-lg mb-2">This is a test page.</p>
      <p className="text-lg mb-2">You can add your test content here.</p>
      <DonationSummary />
      <Button></Button>
      <Button variant="outline" to="/test">
        share
      </Button>
      <Button variant="solid" to="/test">
        Faire un don
      </Button>
      <Button variant="solid" to="/test">
        Voir tous les dons
      </Button>
      <Footer />
      <DonationFormModal />
    </div>
  );
}
