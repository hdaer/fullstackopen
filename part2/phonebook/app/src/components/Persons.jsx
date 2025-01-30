import Person from "./Person";

const Persons = ({ personsToDisplay }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {personsToDisplay.map((person) => (
        <Person person={person} key={person.id} />
      ))}
    </ul>
  );
};

export default Persons;
