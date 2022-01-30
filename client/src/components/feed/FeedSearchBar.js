import React, { useState } from "react";

const FeedSearchBar = ({ handleSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleSearchChange = (ev) => {
    setSearchCriteria(ev.target.value);
  };

  return (
    <div className="search-wrapper">
      <label htmlFor="search">Search Posts:</label>
      <input type="search" id="search" onChange={handleSearchChange} />
      <button onClick={()=> {handleSearch(searchCriteria)}}>Search</button>
    </div>
  );
};

export default FeedSearchBar;
