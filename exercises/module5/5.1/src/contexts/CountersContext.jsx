import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [countGood, setCountGood] = useState(0);
  const [countBad, setCountBad] = useState(0);
  const [countOk, setCountOk] = useState(0);

  const increaseGood = () => {
    setCountGood(countGood + 1);
  };

  const increaseBad = () => {
    setCountBad(countBad + 1);
  };

  const increaseOk = () => {
    setCountOk(countOk + 1);
  };

  const resetAll = () => {
    setCountGood(0);
    setCountBad(0);
    setCountOk(0);
  };

  const exposedValue = {
    countGood,
    increaseGood,
    countBad,
    increaseBad,
    countOk,
    increaseOk,
    resetAll,
  };
  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
