import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

const GoodButton = () => {
  const { countGood, increaseGood } = useContext(CounterContext);
  return (
    <p>
      Good : {countGood} <button onClick={increaseGood}>increase Good</button>
    </p>
  );
};

export default GoodButton;
