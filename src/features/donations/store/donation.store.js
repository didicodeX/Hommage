// src/shared/store/useDonationModal.js
import { create } from "zustand";

export const useDonationModal = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
