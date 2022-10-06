import Content from "components/Content/Content";
import Header from "components/Header/Header";
import Total from "components/Total/Total";
import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total array={course.parts} />
    </div>
  );
};

export default Course;
