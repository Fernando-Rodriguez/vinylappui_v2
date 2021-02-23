import React, { useContext } from 'react';
import TableRowItem from './TableRowItem';
import './TableRow.css';
import { AlbumContext } from '../../../../context/AlbumProvider';

const TableRow = () => {
  // eslint-disable-next-line no-unused-vars
  const [albums, setAlbums, filteredAlbums] = useContext(AlbumContext);

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
    TableRows()
  );
};

export default TableRow;
