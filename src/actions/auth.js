export const types = {
  UPDATE_AUTH_STATE: "UPDATE_AUTH_STATE",
};

/**
 * 
 * @param {string} accessToken 
 * @param {string} erroMessage 
 * @param {string} expirationTime 
 * @param {string} expiresIn 
 * @param {boolean} isLogged 
 * @param {string} tokenType 
 */
export const updateAuthState = (
  accessToken = "",
  erroMessage = "",
  expirationTime = "",
  expiresIn = "",
  isLogged = false,
  tokenType = ""
) => ({
  type: types.UPDATE_AUTH_STATE,
  payload: {
    accessToken,
    erroMessage,
    expirationTime,
    expiresIn,
    isLogged,
    tokenType,
  },
});
