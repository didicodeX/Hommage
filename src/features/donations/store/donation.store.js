import { create } from "zustand";

export const useDonationModal = create((set) => ({
  modalType: null, // "form" | "list"
  open: (type) => set({ modalType: type }),
  close: () => set({ modalType: null }),
}));
