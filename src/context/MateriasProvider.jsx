import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const MateriasContext = createContext();

export const MateriasProvider = ({children}) => {

    const [materias, setMaterias] = useState([]);
    
    // useEffect(()=> {
    //     const obtenerMaterias = async () => {

    //         try {
    //             const config = {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             }

    //             const { data } = await clienteAxios.get('/materias');

    //             console.log(data);

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     obtenerMaterias();
    // }, [])

    const guardarMateria = async (materia) => {
        try {            
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const {data} = await clienteAxios.post('/materias', materia, config);

            console.log(data)

        } catch (error) {
            console.log(error.response.data.msg);
        }
    }

    return(
        <MateriasContext.Provider
            value={{
                materias,
                guardarMateria
            }}
        >
            {children}
        </MateriasContext.Provider>
    )
}

export default MateriasContext;