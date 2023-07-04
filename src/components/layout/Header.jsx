import { NavLink } from "react-router-dom"
import { Nav } from "./Nav"
import { Search } from "./Search"

export const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
          <h1><NavLink to="/" className="navlink">BlogExpress</NavLink></h1>
        </div>
        <Search />
        <Nav />
    </div>
  )
}