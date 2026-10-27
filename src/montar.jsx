import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EJERCICIOS } from './ejercicios.js';
import './styles.css';

// Envuelve un ejercicio con la cabecera y la tarjeta comunes y lo monta en #root.
function Pagina({ n, children }) {
  const { titulo, lead } = EJERCICIOS.find((e) => e.n === n);
  return (
    <>
      <header>
        <a href="index.html">← Índice</a>
        <strong>Ejercicio {n}</strong>
      </header>
      <main>
        <section className="card">
          <h1>{titulo}</h1>
          <p className="lead">{lead}</p>
          {children}
        </section>
      </main>
    </>
  );
}

export function montarEjercicio(n, Componente) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Pagina n={n}>
        <Componente />
      </Pagina>
    </StrictMode>,
  );
}
