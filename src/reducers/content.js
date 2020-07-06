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
    case types.UPDATE_PLAYLIST_ARRAY:
      return {
        ...state,
        playlists: action.payload,
      };
    case types.UPDATE_TRACKS_ARRAY:
      return {
        ...state,
        tracks: action.payload,
      };
    case types.UPDATE_PLAYING_STATE:
      return {
        ...state,
        ...action.payload,
        playerHeight: action.payload?.playingNowId !== null ? 95 : 0,
      };
    case types.UPDATE_PLAYING_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return { ...state };
  }
};

export default content;
