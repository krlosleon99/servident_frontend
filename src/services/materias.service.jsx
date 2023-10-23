import axiosInstance from "./axios.instance";

const materiaGet = async () => {
    try {
        return await axiosInstance.get('/api/materias')
    } catch (error) {
        return error;
    }
}

const materiaCreate = async (data) => {
    try {
        return await axiosInstance.post('/api/materias', data)
    } catch (error) {
        return error;
    }
}

const materiaUpdate = async (id, data) => {
    try {
        return await axiosInstance.put('/api/materias/'+id, data)
    } catch (error) {
        return error;
    }
}

const materiaDelete = async (id) => {
    try {
        return await axiosInstance.delete('/api/materias/'+id)
    } catch (error) {
        return error;
    }
}

export default { materiaGet, materiaCreate, materiaUpdate, materiaDelete}