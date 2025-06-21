import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // ← à ajouter

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ← ici on pointe vers le dossier `src`
    },
  },
});
