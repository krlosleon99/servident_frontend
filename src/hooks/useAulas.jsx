import { useCallback } from "react";
import Aulas from "../services/aulas.service";

export const useAulas = () => {
    const AulasGet = useCallback(()=> {
        return Aulas.aulaGet();
    })

    const AulasCreate = useCallback((data)=> {
        return Aulas.aulaCreate(data);
    })

    return { AulasGet, AulasCreate };
}
