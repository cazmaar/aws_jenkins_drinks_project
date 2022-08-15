import React, { useState, useEffect } from "react";
import List from "../List";
import "./displaylist.css";
import axios from "axios";


// maps through the fectehedData so it can be displayed.
function DisplayList({ data, showModal }) {
  
  return (
    data.length > 0 && (
      <ul className="drinks">
        {data.map((drink) => {
          return (
            <List
              showModal={showModal}
              image={drink.strDrinkThumb}
              name={drink.strDrink}
              key={drink.idDrink}
              idNumber={drink.idDrink}
            />
          );
        })}
      </ul>
    )
  );
}

export default DisplayList;
