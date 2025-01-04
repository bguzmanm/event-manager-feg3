import { useRef } from "react";

export default function UncontrolledForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    console.log(`Nombre: ${name}, Email: ${email}`);
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulario No Controlado</h3>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <button type="Submit">Enviar</button>
    </form>
  );
}
