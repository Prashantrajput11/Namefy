import React from "react";

const SearchBar = ({onInputChange}) => {
  return (
    <div className="searchbar">
      <input
      onChange={(e)=>onInputChange(e.target.value)}
        type="text"
        placeholder="enter keywords..."
        className="search-input"
      ></input>
    </div>
  );
};

export default SearchBar;
