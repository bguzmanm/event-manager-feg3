import { useState } from "react";

export default function ReconciliationList() {
  const [items, setItems] = useState([
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, value: `Item ${items.length + 1} ` };
    setItems([...items, newItem]);
  }

  const shuffleItems = () => {
    setItems((prevItems) => [...prevItems].sort(() => Math.random() - 0.5));
  }

  return (
    <div>
      <h3>Lista de Reconciliación</h3>
      <button onClick={addItem}>Añadir Elemento</button>
      <button onClick={shuffleItems}>Mezclar Elementos</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li> 
        ))}
      </ul>
    </div>
  )

}
