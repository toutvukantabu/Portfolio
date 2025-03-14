import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), svgr({
        svgrOptions: {
            ref: true,
            svgo: false,
            titleProp: true,
            exportType: 'named',
        },
        include: '**/*.svg',
    }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    base: process.env.VITE_BASE_URL || "/",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "index.html"
        },
    },
    define: {
        __APP_ENV__: JSON.stringify(process.env.VITE_ENV),
    },
})
