import { useDonationModal } from "../store/donation.store";
import Modal from "../../../shared/components/Modal";
import Button from "../../../shared/components/Button";
import Donor from "./Donor";

export default function DonationListModale({ donations = [] }) {
  const { modalType, close, open } = useDonationModal();
  const isOpen = modalType === "list";

  return (
    <Modal isOpen={isOpen} onClose={close} title={`Tous les donateurs (${donations.length})`}>
      <ul className="flex flex-col gap-4 py-4">
        {donations.map((donation) => (
          <li key={donation._id}>
            <Donor donor={donation} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 border-primary-200 border-t">
        <Button onClick={() => {
          close();
          open("form"); // 🔁 switch vers modale de don
        }} className="w-full mt-6">
          Faire un don
        </Button>
      </div>
    </Modal>
  );
}
