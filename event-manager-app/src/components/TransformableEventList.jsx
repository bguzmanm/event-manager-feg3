import TransformableEvent from "./TransformableEvent";

export default function TransformableEventList() {
  const events = [
    { title: "Reunión de trabajo", date: "2021-08-01", status: "Pendiente" },
    { title: "Entrevista de trabajo", date: "2021-08-02", status: "Pendiente" },
    { title: "Cita con el médico", date: "2021-08-03", status: "Pendiente" },
  ];

  return (
    <div className="event-list">
      {events.map((event, index) => (
        <TransformableEvent key={index} event={event} />
      ))}
    </div>
  );
}
