/* eslint-disable no-console */
import axios from 'axios';
import TokenService from './token.service';

const VinylApiService = {

  init: () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE;
  },

  setApiHeaders: () => {
    axios.defaults.headers = {
      Authorization: `Bearer ${TokenService.getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
      return null;
    }
  },

  searchDataAsync: async (userId, id) => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();

    try {
      const response = await axios.get(`/ownedalbums/${userId}/${id}`);
      return response.data;
    } catch (e) {
      console.log(e.toString());
      return null;
    }
  },

  postDataAsync: async (dataPacket) => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();

    try {
      const response = await axios.post('/ownedalbums', dataPacket);
      return response.data;
    } catch (e) {
      console.log(e.toString());
      return null;
    }
  },

  deleteDataAsync: async (id) => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();

    // Method must be implemented in api.
    try {
      await axios.delete(`/ownedalbums/${id}`);
    } catch (e) {
      console.log(e);
    }
  },

  updateDataAsync: async (userId, albumId, changes) => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();

    try {
      await axios({
        method: 'PUT',
        url: `/ownedalbums/${userId}/${albumId}`,
        data: changes,
      });
    } catch (err) {
      console.log(err);
    }
  },

  // returns data in this format. The info to get a user
  // is pulled from the token that is sent in the header.
  // {
  //   "userName": "username",
  //   "userId": "userid"
  // }

  getUserInfo: async () => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();

    try {
      const userResponse = await axios({
        method: 'GET',
        url: '/users',
      });
      return userResponse.data;
    } catch (err) {
      console.log(err.toString());
      return null;
    }
  },

  getGroupData: () => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();
    return [
      {
        groupId: '60735d8a76ad9e7ab661498d',
        groupName: 'Family Group!',
        groupAlbums: [
          {
            id: '60736504b50781aa976978fa',
            user: 'J_110',
            album: 'Catch For Us the Foxes',
            artist: 'MewithoutYou',
            imageUrl:
              'https://i.scdn.co/image/ab67616d0000b2730c7a52516acf1393f6f75b2f',
            rating: 5,
          },
        ],
      },
      {
        groupId: '60735d8a76ad9e7ab61498d',
        groupName: 'Second Group!',
        groupAlbums: [],
      },
    ];
  },

  generalRequestAsync: async (config) => axios(config),
};

export default VinylApiService;
