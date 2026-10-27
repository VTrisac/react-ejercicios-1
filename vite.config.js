import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Multi-página: un HTML por ejercicio, como pide el enunciado.
const paginas = { index: resolve(__dirname, 'index.html') };
for (let i = 1; i <= 9; i++) {
  paginas[`js_ejercicio_${i}`] = resolve(__dirname, `js_ejercicio_${i}.html`);
}

export default defineConfig({
  plugins: [react()],
  base: './', // rutas relativas para que funcione en GitHub Pages
  build: { rollupOptions: { input: paginas } },
});
