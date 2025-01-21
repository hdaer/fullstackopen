const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name} you are {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 25;

  const friends = ["Maya", "John", "Magda"];

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="John" />
      <Hello name="Magda" />

      <p>{friends.map((friend) => `bello ${friend} `)}</p>

      <Hello name={name} age={age} />
      <Hello name="Maya" age={10 + 20} />
    </div>
  );
};
export default App;
