import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The repo root doubles as the GitHub Pages document root: the committed
// index.html + assets/ at the top level ARE the deployed build output.
// That means index.html cannot also be the Vite source entry — it would be
// overwritten by its own build. So the source entry is dev.html, and
// `npm run deploy` renames the built dev.html to index.html at the root.
export default defineConfig({
  plugins: [react()],
  server: { open: "/dev.html" },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2018",
    rollupOptions: { input: "dev.html" },
  },
});
