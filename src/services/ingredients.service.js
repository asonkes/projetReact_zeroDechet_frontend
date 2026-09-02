import axios from "redaxios";

const ingredientService = {
  getAll: async () => {
    const response = await axios.get("http://localhost:3000/api/ingredients");

    return response.data;
  },

  getByName: async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/ingredients/name/${name}`,
      );

      return response.data;
    } catch (error) {
      if (error.status === 404 || error.response?.status === 404) {
        return null;
      }

      console.error(error);
      return null;
    }
  },

  getPaginated: async (page, limit) => {
    const response = await axios.get(
      `http://localhost:3000/api/ingredients?page=${page}&limit=${limit}`,
    );

    /** data = items, totalPages, page, limit, totalItems */
    return response.data;
  },
};

export default ingredientService;
