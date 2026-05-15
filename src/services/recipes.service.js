import axios from "redaxios";

const recipeService = {
  getAll: async () => {
    const response = await axios.get("http://localhost:3000/api/recipes");

    return response.data;
  },
};

export default recipeService;
