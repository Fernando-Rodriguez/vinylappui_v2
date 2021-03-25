/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AlbumContext } from '../../context/AlbumProvider';

import AddAlbum from './AddAlbum/AddAlbum';
import TableRowItem from './TableRow/TableRowItem';

import './TablePage.css';

const TablePage = () => {
  const [
    albums,
    setAlbums,
    filteredAlbums,
  ] = useContext(AlbumContext);

  const [addAlbumBool, setAddAlbumBool] = useState(false);

  const TableRows = () => {
    const newAlbums = filteredAlbums();

    if (albums !== undefined) {
      return (
        <div className="table-row-body">
          {newAlbums.map((album) => (
            <TableRowItem key={album.id} album={album} />
          ))}
        </div>
      );
    }

    return (
      <div>Loading...</div>
    );
  };

  return (
    <div className="table-container">
      <div
        className="add-album-button-container"
        role="button"
        tabIndex="0"
        onClick={() => setAddAlbumBool(!addAlbumBool)}
        onKeyDown={() => {}}
      >
        <div className={addAlbumBool ? 'button-item isActive' : 'button-item'}>
          {addAlbumBool && <AddAlbum className="add-albums" />}
          <span>Add Album</span>
          <i className="far fa-plus-square" />
        </div>
      </div>
      <div className="table-whole">
        <div className="table-header-row">
          <p className="table-header-item">Artist</p>
          <p className="table-header-item">Album</p>
          <p className="table-header-item">Rating</p>
          <p className="table-header-item">User</p>
        </div>
        {TableRows()}
      </div>
    </div>
  );
};

export default TablePage;
