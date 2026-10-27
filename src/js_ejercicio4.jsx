import { useState } from 'react';
import { montarEjercicio } from './montar.jsx';

const ANIMALES = ['Perro', 'Gato', 'Pez', 'Caballo', 'Conejo', 'Tortuga', 'Loro', 'Hámster', 'Gallina', 'Delfín'];
const normalizar = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function FiltroBusqueda() {
  const [busqueda, setBusqueda] = useState('');
  // Se deriva en cada render: no hace falta guardarlo en otro estado.
  const visibles = ANIMALES.filter((a) => normalizar(a).includes(normalizar(busqueda.trim())));

  return (
    <>
      <input type="search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar…" />
      <ul className="list">
        {visibles.map((animal) => <li key={animal}>{animal}</li>)}
      </ul>
      {visibles.length === 0 && <p className="error">No hay coincidencias.</p>}
    </>
  );
}

montarEjercicio(4, FiltroBusqueda);
