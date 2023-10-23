import axiosInstance from "./axios.instance";

const aulaGet = async () => {
    try {
        return await axiosInstance.get('/api/aulas')
    } catch (error) {
        return error;
    }
}

const aulaCreate = async (data) => {
    try {
        return await axiosInstance.post('/api/aulas', data)
    } catch (error) {
        return error;
    }
}

export default { aulaGet, aulaCreate }