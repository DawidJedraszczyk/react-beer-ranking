import "./AppFoundBeer.css";
import Beer from "./AppContainerComponents/Beer";
function AppFoundBeer(props) {
  if (props.element) {
    return (
      <Beer
        name={props.element.name}
        rating={props.element.rating}
        image={props.element.image}
        description={props.element.description}
      />
    );
  }
}

export default AppFoundBeer;
