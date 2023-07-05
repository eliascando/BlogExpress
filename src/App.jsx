/* eslint-disable react-hooks/exhaustive-deps */
import { Rutas } from "./routes/Rutas"
import { useEffect, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(()=>{
    const darkModeStorage = JSON.parse(localStorage.getItem('darkMode'));
    return darkModeStorage || false;
  });

  useEffect(() => {
    //Guardar el estado del darkMode en localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
  }, [darkMode])

  return (
    <div className={`layout ${darkMode?`dark`:`light`}`}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      <Rutas />
      </DarkModeContext.Provider>
    </div>
  )
}
export default App