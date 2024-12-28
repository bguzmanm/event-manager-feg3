import { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();
const socket = io("http://localhost:4000");

export default function SockerProvider({ children }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Obtener lista inical de eventos
    socket.on("event:list", (data) => setEvents(data));

    // Actualizar eventos en tiempo real
    socket.on("event:update", (data) => setEvents(data));

    return () => {
      socket.off("event:list");
      socket.off("event:update");
    };
  }, []);

  const addEvent = (newEvent) => {
    socket.emit("event:add", newEvent);
  };

  return (
    <SocketContext.Provider value={{ events, addEvent }}>
      {children}
    </SocketContext.Provider>
  );
}