import axios from "axios";
import { BASE_URL } from "../base-url";

const createTailor = async ({
  token,
  name,
  description,
  address,
  opening_time,
  closing_time,
}) => {
  try {
    const data = {
      name,
      description,
      address,
      opening_time,
      closing_time,
    };

    const url = `${BASE_URL}/tailor/create`;
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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

export default createTailor;
