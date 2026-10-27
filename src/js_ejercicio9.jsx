import { useEffect, useState } from 'react';
import { montarEjercicio } from './montar.jsx';

const CLAVE = 'react-ejercicio9-tareas';

function leerTareas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
  } catch {
    return [];
  }
}

function ListaTareas() {
  // Inicialización perezosa: localStorage solo se lee una vez, al montar.
  const [tareas, setTareas] = useState(leerTareas);
  const [texto, setTexto] = useState('');

  // Cada cambio en las tareas se guarda.
  useEffect(() => {
    localStorage.setItem(CLAVE, JSON.stringify(tareas));
  }, [tareas]);

  function anadir(evento) {
    evento.preventDefault();
    const valor = texto.trim();
    if (!valor) return;
    setTareas((prev) => [...prev, { id: Date.now(), texto: valor, completada: false }]);
    setTexto('');
  }

  const alternar = (id) =>
    setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));

  const limpiarCompletadas = () => setTareas((prev) => prev.filter((t) => !t.completada));

  return (
    <>
      <form className="row" onSubmit={anadir}>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Nueva tarea" />
        <button type="submit">Añadir</button>
      </form>
      <ul className="list">
        {tareas.map((t) => (
          <li key={t.id}>
            <label>
              <input type="checkbox" checked={t.completada} onChange={() => alternar(t.id)} />
              <span className={t.completada ? 'done' : ''}>{t.texto}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="row">
        <button className="secondary" onClick={limpiarCompletadas}>Limpiar completadas</button>
      </div>
    </>
  );
}

montarEjercicio(9, ListaTareas);
