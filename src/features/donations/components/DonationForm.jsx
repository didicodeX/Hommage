import { useForm } from "react-hook-form";
import Button from "../../../shared/components/Button";
import useDonation from "../hooks/useDonations";

export default function DonationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useDonation().createDonation;

  const paymentMethod = watch("method", "card"); // card ou mobile_money

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full max-w-md">
      {/* Prénom */}
      <div>
        <input
          type="text"
          placeholder="Prénom (ex: Anonymous)"
          {...register("firstName", { required: "Le prénom est requis" })}
          className={`w-full border rounded px-3 py-2 mt-1 ${errors.firstName ? "border-error-500" : "border-gray-300"}`}
        />
        {errors.firstName && <p className="text-error-500 text-sm mt-1">{errors.firstName.message}</p>}
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Petit mot (facultatif)"
          rows={3}
          {...register("message")}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
      </div>

      {/* Montant */}
      <div>
        <input
          type="number"
          min="1"
          step="1"
          placeholder="Montant en CAD (ex: 15)"
          {...register("amount", {
            required: "Le montant est requis",
            valueAsNumber: true,
            min: { value: 1, message: "Minimum 1 CAD" },
          })}
          className={`w-full border rounded px-3 py-2 mt-1 ${errors.amount ? "border-error-500" : "border-gray-300"}`}
        />
        {errors.amount && <p className="text-error-500 text-sm mt-1">{errors.amount.message}</p>}
      </div>

      {/* Méthode de paiement */}
      <div>
        <select
          {...register("method", { required: true })}
          className="w-full border rounded px-3 py-2 mt-1"
        >
          <option value="card">Carte bancaire (Stripe)</option>
          <option value="mobile_money">Mobile Money</option>
        </select>
      </div>

      {/* Si Mobile Money → Provider + Numéro */}
      {paymentMethod === "mobile_money" && (
        <>
          {/* Provider */}
          <div>
            <select
              {...register("provider", { required: "Fournisseur requis" })}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option value="ORANGE">Orange Money</option>
              <option value="MTN">MTN MoMo</option>
            </select>
          </div>

          {/* Téléphone */}
          <div>
            <input
              type="tel"
              placeholder="Numéro Mobile Money"
              {...register("phone", {
                required: "Numéro requis pour Mobile Money",
              })}
              className={`w-full border rounded px-3 py-2 mt-1 ${errors.phone ? "border-error-500" : "border-gray-300"}`}
            />
            {errors.phone && <p className="text-error-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </>
      )}

      <Button type="submit" variant="solid" className="w-full" disabled={isPending}>
        {isPending ? "Traitement..." : "Faire un don"}
      </Button>
    </form>
  );
}
