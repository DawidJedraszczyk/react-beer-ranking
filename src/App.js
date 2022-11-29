import "./App.css";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import React, { useState } from "react";
import BeerList from "./Beers.json";
import AppAddBeer from "./components/AppAddBeer";
import AppFoundBeer from "./components/AppFoundBeer";
import AppChangeRating from "./components/AppChangeRating";

function App() {
  const [listOfBeers, setListOfBeers] = useState(
    BeerList.beersList.sort((a, b) => b.rating - a.rating)
  );

  const [searchingItem, setSearchingItem] = useState("");

  const saveBeerNameHandler = (enteredBeerName) => {
    const beerName = {
      enteredBeerName,
      id: Math.random().toString(),
    };
    setSearchingItem(beerName.enteredBeerName.name);
  };

  function findBeerByName(name) {
    return listOfBeers.find((element) => {
      return element.name === name;
    });
  }

  const found = findBeerByName(searchingItem);

  const [addNewBeerData, setAddNewBeerData] = useState("");

  const connectAppAndAddBeer = (data) => {
    const newBeer = {
      data,
      id: Math.random().toString(),
    };
    setAddNewBeerData(newBeer.data);
    const newListOfBeers = [...listOfBeers, newBeer.data];
    newListOfBeers.sort((a, b) => b.rating - a.rating);
    setListOfBeers(newListOfBeers);
  };

  const [addModalStatus, setAddModalStatus] = useState(false);

  const addModalHandler = (status) => {
    const modalHidden = {
      status,
      id: Math.random().toString(),
    };
    setAddModalStatus(modalHidden.status.state);
  };

  const [optionStatusHandler, setOptionStatusHandler] = useState(false);

  const connectAppAndHeaderOptionStatus = (status) => {
    const optionStatus = {
      status,
      id: Math.random().toString(),
    };
    setOptionStatusHandler(optionStatus.status.status);
  };

  const [removeStatusHandler, setRemoveStatusHandler] = useState(false);
  const connectAppAndContainerRemoveStatus = (status) => {
    const removeStatus = {
      status,
      id: Math.random().toString(),
    };
    setRemoveStatusHandler(removeStatus.status);
    const newListOfBeers = listOfBeers.filter(
      (item) => item.name !== removeStatus.status.status.id
    );
    newListOfBeers.sort((a, b) => b.rating - a.rating);
    setListOfBeers(newListOfBeers);
  };

  const [changeStatusHandler, setChangeStatusHandler] = useState(false);
  const connectAppAndContainerChangeStatus = (status) => {
    const changeStatus = {
      status,
      id: Math.random().toString(),
    };
    setChangeStatusHandler(changeStatus.status);
    const enteredNewRate = prompt(`Rate ${changeStatus.status.status.id}`);
    const newListOfBeers = listOfBeers.map((obj) => {
      if (obj.name === changeStatus.status.status.id) {
        return { ...obj, rating: enteredNewRate };
      }
      return obj;
    });
    newListOfBeers.sort((a, b) => b.rating - a.rating);
    setListOfBeers(newListOfBeers);
  };
  return (
    <div className="app">
      <AppHeader
        onSaveBeerName={saveBeerNameHandler}
        onSaveClickedAdd={addModalHandler}
        onSaveOptionClicked={connectAppAndHeaderOptionStatus}
      />
      <AppAddBeer
        visibilityStatus={addModalStatus}
        transportData={connectAppAndAddBeer}
      />
      <AppFoundBeer element={found} />
      <AppChangeRating />
      <AppContainer
        list={listOfBeers}
        iconsStatus={optionStatusHandler}
        onSaveRemoveClicked={connectAppAndContainerRemoveStatus}
        onSaveChangeClicked={connectAppAndContainerChangeStatus}
      />
    </div>
  );
}

export default App;
