
export default function Cell(props) {
    return (
      <>
      <div
        key={props.number}
        className="cell tooltip"
        data-category={props.category}
        style={{
          gridRowStart: props.ypos,
          gridColumnStart: props.xpos,
          visibility: props.visible ? "visible" : "hidden",
        }}
      >
        <span className="number">{props.number}</span>
        <span className="symbol">{props.symbol}</span>
        <span className="name">{props.name}</span>
      </div>
      </>
    );
  }