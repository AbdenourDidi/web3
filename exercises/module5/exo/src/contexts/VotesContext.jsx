import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

const Context = React.createContext(null);

export default Context;

const ProviderWrapper = (props) => {
  const [listOpinion, setListOpinion] = useState([
    { name: "Opinion A", vote: 1, id: uuid() },
  ]);

  const increaseVote = (id) => {
    const opinion = listOpinion.find((n) => n.id === id);
    const changedOpinion = { ...opinion, vote: opinion.vote + 1 };
    setListOpinion(
      listOpinion.map((opinion) =>
        opinion.id !== id ? opinion : changedOpinion
      )
    );
  };

  const addOpinion = (name) => {
    const newOpinion = {
      name: name,
      vote: 1,
      id: uuid(),
    };

    setListOpinion([...listOpinion, newOpinion]);
  };

  const exposedValue = {
    listOpinion,
    increaseVote,
    addOpinion,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
