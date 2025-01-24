/* eslint-disable react/prop-types */
import { useState } from "react";

const History = ({ allClicks, totalClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return (
    <>
      <p>{allClicks.join(" ")}</p>
      <p>total: {totalClicks}</p>
    </>
  );
};

const Button = ({ onClick, buttonText }) => (
  <button onClick={onClick}>{buttonText}</button>
);

const TestApp = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    console.log("left before", left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log("left after", updatedLeft);
    setTotalClicks(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    console.log("right before", right);
    const updatedRight = right + 1;
    setRight(updatedRight);
    console.log("right after", right);
    setTotalClicks(left + updatedRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} buttonText={"left"} />
      <Button onClick={handleRightClick} buttonText={"right"} />
      {right}
      <History allClicks={allClicks} totalClicks={totalClicks} />
    </div>
  );
};

export default TestApp;
