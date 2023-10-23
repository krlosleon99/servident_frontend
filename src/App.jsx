import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InicioLayout from './layout/InicioLayout';
import Inicio from './paginas/Inicio';
import Materias from './paginas/Materias';
import Aulas from './paginas/Aulas';
import Profesores from './paginas/Profesores';
import CreandoMaterias from './paginas/CreandoMaterias';
import CreandoProfesor from './paginas/CreandoProfesor';
import CreandoAula from './paginas/CreandoAula';

import { MateriasProvider } from './context/MateriasProvider';

function App() {

  console.log(import.meta.env.VITE_BACKEND_URL)

  return (
    <BrowserRouter>
      <MateriasProvider>
        <Routes>
          <Route path="/" element={<InicioLayout/>}>
            <Route index element = {<Inicio/>} />
            <Route path="materias" element = {<Materias/>} />
            <Route path="aulas" element = {<Aulas/>} />
            <Route path="profesores" element = {<Profesores/>} />
            <Route path="crear-materia" element = {<CreandoMaterias/>} />
            <Route path="crear-profesor" element = {<CreandoProfesor/>} />
            <Route path="crear-aula" element = {<CreandoAula/>} />
          </Route>
        </Routes>
      </MateriasProvider>
    </BrowserRouter>
  )
}

export default App
