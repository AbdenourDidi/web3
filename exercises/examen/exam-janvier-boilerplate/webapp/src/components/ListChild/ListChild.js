import { BrowserRouter as Router, Link } from "react-router-dom";

const ListChild = ({ childrens }) => {
  return (
    <div>
      {childrens.map((child) => (
        <li key={child.id}>
          <Link to={`/children/${child.id}`}>{child.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default ListChild;
