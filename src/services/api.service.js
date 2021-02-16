import TokenService from './token.service';
import axios from 'axios';

const VinylApiService = {

    init: () => {
        axios.defaults.baseURL = process.env.REACT_APP_API_BASE;
    },

    setApiHeaders: () => {
        axios.defaults.headers = {
            'Authorization': `Bearer ${TokenService.getToken()}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    },

    removeApiHeaders: () => {
        axios.defaults.headers.common = {};
    },

    getDataAsync: async () => {
        try {
            // Set Header then make call.
            VinylApiService.init();
            VinylApiService.setApiHeaders();

            const response = await axios.get('/ownedalbums');
            const data = response.data.owned_Albums;
            return data;
        } catch (e) {
            console.log(e.toString());
        }
    },

    searchDataAsync: async () => {
        try {
            //return albums.owned_Albums.filter(album => album.id === input_Id)[0];
            VinylApiService.setApiHeaders();


        } catch (e) {
            console.log(e.toString());
        }
    },

    postDataAsync: async (dataPacket) => {

        // DataPacket
        // "user": "Frod080",
        // "album": "Catch For Us the Foxes",
        // "artist": "MewithoutYou"
        // "rating": 3
        
        try {
            const response = await axios.post('/ownedalbums', dataPacket);
            return response.data;
        } catch (e) {
            console.log(e.toString());
        }
    },

    deleteDataAsync: async () => {
        // Method must be implemented in api.
        try {
            //const response = await axios.delete(`/ownedalbums/${id}`);
            //return response.data;
        } catch (e) {
            console.log(e);
        }
    },

    updateDataAsync: async (userId, albumId, changes) => {
         // DataPacket
        // "user": "Frod080",
        // "album": "Catch For Us the Foxes",
        // "artist": "MewithoutYou"
        // "rating": 3

        var config = {
        method: 'put',
        url: `/ownedalbums/${userId}/${albumId}`,
        data : changes
        };
       await axios(config);
    },

    generalRequestAsync: async (config) => {
        return axios(config);
    }
};

export default VinylApiService;