import { config } from "../config";
const { spotify } = config;

/**Get authorization data from localstorage */
const authData = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).auth
);

const api = {
  get: async (path, headers) =>
    await fetch(`${spotify.webAPI}${path}`, {
      method: "get",
      mode: "cors",
      headers: { ...headers, Authorization: `${authData.tokenType} ${authData.accessToken}` },
    })
      .then((res) => res)
      .then((res)=>res.json())
      .catch((err) => err),
};

export default api;
