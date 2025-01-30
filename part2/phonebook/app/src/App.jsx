import { useEffect, useState } from "react";
import axios from "axios";

// import initialPersons from "./data/persons.json";

import Filter from "./components/Filter";
import NewPersonForm from "./components/NewPersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newPerson, setNewPerson] = useState({ name: "", number: "", id: "" });
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    const getNumbers = async () => {
      const respons = await axios.get("http://localhost:3001/persons");
      const initialPersons = respons.data;
      console.log("data received");
      setPersons(initialPersons);
    };
    getNumbers();
  }, []);

  console.log("render", persons.length, "persons/numbers");

  const personsToDisplay = nameFilter
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(nameFilter);
      })
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNameFilter={setNameFilter} />
      <h2>add new name and number</h2>
      <NewPersonForm
        persons={persons}
        setPersons={setPersons}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <h2>Numbers</h2>
      <Persons personsToDisplay={personsToDisplay} />
    </div>
  );
};

export default App;
