/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ onClick, buttonText }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

const Display = ({ text, amount }) => {
  return (
    <p>
      {text}
      {": "} {amount}
    </p>
  );
};

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = ((good * 100) / (good + neutral + bad))
    .toString()
    .concat("%");

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h1>Statistics</h1>
      <Display text="good" amount={good} />
      <Display text="neutral" amount={neutral} />
      <Display text="bad" amount={bad} />
      <Display text="all" amount={all} />
      <Display text="average" amount={average} />
      <Display text="positive" amount={positive} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (feedbackValue) => {
    if (feedbackValue === "good") setGood(good + 1);
    else {
      if (feedbackValue === "neutral") setNeutral(neutral + 1);
      else {
        setBad(bad + 1);
      }
    }
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => handleClick("good")} buttonText="good" />
      <Button onClick={() => handleClick("neutral")} buttonText="neutral" />
      <Button onClick={() => handleClick("bad")} buttonText="bad" />
      <Statistics feedback={{ good: good, neutral: neutral, bad: bad }} />
    </>
  );
};

export default App;
