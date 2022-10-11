import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      num: newNum,
      id: persons.length + 1,
    };
    if (
      persons.find((person) => {
        return person.name === personObject.name;
      })
    ) {
      alert(newName + " is already added to phonebook");
      setNewName("");
      setNewNum("");
    } else {
      setPersons([...persons, personObject]);
      setNewName("");
      setNewNum("");
    }
  };

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePersonNumChange = (event) => {
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handlePersonNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
