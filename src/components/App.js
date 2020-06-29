import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/App.css";

const App = () => {
  const [, setSearchResults] = useState();
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
      />
      <Search setSearchResultList={setSearchResults} />
      <SearchResults />
    </div>
  );
};

export default App;
