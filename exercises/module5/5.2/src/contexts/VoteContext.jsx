import React, { useState } from "react";
import uuid from "react-uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [listOpinion, setListOpinion] = useState([
    { name: "Opinion A", vote: 1, id: uuid() },
  ]);

  const createOpinion = (name) => {
    console.log(name);
    // event.preventDefault();
    const opinion = {
      name,
      vote: 1,
      id: uuid(),
    };
    console.log(opinion);
    //listOpinion.push(opinion);
    const newList = [...listOpinion, opinion];
    setListOpinion(newList);
    console.log(newList);
  };

  const addVote = (id) => {
    const opinion = listOpinion.find((n) => n.id === id);
    const changedOpinion = { ...opinion, vote: opinion.vote + 1 };

    setListOpinion(
      listOpinion.map((opinion) =>
        opinion.id !== id ? opinion : changedOpinion
      )
    );
  };

  const exposedValue = {
    listOpinion,
    createOpinion,
    addVote,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
