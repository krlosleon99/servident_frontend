import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-4">
            <Link to="/materias" className="bg-blue-300 p-4">
                Materias
            </Link>
            <Link to="/profesores" className="bg-green-300 p-4">Profesores</Link>
            <Link to="/aulas" className="bg-yellow-300 p-4">Aulas</Link>
        </div>
        
    </>
  );
};

export default Inicio