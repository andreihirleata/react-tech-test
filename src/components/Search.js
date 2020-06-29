import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = ({ setSearchResultList }) => {
  const [searchText, setSearchText] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResultList(await getImages(searchText));
  };

  return (
    <>
      <form className="form-search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Search;
