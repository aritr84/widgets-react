import React, { useState, useEffect } from "react";

const Dropdown = function ({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        //console.log("Body clicked");
        setOpen(false);
      },
      { capture: true }
      // for react v17 we have to add this so that addEventListener() can function properly.
      // 1st - addEventListener will be called
      // then - event listeners added using react and it will follow event bubbling.
    );
  }, []);
  const renderedOPtion = options.map((option) => {
    // remove the duplicate element -
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          //console.log("Item Clicked");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            //console.log("Dropdown clicked");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible open" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? `visible transition` : ""}`}
          >
            {renderedOPtion}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
