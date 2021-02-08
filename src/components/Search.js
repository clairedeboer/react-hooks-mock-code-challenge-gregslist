import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchedWord, setSearchedWord] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const handleSearchChange = (searchedWord) => {
    setSearchedWord(searchedWord)
    onSearchChange(searchedWord)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedWord}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
