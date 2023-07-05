import { NavLink } from "react-router-dom"
import { Nav } from "./Nav"
import { Search } from "./Search"
import { useContext } from "react"
import { DarkModeContext } from "../../../DarkModeContext"


export const Header = () => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`header ${darkMode?`dark darkShadow`:`light lightShadow`}`}>
        <div className="logo">
          <h1><NavLink to="/" className={`navlink ${darkMode?`darkNav`:`lightNav`}`}>BlogExpress</NavLink></h1>
        </div>
        <Search />
        <Nav />
    </div>
  )
}