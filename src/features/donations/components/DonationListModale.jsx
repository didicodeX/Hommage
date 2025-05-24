import { useEffect } from "react";
import formatTimeAgo from "../../../shared/utils/formatTimeAgo";

export default function DonationListModal({ isOpen, onClose, donations }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto relative">
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">
          Donations ({donations.length})
        </h2>

        <ul className="space-y-4">
          {donations.map((d) => (
            <li key={d._id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{d.firstName}</p>
                <p className="text-sm text-gray-500">
                  {formatTimeAgo(d.createdAt)}
                </p>
              </div>
              <p className="font-semibold text-blue-700">
                ${d.amount.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>

        {/* Bouton faire un don */}
        <button
          className="mt-6 w-full bg-blue-700 text-white rounded-md py-2 hover:bg-blue-800"
          onClick={() => {
            onClose();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Faire un don
        </button>
      </div>
    </div>
  );
}
