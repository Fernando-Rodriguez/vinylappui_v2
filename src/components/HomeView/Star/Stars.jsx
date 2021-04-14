import React from 'react';
import './Stars.css';

const Star = ({ numStars }) => {
  const starHandler = () => {
    const currentStars = numStars || 0;
    // const starBundle = [];

    // // eslint-disable-next-line no-plusplus
    // for (let i = 1; i < 6; i++) {
    //   starBundle.push(<i className="fas fa-star" />);
    // }

    return (
      <>
        <div className={currentStars > 0 ? 'star-item white' : 'star-item black'}>
          <i className="fas fa-star" />
        </div>
        <div className={currentStars > 1 ? 'star-item white' : 'star-item black'}>
          <i className="fas fa-star" />
        </div>
        <div className={currentStars > 2 ? 'star-item white' : 'star-item black'}>
          <i className="fas fa-star" />
        </div>
        <div className={currentStars > 3 ? 'star-item white' : 'star-item black'}>
          <i className="fas fa-star" />
        </div>
        <div className={currentStars > 4 ? 'star-item white' : 'star-item black'}>
          <i className="fas fa-star" />
        </div>
      </>
    );

    // return starBundle.map((star, index) => (
    //   <div
    //     className={index < currentStars ? 'star-item white' : 'star-item black'}
    //     id={index}
    //   >
    //     {star}
    //   </div>
    // ));
  };

  return (
    <div className="star-container">
      {starHandler()}
    </div>
  );
};

export default Star;
