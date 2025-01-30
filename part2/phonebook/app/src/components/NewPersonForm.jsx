import { v4 as uuid } from "uuid";

const NewPersonForm = ({ persons, setPersons, newPerson, setNewPerson }) => {
  const handleNameInput = (e) => {
    const nameInput = e.target.value;
    setNewPerson({ ...newPerson, name: nameInput });
  };

  const handleNumberInput = (e) => {
    const numberInput = e.target.value;
    setNewPerson({ ...newPerson, number: numberInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameExists = persons.some((person) => person.name === newPerson.name);
    const numberExists = persons.some(
      (person) => person.number === newPerson.number
    );
    if (nameExists || numberExists) {
      alert(
        `${newPerson.name} or ${newPerson.number} already exists. Please choose another name or check the phone number.`
      );
    } else {
      const id = uuid();
      const newPersonWithId = { ...newPerson, id: id };
      setPersons(persons.concat(newPersonWithId));
      setNewPerson({ name: "", number: "", id: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          type="text"
          value={newPerson.name}
          onChange={handleNameInput}
          placeholder="type name here ..."
        />
        <br />
        number:
        <input
          type="text"
          value={newPerson.number}
          onChange={handleNumberInput}
          placeholder="type number here ..."
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPersonForm;
