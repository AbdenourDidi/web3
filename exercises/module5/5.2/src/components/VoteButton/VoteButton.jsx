import { useContext } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";

const VoteButton = () => {
  const { listOpinion, addVote } = useContext(VoteContext);
  console.log(listOpinion);
  return listOpinion.map((opinion) => (
    <li key={opinion.id}>
      {opinion.name} : {opinion.vote}{" "}
      <button onClick={() => addVote(opinion.id)}>Vote</button>
    </li>
  ));
};

export default VoteButton;
