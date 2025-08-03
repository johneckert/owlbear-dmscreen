import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
  },
});