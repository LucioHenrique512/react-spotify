import { authActions } from "../actions";

const INIT_STATE = {
  accessToken: "",
  erroMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
};

const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case authActions.types.UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default auth;
