import { types } from "../actions/content";

const INIT_STATE = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: "idle",
  errorMessage: "",
};

const content = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_CATEGORIES_ARRAY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return { ...state };
  }
};

export default content;
