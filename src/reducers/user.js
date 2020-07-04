import { userActions } from "../actions";
const { types } = userActions;

const INIT_STATE = {
  email: "",
  erroMessage: "",
  name: "",
  status: "",
  thumb: "",
  userUrl: "",
};

const user = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_USER_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case types.CLEAN_USER_STATE:
      return INIT_STATE;
    default:
      return state;
  }
};

export default user;
