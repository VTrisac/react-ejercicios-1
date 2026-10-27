import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EJERCICIOS } from './ejercicios.js';
import './styles.css';

function Indice() {
  return (
    <>
      <header><strong>ReactJS · Entrega de ejercicios 1</strong></header>
      <main>
        <section className="card">
          <h1>Índice de ejercicios</h1>
          <p className="lead">Los nueve ejercicios de JS, ahora con React: estado, efectos y eventos.</p>
        </section>
        <nav aria-label="Ejercicios">
          <ul className="grid">
            {EJERCICIOS.map(({ n, titulo }) => (
              <li key={n}>
                <a href={`js_ejercicio_${n}.html`}><span>Ejercicio {n}</span>{titulo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <footer>Víctor Trisac Pérez · Máster Full Stack · Conquer Blocks</footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><Indice /></StrictMode>);
