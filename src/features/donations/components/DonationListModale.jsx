import { useDonationModal } from "../store/donation.store";

export default function DonationListDrawer({
  isOpen,
  onClose,
  donations = [],
}) {
  const { open } = useDonationModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-xl shadow-lg p-6 relative overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Tous les donateurs</h2>

        <ul className="space-y-2">
          {donations.map((donation) => (
            <li
              key={donation._id}
              className="border-b pb-2 flex justify-between text-sm"
            >
              <span>{donation.firstName}</span>
              <span className="font-medium">${donation.amount.toFixed(2)}</span>
              <span className="text-gray-500">
                {donation.createdAt
                  ? new Date(donation.createdAt)
                  : "Il y a quelques instants"}
              </span>
              {donation.message && (
                <span className="text-gray-600 italic">
                  "{donation.message}"
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onClose}
            className="text-gray-600 hover:underline text-sm"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              onClose();
              open(); // 👉 ouvrir la modale de don
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Faire un don
          </button>
        </div>
      </div>
    </div>
  );
}
