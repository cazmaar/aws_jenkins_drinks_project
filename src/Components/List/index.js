import React from "react";
import "./list.css";

// List component to create each list to be displayed
function List({ image, name, idNumber, showModal }) {
  
  return (
    <div className="list-section">
      <li className="drink-modal">
        <img
          className="image-p"
          onClick={() => {
            showModal(true, idNumber);
          }}
          src={image}
          alt={`${name} cocktails`}
        />
      </li>
      <li
        onClick={() => {
          showModal(true, idNumber);
        }}
        className="drink_name"
      >
        {name}
      </li>
    </div>
  );
}

export default List;
