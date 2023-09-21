import axios from "axios";

function useFetch() {
  const get = async (url) => {
    try {
      const response = await axios.get(url);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        data: error.message,
      };
    }
  };

  const post = async (url, info) => {
    try {
      const response = await axios.post(url, info);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        data: error.message,
      };
    }
  };

  return { get, post };
}
export { useFetch };
