import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Aulas = () => {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    getAulas();
  }, []);

  const getAulas = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/aulas`);
    setAulas(res.data);
  };

  // Consultando profesores y materias
  const [profesores, setProfesores] = useState([]);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    // Consulta a la colección de profesores
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profesores`)
      .then((res) => setProfesores(res.data))
      .catch((error) => console.error('Error al obtener profesores:', error));
  
    // Consulta a la colección de materias
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/materias`)
      .then((res) => setMaterias(res.data))
      .catch((error) => console.error('Error al obtener materias:', error));
  }, []);

  return (
    <>
      <div className='container flex justify-center px-5'>
        <Link className='p-5 w-full md:w-auto bg-neutral-200 font-bold rounded-md' to="/crear-aula">Crear Aula</Link>
      </div>

      <div className='container mt-5 flex flex-col items-center'>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-neutral-200">
              <th className="p-2">Tema a Tratar</th>
              <th className="p-2">Profesor</th>
              <th className="p-2">Materia</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {materias.length > 0 && profesores.length > 0 && aulas.map((aula) => (
              <tr key={aula._id} className="bg-white border text-center">
                <td className="p-2">
                  {aula.tema}
                </td>
                <td className="p-2">
                  {profesores.find((profesor) => profesor._id === aula.profesor)?.nombre || 'Nombre no encontrado'}
                </td>
                <td className="p-2">
                  {materias.find((materia) => materia._id === aula.materia)?.nombre || 'Materia no encontrada'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Aulas