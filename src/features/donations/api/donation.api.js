// src/features/donations/api/donation.api.js
import { api } from "../../../shared/lib/axios";

export const createDonation = (data) => {
  return api.post("/donations", data); // POST vers backend
};

export const fetchAllDonations = () => {
  return api.get(`/donations`);
};

export const fetchDonationStats = async () => {
  return await api.get("/donations/stats");
};

export const fetchRecentDonors = async () => {
  return await api.get("/donations/recent?limit=5");
};
