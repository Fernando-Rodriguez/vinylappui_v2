import { createContext, useContext } from 'react';
import { AlbumProvider } from './AlbumProvider';
import ApiService from "../services/api.service";

const AlbumMethodContext = createContext();

const AlbumMethodProvider = (props) => {

    const [
        albums,
        setAlbums,
    ] = useContext(AlbumProvider);

    const addAlbumHandler = async (album) => {
        if(album !== null){
          try{
            //await ApiService.postDataAsync(album);
            setAlbums([...albums, album]);
          }
          catch(err){
            console.log(err.ToString());
          }
        }
      };
    
      const deleteAlbumHandler = async (id) => {
    
        if(id !== null){
          try{
            //await ApiService.deleteDataAsync(id);
            const filteredAlbums = albums.filter((album) => {
              if (album.id !== id) {
                return album;
              }
            });
            setAlbums(filteredAlbums);
          }
          catch(err){
            console.log(err.ToString());
          }
        }
      };
    
      const updateAlbumHandler = async (userId, id, changes) => {
    
        await ApiService.updateDataAsync(userId, id, changes);
    
        const newList = albums.map((album) => {
          if (album.id === id) {
            album.album = changes.album;
            album.artist = changes.artist;
            album.rating = changes.rating;
          }
          return album;
        });
        
        setAlbums(newList);  
      };

    return(
        <AlbumMethodContext.Provider value={[
            addAlbumHandler,
            deleteAlbumHandler,
            updateAlbumHandler
        ]}>
            {props.children}
        </AlbumMethodContext.Provider>
    )
};

export default AlbumMethodProvider;