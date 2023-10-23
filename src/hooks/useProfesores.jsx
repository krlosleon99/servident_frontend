import { useCallback } from "react";
import Profesores from "../services/profesores.service";

export const useProfesores = () => {
    const ProfesoresGet = useCallback(()=> {
        return Profesores.profesorGet();
    })

    const ProfesoresCreate = useCallback((data)=> {
        return Profesores.profesorCreate(data);
    })

    return { ProfesoresGet, ProfesoresCreate };
}
