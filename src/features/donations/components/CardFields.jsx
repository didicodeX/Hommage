import { CardElement } from "@stripe/react-stripe-js";

export default function CardFields({ register, errors }) {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Card holder full name"
        {...register("name", { required: "Nom requis" })}
        className="input"
      />
      {errors.name && <p className="text-error-500">{errors.name.message}</p>}

      <CardElement
        id="card"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#000",
              "::placeholder": { color: "#a0aec0" },
            },
          },
        }}
        className="border px-3 py-2 rounded"
      />
    </div>
  );
}
