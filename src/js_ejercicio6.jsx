import { useEffect, useState } from 'react';
import { montarEjercicio } from './montar.jsx';

const dos = (n) => String(n).padStart(2, '0');
const formatear = (s) => `${dos(Math.floor(s / 3600))}:${dos(Math.floor((s % 3600) / 60))}:${dos(s % 60)}`;

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  // El intervalo solo existe mientras está activo; la limpieza lo detiene al pausar o desmontar.
  useEffect(() => {
    if (!activo) return undefined;
    const id = setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [activo]);

  function reiniciar() {
    setActivo(false);
    setSegundos(0);
  }

  return (
    <>
      <p className="big">{formatear(segundos)}</p>
      <div className="row center">
        <button onClick={() => setActivo(true)}>Iniciar</button>
        <button className="secondary" onClick={() => setActivo(false)}>Pausar</button>
        <button className="danger" onClick={reiniciar}>Reiniciar</button>
      </div>
    </>
  );
}

montarEjercicio(6, Temporizador);
