import React, { createContext, useState } from 'react';

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {

    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState([]);

    return(
        <AlbumContext.Provider value={[albums, setAlbums, selectedAlbum, setSelectedAlbum]}>
            {props.children}
        </AlbumContext.Provider>
    );
}

export default AlbumProvider;