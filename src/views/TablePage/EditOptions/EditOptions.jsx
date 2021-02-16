import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../../../context/AlbumProvider";
import "./EditOptions.css";

const EditOptions = ({ album, openHandler }) => {
  const [artistName, setArtist] = useState("");
  const [albumName, setAlbum] = useState("");
  const [rating, setRating] = useState(0);
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

    const userId = "5f90c145b5a8ec412e4307f4";

    const update = await updateAlbumHandler(userId, id, {
      user: "Frod080",
      album: albumName,
      artist: artistName,
      rating: rating,
    });

    if(update){
      openHandler();
    }

    console.log(update);    
  };

  return (
    <div className="edit-full">
      <div className="main-container">
        <div className="edit-container">
          <input
            placeholder={album.artist}
            type="text"
            value={artistName}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            placeholder={album.album}
            type="text"
            value={albumName}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <input
            placeholder={album.rating}
            type="number"
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
