import React from 'react';

const Star = ({numStars}) => {
    return(
        <div className="star-container">
            {numStars.map((num) => {
                return <i className="fas fa-star" key={num}></i>
            })}
        </div>
    );
};

export default Star;