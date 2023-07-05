import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { DarkModeContext } from "../../../DarkModeContext"

export const Nav = () => {

  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <nav className={`nav ${darkMode?`dark`:`light`}`}>
            <ul>
                <li><NavLink to="/inicio" className={darkMode?`darkNav`:`lightNav`}>Inicio</NavLink></li>
                <li><NavLink to="/articulos" className={darkMode?`darkNav`:`lightNav`}>Articulos</NavLink></li>
            </ul>
    </nav>
  )
}