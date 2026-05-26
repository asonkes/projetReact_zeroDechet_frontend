import axios from "redaxios";

const recipeService = {
  getAll: async () => {
    // FORMATEUR : Envoyer les données sous forme de parametre query
    const response = await axios.get("http://localhost:3000/api/recipes", {
      params: {},
    });

    return response.data;
  },

  getBySlug: async (slug) => {
    const response = await axios.get(
      `http://localhost:3000/api/recipes/${slug}`,
    );

    return response.data;
  },
};

export default recipeService;
