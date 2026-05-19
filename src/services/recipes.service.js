import axios from "redaxios";

const recipeService = {
  getAll: async () => {
    const response = await axios.get("http://localhost:3000/api/recipes");

    return response.data;
  },

  getPaginated: async (page, limit) => {
    const response = await axios.get(
      `http://localhost:3000/api/recipes?page=${page}&limit=${limit}`,
    );

    /** data = items, totalPages, page, limit, totalItems */
    return response.data;
  },
};

export default recipeService;
