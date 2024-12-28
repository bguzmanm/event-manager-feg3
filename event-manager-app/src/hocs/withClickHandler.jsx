export default function withClickHandler(WrapperComponent) {
  return function ClickHandlerComponent(props) {
    const handleClick = () => {
      console.log(`componente cliqueado: ${props.name}`);  
    }
    return (
      <div onClick={handleClick}>
        <WrapperComponent {...props} />
      </div>
    )

  }
}
