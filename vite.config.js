import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Must match the repo name so asset URLs work on https://<user>.github.io/<repo>/
export default defineConfig({
  base: "/gary-and-sons/",
  plugins: [react()],
});
