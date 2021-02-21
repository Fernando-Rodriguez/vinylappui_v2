const TOKEN_KEY = 'access_token';

const TokenService = {

    getToken() {
        return sessionStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        sessionStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        sessionStorage.removeItem(TOKEN_KEY)
    }
};

export default TokenService;