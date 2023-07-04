/* eslint-disable react/prop-types */
import { config } from "../../../config"
import { Link } from "react-router-dom"

export const Listado = ({articulos}) => {

  return (
    <div>
        {articulos.map((articulo, index) => (
          <article className="articulo-item" key={index}>
            <div className="mask">
              {articulo.imagen && <img src={`${config.API_URL}/imagen/${articulo.imagen}`} alt="Imagen"/>}
            </div>
            <div className="datos">
              <h3 className="title"><Link to={`/articulo/${articulo._id}`}>{articulo.titulo}</Link></h3>
              <p className="description">{articulo.resumen}</p>
            </div>
          </article>
        ))}
    </div>
  )
}
