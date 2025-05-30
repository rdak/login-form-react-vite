import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [postcssPresetEnv],
        },
    },
});
