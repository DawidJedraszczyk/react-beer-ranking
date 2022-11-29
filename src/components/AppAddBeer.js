import "./AppAddBeer.css";
import Form from "./AppAddBeerComponents/Form";
import React, { useState } from "react";

function AppAddBeer(props) {
  const [newBeerData, setNewBeerData] = useState();

  function connectFormAndComponent(data) {
    const newBeer = {
      data,
      id: Math.random().toString(),
    };
    //setNewBeerData(newBeer.data);
    props.transportData(newBeer.data);
  }
  return (
    <div
      className={`add-beer-container ${props.visibilityStatus ? "" : "showed"}`}
    >
      <Form onSaveNewBeer={connectFormAndComponent} />
    </div>
  );
}

export default AppAddBeer;
