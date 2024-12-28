import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import "./App.css";
import SocketIOView from "./views/SocketIOView";
import LazyLoadingView from "./views/LazyLoadingView";
import TransformableEventsView from "./views/TransformableEventsView";
import CategoryView from "./views/CategoryView";
import FragmentView from "./views/FragmentView";
import TransitionView from "./views/TransitionView";
import HOCView from "./views/HOCView";

function App() {
  // Estado para controlar la vista actual
  const [view, setView] = useState("home");

  return (
    <div className="App">
      <Header />
      <nav>
        {/* Botones para cambiar la vista */}
        <button onClick={() => setView("home")}>Inicio</button>
        <button onClick={() => setView("socketio")}>Socket.io</button>
        <button onClick={() => setView("lazy")}>División de Código</button>
        <button onClick={() => setView("transform")}>
          Transformar Elementos
        </button>
        <button onClick={() => setView("categories")}>Categorías</button>
        <button onClick={() => setView("fragment")}>Fragmentos</button>
        <button onClick={() => setView("transitions")}>Transiciones</button>
        <button onClick={() => setView("hocs")}>HOCs</button>
      </nav>
      {/* Mostramos la vista actual */}
      {view === "home" && <Home />}
      {view === "socketio" && <SocketIOView />}
      {view === "lazy" && <LazyLoadingView />}
      {view === "transform" && <TransformableEventsView />}
      {view === "categories" && <CategoryView />}
      {view === "fragment" && <FragmentView />}
      {view === "transitions" && <TransitionView />}
      {view === "hocs" && <HOCView />}
    </div>
  );
}

export default App;
