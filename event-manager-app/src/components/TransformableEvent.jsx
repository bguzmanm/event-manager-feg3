import { useState } from "react";

export default function TransformableEvent({ event }) {
  const [status, setStatus] = useState(event.status);

  const toggleStatus = () => {
    setStatus((prevStatus) =>
      prevStatus === "Pendiente" ? "Completado" : "Pendiente"
    );
  };

  return (
    <div
      className={`event-card ${status === "Completado" ? "completed" : ""}`}
      onClick={toggleStatus}
    >
      <h3>{event.title}</h3>
      <p>Fecha: {event.date}</p>
      <p>Estado: {status}</p>
    </div>
  );
}
