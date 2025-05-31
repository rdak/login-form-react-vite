import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [svgr(), react()],
    css: {
        postcss: {
            plugins: [postcssPresetEnv],
        },
    },
});
