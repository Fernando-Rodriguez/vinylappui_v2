import React, { useContext } from 'react';
import TableRowItem from './TableRowItem';
import './TableRow.css';
import { AlbumContext } from '../../../context/AlbumProvider';

const TableRow = ({albumsInput}) => {

    const [
        albums,
        setAlbums,
        selectedAlbum,
        setSelectedAlbum,
        addAlbumHandler,
        deleteAlbumHandler,
        updateAlbumHandler,
        filteredAlbums,
        setSearch,
      ] = useContext(AlbumContext);

    const TableRows = () => {

        const newAlbums = filteredAlbums();

        if(albums !== undefined){
            return(
                <tbody className="table-row-body">
                    {newAlbums.map((album) => {
                        return(
                           <TableRowItem key={album.id} album={album}/> 
                        );
                    })}
                </tbody>
            );
        }
        else{
            return (
                <div>Loading...</div>
            );
        }
    };

    return (
        TableRows()
    );

};

export default TableRow;