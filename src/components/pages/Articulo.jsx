/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { config } from "../../../config";
import { PeticionAPI } from "../../helpers/PeticionAPI";
import { NavLink, useParams } from "react-router-dom";

export const Articulo = () => {
  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Obtener el día
    const day = date.getDate();
  
    // Obtener el mes en el idioma deseado
    const month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date);
  
    // Obtener el año
    const year = date.getFullYear();
  
    return `${day} de ${month} de ${year}`;
  };

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const URL = `${config.API_URL}/articulo/${id}`;
    const { datos } = await PeticionAPI(URL);
    if (datos.status === "success") {
      setArticulo(datos.articulo);
      setCargando(false);
    }
  };

  return (
    <>
      {cargando ? <h1>Cargando...</h1>
        : !articulo ? <h1>No se encontró el articulo</h1>
        : (
          <>
            <div className="jumbo">
              <NavLink to="/articulos" className="boton-volver">Volver</NavLink>
              <img src={`${config.API_URL}/imagen/${articulo.imagen}`} alt="Imagen" style={{width: "100%", height: "50vh", objectFit: "cover"}}/>
              <span>Publicado: {formatDate(articulo.fecha)}</span>
              <h1>{articulo.titulo}</h1>
              <p dangerouslySetInnerHTML={{ __html: articulo.contenido }}></p>
            </div>
          </>
        )
      }
    </>
  );
}