import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-bb694-default-rtdb.firebaseio.com";

export default instance;