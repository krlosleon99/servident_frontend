import React from 'react'
import { useState } from 'react';
import Alerta from '../components/Alerta';
import axios from 'axios';
import clienteAxios from '../config/axios';


import {useMaterias} from '../hooks/useMaterias';

const CreandoMaterias = () => {

    const [materia, setMateria] = useState('');

    const [alerta, setAlerta] = useState({});

    const { MateriasCreate } = useMaterias();

    const handleSubmit = async e => {
        e.preventDefault();

        // console.log('Mandando formulario');

        if( [materia].includes('') ) {
            setAlerta({ msg: 'Hay campos vacíos', error: true});
            return;
        }

        setAlerta({});

        let data = {nombre: materia};

        MateriasCreate(data).then((res)=>{
            if(res.status === 200 ) {
                console.log(res.data)

                window.location.href = `/materias`;

            } else {
                console.log(res)
            }
        });
    }

    const { msg } = alerta;

  return (
    
    <div className='container mt-20 mx-auto px-5 md:grid md:grid-cols-2 items-center my-auto'>
        <div>
            <h2 className='text-center mb-5 text-xl md:text-4xl'>Registrar Nueva Materia</h2>
        </div>

        <div>

            {msg && <Alerta alerta={alerta} />}

            <form className='flex flex-col gap-5 shadow-md rounded-md' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id='nombre' 
                    name='nombre' 
                    value={materia} 
                    onChange={e => setMateria(e.target.value)}
                    className='p-5 rounded-md' 
                    placeholder='Ingresar nombre de materia' />

                <input type="submit" className='p-3 rounded-md bg-stone-400 text-xl hover:cursor-pointer hover:bg-stone-300 transition-colors' value="Registrar Materia" />
            </form>
        </div>

    </div>
  )
}

export default CreandoMaterias