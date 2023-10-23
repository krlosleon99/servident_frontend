import React, { useState, useEffect } from 'react';
import Alerta from '../components/Alerta';
import axios from 'axios';

import { useAulas } from '../hooks/useAulas';

const CreandoAula = () => {
  // Consulta a materias
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    getMaterias();
  }, []);

  const getMaterias = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/materias`);
    setMaterias(res.data);
  };

  // Consulta a profesores
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    getProfesores();
  }, []);

  const getProfesores = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profesores`);
    setProfesores(res.data);
  };

  // Variables de estado para los campos del formulario
  const [tema, setTema] = useState('');
  const [profesor_input, setProfesor] = useState('');
  const [materia_input, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const [alerta, setAlerta] = useState({});

  const { AulasCreate } = useAulas();

  const handleSubmit = async e => {
    e.preventDefault();

    if (tema === '' || profesor_input === '' || materia_input === '' || fecha === '' || hora === '') {
      setAlerta({ msg: 'Hay campos vacíos', error: true });
      return;
    }

    setAlerta({});

    let data = {
      tema: tema,
      profesor: profesor_input,
      materia: materia_input,
      fecha: fecha,
      hora: hora,
    };

    AulasCreate(data).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        window.location.href = `/aulas`;
      } else {
        console.log(res);
      }
    });
  }

  const { msg } = alerta;

  return (
    <div className='container mt-20 mx-auto px-5 md:grid md:grid-cols-2 items-center my-auto'>
      <h2 className='text-center mb-5 text-xl md:text-4xl'>Registrar Nueva Aula</h2>
      <div>
        {msg && <Alerta alerta={alerta} />}
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <input className='p-5 rounded-md' name='tema' type="text" placeholder='Ingresar tema a tratar' onChange={(e) => setTema(e.target.value)} />
          <select className='p-5 rounded-sm' name="profesor_input" onChange={(e) => setProfesor(e.target.value)}>
            <option defaultValue disabled>Seleccionar Profesor</option>
            {profesores.map(profesor => (
              <option key={profesor._id} value={profesor._id}>
                {profesor.nombre}
              </option>
            ))}
          </select>
          <select className='p-5 rounded-sm' name="materia_input" onChange={(e) => setMateria(e.target.value)}>
            <option defaultValue disabled>Seleccionar Materia</option>
            {materias.map(materia => (
              <option key={materia._id} value={materia._id}>
                {materia.nombre}
              </option>
            ))}
          </select>
          <input className='p-5 rounded-md' name='fecha' type="date" onChange={(e) => setFecha(e.target.value)} />
          <input className='p-5 rounded-md' name='hora' type="time" onChange={(e) => setHora(e.target.value)} />
          <input className='p-3 rounded-md bg-stone-400 text-xl hover:cursor-pointer' type="submit" value="Registrar Aula" />
        </form>
      </div>
    </div>
  );
}

export default CreandoAula;
