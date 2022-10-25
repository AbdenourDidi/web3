import { useState, useContext } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";

const AddButton = () => {
  const { createOpinion } = useContext(VoteContext);
  const [newOpinion, setNewOpinion] = useState("");

  const handleOpinionChange = (event) => {
    console.log(event.target.value);
    setNewOpinion(event.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createOpinion(newOpinion);
      }}
    >
      <input value={newOpinion} onChange={handleOpinionChange} />
      <button type="submit">Add Opinion</button>
    </form>
  );
};

export default AddButton;
