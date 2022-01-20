import React, { useState } from "react";
//import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// creating items array for Accordion -
// then passing the items as a prop to Accordion component
const items = [
  {
    title: "What is react?",
    content: "React is front end javascript framework.",
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use react",
    content: "You use react by creating components",
  },
];

// creating options array for Dropdown -
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = function () {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
