import { useState } from "react";

export default function ProfilerExample() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h3>Contador</h3>
      <p>Valor actual: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}