import { useState } from 'react';
import { montarEjercicio } from './montar.jsx';

function ContadorClics() {
  const [clics, setClics] = useState(0);
  return (
    <>
      <p className="big">Clics: {clics}</p>
      <div className="row center">
        <button onClick={() => setClics((c) => c + 1)}>Contar clics</button>
      </div>
    </>
  );
}

montarEjercicio(2, ContadorClics);
