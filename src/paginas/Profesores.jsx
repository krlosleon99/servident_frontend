import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Profesores = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    getProfesores();
  }, []);

  const getProfesores = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profesores`);
    setProfesores(res.data);
  };

  return (
    <>
      <div className='container flex justify-center px-5'>
        <Link className='p-5 w-full md:w-auto bg-neutral-200 font-bold rounded-md' to="/crear-profesor">Crear Profesor</Link>
      </div>

      <div className='container mt-5'>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-neutral-200">
              <th className="p-2">Nombre Profesor</th>
            </tr>
          </thead>
          <tbody>
            {profesores.map((profesor) => (
              <tr key={profesor._id} className="bg-white border text-center">
                <td className="p-2">{profesor.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Profesores