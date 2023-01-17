import { useContext } from "react";
import { Context as VotesContext } from "../../contexts/VotesContext";

const ButtonVote = () => {
  const { listOpinion, increaseVote } = useContext(VotesContext);
  return (
    <div>
      {listOpinion.map((opinion) => (
        <li key={opinion.id}>
          {opinion.name} : {opinion.vote}{" "}
          <button onClick={() => increaseVote(opinion.id)}>vote</button>
        </li>
      ))}
    </div>
  );
};

export default ButtonVote;
