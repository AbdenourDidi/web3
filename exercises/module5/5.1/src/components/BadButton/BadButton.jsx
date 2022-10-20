import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

const BadButton = () => {
  const { countBad, increaseBad } = useContext(CounterContext);
  return (
    <p>
      Bad : {countBad} <button onClick={increaseBad}>increase bad</button>
    </p>
  );
};

export default BadButton;
