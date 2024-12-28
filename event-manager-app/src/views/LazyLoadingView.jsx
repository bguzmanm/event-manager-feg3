import { lazy, Suspense, useState } from "react";

const LazyLoadedComponent = lazy(() =>
  import("../components/LazyLoadedComponent")
);

export default function LazyLoadingView() {
  const [loadComponent, setLoadComponent] = useState(false);

  return (
    <div>
      <h1>Vista de Carga Diferida por Click</h1>
      <button onClick={() => setLoadComponent(true)}>Cargar Componente</button>
      {loadComponent && (
        <Suspense fallback={<p>Cargando componente....</p>}>
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
}
