import Button from "../../../shared/components/Button";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-50 gap-2">
      <h2 className="text-success-500">Merci pour votre don !</h2>
      <p className="text-center mt-4">
        Votre soutien est précieux et nous vous en remercions sincèrement.
      </p>
    </div>
  );
}