import React from 'react'
import { useState } from 'react';
import Alerta from '../components/Alerta';

import {useProfesores} from '../hooks/useProfesores';

const CreandoProfesor = () => {

  const [profesor, setProfesor] = useState('');

  const [alerta, setAlerta] = useState({});

  const { ProfesoresCreate } = useProfesores();

  const handleSubmit = async e => {
    e.preventDefault();

    // console.log('Mandando formulario');

    if( [profesor].includes('') ) {
        setAlerta({ msg: 'Hay campos vacíos', error: true});
        return;
    }

    setAlerta({});

    let data = {nombre: profesor};

    ProfesoresCreate(data).then((res)=>{
        if(res.status === 200 ) {
            console.log(res.data)

            window.location.href = `/profesores`;

        } else {
            console.log(res)
        }
    });
  }

  const { msg } = alerta;


  return (
    <div className='container mt-20 mx-auto px-5 md:grid md:grid-cols-2 items-center my-auto'>
        <div>
          <h2 className='text-center mb-5 text-xl md:text-4xl'>Registrar Nuevo Profesor</h2>
        </div>

        <div>

          {msg && <Alerta alerta={alerta} />}

          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <input 
                type="text" 
                id='nombre'
                name="nombre"
                value={profesor} 
                onChange={e => setProfesor(e.target.value)}
                className='p-5 rounded-md' 
                placeholder='Ingresar nombre del profesor' />

              <input className='p-3 rounded-md bg-stone-400 text-xl hover:cursor-pointer' type="submit" value="Registrar Profesor" />
          </form>
        </div>

        
    </div>
  )
}

export default CreandoProfesor