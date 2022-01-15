import React, { useState } from "react";

const Accordion = function (props) {
  //initialize a new state -
  const [activeIndex, setActiveIndex] = useState(null);

  // helper function for the onClick event Handler
  const onTitleClick = function (index) {
    // update the state using -
    setActiveIndex(index);
  };

  // storing props.items in a variable -
  const items = props.items;
  //   const index = props.index;

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;

/* 
NOTE -
# React.Fragment vs div 
    - fragments and div act same i.e wrap a content
    - fragments are slighly faster than divs
    - fragments doesnot have methods and properties like(innerHTML) available but div has
    - can be used to act a outer wrapper div
    - normal syntax:
        <React.Fragment key= "abc"> </React.Fragment>
    - short syntax: 
        <> </> - but keys cant be used with it

# MAP() ARRAY METHOD - 

    arrayName.map((currentElement, index, arrayName) => {

    })
    Parameters for the call back function inside map -

    1) currentElement
    The current element being processed in the array.

    2) index
    The index of the current element being processed in the array.

    3) array
    The array map was called upon.

# HOOKS - 
    1. useState - this is a function from react library
         - it gives access of a state inside of functional components
    
        step 1 - import React, {useState} from 'react'
        step 2 - inside the component - 
                initialize the new state 
                const [stateName, setStateName] = useState(null);
        setStateName function - update the stateName state
        eg - take the example of setActiveIndex

        this can be written in another basic way -
        const stateArray = useState(null);
        console.log(stateArray);
        const activeIndex = stateArray[0];
        const setActiveIndex = stateArray[1];

        - whenever we call the setter function like setActiveIndex(2) - the functional component will re-render itself again automatically.



*/
