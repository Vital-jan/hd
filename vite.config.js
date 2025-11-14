// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // тепер імпорт: @/...
    },
  },
  server: {
    host: "0.0.0.0", // щоб відкривати з інших пристроїв у мережі (опційно)
    port: 5173, // можна змінити за потреби
    open: false,
  },
  preview: {
    port: 5173,
  },
});
