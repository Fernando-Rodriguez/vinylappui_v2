import { useState, createContext } from 'react';

export const SelectedAlbumContext = createContext();

const SelectedAlbumProvider = (props) => {

    const [selectedAlbum, setSelectedAlbum] = useState([]);

    return(
        <SelectedAlbumContext.Provider value={[
            selectedAlbum, 
            setSelectedAlbum]}
        >
            {props.children}
        </SelectedAlbumContext.Provider>
    );
};

export default SelectedAlbumProvider;