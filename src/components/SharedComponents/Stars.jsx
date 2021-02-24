import React from 'react';

const Star = ({ numStars }) => (
  <div className="star-container">
    {numStars.map((num) => <i className="fas fa-star" key={num} />)}
  </div>
);

export default Star;
