import "./AppContainer.css";
import Beer from "./AppContainerComponents/Beer.js";
import React, { useState } from "react";

function AppContainer(props) {
  const [removeStatus, setRemoveStatus] = useState(false);

  const removeStatusHandler = (status) => {
    const removeState = {
      status,
      id: Math.random().toString(),
    };
    setRemoveStatus(removeState);
    props.onSaveRemoveClicked(removeState);
  };

  const [changeStatus, setChangeStatus] = useState(false);

  const changeStatusHandler = (status) => {
    const changeState = {
      status,
      id: Math.random().toString(),
    };
    setChangeStatus(changeState);
    props.onSaveChangeClicked(changeState);
  };
  return (
    <div className="beers">
      {props.list.map((beer) => (
        <Beer
          name={beer.name}
          rating={beer.rating}
          image={beer.image}
          description={beer.description}
          iconsStatus={props.iconsStatus}
          onSaveRemoveState={removeStatusHandler}
          onSaveChangeState={changeStatusHandler}
        />
      ))}
    </div>
  );
}
export default AppContainer;
