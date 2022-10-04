import React from "react";
import { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <p>the app is used by pressing the buttons</p>;
  }

  return <p>button press history: {allClicks.join(" ")}</p>;
};

const Display = (value) => <p>{value.value}</p>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;
