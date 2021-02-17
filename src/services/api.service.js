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
        VinylApiService.init();
        VinylApiService.setApiHeaders();

        try {
            const response = await axios.get('/ownedalbums');
            const data = response.data.owned_Albums;
            return data;

        } catch (e) {
            console.log(e.toString());
        }
    },

    searchDataAsync: async (userId, id) => {
        try {
            VinylApiService.setApiHeaders();

            const response = await axios.get(`/ownedalbums/${userId}/${id}`);

            return response.data;

        } catch (e) {
            console.log(e.toString());
        }
    },

    postDataAsync: async (dataPacket) => {
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

        VinylApiService.init();
        VinylApiService.setApiHeaders();

        console.log(userId);
        console.log(albumId);
        console.log(changes);

        await axios({
            method: 'PUT',
            url:`/ownedalbums/${userId}/${albumId}`, 
            data:changes
        });
    },

    generalRequestAsync: async (config) => {
        return axios(config);
    }
};

export default VinylApiService;