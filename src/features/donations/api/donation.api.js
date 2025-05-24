// src/features/donations/api/donation.api.js
import { api } from "../../../shared/lib/axios";

export const createDonation = (data) => {
  return api.post("/donations", data); // POST vers backend
};
