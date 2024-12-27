import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import "./App.css";

function App() {
  // Estado para controlar la vista actual
  const [view, setView] = useState("home");

  return (
    <div className="App">
      <Header />
      <nav>
        {/* Botones para cambiar la vista */}
        <button onClick={() => setView("home")}>Inicio</button>
      </nav>
      {/* Mostramos la vista actual */}
      {view === "home" && <Home />}
    </div>
  );
}

export default App;