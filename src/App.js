import React from "react";
import "./App.css";

export const App = props => {
  const onRemoveClick = evt => props.removeItem();

  return (
    <div className="App">
      {props.items.map((item, index) => {
        let className = "";
        if (index === props.selectedIndex) {
          className = "selected";
        }

        const onItemClick = evt => props.selectItem(index);

        return (
          <div key={index} className={className} onClick={onItemClick}>
            {item}
          </div>
        );
      })}

      <div>
        <button disabled={props.selectedIndex === null} onClick={onRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
};
