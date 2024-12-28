import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function TransitionEventList() {
  const [events, setEvents] = useState([
    { id: 1, title: "Evento 1" },
    { id: 2, title: "Evento 2" },
    { id: 3, title: "Evento 3" },
    { id: 4, title: "Evento 4" },
  ]);

  const addEvent = () => {
    const newEvent = {
      id: Math.random() * 10000,
      title: `Evento ${events.length + 1}`,
    };

    setEvents([...events, newEvent]);
  };

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h3>Lista de Transiciones</h3>
      <TransitionGroup component="ul" className="event-list">
      <button onClick={addEvent}>Añadir Evento</button>
        {events.map((event) => (
          <CSSTransition key={event.id} timeout={600} classNames="event">
            <li className="event-item" onClick={() => removeEvent(event.id)}>
              {event.title}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
