import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonationSummary from "../features/donations/components/DonationSummary";
import DonationFormModal from "../features/donations/components/DonationFormModal";
import DonationListModale from "../features/donations/components/DonationListModale";
import useDonation from "../features/donations/hooks/useDonations";
import CheckoutForm from "@/features/donations/components/CheckoutForm";
import UltraCheckoutForm from "@/features/donations/components/UltraCheckoutForm";
export default function TestPage() {
  // const { open } = useDonationModal();
  const { donations } = useDonation();
  // Charge ta clé publique Stripe (PAS la clé secrète !)
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <CheckoutForm />
      <Elements stripe={stripePromise}>
        <UltraCheckoutForm />
      </Elements>
      <DonationListModale donations={donations} />
      {/* <DonationSummary /> */}
      <DonationFormModal />
    </div>
  );
}
