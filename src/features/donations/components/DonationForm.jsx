import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../shared/components/Button";
import useDonation from "../hooks/useDonations";

export default function DonationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createDonation } = useDonation();

  const onSubmit = (data) => {
    console.log(data);
    createDonation(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full max-w-md"
    >
      {/* Prénom */}
      <div>
        <input
          type="text"
          placeholder="Prénom (ex: Anonymous)"
          aria-label="Prénom"
          {...register("firstName", { required: "Le prénom est requis" })}
          className={`w-full border rounded px-3 py-2 mt-1 ${
            errors.firstName ? "border-error-500" : "border-gray-300"
          }`}
        />
        {errors.firstName && (
          <p className="text-error-500 text-sm mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Petit mot (facultatif) - ex: Repose en paix"
          aria-label="Petit mot"
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
          aria-label="Montant (CAD)"
          {...register("amount", {
            required: "Le montant est requis",
            valueAsNumber: true,
            min: { value: 1, message: "Minimum 1 CAD" },
          })}
          className={`w-full border rounded px-3 py-2 mt-1 ${
            errors.amount ? "border-error-500" : "border-gray-300"
          }`}
        />
        {errors.amount && (
          <p className="text-error-500 text-sm mt-1">{errors.amount.message}</p>
        )}
      </div>

      <Button type="submit" variant="solid" className="w-full">
        Faire un don
      </Button>
    </form>
  );
}
