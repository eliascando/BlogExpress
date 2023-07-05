import { useNavigate } from 'react-router-dom';
import { useContext } from "react"
import { DarkModeContext } from "../../../DarkModeContext"

export const Search = () => {

  const navegar = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const buscarArticulo = (e) => {
    e.preventDefault();
    let busqueda =e.target.value;
    navegar(`/buscar/${busqueda}`, { replace: true });
    if(busqueda === ""){
      navegar(`/articulos`, { replace: true });
    }
  }


  return (
    <div className="search">
        <form>
            <input type="text" name="search_field" id={darkMode?'darkSearchField':'lightSearchField'} placeholder="Buscar articulo..." autoComplete='off' onChange={buscarArticulo}/>
        </form>
    </div>
  )
}