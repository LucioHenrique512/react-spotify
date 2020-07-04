const endpoints = {
  getUser: "/me",
  getCategories: "/browse/categories",
  getPlaylists: (categoryID) =>
    `${endpoints.getCategories}/${categoryID}/playlists`,
};

export default endpoints;
