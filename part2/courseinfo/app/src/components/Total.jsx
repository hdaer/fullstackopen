const Total = ({ parts }) => {
  return (
    <p>
      <strong>
        Total number of exercises{" "}
        {parts.reduce((acc, curr) => acc + curr.exercises, 0)}
      </strong>
    </p>
  );
};

export default Total;
