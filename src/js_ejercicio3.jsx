import { useState } from 'react';
import { montarEjercicio } from './montar.jsx';

function ListaDinamica() {
  const [texto, setTexto] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  function agregar(evento) {
    evento.preventDefault();
    const valor = texto.trim();
    if (!valor) {
      setError('Escribe algo antes de agregar.');
      return;
    }
    setItems((prev) => [...prev, { id: crypto.randomUUID(), texto: valor }]);
    setTexto('');
    setError('');
  }

  const eliminar = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <>
      <form className="row" onSubmit={agregar}>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe un elemento" />
        <button type="submit">Agregar</button>
      </form>
      <p className="error">{error}</p>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.texto}</span>
            <button className="danger" onClick={() => eliminar(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

montarEjercicio(3, ListaDinamica);
