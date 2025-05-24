import { useDonationModal } from "../store/donation.store";
import DonationForm from "./DonationForm";
import { X } from "phosphor-react";

export default function DonationFormModal() {
  const { isOpen, close } = useDonationModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg py-6 px-8 relative">
        {/* Fermer */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
         <X  />
        </button>

        {/* Contenu du formulaire */}
        <h5 className="text-center mb-4">Faire un don</h5>
        <DonationForm />
      </div>
    </div>
  );
}
