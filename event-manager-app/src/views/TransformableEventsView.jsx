import TransformableEventList from "../components/TransformableEventList";

export default function TransformableEventsView() {
  return (
    <div>
      <h1>Transformación de Elementos</h1>
      <p>Haz click en un evento para cambiar su estado.</p>
      <TransformableEventList />
    </div>
  );
}
