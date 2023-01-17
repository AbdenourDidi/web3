import { useContext } from "react";
import { Context as VotesContext } from "../../contexts/VotesContext";
import { useState } from "react";

const AddButton = () => {
  const { addOpinion } = useContext(VotesContext);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addOpinion(name);
          setName("");
        }}
      >
        <input type="text" value={name} onChange={handleSubmit} />
        <button type="submit">Add Opinion</button>
      </form>
    </div>
  );
};

export default AddButton;
