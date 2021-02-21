import React, { useContext, useState } from "react";
import { AlbumContext } from "../../../context/AlbumProvider";
import "./AddAlbum.css";

const AddAlbum = () => {
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [
    albums,
    setAlbums,
    selectedAlbum,
    setSelectedAlbum,
    addAlbumHandler,
    deleteAlbumHandler,
  ] = useContext(AlbumContext);

  const buttonHandler = async () => {
    await addAlbumHandler({
      artist: artistName,
      album: albumName,
      user: "Frod080",
    });
    console.log(`${artistName} ${albumName}`);
    setArtistName("");
    setAlbumName("");
  };

  return (
    <div className="add-container">
      <div className="add-input-container">
        <input
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <button onClick={buttonHandler}>Add Album!</button>
      </div>
    </div>
  );
};

export default AddAlbum;
