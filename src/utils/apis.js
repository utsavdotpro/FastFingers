import Axios from "axios";

const SERVER_URL = "http://localhost:3000/apis/";

function sendRequest(url, request) {
  return Axios.post(url, request);
}

const API = {
  players: {
    login(request) {
      return sendRequest(SERVER_URL + "players/login", request);
    },
    register(request) {
      return sendRequest(SERVER_URL + "players/register", request);
    },
  },
};

export default API;
