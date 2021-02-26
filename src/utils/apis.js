import Axios from "axios";

const SERVER_URL = "http://localhost:3000/apis/";

function sendRequest(url, request, headers = {}) {
  return Axios.post(url, request, { headers });
}

const API = {
  players: {
    login(request) {
      return sendRequest(SERVER_URL + "players/login", request);
    },
    register(request) {
      return sendRequest(SERVER_URL + "players/register", request);
    },
    profile(authToken) {
      return sendRequest(
        SERVER_URL + "players/profile",
        {},
        { Authorization: "Bearer " + authToken }
      );
    },
  },
  gameHistory: {
    fetch(authToken) {
      return sendRequest(
        SERVER_URL + "game-history/fetch",
        {},
        { Authorization: "Bearer " + authToken }
      );
    },
    insert(request, authToken) {
      return sendRequest(SERVER_URL + "game-history/insert", request, {
        Authorization: "Bearer " + authToken,
      });
    },
  },
};

export default API;
