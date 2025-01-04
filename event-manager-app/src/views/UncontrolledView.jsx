import UncontrolledForm from "../components/UncontrolledForm";

export default function UncontrolledView() {
  return (
    <div>
      <h1>Componentes no Controlados</h1>
      <p>Este ejemplo meustra cómo manejar datos de formularios directamnte desde el DOM usando referencias (`ref`)</p>
      <UncontrolledForm />
    </div>
  );
}