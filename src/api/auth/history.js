import axios from "axios";

const history = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1YjAyMTgxLTRlYjYtNDcwYi04ZjVjLWQ2MTQyZTI3MDU0NiIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAxMDEyNDczLCJleHAiOjE3MDEwMTQyNzN9.BAeWUHWzXVfMn9t8pPr216Lbe7lyAOwO5jaiwMhGsa8`,
      },
    };

    const url = "http://192.168.43.216:3000/order/all";
    const response = await axios.get(url, config);

    console.log("response");
    console.log(response);
    console.log(response.data);
    console.log(response.data.data[0].state);

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

export default history;
