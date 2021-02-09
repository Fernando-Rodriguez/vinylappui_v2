import TokenService from "./token.service";
import VinylApiService  from "./vinylApiService";

const UserService = {

    login: async function(email, password){
        const requestData = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${process.env.REACT_APP_API_BASE}/token`,
            data: {
                clientname: email,
                clientsecret: password
            }
        };

        try {
            //makes the request.
            const response = await VinylApiService.generalRequestAsync(requestData);

            TokenService.saveToken(response.data.access_token);
            //pre-sets the headers with the token for the api calls.
            VinylApiService.setApiHeaders();

            return response.data.access_token;

        } catch (e) {
            console.log(e);
        }
    },

    logout: function(){
        //removes the tokens set when the user logs in.
        TokenService.removeToken();
        VinylApiService.removeApiHeaders();
    }
};

export default UserService;