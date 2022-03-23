import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';

import ListaCliente from './components/pages/ListaCLiente';
import OProjeto from './components/pages/OProjeto';
import Container from './components/layout/Container';
import CadastrarCliente from './components/pages/CadastrarCliente';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
        <Container customClass='min-height'>
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/CadastrarCliente" element={<CadastrarCliente/>}/> 
            <Route path= "/ListaCliente" element={<ListaCliente/>}/> 
            <Route path= "/OProjeto" element={<OProjeto/>}/>    
          </Routes>
        </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
