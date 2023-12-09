import axios from "axios";
import { BASE_URL } from "../base-url";

const login = async ({ email, password }) => {
  try {
    const data = {
      email,
      password,
    };

    const url = `${BASE_URL}/auth/login`;
    const response = await axios.post(url, data);

    if (response.status === 201) {
      return {
        status: response.status,
        data: response.data.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        console.log(data.message);
        return {
          status: status,
          message: data.message,
        };
      } else if (error.request) {
        console.error("No response received:", error.request);
        return {
          status: 500,
          message: "No response received",
        };
      } else {
        console.error("Error:", error.message);
        return {
          status: 500,
          message: "Something else happened",
        };
      }
    } else {
      console.error("Non-Axios error:", error.message);
      return {
        status: 500,
        message: "Non-Axios error",
      };
    }
  }
};

export default login;
