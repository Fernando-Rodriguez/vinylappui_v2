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
            //return albums.owned_Albums;
            const response = await axios.get('/ownedalbums');
            const data = response.data.owned_Albums;
            console.log(response);
            return data;
        } catch (e) {
            console.log(e.toString());
        }
    },

    searchDataAsync: async () => {
        try {
            //return albums.owned_Albums.filter(album => album.id === input_Id)[0];

        } catch (e) {
            console.log(e.toString());
        }
    },

    postDataAsync: async (dataPacket) => {

        // DataPacket
        // "user": "Frod080",
        // "album": "Catch For Us the Foxes",
        // "artist": "MewithoutYou"
        
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

    generalRequestAsync: async (config) => {
        return axios(config);
    }
};

export default VinylApiService;