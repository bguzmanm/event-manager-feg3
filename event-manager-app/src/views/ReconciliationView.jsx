import BadReconciliationList from "../components/BadReconciliationList";
import ReconciliationList from "../components/ReconciliationList";

export default function ReconciliationView() {
  return (
    <div>
      <h1>Reconciliación en React</h1>
      <p>Ejemplo de una lista bien implementada y una lista con claves incorrectas</p>
      <ReconciliationList />
      <BadReconciliationList />
    </div>
  )
}