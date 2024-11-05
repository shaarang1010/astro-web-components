// vite.web-component.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/components/ui/components/web-components/DataComponent.ts",
      name: "DataComponent",
      formats: ["es"],
      fileName: "my-web-component",
    },
    outDir: "public/web-components",
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
