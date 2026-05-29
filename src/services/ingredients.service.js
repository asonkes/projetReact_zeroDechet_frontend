import axios from "redaxios";

const ingredientService = {
  getAll: async () => {
    const response = await axios.get("http://localhost:3000/api/ingredients");

    return response.data;
  },

  getByName: async (name) => {
    const response = await axios.get(
      `http://localhost:3000/api/ingredients/name/${name}`,
    );

    return response.data;
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
