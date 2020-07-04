export const types = {
  UPDATE_USER_STATE: "UPDATE_USER_STATE",
  CLEAN_USER_STATE: "CLEAN_USER_STATE",
};

/**
 *
 * @param {object} userdata
 *
 */
export const updateUser = (userData) => ({
  type: types.UPDATE_USER_STATE,
  payload: { ...userData },
});

export const cleanUserState = () => ({
  type: types.CLEAN_USER_STATE,
});
