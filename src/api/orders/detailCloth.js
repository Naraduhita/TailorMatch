import axios from "axios";
import { BASE_URL } from "../base-url";

export default detailCloth = async ({ user_token, cloth_id, bust, waist, hips, sleeve_length, length, cloth_type }) => {
    try {
        const data = {
            bust,
            waist,
            hips,
            sleeve_length,
            length,
            cloth_type,
        };

        const url = `${BASE_URL}/cloth/${cloth_id}/create/detail`;
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${user_token}`,
            },
        });

        if (response.status === 201) {
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

