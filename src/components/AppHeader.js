import React, { useState } from "react";
import "./AppHeader.css";
import searchIcon from "./../img/search.png";
import addIcon from "./../img/plus.png";
import optionIcon from "./../img/option.png";

function AppHeader(props) {
  const [addModalHidden, setAddModalHidden] = useState(false);

  const addHandler = (event) => {
    const addState = {
      state: addModalHidden,
    };

    props.onSaveClickedAdd(addState);
  };

  function clickedAdd() {
    if (addModalHidden) {
      closeContainerAdd();
      addHandler();
      return;
    }
    setAddModalHidden(true);
    addHandler();
  }
  function closeContainerAdd() {
    setAddModalHidden(false);
  }

  const [enteredBeer, setEnteredBeer] = useState("");

  const inputBeer = (event) => {
    setEnteredBeer(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const addBeerName = {
      name: enteredBeer,
    };

    props.onSaveBeerName(addBeerName);
  };

  const [enteredStatus, setEnteredStatus] = useState(false);

  function clickedOption() {
    if (!enteredStatus) {
      openOptionModal();
      optionHandler();
      return;
    }
    setEnteredStatus(false);
    optionHandler();
  }

  function openOptionModal() {
    setEnteredStatus(true);
  }

  const optionHandler = (event) => {
    const optionStatus = {
      status: enteredStatus,
    };
    props.onSaveOptionClicked(optionStatus);
  };

  return (
    <header>
      <h1>
        Beer <span>RANKING</span>!
      </h1>
      <div className="search-bar">
        <input
          type="search"
          defaultValue={"find your beer"}
          onChange={inputBeer}
        ></input>
        <img
          className="loop"
          src={searchIcon}
          alt="search loop"
          onClick={searchHandler}
        ></img>
        <img
          className={`add ${addModalHidden ? "clicked" : ""}`}
          onClick={clickedAdd}
          src={addIcon}
          alt="add beer"
        ></img>
        <img
          className="options"
          src={optionIcon}
          alt="options"
          onClick={clickedOption}
        ></img>
      </div>
    </header>
  );
}
export default AppHeader;
