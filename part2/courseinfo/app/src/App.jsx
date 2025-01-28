/* eslint-disable react/prop-types */
import Course from "./components/Course";
import courses from "./assets/courses.json";

const App = () => {
  return (
    <>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </>
  );
};

export default App;
