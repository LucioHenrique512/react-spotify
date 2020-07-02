export const types = {
  UPDATE_CATEGORIES_ARRAY: "UPDATE_CATEGORIES_ARRAY",
};

/**
 *
 * @param {Array} categories
 */
export const updateCategoriesArray = (categories) => ({
  type: types.UPDATE_CATEGORIES_ARRAY,
  payload: categories,
});
