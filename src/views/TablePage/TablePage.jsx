import React, { useContext, useState } from "react";
import { AlbumContext } from "../../context/AlbumProvider";

import AddAlbum from "./AddAlbum/AddAlbum";
import TableRow from "./TableRow/TableRow";

import "./TablePage.css";

const TablePage = () => {
  const [
    albums,
    setAlbums,
    selectedAlbum,
    setSelectedAlbum,
    addAlbumHandler,
    deleteAlbumHandler,
  ] = useContext(AlbumContext);

  const [addAlbumBool, setAddAlbumBool] = useState(false);

  return (
    <div className="table-container">
        <div 
            className="add-album-button-container" 
            onClick={() => setAddAlbumBool(!addAlbumBool)}>
            <div className={addAlbumBool ? "button-item isActive" : "button-item"}>
                <span>Add Album</span>
                <i className="far fa-plus-square"></i>
            </div>
        </div>
        {addAlbumBool && <AddAlbum className="add-albums" />}
        <table className="table-whole">
            <thead>
            <tr className="table-header-row">
                <th className="table-header-item">Artist</th>
                <th className="table-header-item">Album</th>
                <th className="table-header-item">Rating</th>
                <th className="table-header-item">User</th>
            </tr>
            </thead>
            <TableRow albums={albums} />
        </table>
    </div>
  );
};

export default TablePage;
