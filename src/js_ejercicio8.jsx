import { useState } from 'react';
import { montarEjercicio } from './montar.jsx';

function ContadorPalabras() {
  const [texto, setTexto] = useState('');
  const palabras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
  const caracteres = texto.replace(/\s/g, '').length;

  return (
    <>
      <textarea rows={7} value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe un párrafo…" />
      <p className="output">{palabras} palabras · {caracteres} caracteres (sin espacios)</p>
    </>
  );
}

montarEjercicio(8, ContadorPalabras);
