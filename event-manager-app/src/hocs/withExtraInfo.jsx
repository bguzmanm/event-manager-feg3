export default function withExtraInfo(WrapperComponent) {
  return function ExtraInfoComponent(props) {
    const extraInfo = "Este componente tiene funcionalidad extendida";

    return (
      <div>
        <WrapperComponent {...props} />
        <p style={{ fontStyle: "italic", color: "#666" }}>{extraInfo}</p>
      </div>
    );
  };
}
