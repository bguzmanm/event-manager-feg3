import SocketProvider from "../context/SocketContext";
import SocketEventList from "../components/SocketEventList";
import SocketForm from "../components/SocketForm";

export default function SocketIOView() {
  return (
    <SocketProvider>
      <div>
        <h1>Gestión de Eventos en Tiempo Real</h1>
        <SocketForm />
        <SocketEventList />
      </div>
    </SocketProvider>
  );
}