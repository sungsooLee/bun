import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    base: '/bun/', // ← GitHub Pages 경로
    plugins: [vue()],
});
