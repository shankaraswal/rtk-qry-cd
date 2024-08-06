import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this matches your Vercel config if you have one
  },
  base: "", // Ensure this is correctly set if your site is not at the root
});
