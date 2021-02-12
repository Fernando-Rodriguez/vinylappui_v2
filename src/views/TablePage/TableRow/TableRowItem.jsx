import React, { useContext, useState } from "react";
import { AlbumContext } from "../../../context/AlbumProvider";
import EditOptions from "../EditOptions/EditOptions";
import "./TableRowItem.css";

const TableRowItem = ({ album }) => {
  const [
    albums,
    setAlbums,
    selectedAlbum,
    setSelectedAlbum,
    addAlbumHandler,
    deleteAlbumHandler,
  ] = useContext(AlbumContext);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr className={isOpen ? "row-container open": "row-container"}>
          <td className="row-item">{album.artist}</td>
          <td className="row-item">{album.album}</td>
          <td className="row-item">{album.rating}</td>
          <td className="row-item">{album.user}</td>
          <td className="row-item">
            <button onClick={openHandler}>Edit</button>
          </td>
          <td className="row-item">
            <button onClick={() => deleteAlbumHandler(album.id)}>Delete</button>
          </td>
      </tr>
      {isOpen && (
        <tr className="row-container">
          <td colspan="6">
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
