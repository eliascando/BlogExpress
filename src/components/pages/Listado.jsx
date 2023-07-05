/* eslint-disable react/prop-types */
import { config } from "../../../config"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DarkModeContext } from "../../../DarkModeContext"

export const Listado = ({articulos}) => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
        {articulos.map((articulo, index) => (
          <article className={`articulo-item ${darkMode?'dark darkShadow':'light lightShadow'}`} key={index}>
            <div className="tarjeta-articulo">
              <Link to={`/articulo/${articulo._id}`} className="link-imagen">
              <div className="mask">
                {articulo.imagen && <img src={`${config.API_URL}/imagen/${articulo.imagen}`} alt="Imagen" headers={{ apikey: config.API_KEY }}/>}
              </div>
              </Link>
              <div className="datos">
                <h3 className="title"><Link to={`/articulo/${articulo._id}`} className={`${darkMode?'darkNav':'lightNav'}`} 
                >{articulo.titulo}</Link></h3>
                <p className="description">{articulo.resumen}</p>
              </div>
            </div>
          </article>
        ))}
    </div>
  )
}
