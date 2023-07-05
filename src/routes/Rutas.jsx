/* eslint-disable react/no-unknown-property */
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/pages/Inicio';
import { Articulos } from '../components/pages/Articulos';
import { Articulo } from '../components/pages/Articulo';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Busqueda } from '../components/pages/Busqueda';
import { useContext, useEffect } from "react"
import { DarkModeContext } from "./../../DarkModeContext"

export const Rutas = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const ruta = window.location.pathname;
        const arrowUpDiv = document.querySelector(".arrow-up-div");
        if (ruta.startsWith("/articulo/") && scrollTop > 100) {
            arrowUpDiv.style.display = "block";
        }
        if (ruta.startsWith("/articulo/") && scrollTop === 0) {
            arrowUpDiv.style.display = "none";
        }
    };

    return (
        <BrowserRouter>
            {/*LAYOUT*/}
            <Header />

            {/*CONTENIDO CENTRAL Y RUTAS*/}
            <section id='content' className={`content ${darkMode?`dark`:`light`}`} >
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

            {/*BOTONES FIJOS*/}
            <div className="dark-mode-div fixed-bottom-div">
                <button onClick={()=>{setDarkMode(!darkMode)}} className="dark-mode-button">{darkMode ? (<i className="bi bi-moon-stars-fill"></i>) : (<i class="bi bi-brightness-high-fill"></i>)}</button>
            </div>
            <div className="arrow-up-div fixed-bottom-div">
                <button onClick={()=>{scrollToTop()}} className="arrow-up-button">{<i className="bi bi-arrow-up"></i>}</button>
            </div>
        </BrowserRouter>
    );
};