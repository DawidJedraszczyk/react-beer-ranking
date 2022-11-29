import "./Beer.css";
import changeIcon from "./../../img/change.png";
import BeerInfo from "./BeerInfo";
import removeIcon from "./../../img/remove.png";
import React, { useState } from "react";

function Beer(props) {
  const [isClicked, setIsClicked] = useState(false);

  function clicked() {
    if (isClicked) {
      closeContainer();
      return;
    }
    setIsClicked(true);
  }
  function closeContainer() {
    setIsClicked(false);
  }

  const [removeState, setRemoveState] = useState(false);

  function removeClicked(event) {
    event.stopPropagation();
    setRemoveState(true);
    removeHandler();
  }

  const removeHandler = (event) => {
    const removeStatusCalled = {
      status: removeState,
      id: props.name,
    };
    props.onSaveRemoveState(removeStatusCalled);
  };

  const [changeState, setChangeState] = useState(false);

  function changeClicked(event) {
    event.stopPropagation();
    setChangeState(true);
    changeHandler();
  }

  const changeHandler = (event) => {
    const changeStatusCalled = {
      status: changeState,
      id: props.name,
    };
    props.onSaveChangeState(changeStatusCalled);
  };
  return (
    <div
      className={`beer-container ${isClicked ? "clicked" : ""}`}
      onClick={clicked}
    >
      <div className={`change-info-btn ${props.iconsStatus ? "clicked" : ""}`}>
        <img src={changeIcon} alt="change rating" onClick={changeClicked}></img>
        <img src={removeIcon} alt="remove beer" onClick={removeClicked}></img>
      </div>
      <BeerInfo
        name={props.name}
        rating={props.rating}
        image={props.image}
        description={props.description}
        wasClicked={isClicked}
      />
    </div>
  );
}
export default Beer;
