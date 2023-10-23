import axiosInstance from "./axios.instance";

const profesorGet = async () => {
    try {
        return await axiosInstance.get('/api/profesores')
    } catch (error) {
        return error;
    }
}

const profesorCreate = async (data) => {
    try {
        return await axiosInstance.post('/api/profesores', data)
    } catch (error) {
        return error;
    }
}

export default { profesorGet, profesorCreate }