import axios from "axios";
import { BASE_URL } from "../base-url";

const updatePayment = async (
  token,
  payment_id,
  payment_method_id,
  order_id,
) => {
  try {
    const url = `${BASE_URL}/payment/${payment_id}/method/${payment_method_id}/order/${order_id}`;
    const response = await axios.patch(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

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

export default updatePayment;
