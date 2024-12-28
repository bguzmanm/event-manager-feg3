import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export default function SocketEventList() {
  const { events } = useContext(SocketContext);

  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <h3>{event.title}</h3>
          <p>Fecha: {event.date}</p>
          <p>Estado: {event.status}</p>
        </div>
        ))}
    </div>
  )
}