import { defineConfig } from "vite";
import * as path from "path";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    ViteFaviconsPlugin({
      logo: "./public/logo.svg",
      favicons: {
        path: "/",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
});
