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
        accessToken: action.payload.accessToken,
        erroMessage: action.payload.erroMessage,
        expirationTime: action.payload.expirationTime,
        expiresIn: action.payload.expiresIn,
        isLogged: action.payload.isLogged,
        tokenType: action.payload.tokenType,
      };
    default:
      return state;
  }
};

export default auth;
