// import { useContext } from "react";
// import MateriasContext from "../context/MateriasProvider";

// const useMaterias = () => {
//     return useContext(MateriasContext);
// }

// export default useMaterias;

import { useCallback } from "react";
import Materias from "../services/materias.service";

export const useMaterias = () => {
    const MateriasGet = useCallback(()=> {
        return Materias.materiaGet();
    })

    const MateriasCreate = useCallback((data)=> {
        return Materias.materiaCreate(data);
    })

    const MateriasUpdate = useCallback((id, data)=> {
        return Materias.materiaUpdate(id, data);
    })

    const MateriasDelete = useCallback((id)=> {
        return Materias.materiaDelete(id);
    })
    return {MateriasGet, MateriasCreate,MateriasUpdate,MateriasDelete};
}

