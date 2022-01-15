import React from "react";
import Accordion from "./components/Accordion";

// creating items array -
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

const App = function () {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
