import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../../../context/AlbumProvider";
import "./EditOptions.css";

const EditOptions = ({ album, openHandler }) => {
  const [artistName, setArtist] = useState("");
  const [albumName, setAlbum] = useState("");
  const [rating, setRating] = useState("");
  const [
    albums,
    setAlbums,
    selectedAlbum,
    setSelectedAlbum,
    addAlbumHandler,
    deleteAlbumHandler,
    updateAlbumHandler,
  ] = useContext(AlbumContext);

  const albumChangeHandler = async (id) => {
    await updateAlbumHandler(id, {
      artist: artistName,
      album: albumName,
      rating: rating,
    });

    openHandler();
  };

  return (
    <div className="edit-full">
      <div className="main-container">
        <div className="edit-container">
          <input
            placeholder="Edit Artist"
            type="text"
            value={artistName}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            placeholder="Edit Album"
            type="text"
            value={albumName}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <input
            placeholder="Edit Rating"
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="edit-img-container">
          <img src={album.imageUrl} />
        </div>
        <button onClick={() => albumChangeHandler(album.id)}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditOptions;
