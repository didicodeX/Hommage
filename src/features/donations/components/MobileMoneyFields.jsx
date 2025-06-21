export default function MobileMoneyFields({ register, errors }) {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Nom complet"
        {...register("name", { required: "Nom requis" })}
        className="input"
      />
      {errors.name && <p className="text-error-500">{errors.name.message}</p>}

      <input
        type="tel"
        placeholder="Numéro Mobile Money"
        {...register("phone", { required: "Numéro requis" })}
        className="input"
      />
      {errors.phone && <p className="text-error-500">{errors.phone.message}</p>}
    </div>
  );
}
