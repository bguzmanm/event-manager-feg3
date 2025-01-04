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
import PortalView from "./views/PortalView";
import ProfilerView from "./views/ProfilerView";
import ReconciliationView from "./views/ReconciliationView";
import StrictModeView from "./views/StrictModeView";
import PropTypeView from "./views/PropTypeView";
import UncontrolledView from "./views/UncontrolledView";
import WebComponentView from "./views/WebComponentView";

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
        <button onClick={() => setView("portals")}>Portales</button>
        <button onClick={() => setView("profiler")}>Profiler</button>
        <button onClick={() => setView("reconciliation")}>
          Reconciliación
        </button>
        <button onClick={() => setView("strictmode")}>Modo Estricto</button>
        <button onClick={() => setView("proptype")}>PropTypes</button>
        <button onClick={() => setView("uncontrolled")}>No Controlados</button>
        <button onClick={() => setView("webcomponent")}>WebComponent</button>
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
      {view === "portals" && <PortalView />}
      {view === "profiler" && <ProfilerView />}
      {view === "reconciliation" && <ReconciliationView />}
      {view === "strictmode" && <StrictModeView />}
      {view === "proptype" && <PropTypeView />}
      {view === "uncontrolled" && <UncontrolledView />}
      {view === "webcomponent" && <WebComponentView />}
    </div>
  );
}

export default App;
