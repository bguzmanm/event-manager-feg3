import { useState } from "react";

export default function BadReconciliationList() {
  const [items, setItems] = useState([
    "Elemento 1",
    "Elemento 2",
    "Elemento 3",
  ]);

  const addItem = () => {
    const newItem = `Elemento ${items.length + 1} `;
    setItems([...items, newItem]);
  };

  const shuffleItems = () => {
    setItems((prevItem) => [...prevItem].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <h3>Lista sin Claves Únicas</h3>
      <button onClick={addItem}>Añadir Elemento</button>
      <button onClick={shuffleItems}>Mezclar Elementos</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Mal uso del índice como clave
        ))}
      </ul>
    </div>
  );
}
