import axios from "redaxios";

const authService = {
  login: async (credentials) => {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      credentials,
    );

    return response.data;
  },
};

export default authService;
