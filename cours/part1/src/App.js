import React from "react";

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const Hello = (props) => {
  return (
    <p>
      Hello {props.name}, you are {props.age} year old
    </p>
  );
};
const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  );
};

export default App;
