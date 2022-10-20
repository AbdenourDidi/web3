import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

const OkButton = () => {
  const { countOk, increaseOk } = useContext(CounterContext);
  return (
    <p>Ok : {countOk} <button onClick={increaseOk}>increase Ok</button></p>
  );
};

export default OkButton;
