import { useState } from 'react';
import { montarEjercicio } from './montar.jsx';

const LETRAS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMEROS = '0123456789';
const SIMBOLOS = '!@#$%^&*()-_=+[]{};:,.<>?';
const azar = (cadena) => cadena[Math.floor(Math.random() * cadena.length)];

function generar(n) {
  const chars = [azar(LETRAS), azar(NUMEROS), azar(SIMBOLOS)];
  while (chars.length < n) chars.push(azar(LETRAS + NUMEROS + SIMBOLOS));
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

function GeneradorContrasenas() {
  const [longitud, setLongitud] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function enviar(evento) {
    evento.preventDefault();
    const n = parseInt(longitud, 10);
    if (longitud === '' || Number.isNaN(n) || n < 4) {
      setPassword('');
      setError('La longitud debe ser mayor o igual a 4.');
      return;
    }
    setError('');
    setPassword(generar(n));
  }

  return (
    <>
      <form className="row" onSubmit={enviar} noValidate>
        <input type="number" min="4" value={longitud} onChange={(e) => setLongitud(e.target.value)} placeholder="Longitud (mínimo 4)" />
        <button type="submit">Generar contraseña</button>
      </form>
      <p className="output">{password}</p>
      <p className="error">{error}</p>
    </>
  );
}

montarEjercicio(7, GeneradorContrasenas);
