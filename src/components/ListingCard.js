import React, { useState } from "react";

function ListingCard({ id, description, image, location, onRemoveListing }) {

  const [isLiked, setLiked] = useState(false);

  const handleToggleLike = () => {
    setLiked((isLiked) => !isLiked)
  }

  const handleDeleteClick = () => {
    onRemoveListing(id); 
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleToggleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleToggleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
