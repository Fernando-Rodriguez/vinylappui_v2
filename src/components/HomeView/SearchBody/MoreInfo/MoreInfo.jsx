import React from 'react';
import Stars from '../../../SharedComponents/Stars';
import './MoreInfo.css';

const MoreInfo = ({ album, clickHandler }) => (
  <div className="info-container">
    <button
      onClick={clickHandler}
      type="button"
      className="info-click-button"
    >
      Check Out Album!
    </button>
    <div className="info-item-header">
      <div className="info-item">{ album.artist }</div>
      <div className="info-item">{ album.album }</div>
      <div className="info-item">
        <Stars numStars={album.rating} />
      </div>
    </div>
    <div className="info-item">Definitely one of my favorite albums of all time. It really set the tone for the rest of the bands career. The vinyl also sounds really good.</div>
  </div>
);

export default MoreInfo;
