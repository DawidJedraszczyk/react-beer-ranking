import Rating from "./Rating";
import "./BeerInfo.css";

function BeerInfo(props) {
  return (
    <div className="beer-info">
      <div className="main-info">
        <img src={props.image} alt="beer" />
        <div className="beer-name">
          <b>{props.name}</b>
        </div>
        <Rating rate={props.rating} />
      </div>
      <div className={`beer-description ${props.wasClicked ? "clicked" : ""}`}>
        <i>
          <p>{props.description}</p>
        </i>
      </div>
    </div>
  );
}

export default BeerInfo;
