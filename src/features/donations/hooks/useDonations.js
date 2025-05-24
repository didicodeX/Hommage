// src/features/donations/hooks/useCreateDonation.js
import { useMutation } from "@tanstack/react-query";
import * as API from "../api/donation.api";

export default function useCreateDonation() {
  const createDonationMutation = useMutation({
    mutationFn: API.createDonation,
    onSuccess: (res) => {
      if (res?.data?.url) {
        window.location.href = res.data.url;
      } else {
        console.warn("Aucune URL de paiement reçue");
      }
    },
    onError: (err) => {
      console.error("❌ Erreur création don :", err);
      alert("Erreur lors de la création du don.");
    },
  });

  return {
    createDonation: createDonationMutation.mutate,
    isLoadingCreateDonation: createDonationMutation.isLoading,
    error: createDonationMutation.error,
  };
}
