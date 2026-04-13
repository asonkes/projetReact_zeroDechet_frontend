import axios from "axios";

const ingredientService = {
  getAll: async () => {
    const response = await axios.get("http://localhost:3000/api/ingredients");

    return response.data;
  },
};

export default ingredientService;
