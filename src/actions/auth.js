export const types = {
  UPDATE_AUTH_STATE: "UPDATE_AUTH_STATE",
  CLEAN_AUTH_STATE: "CLEAN_AUTH_STATE",
};

/**
 *
 * @param {object} authData
 *
 */
export const updateAuthState = (authData) => ({
  type: types.UPDATE_AUTH_STATE,
  payload: { ...authData },
});

export const cleanAuthState = () => ({
  type: types.CLEAN_AUTH_STATE,
});
