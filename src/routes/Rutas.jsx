import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/pages/Inicio';
import { Articulos } from '../components/pages/Articulos';
import { Articulo } from '../components/pages/Articulo';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Busqueda } from '../components/pages/Busqueda';

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/*LAYOUT*/}
            <Header />

            {/*CONTENIDO CENTRAL Y RUTAS*/}
            <section id='content' className="content">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path='/buscar/:busqueda' element={<Busqueda />} />
                    <Route path='/articulo/:id' element={<Articulo />} />
                    <Route path="*" element={<div className='jumbo'><h1>Error 404</h1></div>} />

                </Routes>
            </section>
            {/*FOOTER*/}
            <Footer />
        </BrowserRouter>
    );
};