import { useQuery, useMutation } from "@tanstack/react-query";
import * as API from "../api/donation.api";
import formatTime from "../../../shared/utils/formatTime.js";

export default function useDonation() {
  // ✅ Mutation : créer un don
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

  // ✅ Query : stats des dons
  const statsQuery = useQuery({
    queryKey: ["donation-stats"],
    queryFn: async () => {
      const { data } = await API.fetchDonationStats();
      return {
        totalAmount: data.totalAmount,
        goalAmount: data.goalAmount,
        totalCount: data.totalCount,
        progress: Math.round((data.totalAmount / data.goalAmount) * 100),
      };
    },
  });

  // ✅ Query : derniers donateurs
  const donorsQuery = useQuery({
    queryKey: ["recent-donors"],
    queryFn: async () => {
      const { data } = await API.fetchRecentDonors();
      return data.map((donor) => ({
        _id: donor._id,
        firstName: donor.firstName,
        amount: donor.amount,
        timeAgo: formatTime(donor.createdAt),
        message: donor.message || "", // Assurez-vous que le message est toujours une chaîne
      }));
    },
  });

  // ✅ Query : tous les dons
  const donationsQuery = useQuery({
    queryKey: ["all-donations"],
    queryFn: async () => {
      const { data } = await API.fetchAllDonations();
      return data.map((donation) => ({
        _id: donation._id,
        firstName: donation.firstName,
        amount: donation.amount,
        message: donation.message,
        timeAgo: formatTime(donation.createdAt),
      }));
    },
  });

  return {
    // 👉 Création
    createDonation: createDonationMutation.mutate,
    isLoadingCreateDonation: createDonationMutation.isLoading,
    errorCreateDonation: createDonationMutation.error,

    // 👉 Stats
    donationStats: statsQuery.data,
    isLoadingDonationStats: statsQuery.isLoading,
    errorDonationStats: statsQuery.error,

    // 👉 Donateurs
    recentDonors: donorsQuery.data,
    isLoadingRecentDonors: donorsQuery.isLoading,
    errorRecentDonors: donorsQuery.error,

    // 👉 Tous les dons
    donations: donationsQuery.data,
    isLoadingDonations: donationsQuery.isLoading,
  };
}
