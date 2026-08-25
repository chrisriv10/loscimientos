import { defineConfig } from "vite";
import { sites } from "@openai/sites-vite-plugin";

export default defineConfig(async () => {
  const { cloudflare } = await import("@cloudflare/vite-plugin");
  return {
    plugins: [
      sites(),
      cloudflare({
        viteEnvironment: { name: "server" },
        config: {
          main: "src/worker.js",
          compatibility_date: "2026-08-24",
          assets: { binding: "ASSETS" },
        },
      }),
    ],
  };
});
