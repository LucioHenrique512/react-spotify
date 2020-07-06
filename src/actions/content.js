export const types = {
  UPDATE_CATEGORIES_ARRAY: "UPDATE_CATEGORIES_ARRAY",
  UPDATE_PLAYLIST_ARRAY: "UPDATE_PLAYLIST_ARRAY",
  UPDATE_TRACKS_ARRAY: "UPDATE_TRACKS_ARRAY",
  UPDATE_PLAYING_STATE: "UPDATE_PLAYING_STATE",
  UPDATE_PLAYING_STATUS: "UPDATE_PLAYING_STATUS",
};

/**
 *
 * @param {Array} categories
 */
export const updateCategoriesArray = (categories) => ({
  type: types.UPDATE_CATEGORIES_ARRAY,
  payload: categories,
});

export const updatePlaylistArray = (playlists) => ({
  type: types.UPDATE_PLAYLIST_ARRAY,
  payload: playlists,
});

export const updateTracksArray = (tracks) => ({
  type: types.UPDATE_TRACKS_ARRAY,
  payload: tracks,
});

export const updatePlayingState = (
  playingNowId = null,
  playingNowTrack = null,
  status = "idle"
) => ({
  type: types.UPDATE_PLAYING_STATE,
  payload: { playingNowId, playingNowTrack, status },
});

export const updatePlayingStatus = (status = "idle") => ({
  type: types.UPDATE_PLAYING_STATUS,
  payload: status,
});
