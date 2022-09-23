import React from "react";
import { useState } from "react";
import Button from "components/Button/Button";
import Display from "components/Display/Display";

const App = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => setCounter(counter + 1);
  const minus = () => setCounter(counter - 1);
  const zero = () => setCounter(0);
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={plus} text="plus" />
      <Button onClick={minus} text="minus" />
      <Button onClick={zero} text="zero" />
    </div>
  );
};

export default App;
