import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Materias = () => {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    getMaterias();
  }, []);

  const getMaterias = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/materias`);
    setMaterias(res.data);
  };

  return (
    <>
      <div className='container flex justify-center px-5'>
        <Link className='p-5 w-full md:w-auto bg-neutral-200 font-bold rounded-md' to="/crear-materia">Crear Materia</Link>
      </div>

      <div className='container mt-5'>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-neutral-200">
              <th className="p-2">Nombre Materia</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia) => (
              <tr key={materia._id} className="bg-white border text-center">
                <td className="p-2">{materia.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Materias;