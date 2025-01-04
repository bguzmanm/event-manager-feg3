import { useEffect, useState } from "react";

export default function StrictModeExample() {
  const [count, setCount] = useState(0);

  // simulación de un problema común, efectos secundartios ejecutados dos veces en modo desarrollo
  useEffect(() => {
    console.log("Efecto ejecutado");
  }, []);

  return (
    <div>
      <h3>Ejemplo de Modo Estricto</h3>
      <p>El valor actual del contador es : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
