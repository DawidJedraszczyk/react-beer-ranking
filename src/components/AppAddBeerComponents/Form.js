import React, { useState } from "react";

function Form(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredRate, setEnteredRate] = useState(0);
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredImage, setEnteredImage] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const rateChangeHandler = (event) => {
    setEnteredRate(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newBeerData = {
      name: enteredName,
      rating: enteredRate,
      description: enteredDescription,
      image: enteredImage,
    };

    props.onSaveNewBeer(newBeerData);
    setEnteredName("");
    setEnteredRate(0);
    setEnteredDescription("");
    setEnteredImage("");
  };

  return (
    <form>
      <div className="inputs-container">
        <div className="input-file">
          <label for="photo">Add photo:</label>
          <input
            type="file"
            id="photo"
            value={enteredImage}
            onChange={imageChangeHandler}
          ></input>
        </div>
        <div className="input-name">
          <label for="name">Input name:</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="input-rate">
          <label for="rate">Rate:</label>
          <input
            type="number"
            min="0"
            value={enteredRate}
            max="5"
            id="rate"
            onChange={rateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="input-description">
        <label for="description">Input description:</label>
        <input
          type="text"
          id="description"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        ></input>
      </div>
      <button className="submit-btn" onClick={submitHandler}>
        SUBMIT
      </button>
    </form>
  );
}
export default Form;
