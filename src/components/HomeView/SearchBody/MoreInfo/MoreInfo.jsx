import React from 'react';
import './MoreInfo.css';

const MoreInfo = ({ album }) => (
  <div className="info-container">
    <div className="info-item-header">
      <div className="info-item">{ album.artist }</div>
      <div className="info-item">{ album.album }</div>
      <div className="info-item">
        Rating:
        { album.rating}
      </div>
    </div>
    <div className="info-item">Catch for Us the Foxes is the second studio album by the Philadelphia indie rock band mewithoutYou, released on October 15, 2004 by Tooth & Nail Records. </div>
  </div>
);

export default MoreInfo;
