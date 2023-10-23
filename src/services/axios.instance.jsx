import axios from "axios";

const apiEndPoint = import.meta.env.VITE_BACKEND_URL;
const axiosInstance = axios.create({
    baseURL: apiEndPoint,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000,
    validateStatus: (status) => {
        return status >= 200 && status < 500;
    }
});

export default axiosInstance;