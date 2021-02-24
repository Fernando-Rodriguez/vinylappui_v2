/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AlbumMethodContext } from '../../../context/AlbumMethodProvider';
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
    <>
      <tr className={isOpen ? 'row-container open' : 'row-container'}>
        <td className="row-item">{album.artist}</td>
        <td className="row-item">{album.album}</td>
        <td className="row-item">{album.rating}</td>
        <td className="row-item">{album.user}</td>
        <td className="row-item">
          <button type="button" onClick={openHandler}>Edit</button>
        </td>
        <td className="row-item">
          <button type="button" onClick={() => deleteAlbumHandler(album.id)}>Delete</button>
        </td>
      </tr>
      {isOpen && (
        <tr className="row-container">
          <td colSpan="6">
            <div className="edit-container-row">
              <EditOptions
                album={album}
                openHandler={openHandler}
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRowItem;
