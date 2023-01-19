import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context as WebContext } from "../../contexts/webAppContext";

const Children = () => {
  const { id } = useParams();
  const { getChildWithEvents } = useContext(WebContext);
  const children = getChildWithEvents(id);
  console.log(children);

  return (
    <div>
      <p>{children.birthDate}</p>
    </div>
  );
};

export default Children;
