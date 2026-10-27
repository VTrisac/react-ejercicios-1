import { useState } from 'react';
import { montarEjercicio } from './montar.jsx';

const OPERACIONES = {
  Sumar: (a, b) => a + b,
  Restar: (a, b) => a - b,
  Multiplicar: (a, b) => a * b,
  Dividir: (a, b) => a / b,
};

function Calculadora() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState({ texto: '', error: false });

  function calcular(nombre) {
    if (a === '' || b === '') return setResultado({ texto: 'Rellena los dos números.', error: true });
    const x = Number(a);
    const y = Number(b);
    if (Number.isNaN(x) || Number.isNaN(y)) return setResultado({ texto: 'Introduce números válidos.', error: true });
    if (nombre === 'Dividir' && y === 0) return setResultado({ texto: 'No se puede dividir entre cero.', error: true });
    const valor = OPERACIONES[nombre](x, y);
    setResultado({ texto: `Resultado: ${Number.isInteger(valor) ? valor : valor.toFixed(4)}`, error: false });
  }

  return (
    <>
      <div className="row">
        <input type="number" step="any" value={a} onChange={(e) => setA(e.target.value)} placeholder="Número 1" />
        <input type="number" step="any" value={b} onChange={(e) => setB(e.target.value)} placeholder="Número 2" />
      </div>
      <div className="row">
        {Object.keys(OPERACIONES).map((nombre) => (
          <button key={nombre} onClick={() => calcular(nombre)}>{nombre}</button>
        ))}
      </div>
      <p className={`output ${resultado.error ? 'error' : ''}`}>{resultado.texto}</p>
    </>
  );
}

montarEjercicio(5, Calculadora);
