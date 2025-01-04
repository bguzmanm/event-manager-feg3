import { useState } from "react";
import Modal from "./Modal";

export default function PortalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);

  return (
    <div>
      <h2>Ejemplo de Portal</h2>
      <button onClick={openModal}>Abrir Modal</button>
      <button onClick={openModal2}>Abrir Modal 2</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <h3>Detalles del Evento</h3>
          <p>Aquí puedes añadir información adicional sobre el evento.</p>
        </Modal>
      )}

      {isOpen2 && (
        <Modal onClose={closeModal2}>
          <h3>Este es otro Modal</h3>
          <button onClick={console.log("hola!")}>Aprietame!</button>
          <p>Pero utilizando el mismo componente.</p>
        </Modal>
      )}
    </div>
  );
}
