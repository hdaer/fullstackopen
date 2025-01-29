/* eslint-disable react/prop-types */
import Course from "./components/Course";
import courses from "./data/courses.json";

const App = () => {
  return (
    <>
      <h1>Web Development Curriculum</h1>

      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </>
  );
};

export default App;
