import StrictModeExample from "../components/StrictModeExample";

export default function StrictModeView() {
  return (
    <div>
      <h1>Modo Estricto</h1>
      <p>Ejemplo que demuestra como `React.StrictMode` detecta problemas potenciales como efectos secundarios o métodos obsoletos</p>
      <StrictModeExample />
    </div>
  )
}