import React from 'react';
import './MoreInfo.css';

const MoreInfo = ({ album }) => (
  <div>
    <div>{ album.artist }</div>
    <div>{ album.album }</div>
    <div>{ album.rating}</div>
    <div>This would be a description of the album and whatnot</div>
  </div>
);

export default MoreInfo;
