import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages project URL: https://eagle1705.github.io/Portfolio/
  base: "/Portfolio/",
  plugins: [react()],
});
