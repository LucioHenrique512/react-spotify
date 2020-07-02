import { config } from "../config";
const { spotify } = config;

/**Get authorization data from localstorage */

const getAuthDataForomState = () => {
  let authData = null;
  const localState = JSON.parse(localStorage.getItem("persist:root"));
  if (localState) {
    const { auth } = localState;
    authData = JSON.parse(auth);
  }
  return authData;
};

const authData = getAuthDataForomState();
const api = {
  get: async (path, headers, authorization = null) =>
    await fetch(`${spotify.webAPI}${path}`, {
      method: "get",
      mode: "cors",
      headers: {
        ...headers,
        Authorization: authorization
          ? authorization
          : `${authData.tokenType} ${authData.accessToken}`,
      },
    })
      .then((res) => res)
      .then((res) => res.json())
      .catch((err) => err),
};

export default api;
