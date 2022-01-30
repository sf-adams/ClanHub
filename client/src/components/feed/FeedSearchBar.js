import React, { useState, useEffect } from "react";

const FeedSearchBar = ({search, handleSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

    useEffect(() =>{
        document.getElementById("search").value='';
        setSearchCriteria('')
    }, [search])


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
