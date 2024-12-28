import React from "react";

export default function FragmentList() {
  const items = [
    { id: 1, name: "Elemento 1" },
    { id: 2, name: "Elemento 2" },
    { id: 3, name: "Elemento 3" },
    { id: 4, name: "Elemento 4" },
    { id: 5, name: "Elemento 5" },
  ];

  return (
    <div>
      <h3>Lista de Fragmentos</h3>
      <ul>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <li key={item.id}>{item.name}</li>
            <p>Descripción del {item.name}</p>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
