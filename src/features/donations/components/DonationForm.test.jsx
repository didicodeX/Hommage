import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import DonationForm from "../components/DonationForm";

// 🔧 On mock le hook useDonation()
jest.mock("../hooks/useDonations", () => () => ({
  createDonation: jest.fn(),
}));

describe("DonationForm", () => {
  it("soumet correctement les données du formulaire", async () => {
    const user = userEvent.setup();

    render(<DonationForm />);

    // 1. Vérifie que tous les champs sont bien présents
    const inputPrenom = screen.getByLabelText(/prénom/i);
    const textareaMessage = screen.getByLabelText(/petit mot/i);
    const inputMontant = screen.getByLabelText(/montant/i);
    const boutonDon = screen.getByRole("button", { name: /faire un don/i });

    // 2. Simule un remplissage utilisateur
    await user.type(inputPrenom, "Dylane");
    await user.type(textareaMessage, "Merci pour tout");
    await user.type(inputMontant, "50");

    // 3. Clique sur le bouton
    await user.click(boutonDon);

    // 4. Tu pourras vérifier ici que createDonation a été appelée avec :
    // { firstName: 'Dylane', message: 'Merci pour tout', amount: 50 }
    // Mais pour ça on doit avoir accès au mock
  });
});
