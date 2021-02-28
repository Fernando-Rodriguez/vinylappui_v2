/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AlbumContext } from '../../context/AlbumProvider';

import AddAlbum from './AddAlbum/AddAlbum';
import TableRowItem from './TableRow/TableRowItem';

import './TablePage.css';

const TablePage = () => {
  const [albums, setAlbums, filteredAlbums] = useContext(AlbumContext);

  const [addAlbumBool, setAddAlbumBool] = useState(false);

  const TableRows = () => {
    const newAlbums = filteredAlbums();

    if (albums !== undefined) {
      return (
        <tbody className="table-row-body">
          {newAlbums.map((album) => (
            <TableRowItem key={album.id} album={album} />
          ))}
        </tbody>
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
      <table className="table-whole">
        <thead>
          <tr className="table-header-row">
            <th className="table-header-item">Artist</th>
            <th className="table-header-item">Album</th>
            <th className="table-header-item">Rating</th>
            <th className="table-header-item">User</th>
          </tr>
        </thead>
        {TableRows()}
      </table>
    </div>
  );
};

export default TablePage;
