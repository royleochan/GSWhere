import axios from "axios";

const api = axios.create({
  baseURL: "https://tvqa8lc1dl.execute-api.us-east-1.amazonaws.com",
  timeout: 20000,
});

const request = {
  get: (url, settings) => {
    return api.get(url, settings);
  },
  post: (url, data, token) => {
    if (token) {
      return api.post(url, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    }
    return api.post(url, data);
  },
  put: (url, data) => {
    return api.put(url, data);
  },
  delete: (url, token) => {
    return api.delete(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default request;
