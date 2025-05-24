import Button from "../../../shared/components/Button";

export default function DonationSummary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <div className="mb-4">
        <p className="text-sm text-gray-500">CAD collectés</p>
        <p className="text-lg font-bold">$139,565</p>
        <p className="text-sm text-gray-500">
          Objectif : $130,000 CAD • 1.8k dons
        </p>
      </div>

      <div className="w-full bg-primary-200 rounded-full h-2 mb-4">
        <div
          className="bg-primary-500 h-2 rounded-full"
          style={{ width: "48%" }}
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Button variant="outline">Share</Button>
        <Button variant="solid">Faire un don</Button>
      </div>

      <div className="text-sm text-gray-600">
        <p className="font-medium mb-2">Derniers donateurs</p>
        <div className="flex items-center justify-between">
          <span>Jean Dupuis</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Jean Dupuis</span>
          <span className="font-semibold">$50</span>
        </div>
      </div>

      <button className="w-full mt-4 text-sm text-blue-600 font-medium hover:underline">
        Voir tous les dons
      </button>
    </div>
  );
}
