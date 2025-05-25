import { useDonationModal } from "../store/donation.store";
import Modal from "../../../shared/components/Modal";
import DonationForm from "./DonationForm";

export default function DonationFormModal() {
  const { modalType, close } = useDonationModal();
  const isOpen = modalType === "form";

  return (
    <Modal isOpen={isOpen} onClose={close} title="Faire un don">
      <DonationForm />
    </Modal>
  );
}
