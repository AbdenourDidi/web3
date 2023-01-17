import personService from "./services/Persons";
import { useEffect, useState } from "react";

const App = () => {
  const [newNum, setNewNum] = useState();
  const [newName, setNewName] = useState("");
  const [persons, setPersons] = useState([]);

  const hook = () => {
    personService.getAll().then((reponse) => {
      setPersons(reponse.data);
    });
  };

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNum,
      id: persons.length + 1,
    };

    if (
      persons.find((person) => {
        return person.name === newPerson.name;
      })
    ) {
      alert(newName + " is already added to phonebook");
      setNewName("");
      setNewNum("");
    } else {
      personService.create(newPerson).then((response) => {
        setPersons([...persons, newPerson]);
        setNewName("");
        setNewNum("");
      });
    }
  };

  const handleSubmitName = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmitNumber = (e) => {
    setNewNum(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleSubmitName} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleSubmitNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>
            {p.name} {p.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
