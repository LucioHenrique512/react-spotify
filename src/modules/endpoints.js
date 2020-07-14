const endpoints = {
  getUser: "/me",
  getCategories: "/browse/categories",
  getPlaylists: (categoryID) =>
    `${endpoints.getCategories}/${categoryID}/playlists`,
  getTracks: (playlistId) => `/playlists/${playlistId}/tracks`,
};

export default endpoints;
