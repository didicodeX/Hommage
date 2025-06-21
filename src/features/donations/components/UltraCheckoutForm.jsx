import { useForm } from "react-hook-form";
import { useState } from "react";
import PaymentOption from "./PaymentOption";
import CardFields from "./CardFields";
import MobileMoneyFields from "./MobileMoneyFields";
import Button from "@/shared/components/Button"; // adapte si besoin
import { useStripe, useElements } from "@stripe/react-stripe-js";
import useDonation from "../hooks/useDonations";

export default function UltraCheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const { createDonation } = useDonation(); // ton hook perso
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (data) => {
    if (paymentMethod === "card") {
      const cardElement = elements.getElement("card");
      const { error } = await stripe.confirmCardPayment(
        data.clientSecret, // à générer côté backend
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: data.name,
            },
          },
        }
      );

      if (error) {
        alert("Erreur paiement : " + error.message);
      } else {
        console.log("Paiement réussi !");
      }
    } else {
      // Orange Money / MTN via backend Chipper
      createDonation({
        ...data,
        method: paymentMethod,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-xl bg-white shadow-xl w-full max-w-md space-y-6">
      {/* Choix méthode */}
      <PaymentOption selected={paymentMethod} onSelect={setPaymentMethod} />

      {/* Champs selon méthode */}
      {paymentMethod === "card" && <CardFields register={register} errors={errors} />}
      {(paymentMethod === "orange_money" || paymentMethod === "mtn_money") && (
        <MobileMoneyFields register={register} errors={errors} />
      )}

      <Button type="submit" variant="solid" className="w-full">
        Checkout
      </Button>
    </form>
  );
}
