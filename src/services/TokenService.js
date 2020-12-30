import Config from "../Config/Config";

export default {
    saveAuthToken(token) {
        window.localStorage.setItem(Config.TOKEN_KEY, token);
    },
    getAuthToken() {
        return window.localStorage.getItem(Config.TOKEN_KEY);
    },
    hasAuthToken() {
        return window.localStorage.getItem(Config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.localStorage.removeItem(Config.TOKEN_KEY);
    },
};