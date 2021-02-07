import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is react?",
    content: "React is a react and bla bla bal"
  },
  {
    title: "Why use react",
    content: "Because use react because..."
  },
  {
    title: "How do you use react",
    content: "You do not use react"
  }
];

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  }
];

const App = () => {
  return (
      <div>
        <Dropdown options={options} />
      </div>
  );
};

export default App;
