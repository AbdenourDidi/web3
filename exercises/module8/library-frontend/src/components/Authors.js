import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../graphql-querries";

const Authors = (props) => {
  const [name, setName] = useState("");
  const [birthyear, setBirthyear] = useState("");
  const result = useQuery(ALL_AUTHORS);
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  if (!props.show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  const update = async (event) => {
    event.preventDefault();
    editAuthor({ variables: { name, born: parseInt(birthyear) } });
    setBirthyear("");
    setName("");
  };

  const HandleSubmitName = (e) => {
    setName(e.target.value);
  };

  const HandleSubmitBorn = (e) => {
    setBirthyear(e.target.value);
  };

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <form onSubmit={update}>
        <div>
          name:
          <input type="text" onChange={HandleSubmitName} value={name} />
        </div>
        <div>
          born:
          <input type="number" onChange={HandleSubmitBorn} value={birthyear} />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default Authors;
