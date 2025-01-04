import PropTypeExample from "./PropTypeExample";

export default function PropTypeParent() {
  <div>
    <h2>Ejemplo de PropType</h2>
    <PropTypeExample title="Título Válido" count={10} />
    <PropTypeExample title="Solo título" />
    <PropTypeExample count={20} title="Titulito" />
  </div>;
}
