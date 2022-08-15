import React, { useEffect, useState } from "react";
import css from "./input.module.css";

import { Input, Space } from "antd";
import axios from "axios";

const initialState = "";

// This is an input component. Gets the cocktail to search for.
function InputField({ handleData }) {
  // useRef to persist a value of false after each render in order to prevent useEffect from running on first render.

  const { Search } = Input;

  // useState to set the state for each value you entered.
  const [cocktail, setCocktail] = useState(initialState);
  const [fetcheddata, setFetchedData] = useState([]);

  // This function runs when you click on search.
  const onSearch = (value) => {
    setCocktail(value);
  };

  // An async function to fetch data from API
  const FetchApi = async () => {
    const response = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    setFetchedData(response.data.drinks);
  };

  // useEffect only runs when the value of cocktail changes.
  useEffect(() => {
    FetchApi();
  }, [cocktail]);

  useEffect(() => {
    handleData(fetcheddata);
  
  }, [fetcheddata]);

  return (
    <div className={css.inputSect}>
      <Space direction="vertical" className={css.inputSearch}>
        <Search
          className={css.input1}
          placeholder=" search for a cocktail..."
          onSearch={onSearch}
          style={{ width: 505 }}
        />
      </Space>
    </div>
  );
}

export default InputField;
