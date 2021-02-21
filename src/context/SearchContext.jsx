import { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = (props) => {

    const [search, setSearch] = useState("");

    return(
        <SearchContext.Provider value={[
            search, 
            setSearch]}
        >
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;