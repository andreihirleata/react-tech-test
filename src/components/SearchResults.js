import React from "react";

const SearchResults = ({ results }) => {
  if (!results.length) {
    console.log(results);
    return <p>No results</p>;
  } else console.log(results);
  return (
    <>
      <p>Search Results</p>
      <img
        className="card-image"
        src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="space"
      ></img>
    </>
  );
};

export default SearchResults;
