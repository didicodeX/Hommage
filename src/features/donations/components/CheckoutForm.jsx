import { useState } from "react";
import { api} from "@/shared/lib/axios"; // ton instance axios préconfigurée
import PaymentMethodSelector from "./PaymentMethodSelector";

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("card");
  const [provider, setProvider] = useState("ORANGE"); // utile si method = mobile_money
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/donations/initiate", {
        firstName,
        amount: parseInt(amount),
        method,
        phone,
        provider,
      });

      // Redirige vers Stripe Checkout ou Tilt
      window.location.href = res.data.url;
    } catch (err) {
      console.error("Erreur lors du paiement :", err);
      alert("Une erreur est survenue. Merci de réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Votre prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="input"
      />

      <input
        type="number"
        placeholder="Montant du don (en CAD ou XAF)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="input"
      />

      <PaymentMethodSelector
        method={method}
        setMethod={setMethod}
        setProvider={setProvider}
      />

      {method === "mobile_money" && (
        <input
          type="tel"
          placeholder="Numéro Mobile Money"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="input"
        />
      )}

      <button type="submit" className="btn btn-primary w-full">
        Faire un don
      </button>
    </form>
  );
}
