import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const InicioLayout = () => {
  return (
    <>
        <div className="container mx-auto md:grid grid-cols-2 p-6 mb-5">

            <div className='flex justify-center mb-5 md:justify-start md:mb-0'>
                <Link to="/"><h1 className="text-indigo-600 font-black text-4xl">Academy</h1></Link>
            </div>

            <nav className="flex gap-10 justify-center text-xl items-center">
            <Link to="/">Inicio</Link>
            <Link to="/materias">Materias</Link>
            <Link to="/profesores">Profesores</Link>
            <Link to="/aulas">Aulas</Link>
            </nav>

        </div>

        <main className='container mx-auto'>
            <Outlet />
        </main>

    </>
  )
}

export default InicioLayout