import { useEffect, useState } from 'react';
import { montarEjercicio } from './montar.jsx';

const colorAleatorio = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

function CambiadorColor() {
  const [color, setColor] = useState(null);

  // El fondo es del <body>, fuera de React, así que se sincroniza con un efecto.
  useEffect(() => {
    if (color) document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <button onClick={() => setColor(colorAleatorio())}>Cambiar color</button>
      <p className="output">Color actual: {color ?? '—'}</p>
    </>
  );
}

montarEjercicio(1, CambiadorColor);
