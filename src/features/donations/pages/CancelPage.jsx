import Button from "../../../shared/components/Button";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-50 gap-2">
      <h2 className="text-error-500">Don annulé</h2>
      <p className="text-center mt-4">
        Votre don a été annulé. Vous pouvez réessayer à tout moment.
      </p>
      <Button onClick={() => (window.location.href = "/")} className="mt-4">
        Retour à l'accueil
      </Button>
    </div>
  );
}
