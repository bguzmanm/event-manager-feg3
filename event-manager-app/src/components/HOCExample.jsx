import withClickHandler from "../hocs/withClickHandler"
import withExtraInfo from "../hocs/withExtraInfo";
import BaseComponent from "./BaseComponent"

const ClickableComponent = withClickHandler(BaseComponent);
const EnhancedComponent = withExtraInfo(ClickableComponent);

export default function HOCExample() {
  return (
    <div>
      <h2>Ejemplo de Componentes de Order Superior</h2>
      <EnhancedComponent name="Extendido" />
    </div>
  )
}