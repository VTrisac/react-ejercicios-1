# ReactJS · Entrega de ejercicios 1

Los nueve ejercicios de la entrega de JS, rehechos en React 19 con Vite. Cada ejercicio tiene su propio HTML y su propio archivo de componente, como pide el enunciado, más una página de índice.

```
index.html               → src/index.jsx          Índice
js_ejercicio_1.html      → src/js_ejercicio1.jsx  Cambiador de color de fondo (useState + useEffect)
js_ejercicio_2.html      → src/js_ejercicio2.jsx  Contador de clics
js_ejercicio_3.html      → src/js_ejercicio3.jsx  Lista dinámica
js_ejercicio_4.html      → src/js_ejercicio4.jsx  Filtro de búsqueda en tiempo real (estado derivado)
js_ejercicio_5.html      → src/js_ejercicio5.jsx  Calculadora sencilla
js_ejercicio_6.html      → src/js_ejercicio6.jsx  Temporizador (setInterval con limpieza en useEffect)
js_ejercicio_7.html      → src/js_ejercicio7.jsx  Generador de contraseñas
js_ejercicio_8.html      → src/js_ejercicio8.jsx  Contador de palabras y caracteres
js_ejercicio_9.html      → src/js_ejercicio9.jsx  Lista de tareas con localStorage
src/montar.jsx           Cabecera y tarjeta comunes + montaje en #root
src/ejercicios.js        Títulos y descripciones (los usan índice y cabeceras)
```

## Ejecutar en local
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
```

## Publicar en GitHub Pages
El repositorio incluye `.github/workflows/deploy.yml`, que compila y publica `dist/` en cada push a `main`.
1. Crea el repositorio y sube el proyecto (sin `node_modules` ni `dist`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Haz push a `main`; la URL aparece en la pestaña Actions y en Settings → Pages.

`vite.config.js` usa `base: './'`, así que funciona en cualquier subruta de GitHub Pages.
