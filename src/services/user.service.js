import TokenService from './token.service';
import VinylApiService from './api.service';

const UserService = {

  async login(email, password) {
    const requestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${process.env.REACT_APP_API_BASE}/token`,
      data: {
        clientname: email,
        clientsecret: password,
      },
    };

    try {
      // makes the request.
      const response = await VinylApiService.generalRequestAsync(requestData);
      TokenService.saveToken(response.data.access_token);
      // pre-sets the headers with the token for the api calls.
      VinylApiService.setApiHeaders();

      return response.data.access_token;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return null;
    }
  },

  logout() {
    // removes the tokens set when the user logs in.
    TokenService.removeToken();
    VinylApiService.removeApiHeaders();
  },

  async createUser(email, password) {
    const requestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${process.env.REACT_APP_API_BASE}/users/new`,
      data: {
        userName: email,
        userSecret: password,
      },
    };

    try {
      // makes the request.
      await VinylApiService.generalRequestAsync(requestData);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return null;
    }
  },
};

export default UserService;
