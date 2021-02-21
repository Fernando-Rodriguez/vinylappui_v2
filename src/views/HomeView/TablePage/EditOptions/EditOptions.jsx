import React, { useContext, useState } from "react";
import { AlbumMethodContext } from "../../../context/AlbumContextProvider";
import "./EditOptions.css";

const EditOptions = ({ album, openHandler }) => {
  const [artistName, setArtist] = useState("");
  const [albumName, setAlbum] = useState("");
  const [ratingItem, setRating] = useState(0);
  const [
    addAlbumHandler,
    deleteAlbumHandler,
    updateAlbumHandler,
  ] = useContext(AlbumMethodContext);

  const albumChangeHandler = async (id) => {

    const userId = "5f90c145b5a8ec412e4307f4";

    const album = {
      "user": "Frod080",
      "album": albumName,
      "artist": artistName,
      "rating": parseInt(ratingItem)
    };

    await updateAlbumHandler(userId, id, album);

    openHandler();
  };

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  }

  const handleAlbumChange = (e) => {
    setAlbum(e.target.value);
  }

  const handleRatingChange = (e) => {
    setRating(e.target.value)
  }

  return (
    <div className="edit-full">
      <div className="main-container">
        <div className="edit-container">
          <input
            placeholder={album.artist}
            type="text"
            value={artistName}
            onChange={handleArtistChange}
          />
          <input
            placeholder={album.album}
            type="text"
            value={albumName}
            onChange={handleAlbumChange}
          />
          <input
            placeholder={album.rating}
            type="text"
            value={ratingItem}
            onChange={handleRatingChange}
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
