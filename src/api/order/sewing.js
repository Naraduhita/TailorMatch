import axios from "axios";
import { BASE_URL } from "../base-url";

const sewing = async (order_id, token) => {
  try {
    console.log("token", token);
    console.log("order id", order_id);
    const url = `${BASE_URL}/order/${order_id}/detail`;
    // const url = `${BASE_URL}/${order_id}/detail`;
    console.log("url", url);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // const url = `http://192.168.43.216:3000/order/${order_id}/detail`;
    // const response = await axios.get(url, config);

    console.log("response sewing");
    // console.log(response);
    console.log(response.data);
    // console.log(response.data.status);

    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
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

export default sewing;
