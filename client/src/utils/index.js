import axios from "axios";

const serverUrl = "http://localhost:5300/";

export const customFetch = axios.create({
  baseURL: serverUrl,
});
