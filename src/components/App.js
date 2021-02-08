import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [displayListings, setDisplayListings] = useState(listings);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listingsData) => {
        setListings(listingsData);
        setDisplayListings(listingsData);
      });
  }, []);

  const onSearchChange = (searchedWord) => {
    const filteredListings = listings.filter((listing) => {
      return listing.description
        .toLowerCase()
        .includes(searchedWord.toLowerCase());
    });
    setDisplayListings(filteredListings);
  };

  const handleRemoveListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((listingsData) => {
        const nonDeletedListings = listings.filter(
          (listing) => listing.id !== id
        );
        setDisplayListings(nonDeletedListings);
      });
  };

  return (
    <div className="app">
      <Header onSearchChange={onSearchChange} />
      {listings.length ? (
        <ListingsContainer
          onRemoveListing={handleRemoveListing}
          listings={displayListings}
        />
      ) : null}
    </div>
  );
}

export default App;
