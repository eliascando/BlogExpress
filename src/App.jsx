/* eslint-disable react-hooks/exhaustive-deps */
import { Rutas } from "./routes/Rutas"
import { useEffect, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";

function App() {

  const [darkMode, setDarkMode] = useState(()=>{
    const darkModeStorage = JSON.parse(localStorage.getItem('darkMode'));
    return darkModeStorage || false;
  });

  useEffect(() => {
    //Guardar el estado del darkMode en localStorage
    cargarModo();
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
  }, [darkMode])

  const cargarModo = () => {
    const linkElement = document.getElementById('styles-link');
    if (darkMode) {
      linkElement.href = './src/Dark.css';
    } else {
      linkElement.href = './src/Light.css';
    }
  };

  return (
    <div className='layout'>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      <Rutas />
      </DarkModeContext.Provider>
    </div>
  )
}
export default App