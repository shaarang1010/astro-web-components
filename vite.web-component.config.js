// vite.web-component.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "src/components/ui/components/web-components/DataComponent.ts",
      name: "DataComponent",
      formats: ["es"],
      fileName: "my-web-component",
    },
    outDir: "dist/web-components",
    rollupOptions: {
      external: ["react", "react-dom"], // if you want them external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
