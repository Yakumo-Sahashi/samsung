import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './views/Home';
import { Especificaciones } from './views/Especificaciones';
import {Accesorios} from './views/Accesorios';
import {S22Ultra} from './views/S22Ultra';
import {S22Plus} from './views/S22Plus';
import {S22} from './views/S22';
import {Facilidades} from './views/Facilidades';
import { Error } from './views/Error';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column justify-content-between">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/especificaciones' element={<Especificaciones/>}/>
          <Route path='/accesorios' element={<Accesorios/>}/>
          <Route path='/S22Ultra' element={<S22Ultra/>}/>
          <Route path='/S22Plus' element={<S22Plus/>}/>
          <Route path='/S22' element={<S22/>}/>
          <Route path='/facilidades' element={<Facilidades/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>    
  );
}
