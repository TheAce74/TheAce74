import { getErrorMessage } from "@/utils/functions";
import axios from "axios";

function useFetch() {
  const get = async (url: string) => {
    try {
      const response = await axios.get(url);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        data: getErrorMessage(error),
      };
    }
  };

  const post = async (
    url: string,
    payload: {
      name: string;
      email: string;
      phone: string;
      budget: string;
      message: string;
    }
  ) => {
    try {
      const response = await axios.post(url, payload);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        data: getErrorMessage(error),
      };
    }
  };

  return { get, post };
}
export { useFetch };
