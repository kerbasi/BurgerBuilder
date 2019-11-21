import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger1-f5e25.firebaseio.com/"
});

export default instance;
