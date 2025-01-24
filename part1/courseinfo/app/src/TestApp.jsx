/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ value }) => <div>{value}</div>;

const TestApp = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button onClick={setToValue(1000)} text="1000" />
      <Button onClick={setToValue(0)} text="0" />
      <Button onClick={setToValue(value + 1)} text="plus1" />
      {/* <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>plus1</button> */}
    </div>
  );
};

export default TestApp;
