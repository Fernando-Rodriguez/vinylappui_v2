/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AlbumMethodContext } from '../../../context/AlbumMethodProvider';
import CustomButton from '../../SharedComponents/CustomButton';
import EditOptions from '../EditOptions/EditOptions';
import './TableRowItem.css';

const TableRowItem = ({ album }) => {
  const [
    addAlbumHandler,
    deleteAlbumHandler,
    updateAlbumHandler,
  ] = useContext(AlbumMethodContext);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="row-container-main">
      <div className={isOpen ? 'row-container open' : 'row-container'}>
        <p className="row-item">{album.artist}</p>
        <p className="row-item">{album.album}</p>
        <p className="row-item">{album.rating}</p>
        <p className="row-item">{album.user}</p>
        <p className="row-item">
          {/* <button type="button" onClick={openHandler}>Edit</button> */}
          <CustomButton type="button" clickHandler={openHandler}>Edit</CustomButton>
        </p>
        <p className="row-item">
          {/* <button type="button" onClick={() => deleteAlbumHandler(album.id)}>Delete</button> */}
          <CustomButton
            type="button"
            clickHandler={() => deleteAlbumHandler(album.id)}
          >
            Delete
          </CustomButton>
        </p>
      </div>
      {isOpen && (
        <div className="edit-container-row">
          <EditOptions
            album={album}
            openHandler={openHandler}
          />
        </div>
      )}
    </div>
  );
};

export default TableRowItem;
